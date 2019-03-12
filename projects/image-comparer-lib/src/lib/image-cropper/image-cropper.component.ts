import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ImageDetails} from '../classes/image-details';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  public imageChangedEvent: any = '';
  public showCropper;

  @ViewChild('cropper') imageCropper: ImageCropperComponent;

  @ViewChild('upload') uploadButton: ElementRef;

  @Input()
  public image: ImageDetails;

  @Input()
  public format: number;

  @Output()
  public imageChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public clickUpload() {
    this.uploadButton.nativeElement.click();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.image.image = event.base64;
    this.imageChanged.emit();
  }

  imageLoaded() {
    this.showCropper = true;
  }

  cropperReady() {
  }

  loadImageFailed() {
  }

  rotateLeft() {
    this.imageCropper.rotateLeft();
  }

  rotateRight() {
    this.imageCropper.rotateRight();
  }

  flipHorizontal() {
    this.imageCropper.flipHorizontal();
  }

  flipVertical() {
    this.imageCropper.flipVertical();
  }

}
