import OnBoarding from "./OnBoarding/OnBoarding"

//Routes

import AppStack from "../routes/AppStack"
import AccountNavigation from "../routes/AppStack"
import AuthStack from "../routes/AuthStack"

// Authentication
import AuthLayout from "./Authentication/AuthLayout"
import SignIn from "./Authentication/SignIn"
import SignUp from "./Authentication/SignUp"
import SignUp2 from "./Authentication/SignUp2"
import Otp from "./Authentication/Otp"
import ForgotPassword from './Authentication/ForgotPassword'

// Home
import Home from "./Home/Home"

//Account

import Account from "./Account/Account"

//Settings

import Settings from "./Settings/Settings"


// Search
import Search from "./Search/Search";

// Cart
import CartTab from "./Cart/CartTab"

// Favourite
import Favourite from "./Favourite/Favourite";

// Notification
import Notification from "./Notification/Notification"

// VEMDOR

import Login from './Vendor/Login'
import Register from './Vendor/Register'
import Register2 from './Vendor/Register2'
import vForgotPassword from './Vendor/vForgotPassword'
import vMenuCreation from './Vendor/vMenuCreation'
import vProfileCreation from './Vendor/vProfileCreation'
import vSetLocation from './Vendor/vSetLocation'

//Customer support

import CustomerSupport from "./Account/CustomerSupport"
import ContactUs from './CustomerSupport/ContactUs'
import Legal from './CustomerSupport/Legal'

export {
    OnBoarding,
    AuthLayout,
    SignIn,
    SignUp,
    SignUp2,
    Otp,
    ForgotPassword,
    Home,
    Search,
    CartTab,
    Favourite,
    Notification,
    Settings,
    Account,
    AppStack,
    AccountNavigation,
    AuthStack,
    Login,
    Register,
    Register2,
    vMenuCreation,
    vProfileCreation,
    vSetLocation,
    vForgotPassword,
    CustomerSupport,
    ContactUs
}