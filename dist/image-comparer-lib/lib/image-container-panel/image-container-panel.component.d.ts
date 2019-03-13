import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
export declare class ImageContainerPanelComponent implements OnInit, OnChanges {
    mainFramWidth: any;
    leftContainerWidth: any;
    rightContainerWidth: any;
    leftContainerHeight: any;
    handleMargin: any;
    leftImage: ImageDetails;
    rightImage: ImageDetails;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initWidth(): boolean;
    onResizeEnd(event: any): void;
}
