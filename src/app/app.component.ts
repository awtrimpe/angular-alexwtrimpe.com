import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivationEnd, Router } from "@angular/router";
import { ImageService } from "src/app/services/image/image.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  constructor(
    private _imageService: ImageService,
    private _router: Router,
    private _titleService: Title
  ) {}

  public year = new Date().getFullYear();
  public projects = false;
  public openMenu = true;

  ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof ActivationEnd) {
        this._titleService.setTitle(
          `Alex W. Trimpe | ${event.snapshot.data["title"]}`
        );
        this._imageService.changeBackground(event.snapshot.data["background"]);
      }
    });
  }

  public navController() {
    this.openMenu = !this.openMenu;
  }

  public dropdownMenuController(menuName) {
    if (menuName === "projects") {
      this.projects = !this.projects;
    }
  }

  public goToTop() {
    window.scroll(0, 0);
  }
}
