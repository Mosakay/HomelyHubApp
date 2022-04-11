const onboarding_screens = [
    {
        id: 0,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/favourite_food.png"),
        title: "Choose a Favourite Food",
        description: "When you oder HomelyHub, we’ll hook you up with exclusive coupon, specials and rewards"
    },
    {
        id: 1,
        backgroundImage: require("../assets/images/background_02.png"),
        bannerImage: require("../assets/images/hot_delivery.png"),
        title: "Hot Delivery to Home",
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/background_01.png"),
        bannerImage: require("../assets/images/great_food.png"),
        title: "Receive the Great Food",
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order."
    }
]


const vendorProfile_ModalDialouge = [
    {
        id: 0,
        description: "When you oder HomelyHub, we’ll hook you up with exclusive coupon, specials and rewards"
    },
    {
        id: 1,
        description: "We make food ordering fasr, simple and free-no matter if you order online or cash"
    },
    {
        id: 2,
        description: "You’ll receive the great food within a hour. And get free delivery credits for every order."
    },
]

const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    settings: "Settings",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]


export default {
    onboarding_screens,
    screens,
    bottom_tabs,
    vendorProfile_ModalDialouge,
}