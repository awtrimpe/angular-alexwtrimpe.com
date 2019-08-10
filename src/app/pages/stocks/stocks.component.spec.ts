import { OverlayContainer } from "@angular/cdk/overlay";
import {
  async,
  ComponentFixture,
  getTestBed,
  inject,
  TestBed
} from "@angular/core/testing";
import {
  MatSnackBar,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of, throwError } from "rxjs";
import { Stock } from "src/app/models/interfaces.models";
import { StocksComponent } from "src/app/pages/stocks/stocks.component";
import { ImageService } from "src/app/services/image/image.service";
import { StockService } from "src/app/services/stocks/stocks.service";

// ================== TEST DATA =============================
const goodStocks: Stock[] = [
  {
    id: 1,
    price: 95.69,
    quarterPercentage: 68,
    stockID: "WEEZ",
    stockName: "Lil Wayne Records",
    yearPercentage: 100
  },
  {
    id: 2,
    price: 0.94,
    quarterPercentage: 25,
    stockID: "PAIN",
    stockName: "T-Pain Media",
    yearPercentage: 125
  }
];

// =========== INTERCEPTING FUNCTIONS =======================
class FakeStockService {
  getGoodStocks(): Observable<Stock[]> {
    return of(goodStocks);
  }
}

// =========== TEST SETUP ===================================
describe("StocksComponent", () => {
  let component: StocksComponent;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<StocksComponent>;
  let _stockService: StockService;

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
      declarations: [StocksComponent],
      providers: [
        ImageService,
        { provide: StockService, useClass: FakeStockService }
      ]
    }).compileComponents();
    injector = getTestBed();
    _stockService = injector.get(StockService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
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

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should set array of good stocks to returned array from API", () => {
    expect(component.goodStocks).toBeDefined();
  });

  it("should display message in snackbar on erroneous call", () => {
    spyOn(_stockService, "getGoodStocks").and.returnValue(
      throwError({ status: 404 })
    );
    component.ngOnInit();
    expect(
      overlayContainerElement.querySelector("simple-snack-bar").textContent
    ).toBe("Error retrieving stocksX");
  });

  it("should render the table correctly", () => {
    const tableRows = fixture.nativeElement.querySelectorAll("tr");
    expect(tableRows.length).toBe(3);
    // Data rows
    const row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toContain("1");
    expect(row1.cells[1].innerHTML).toContain("95.69");
    expect(row1.cells[2].innerHTML).toContain("WEEZ");
    expect(row1.cells[3].innerHTML).toContain("Lil Wayne Records");
    expect(row1.cells[4].innerHTML).toContain("68");
    expect(row1.cells[5].innerHTML).toContain("100");
  });
});
