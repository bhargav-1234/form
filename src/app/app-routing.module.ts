import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { WelcomePageModule } from "./pages/welcome-page/welcome-page.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/welcome-page/welcome-page.module").then(
        m => m.WelcomePageModule
      )
  }
];

@NgModule({
  imports: [
    WelcomePageModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
