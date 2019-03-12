/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent() {
        this.imageChangedEvent = '';
    }
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.clickUpload = /**
     * @return {?}
     */
    function () {
        this.uploadButton.nativeElement.click();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.fileChangeEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.imageChangedEvent = event;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.imageCropped = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.image.image = event.base64;
        console.log(event);
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.imageLoaded = /**
     * @return {?}
     */
    function () {
        this.showCropper = true;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.cropperReady = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFailed = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.rotateLeft = /**
     * @return {?}
     */
    function () {
        this.imageCropper.rotateLeft();
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.rotateRight = /**
     * @return {?}
     */
    function () {
        this.imageCropper.rotateRight();
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.flipHorizontal = /**
     * @return {?}
     */
    function () {
        this.imageCropper.flipHorizontal();
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.flipVertical = /**
     * @return {?}
     */
    function () {
        this.imageCropper.flipVertical();
    };
    ImageCropperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-cropper',
                    template: "<input class=\"btn btn-primary\" type=\"file\" type=\"file\" style=\"display: none\" (change)=\"fileChangeEvent($event)\" #upload/>\n<button class=\"btn btn-secondary big-btn\" (click)=\"clickUpload()\"><img width=\"20px\" src=\"assets/pictures/upload.png\">\n  Upload {{image.type}} Image\n</button>\n<div class=\"btn-bar\">\n  <button class=\"cropp-btn\" (click)=\"rotateLeft()\"><img width=\"20px\" src=\"assets/pictures/left.png\"></button>\n  <button class=\"cropp-btn\" (click)=\"rotateRight()\"><img width=\"20px\" src=\"assets/pictures/right.png\"></button>\n  <button class=\"cropp-btn\" (click)=\"flipHorizontal()\"><img width=\"20px\" src=\"assets/pictures/horizontally.png\">\n  </button>\n  <button class=\"cropp-btn\" (click)=\"flipVertical()\"><img width=\"20px\" src=\"assets/pictures/vertically.png\"></button>\n</div>\n<div class=\"cropper-container\">\n  <image-cropper\n    [imageChangedEvent]=\"imageChangedEvent\"\n    [aspectRatio]=\"image.format\"\n    format=\"png\"\n    resizeToWidth=\"800\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\"\n    (loadImageFailed)=\"loadImageFailed()\"\n    outputType=\"base64\"\n    #cropper\n  ></image-cropper>\n</div>\n",
                    styles: [".cropper-container{height:300px}.cropp-btn{margin:1rem;background-color:#fff}.cropp-img{width:20px}.big-btn{width:100%}.btn-bar{width:225px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return []; };
    ImageCropperComponent.propDecorators = {
        imageCropper: [{ type: ViewChild, args: ['cropper',] }],
        uploadButton: [{ type: ViewChild, args: ['upload',] }],
        image: [{ type: Input }],
        format: [{ type: Input }]
    };
    return ImageCropperComponent;
}());
export { ImageCropperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pbWFnZS1jb21wYXJlci1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFHdEQ7SUFvQkU7UUFiTyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7SUFjbkMsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFTSwyQ0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxLQUF3QjtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCw0Q0FBWTs7O0lBQVo7SUFDQSxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO0lBQ0EsQ0FBQzs7OztJQUVELDBDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELDRDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixvdkNBQTZDOztpQkFFOUM7Ozs7OytCQU1FLFNBQVMsU0FBQyxTQUFTOytCQUVuQixTQUFTLFNBQUMsUUFBUTt3QkFFbEIsS0FBSzt5QkFHTCxLQUFLOztJQWdEUiw0QkFBQztDQUFBLEFBakVELElBaUVDO1NBNURZLHFCQUFxQjs7O0lBRWhDLGtEQUFtQzs7SUFDbkMsNENBQW1COztJQUVuQiw2Q0FBMEQ7O0lBRTFELDZDQUE4Qzs7SUFFOUMsc0NBQzJCOztJQUUzQix1Q0FDc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW1hZ2VEZXRhaWxzfSBmcm9tICcuLi9jbGFzc2VzL2ltYWdlLWRldGFpbHMnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZWRFdmVudH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtY3JvcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xuICBwdWJsaWMgc2hvd0Nyb3BwZXI7XG5cbiAgQFZpZXdDaGlsZCgnY3JvcHBlcicpIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZCcpIHVwbG9hZEJ1dHRvbjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaW1hZ2U6IEltYWdlRGV0YWlscztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBjbGlja1VwbG9hZCgpIHtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gIH1cblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBldmVudDtcbiAgfVxuXG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcbiAgICB0aGlzLmltYWdlLmltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuXG4gIGltYWdlTG9hZGVkKCkge1xuICAgIHRoaXMuc2hvd0Nyb3BwZXIgPSB0cnVlO1xuICB9XG5cbiAgY3JvcHBlclJlYWR5KCkge1xuICB9XG5cbiAgbG9hZEltYWdlRmFpbGVkKCkge1xuICB9XG5cbiAgcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5yb3RhdGVMZWZ0KCk7XG4gIH1cblxuICByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5yb3RhdGVSaWdodCgpO1xuICB9XG5cbiAgZmxpcEhvcml6b250YWwoKSB7XG4gICAgdGhpcy5pbWFnZUNyb3BwZXIuZmxpcEhvcml6b250YWwoKTtcbiAgfVxuXG4gIGZsaXBWZXJ0aWNhbCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5mbGlwVmVydGljYWwoKTtcbiAgfVxuXG59XG4iXX0=