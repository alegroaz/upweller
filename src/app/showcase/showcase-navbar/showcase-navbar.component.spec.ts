import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseNavbarComponent } from './showcase-navbar.component';

describe('ShowcaseNavbarComponent', () => {
  let component: ShowcaseNavbarComponent;
  let fixture: ComponentFixture<ShowcaseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
