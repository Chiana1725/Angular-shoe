import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtocalsRoutingModule } from './protocals-routing.module';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ShipComponent } from './ship/ship.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent, TermsComponent, HeaderComponent, ContactComponent, ShipComponent, PrivacyComponent, HomeComponent],
  imports: [
    CommonModule,
    ProtocalsRoutingModule,
    SharedModule
  ]
})
export class ProtocalsModule { }
