import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoodsListsComponent } from './goods-lists/goods-lists.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NavroutingComponent } from './navrouting/navrouting.component';
import { ShufflingComponent } from './shuffling/shuffling.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PromtComponent } from './promt/promt.component';
import { PageComponent } from './page/page.component';
// import { TranslateComponent } from './translate/translate.component';
import { SearchComponent } from './search/search.component';
//i18n
import {  HttpClient, } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { DeclareComponent } from './declare/declare.component';
import { PagenateComponent } from './pagenate/pagenate.component';




export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n', '.json');
}


@NgModule({
  declarations: [HeaderComponent, FooterComponent, GoodsListsComponent, DynamicFormComponent, NavroutingComponent, ShufflingComponent, PromtComponent, PageComponent, SearchComponent, DeclareComponent, PagenateComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule,
     //---i18n在这里配置
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports:[HeaderComponent, FooterComponent, GoodsListsComponent, DynamicFormComponent, NavroutingComponent, ShufflingComponent, PromtComponent, PageComponent, SearchComponent, DeclareComponent, PagenateComponent],
})
export class SharedModule { }
