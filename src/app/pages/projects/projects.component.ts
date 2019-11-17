import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/services/image/image.service";

@Component({
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent implements OnInit {
  constructor(private _imageService: ImageService) {}

  public imageHeader: string;

  ngOnInit() {
    this._imageService.currentBackground.subscribe(
      background => (this.imageHeader = background)
    );
  }
}
