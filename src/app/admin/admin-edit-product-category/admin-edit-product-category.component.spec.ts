import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProductCategoryComponent } from './admin-edit-product-category.component';

describe('AdminEditProductCategoryComponent', () => {
  let component: AdminEditProductCategoryComponent;
  let fixture: ComponentFixture<AdminEditProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
