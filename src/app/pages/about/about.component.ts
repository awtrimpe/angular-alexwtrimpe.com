import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/services/image/image.service";

@Component({
  templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
  constructor(private _imageService: ImageService) {}
  imageHeader: string;

  ngOnInit() {
    this._imageService.currentBackground.subscribe(
      background => (this.imageHeader = background)
    );
  }
}
