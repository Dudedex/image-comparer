/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
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
export { ImageLoadingFormComponent };
if (false) {
    /** @type {?} */
    ImageLoadingFormComponent.prototype.formatX;
    /** @type {?} */
    ImageLoadingFormComponent.prototype.formatY;
    /** @type {?} */
    ImageLoadingFormComponent.prototype.imageChanged;
    /** @type {?} */
    ImageLoadingFormComponent.prototype.leftImage;
    /** @type {?} */
    ImageLoadingFormComponent.prototype.rightImage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbG9hZGluZy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1sb2FkaW5nLWZvcm0vaW1hZ2UtbG9hZGluZy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RDtJQW1CRTtRQVpPLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBR1osaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBU3pDLENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFTSw4Q0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2RCxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLDRvQkFBa0Q7O2lCQUVuRDs7Ozs7K0JBTUUsTUFBTTs0QkFHTixLQUFLOzZCQUdMLEtBQUs7O0lBbUJSLGdDQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E5QlkseUJBQXlCOzs7SUFFcEMsNENBQW9COztJQUNwQiw0Q0FBbUI7O0lBRW5CLGlEQUN5Qzs7SUFFekMsOENBQytCOztJQUUvQiwrQ0FDZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW1hZ2VEZXRhaWxzfSBmcm9tICcuLi9jbGFzc2VzL2ltYWdlLWRldGFpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtbG9hZGluZy1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWxvYWRpbmctZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWxvYWRpbmctZm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkaW5nRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBwdWJsaWMgZm9ybWF0WCA9IDE2O1xuICBwdWJsaWMgZm9ybWF0WSA9IDk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBpbWFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGxlZnRJbWFnZTogSW1hZ2VEZXRhaWxzO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByaWdodEltYWdlOiBJbWFnZURldGFpbHM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmltYWdlQ2hhbmdlZC5lbWl0KCk7XG4gICAgdGhpcy5zYXZlRm9ybWF0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5pbWFnZUNoYW5nZWQuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIHNhdmVGb3JtYXQoKSB7XG4gICAgdGhpcy5sZWZ0SW1hZ2UuZm9ybWF0ID0gdGhpcy5mb3JtYXRYIC8gdGhpcy5mb3JtYXRZO1xuICAgIHRoaXMucmlnaHRJbWFnZS5mb3JtYXQgPSB0aGlzLmZvcm1hdFggLyB0aGlzLmZvcm1hdFk7XG4gIH1cbn1cbiJdfQ==