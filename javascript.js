const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const form = document.getElementById('submeter')



form.addEventListener('submit', () => {
    const validar = campoA.value < campoB.value
    if (validar) {
    alert("sucessp")
    } else {
    alert( 'Falha')
    }
})