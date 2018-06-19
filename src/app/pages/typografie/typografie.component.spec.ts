import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypografieComponent } from './typografie.component';

describe('TypografieComponent', () => {
  let component: TypografieComponent;
  let fixture: ComponentFixture<TypografieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypografieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypografieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
