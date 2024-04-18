const scriptURL = 'https://script.google.com/macros/s/AKfycbx56sPmJEEmxYMqriAFrnIPOakCTsI5DPrqfGS1bg0aFtpk77nt8XLcA3gAzleAW2APYA/exec'

const form = document.forms['purchase-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Compra registrada com sucesso"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})