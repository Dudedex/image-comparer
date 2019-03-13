import { NgModule } from '@angular/core';
import { ImageComparerLibComponent } from './image-comparer-lib.component';
import {FormsModule} from '@angular/forms';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ResizableDirective, ResizableModule} from 'angular-resizable-element';
import {BrowserModule} from '@angular/platform-browser';
import {ImageCropperComponent} from './image-cropper/image-cropper.component';
import {ImageContainerPanelComponent} from './image-container-panel/image-container-panel.component';
import {ImageLoadingFormComponent} from './image-loading-form/image-loading-form.component';
import {TranslateModule} from '@ngx-translate/core';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    ImageComparerLibComponent,
    ImageCropperComponent,
    ImageContainerPanelComponent,
    ImageLoadingFormComponent
  ],
  imports: [
    BrowserModule,
    ResizableModule,
    FormsModule,
    ImageCropperModule,
    TranslateModule.forRoot()
  ],
  providers: [
    ResizableDirective
  ],
  exports: [ImageComparerLibComponent]
})
export class ImageComparerLibModule { }
