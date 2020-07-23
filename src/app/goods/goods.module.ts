import { SharedModule } from './../shared/shared.module';
import { GoodsSharedModule } from '../goods/shared/goods.shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsRoutingModule } from './goods-routing.module';
import { FormControl, FormsModule } from '@angular/forms';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';
import {  HttpClient, } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
  declarations: [GoodsListComponent, GoodsDetailComponent,  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    GoodsSharedModule,
    SharedModule,
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
export class GoodsModule { }
