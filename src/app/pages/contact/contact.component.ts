import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ImageService } from "src/app/services/image/image.service";
import { MessageService } from "src/app/services/messages/messages.service";

@Component({
  templateUrl: "./contact.component.html"
})
export class ContactComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _imageService: ImageService,
    private _messageService: MessageService
  ) {}

  public imageHeader = "assets/images/babyMe.jpg";
  public contactForm: FormGroup;

  ngOnInit() {
    this._imageService.currentBackground.subscribe(
      background => (this.imageHeader = background)
    );
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      subject: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required)
    });
  }

  public getErrorMessage() {
    return this.contactForm.get("email").hasError("required")
      ? "You must enter a value"
      : this.contactForm.get("email").hasError("email")
      ? "Not a valid email"
      : "";
  }

  public onSubmit() {
    if (this.contactForm.valid) {
      this._messageService.submitMessage(this.contactForm.value).subscribe(
        resp => {
          this.openSnackBar(resp["msg"], "X");
          this.contactForm.reset();
        },
        err => {
          this.openSnackBar(err["err"], "X");
        }
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000
    });
  }
}
