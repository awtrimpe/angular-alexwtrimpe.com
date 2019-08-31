import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import { MatRippleModule } from "@angular/material/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NgxHighlightJsModule,
  NGX_HIGHLIGHT_JS_DEFAULT_THEME
} from "@nowzoo/ngx-highlight-js";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";
import { AboutComponent } from "src/app/pages/about/about.component";
import { ABeginnerInvestorComponent } from "src/app/pages/blog/a_beginner_investor/a_beginner_investor.component";
import { BlogComponent } from "src/app/pages/blog/blog.component";
import { MovingToANewCityComponent } from "src/app/pages/blog/moving_to_a_new_city/moving_to_a_new_city.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { MessagesComponent } from "src/app/pages/messages/messages.component";
import { AdtechSystemsProjectComponent } from "src/app/pages/projects/adtechsystems/adtechsystems.component";
import { AlexWTrimpeProjectComponent } from "src/app/pages/projects/alexwtrimpecom/alexwtrimpecom.component";
import { ArduinoProjectComponent } from "src/app/pages/projects/arduino/arduino.component";
import { OmegaBetaSigmaPsiProjectComponent } from "src/app/pages/projects/omegabetasigmapsi/omegabetasigmapsi.component";
import { ProjectsComponent } from "src/app/pages/projects/projects.component";
import { StocksComponent } from "src/app/pages/stocks/stocks.component";
import { ImageService } from "src/app/services/image/image.service";
import { MessageService } from "src/app/services/messages/messages.service";
import { StockService } from "src/app/services/stocks/stocks.service";

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule {}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AdtechSystemsProjectComponent,
    AlexWTrimpeProjectComponent,
    ABeginnerInvestorComponent,
    AboutComponent,
    BlogComponent,
    AppComponent,
    ContactComponent,
    HomeComponent,
    MessagesComponent,
    MovingToANewCityComponent,
    ProjectsComponent,
    StocksComponent,
    ArduinoProjectComponent,
    OmegaBetaSigmaPsiProjectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxHighlightJsModule.forRoot()
  ],
  providers: [
    MessageService,
    StockService,
    Title,
    ImageService,
    { provide: NGX_HIGHLIGHT_JS_DEFAULT_THEME, useValue: "atelier-cave-dark" }
  ]
})
export class AppModule {}
