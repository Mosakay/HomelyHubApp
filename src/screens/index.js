import OnBoarding from "./OnBoarding/OnBoarding"
import UserOrVendor from "./Authentication/UserOrVendor"

//Routes

import UserStack from "../routes/UserStack"
import VendorStack from "../routes/VendorStack"


// User_Auth
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
import CustomerSupport from "./Account/CustomerSupport"

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
import vStoreCreation from './Vendor/vStoreCreation'
import vProfileCreation from './Vendor/vProfileCreation'
import vSetLocation from './Vendor/vSetLocation'
import VendorProfile from "./Vendor/VendorProfile"

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
    Login,
    Register,
    Register2,
    vStoreCreation,
    vProfileCreation,
    vSetLocation,
    vForgotPassword,
    UserOrVendor,
    UserStack,
    VendorStack,
    VendorProfile,
    CustomerSupport,

}