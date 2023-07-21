// base de datos
let products = [
        {
            id: 0,
            title: `PS5`,
            precio: 400,
            stockDisp: 'Stock: 20 Uni' ,
            stock: 1,
        },
        {
            id: 1,
            title: `NotebooK Lenovo`,
            precio: 200,
            stockDisp: 'Stock: 23 Uni' ,
            stock: 1,
        },
        {
            id: 2,
            title: `PcGamer`,
            precio: 350,
            stockDisp: 'Stock: 534 Uni' ,
            stock: 1,
        },
        {
            id: 3,
            title: `PS4`,
            precio: 250,
            stockDisp: 'Stock: 645 Uni' ,
            stock: 1,
        },
        {
            id: 4,
            title: `MousePad`,
            precio: 20,
            stockDisp: 'Stock: 36 Uni' ,
            stock: 1,
        },
        {
            id: 5,
            title: `Auricular Logitec`,
            precio: 150,
            stockDisp: 'Stock: 8 Uni' ,
            stock: 1,
        },
        {
            id: 6,
            title: `Mouse Aorus`,
            precio: 100,
            stockDisp: 'Stock: 43 Uni' ,
            stock: 1,
        },
    ]

    const msjBienvenida = document.getElementById("msjBienvenida")

    const nombre = prompt('Ingrese nombre')

    const hola = document.createElement ("div");
            hola.className = 'bienvenida'
            hola.innerHTML = `
                <h1> BIENVENIDO/A A TECNOCOM ${nombre} !! </h1>
            `
        msjBienvenida.append(hola)

    const productos = []

    const tienda = document.getElementById ("shopItems");
    
    
    products.forEach((product) => {
        const content = document.createElement("div");
        content.innerHTML = `
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
            console.log(productos);
        });
    });

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



