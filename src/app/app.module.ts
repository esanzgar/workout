import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./containers/app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, NavigationComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
