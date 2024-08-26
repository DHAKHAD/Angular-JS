import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithSupportCliComponent } from './with-support-cli.component';

describe('WithSupportCliComponent', () => {
  let component: WithSupportCliComponent;
  let fixture: ComponentFixture<WithSupportCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithSupportCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithSupportCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
