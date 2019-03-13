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
import { TranslateModule } from '@ngx-translate/core';
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
                    ImageCropperModule,
                    TranslateModule.forRoot()
                ],
                providers: [
                    ResizableDirective
                ],
                exports: [ImageComparerLibComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY29tcGFyZXItbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ltYWdlLWNvbXBhcmVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9pbWFnZS1jb21wYXJlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQXNCcEQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBbkJsQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtvQkFDekIscUJBQXFCO29CQUNyQiw0QkFBNEI7b0JBQzVCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixXQUFXO29CQUNYLGtCQUFrQjtvQkFDbEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtpQkFDMUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VDb21wYXJlckxpYkNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtY29tcGFyZXItbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ltYWdlQ3JvcHBlck1vZHVsZX0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHtSZXNpemFibGVEaXJlY3RpdmUsIFJlc2l6YWJsZU1vZHVsZX0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtJbWFnZUNyb3BwZXJDb21wb25lbnR9IGZyb20gJy4vaW1hZ2UtY3JvcHBlci9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0ltYWdlQ29udGFpbmVyUGFuZWxDb21wb25lbnR9IGZyb20gJy4vaW1hZ2UtY29udGFpbmVyLXBhbmVsL2ltYWdlLWNvbnRhaW5lci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtJbWFnZUxvYWRpbmdGb3JtQ29tcG9uZW50fSBmcm9tICcuL2ltYWdlLWxvYWRpbmctZm9ybS9pbWFnZS1sb2FkaW5nLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW1hZ2VDb21wYXJlckxpYkNvbXBvbmVudCxcbiAgICBJbWFnZUNyb3BwZXJDb21wb25lbnQsXG4gICAgSW1hZ2VDb250YWluZXJQYW5lbENvbXBvbmVudCxcbiAgICBJbWFnZUxvYWRpbmdGb3JtQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIFJlc2l6YWJsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSZXNpemFibGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW0ltYWdlQ29tcGFyZXJMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcGFyZXJMaWJNb2R1bGUgeyB9XG4iXX0=