import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteProductComponent } from './admin-delete-product.component';

describe('AdminDeleteProductComponent', () => {
  let component: AdminDeleteProductComponent;
  let fixture: ComponentFixture<AdminDeleteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
