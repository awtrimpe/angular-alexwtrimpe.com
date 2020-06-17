import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { GenericMessage, Message } from "src/app/models/interfaces.models";
import { handleError } from "src/app/services/error/error.service";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MessageService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  /**
   * Returns all stocks stored in the database that meeting the requirements of
   * above 99% increase for the year and above a 24% increase for the last quarter
   */
  public getMessages(): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${environment.apiURL}messages/getMessages`)
      .pipe(catchError(handleError));
  }

  /**
   * Submits message to be stored in the backend database
   * @param message the formatted message to submit
   */
  public submitMessage(message: Message): Observable<GenericMessage> {
    return this.http
      .post<GenericMessage>(
        `${environment.apiURL}messages/formSubmission`,
        message,
        this.httpOptions
      )
      .pipe(catchError(handleError));
  }
}
