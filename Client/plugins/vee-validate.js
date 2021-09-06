import { extend } from "vee-validate";
import { required, alpha, confirmed, min, max } from "vee-validate/dist/rules";

extend('isValidateEmail', {
    validate: (value) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    },
    message: "Vui lòng nhập đúng định dạng email"
});


// rule để validate form 
extend("required", {
    ...required,
    message: "Hãy nhập trường này"
});

extend("min", {
    ...min,
    message: "Mật khẩu phải có độ dài ít nhất {length} ký tự !"
});

extend("max", {
    ...max,
    message: "Mật khẩu phải có độ dài tối đa {length} ký tự !"
});


extend("confirmed", {
    ...confirmed,
});

extend("alpha", {
    ...alpha,
    message: "This field must only contain alphabetic characters"
});


extend("vnPhone", {
    validate: (value) => {
        const re = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
        return re.test(String(value).toLowerCase());
    },
    message: "Hãy nhập đúng định dạng số điện thoại!"
});








