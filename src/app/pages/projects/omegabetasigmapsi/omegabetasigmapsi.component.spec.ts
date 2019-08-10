import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { OmegaBetaSigmaPsiProjectComponent } from "src/app/pages/projects/omegabetasigmapsi/omegabetasigmapsi.component";

// =========== TEST SETUP ===================================
describe("OmegaBetaSigmaPsiProjectComponent", () => {
  let component: OmegaBetaSigmaPsiProjectComponent;
  let fixture: ComponentFixture<OmegaBetaSigmaPsiProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [OmegaBetaSigmaPsiProjectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmegaBetaSigmaPsiProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
