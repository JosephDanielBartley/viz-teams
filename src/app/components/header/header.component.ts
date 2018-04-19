import { Component, OnInit } from '@angular/core';
import { PersonParserService } from '../../services/person-parser.service';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'app';
  valid = '';
  validation = '';

  constructor(
    private personParserService: PersonParserService,
    private personService: PersonService,
    private router: Router) {}

  ngOnInit() {
  }

  checkExtension (val) {
    const fileList = val.srcElement.files;
    const fileName = fileList[0].name.split('.');
    const extension = fileName[1];
    if (extension === 'csv') {
      this.valid = 'Valid';
      this.validation = 'green';
      confirm('Importing will delete current data. Are you sure?');
      this.importCsv(val);
      (< HTMLInputElement > document.getElementById('srcfile')).value = null;
    } else {
      this.valid = 'Invalid';
      this.validation = 'red';
    }
  }

  importCsv(val) {
    const file = new Blob (val.srcElement.files);
    this.personParserService.parsecsv(file);
  }

  exportCsv() {
    this.personParserService.unparseIntoFile();
  }

  templateCsv() {
    const fileText = 'Firstname, Lastname, Position, Team' + '\n';
    this.downloadTemplate(fileText);
  }

  openUpload(): void {
    if (this.detectIE()) {
      document.getElementById('srcfile').click();
    }
  }

  detectIE() {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }

  downloadTemplate(data: any) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'VizTeamsTemplate.csv';
    anchor.href = url;
    anchor.click();
  }

  home(): void {
    this.router.navigateByUrl('/');
  }
}
