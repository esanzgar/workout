import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "workout-navigation",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
