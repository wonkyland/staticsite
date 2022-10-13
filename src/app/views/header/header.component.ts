import { Component, OnInit } from '@angular/core';

import { MenuDto } from '../../models/MenuDto';

import Menu from '../../../assets/menu.json';
import Content from '../../../assets/content.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuItems: MenuDto.MenuItem[] = Menu;

  constructor() { }

  ngOnInit() {
  }

  private getContent(folder: string, title: string) {

  }
  
  public getRounterLink(menuItem : MenuDto.MenuItem) {
    let returnValue = [ 'content', 'pages', 'Home']; // Home page

    switch (menuItem.type) {
      case "content":
        returnValue = [ "content", menuItem.folder, menuItem.title ];
        break;
      default:
        break;
    }

    return returnValue;
  }
}