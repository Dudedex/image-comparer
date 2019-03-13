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
        this.leftContainerHeight = ($('#left-picture-id').height()) + 50;
        this.handleMargin = this.leftContainerHeight - 50;
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
                template: "<div class=\"outer-picture-container\" (window:resize)=\"initWidth()\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\" id=\"outer-conatiner-id\" *ngIf=\"leftImage && leftImage.image && rightImage && rightImage.image\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <div>\n        <div id=\"picture-container1\" [style.width.px]=\"mainFramWidth / 2 -2\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" id=\"left-picture-id\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"handleMargin\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" [style.width.px]=\"mainFramWidth\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n",
                styles: [".outer-picture-container{max-width:800px;margin:0 auto}.image-display{max-width:760px;margin:0 auto;position:relative}.clearfix{clear:both}.picture-container--left{overflow-x:hidden;overflow-y:hidden;float:left;position:absolute;top:0;left:0;z-index:7}.handle{position:absolute;top:0;right:0;height:100px;border-right:1px solid #fff;border-left:1px solid #000}.handle .knob{position:absolute;width:12px;height:50px;margin-left:-12px;background-color:#fff;color:#000;line-height:.5;z-index:100;text-align:center;border:1px solid #000;cursor:-webkit-grab;cursor:grab}.picture-container--right{overflow-x:hidden;float:left;z-index:5}"]
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
    ImageContainerPanelComponent.prototype.leftContainerHeight;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.handleMargin;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.leftImage;
    /** @type {?} */
    ImageContainerPanelComponent.prototype.rightImage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb250YWluZXItcGFuZWwvaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0UsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBT3RELE1BQU0sT0FBTyw0QkFBNEI7SUFTdkMsZ0JBQWdCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMscy9DQUFxRDs7YUFFdEQ7Ozs7OztJQUVDLHFEQUFxQjs7SUFDckIsMERBQTBCOztJQUMxQiwyREFBMkI7O0lBQzNCLDJEQUEyQjs7SUFDM0Isb0RBQW9COztJQUNwQixpREFBK0I7O0lBQy9CLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW1hZ2VEZXRhaWxzfSBmcm9tICcuLi9jbGFzc2VzL2ltYWdlLWRldGFpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtY29udGFpbmVyLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNvbnRhaW5lci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWNvbnRhaW5lci1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDb250YWluZXJQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIG1haW5GcmFtV2lkdGg7XG4gIHB1YmxpYyBsZWZ0Q29udGFpbmVyV2lkdGg7XG4gIHB1YmxpYyByaWdodENvbnRhaW5lcldpZHRoO1xuICBwdWJsaWMgbGVmdENvbnRhaW5lckhlaWdodDtcbiAgcHVibGljIGhhbmRsZU1hcmdpbjtcbiAgcHVibGljIGxlZnRJbWFnZTogSW1hZ2VEZXRhaWxzO1xuICBwdWJsaWMgcmlnaHRJbWFnZTogSW1hZ2VEZXRhaWxzO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0V2lkdGgoKTtcbiAgICB0aGlzLmxlZnRJbWFnZSA9IG5ldyBJbWFnZURldGFpbHMoKTtcbiAgICB0aGlzLmxlZnRJbWFnZS50eXBlID0gJ2xlZnQnO1xuICAgIHRoaXMucmlnaHRJbWFnZSA9IG5ldyBJbWFnZURldGFpbHMoKTtcbiAgICB0aGlzLnJpZ2h0SW1hZ2UudHlwZSA9ICdyaWdodCc7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gIH1cblxuICBwdWJsaWMgaW5pdFdpZHRoKCkge1xuICAgIHRoaXMubWFpbkZyYW1XaWR0aCA9ICQoJyNtYWluLWZyYW1lJykud2lkdGgoKTtcbiAgICB0aGlzLmxlZnRDb250YWluZXJXaWR0aCA9IHRoaXMubWFpbkZyYW1XaWR0aCAvIDIgLSAyO1xuICAgIHRoaXMucmlnaHRDb250YWluZXJXaWR0aCA9IHRoaXMubWFpbkZyYW1XaWR0aDtcbiAgICB0aGlzLmxlZnRDb250YWluZXJIZWlnaHQgPSAoJCgnI2xlZnQtcGljdHVyZS1pZCcpLmhlaWdodCgpKSArIDUwO1xuICAgIHRoaXMuaGFuZGxlTWFyZ2luID0gdGhpcy5sZWZ0Q29udGFpbmVySGVpZ2h0IC0gNTA7XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemVFbmQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubGVmdENvbnRhaW5lcldpZHRoID0gdGhpcy5sZWZ0Q29udGFpbmVyV2lkdGggKyBldmVudC5lZGdlcy5yaWdodCAtIDI7XG4gIH1cblxufVxuIl19