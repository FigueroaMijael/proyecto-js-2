const menu = document.getElementById('menuNav')
const abrir = document.getElementById('abrirMenu')
const cerrar = document.getElementById('cerrarMenu')

abrir.addEventListener("click", ()=>{
    menu.classList.add('navBListVisible')
})

cerrar.addEventListener("click", ()=>{
    menu.classList.remove('navBListVisible')
})

