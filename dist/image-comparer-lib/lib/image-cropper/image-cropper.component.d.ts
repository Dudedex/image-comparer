import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
import { ImageCroppedEvent } from 'ngx-image-cropper';
export declare class ImageCropperComponent implements OnInit {
    imageChangedEvent: any;
    showCropper: any;
    imageCropper: ImageCropperComponent;
    uploadButton: ElementRef;
    image: ImageDetails;
    format: number;
    imageChanged: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    clickUpload(): void;
    fileChangeEvent(event: any): void;
    imageCropped(event: ImageCroppedEvent): void;
    imageLoaded(): void;
    cropperReady(): void;
    loadImageFailed(): void;
    rotateLeft(): void;
    rotateRight(): void;
    flipHorizontal(): void;
    flipVertical(): void;
}
