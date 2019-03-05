import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "../auth/auth.module";
import { HealthModule } from "../health/health.module";

import { StoreService } from "../store/store.service";

import { AppComponent } from "./containers/app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, NavigationComponent, HeaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    AuthModule,
    HealthModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
