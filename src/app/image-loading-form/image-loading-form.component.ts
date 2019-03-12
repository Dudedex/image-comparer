import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ImageDetails} from '../classes/image-details';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';

@Component({
  selector: 'app-image-loading-form',
  templateUrl: './image-loading-form.component.html',
  styleUrls: ['./image-loading-form.component.css']
})
export class ImageLoadingFormComponent implements OnInit, OnChanges {

  public formatX = 16;
  public formatY = 9;

  @Output()
  public imageChanged = new EventEmitter();

  @Input()
  public leftImage: ImageDetails;

  @Input()
  public rightImage: ImageDetails;

  constructor() {
  }

  ngOnInit() {
    this.imageChanged.emit();
    this.saveFormat();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.imageChanged.emit();
  }

  public saveFormat() {
    this.leftImage.format = this.formatX / this.formatY;
    this.rightImage.format = this.formatX / this.formatY;
  }
}
