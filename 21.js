var card = document.getElementById("cards")
var total = document.getElementById("total")
var msg = document.getElementById("msg")
var ctotal = document.getElementById("ctotal")
var pcard = []
var sum = 0
var csum = 0
var win = false
var game = true
var sgame = false
var player = prompt("Enter the Name")
var amount=prompt("Enter the amount")

function start() {
    var num1 = getrandom()
    var num2 = getrandom()
    sum = num1 + num2
    pcard = [num1, num2]
    var cnum1 = getrandom()
    var cnum2 = getrandom()
    csum = cnum1 + cnum2
    render()
    sgame = true
    win = false
    game = true
}

function render() {
    card.innerHTML = "Cards : "
    for (let i = 0; i < pcard.length; i++) {
        card.innerHTML += `${pcard[i]} `
    }
    total.innerHTML = `Total : ${sum} `
    ctotal.innerHTML = `Computer Total : ${csum}`

    if (sum < 21) {
        msg.innerHTML = "Do you want another card ?"
    } else if (sum == 21 && csum<21) {
        amount*=2
        msg.innerHTML = `Congrats ${player} , You won Rs.${amount}`
        win = true
    } else {
        msg.innerHTML = `Sorry ${player} , your Rs.${amount} is gaya`
        game = false
    }
}

function getrandom() {
    var random = Math.floor(Math.random() * 13 + 1)
    if (random > 10) {
        return 10
    } else if (random == 1) {
        return random
    } else {
        return random
    }
}

function newcard() {
    if (win == false && game == true && sgame == true) {
        var num = getrandom()
        pcard.push(num)
        sum += num

        while (csum < 19) {
            var cnum = getrandom()
            csum += cnum
        }
        render()
        if (sum > 21) {
            winner()
        }
    }
}

function winner() {
    if (sgame) {
        while (csum < 17 || csum < sum) {
            var cnum = getrandom()
            csum += cnum
        }
        ctotal.innerHTML = `Computer Total : ${csum}`

        if (sum > 21 || (csum <= 21 && csum > sum)) {
            msg.innerHTML = `Sorry ${player} , your Rs.${amount} is gaya`

        } else if (sum == csum) {
            msg.innerHTML = "It is a Tie"

        } else if (csum > 21) {
            msg.innerHTML = `Congrats ${player} , You won Rs.${amount}`
        } else {
            msg.innerHTML = `Congrats ${player} , You won Rs.${amount}`
        }
        game = false
    }
}