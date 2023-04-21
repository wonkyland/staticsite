import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { StaticSiteDefault } from 'src/app/models/StaticSiteDefault';

import Content from '../../../assets/content.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private markdownService: MarkdownService) { }

  public markdownPaths = [ StaticSiteDefault.HomeSource ];

  ngOnInit() {
    console.log(`Init content`);

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params['f']) {
        const folder = params['f'];
        const tag = params['t'];
        console.log(`Request folder:'${folder}' tag:'${tag}'`);
        const contentFolder = Content.find(c => StaticSiteDefault.cononicalizeUrl(c.folder) === StaticSiteDefault.cononicalizeUrl(folder));
        if (contentFolder?.files) {
          const files = Array.from(contentFolder.files);
          console.log(files);
          let contentFilesWithTag = files; // All files
          if (tag !== "") { // If there is a tag we filter on the tag, if there is no tag we return all files
            contentFilesWithTag = files.filter(file => {
              const tags = file.tags.map(t => StaticSiteDefault.cononicalizeUrl(t));
              return tags.includes(StaticSiteDefault.cononicalizeUrl(tag));
            });
          }
          console.log(contentFilesWithTag);
          if (contentFilesWithTag && contentFilesWithTag.length > 0) {
            this.markdownPaths = contentFilesWithTag.map(f => f.path);
          }  
        }
      }
    });

    // this.markdownService.renderer.heading = (text: string, level: number) => {
    //   // console.log(`Level: ${level} Code: ${text}`);
    //   if (level === 6) {
    //     return '';
    //   }

    //   return `<h${level}>${text}</h${level}>`;
    // };

    this.markdownService.renderer.image = (href: string, title: string, text: string) => {
      console.log(`href:${href} title:${title} text:${text}`);
      const newHref = href.replace('..', 'assets');

      return `<img src="${newHref}">`;
    }

    this.markdownService.renderer.link = (href: string, title: string, text: string) => {
      console.log(`href:${href} title:${title} text:${text}`);
      const titleHtml = title ? ` title="${title}"` : ``;
      
      return `<a href="${href}" target="_blank" ${titleHtml}>${text}</a>`;
    }

  }
}