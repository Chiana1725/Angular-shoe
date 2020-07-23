import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { AccountComponent } from './account/account.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { SharedModule } from './../shared/shared.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CommodityInfoComponent } from './shared/commodity-info/commodity-info.component';
import { LogisticsDetailsComponent } from './shared/logistics-details/logistics-details.component';
import { AuditComponent } from './shared/audit/audit.component';
// import { GoodsSharedModule } from './../goods/shared/goods.shared.module';
//i18n
import {  HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CartComponent } from './cart/cart.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { SideTabComponent } from './shared/side-tab/side-tab.component';
import { UpdataAddrComponent } from './updata-addr/updata-addr.component';
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  // return new TranslateHttpLoader ( http, './assets/i18n/', '.ts');
}
@NgModule({
  declarations: [AccountComponent, OrderFormComponent, OrderDetailComponent, CommodityInfoComponent, LogisticsDetailsComponent, AuditComponent, CartComponent, UpdatePwdComponent, SideTabComponent, UpdataAddrComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    // GoodsSharedModule,
    ReactiveFormsModule,
    FormsModule,
     //---i18n在这里配置
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ]
})
export class UserModule { }
