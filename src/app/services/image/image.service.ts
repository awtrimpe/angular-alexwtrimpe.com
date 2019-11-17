import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ImageService {
  private background = new BehaviorSubject("assets/images/alexwtrimpe.JPG");
  public currentBackground = this.background.asObservable();

  constructor() {}

  /**
   * Sets the background of the page to the given image file
   * @param image the image file name to be used
   */
  public changeBackground(image: string) {
    this.background.next(`assets/images/${image}`);
  }
}
