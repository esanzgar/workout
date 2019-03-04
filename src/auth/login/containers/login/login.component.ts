import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "workout-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error: string | null = null;

  constructor() {}

  ngOnInit() {}

  login(form: FormControl) {
    this.error = null;
    const { email, password } = form.value;
  }
}
