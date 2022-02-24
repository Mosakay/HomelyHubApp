export const ONBOARDING_SCREENS = [
  {
    id: 0,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/favourite_food.png'),
    title: 'Choose a Favourite Food',
    description:
      'When you oder HomelyHub, we’ll hook you up with exclusive coupon, specials and rewards',
  },
  {
    id: 1,
    backgroundImage: require('../assets/images/background_02.png'),
    bannerImage: require('../assets/images/hot_delivery.png'),
    title: 'Hot Delivery to Home',
    description:
      'We make food ordering fasr, simple and free-no matter if you order online or cash',
  },
  {
    id: 2,
    backgroundImage: require('../assets/images/background_01.png'),
    bannerImage: require('../assets/images/great_food.png'),
    title: 'Receive the Great Food',
    description:
      'You’ll receive the great food within a hour. And get free delivery credits for every order.',
  },
];

export const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  settings: 'Settings',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet',
};

export const BOTTOM_TABS = [
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
];

export const EndPoints = {
  USER_REGISTER: '/Security/Register',
  VENDOR_REGISTER: '/Security/VendorRegister',
  USER_LOGIN: '/Security/Authenticate',
  VENDOR_LOGIN: '/Security/Authenticate',
};

export const RtkqTagEnum = {
  AUTH_USER: 'AUTH_USER',
  REGISTRATION_INDIVIDUAL_PROFESSIONAL: 'REGISTRATION_INDIVIDUAL_PROFESSIONAL',
  REGISTRATION_PUBLIC_SECTOR: 'REGISTRATION_PUBLIC_SECTOR',
  REGISTRATION_NOT_FOR_PROFIT: 'REGISTRATION_NOT_FOR_PROFIT',
  REGISTRATION_COMPANY: 'REGISTRATION_COMPANY',
  ADMIN_REGISTRATIONS: 'ADMIN_REGISTRATIONS',
  ADMIN_LIST: 'ADMIN_LIST',
  ADMIN_LIST_COUNT: 'ADMIN_LIST_COUNT',
  USER_PORTAL: 'USER_PORTAL',
};
