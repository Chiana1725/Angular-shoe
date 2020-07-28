import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

//品牌
interface Brand {
    id: string;
    country: string;
    description: string;
    images: string
}
export const allProductBrands:{data: Brand[]} = {data:[

    {
        "id": "Li-Ning",
        "country": "",
        "description": "",
        "images": ""
    },
    {
        "id": "Anta",
        "country": "",
        "description": "",
        "images": ""
    },
    {
        "id": "Jodan",
        "country": "",
        "description": "",
        "images": ""
    },
    {
        "id": "NIKE",
        "country": "",
        "description": "",
        "images": ""
    },

]
}

//商品详情
interface GoodsDetail {
    brandId: string
    categoryId: string
    createdAt: string
    detail: string
    discount: number
    id: string
    images: string
    name: string
    price: number
    state: number
    tags: number | null
    updatedAt: string
}
//某品牌下的商品列表
interface GoodsOfBrand {
    products:GoodsDetail[],
    total :number
}

export const goodsList :GoodsOfBrand= {
    products:[
        {
            brandId: "NIKE",
            categoryId: "111",
            createdAt: "2020-07-08T03:45:19.609127Z",
            detail: "Nike Air Zoom Pegasus 37 男子跑步鞋，让你重振步伐。这一鞋款出色传承跑者挚爱的贴合度和脚感，搭配全新的前足缓震配置和泡棉，塑就非凡灵敏响应性能，是一款专为日常跑步设计的耐穿轻盈的跑步鞋。",
            discount: 0.98,
            id: "1000001",
            images: "{\"img1\":\"asset/images/1000001/1594179919554589800.jpg\"}",
            name: "Nike Air Zoom Pegasus 37",
            price: 500,
            state: 1,
            tags: null,
            updatedAt: "2020-07-08T03:45:19.609127Z",
        }
    ],
    total:1,
}

//商品详情
export const goodsDetail = {
    data: [{
        amount: '5.04',
        brandId: 'string',
        categoryId: 'dddds',
        createdAt: '2020-02-03',
        detail: 'string',
        discount: '2.56',
        id: '0123',
        images: 'string',
        parcelInfo: 'string',
        price: '0.23',
        productId: 'string',
        productName: 'string',
        specs: 'string',
        subject: 'string',
        updatedAt: '2020-02-03'
    }]
}


export const close = {
    "close": "../../assets/images/close.png",
}

export const account = {
    "email": "2244895365@qq.com",
    "mobile": "17736670946",
}

export const myAddr = {
    data: [
        {
            "id": 5,
            "createdAt": "2020-05-26T06:50:35.879727Z",
            "updatedAt": "2020-05-26T06:50:35.879727Z",
            "userId": 303577408307497200,
            "phone": "",
            "tag": "",
            "firstName": "黄",
            "lastName": "诗捷",
            "streetAddress": "穿山路",
            "city": "桂林",
            "state": "Georgia",
            "country": "中国",
            "postCode": "541900"
        },
    ]
}

export const bankcard = {
    "bankname": "中国银行",
    "banknumber": "1333-4455-5555-999",
    "bankuser": "黄诗捷"
}

export const products = [
    {
        brandId: '22',
        categoryId: '22',
        createdAt: '2020-06-10',
        detail: 'ssss',
        discount: '0.7',
        flags: '*',
        id: '0',
        images: '../../assets/images/1_530x462.png',
        name: '耐克NIKE Air Jordan 11 大灌篮  ',
        price: '89.99',
        updatedAt: '2020-06-10',
    }
]


export const orders = {
    orders: [
        {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                },
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                },
            ],
            id: "0",
            state: 0,//订单状态：待支付
            updatedAt: "2020-06-12",
            userId: 0,//订单发起人
        }, {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                },
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                },
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                }
            ],
            id: "1",
            state: 1,//订单状态：待发货
            updatedAt: "2020-06-12",
            userId: 0,
        }, {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                }
            ],
            id: "2",
            state: 2,//订单状态：待收货
            updatedAt: "2020-06-12",
            userId: 0,
        }, {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                }
            ],
            id: "3",
            state: 3,//订单状态：申请退款
            updatedAt: "2020-06-12",
            userId: 0,
        }, {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                }
            ],
            id: "4",
            state: 4,//订单状态：退款中
            updatedAt: "2020-06-12",
            userId: 0,
        }, {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                }
            ],
            id: "5",
            state: 5,//订单状态：已退款
            updatedAt: "2020-06-12",
            userId: 0,
        }, {
            amount: 899,
            createdAt: "2020-06-12",
            currency: "USD",
            goods: [
                {
                    count: 1,
                    image: '../../assets/images/2_178x155.png',
                    name: '耐克NIKE Air Jordan 11 大灌篮  ',
                    price: 899,
                    subject: '110223',
                }
            ],
            id: "6",
            state: 6,//订单状态：交易关闭
            updatedAt: "2020-06-12",
            userId: 0,
        }
    ]
}


export const lists = [

    {
        'id': 0,
        "close": "../../assets/images/close.png",
        "image": "../../assets/images/1_530x462.png",
        "img": "../../assets/images/1_178x155.png",
        "name": "耐克NIKE Air Jordan 11大灌篮",
        "normalprice": " $422.00",
        "price": 462.00,
        "discount": 33.00,
        "size": "40",
        "colors": [{
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        },],
        "sizes": [{
            "size": '40',
        }, {
            "size": '40.5',
        }, {
            "size": '41',
        }, {
            "size": '41.5',
        },],

    }, {
        'id': 1,
        "close": "../../assets/images/close.png",
        "image": "../../assets/images/2_530x462.png",
        "img": "../../assets/images/2_178x155.png",
        "name": "耐克NIKE Air Jordan 11白蓝 爆裂蛇纹",
        "normalprice": " $422.00",
        "price": 462.00,
        "discount": 33.00,
        "size": "40",
        "colors": [{
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        },],
        "sizes": [{
            "size": '40',
        }, {
            "size": '40.5',
        }, {
            "size": '41',
        }, {
            "size": '41.5',
        },],

    },
    {
        'id': 3,
        "image": "../../assets/images/3_530x462.png",
        "img": "../../assets/images/3_178x155.png",
        "name": "耐克NIKE Air Jordan 11 白红兔八哥",
        "normalprice": " $422.00",
        "price": 462.00,
        "discount": 33.00,
        "size": "40",
        "colors": [{
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        },],
        "sizes": [{
            "size": '40',
        }, {
            "size": '40.5',
        }, {
            "size": '41',
        }, {
            "size": '41.5',
        },]
    }, {
        'id': 4,
        "image": "../../assets/images/4_530x462.png",
        "img": "../../assets/images/4_178x155.png",
        "name": "耐克NIKE Air Jordan 11 大魔王 ",
        "normalprice": " $422.00",
        "price": 462.00,
        "discount": 33.00,
        "size": "40",
        "colors": [{
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        },],
        "sizes": [{
            "size": '40',
        }, {
            "size": '40.5',
        }, {
            "size": '41',
        }, {
            "size": '41.5',
        },]
    }, {
        'id': 5,
        "image": "../../assets/images/1_530x462.png",
        "img": "../../assets/images/1_178x155.png",
        "name": "耐克NIKE Air Jordan 11大灌篮",
        "normalprice": " $422.00",
        "price": 462.00,
        "discount": 33.00,
        "size": "40",
        "colors": [{
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        },],
        "sizes": [{
            "size": '40',
        }, {
            "size": '40.5',
        }, {
            "size": '41',
        }, {
            "size": '41.5',
        },]
    }, {
        'id': 6,
        "close": "../../assets/images/close.png",
        "image": "../../assets/images/3_530x462.png",
        "img": "../../assets/images/3_178x155.png",
        "name": "耐克NIKE Air Jordan 11 白红兔八哥",
        "normalprice": " $422.00",
        "price": 462.00,
        "discount": 33.00,
        "size": "40",
        "colors": [{
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        }, {
            "color": "../../assets/images/sg1.png",
        },],
        "sizes": [{
            "size": '40',
        }, {
            "size": '40.5',
        }, {
            "size": '41',
        }, {
            "size": '41.5',
        },],

    },
]

