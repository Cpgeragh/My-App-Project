import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttractionsPage } from './attractions.page';

describe('AttractionsPage', () => {
  let component: AttractionsPage;
  let fixture: ComponentFixture<AttractionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AttractionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
