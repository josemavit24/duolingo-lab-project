import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { GetStartedCardComponent } from "./get-started-card.component";


describe('GetStartedComponent', () => {
    let component: GetStartedCardComponent;
    let fixture: ComponentFixture<GetStartedCardComponent>;
    
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GetStartedCardComponent ]
      })
      .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(GetStartedCardComponent);
      component = fixture.componentInstance;

      
      fixture.detectChanges();
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it
    
  });