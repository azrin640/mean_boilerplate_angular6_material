import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewProductCategoryComponent } from './admin-new-product-category.component';

describe('AdminNewProductCategoryComponent', () => {
  let component: AdminNewProductCategoryComponent;
  let fixture: ComponentFixture<AdminNewProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
