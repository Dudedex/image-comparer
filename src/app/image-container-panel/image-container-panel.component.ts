import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ImageDetails} from '../classes/image-details';

@Component({
  selector: 'app-image-container-panel',
  templateUrl: './image-container-panel.component.html',
  styleUrls: ['./image-container-panel.component.css']
})
export class ImageContainerPanelComponent implements OnInit, OnChanges {
  public mainFramWidth;
  public leftContainerWidth;
  public rightContainerWidth;
  public leftImage: ImageDetails;
  public rightImage: ImageDetails;

  constructor() { }

  ngOnInit() {
    this.initWidth();
    this.leftImage = new ImageDetails();
    this.leftImage.type = 'left';
    this.rightImage = new ImageDetails();
    this.rightImage.type = 'right';
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public initWidth() {
    this.mainFramWidth = $('#main-frame').width();
    this.leftContainerWidth = this.mainFramWidth / 2 - 2;
    this.rightContainerWidth = this.mainFramWidth;
  }

  public onResizeEnd(event: any) {
    this.leftContainerWidth = this.leftContainerWidth + event.edges.right - 2;
  }

  public getMarginTop() {
    if (this.leftImage && this.leftImage.format) {
      return (800 / this.leftImage.format) - 20;
    }
    return 0;
  }

  public leftContainerHeight() {
    return (800 / this.leftImage.format) + 30;
  }

}
