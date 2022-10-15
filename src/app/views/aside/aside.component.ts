import { Component, OnInit } from '@angular/core';
import { NavigationDto } from 'src/app/models/NavigationDto';
import { StaticSiteDefault } from 'src/app/models/StaticSiteDefault';
import Aside from '../../../assets/aside.json';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  public asideGroups: NavigationDto.AsideGroup[] = Aside;

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