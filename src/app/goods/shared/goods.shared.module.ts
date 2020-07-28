import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsDisplayComponent } from './goods-display/goods-display.component';
import { GoodsPayComponent } from './goods-pay/goods-pay.component';
import { GoodsDescriptionComponent } from './goods-description/goods-description.component';
import { GoodsBuyInfoComponent } from './goods-buy-info/goods-buy-info.component';
import { GoodsDetaillistComponent } from './goods-detaillist/goods-detaillist.component';
import { HttpModule } from '@angular/http';
import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { ClauseComponent } from './clause/clause.component';

//i18n
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ImgDisplayPopComponent } from './img-display-pop/img-display-pop.component';
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [GoodsDisplayComponent, GoodsPayComponent, GoodsDescriptionComponent, GoodsBuyInfoComponent, GoodsDetaillistComponent, OpenCloseComponent, InsertRemoveComponent, ClauseComponent, ImgDisplayPopComponent,],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpModule,
     //---i18n在这里配置
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [GoodsDisplayComponent, GoodsPayComponent, GoodsDescriptionComponent, GoodsBuyInfoComponent, GoodsDetaillistComponent, OpenCloseComponent, InsertRemoveComponent ]
})
export class GoodsSharedModule { }
