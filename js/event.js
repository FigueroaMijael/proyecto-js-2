    const tienda = document.getElementById ("shopItems");
    const filtro = document.getElementById('inputFilter');

    let productos = JSON.parse(localStorage.getItem('carrito')) || []

    const getProducts = async () => {
        const res = await fetch("../data.json");
        const data = await res.json();

        function mostrarProductos (data) {
            tienda.innerHTML = ''
    
            data.forEach((product) => {
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

    filtro.addEventListener('keyup', (e) => filtrar(e));

    function filtrar(){

        const datoFiltro = document.getElementById('inputFilter').value;

        const arrayFiltrado = data.filter((product) => product.title.toLowerCase().includes(datoFiltro.toLowerCase()))

        mostrarProductos(arrayFiltrado)

        console.log(arrayFiltrado)
    }
        mostrarProductos(data)
    }
    getProducts()