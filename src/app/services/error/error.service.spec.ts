import { HttpErrorResponse } from "@angular/common/http";
import { handleError } from "src/app/services/error/error.service";

// =========== TESTS ========================================
describe("ErrorService", () => {
  it("should throw an error", () => {
    const err = new HttpErrorResponse({});
    const resp = handleError(err);
    expect(resp).toBeDefined();
  });
});
