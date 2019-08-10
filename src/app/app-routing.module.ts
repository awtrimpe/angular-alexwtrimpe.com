import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "src/app/pages/about/about.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { MessagesComponent } from "src/app/pages/messages/messages.component";
import { AdtechSystemsProjectComponent } from "src/app/pages/projects/adtechsystems/adtechsystems.component";
import { AlexWTrimpeProjectComponent } from "src/app/pages/projects/alexwtrimpecom/alexwtrimpecom.component";
import { ArduinoProjectComponent } from "src/app/pages/projects/arduino/arduino.component";
import { OmegaBetaSigmaPsiProjectComponent } from "src/app/pages/projects/omegabetasigmapsi/omegabetasigmapsi.component";
import { ProjectsComponent } from "src/app/pages/projects/projects.component";
import { StocksComponent } from "src/app/pages/stocks/stocks.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { title: "Home" } },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About", background: "alexBeach.JPG" }
  },
  {
    path: "projects",
    component: ProjectsComponent,
    data: { title: "Projects", background: "boats.JPG" }
  },
  {
    path: "projects/adtechsystems",
    component: AdtechSystemsProjectComponent,
    data: { title: "Projects - adtechsystems.com" }
  },
  {
    path: "projects/alexwtrimpe",
    component: AlexWTrimpeProjectComponent,
    data: { title: "Projects - alexwtrimpe.com" }
  },
  {
    path: "projects/arduino",
    component: ArduinoProjectComponent,
    data: { title: "Projects - Arduino" }
  },
  {
    path: "projects/omega-beta-sigma-psi",
    component: OmegaBetaSigmaPsiProjectComponent,
    data: { title: "Projects - omega.betasigmapsi.org" }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact", background: "babyMe.jpg" }
  },
  // { path: "blog", component: BlogComponent },
  // {
  //   path: "moving_to_a_new_city",
  //   component: MovingToANewCityComponent,
  //   data: { title: "", background: "" }
  // },
  // {
  //   path: "a_beginner_investor",
  //   component: ABeginnerInvestorComponent,
  //   data: { title: "", background: "" }
  // },
  {
    path: "messages",
    component: MessagesComponent,
    data: { title: "Messages", background: "mail.jpg" }
  },
  {
    path: "stocks",
    component: StocksComponent,
    data: { title: "Stocks", background: "wallstreet.jpg" }
  },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
