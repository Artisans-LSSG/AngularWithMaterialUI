import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDeatilsComponent } from './child-deatils.component';

describe('ChildDeatilsComponent', () => {
  let component: ChildDeatilsComponent;
  let fixture: ComponentFixture<ChildDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
