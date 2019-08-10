import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export function handleError<T>(error: HttpErrorResponse): Observable<never> {
  return throwError(error.message);
}
