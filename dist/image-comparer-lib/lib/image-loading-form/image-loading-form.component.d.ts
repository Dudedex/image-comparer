import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
export declare class ImageLoadingFormComponent implements OnInit, OnChanges {
    formatX: number;
    formatY: number;
    imageChanged: EventEmitter<{}>;
    leftImage: ImageDetails;
    rightImage: ImageDetails;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    saveFormat(): void;
}
