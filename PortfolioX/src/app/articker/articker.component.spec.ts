import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARtickerComponent } from './articker.component';

describe('ARtickerComponent', () => {
  let component: ARtickerComponent;
  let fixture: ComponentFixture<ARtickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARtickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARtickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
