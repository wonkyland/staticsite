import { Component, OnInit } from '@angular/core';

import { NavigationDto } from '../../models/NavigationDto';

import Menu from '../../../assets/menu.json';
import { StaticSiteDefault } from 'src/app/models/StaticSiteDefault';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: NavigationDto.MenuItem[] = Menu;

  constructor() { }

  ngOnInit() {
  }

  public getRounterLink(menuItem : NavigationDto.MenuItem) {
    let returnValue = [ StaticSiteDefault.TopLevelRouteParameter ];

    return returnValue;
  }

  public getQueryParams(menuItem : NavigationDto.MenuItem) {
    let returnValue = { f: StaticSiteDefault.cononicalizeUrl(menuItem.folder), t: StaticSiteDefault.cononicalizeUrl(menuItem.tag) };

    return returnValue;
  }

}