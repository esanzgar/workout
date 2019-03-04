import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./shared/shared.module";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, SharedModule.forRoot()]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        "AuthModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
