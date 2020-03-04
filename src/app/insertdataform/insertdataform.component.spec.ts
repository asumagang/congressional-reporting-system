import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdataformComponent } from './insertdataform.component';

describe('InsertdataformComponent', () => {
  let component: InsertdataformComponent;
  let fixture: ComponentFixture<InsertdataformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertdataformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
