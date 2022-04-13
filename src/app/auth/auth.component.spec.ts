import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthComponent } from "./auth.component";

describe('AuthComponent', () => {
    let component:AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AuthComponent ],
        providers: [
            {provide: Observable, useValue: true },
            {provide: AuthService, useValue: true },
        ]
      })
      .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(AuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
  });