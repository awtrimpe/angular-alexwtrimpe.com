import { OverlayContainer } from "@angular/cdk/overlay";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {
  async,
  ComponentFixture,
  getTestBed,
  inject,
  TestBed
} from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatSnackBar,
  MatSnackBarModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of, throwError } from "rxjs";
import { GenericMessage, Message } from "src/app/models/interfaces.models";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { ImageService } from "src/app/services/image/image.service";
import { MessageService } from "src/app/services/messages/messages.service";

const response: GenericMessage = {
  msg: "You message was submitted successfully."
};

// =========== INTERCEPTING FUNCTIONS =======================
class FakeMessageService {
  submitMessage(message: Message): Observable<GenericMessage> {
    return of(response);
  }
}

// =========== TEST SETUP ===================================
describe("ContactComponent", () => {
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;
  let snackBar: MatSnackBar;
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let _messageService: MessageService;

  beforeEach(async(() => {
    let injector: TestBed;
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ContactComponent],
      providers: [
        ImageService,
        { provide: MessageService, useClass: FakeMessageService }
      ]
    }).compileComponents();
    injector = getTestBed();
    _messageService = injector.get(MessageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject(
    [MatSnackBar, OverlayContainer],
    (sb: MatSnackBar, oc: OverlayContainer) => {
      snackBar = sb;
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    }
  ));

  // =========== TESTS ======================================
  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe("#getErrorMessage()", () => {
    it("should return the appropriate error message for the form ", () => {
      component.contactForm.get("email").setValue("bad_email_val");
      expect(component.getErrorMessage()).toBe("Not a valid email");
    });
  });

  describe("#onSubmit()", () => {
    it("should submit a valid form", () => {
      component.contactForm.get("name").setValue("jbeam");
      component.contactForm.get("email").setValue("jbeam@netzero.net");
      component.contactForm.get("subject").setValue("Since 1795");
      component.contactForm.get("message").setValue("Here's to what's inside.");
      component.onSubmit();
      fixture.detectChanges();
      expect(
        overlayContainerElement.querySelector("simple-snack-bar").textContent
      ).toContain("You message was submitted successfully.");
    });

    it("should submit display error message on erroneous submission", () => {
      spyOn(_messageService, "submitMessage").and.returnValue(
        throwError({
          status: 404,
          err: "An error has occured."
        })
      );
      component.contactForm.get("name").setValue("jbeam");
      component.contactForm.get("email").setValue("jbeam@netzero.net");
      component.contactForm.get("subject").setValue("Since 1795");
      component.contactForm.get("message").setValue("Here's to what's inside.");
      component.onSubmit();
      fixture.detectChanges();
      expect(
        overlayContainerElement.querySelector("simple-snack-bar").textContent
      ).toContain("An error has occured.");
    });
  });
});
