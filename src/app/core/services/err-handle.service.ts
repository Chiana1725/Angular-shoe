import { lists } from './../../shared/lists';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SystemCode } from './../../shared/model';

@Injectable({
  providedIn: 'root'
})
export class ErrHandleService {

  constructor() { }

  isDev: boolean = true; //是否是开发环境 --正式上线要改成 false

  handleError(operation = 'operation', result = null, mockResult = null, total?,page?,limit?){
    return (error: any) => {//网络错误 
    return of({
      code: SystemCode.Ok,
      message:`${operation} failed: ${error.message}`,
      data: this.isDev ? (total ? this.mockData(mockResult, total,page,limit) : mockResult) : result
    });
  };
 }

 /**
  * 模拟数据
  * @param mock  {array} mock.ts 的数据
  * @param total 获取到的模拟数据总长度
  * @return  返回模拟的数据数组
  */

  mockData(mock, total, page?, limit?){
    let tmp = [];
    for (let i = 0, len = mock.length; i < total - len; i += len){
      tmp = tmp.concat(mock);
    }
    let tLen = tmp.length;
    if (total > tLen){
      tmp = tmp.concat(mock.slice(0, total - tLen));
    }
    if(page){//分页
      let pages = {
        current_page:page,
        last_page : Math.ceil(tmp.length / (limit || 10)),
        total:tmp.length,
        data:tmp.slice((page-1)*limit,page*limit)
      }
      return pages;
    }
    return tmp;
  }

}
