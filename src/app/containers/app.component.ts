import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription, Observable } from "rxjs";

import { StoreService } from "../../store/store.service";
import { AuthService, User } from "../../auth/shared/services/auth.service";

@Component({
  selector: "workout-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  private _subscription!: Subscription;

  user: Observable<User | null> = this._store.select("user");

  constructor(
    private _store: StoreService,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._subscription = this._auth.user.subscribe();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  async onLogout() {
    await this._auth.logout();
    this._router.navigate(["/auth/login"]);
  }
}
