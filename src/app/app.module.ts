import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ResizableDirective} from 'angular-resizable-element';
import {ImageComparerLibModule} from '../../projects/image-comparer-lib/src/lib/image-comparer-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ImageComparerLibModule
  ],
  providers: [ResizableDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
