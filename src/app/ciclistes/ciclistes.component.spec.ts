import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclistesComponent } from './ciclistes.component';

describe('CiclistesComponent', () => {
  let component: CiclistesComponent;
  let fixture: ComponentFixture<CiclistesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclistesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
