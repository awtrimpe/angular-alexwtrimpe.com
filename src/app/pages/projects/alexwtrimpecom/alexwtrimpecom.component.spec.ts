import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AlexWTrimpeProjectComponent } from "src/app/pages/projects/alexwtrimpecom/alexwtrimpecom.component";

// =========== TEST SETUP ===================================
describe("AlexWTrimpeProjectComponent", () => {
  let component: AlexWTrimpeProjectComponent;
  let fixture: ComponentFixture<AlexWTrimpeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AlexWTrimpeProjectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexWTrimpeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
