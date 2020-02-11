//-----------------modules----------------------------//
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
// ----------------pagecomponent-----------------------//
import { WelcomePageComponent } from "./welcome-page.component";
//-----------------components--------------------------//
import { LoginComponent } from "src/app/components/login/login.component";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [{ path: "", component: WelcomePageComponent }];
@NgModule({
  declarations: [WelcomePageComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
    // BrowserAnimationsModule
  ]
})
export class WelcomePageModule {}
