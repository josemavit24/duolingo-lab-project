
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UserInfoComponent } from "./user-info.component";

describe('UserInfoComponent', () => {
    let component: UserInfoComponent;
    let fixture: ComponentFixture<UserInfoComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ UserInfoComponent ]
      })
      .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(UserInfoComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should display user first name and last name', () => {
        expect(component.myInfo?.FirstName).toEqual("Jose");
      });

  });