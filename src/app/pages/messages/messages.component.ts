import { Component, OnInit } from "@angular/core";
import { Message } from "src/app/models/interfaces.models";
import { ImageService } from "src/app/services/image/image.service";
import { MessageService } from "src/app/services/messages/messages.service";

@Component({
  selector: "app-home",
  templateUrl: "./messages.component.html"
})
export class MessagesComponent implements OnInit {
  constructor(
    private _imageService: ImageService,
    private _messageService: MessageService
  ) {}

  public messages: Message[];
  imageHeader: string;

  ngOnInit(): void {
    this._imageService.currentBackground.subscribe(
      background => (this.imageHeader = background)
    );
    this.getMessages();
  }

  private getMessages() {
    this._messageService.getMessages().subscribe(
      resp => {
        this.messages = resp;
      },
      err => {
        console.log("GET call in error", err);
      }
    );
  }
}
