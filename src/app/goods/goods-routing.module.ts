import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { SearchComponent } from './../shared/search/search.component';

const routes: Routes = [
  { path: 'detail/:pid', component: GoodsDetailComponent, data:{animation:'detail'} },
  { path: 'list/:brandId', component: GoodsListComponent, data:{animation:'list'} },
  { path: 'list/:brandId/:pageId', component: GoodsListComponent, data:{animation:'list'} },
  // { path: 'list/:id', component: GoodsListComponent },
  // { path: 'list/:page', component: GoodsListComponent },
  // { path: ':list', redirectTo:':state/list/1' },
  // { path: 'all/list', redirectTo:'all/list/1' },
  // { path: '', redirectTo:'all/list/1'},
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
