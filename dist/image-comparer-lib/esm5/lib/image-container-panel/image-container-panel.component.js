/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ImageDetails } from '../classes/image-details';
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
        this.leftContainerHeight = ($('#left-picture-id').height()) + 50;
        this.handleMargin = this.leftContainerHeight - 50;
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
                    template: "<div class=\"outer-picture-container\" (window:resize)=\"initWidth()\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\" id=\"outer-conatiner-id\" *ngIf=\"leftImage && leftImage.image && rightImage && rightImage.image\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <div>\n        <div id=\"picture-container1\" [style.width.px]=\"mainFramWidth / 2 -2\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" id=\"left-picture-id\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"handleMargin\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" [style.width.px]=\"mainFramWidth\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n",
                    styles: [".outer-picture-container{max-width:800px;margin:0 auto}.image-display{max-width:760px;margin:0 auto;position:relative}.clearfix{clear:both}.picture-container--left{overflow-x:hidden;overflow-y:hidden;float:left;position:absolute;top:0;left:0;z-index:7}.handle{position:absolute;top:0;right:0;height:100px;border-right:1px solid #fff;border-left:1px solid #000}.handle .knob{position:absolute;width:12px;height:50px;margin-left:-12px;background-color:#fff;color:#000;line-height:.5;z-index:100;text-align:center;border:1px solid #000;cursor:-webkit-grab;cursor:grab}.picture-container--right{overflow-x:hidden;float:left;z-index:5}"]
                }] }
    ];
    /** @nocollapse */
    ImageContainerPanelComponent.ctorParameters = function () { return []; };
    return ImageContainerPanelComponent;
}());
export { ImageContainerPanelComponent };
if (false) {
    /** @type {?} */
    ImageContainerPanelComponent.prototype.mainFramWidth;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.leftContainerWidth;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.rightContainerWidth;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.leftContainerHeight;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.handleMargin;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.leftImage;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.rightImage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb250YWluZXItcGFuZWwvaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0UsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXREO0lBY0U7SUFBZ0IsQ0FBQzs7OztJQUVqQiwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBQ2xDLENBQUM7Ozs7SUFFTSxnREFBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSxrREFBVzs7OztJQUFsQixVQUFtQixLQUFVO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMscy9DQUFxRDs7aUJBRXREOzs7O0lBbUNELG1DQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FsQ1ksNEJBQTRCOzs7SUFDdkMscURBQXFCOztJQUNyQiwwREFBMEI7O0lBQzFCLDJEQUEyQjs7SUFDM0IsMkRBQTJCOztJQUMzQixvREFBb0I7O0lBQ3BCLGlEQUErQjs7SUFDL0Isa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbWFnZURldGFpbHN9IGZyb20gJy4uL2NsYXNzZXMvaW1hZ2UtZGV0YWlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1jb250YWluZXItcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbnRhaW5lclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgbWFpbkZyYW1XaWR0aDtcbiAgcHVibGljIGxlZnRDb250YWluZXJXaWR0aDtcbiAgcHVibGljIHJpZ2h0Q29udGFpbmVyV2lkdGg7XG4gIHB1YmxpYyBsZWZ0Q29udGFpbmVySGVpZ2h0O1xuICBwdWJsaWMgaGFuZGxlTWFyZ2luO1xuICBwdWJsaWMgbGVmdEltYWdlOiBJbWFnZURldGFpbHM7XG4gIHB1YmxpYyByaWdodEltYWdlOiBJbWFnZURldGFpbHM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRXaWR0aCgpO1xuICAgIHRoaXMubGVmdEltYWdlID0gbmV3IEltYWdlRGV0YWlscygpO1xuICAgIHRoaXMubGVmdEltYWdlLnR5cGUgPSAnbGVmdCc7XG4gICAgdGhpcy5yaWdodEltYWdlID0gbmV3IEltYWdlRGV0YWlscygpO1xuICAgIHRoaXMucmlnaHRJbWFnZS50eXBlID0gJ3JpZ2h0JztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBpbml0V2lkdGgoKSB7XG4gICAgdGhpcy5tYWluRnJhbVdpZHRoID0gJCgnI21haW4tZnJhbWUnKS53aWR0aCgpO1xuICAgIHRoaXMubGVmdENvbnRhaW5lcldpZHRoID0gdGhpcy5tYWluRnJhbVdpZHRoIC8gMiAtIDI7XG4gICAgdGhpcy5yaWdodENvbnRhaW5lcldpZHRoID0gdGhpcy5tYWluRnJhbVdpZHRoO1xuICAgIHRoaXMubGVmdENvbnRhaW5lckhlaWdodCA9ICgkKCcjbGVmdC1waWN0dXJlLWlkJykuaGVpZ2h0KCkpICsgNTA7XG4gICAgdGhpcy5oYW5kbGVNYXJnaW4gPSB0aGlzLmxlZnRDb250YWluZXJIZWlnaHQgLSA1MDtcbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZUVuZChldmVudDogYW55KSB7XG4gICAgdGhpcy5sZWZ0Q29udGFpbmVyV2lkdGggPSB0aGlzLmxlZnRDb250YWluZXJXaWR0aCArIGV2ZW50LmVkZ2VzLnJpZ2h0IC0gMjtcbiAgfVxuXG59XG4iXX0=