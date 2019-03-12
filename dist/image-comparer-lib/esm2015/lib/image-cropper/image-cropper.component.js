/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
export class ImageCropperComponent {
    constructor() {
        this.imageChangedEvent = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    clickUpload() {
        this.uploadButton.nativeElement.click();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    imageCropped(event) {
        this.image.image = event.base64;
        console.log(event);
    }
    /**
     * @return {?}
     */
    imageLoaded() {
        this.showCropper = true;
    }
    /**
     * @return {?}
     */
    cropperReady() {
    }
    /**
     * @return {?}
     */
    loadImageFailed() {
    }
    /**
     * @return {?}
     */
    rotateLeft() {
        this.imageCropper.rotateLeft();
    }
    /**
     * @return {?}
     */
    rotateRight() {
        this.imageCropper.rotateRight();
    }
    /**
     * @return {?}
     */
    flipHorizontal() {
        this.imageCropper.flipHorizontal();
    }
    /**
     * @return {?}
     */
    flipVertical() {
        this.imageCropper.flipVertical();
    }
}
ImageCropperComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-cropper',
                template: "<input class=\"btn btn-primary\" type=\"file\" type=\"file\" style=\"display: none\" (change)=\"fileChangeEvent($event)\" #upload/>\n<button class=\"btn btn-secondary big-btn\" (click)=\"clickUpload()\"><img width=\"20px\" src=\"assets/pictures/upload.png\">\n  Upload {{image.type}} Image\n</button>\n<div class=\"btn-bar\">\n  <button class=\"cropp-btn\" (click)=\"rotateLeft()\"><img width=\"20px\" src=\"assets/pictures/left.png\"></button>\n  <button class=\"cropp-btn\" (click)=\"rotateRight()\"><img width=\"20px\" src=\"assets/pictures/right.png\"></button>\n  <button class=\"cropp-btn\" (click)=\"flipHorizontal()\"><img width=\"20px\" src=\"assets/pictures/horizontally.png\">\n  </button>\n  <button class=\"cropp-btn\" (click)=\"flipVertical()\"><img width=\"20px\" src=\"assets/pictures/vertically.png\"></button>\n</div>\n<div class=\"cropper-container\">\n  <image-cropper\n    [imageChangedEvent]=\"imageChangedEvent\"\n    [aspectRatio]=\"image.format\"\n    format=\"png\"\n    resizeToWidth=\"800\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\"\n    (loadImageFailed)=\"loadImageFailed()\"\n    outputType=\"base64\"\n    #cropper\n  ></image-cropper>\n</div>\n",
                styles: [".cropper-container{height:300px}.cropp-btn{margin:1rem;background-color:#fff}.cropp-img{width:20px}.big-btn{width:100%}.btn-bar{width:225px;margin:0 auto}"]
            }] }
];
/** @nocollapse */
ImageCropperComponent.ctorParameters = () => [];
ImageCropperComponent.propDecorators = {
    imageCropper: [{ type: ViewChild, args: ['cropper',] }],
    uploadButton: [{ type: ViewChild, args: ['upload',] }],
    image: [{ type: Input }],
    format: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ImageCropperComponent.prototype.imageChangedEvent;
    /** @type {?} */
    ImageCropperComponent.prototype.showCropper;
    /** @type {?} */
    ImageCropperComponent.prototype.imageCropper;
    /** @type {?} */
    ImageCropperComponent.prototype.uploadButton;
    /** @type {?} */
    ImageCropperComponent.prototype.image;
    /** @type {?} */
    ImageCropperComponent.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pbWFnZS1jb21wYXJlci1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFRdEQsTUFBTSxPQUFPLHFCQUFxQjtJQWVoQztRQWJPLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztJQWNuQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUF3QjtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsWUFBWTtJQUNaLENBQUM7Ozs7SUFFRCxlQUFlO0lBQ2YsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isb3ZDQUE2Qzs7YUFFOUM7Ozs7OzJCQU1FLFNBQVMsU0FBQyxTQUFTOzJCQUVuQixTQUFTLFNBQUMsUUFBUTtvQkFFbEIsS0FBSztxQkFHTCxLQUFLOzs7O0lBVk4sa0RBQW1DOztJQUNuQyw0Q0FBbUI7O0lBRW5CLDZDQUEwRDs7SUFFMUQsNkNBQThDOztJQUU5QyxzQ0FDMkI7O0lBRTNCLHVDQUNzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbWFnZURldGFpbHN9IGZyb20gJy4uL2NsYXNzZXMvaW1hZ2UtZGV0YWlscyc7XG5pbXBvcnQge0ltYWdlQ3JvcHBlZEV2ZW50fSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1jcm9wcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XG4gIHB1YmxpYyBzaG93Q3JvcHBlcjtcblxuICBAVmlld0NoaWxkKCdjcm9wcGVyJykgaW1hZ2VDcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZCgndXBsb2FkJykgdXBsb2FkQnV0dG9uOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbWFnZTogSW1hZ2VEZXRhaWxzO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmb3JtYXQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIGNsaWNrVXBsb2FkKCkge1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIGZpbGVDaGFuZ2VFdmVudChldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGV2ZW50O1xuICB9XG5cbiAgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCkge1xuICAgIHRoaXMuaW1hZ2UuaW1hZ2UgPSBldmVudC5iYXNlNjQ7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG5cbiAgaW1hZ2VMb2FkZWQoKSB7XG4gICAgdGhpcy5zaG93Q3JvcHBlciA9IHRydWU7XG4gIH1cblxuICBjcm9wcGVyUmVhZHkoKSB7XG4gIH1cblxuICBsb2FkSW1hZ2VGYWlsZWQoKSB7XG4gIH1cblxuICByb3RhdGVMZWZ0KCkge1xuICAgIHRoaXMuaW1hZ2VDcm9wcGVyLnJvdGF0ZUxlZnQoKTtcbiAgfVxuXG4gIHJvdGF0ZVJpZ2h0KCkge1xuICAgIHRoaXMuaW1hZ2VDcm9wcGVyLnJvdGF0ZVJpZ2h0KCk7XG4gIH1cblxuICBmbGlwSG9yaXpvbnRhbCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5mbGlwSG9yaXpvbnRhbCgpO1xuICB9XG5cbiAgZmxpcFZlcnRpY2FsKCkge1xuICAgIHRoaXMuaW1hZ2VDcm9wcGVyLmZsaXBWZXJ0aWNhbCgpO1xuICB9XG5cbn1cbiJdfQ==