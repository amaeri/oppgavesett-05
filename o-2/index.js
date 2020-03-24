const inpAmount = document.querySelector("#inpAmount");
const btnWit = document.querySelector("#btnWit");
const btnDep = document.querySelector("#btnDep");
const txtSvar = document.querySelector("#txtSvar");

function withdrawMoney () {
    let withdrawText = ""
    if (inpAmount.value <= 500) {
        withdrawText += `<span>Du har nå kroner ${500 - inpAmount.value} på kontoen </span>`
    } else {
        withdrawText += `<span>Du har ikke dekning på kontoen</span>`
    }

    txtSvar.innerHTML = withdrawText
}

function depositMoney () {
    let depositText = ""
    if (inpAmount.value >= 0) {
        depositText += `<span>Du har nå kroner ${Number(500) + Number(inpAmount.value)} på kontoen </span>`
    } else {
        depositText += `<span>Beløpet er for lavt</span>`
    }

    txtSvar.innerHTML = depositText
}

btnWit.onclick = withdrawMoney;
btnDep.onclick = depositMoney;