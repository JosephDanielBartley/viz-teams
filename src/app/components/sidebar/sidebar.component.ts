import {Component, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {PersonService} from '../../services/person.service';
import {Team} from '../../models/team';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  people: Person[] = [];
  isAdding = false;
  person: Person = new Person('', '', '', '', '', null, null, null, null, null, null, null, null);
  canSubmit = false;
  team: Team;

  constructor(
    private personService: PersonService,
    private router: Router) {
  }

  ngOnInit() {
    this.personService.getMembers().subscribe(x => this.people = x);
  }

  startAdding() {
    this.isAdding = true;
  }

  stopAdding() {
    this.isAdding = false;
    this.clearFields();
  }

  finishAdding() {
    this.personService.addPerson(this.person.firstName, this.person.lastName, this.person.position, null);
    this.stopAdding();
  }

  clearFields() {
    this.person = new Person('', '', '', '', '', null, null, null, null, null, null, null, null);
    this.canSubmit = false;
  }

  validatePerson() {
    this.person.firstName.trim() !== ''
    && this.person.lastName.trim() !== ''
    && this.person.position.trim() !== ''
      ? this.canSubmit = true : this.canSubmit = false;
  }

  isDisabled() {
    return !this.canSubmit;
  }

  onDrop(person: Person, freeAgents) {
    this.personService.addToTeam(person, freeAgents);
  }

  edit(person: Person) {
    this.router.navigateByUrl('/edit/' + person.id);
  }

  removePerson(person: Person) {
    const personToDelete = person.firstName + ' ' + person.lastName;
    if (confirm('Are you sure you want to delete ' + personToDelete + '?')) {
      this.personService.deletePerson(person.id);
    }
  }
}
