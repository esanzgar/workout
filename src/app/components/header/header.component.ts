import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "workout-header",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output()
  logout = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onLogout() {
    this.logout.emit();
  }
}
