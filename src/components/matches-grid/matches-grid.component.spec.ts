import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesGridComponent } from './matches-grid.component';

describe('MatchesGridComponent', () => {
  let component: MatchesGridComponent;
  let fixture: ComponentFixture<MatchesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
