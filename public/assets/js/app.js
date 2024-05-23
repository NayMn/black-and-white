const formulario = document.querySelector('#formulario')
const linkUrl = document.querySelector('#linkURL')
const btnEnviar = document.querySelector('#btnEnviar')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('estas haciendo click')
})