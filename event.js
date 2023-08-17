// base de datos
const products = [
        {
            id: 1,
            img: `./assets/img/PS5.webp` ,
            title: `PS5`,
            precio: 400,
            stockDisp: ' Disponible!!' ,
            stock: 1,
        },
        {
            id: 2,
            img:  `./assets/img/notebook.jpg`,
            title: `NotebooK Lenovo`,
            precio: 200,
            stockDisp: 'Disponible!!' ,
            stock: 1,
        },
        {
            id: 3,
            img: `./assets/img/pc-gamer.webp`,
            title: `PcGamer`,
            precio: 350,
            stockDisp: ' Disponible!!' ,
            stock: 1,
        },
        {
            id: 4,
            img: `./assets/img/PS4.jpg`,
            title: `PS4`,
            precio: 250,
            stockDisp: ' Disponible!!' ,
            stock: 1,
        },
        {
            id: 5,
            img: `./assets/img/mouse-pad.jpeg`,
            title: `MousePad`,
            precio: 20,
            stockDisp: 'Disponible!!' ,
            stock: 1,
        },
        {
            id: 6,
            img:  `./assets/img/auriculares-logitech.png`,
            title: `Auricular Logitec`,
            precio: 150,
            stockDisp: 'Disponible!!' ,
            stock: 1,
        },
        {
            id: 7,
            img:  `./assets/img/mouse-aorus.jpg`,
            title: `Mouse Aorus`,
            precio: 100,
            stockDisp: 'Disponible!!' ,
            stock: 1,
        },
    ]

    

    let productos = JSON.parse(localStorage.getItem('carrito')) || []

    const tienda = document.getElementById ("shopItems");

    function mostrarProductos (arrayProd) {
        tienda.innerHTML = ''

        arrayProd.forEach((product) => {
            const content = document.createElement("div");
            content.innerHTML = `
            <img src="${product.img}"></img>
            <h3>${product.title}</h3>
            <h4>$${product.precio}</h4>
            <p class="precio"> Stock: ${product.stockDisp}</p>
            `;
            tienda.append(content);
        
            const buttonCompra = document.createElement ("button");
            buttonCompra.innerText = 'comprar';
        
            content.append(buttonCompra);
        
            buttonCompra.addEventListener("click", () => {
                const repetir = productos.some((repetirProducto) => repetirProducto.id === product.id)
                console.log(repetir)

                if (repetir) {
                    productos.map((prod) => {
                        if(prod.id ===product.id) {
                            prod.stock++;
                        }
                    })
                }else {
                    productos.push({
                        id: product.id,
                        img: product.img,
                        title: product.title,
                        precio: product.precio,
                        stock: product.stock,
                        });  
                }
                guardarCarrito()                      
            });
        });
    }




    const filtro = document.getElementById('inputFilter');
    filtro.addEventListener('keyup', (e) => filtrar(e));

    function filtrar(){

        const datoFiltro = document.getElementById('inputFilter').value;

        const arrayFiltrado = products.filter((product) => product.title.toLowerCase().includes(datoFiltro.toLowerCase()))

        mostrarProductos(arrayFiltrado)

        console.log(arrayFiltrado)
    }

    mostrarProductos(products)



    // CARRITOOOOOOO

    const containerEvent = document.getElementById("eventoContainer")
    const mostrarEvento = document.getElementById("evento")
    const buttonCarrito = document.getElementById("bottonDelCarrito")

    const dispararEvento = () => {
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
            <span class="eliminar"> ✖️ </span>
            `;
            containerEvent.append(cuerpo)



            let restar = cuerpo.querySelector(".restar")
           
            restar.addEventListener("click", () => {
                console.log(restar)
                if(product.stock !== 1) {
                    product.stock--
                    dispararEvento()
                }
            })

            let sumar = cuerpo.querySelector(".sumar")
           
                sumar.addEventListener("click", () => {
                    console.log(restar)
                    if(product.stock !== 0) {
                        product.stock++
                        dispararEvento()
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
        const indetidicar = productos.forEach((produ) => produ.hasOwnProperty)
        finalizarCompra.addEventListener ("click", () => {
            if(indetidicar){
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

buttonCarrito.addEventListener("click", dispararEvento)

const guardarCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(productos));
}

JSON.parse(localStorage.getItem('carrito'))


const eliminarProducto = (id) => {
    const foundId = productos.find((producto) => producto.id === id)

    productos = productos.filter ((productosId) => {
        return productosId !== foundId;
    })

    dispararEvento()
}

const menu = document.getElementById('menuNav')
const abrir = document.getElementById('abrirMenu')
const cerrar = document.getElementById('cerrarMenu')

abrir.addEventListener("click", ()=>{
    menu.classList.add('navBListVisible')
})

cerrar.addEventListener("click", ()=>{
    menu.classList.remove('navBListVisible')
})
