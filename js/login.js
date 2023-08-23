const signUp = document.getElementById('signUp')
const signIn = document.getElementById('signIn')
const nameInput = document.getElementById('nameInput')
const title = document.getElementById('title')

signUp.addEventListener("click", () => {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable")
    signIn.classList.remove("disable")
    value.innerHTML = "Iniciar Session"
})

signIn.addEventListener("click", () => {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable")
    signIn.classList.add("disable")
    value.innerHTML = "registrarme"
})

const nombre = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const value = document.getElementById('value')

    value.addEventListener("click", (e) => {
        if(e.target === value) {
         if (nombre.value !== " " && email.value !== " " && password.value !== " " ){
             e.preventDefault()
             const data = {
                nombre: nombre.value,
                email: email.value,
                password: password.value,
            }
            localStorage.setItem('data', JSON.stringify(data))
            window.location.href = "../index.html"
         } 
        }
     })

     const guardar = JSON.parse(localStorage.getItem('data'))