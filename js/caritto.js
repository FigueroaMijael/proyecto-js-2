const pintarCarrito = () => {
    containerEvent.innerHTML = " "
    containerEvent.style.display = "block"
    mostrarEvento.style.display = "block"
    

    const mostarE = document.createElement("div");

    const cerrarE = document.createElement("div");
    cerrarE.innerHTML = "❌";
    cerrarE.className = "cerrarEvento";
    mostarE.append(cerrarE);

    cerrarE.addEventListener ("click", () => {
        containerEvent.style.display = "none"
        mostrarEvento.style.display = "none"
    })

    const carrito = document.createElement("div");
    carrito.innerText = "carrito";
    carrito.className = "carritoTitle";
    mostarE.append(carrito);

    containerEvent.append(mostarE)

    productos.forEach((product) => {
        let cuerpo = document.createElement ("div")
        cuerpo.className = 'carritoCompras'
        cuerpo.innerHTML = `
        <img src=${product.img} id="img-dos">
        <h4>${product.title}</h4>
        <p>${product.precio}$</p>
        <span class="restar"> - </span>
        <p>${product.stock}</p>
        <span class="sumar"> + </span>
        <p> Total: ${product.stock * product.precio}</p>
        <span class="eliminar"> ❌ </span>
        `;
        containerEvent.append(cuerpo)


        let restar = cuerpo.querySelector(".restar")
       
        restar.addEventListener("click", () => {
            if(product.stock !== 1) {
                product.stock--
                pintarCarrito()
            }
        })

        let sumar = cuerpo.querySelector(".sumar")
       
            sumar.addEventListener("click", () => {
                console.log(restar)
                if(product.stock !== 0) {
                    product.stock++
                    pintarCarrito()
                }
            })

            let eliminar = cuerpo.querySelector(".eliminar")
            eliminar.addEventListener("click", ()=> {
                eliminarProducto(product.id)
            })
    })



    // CALCULO DE VALOR TOTAL 
    const total = productos.reduce((acc, produc) => acc + produc.precio * produc.stock, 0);

    const valortotal = document.createElement ("div");
    valortotal.innerHTML = `
    <div> Total: ${total}$ </div>
    `;
    containerEvent.append(valortotal);



// FINALIZACION DE LA COMPRA
    const finalizarCompra = document.createElement ("button")
    finalizarCompra.className = 'finalizar'
    finalizarCompra.innerText = 'Comprar'
    finalizarCompra.addEventListener ("click", () => {
        if(productos.length > 0){
            Swal.fire(
                'Compra realizada!',
                'Gracias por confiar en nosotros!',
                'success',
                'continuar',
              )
        }else {
            Swal.fire(
                'Error!',
                'Ocurrio un error',
                'error',
                'continuar',
                )
        }
    })
    containerEvent.append (finalizarCompra)
}

buttonCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) => {
    const foundId = productos.find((producto) => producto.id === id)

    productos = productos.filter ((productosId) => {
        return productosId !== foundId;
    })
    carritoCounter()
    saveLocal()
    pintarCarrito()
}

const carritoCounter = () => {
cantidadCarrito.style.display = "block";

const carritoLength = productos.length;
localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter()