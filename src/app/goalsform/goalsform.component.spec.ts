import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsformComponent } from './goalsform.component';

describe('GoalsformComponent', () => {
  let component: GoalsformComponent;
  let fixture: ComponentFixture<GoalsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
