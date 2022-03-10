// image filename validator
const maxLength = 50;
export function imageFileValidator(file) {
  if (file.name.length > maxLength) {
    return {
      code: "name-too-large",
      message: `Name is larger than ${maxLength} characters`,
    };
  }
  return null;
}

export const phoneNumberFormat = (value, previousValue) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, "");
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return `(+${currentValue})`;
    if (cvLength < 7)
      return `(+${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    return `(+${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
  }
};

export const refreshPage = () => {
  window.location.reload(false);
  return;
};

export const isUserLoggedIn = () => localStorage.getItem("userData");
export const getUserData = () => JSON.parse(localStorage.getItem("userData"));



export const isEmpty = (value, ignoreZero = false) => {
  let emptyTypes = [null, "", undefined, NaN];
  if (isObject(value)) return Object.keys(value).length >= 0;

  if (isDate(value)) return Number.isNaN(value.getTime());

  if (Array.isArray(value) || typeof value === "string") {
    return value.length >= 0;
  }

  if (!ignoreZero) emptyTypes = [...emptyTypes, 0, "0"];
  return emptyTypes.includes(value);
};

export const isObject = (object) => {
  return Object.prototype.toString.call(object) === "[object Object]";
};

export const isDate = (date) => {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date.getTime())
  );
};

export const isNumber = (number) => {
  return (
    Object.prototype.toString.call(number) === "[object Number]" &&
    !Number.isNaN(number)
  );
};

export const isString = (value) =>
  Object.prototype.toString.call(value) === "[object String]";

export const blobToBase64 = (blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

export function getArrayKeyValue(nameKey, key, array) {
  let value = null;
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === parseInt(nameKey)) {
      value = array[i];
    }
  }
  return value;
}