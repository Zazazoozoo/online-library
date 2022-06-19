import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import BookPage from "@/pages/BookPage";
import AllBooksPage from "@/pages/AllBooksPage";
import BooksLayout from "@/pages/BooksLayout";
// import NotFound from "@/pages/404.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/books',
        name: 'booksLayout',
        component: BooksLayout,
        children: [
            {
                path: '/books',
                name: 'books',
                component: AllBooksPage
            },
            {
                path: '/:id',
                name: 'bookPage',
                component: BookPage
            }
        ]
    },


    // {
    //     path: "/:catchAll(.*)",
    //     name: 'notFound',
    //     component: NotFound,
    //     meta: {
    //         requiresAuth: false
    //     }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})


export default router;



// import VueRouter from 'vue-router'
//
// import MainPage from '../pages/MainPage'
// import AllBooksPage from '../pages/AllBooksPage'
// import BookPage from '../pages/BookPage'
//
//
// let routes = [
//     {
//         path: '/',
//         name: 'main',
//         component: MainPage
//     },
//     {
//         path: '/books',
//         name: 'books',
//         component: AllBooksPage
//     },
//     {
//         path: '/books/:id',
//         name: 'bookPage',
//         component: BookPage
//     }
// ]
//
// export default new VueRouter ({
//     mode: 'history',
//     routes
// })
//
//
//
// // import VueRouter from 'vue-router'
//
//
//
// // export default new VueRouter({
// //     mode: 'history',
// //     routes: [
// //         {
// //             path: '/',
// //             name: 'main',
// //             component: MainPage
// //         },
// //         {
// //             path: '/books',
// //             name: 'books',
// //             component: AllBooksPage
// //         },
// //         {
// //             path: '/books/:id',
// //             name: 'bookPage',
// //             component: BookPage
// //         }
// //     ]
// // })