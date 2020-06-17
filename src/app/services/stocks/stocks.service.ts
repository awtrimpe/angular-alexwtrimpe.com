import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Stock } from "src/app/models/interfaces.models";
import { handleError } from "src/app/services/error/error.service";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class StockService {
  constructor(private http: HttpClient) {}

  /**
   * Returns all stocks stored in the database that meeting the requirements of
   * above 99% increase for the year and above a 24% increase for the last quarter
   */
  public getGoodStocks(): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(environment.apiURL + "stocks/goodStocks")
      .pipe(catchError(handleError));
  }
}
