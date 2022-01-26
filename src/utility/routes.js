import Loadable from "react-loadable";
import Loader from "../components/loader/loader.component";

//Dynamic Imports
const HomePage = Loadable({
    loader: ()=> import("../pages/Home"),
    loading() {
        return <Loader />
    }
})

const AboutPage = Loadable({
    loader: ()=> import("../pages/About"),
    loading() {
        return <Loader />
    }
})

const WorksPage = Loadable({
    loader: ()=> import("../pages/Works"),
    loading() {
        return <Loader />
    }
})

const ServicesPage = Loadable({
    loader: ()=> import("../pages/Services"),
    loading() {
        return <Loader />
    }
})

const BlogPage = Loadable({
    loader: ()=> import("../pages/Blog"),
    loading() {
        return <Loader />
    }
})

const BlogDetailsPage = Loadable({
    loader: ()=> import("../pages/Blog/blog_details"),
    loading() {
        return <Loader />
    }
})

const ContactUsPage = Loadable({
    loader: ()=> import("../pages/ContactUs"),
    loading() {
        return <Loader />
    }
})

export const routes = [
    {
        path: '/',
        exact: true,
        main: (props)=> <HomePage {...props} />
    },
    {
        path: '/about',
        exact: true,
        main: ()=> <AboutPage />
    },
    {
        path: '/works',
        exact: true,
        main: ()=> <WorksPage />
    },
    {
        path: '/services',
        exact: true,
        main: ()=> <ServicesPage />
    },
    {
        path: '/blog',
        exact: true,
        main: (props)=> <BlogPage {...props} />
    },
    {
        path: '/blog/:id',
        exact: true,
        main: (props)=> <BlogDetailsPage {...props} />
    },
    {
        path: '/contact-us',
        exact: true,
        main: ()=> <ContactUsPage />
    },
]