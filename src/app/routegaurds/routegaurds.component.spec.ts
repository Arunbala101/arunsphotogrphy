import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutegaurdsComponent } from './routegaurds.component';

describe('RoutegaurdsComponent', () => {
  let component: RoutegaurdsComponent;
  let fixture: ComponentFixture<RoutegaurdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutegaurdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutegaurdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
