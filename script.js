// localStorage.clear();

function show_sign_up() {
    $('.register_block').css('display', 'flex');
    $('.autorize_block').css('display', 'none');
    $('.user_card').css('display', 'none');

    $('#password_autorize').css('border', '1px solid gray');
    $('#email_autorize').css('border', '1px solid gray');

    $('#first_name').css('border', '1px solid gray');
    $('#last_name').css('border', '1px solid gray');
    $('#email').css('border', '1px solid gray');
    $('#password').css('border', '1px solid gray');
}

let data_state = {
    first_name: false,
    last_name: false,
    email: false,
    password: false,
}

$('#first_name').on('input', function () {
    if ($('#first_name')[0].value != '') {
        $('#first_name').css('border', '1px solid gray');
        data_state.first_name = true;
    } else {
        $('#first_name').css('border', '1px solid red');
        data_state.first_name = false;
    }
})

$('#last_name').on('input', function () {
    if ($('#last_name')[0].value != '') {
        $('#last_name').css('border', '1px solid gray');
        data_state.last_name = true;
    } else {
        $('#last_name').css('border', '1px solid red');
        data_state.last_name = false;
    }
})

$('#email').on('input', function () {
    let reg_email = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
    if ($('#email')[0].value.match(reg_email)) {
        $('#email').css('border', '1px solid gray');
        data_state.email = true;
    } else {
        $('#email').css('border', '1px solid red');
    }
})

$('#password').on('input', function () {
    if ($('#password')[0].value != '') {
        $('#password').css('border', '1px solid gray');
        data_state.password = true;
    } else {
        $('#password').css('border', '1px solid red');
        data_state.password = false;
    }
})

function sign_up() {
    if ((data_state.first_name && data_state.last_name && data_state.email && data_state.password) === true) {
        let state = true;

        let user = {
            first_name: $('#first_name')[0].value,
            last_name: $('#last_name')[0].value,
            email: $('#email')[0].value,
            password: $('#password')[0].value,
        }

        if (localStorage.length != 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) == $('#email')[0].value) {
                    state = false;
                    break;
                } else {
                    state = true;
                }
            }

            if (state == true) {
                localStorage.setItem($('#email')[0].value, JSON.stringify(user));
                $('#email').css('border', '1px solid gray');
                $('#first_name')[0].value = '';
                $('#last_name')[0].value = '';
                $('#email')[0].value = '';
                $('#password')[0].value = '';
                console.log(data_state);
            } else {
                $('#email').css('border', '1px solid red');
            }
        } else {
            localStorage.setItem($('#email')[0].value, JSON.stringify(user));
            $('#first_name')[0].value = '';
            $('#last_name')[0].value = '';
            $('#email')[0].value = '';
            $('#password')[0].value = '';
        }
    } else {
        if ($('#first_name')[0].value == '') {
            $('#first_name').css('border', '1px solid red');
        }
        if ($('#last_name')[0].value == '') {
            $('#last_name').css('border', '1px solid red');
        }
        if ($('#email')[0].value == '') {
            $('#email').css('border', '1px solid red');
        }
        if ($('#password')[0].value == '') {
            $('#password').css('border', '1px solid red');
        }
    }
}

// -----------------------------------------------------------------------------------

function show_sign_in() {
    $('.register_block').css('display', 'none');
    $('.autorize_block').css('display', 'flex');
    $('.user_card').css('display', 'none');
}

let data_state_2 = {
    email: false,
    password: false,
}

$('#email_autorize').on('input', function () {
    if ($('#email_autorize')[0].value != '') {
        $('#email_autorize').css('border', '1px solid gray');
        data_state_2.email = true;
    } else {
        $('#email_autorize').css('border', '1px solid red');
        data_state_2.email = false;
    }
})

$('#password_autorize').on('input', function () {
    if ($('#password_autorize')[0].value != '') {
        $('#password_autorize').css('border', '1px solid gray');
        data_state_2.password = true;
    } else {
        $('#password_autorize').css('border', '1px solid red');
        data_state_2.password = false;
    }
})

function sign_in() {
    if ((data_state_2.email && data_state_2.password) === true) {
        let get_user = JSON.parse(localStorage.getItem($('#email_autorize')[0].value));

        if (localStorage.length != 0) {
            if (get_user == null) {
                $('#email_autorize').css('border', '1px solid red');
                $('#password_autorize').css('border', '1px solid red');
            } else {
                if (get_user.password == $('#password_autorize')[0].value) {
                    $('#email_autorize').css('border', '1px solid gray');
                    $('#password_autorize').css('border', '1px solid gray');

                    $('.register_block').css('display', 'none');
                    $('.autorize_block').css('display', 'none');
                    $('.user_card').css('display', 'flex');

                    $('.user_card_name')[0].textContent = get_user.first_name + ' ' + get_user.last_name;
                    $('.user_card_email')[0].textContent = get_user.email;
                    $('.user_card_position')[0].textContent = 'Designer & Web Developing';

                    $('#email_autorize')[0].value = '';
                    $('#password_autorize')[0].value = '';
                } else {
                    $('#email_autorize').css('border', '1px solid red');
                    $('#password_autorize').css('border', '1px solid red');
                }
            }
        }
    } else {
        if ($('#email_autorize')[0].value == '') {
            $('#email_autorize').css('border', '1px solid red');
        }
        if ($('#password_autorize')[0].value == '') {
            $('#password_autorize').css('border', '1px solid red');
        }
    }
}