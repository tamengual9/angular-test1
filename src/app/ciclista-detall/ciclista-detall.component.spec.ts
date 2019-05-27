import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclistaDetallComponent } from './ciclista-detall.component';

describe('CiclistaDetallComponent', () => {
  let component: CiclistaDetallComponent;
  let fixture: ComponentFixture<CiclistaDetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclistaDetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclistaDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
