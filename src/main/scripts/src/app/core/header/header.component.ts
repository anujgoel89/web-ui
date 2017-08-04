/*
 * -----------------------------------------------------------------------\
 * Lumeer
 *
 * Copyright (C) since 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * -----------------------------------------------------------------------/
 */

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

import {WorkspaceService} from '../workspace.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'toggleOptions($event)'
  },
  animations: [
    trigger('animateHeight', [
      state('in', style({height: '*'})),
      transition('void => *', [
        animate(100, keyframes([
          style({height: 0, offset: 0}),
          style({height: '*', offset: 1})
        ]))
      ]),
      transition('* => void', [
        animate(100, keyframes([
          style({height: '*', offset: 0}),
          style({height: 0, offset: 1})
        ]))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('profile')
  private profile: ElementRef;

  public optionsVisible = false;
  public licence = 'trial';

  public pageWithoutSearchBox = true;

  constructor(private activatedRoute: ActivatedRoute,
              public workspaceService: WorkspaceService) {
  }

  public ngOnInit() {
    this.activatedRoute.url.subscribe((urlSegment: UrlSegment[]) => {
      this.pageWithoutSearchBox = urlSegment[0].path.startsWith('workspace');
    });
  }

  public isSearchBoxShown(): boolean {
    return this.workspaceService.isWorkspaceSet() && !this.pageWithoutSearchBox;
  }

  public toggleOptions(event: MouseEvent) {
    // profile click
    if (this.profile.nativeElement === event.target) {
      this.optionsVisible = !this.optionsVisible;
      return;
    }

    // click outside options
    if (!this.profile.nativeElement.contains(event.target)) {
      this.optionsVisible = false;
    }
  }
}