let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let email = $('#email');
let password = $('#password');
let username = $('#name');
let phone = $('#phone');
let passConfirm = $('#passConfirm');


// Check is Empty
let isEmpty = (listSelector) => {
    let isChecked = false;

    listSelector.forEach(input => {
        if (input.value === '') {
            showMsgError(input, 'Trường này không được để trống');
            isChecked = false;
        }
        else {
            successCase(input)
            isChecked = true;
        }
    })
    return isChecked;
}

// Check email value 
const isEmail = (email) => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let isChecked = false;

    if (regex.test(email.value)) {
        successCase(email)
        isChecked = true;

    } else {
        showMsgError(email, 'Giá trị nhập vào phải là email')
        isChecked = false;
    }
    return isChecked;
}
// Check input value is String
const isString = (listSelector) => {
    let regex = /[A-Za-z0-9]+$/;
    let isChecked = false;

    listSelector.forEach(input => {
        if (regex.test(input.value)) {
            successCase(input)
            isChecked = true;

        } else {
            showMsgError(input, 'Giá trị nhập vào phải là chuỗi')
            isChecked = false;
        }
    })
    return isChecked;
}

// Check input value is String
const isMatchPassword = (passConfirm) => {
    if (passConfirm.value === password.value) {
        successCase(passConfirm)
        isChecked = true;

    } else {
        showMsgError(passConfirm, 'Mật khẩu không tương thích')
        isChecked = false;
    }
    return isChecked;
}

// Show message error
const showMsgError = (selector, mess) => {
    let parent = selector.parentElement;
    let errorMsg = parent.querySelector('.msg');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = mess;
}
const successCase = (selector) => {
    let parent = selector.parentElement;
    let errorMsg = parent.querySelector('.msg');

    errorMsg.classList.remove('error');
    errorMsg.innerHTML = '';
}

// onblur event
$('#email').onblur = () => {
    let checkEmpty = isEmpty([email]);
    if (checkEmpty) {
        isEmail(email);
    }
}

$('#password').onblur = () => {
    let checkEmpty = isEmpty([password]);
    if (checkEmpty) {
        isString([password]);
    }
}

$('#name').onblur = () => {
    let checkEmpty = isEmpty([username]);
    if (checkEmpty) {
        isString(username);
    }
}

$('#phone').onblur = () => {
    let checkEmpty = isEmpty([phone]);
    if (checkEmpty) {
        isString([phone]);
    }
}

$('#passConfirm').onblur = () => {
    let checkEmpty = isEmpty([passConfirm]);
    if (checkEmpty) {
        isMatchPassword(passConfirm);
    }
}




