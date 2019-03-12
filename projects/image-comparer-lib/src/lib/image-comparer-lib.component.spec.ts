import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComparerLibComponent } from './image-comparer-lib.component';

describe('ImageComparerLibComponent', () => {
  let component: ImageComparerLibComponent;
  let fixture: ComponentFixture<ImageComparerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageComparerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComparerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
