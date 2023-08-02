// base de datos
const products = [
        {
            id: 0,
            img: `./assets/img/PS5.webp` ,
            title: `PS5`,
            precio: 400,
            stockDisp: 'Stock: 20 Uni' ,
            stock: 1,
        },
        {
            id: 1,
            img:  `./assets/img/notebook.jpg`,
            title: `NotebooK Lenovo`,
            precio: 200,
            stockDisp: 'Stock: 23 Uni' ,
            stock: 1,
        },
        {
            id: 2,
            img: `./assets/img/pc-gamer.webp`,
            title: `PcGamer`,
            precio: 350,
            stockDisp: 'Stock: 534 Uni' ,
            stock: 1,
        },
        {
            id: 3,
            img: `./assets/img/PS4.jpg`,
            title: `PS4`,
            precio: 250,
            stockDisp: 'Stock: 645 Uni' ,
            stock: 1,
        },
        {
            id: 4,
            img: `./assets/img/mouse-pad.jpeg`,
            title: `MousePad`,
            precio: 20,
            stockDisp: 'Stock: 36 Uni' ,
            stock: 1,
        },
        {
            id: 5,
            img:  `./assets/img/auriculares-logitech.png`,
            title: `Auricular Logitec`,
            precio: 150,
            stockDisp: 'Stock: 8 Uni' ,
            stock: 1,
        },
        {
            id: 6,
            img:  `./assets/img/mouse-aorus.jpg`,
            title: `Mouse Aorus`,
            precio: 100,
            stockDisp: 'Stock: 43 Uni' ,
            stock: 1,
        },
    ]

    

    const productos = []

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
                productos.push({
                id: product.id,
                title: product.title,
                precio: product.precio,
                stock: product.stock,
                });
            });
        });
    }

    const btnFiltro = document.getElementById('btnFilter');
    btnFiltro.addEventListener('click', (e) => filtrar(e));

    function filtrar(){

        const datoFiltro = document.getElementById('inputFilter').value;

        const arrayFiltrado = products.filter((product) => product.title.toLowerCase().includes(datoFiltro.toLowerCase()))

        mostrarProductos(arrayFiltrado)

        console.log(arrayFiltrado)
    }

    mostrarProductos(products)
    

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

        productos.forEach((products) => {
            const cuerpo = document.createElement ("div")
            cuerpo.innerHTML = `
            <div>
                <div>
                    <h4>${products.title}</h4>
                </div>

                <div>${products.precio * products.stock }$</div>
            </div>
            `;
            containerEvent.append(cuerpo)
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
            alert('Compra realizada');
            class agradecimiento {
                constructor(nombre) {
                    this.nombre = nombre;
                }
                agradecer(){
                    console.log (`Gracias por confiar en nosotros ${nombre} 💪🏽💪🏽`)
                    alert(`Gracias por confiar en nosotros ${nombre} 💪🏽💪🏽`)
                }
            }
    
            const agradecimiento1 = new agradecimiento (nombre);
    
            agradecimiento1.agradecer()

            alert('si quiere realizar otra compra pulse "F5" y siga los pasos')
            
            containerEvent.innerHTML = " "
        })
        containerEvent.append (finalizarCompra)
    }

buttonCarrito.addEventListener("click", dispararEvento)



