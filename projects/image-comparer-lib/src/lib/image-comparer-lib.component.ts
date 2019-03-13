import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslationProvider} from './translation/translation-provider';

@Component({
  selector: 'lib-image-comparer-lib',
  template: `
    <app-image-container-panel></app-image-container-panel>
  `,
  styles: []
})
export class ImageComparerLibComponent implements OnInit, OnChanges {

  @Input()
  public locale: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translationSetup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.translationSetup();
  }

  private translationSetup() {
    TranslationProvider.setupTranslationProvider(this.translate, this.locale);
  }

}
