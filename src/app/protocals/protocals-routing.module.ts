import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { ShipComponent } from './ship/ship.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'about',component:AboutComponent},
      {path:'terms',component:TermsComponent},
      {path:'ship',component:ShipComponent},
      {path:'privacy',component:PrivacyComponent},
      {path:'contact',component:ContactComponent},
      {path:'',pathMatch:'full',redirectTo:'about'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtocalsRoutingModule { }
