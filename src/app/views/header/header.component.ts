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
    let returnValue = [ StaticSiteDefault.TopLevelRouteParameter, menuItem.folder, menuItem.tag ];

    return returnValue;
  }
}