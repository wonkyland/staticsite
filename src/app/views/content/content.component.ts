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

  public markdownPaths = [ StaticSiteDefault.HomeSource ];

  ngOnInit() {
    console.log(`onInit`);

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        // The route is content/:folder/:tag
        if (val?.state?.root?.firstChild?.params['folder'] && val?.state?.root?.firstChild?.params['tag']) {
          const folder = val.state.root.firstChild.params['folder'];
          const tag = val.state.root.firstChild.params['tag'];
          console.log(`Folder: '${folder}' Tag: '${tag}'`);
          const contentFolder = Content.find(c => c.folder === folder);
          if (contentFolder?.files) {
            const files = Array.from(contentFolder.files);
            console.log(files);
            let contentFilesWithTag = files; // All files
            if (tag !== "[all]") {
              contentFilesWithTag = files.filter(file => {
                const tags = Array.from(file.tags);
                return tags.includes(tag);
              });
            }
            console.log(contentFilesWithTag);
            if (contentFilesWithTag && contentFilesWithTag.length > 0) {
              this.markdownPaths = contentFilesWithTag.map(f => f.path);
            }  
          }
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