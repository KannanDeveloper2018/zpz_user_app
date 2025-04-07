import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityPageRoutingModule } from './city-routing.module';

import { CityPage } from './city.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityPageRoutingModule
  ],
  providers: [AndroidPermissions, Diagnostic],
  declarations: [CityPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CityPageModule {}
