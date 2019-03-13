/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './translation/translation-provider';
var ImageComparerLibComponent = /** @class */ (function () {
    function ImageComparerLibComponent(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ImageComparerLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.translationSetup();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageComparerLibComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.translationSetup();
    };
    /**
     * @private
     * @return {?}
     */
    ImageComparerLibComponent.prototype.translationSetup = /**
     * @private
     * @return {?}
     */
    function () {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    };
    ImageComparerLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-image-comparer-lib',
                    template: "\n    <app-image-container-panel></app-image-container-panel>\n  "
                }] }
    ];
    /** @nocollapse */
    ImageComparerLibComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    ImageComparerLibComponent.propDecorators = {
        locale: [{ type: Input }]
    };
    return ImageComparerLibComponent;
}());
export { ImageComparerLibComponent };
if (false) {
    /** @type {?} */
    ImageComparerLibComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    ImageComparerLibComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29tcGFyZXItbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb21wYXJlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFdkU7SUFZRSxtQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7O0lBRXBELDRDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sb0RBQWdCOzs7O0lBQXhCO1FBQ0UsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsbUVBRVQ7aUJBRUY7Ozs7Z0JBVE8sZ0JBQWdCOzs7eUJBWXJCLEtBQUs7O0lBaUJSLGdDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FuQlkseUJBQXlCOzs7SUFFcEMsMkNBQ3NCOzs7OztJQUVWLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRpb25Qcm92aWRlcn0gZnJvbSAnLi90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi1wcm92aWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1pbWFnZS1jb21wYXJlci1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhcHAtaW1hZ2UtY29udGFpbmVyLXBhbmVsPjwvYXBwLWltYWdlLWNvbnRhaW5lci1wYW5lbD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBhcmVyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50cmFuc2xhdGlvblNldHVwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGlvblNldHVwKCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0aW9uU2V0dXAoKSB7XG4gICAgVHJhbnNsYXRpb25Qcm92aWRlci5zZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodGhpcy50cmFuc2xhdGUsIHRoaXMubG9jYWxlKTtcbiAgfVxuXG59XG4iXX0=