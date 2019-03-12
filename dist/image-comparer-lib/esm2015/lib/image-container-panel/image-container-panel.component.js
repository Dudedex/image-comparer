/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
export class ImageContainerPanelComponent {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResizeEnd(event) {
        this.leftContainerWidth = this.leftContainerWidth + event.edges.right - 2;
    }
    /**
     * @return {?}
     */
    getMarginTop() {
        if (this.leftImage && this.leftImage.format) {
            return (800 / this.leftImage.format) - 20;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    leftContainerHeight() {
        return (800 / this.leftImage.format) + 30;
    }
}
ImageContainerPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-image-container-panel',
                template: "<div class=\"outer-picture-container\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <div>\n        <div id=\"picture-container1\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight()\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"getMarginTop()\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".outer-picture-container{max-width:800px;margin:0 auto}.image-display{max-width:760px;margin:0 auto;position:relative}.picture-container--left{overflow-x:hidden;overflow-y:hidden;float:left;position:absolute;width:800px;top:0;left:0;z-index:1}.handle{position:absolute;top:0;right:0;height:100px;border-right:1px solid #fff;border-left:1px solid #000}.handle .knob{position:absolute;width:12px;height:50px;margin-left:-12px;background-color:#fff;color:#000;line-height:.5;z-index:100;text-align:center;border:1px solid #000;cursor:-webkit-grab;cursor:grab}.picture-container--right{overflow-x:hidden;float:left;position:absolute;width:800px;top:0;left:0;z-index:-1}"]
            }] }
];
/** @nocollapse */
ImageContainerPanelComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ImageContainerPanelComponent.prototype.mainFramWidth;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.leftContainerWidth;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.rightContainerWidth;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.leftImage;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.rightImage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb250YWluZXItcGFuZWwvaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0UsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBT3RELE1BQU0sT0FBTyw0QkFBNEI7SUFPdkMsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQVU7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFFTSxtQkFBbUI7UUFDeEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLG12Q0FBcUQ7O2FBRXREOzs7Ozs7SUFFQyxxREFBcUI7O0lBQ3JCLDBEQUEwQjs7SUFDMUIsMkRBQTJCOztJQUMzQixpREFBK0I7O0lBQy9CLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW1hZ2VEZXRhaWxzfSBmcm9tICcuLi9jbGFzc2VzL2ltYWdlLWRldGFpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtY29udGFpbmVyLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNvbnRhaW5lci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWNvbnRhaW5lci1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDb250YWluZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIG1haW5GcmFtV2lkdGg7XG4gIHB1YmxpYyBsZWZ0Q29udGFpbmVyV2lkdGg7XG4gIHB1YmxpYyByaWdodENvbnRhaW5lcldpZHRoO1xuICBwdWJsaWMgbGVmdEltYWdlOiBJbWFnZURldGFpbHM7XG4gIHB1YmxpYyByaWdodEltYWdlOiBJbWFnZURldGFpbHM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRXaWR0aCgpO1xuICAgIHRoaXMubGVmdEltYWdlID0gbmV3IEltYWdlRGV0YWlscygpO1xuICAgIHRoaXMubGVmdEltYWdlLnR5cGUgPSAnbGVmdCc7XG4gICAgdGhpcy5yaWdodEltYWdlID0gbmV3IEltYWdlRGV0YWlscygpO1xuICAgIHRoaXMucmlnaHRJbWFnZS50eXBlID0gJ3JpZ2h0JztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBpbml0V2lkdGgoKSB7XG4gICAgdGhpcy5tYWluRnJhbVdpZHRoID0gJCgnI21haW4tZnJhbWUnKS53aWR0aCgpO1xuICAgIHRoaXMubGVmdENvbnRhaW5lcldpZHRoID0gdGhpcy5tYWluRnJhbVdpZHRoIC8gMiAtIDI7XG4gICAgdGhpcy5yaWdodENvbnRhaW5lcldpZHRoID0gdGhpcy5tYWluRnJhbVdpZHRoO1xuICB9XG5cbiAgcHVibGljIG9uUmVzaXplRW5kKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmxlZnRDb250YWluZXJXaWR0aCA9IHRoaXMubGVmdENvbnRhaW5lcldpZHRoICsgZXZlbnQuZWRnZXMucmlnaHQgLSAyO1xuICB9XG5cbiAgcHVibGljIGdldE1hcmdpblRvcCgpIHtcbiAgICBpZiAodGhpcy5sZWZ0SW1hZ2UgJiYgdGhpcy5sZWZ0SW1hZ2UuZm9ybWF0KSB7XG4gICAgICByZXR1cm4gKDgwMCAvIHRoaXMubGVmdEltYWdlLmZvcm1hdCkgLSAyMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBwdWJsaWMgbGVmdENvbnRhaW5lckhlaWdodCgpIHtcbiAgICByZXR1cm4gKDgwMCAvIHRoaXMubGVmdEltYWdlLmZvcm1hdCkgKyAzMDtcbiAgfVxuXG59XG4iXX0=