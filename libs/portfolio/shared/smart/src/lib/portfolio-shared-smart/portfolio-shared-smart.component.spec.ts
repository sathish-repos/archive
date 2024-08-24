import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioSharedSmartComponent } from './portfolio-shared-smart.component';

describe('PortfolioSharedSmartComponent', () => {
  let component: PortfolioSharedSmartComponent;
  let fixture: ComponentFixture<PortfolioSharedSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSharedSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioSharedSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
