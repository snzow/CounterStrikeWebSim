import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayernameComponent } from './playername.component';

describe('PlayernameComponent', () => {
  let component: PlayernameComponent;
  let fixture: ComponentFixture<PlayernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayernameComponent]
    });
    fixture = TestBed.createComponent(PlayernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
