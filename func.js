let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')
let button0 = document.getElementById('button0')
let buttonplus = document.getElementById('buttonplus')
let buttonminus = document.getElementById('buttonminus')
let buttontime = document.getElementById('buttontime')
let buttondivide = document.getElementById('buttondivide')
let buttonequal = document.getElementById('buttonequal')
let buttonReset = document.getElementById('buttonReset')
let input = document.getElementById('input')
let title = document.getElementById('title')

button1.addEventListener('click', press1)
button2.addEventListener('click', press2)
button3.addEventListener('click', press3)
button4.addEventListener('click', press4)
button5.addEventListener('click', press5)
button6.addEventListener('click', press6)
button7.addEventListener('click', press7)
button8.addEventListener('click', press8)
button9.addEventListener('click', press9)
button0.addEventListener('click', press0)
buttonplus.addEventListener('click', pressplus)
buttonminus.addEventListener('click', pressminus)
buttontime.addEventListener('click', presstime)
buttondivide.addEventListener('click', pressdivide)
buttonequal.addEventListener('click', pressequal)
buttonReset.addEventListener('click', pressReset)

function press1() {
    input.value += 1
}

function press2() {
    input.value += 2
}

function press3() {
    input.value += 3
}

function press4() {
    input.value += 4
}

function press5() {
    input.value += 5
}

function press6() {
    input.value += 6
}

function press7() {
    input.value += 7
}

function press8() {
    input.value += 8
}

function press9() {
    input.value += 9
}

function press0() {
    input.value += 0
}

function pressplus() {
    input.value += ' + '
}

function pressminus() {
    input.value += ' - '
}

function presstime() {
    input.value += ' * '
}

function pressdivide() {
    input.value += ' / '
}

function pressequal() {
    s = eval(input.value)
    input.value = s
}

function pressReset() {
    input.value = ''
}