const inpPassword = document.querySelector("#inpPassword");
const inpRepeat = document.querySelector("#inpRepeat");
const txtSvar = document.querySelector("#txtSvar");


function checkPassword () {
    let tekst = ""
    if (inpPassword.value === inpRepeat.value) {
        tekst += `<span>Passordene er like</span>`
    } else {
        tekst += `<span>Du må fylle inn begge passordene</span>`
    }

    txtSvar.innerHTML = tekst
}

inpPassword.oninput = checkPassword;
inpRepeat.oninput = checkPassword;