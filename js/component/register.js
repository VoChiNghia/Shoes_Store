
$('#submit').onclick = function() {
    let checkEmpty = isEmpty([email, password, username, phone]);
    let checkString = isString([password, username, phone]);
    let checkEmail = isEmail(email);
    let checkMatchPass = isMatchPassword(passConfirm);


    if(checkEmpty && checkString && checkEmail && checkMatchPass){
        signUp();
        Swal.fire({
            title: 'Success!',
            text: 'Registration successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })

        return false;
    }

}

const signUp = () => {
    const email = $('#email').value;
    const password = $('#password').value;
    const name = $('#name').value;
    const phone = $('#phone').value;
    const gender = checkGender;

    let user = new User(email, password, name, phone, gender);

    axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user
    })
    .then((res) => {
        console.log(res.data.content);
        console.log(res)
    })
    .catch((err) => {
        console.log(err);
    })

}


const checkGender = () => {
    let gender = $$("input[type='radio']");
    let isChecked = false;
    gender.forEach((gd) => {
        if(gd.checked){
            if(gd.value === 'male'){
                isChecked = true;
            }else if(gd.value === 'female'){
                isChecked;
            }
        }
    })
    console.log(isChecked);
    return isChecked;
}