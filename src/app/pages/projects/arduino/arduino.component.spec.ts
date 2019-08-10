import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ArduinoProjectComponent } from "src/app/pages/projects/arduino/arduino.component";

// =========== TEST SETUP ===================================
describe("ArduinoProjectComponent", () => {
  let component: ArduinoProjectComponent;
  let fixture: ComponentFixture<ArduinoProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ArduinoProjectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
