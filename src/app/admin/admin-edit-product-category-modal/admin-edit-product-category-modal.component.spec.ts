import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProductCategoryModalComponent } from './admin-edit-product-category-modal.component';

describe('AdminEditProductCategoryModalComponent', () => {
  let component: AdminEditProductCategoryModalComponent;
  let fixture: ComponentFixture<AdminEditProductCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditProductCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditProductCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
