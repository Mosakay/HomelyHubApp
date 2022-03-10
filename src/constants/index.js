import constants from "./constants";
import theme, { COLORS, SIZES, FONTS } from "./theme";
import images from "./images";
import icons from "./icons";

export {
    constants,
    theme,
    COLORS,
    SIZES,
    FONTS,
    images,
    icons,
}

export const EndPoints = {
    USER_REGISTER: '/Security/Register',
    VENDOR_REGISTER: '/Security/VendorRegister',
    USER_LOGIN: '/Security/Authenticate',
    VENDOR_LOGIN: '/Security/Authenticate',
    ADD_CATEGORY:"/Category/createCategory"
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