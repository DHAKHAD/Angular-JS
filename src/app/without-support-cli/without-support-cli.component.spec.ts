import { ComponentFixture, TestBed } from '@angular/core/testing';

import { withoutSupportCliComponent } from './without-support-cli.component';

describe('withoutSupportCliComponent', () => {
  let component: withoutSupportCliComponent;
  let fixture: ComponentFixture<withoutSupportCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ withoutSupportCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(withoutSupportCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
