import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized, Params, ParamMap } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { StaticSiteDefault } from 'src/app/models/StaticSiteDefault';

import Content from '../../../assets/content.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private markdownService: MarkdownService) { }

  public markdownSource = StaticSiteDefault.HomeSource;

  ngOnInit() {
    console.log(`onInit`);

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        if (val?.state?.root?.firstChild?.params['folder'] && val?.state?.root?.firstChild?.params['title']) {
          const folder = val.state.root.firstChild.params['folder'];
          const title = val.state.root.firstChild.params['title'];
          const contentFolder = Content.find(c => c.folder === folder);
          const contentPage = contentFolder?.pages.find(p => p.title === title);
          this.markdownSource = contentPage?.file ?? StaticSiteDefault.HomeSource;
        }
      }
   });

    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   if (params['page']) {
    //     this.markdownSource = params['page'];
    //   } else {
    //     this.markdownSource = HomeSource;
    //   }
    // });

    this.markdownService.renderer.heading = (text: string, level: number) => {
      // console.log(`Level: ${level} Code: ${text}`);
      if (level === 6) {
        return '';
      }
      return `<h${level}>${text}</h${level}>`;
    };
  }

}