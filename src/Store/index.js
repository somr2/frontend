import main from '../image/main.jpg'
import second from '../image/second.jpg'
import third from '../image/third.png'
import item1 from '../image/item/1.jpg'
import item2 from '../image/item/2.jpg'
import item3 from '../image/item/3.jpg'
import item4 from '../image/item/4.jpg'


const init = {
    headerNav:{
        links: [{title: 'Home',         url: ''},
                {title: 'News',         url: 'news'},
                {title: 'Products',     url: 'products'},
                {title: 'Contact Us',   url: 'contact'}]
    },
    coverPhoto:{
        photos: [main, second, third]
    },
    product:{id: 1, category: 'test', name: 'test', material: 'test', price: 'test', description: 'test'},
    productListing:{
        products:[
            {id: 1, src: item1},
            {id: 2, src: item2},
            {id: 3, src: item3},
            {id: 4, src: item4}
        ],
        redirect: false,
        whereTo: ''
    }

}

export default init