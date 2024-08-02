const inp1 = document.querySelector('.inp1')
const inp2 = document.querySelector('.inp2')
const inp3 = document.querySelector('.inp3')
const status = document.querySelectorAll('.status')
const btn = document.querySelectorAll('.btn')
const con1 = document.querySelector('.con1')
const con2 = document.querySelector('.con2')
const con3 = document.querySelector('.con3')
const txt = document.querySelector('.balance')

let name = "Alex"
let password = 7777
let balance = 10000


btn[0].onclick = () => {
    if (inp1.value == name) {
        con1.style.display = `none`
        con2.style.display = `flex`
    } else {
        status[0].innerHTML = 'Неправильный логин'
        status[0].style.display = `block`
    }

}

let btn1 = btn[1].onclick = () => {
    if (parseInt(inp2.value) == password) {
        con2.style.display = `none`
        con3.style.display = `flex`
    } else {
        status[1].innerHTML = 'Неправильный пароль'
        status[1].style.display = `block`
        console.log(4);
    }
}

let btn3 = btn[2].onclick = () => {
    if (parseInt(inp3.value) <= balance) {
        alert("Готово!")
        inp3.style.display = `none`
        balance = balance - parseInt(inp3.value)
        txt.innerHTML = `Текуший баланс: ${balance}`
        inp3.value = ''
        status[2].style.display = `none`
        if (balance != 0) {
            btn[2].innerHTML = "Снять ещё"
            btn[2].onclick = () => {
                inp3.style.display = `block`
                txt.innerHTML = `Сколько хотите обналичить:`
                btn[2].innerHTML = "Отправить"
                btn3()
            }
        } else {
            btn[2].innerHTML = "Назад"
            btn[2].onclick = () => {
                location.reload(true);
            }
        }
    } else if (inp3.value == '') {
        status[2].style.display = `none`
    } else {
        status[2].innerHTML = 'Недостаточно средств'
        status[2].style.display = `block`
    }
}