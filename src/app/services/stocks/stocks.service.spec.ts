import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, getTestBed, TestBed } from "@angular/core/testing";
import { StockService } from "src/app/services/stocks/stocks.service";

// =========== TEST SETUP ===================================
describe("StockService", () => {
  let stockService: StockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StockService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = getTestBed();
    stockService = injector.get(StockService);
  });

  // =========== TESTS ======================================
  describe("#getGoodStocks()", () => {
    it("should return on function call", () => {
      const resp = stockService.getGoodStocks();
      expect(resp).toBeDefined();
    });
  });
});
