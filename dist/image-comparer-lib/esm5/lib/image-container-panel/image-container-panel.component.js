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
        console.log(this.leftContainerHeight);
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
                    template: "<div class=\"outer-picture-container\" (window:resize)=\"initWidth()\">\n  <app-image-loading-form [leftImage]=\"leftImage\" [rightImage]=\"rightImage\"\n                          (imageChanged)=\"initWidth()\"></app-image-loading-form>\n  <hr>\n  <div class=\"outer-picture-container\" id=\"outer-conatiner-id\">\n    <div id=\"main-frame\" class=\"image-display\">\n      <div>\n        <div id=\"picture-container1\" [style.width.px]=\"mainFramWidth / 2 -2\" *ngIf=\"leftImage && leftImage.image\" [style.width.px]=\"leftContainerWidth\" [style.height.px]=\"leftContainerHeight\"\n             class=\"picture-container--left\" mwlResizable\n             [enableGhostResize]=\"true\" (resizeEnd)=\"onResizeEnd($event)\">\n          <img class=\"picture\" id=\"left-picture-id\" [style.width.px]=\"mainFramWidth\" [src]=\"leftImage.image\">\n          <div class=\"handle\" mwlResizeHandle [style.height.%]=\"100\" [resizeEdges]=\"{ right: true}\">\n            <div class=\"knob\" [style.margin-top.px]=\"handleMargin\">\n              -<br>-<br>-<br>-<br>-<br>-<br>-\n            </div>\n          </div>\n        </div>\n        <div class=\"picture-container--right\" [style.width.px]=\"mainFramWidth\" *ngIf=\"rightImage && rightImage.image\">\n          <img class=\"picture\" [style.width.px]=\"mainFramWidth\" [src]=\"rightImage.image\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb250YWluZXItcGFuZWwvaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0UsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRXREO0lBY0U7SUFBZ0IsQ0FBQzs7OztJQUVqQiwrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsa0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBQ2xDLENBQUM7Ozs7SUFFTSxnREFBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVNLGtEQUFXOzs7O0lBQWxCLFVBQW1CLEtBQVU7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyw2NkNBQXFEOztpQkFFdEQ7Ozs7SUFvQ0QsbUNBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQW5DWSw0QkFBNEI7OztJQUN2QyxxREFBcUI7O0lBQ3JCLDBEQUEwQjs7SUFDMUIsMkRBQTJCOztJQUMzQiwyREFBMkI7O0lBQzNCLG9EQUFvQjs7SUFDcEIsaURBQStCOztJQUMvQixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ltYWdlRGV0YWlsc30gZnJvbSAnLi4vY2xhc3Nlcy9pbWFnZS1kZXRhaWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWltYWdlLWNvbnRhaW5lci1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1jb250YWluZXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jb250YWluZXItcGFuZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ29udGFpbmVyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBtYWluRnJhbVdpZHRoO1xuICBwdWJsaWMgbGVmdENvbnRhaW5lcldpZHRoO1xuICBwdWJsaWMgcmlnaHRDb250YWluZXJXaWR0aDtcbiAgcHVibGljIGxlZnRDb250YWluZXJIZWlnaHQ7XG4gIHB1YmxpYyBoYW5kbGVNYXJnaW47XG4gIHB1YmxpYyBsZWZ0SW1hZ2U6IEltYWdlRGV0YWlscztcbiAgcHVibGljIHJpZ2h0SW1hZ2U6IEltYWdlRGV0YWlscztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdFdpZHRoKCk7XG4gICAgdGhpcy5sZWZ0SW1hZ2UgPSBuZXcgSW1hZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5sZWZ0SW1hZ2UudHlwZSA9ICdsZWZ0JztcbiAgICB0aGlzLnJpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2VEZXRhaWxzKCk7XG4gICAgdGhpcy5yaWdodEltYWdlLnR5cGUgPSAncmlnaHQnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIGluaXRXaWR0aCgpIHtcbiAgICB0aGlzLm1haW5GcmFtV2lkdGggPSAkKCcjbWFpbi1mcmFtZScpLndpZHRoKCk7XG4gICAgdGhpcy5sZWZ0Q29udGFpbmVyV2lkdGggPSB0aGlzLm1haW5GcmFtV2lkdGggLyAyIC0gMjtcbiAgICB0aGlzLnJpZ2h0Q29udGFpbmVyV2lkdGggPSB0aGlzLm1haW5GcmFtV2lkdGg7XG4gICAgdGhpcy5sZWZ0Q29udGFpbmVySGVpZ2h0ID0gKCQoJyNsZWZ0LXBpY3R1cmUtaWQnKS5oZWlnaHQoKSkgKyA1MDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxlZnRDb250YWluZXJIZWlnaHQpXG4gICAgdGhpcy5oYW5kbGVNYXJnaW4gPSB0aGlzLmxlZnRDb250YWluZXJIZWlnaHQgLSA1MDtcbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZUVuZChldmVudDogYW55KSB7XG4gICAgdGhpcy5sZWZ0Q29udGFpbmVyV2lkdGggPSB0aGlzLmxlZnRDb250YWluZXJXaWR0aCArIGV2ZW50LmVkZ2VzLnJpZ2h0IC0gMjtcbiAgfVxuXG59XG4iXX0=