import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ResizableDirective, ResizableModule } from 'angular-resizable-element';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, EventEmitter, Input, Output, ViewChild, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageComparerLibService {
    constructor() { }
}
ImageComparerLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ImageComparerLibService.ctorParameters = () => [];
/** @nocollapse */ ImageComparerLibService.ngInjectableDef = defineInjectable({ factory: function ImageComparerLibService_Factory() { return new ImageComparerLibService(); }, token: ImageComparerLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageComparerLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ImageComparerLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-image-comparer-lib',
                template: `
    <app-image-container-panel></app-image-container-panel>
  `
            }] }
];
/** @nocollapse */
ImageComparerLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageDetails {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageCropperComponent {
    constructor() {
        this.imageChangedEvent = '';
        this.imageChanged = new EventEmitter();
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
        this.imageChanged.emit();
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
                template: "<input class=\"btn btn-primary\" type=\"file\" type=\"file\" style=\"display: none\" (change)=\"fileChangeEvent($event)\" #upload/>\n<button class=\"btn btn-secondary big-btn\" (click)=\"clickUpload()\"><img width=\"20px\" src=\"assets/pictures/upload.png\">\n  Open {{image.type}} Image\n</button>\n<div class=\"btn-bar\">\n  <button class=\"btn-primary cropp-btn\" (click)=\"rotateLeft()\"><img width=\"20px\" src=\"assets/pictures/left.png\"></button>\n  <button class=\"btn-primary cropp-btn\" (click)=\"rotateRight()\"><img width=\"20px\" src=\"assets/pictures/right.png\"></button>\n  <button class=\"btn-primary cropp-btn\" (click)=\"flipHorizontal()\"><img width=\"20px\" src=\"assets/pictures/horizontally.png\">\n  </button>\n  <button class=\"btn-primary cropp-btn\" (click)=\"flipVertical()\"><img width=\"20px\" src=\"assets/pictures/vertically.png\"></button>\n</div>\n<div class=\"cropper-container\">\n  <image-cropper\n    [imageChangedEvent]=\"imageChangedEvent\"\n    [aspectRatio]=\"image.format\"\n    format=\"png\"\n    resizeToWidth=\"800\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (cropperReady)=\"cropperReady()\"\n    (loadImageFailed)=\"loadImageFailed()\"\n    outputType=\"base64\"\n    #cropper\n  ></image-cropper>\n</div>\n",
                styles: [".cropper-container{height:300px}.cropp-btn{margin:1rem;border-radius:4px;background-color:#fff}.cropp-img{width:20px}.big-btn{width:100%;background-color:#f1f291;border:1px solid #e3e3e3}.btn-bar{width:225px;margin:0 auto}"]
            }] }
];
/** @nocollapse */
ImageCropperComponent.ctorParameters = () => [];
ImageCropperComponent.propDecorators = {
    imageCropper: [{ type: ViewChild, args: ['cropper',] }],
    uploadButton: [{ type: ViewChild, args: ['upload',] }],
    image: [{ type: Input }],
    format: [{ type: Input }],
    imageChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageContainerPanelComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initWidth();
        this.leftImage = new ImageDetails();
        this.leftImage.type = 'left';
        this.rightImage = new ImageDetails();
        this.rightImage.type = 'right';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    initWidth() {
        this.mainFramWidth = $('#main-frame').width();
        this.leftContainerWidth = this.mainFramWidth / 2 - 2;
        this.rightContainerWidth = this.mainFramWidth;
        /** @type {?} */
        let height = ($('#left-picture-id').height()) + 50;
        if (isNaN(height)) {
            height = ($('#right-picture-id').height()) + 50;
        }
        this.leftContainerHeight = height;
        this.handleMargin = this.leftContainerHeight - 50;
        return true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResizeEnd(event) {
        this.leftContainerWidth = this.leftContainerWidth + event.edges.right - 2;
    }
}
ImageContainerPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-container-panel',
                template: "<div class=\"outer-picture-container\" (window:resize)=\"initWidth()\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\" id=\"outer-conatiner-id\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <img class=\"picture\" *ngIf=\"leftImage && leftImage.image\" id=\"left-picture-id\" [style.display]=\"'none'\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n      <img class=\"picture\" *ngIf=\"rightImage && rightImage.image\" id=\"right-picture-id\" [style.display]=\"'none'\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n      <div *ngIf=\"leftImage && leftImage.image && rightImage && rightImage.image\">\n        <div id=\"picture-container1\" [style.width.px]=\"mainFramWidth / 2 -2\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"handleMargin\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" [style.width.px]=\"mainFramWidth\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n",
                styles: [".outer-picture-container{max-width:800px;margin:0 auto}.image-display{max-width:760px;margin:0 auto;position:relative}.clearfix{clear:both}.picture-container--left{overflow-x:hidden;overflow-y:hidden;float:left;position:absolute;top:0;left:0;z-index:7}.handle{position:absolute;top:0;right:0;height:100px;border-right:1px solid #fff;border-left:1px solid #000}.handle .knob{position:absolute;width:12px;height:50px;margin-left:-12px;background-color:#fff;color:#000;line-height:.5;z-index:100;text-align:center;border:1px solid #000;cursor:-webkit-grab;cursor:grab}.picture-container--right{overflow-x:hidden;float:left;z-index:5}"]
            }] }
];
/** @nocollapse */
ImageContainerPanelComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageLoadingFormComponent {
    constructor() {
        this.formatX = 16;
        this.formatY = 9;
        this.imageChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.imageChanged.emit();
        this.saveFormat();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.imageChanged.emit();
    }
    /**
     * @return {?}
     */
    saveFormat() {
        this.leftImage.format = this.formatX / this.formatY;
        this.rightImage.format = this.formatX / this.formatY;
    }
}
ImageLoadingFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-loading-form',
                template: "<div class=\"page\">\n  <div>\n    <div class=\"cropper-container\">\n      Format: <input type=\"number\" class=\"numberInput\" [(ngModel)]=\"formatX\" (change)=\"saveFormat()\"> / <input class=\"numberInput\" type=\"number\" [(ngModel)]=\"formatY\" (change)=\"saveFormat()\">\n    </div>\n  </div>\n  <hr>\n  <div class=\"col-sm-6\">\n    <app-image-cropper [image]=\"leftImage\" (imageChanged)=\"imageChanged.emit()\"></app-image-cropper>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-image-cropper [image]=\"rightImage\" (imageChanged)=\"imageChanged.emit()\"></app-image-cropper>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n\n",
                styles: [".page{max-width:800px;margin:0 auto 3rem;position:relative}.clearfix{clear:both}.cropper-container{max-width:200px;padding:1rem;margin:0 auto}.numberInput{width:5rem}"]
            }] }
];
/** @nocollapse */
ImageLoadingFormComponent.ctorParameters = () => [];
ImageLoadingFormComponent.propDecorators = {
    imageChanged: [{ type: Output }],
    leftImage: [{ type: Input }],
    rightImage: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageComparerLibModule {
}
ImageComparerLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ImageComparerLibComponent,
                    ImageCropperComponent,
                    ImageContainerPanelComponent,
                    ImageLoadingFormComponent
                ],
                imports: [
                    BrowserModule,
                    ResizableModule,
                    FormsModule,
                    ImageCropperModule
                ],
                providers: [
                    ResizableDirective
                ],
                exports: [ImageComparerLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ImageComparerLibService, ImageComparerLibComponent, ImageComparerLibModule, ImageContainerPanelComponent as ɵb, ImageCropperComponent as ɵa, ImageLoadingFormComponent as ɵc };

//# sourceMappingURL=image-comparer-lib.js.map