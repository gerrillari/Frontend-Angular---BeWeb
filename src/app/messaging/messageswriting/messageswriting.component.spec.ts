import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageswritingComponent } from './messageswriting.component';

describe('MessageswritingComponent', () => {
  let component: MessageswritingComponent;
  let fixture: ComponentFixture<MessageswritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageswritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageswritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
