
import {  Validators, ValidatorFn } from '@angular/forms';
import { EqualValidatorService } from '../core/services/equal-validator.service';


export const MALL_NAME ='VANICE';
export interface ErrorMsgResponse { msg: string; }
export interface BackendApiResponse<T> {//返回数据格式
    code: number;
    msg: string;
    data: T;
  }


//auth
export const LoginURL = '/api/auth/login';
export interface LoginPostData{ pwd: string; user: string;}
export interface LoginResponse { email: string; groupId: number; id: bigint; name: string; number:string; type: number; }

export const LogoutURL = '/api/auth/logout';
export interface LogoutResponse {code: number; msg: string }

export const UpdatepwdURL = '/api/auth/update-pwd';
export interface Updatepwd { email: string, newPwd: string, origPwd: string }
export interface UpdatepwdResponse { code: number, msg: string }

//user
export const MyInfoURL = '/api/user/my-info';
export interface MyInfoResponse { id: number; name: string; type: number; email: string; groupId: number; };

export const CreateAddrURL = '/api/user/create-my-addr';
export interface CreateAddrResponse { addr: string, city: string, country: string, firstName: string, lastName: string, phone: string, postCode: string, state: string, tag: string}

export const MyAddrURL = '/api/user/my-addr';
export interface MyAddr { city:string; country:string; createAt:string; firstName:string; id:number; lastName:string; phone: string; postCode: string; state: string; streetAddress: string; tag: string; updatedAt:string; userId:string };
export interface MyAddrResponse { data: MyAddr[]; };

export const UpdataMyAddrURL = '/api/user/update-my-addr';
export interface UpdataMyAddr { addr: string, city: string, country: string, firstName: string, id: number, lastName: string, phone: string, postCode: string, state: string, tag: string }
export interface UpdataMyAddrResponse { code: number, msg: string }

//account
export const MyAccountURL = '/api/account/info/';
export interface MyAccountResponse { balance: number, currency: string, flag: number, freeAmount: number, freezingAmount: number, id: number, lockedAmount: number, processingAmount: number, state: number, type: number, userId:string  }

//order
// export const MyOrdersURL = '/api/order/my-orders?len=page=sort=begin=end=';
export const MyOrdersURL = '/api/order/my-orders';
// export interface Request {}
// this.com.httpPost('/api/auth/login?loginType='+this.loginType,this.loginForm.value);
export interface MyOrder {amount:number, createdAt:string, currency:string, goods: string, id: string, paidAt: string, state: number, updatedAt:string, userId:string };
export interface MyOrderResponse { orders: MyOrder[] };

export const PostOrderURL = '/api/order/new-purchase-order';
export interface PostOrderRequest { addr: string, amount:number, city:string, country:string, goods:[{count:number, id:string, image:string, name:string, price:number, size:string, stockId:string, subject:string}], phone:string, postCode:string, receiver:string, state:string }
export interface PostOrderResponse { code: number; msg: string };

export const DetailOrderURL = '/api/order/detail';
export interface DetailOrderResponse {
    amount: number,
    createdAt: string,
    currency: string,
    goods:[{
        count: number,
        id: string,
        image: string,
        name: string,
        price: number,
        size: string,
        stockId: string,
        subject: string,
    }]
    id: string,
    payData:{
        amount: number,
        paidAt: string,
        payWay: number,      
    }
    ships:[{
        address: string,
        city: string,
        country: string,
        phone: string,
        postCode: string,
        receiver: string,
        shipAmount: number,
        shipCode: string,
        shipId: number,
        state: string,
        type: number,
    }]
    state:number,
    updatedAt: string,
    userId:string,
};
export interface DetailOrderResponse {}

export const CalcshipfeeURL = '/api/order/calc-ship-fee';
export interface Calcshipfee { 
    addr: string, 
    city: string, 
    country: string, 
    goods:[{count:number, id:string, image:string, name:string, price:number, size:string, stockId:string,subject:string}]
    postCode:string,
    state:string, 
};
export interface CalcshipfeeResponse { amount:number };

export const PayOrderURL = 'api/order/pay-order';
export interface PayOrder {id: number};
export interface PayOrderResponse { contentType: string, data: string, method: string, url: string };


export const CusProcOrderURL = '/api/order/cus-proc-order';
export interface CusProcOrder {id:string, state:number};
export interface CusProcOrderResponse {code:number, msg:string};

//product


export const ProductlistURL = '/api/product/all-products';
export interface Productlist { brandId: string; categoryId: string; createdAt: string; detail:string; discount:number; flags:number; id:string; images: string; name: string; price:number; updatedAt:string; } 
export interface ProductlistResponse { products: Productlist[] };

export const ProductdetailURL = '/api/product/product-units';
export interface Productdetail { amount: number; brandId: string; createdAt: string; detail: string; discount: number; id: string; images: string; parcelInfo: string; price: number; productId: string; productName: string, specs: string; subject: string; updateAt: string }
export interface ProductdetailResponse { data: Productdetail[]; };

export const ProductBrandsURL = '/api/product/all-product-brands';
export interface ProductBrands { country: string; description: string; id: string; images: string };
export interface ProductBrandsResponse { data:[] };

//分页数据
export interface PaginateData<T>{
    current_page: number,
    last_page: number,
    total: number,
    next_page?: number,
    first_page?: number,
    data: T
}

export interface LoginInfo {
   email: string;
   groupId: number;
   id: number;
   name: string;
   number: string;
   type: number;
}

export interface FormFields{
    key: string[];
    value?: number|string | string[] | FormFields[];
    group?: boolean;
    controllType?: controllType 
    inputType?:InputType
    name: string;
    validators?: ValidatorFn[]
}


export interface Option {
    method?: string;
    url: string;
    data?: any
}

export interface HttpReturn<T> {
    code: HttpReturnCode,
    data: T
}

export enum SystemCode {
    Ok = 0xFFF,
    RELOGIN = 0x061,
    UNATHOR = 81
}

export enum HttpReturnCode {
    success = 200,
    notAuth = 401,
}

export enum InputType {
    password = 'password',
    number = 'number',
    email='email'
}

export enum controllType{
    normal,
    select
}

export const account ={
    "email":"2244895365@qq.com",
    "mobile":"17736670946",
}


export const ZONE: string[] = [
    'Please Choose Your Country',
    'United States',
    'Aaland Islands',
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegowina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    "Cote D'Ivoire",
    "Croatia",
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'FalklandIslands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guinea',
    'Guinea-bissau',
    'Guyana',
    'Haiti',
    'Heard and Mc Donald Islands',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea, Democratic People's Republic of",
    'Korea, Republic of',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libyan Arab Jamahiriya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    "Macedonia, The Former Yugoslav Republic of",
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia, Federated States of',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia (Slovak Republic)',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'Spain',
    'Sri Lanka',
    'St. Helena',
    'St. Pierre and Miquelon',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen Islands',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    ' United Kingdom',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City State (Holy See)',
    'Venezuela',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    ' Wallis and Futuna Islands',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
]

export const STATE: string[] = [
    'Please select ...',
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'Armed Forces Africa',
    'Armed Forces Americas',
    'Armed Forces Canada',
    'Armed Forces Europe',
    'Armed Forces Middle East',
    'Armed Forces Pacific',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
]
export const LOGIN_FIELDS: FormFields[] = [
    { key: ['电子邮件地址','Email Address'], name: 'user', validators:[Validators.required,Validators.email] },
    { key: ['密码','Password'], name: 'pwd', inputType:InputType.password,validators:[Validators.required,Validators.minLength(8)] }
]


export const REGISTER_FIELDS: FormFields[] = [
    { key: ['名','First Name'],  name: 'firstName' ,validators:[Validators.required]},
    { key: ['姓','Last Name'],  name: 'lastName' ,validators:[Validators.required]},
    { key: ['街道地址','Street Address'],  name: 'addr',validators:[Validators.required] },
    { key: ['市','City'],  name: 'city' ,validators:[Validators.required]},
    { key: ['国家','Country'],  name: 'country', validators:[Validators.required] },//controllType:controllType.select,value:ZONE,
    { key: ['州/省','State/Province'],  name: 'state', validators:[Validators.required] },//controllType:controllType.select,value:STATE,
    { key: ['邮政/邮编','Post/Zip Code'],  name: 'postCode',validators:[Validators.required] },
    { key: ['手机号码','Mobile'],  name: 'phone',validators:[Validators.required] },
    { key: ['电子邮件地址','Email Address'],  name: 'email',validators:[Validators.required,Validators.email] },
    { key: ['密码','Password'],  name: 'pwd' ,inputType:InputType.password,validators:[Validators.required,Validators.minLength(8),EqualValidatorService.equalFor('pwd2')]},
    { key: ['确认密码','Confirm Password'], inputType:InputType.password, name: 'pwd2',validators:[Validators.required,Validators.minLength(8),EqualValidatorService.equalTo('pwd')] },  
]

export const UPDATEPWD_FIELDS: FormFields[] = [
    { key: ['用户邮箱','email'], name: 'email',validators:[Validators.required]},
    { key: ['原密码','Original Password:'], inputType:InputType.password,name: 'origPwd',validators:[Validators.required]},
    { key: ['新密码','New Password:'], inputType:InputType.password,name: 'newPwd',validators:[Validators.required]},
] 

export const RESET_FIELDS: FormFields[] = [
    { key: ['当前密码','Current Password'], name: 'currentPassword',validators:[Validators.required]},
    { key: ['新密码','New Password:'],inputType:InputType.password, name: 'newPassword',validators:[Validators.required]},
    { key: ['确认密码','Confirm Password:'], inputType:InputType.password,name: 'affirmPassword',validators:[Validators.required]},
] 

export const ACCOUNT_FIELDS: FormFields[] = [
    // { key: ['电子邮件地址','Email Address'],  name: 'email',validators:[Validators.required,Validators.email] }
    { key: ['名','First Name'],  name: 'firstName' ,validators:[Validators.required]},
    { key: ['姓','Last Name'],  name: 'lastName' ,validators:[Validators.required]},
    { key: ['手机','Phone'], name:'phone', validators:[Validators.required]},
    { key: ['街道地址','Street Address'],  name: 'streetAddress',validators:[Validators.required] },
    // { key: ['新增街道地址','Newly Increased Street Address'],  name: 'addr',validators:[Validators.required] },
    { key: ['市','City'],  name: 'city' ,validators:[Validators.required]},
    { key: ['州/省','State/Province'],  name: 'state', validators:[Validators.required] },
    { key: ['国家','Country'],  name: 'country', validators:[Validators.required] },
    { key: ['邮政/邮编','Post/Zip Code'],  name: 'postCode',validators:[Validators.required] },
    


    // { key:['地址标签','Tag'], name:'tag' , validators:[]},
    { key:['编号','Id'], name:'id', validators:[Validators.required] },
    // { key: ['银行卡名称','Bankcard Name'], name:'bankcardName', validators:[Validators.required] },
    // { key: ['银行卡号','Bankcard Numbers'], name:'bankcardNumbers', validators:[Validators.required] },
    // { key: ['持卡人','Cardholder'], name:'cardholder', validators:[Validators.required] },
]

// export const ACCOUNT_FIELDS: FormFields[] = [
//     { key: 'Email Address',  name: '2244895365@qq.com',validators:[Validators.required,Validators.email] },
//     { key: 'Mobile', name:'mobile', validators:[Validators.required]},
    
//     { key: 'Last Name',  name: 'lastName' ,validators:[Validators.required]},
//     { key: 'First Name',  name: 'firstName' ,validators:[Validators.required]},
//     { key: 'Street Address',  name: 'addr',validators:[Validators.required] },
//     { key: 'City',  name: 'city' ,validators:[Validators.required]},
//     { key: 'State/Province',  name: 'state', validators:[Validators.required] },
//     { key: 'Country',  name: 'country', validators:[Validators.required] },
//     { key: 'Post/Zip Code',  name: 'postCode',validators:[Validators.required] },
    
//     { key: 'Bankcard Name', name:'bankcardName', validators:[Validators.required] },
//     { key: 'Bankcard Numbers', name:'bankcardNumbers', validators:[Validators.required] },
//     { key: 'Cardholder', name:'cardholder', validators:[Validators.required] },
// ]

