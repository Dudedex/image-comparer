/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './translation/translation-provider';
export class ImageComparerLibComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.translationSetup();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.translationSetup();
    }
    /**
     * @private
     * @return {?}
     */
    translationSetup() {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
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
ImageComparerLibComponent.ctorParameters = () => [
    { type: TranslateService }
];
ImageComparerLibComponent.propDecorators = {
    locale: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ImageComparerLibComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    ImageComparerLibComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29tcGFyZXItbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb21wYXJlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFTdkUsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUtwQyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7Ozs7SUFFcEQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOztHQUVUO2FBRUY7Ozs7WUFUTyxnQkFBZ0I7OztxQkFZckIsS0FBSzs7OztJQUFOLDJDQUNzQjs7Ozs7SUFFViw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0aW9uUHJvdmlkZXJ9IGZyb20gJy4vdHJhbnNsYXRpb24vdHJhbnNsYXRpb24tcHJvdmlkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW1hZ2UtY29tcGFyZXItbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YXBwLWltYWdlLWNvbnRhaW5lci1wYW5lbD48L2FwcC1pbWFnZS1jb250YWluZXItcGFuZWw+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDb21wYXJlckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGlvblNldHVwKCkge1xuICAgIFRyYW5zbGF0aW9uUHJvdmlkZXIuc2V0dXBUcmFuc2xhdGlvblByb3ZpZGVyKHRoaXMudHJhbnNsYXRlLCB0aGlzLmxvY2FsZSk7XG4gIH1cblxufVxuIl19