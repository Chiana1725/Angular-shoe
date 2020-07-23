//account
export const MyAccountURL = '/api/account/info/'
export interface MyAccountResponse { balance: number, currency: string, flag: number, freeAmount: number, freezingAmount: number, id: number, lockedAmount: number, processingAmount: number, state: number, type: number, userId:string }


// export const MyOrdersURL = '/api/order/my-orders?len=page=sort=begin=end=';
export const MyOrdersURL = '/api/order/my-orders';
// export interface Request {}
// this.com.httpPost('/api/auth/login?loginType='+this.loginType,this.loginForm.value);
export interface MyOrder { amount: number, createdAt: string, currency: string, goods: string, id: string, state: number, updatedAt: string, userId: string }
export interface MyOrderResponse { orders: MyOrder[]; }

export const ProductlistURL = '/api/product/all-products';
export interface Productlist { brandId: string; categoryId: string; createdAt: string; detail:string; discount:number; flags:number; id:string; images: string; name: string; price:number; updatedAt:string; } 
export interface ProductlistResponse { products: Productlist[]; }



