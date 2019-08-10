import {
  async,
  ComponentFixture,
  inject,
  TestBed
} from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "src/app/app.component";
import { ImageService } from "src/app/services/image/image.service";

// =========== TEST SETUP ===================================
describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent],
      providers: [ImageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should place the current year into the footer", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".copyright").textContent).toContain(
      new Date().getFullYear()
    );
  });

  // it("should set title and change background on router activation end", inject(
  //   [Router],
  //   (router: Router) => {
  //     router.navigate(["/about"], { relativeTo: { snapshot: {
  //       routeConfig: null,
  //       url: [{path: "string"
  //         parameters: {[""]: ""}, parameterMap: }}]
  //       params: of({[1]: ""}),
  //       queryParams: Params
  //       fragment: ""
  //       data: { title: "Projects", background: "boats.JPG" },
  //       outlet: ""
  //       component: null,
  //       root: ActivatedRouteSnapshot
  //       parent: null,
  //       firstChild: null,
  //       children: ActivatedRouteSnapshot[]
  //       pathFromRoot: ActivatedRouteSnapshot[]
  //       paramMap: ParamMap
  //       queryParamMap: ParamMap}}});
  //   }
  // ));

  it("should set title and change background on router activation end", inject(
    [Router],
    (router: Router) => {
      router.navigate([""]);
      fixture.ngZone.run(() => {
        router.initialNavigation();
        router.navigate([""]);
      });
    }
  ));

  describe("#navController()", () => {
    it("should change boolean on whether the menu is opened or closed", () => {
      expect(component.openMenu).toBeTruthy();
      component.navController();
      expect(component.openMenu).toBeFalsy();
    });
  });

  describe("#dropdownMenuController()", () => {
    it("should switch boolean of submenu whether opened or closed", () => {
      expect(component.projects).toBeFalsy();
      component.dropdownMenuController("projects");
      expect(component.projects).toBeTruthy();
    });
  });

  describe("#goToTop()", () => {
    it("should scroll to top of window", () => {
      const windowScroll = spyOn(window, "scroll");
      component.goToTop();
      expect(windowScroll).toHaveBeenCalled();
    });
  });
});
