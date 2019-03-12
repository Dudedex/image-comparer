import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
export declare class ImageContainerPanelComponent implements OnInit, OnChanges {
    mainFramWidth: any;
    leftContainerWidth: any;
    rightContainerWidth: any;
    leftImage: ImageDetails;
    rightImage: ImageDetails;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initWidth(): void;
    onResizeEnd(event: any): void;
    getMarginTop(): number;
    leftContainerHeight(): number;
}
