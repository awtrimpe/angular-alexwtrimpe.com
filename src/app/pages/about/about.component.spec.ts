import { OverlayContainer } from "@angular/cdk/overlay";
import {
  async,
  ComponentFixture,
  getTestBed,
  inject,
  TestBed
} from "@angular/core/testing";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AboutComponent } from "src/app/pages/about/about.component";
import { ImageService } from "src/app/services/image/image.service";

// =========== TEST SETUP ===================================
describe("AboutComponent", () => {
  let component: AboutComponent;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    let injector: TestBed;
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        RouterTestingModule
      ],
      declarations: [AboutComponent],
      providers: [ImageService]
    }).compileComponents();
    injector = getTestBed();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject(
    [MatSnackBar, OverlayContainer],
    (sb: MatSnackBar, oc: OverlayContainer) => {
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    }
  ));

  // =========== TESTS ===================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
