// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
    DefaultPage,
    AddProduct,
    AddCategory,
    Gallery,
    News
} from './';

export default {
    path: 'admin',
    name: 'Admin',
    childRoutes: [
        {
            path: 'default-page',
            name: 'Default page',
            component: DefaultPage,
            isIndex: true,
            childRoutes: [
                {
                    path: 'category',
                    name: 'Category',
                    component: AddCategory,
                    isIndex:true,
                },
                {
                    path: 'product',
                    name: 'Product',
                    component: AddProduct
                },
                {
                    path: 'gallery',
                    name: 'Gallery',
                    component: Gallery
                },
                {
                    path: 'news',
                    name: 'News',
                    component: News,
                }

            ]
        },
    ],
};

//
// childRoutes:[
//     {
//         path: 'add-category',
//         name: 'Add Category',
//         component: AddCategory,
//
//     },
//     {
//         path: 'add-product',
//         name: 'Add Product',
//         component: AddProduct
//     },
//     {
//         path: 'gallery',
//         name: 'Gallery',
//         component: Gallery
//     },
//     {
//         path: 'news',
//         name: 'News',
//         component: News,
//     }
// ]