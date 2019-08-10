import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AdtechSystemsProjectComponent } from "src/app/pages/projects/adtechsystems/adtechsystems.component";

// =========== TEST SETUP ===================================
describe("AdtechSystemsProjectComponent", () => {
  let component: AdtechSystemsProjectComponent;
  let fixture: ComponentFixture<AdtechSystemsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdtechSystemsProjectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdtechSystemsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
