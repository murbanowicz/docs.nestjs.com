import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [ TabsComponent ]
    })
    .compileComponents();
  }));

  let fixture: ComponentFixture<TabsComponent>;
  let component: TabsComponent;
  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
