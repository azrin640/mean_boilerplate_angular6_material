import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteProductCategoryModalComponent } from './admin-delete-product-category-modal.component';

describe('AdminDeleteProductCategoryModalComponent', () => {
  let component: AdminDeleteProductCategoryModalComponent;
  let fixture: ComponentFixture<AdminDeleteProductCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteProductCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteProductCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
