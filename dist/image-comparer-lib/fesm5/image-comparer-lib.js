import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ResizableDirective, ResizableModule } from 'angular-resizable-element';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, EventEmitter, Input, Output, ViewChild, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageComparerLibService = /** @class */ (function () {
    function ImageComparerLibService() {
    }
    ImageComparerLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ImageComparerLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ ImageComparerLibService.ngInjectableDef = defineInjectable({ factory: function ImageComparerLibService_Factory() { return new ImageComparerLibService(); }, token: ImageComparerLibService, providedIn: "root" });
    return ImageComparerLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageComparerLibComponent = /** @class */ (function () {
    function ImageComparerLibComponent() {
    }
    /**
     * @return {?}
     */
    ImageComparerLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ImageComparerLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-image-comparer-lib',
                    template: "\n    <app-image-container-panel></app-image-container-panel>\n  "
                }] }
    ];
    /** @nocollapse */
    ImageComparerLibComponent.ctorParameters = function () { return []; };
    return ImageComparerLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageDetails = /** @class */ (function () {
    function ImageDetails() {
    }
    return ImageDetails;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        format: [{ type: Input }],
        imageChanged: [{ type: Output }]
    };
    return ImageCropperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageContainerPanelComponent = /** @class */ (function () {
    function ImageContainerPanelComponent() {
    }
    /**
     * @return {?}
     */
    ImageContainerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initWidth();
        this.leftImage = new ImageDetails();
        this.leftImage.type = 'left';
        this.rightImage = new ImageDetails();
        this.rightImage.type = 'right';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageContainerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    ImageContainerPanelComponent.prototype.initWidth = /**
     * @return {?}
     */
    function () {
        this.mainFramWidth = $('#main-frame').width();
        this.leftContainerWidth = this.mainFramWidth / 2 - 2;
        this.rightContainerWidth = this.mainFramWidth;
        /** @type {?} */
        var height = ($('#left-picture-id').height()) + 50;
        if (isNaN(height)) {
            height = ($('#right-picture-id').height()) + 50;
        }
        this.leftContainerHeight = height;
        this.handleMargin = this.leftContainerHeight - 50;
        return true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageContainerPanelComponent.prototype.onResizeEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.leftContainerWidth = this.leftContainerWidth + event.edges.right - 2;
    };
    ImageContainerPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-container-panel',
                    template: "<div class=\"outer-picture-container\" (window:resize)=\"initWidth()\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\" id=\"outer-conatiner-id\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <img class=\"picture\" *ngIf=\"leftImage && leftImage.image\" id=\"left-picture-id\" [style.display]=\"'none'\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n      <img class=\"picture\" *ngIf=\"rightImage && rightImage.image\" id=\"right-picture-id\" [style.display]=\"'none'\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n      <div *ngIf=\"leftImage && leftImage.image && rightImage && rightImage.image\">\n        <div id=\"picture-container1\" [style.width.px]=\"mainFramWidth / 2 -2\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"handleMargin\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" [style.width.px]=\"mainFramWidth\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n",
                    styles: [".outer-picture-container{max-width:800px;margin:0 auto}.image-display{max-width:760px;margin:0 auto;position:relative}.clearfix{clear:both}.picture-container--left{overflow-x:hidden;overflow-y:hidden;float:left;position:absolute;top:0;left:0;z-index:7}.handle{position:absolute;top:0;right:0;height:100px;border-right:1px solid #fff;border-left:1px solid #000}.handle .knob{position:absolute;width:12px;height:50px;margin-left:-12px;background-color:#fff;color:#000;line-height:.5;z-index:100;text-align:center;border:1px solid #000;cursor:-webkit-grab;cursor:grab}.picture-container--right{overflow-x:hidden;float:left;z-index:5}"]
                }] }
    ];
    /** @nocollapse */
    ImageContainerPanelComponent.ctorParameters = function () { return []; };
    return ImageContainerPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageLoadingFormComponent = /** @class */ (function () {
    function ImageLoadingFormComponent() {
        this.formatX = 16;
        this.formatY = 9;
        this.imageChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ImageLoadingFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.imageChanged.emit();
        this.saveFormat();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageLoadingFormComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.imageChanged.emit();
    };
    /**
     * @return {?}
     */
    ImageLoadingFormComponent.prototype.saveFormat = /**
     * @return {?}
     */
    function () {
        this.leftImage.format = this.formatX / this.formatY;
        this.rightImage.format = this.formatX / this.formatY;
    };
    ImageLoadingFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-loading-form',
                    template: "<div class=\"page\">\n  <div>\n    <div class=\"cropper-container\">\n      Format: <input type=\"number\" class=\"numberInput\" [(ngModel)]=\"formatX\" (change)=\"saveFormat()\"> / <input class=\"numberInput\" type=\"number\" [(ngModel)]=\"formatY\" (change)=\"saveFormat()\">\n    </div>\n  </div>\n  <hr>\n  <div class=\"col-sm-6\">\n    <app-image-cropper [image]=\"leftImage\" (imageChanged)=\"imageChanged.emit()\"></app-image-cropper>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-image-cropper [image]=\"rightImage\" (imageChanged)=\"imageChanged.emit()\"></app-image-cropper>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n\n",
                    styles: [".page{max-width:800px;margin:0 auto 3rem;position:relative}.clearfix{clear:both}.cropper-container{max-width:200px;padding:1rem;margin:0 auto}.numberInput{width:5rem}"]
                }] }
    ];
    /** @nocollapse */
    ImageLoadingFormComponent.ctorParameters = function () { return []; };
    ImageLoadingFormComponent.propDecorators = {
        imageChanged: [{ type: Output }],
        leftImage: [{ type: Input }],
        rightImage: [{ type: Input }]
    };
    return ImageLoadingFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageComparerLibModule = /** @class */ (function () {
    function ImageComparerLibModule() {
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
    return ImageComparerLibModule;
}());

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