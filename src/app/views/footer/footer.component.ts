import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public appVersion: string = '';
  public appDate: string = "";

  constructor() { }

  ngOnInit() {
    const { version: appVersion } = require('../../../../package.json');
    const { date: appDate } = require('../../../../package.json');
    this.appDate = appDate;
    this.appVersion = appVersion;
  }

  public getAppInfo(): string {
    return `v${this.appVersion} - ${this.appDate}`;
  }
}