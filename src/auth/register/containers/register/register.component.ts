import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "workout-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  error: string | null = null;

  constructor() {}

  ngOnInit() {}

  createAccount(form: FormControl) {
    this.error = null;
    const { email, password } = form.value;
  }
}
