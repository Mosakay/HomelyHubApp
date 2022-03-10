import * as yup from "yup";
import { customAlphabet } from "nanoid";
import { numbers as ndNumbers } from "nanoid-dictionary";
import currencyjs from "currency.js";

export function formatCurrencyToNumber(string) {
  return string.toString().replace(/,/g, "");
}

export function formatNumber(n) {
  return n
    .toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumberToCurrency(number = "", decimalPlace = false) {
  let value = number.toString();
  const decimalPosition = value.indexOf(".");
  if (decimalPosition >= 0) {
    let leftSide = formatNumber(value.substring(0, decimalPosition));
    let rightSide = formatNumber(value.substring(decimalPosition));
    if (decimalPlace) {
      rightSide += "00";
    }

    rightSide = rightSide.substring(0, 2);
    value = leftSide + "." + rightSide;
  } else {
    value = formatNumber(value);
    if (decimalPlace) {
      value += ".00";
    }
  }
  return value;
}

export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export function deepMerge(target, source) {
  if (Array.isArray(target) && Array.isArray(source)) {
    const newTarget = [...target];
    for (const key in source) {
      if (typeof source[key] === "object") {
        newTarget[key] = deepMerge(newTarget[key] || {}, source[key]);
      } else {
        newTarget[key] = source[key] || newTarget[key];
      }
    }
  } else if (isObject(target) && isObject(source)) {
    const newTarget = { ...target };
    for (const key in source) {
      if (isObject(source[key])) {
        newTarget[key] = deepMerge(newTarget[key] || {}, source[key]);
      } else {
        newTarget[key] = source[key] || newTarget[key];
      }
    }
    return newTarget;
  }
  return undefined;
}

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    /* eslint-disable no-self-compare */
    return x !== x && y !== y;
  }
}

export function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

/**
 * @template C
 * @param {C} callback
 * @param {number} wait
 * @returns {C & {flush: Function, cancel: Function}}
 */
export function debounce(callback, wait = 0) {
  let debounceTimer;
  let triggerArgs;
  let triggerThis;

  function trigger(...arg) {
    triggerArgs = arg;
    triggerThis = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      callback.apply(triggerThis, triggerArgs);
    }, wait);
  }

  trigger.cancel = () => clearTimeout(debounceTimer);
  trigger.flush = () => {
    clearTimeout(debounceTimer);
    callback.apply(triggerThis, triggerArgs);
  };

  return trigger;
}

export function throttle(callback, wait = 0) {
  let throttleTimer;
  let triggerArgs;
  let triggerThis;
  function trigger() {
    triggerArgs = arguments;
    triggerThis = this;
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback.apply(triggerThis, triggerArgs);
      throttleTimer = false;
    }, wait);
  }

  trigger.cancel = () => clearTimeout(throttleTimer);
  trigger.flush = () => {
    clearTimeout(throttleTimer);
    callback.apply(triggerThis, triggerArgs);
  };

  return trigger;
}

export function objectToFormData(data) {
  const fd = new FormData();
  for (const key in data) {
    fd.set(key, data[key]);
  }
  return fd;
}

/**
 *
 * @param {Date | string | number} from
 * @param {Date | string | number} to
 */
export function getCountdown(from, to) {
  const oneSecondInMilli = 1000,
    oneMinuteInMilli = oneSecondInMilli * 60,
    oneHourInMilli = oneMinuteInMilli * 60,
    oneDayInMilli = oneHourInMilli * 24;

  const _from = new Date(from),
    _to = new Date(to),
    _fromTime = _from.getTime(),
    _toTime = _to.getTime(),
    distance = _toTime - _fromTime;

  const days = Math.floor(distance / oneDayInMilli),
    hours = Math.floor((distance % oneDayInMilli) / oneHourInMilli),
    minutes = Math.floor((distance % oneHourInMilli) / oneMinuteInMilli),
    seconds = Math.floor((distance % oneMinuteInMilli) / oneSecondInMilli);

  return { days, hours, minutes, seconds };
}

/**
 * @template {{[x: string]: any}} T
 * @param {URLSearchParams} searchParams
 * @param {T} params
 * @returns {T}
 */
export function urlSearchParamsExtractor(searchParams, params = {}) {
  if (searchParams && params) {
    const result = {};
    for (const key in params) {
      result[key] = searchParams.get(key) || params[key];
    }
    return result;
  }
  return params;
}
export function getTextFieldFormikProps(formik, key) {
  const fieldProps = formik.getFieldProps(key);
  return {
    ...fieldProps,
    value: fieldProps?.value || "",
    error: !!formik.touched[key] && !!formik.errors[key],
    helperText: !!formik.touched && formik.errors[key],
  };
}

export function yupFileSchema(message) {
  return yup.mixed().test(
    "isFile",
    // eslint-disable-next-line no-template-curly-in-string
    message || "${path} not a file",
    (value) =>
      (value && value instanceof File) ||
      (value && value.includes("res.cloudinary.com"))
  );
}

export const generateTransactionId = customAlphabet(ndNumbers, 10);

export const calculatePayment = (value) => {
  let percentageValue = 0;
  if (value >= 0) {
    const onePercent = currencyjs(value).divide(100);
    if (value < 1_000_000_000) {
      percentageValue =
        onePercent.multiply(0.1).value > 250_000 ? 250_000 : value;
    } else if (value >= 1_000_000_000 || value <= 500_000_000_000) {
      percentageValue =
        onePercent.multiply(0.4).value > 2_000_000 ? 2_000_000 : value;
    } else if (value > 500_000_000_000) {
      percentageValue = 5_000_000;
    }
    return percentageValue;
  }
};

export const getFormatedDate = (dateString) => {
  const date = new Date(dateString),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("/");
};

export const calculateAnnualTurnOver = (amount) =>
  amount < 50_000_000
      ? 5_000
      : amount >= 50_000_000 && amount < 500_000_000
      ? 20_000
      : amount >= 500_000_000 && amount < 1_000_000_000
      ? 50_000
      : amount >= 1_000_000_000 && amount < 10_000_000_000
      ? 100_000
      : 1_000_000;

export const calculateMarketCapitalization = (value) => {
  let percentageValue = 0;
  if (value >= 0) {
    const onePercent = currencyjs(value).divide(100);
    if (value < 1_000_000_000) {
      percentageValue =
        onePercent.multiply(0.1).value > 250_000 ? 250_000 : value;
    } else if (value >= 1_000_000_000 || value <= 500_000_000_000) {
      percentageValue =
        onePercent.multiply(0.4).value > 2_000_000 ? 2_000_000 : value;
    } else if (value > 500_000_000_000) {
      percentageValue = 5_000_000;
    }
    return percentageValue;
  }
};