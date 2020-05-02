import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedSinglePage } from './feed-single.page';

describe('FeedSinglePage', () => {
  let component: FeedSinglePage;
  let fixture: ComponentFixture<FeedSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
