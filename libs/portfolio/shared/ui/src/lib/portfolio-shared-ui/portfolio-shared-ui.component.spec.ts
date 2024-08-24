import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioSharedUiComponent } from './portfolio-shared-ui.component';

describe('PortfolioSharedUiComponent', () => {
  let component: PortfolioSharedUiComponent;
  let fixture: ComponentFixture<PortfolioSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
