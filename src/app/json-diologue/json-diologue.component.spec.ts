import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDiologueComponent } from './json-diologue.component';

describe('JsonDiologueComponent', () => {
  let component: JsonDiologueComponent;
  let fixture: ComponentFixture<JsonDiologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDiologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
