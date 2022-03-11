import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageLabelComponent } from './language-label.component';

describe('LanguageLabelComponent', () => {
  let component: LanguageLabelComponent;
  let fixture: ComponentFixture<LanguageLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
