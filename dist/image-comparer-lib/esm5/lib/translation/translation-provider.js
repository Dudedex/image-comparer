/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { De } from './de';
import { En } from './en';
var TranslationProvider = /** @class */ (function () {
    function TranslationProvider() {
    }
    /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    TranslationProvider.setupTranslationProvider = /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    function (translate, defaultLocale) {
        translate.setTranslation('de', De.translation(), true);
        translate.setTranslation('en', En.translation(), true);
        if (defaultLocale) {
            translate.setDefaultLang(defaultLocale);
        }
        else {
            translate.setDefaultLang('de');
        }
    };
    return TranslationProvider;
}());
export { TranslationProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pbWFnZS1jb21wYXJlci1saWIvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRpb24vdHJhbnNsYXRpb24tcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV4QjtJQUFBO0lBVUEsQ0FBQzs7Ozs7O0lBVGUsNENBQXdCOzs7OztJQUF0QyxVQUF1QyxTQUEyQixFQUFFLGFBQXNCO1FBQ3hGLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxhQUFhLEVBQUU7WUFDakIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFWRCxJQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtEZX0gZnJvbSAnLi9kZSc7XHJcbmltcG9ydCB7RW59IGZyb20gJy4vZW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uUHJvdmlkZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBUcmFuc2xhdGlvblByb3ZpZGVyKHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgZGVmYXVsdExvY2FsZT86IHN0cmluZykge1xyXG4gICAgdHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdkZScsIERlLnRyYW5zbGF0aW9uKCksIHRydWUpO1xyXG4gICAgdHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdlbicsIEVuLnRyYW5zbGF0aW9uKCksIHRydWUpO1xyXG4gICAgaWYgKGRlZmF1bHRMb2NhbGUpIHtcclxuICAgICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKGRlZmF1bHRMb2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdkZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=