/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent() {
        this.imageChangedEvent = '';
        this.imageChanged = new EventEmitter();
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
        this.imageChanged.emit();
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
                    template: "<input class=\"btn btn-primary\" type=\"file\" type=\"file\" style=\"display: none\" (change)=\"fileChangeEvent($event)\" #upload/>\n<button class=\"btn btn-secondary big-btn\" (click)=\"clickUpload()\"><img width=\"20px\" src=\"assets/pictures/upload.png\">\n  Open {{image.type}} Image\n</button>\n<div class=\"btn-bar\">\n  <button class=\"btn-primary cropp-btn\" (click)=\"rotateLeft()\"><img width=\"20px\" src=\"assets/pictures/left.png\"></button>\n  <button class=\"btn-primary cropp-btn\" (click)=\"rotateRight()\"><img width=\"20px\" src=\"assets/pictures/right.png\"></button>\n  <button class=\"btn-primary cropp-btn\" (click)=\"flipHorizontal()\"><img width=\"20px\" src=\"assets/pictures/horizontally.png\">\n  </button>\n  <button class=\"btn-primary cropp-btn\" (click)=\"flipVertical()\"><img width=\"20px\" src=\"assets/pictures/vertically.png\"></button>\n</div>\n<div class=\"cropper-container\">\n  <image-cropper\n    [imageChangedEvent]=\"imageChangedEvent\"\n    [aspectRatio]=\"image.format\"\n    format=\"png\"\n    resizeToWidth=\"800\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\"\n    (loadImageFailed)=\"loadImageFailed()\"\n    outputType=\"base64\"\n    #cropper\n  ></image-cropper>\n</div>\n",
                    styles: [".cropper-container{height:300px}.cropp-btn{margin:1rem;border-radius:4px;background-color:#fff}.cropp-img{width:20px}.big-btn{width:100%;background-color:#f1f291;border:1px solid #e3e3e3}.btn-bar{width:225px;margin:0 auto}"]
                }] }
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return []; };
    ImageCropperComponent.propDecorators = {
        imageCropper: [{ type: ViewChild, args: ['cropper',] }],
        uploadButton: [{ type: ViewChild, args: ['upload',] }],
        image: [{ type: Input }],
        format: [{ type: Input }],
        imageChanged: [{ type: Output }]
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
    /** @type {?} */
    ImageCropperComponent.prototype.imageChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pbWFnZS1jb21wYXJlci1saWIvIiwic291cmNlcyI6WyJsaWIvaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUd0RDtJQXVCRTtRQWhCTyxzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFjNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3pDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRU0sMkNBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsS0FBd0I7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsNENBQVk7OztJQUFaO0lBQ0EsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjtJQUNBLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCw4Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCw0Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isa3lDQUE2Qzs7aUJBRTlDOzs7OzsrQkFNRSxTQUFTLFNBQUMsU0FBUzsrQkFFbkIsU0FBUyxTQUFDLFFBQVE7d0JBRWxCLEtBQUs7eUJBR0wsS0FBSzsrQkFHTCxNQUFNOztJQWdEVCw0QkFBQztDQUFBLEFBcEVELElBb0VDO1NBL0RZLHFCQUFxQjs7O0lBRWhDLGtEQUFtQzs7SUFDbkMsNENBQW1COztJQUVuQiw2Q0FBMEQ7O0lBRTFELDZDQUE4Qzs7SUFFOUMsc0NBQzJCOztJQUUzQix1Q0FDc0I7O0lBRXRCLDZDQUN5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW1hZ2VEZXRhaWxzfSBmcm9tICcuLi9jbGFzc2VzL2ltYWdlLWRldGFpbHMnO1xuaW1wb3J0IHtJbWFnZUNyb3BwZWRFdmVudH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtY3JvcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xuICBwdWJsaWMgc2hvd0Nyb3BwZXI7XG5cbiAgQFZpZXdDaGlsZCgnY3JvcHBlcicpIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZCcpIHVwbG9hZEJ1dHRvbjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaW1hZ2U6IEltYWdlRGV0YWlscztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZm9ybWF0OiBudW1iZXI7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBpbWFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBjbGlja1VwbG9hZCgpIHtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gIH1cblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBldmVudDtcbiAgfVxuXG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcbiAgICB0aGlzLmltYWdlLmltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkLmVtaXQoKTtcbiAgfVxuXG4gIGltYWdlTG9hZGVkKCkge1xuICAgIHRoaXMuc2hvd0Nyb3BwZXIgPSB0cnVlO1xuICB9XG5cbiAgY3JvcHBlclJlYWR5KCkge1xuICB9XG5cbiAgbG9hZEltYWdlRmFpbGVkKCkge1xuICB9XG5cbiAgcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5yb3RhdGVMZWZ0KCk7XG4gIH1cblxuICByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5yb3RhdGVSaWdodCgpO1xuICB9XG5cbiAgZmxpcEhvcml6b250YWwoKSB7XG4gICAgdGhpcy5pbWFnZUNyb3BwZXIuZmxpcEhvcml6b250YWwoKTtcbiAgfVxuXG4gIGZsaXBWZXJ0aWNhbCgpIHtcbiAgICB0aGlzLmltYWdlQ3JvcHBlci5mbGlwVmVydGljYWwoKTtcbiAgfVxuXG59XG4iXX0=