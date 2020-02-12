import { Component, OnInit, Input } from "@angular/core";
// import { LogProfile } from "../../entities/log-profile";
import { SignupProfile } from "src/app/entities/signup-profile";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  @Input()
  signupProfile: SignupProfile;

  constructor() {
    this.signupProfile = new SignupProfile();
  }

  ngOnInit() {}

  onSubmit() {}
}
