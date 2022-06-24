import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "@/pages/MainPage";
import BookPage from "@/pages/BookPage";
import AllBooksPage from "@/pages/AllBooksPage";
import BooksLayout from "@/pages/BooksLayout";
import Contacts from "@/pages/Contacts";

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
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: Contacts
            }
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})


export default router;

