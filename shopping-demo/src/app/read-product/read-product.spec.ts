import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProduct } from './read-product';

describe('ReadProduct', () => {
  let component: ReadProduct;
  let fixture: ComponentFixture<ReadProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
