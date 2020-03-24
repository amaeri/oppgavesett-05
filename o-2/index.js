const inpAmount = document.querySelector("#inpAmount");
const btnWit = document.querySelector("#btnWit");
const btnDep = document.querySelector("#btnDep");
const txtSvar = document.querySelector("#txtSvar");
let balance = 500;

txtSvar.innerHTML = `Du har nå kroner ${balance} på kontoen`

function withdrawMoney() {
    let balanceMinus = balance - inpAmount.value
    if (inpAmount.value <= 500) {
        txtSvar.innerHTML = `Du har nå kroner ${balanceMinus} på kontoen`
    } else {
        txtSvar.innerHTML = `Du har ikke dekning på kontoen`
        txtSvar.style.color = "red";
    }
}

function depositMoney() {
    let balancePlus = Number(balance) + Number(inpAmount.value)
    txtSvar.innerHTML = `Du har nå kroner ${balancePlus} på kontoen`;
}

btnWit.onclick = withdrawMoney;
btnDep.onclick = depositMoney;