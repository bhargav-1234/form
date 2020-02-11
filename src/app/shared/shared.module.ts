import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [FlexLayoutModule, FormsModule, MaterialModule, HttpClientModule],

  declarations: [],

  exports: [FormsModule, FlexLayoutModule, MaterialModule, HttpClientModule],

  providers: []
})
export class SharedModule {}
