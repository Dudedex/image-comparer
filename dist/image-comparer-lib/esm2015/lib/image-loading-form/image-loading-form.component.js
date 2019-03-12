/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
export class ImageLoadingFormComponent {
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
                template: "<div class=\"page\">\n  <div>\n    <div class=\"cropper-container\">\n      Format: <input type=\"number\" class=\"numberInput\" [(ngModel)]=\"formatX\" (change)=\"saveFormat()\"> / <input class=\"numberInput\" type=\"number\" [(ngModel)]=\"formatY\" (change)=\"saveFormat()\">\n    </div>\n  </div>\n  <hr>\n  <div class=\"col-sm-6\">\n    <app-image-cropper [image]=\"leftImage\"></app-image-cropper>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-image-cropper [image]=\"rightImage\"></app-image-cropper>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbG9hZGluZy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1sb2FkaW5nLWZvcm0vaW1hZ2UtbG9hZGluZy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQU90RCxNQUFNLE9BQU8seUJBQXlCO0lBY3BDO1FBWk8sWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHWixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTekMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2RCxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDhqQkFBa0Q7O2FBRW5EOzs7OzsyQkFNRSxNQUFNO3dCQUdOLEtBQUs7eUJBR0wsS0FBSzs7OztJQVROLDRDQUFvQjs7SUFDcEIsNENBQW1COztJQUVuQixpREFDeUM7O0lBRXpDLDhDQUMrQjs7SUFFL0IsK0NBQ2dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ltYWdlRGV0YWlsc30gZnJvbSAnLi4vY2xhc3Nlcy9pbWFnZS1kZXRhaWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWltYWdlLWxvYWRpbmctZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1sb2FkaW5nLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1sb2FkaW5nLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGluZ0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgcHVibGljIGZvcm1hdFggPSAxNjtcbiAgcHVibGljIGZvcm1hdFkgPSA5O1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgaW1hZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsZWZ0SW1hZ2U6IEltYWdlRGV0YWlscztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcmlnaHRJbWFnZTogSW1hZ2VEZXRhaWxzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbWFnZUNoYW5nZWQuZW1pdCgpO1xuICAgIHRoaXMuc2F2ZUZvcm1hdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkLmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlRm9ybWF0KCkge1xuICAgIHRoaXMubGVmdEltYWdlLmZvcm1hdCA9IHRoaXMuZm9ybWF0WCAvIHRoaXMuZm9ybWF0WTtcbiAgICB0aGlzLnJpZ2h0SW1hZ2UuZm9ybWF0ID0gdGhpcy5mb3JtYXRYIC8gdGhpcy5mb3JtYXRZO1xuICB9XG59XG4iXX0=