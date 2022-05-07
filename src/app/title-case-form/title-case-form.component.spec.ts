import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseFormComponent } from './title-case-form.component';

describe('TitleCaseFormComponent', () => {
  let component: TitleCaseFormComponent;
  let fixture: ComponentFixture<TitleCaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCaseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
