import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ImageDetails} from '../classes/image-details';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  private imageChangedEvent: any = '';
  public showCropper;

  @ViewChild('cropper') imageCropper: ImageCropperComponent;

  @ViewChild('upload') uploadButton: ElementRef;

  @Input()
  public image: ImageDetails;

  @Input()
  public format: number;

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
    console.log(event);
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
