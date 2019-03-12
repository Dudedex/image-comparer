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
    /**
     * @return {?}
     */
    ImageContainerPanelComponent.prototype.getMarginTop = /**
     * @return {?}
     */
    function () {
        if (this.leftImage && this.leftImage.format) {
            return (800 / this.leftImage.format) - 20;
        }
        return 0;
    };
    /**
     * @return {?}
     */
    ImageContainerPanelComponent.prototype.leftContainerHeight = /**
     * @return {?}
     */
    function () {
        return (800 / this.leftImage.format) + 30;
    };
    ImageContainerPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-container-panel',
                    template: "<div class=\"outer-picture-container\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <div>\n        <div id=\"picture-container1\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight()\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"getMarginTop()\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".outer-picture-container{max-width:800px;margin:0 auto}.image-display{max-width:760px;margin:0 auto;position:relative}.picture-container--left{overflow-x:hidden;overflow-y:hidden;float:left;position:absolute;width:800px;top:0;left:0;z-index:1}.handle{position:absolute;top:0;right:0;height:100px;border-right:1px solid #fff;border-left:1px solid #000}.handle .knob{position:absolute;width:12px;height:50px;margin-left:-12px;background-color:#fff;color:#000;line-height:.5;z-index:100;text-align:center;border:1px solid #000;cursor:-webkit-grab;cursor:grab}.picture-container--right{overflow-x:hidden;float:left;position:absolute;width:800px;top:0;left:0;z-index:-1}"]
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
    ImageContainerPanelComponent.prototype.leftImage;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.rightImage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb250YWluZXItcGFuZWwvaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0UsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXREO0lBWUU7SUFBZ0IsQ0FBQzs7OztJQUVqQiwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBQ2xDLENBQUM7Ozs7SUFFTSxnREFBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVNLGtEQUFXOzs7O0lBQWxCLFVBQW1CLEtBQVU7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVNLG1EQUFZOzs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVNLDBEQUFtQjs7O0lBQTFCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLG12Q0FBcUQ7O2lCQUV0RDs7OztJQTBDRCxtQ0FBQztDQUFBLEFBOUNELElBOENDO1NBekNZLDRCQUE0Qjs7O0lBQ3ZDLHFEQUFxQjs7SUFDckIsMERBQTBCOztJQUMxQiwyREFBMkI7O0lBQzNCLGlEQUErQjs7SUFDL0Isa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbWFnZURldGFpbHN9IGZyb20gJy4uL2NsYXNzZXMvaW1hZ2UtZGV0YWlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1jb250YWluZXItcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbnRhaW5lclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgbWFpbkZyYW1XaWR0aDtcbiAgcHVibGljIGxlZnRDb250YWluZXJXaWR0aDtcbiAgcHVibGljIHJpZ2h0Q29udGFpbmVyV2lkdGg7XG4gIHB1YmxpYyBsZWZ0SW1hZ2U6IEltYWdlRGV0YWlscztcbiAgcHVibGljIHJpZ2h0SW1hZ2U6IEltYWdlRGV0YWlscztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdFdpZHRoKCk7XG4gICAgdGhpcy5sZWZ0SW1hZ2UgPSBuZXcgSW1hZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5sZWZ0SW1hZ2UudHlwZSA9ICdsZWZ0JztcbiAgICB0aGlzLnJpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5yaWdodEltYWdlLnR5cGUgPSAncmlnaHQnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIGluaXRXaWR0aCgpIHtcbiAgICB0aGlzLm1haW5GcmFtV2lkdGggPSAkKCcjbWFpbi1mcmFtZScpLndpZHRoKCk7XG4gICAgdGhpcy5sZWZ0Q29udGFpbmVyV2lkdGggPSB0aGlzLm1haW5GcmFtV2lkdGggLyAyIC0gMjtcbiAgICB0aGlzLnJpZ2h0Q29udGFpbmVyV2lkdGggPSB0aGlzLm1haW5GcmFtV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemVFbmQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubGVmdENvbnRhaW5lcldpZHRoID0gdGhpcy5sZWZ0Q29udGFpbmVyV2lkdGggKyBldmVudC5lZGdlcy5yaWdodCAtIDI7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFyZ2luVG9wKCkge1xuICAgIGlmICh0aGlzLmxlZnRJbWFnZSAmJiB0aGlzLmxlZnRJbWFnZS5mb3JtYXQpIHtcbiAgICAgIHJldHVybiAoODAwIC8gdGhpcy5sZWZ0SW1hZ2UuZm9ybWF0KSAtIDIwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHB1YmxpYyBsZWZ0Q29udGFpbmVySGVpZ2h0KCkge1xuICAgIHJldHVybiAoODAwIC8gdGhpcy5sZWZ0SW1hZ2UuZm9ybWF0KSArIDMwO1xuICB9XG5cbn1cbiJdfQ==