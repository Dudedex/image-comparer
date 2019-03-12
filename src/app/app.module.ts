import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ResizableDirective, ResizableModule} from 'angular-resizable-element';
import * as $ from 'jquery';
import { ImageContainerPanelComponent } from './image-container-panel/image-container-panel.component';
import { ImageLoadingFormComponent } from './image-loading-form/image-loading-form.component';
import {FormsModule} from '@angular/forms';
import {ImageCropperModule} from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerPanelComponent,
    ImageLoadingFormComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    ResizableModule,
    FormsModule,
    ImageCropperModule
  ],
  providers: [ResizableDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
