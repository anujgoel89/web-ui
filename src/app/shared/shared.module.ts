/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommentsComponent} from './comments/comments.component';
import {DragAndDropModule} from './drag-and-drop/drag-and-drop.module';
import {LinksComponent} from './links/links.component';
import {ModalDialogComponent} from './modal-dialog/modal-dialog.component';

import {PermissionsComponent} from './permissions/permissions.component';
import {PermissionsTableComponent} from './permissions/table/permissions-table.component';
import {PerspectiveDirective} from './perspective.directive';
import {PickerModule} from './picker/picker.module';
import {PostItCollectionsComponent} from './post-it-collections/post-it-collections.component';
import {SearchBoxModule} from './search-box/search-box.module';
import {SizeSliderComponent} from './slider/size-slider.component';
import {LayoutItem} from './utils/layout/layout-item.directive';
import {PostItCollectionNameComponent} from './post-it-collections/collection-name/post-it-collection-name.component';
import {InputBoxComponent} from "./input/input-box/input-box.component";
import {FilterBoxComponent} from "./input/filter-box/filter-box.component";
import {TagComponent} from "./tag/tag.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PickerModule,
    DragAndDropModule,
    SearchBoxModule
  ],
  declarations: [
    PermissionsComponent,
    PermissionsTableComponent,
    PostItCollectionsComponent,
    PostItCollectionNameComponent,
    SizeSliderComponent,
    CommentsComponent,
    LinksComponent,
    PerspectiveDirective,
    LayoutItem,
    ModalDialogComponent,
    InputBoxComponent,
    FilterBoxComponent,
    TagComponent
  ],
  exports: [
    CommonModule,
    DragAndDropModule,
    FormsModule,
    PermissionsComponent,
    PostItCollectionsComponent,
    SizeSliderComponent,
    CommentsComponent,
    LinksComponent,
    PerspectiveDirective,
    SearchBoxModule,
    ModalDialogComponent,
    InputBoxComponent,
    FilterBoxComponent,
    TagComponent
  ]
})
export class SharedModule {

}
