import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ImageService {
  private background = new BehaviorSubject("assets/images/alexwtrimpe.JPG");
  currentBackground = this.background.asObservable();

  constructor() {}

  changeBackground(message: string) {
    this.background.next(`assets/images/${message}`);
  }
}
