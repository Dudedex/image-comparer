/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ImageComparerLibComponent } from './image-comparer-lib.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ResizableDirective, ResizableModule } from 'angular-resizable-element';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ImageContainerPanelComponent } from './image-container-panel/image-container-panel.component';
import { ImageLoadingFormComponent } from './image-loading-form/image-loading-form.component';
export class ImageComparerLibModule {
}
ImageComparerLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ImageComparerLibComponent,
                    ImageCropperComponent,
                    ImageContainerPanelComponent,
                    ImageLoadingFormComponent
                ],
                imports: [
                    BrowserModule,
                    ResizableModule,
                    FormsModule,
                    ImageCropperModule
                ],
                providers: [
                    ResizableDirective
                ],
                exports: [ImageComparerLibComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29tcGFyZXItbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb21wYXJlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBcUI1RixNQUFNLE9BQU8sc0JBQXNCOzs7WUFsQmxDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLDRCQUE0QjtvQkFDNUIseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsa0JBQWtCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUNvbXBhcmVyTGliQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1jb21wYXJlci1saWIuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SW1hZ2VDcm9wcGVyTW9kdWxlfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQge1Jlc2l6YWJsZURpcmVjdGl2ZSwgUmVzaXphYmxlTW9kdWxlfSBmcm9tICdhbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50JztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0ltYWdlQ3JvcHBlckNvbXBvbmVudH0gZnJvbSAnLi9pbWFnZS1jcm9wcGVyL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50JztcbmltcG9ydCB7SW1hZ2VDb250YWluZXJQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9pbWFnZS1jb250YWluZXItcGFuZWwvaW1hZ2UtY29udGFpbmVyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0ltYWdlTG9hZGluZ0Zvcm1Db21wb25lbnR9IGZyb20gJy4vaW1hZ2UtbG9hZGluZy1mb3JtL2ltYWdlLWxvYWRpbmctZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBJbWFnZUNvbXBhcmVyTGliQ29tcG9uZW50LFxuICAgIEltYWdlQ3JvcHBlckNvbXBvbmVudCxcbiAgICBJbWFnZUNvbnRhaW5lclBhbmVsQ29tcG9uZW50LFxuICAgIEltYWdlTG9hZGluZ0Zvcm1Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEltYWdlQ3JvcHBlck1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSZXNpemFibGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW0ltYWdlQ29tcGFyZXJMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcGFyZXJMaWJNb2R1bGUgeyB9XG4iXX0=