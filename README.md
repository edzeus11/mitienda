# mitienda
web de ventas
html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pizzería 24/7 – Pedronni Pizza and Pastas</title>
    <meta name="description"
        content="Pizzería Pedronni 24/7 – Pizza caliente, pastas y lasañas a toda hora. Conoce nuestro menú y promociones especiales." />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>

<body class="bg-amber-50 text-gray-800 font-sans">

    <!-- HEADER -->
    <header class="bg-white backdrop-blur-lg shadow-md sticky top-0 z-50 transition-all" role="banner">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <img src="imagenes/logo1pizzeria.png" alt="Logo de Pizzería Pedronni 24/7" class="h-16 w-auto"
                    loading="lazy" width="64" height="64" />
                <h1 class="text-2xl font-bold text-green-800">Pizzería Pedronni 24/7</h1>
            </div>
            <nav class="hidden sm:flex space-x-6 text-sm font-semibold text-green-800 ml-auto" role="navigation"
                aria-label="Navegación principal">
                <a href="#menu" class="hover:text-red-600">Menú</a>
                <a href="#carrito" class="hover:text-red-600">Carrito 🛒</a>
                <a href="#nosotros" class="hover:text-red-600">Nosotros</a>
                <a href="#contacto" class="hover:text-red-600">Contacto</a>
            </nav>
        </div>
    </header>

    <!-- HERO -->
    <section id="inicio" class="relative overflow-hidden text-center py-20 bg-gradient-to-b from-red-100 to-amber-50"
        role="banner">
        <div class="absolute inset-0 z-0">
            <img src="images/fondo-pizza247.png" alt="Fondo de pizza" class="w-full h-full object-cover opacity-30"
                loading="lazy" />
        </div>
        <img src="imagenes/logo-pizzeria247.png" alt="Logo de Pizzería 24/7 flotante"
            class="hidden md:block absolute right-10 top-10 w-80 z-10 drop-shadow-xl" loading="lazy" />
        <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-4xl font-bold text-red-700 mb-4 drop-shadow">¡El sabor Italiano hecho en Chile, Disponibles!
            </h2>
            <p class="text-lg mb-6 text-gray-900 drop-shadow">Abierto 24 horas, todos los días. Ordena cuando quieras 🍕
            </p>
            <a href="#menu"
                class="bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-800 shadow-lg">Ver Menú</a>
        </div>
    </section>

    <!-- MENÚ -->
    <section id="menu" class="max-w-6xl mx-auto py-16 px-4" role="region" aria-labelledby="menu-title">
        <h3 id="menu-title" class="text-3xl font-bold text-center text-red-700 mb-10">Nuestro Menú</h3>
        <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl" role="article"
                aria-labelledby="pizza-quesos">
                <div class="w-28 h-28 border-4 border-red-400 rounded-full flex items-center justify-center">
                    <span class="text-sm">4 Quesos</span>
                </div>
                <h4 id="pizza-quesos" class="mt-4 text-lg font-semibold">Pizza 4 Quesos</h4>
                <p class="text-sm text-gray-600">Mozzarella, cheddar, roquefort, provolone y parmesano.</p>
                <div class="text-yellow-400 mt-2">★★★★☆</div>
                <button onclick="agregarAlCarrito('Pizza 4 Quesos', 12.99)"
                    class="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    aria-label="Agregar Pizza 4 Quesos al carrito">Agregar al carrito</button>
            </div>

            <div class="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl" role="article"
                aria-labelledby="spaghetti">
                <div class="w-28 h-28 border-4 border-yellow-500 rounded-full flex items-center justify-center">
                    <span class="text-sm">Spaghetti</span>
                </div>
                <h4 id="spaghetti" class="mt-4 text-lg font-semibold">Spaghetti a tu elección</h4>
                <p class="text-sm text-gray-600">Salsa al pesto, salsas rojas y salsas cremosas con queso</p>
                <div class="text-yellow-400 mt-2">★★★★☆</div>
                <button onclick="agregarAlCarrito('Spaghetti', 9.5)"
                    class="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    aria-label="Agregar Spaghetti al carrito">Agregar al carrito</button>
            </div>

            <div class="flex flex-col items-center bg-white p-6 shadow-lg rounded-2xl" role="article"
                aria-labelledby="pizza-chef">
                <div class="w-28 h-28 border-4 border-green-500 rounded-full flex items-center justify-center">
                    <span class="text-sm">Chef</span>
                </div>
                <h4 id="pizza-chef" class="mt-4 text-lg font-semibold">Pizza del Chef</h4>
                <p class="text-sm text-gray-600">Sabor exclusivo de la casa, Pizza gourmet</p>
                <div class="text-yellow-400 mt-2">★★★★☆</div>
                <button onclick="agregarAlCarrito('Pizza del Chef', 14.99)"
                    class="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    aria-label="Agregar Pizza del Chef al carrito">Agregar al carrito</button>
            </div>
        </div>
    </section>

    <!-- CARRITO -->
    <section id="carrito" class="max-w-4xl mx-auto py-16 px-4 bg-white rounded-lg shadow-lg" role="region"
        aria-labelledby="carrito-title">
        <h3 id="carrito-title" class="text-3xl font-bold text-red-700 mb-6 text-center">🛒 Carrito de Compras</h3>
        <div id="carrito-contenido" class="space-y-2 mb-6 min-h-[80px]">
            <!-- Items agregados dinámicamente -->
            <p class="text-center text-gray-500">Tu carrito está vacío.</p>
        </div>
        <div class="text-right font-bold text-xl mb-6">Total: <span id="total-carrito">$0.00</span></div>
        <button onclick="vaciarCarrito()" class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            aria-label="Vaciar carrito">Vaciar Carrito</button>
    </section>

    <!-- NOSOTROS -->
    <section id="nosotros" class="bg-green-50 py-16 px-4" role="region" aria-labelledby="nosotros-title">
        <div class="max-w-4xl mx-auto text-center">
            <h3 id="nosotros-title" class="text-3xl font-bold text-red-700 mb-6">Sobre Nosotros</h3>
            <p class="text-lg">Somos Pizzería Pedronni, una fusión de sabor y servicio ininterrumpido. Cocinamos con
                pasión y atendemos las 24 horas, todos los días del año.</p>
        </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="py-16 px-4 bg-white" role="region" aria-labelledby="contacto-title">
        <div class="max-w-4xl mx-auto text-center">
            <h3 id="contacto-title" class="text-3xl font-bold text-red-700 mb-6">Contáctanos</h3>
            <p class="mb-4">¿Tienes alguna duda o quieres hacer un pedido grande?</p>
            <p>📞 +56 9 1234 5678</p>
            <p>📍 Av. Siempreviva 742, Santiago</p>
            <p>✉️ contacto@pizzeria247.cl</p>

            <form id="contact-form" method="POST" action="/api/contact"
                class="mt-8 max-w-md mx-auto flex flex-col space-y-4" aria-labelledby="contact-form-title">
                <h4 id="contact-form-title" class="text-xl font-semibold">Formulario de Contacto</h4>
                <input name="name" placeholder="Tu nombre" required class="border p-2 rounded" aria-label="Nombre" />
                <input name="email" type="email" placeholder="Tu correo electrónico" required class="border p-2 rounded"
                    aria-label="Correo electrónico" />
                <textarea name="message" placeholder="Mensaje" required class="border p-2 rounded resize-none"
                    aria-label="Mensaje"></textarea>
                <button type="submit" class="bg-green-700 text-white py-2 rounded hover:bg-green-800"
                    aria-label="Enviar mensaje">Enviar</button>
            </form>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-red-700 text-white text-center py-6 mt-10" role="contentinfo">
        © 2025 Pizzería Pedronni 24/7 – Todos los derechos reservados.
    </footer>

    <script>
        // Carrito en localStorage para persistir datos localmente
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        function guardarCarrito() {
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }

        function agregarAlCarrito(nombre, precio, cantidad = 1) {
            const index = carrito.findIndex(item => item.nombre === nombre);
            if (index !== -1) {
                carrito[index].cantidad += cantidad;
            } else {
                carrito.push({ id: Date.now(), nombre, precio, cantidad });
            }
            guardarCarrito();
            mostrarCarrito();
            alert(`Agregaste ${nombre} al carrito.`);
        }

        function mostrarCarrito() {
            const contenedor = document.getElementById('carrito-contenido');
            contenedor.innerHTML = '';

            if (carrito.length === 0) {
                contenedor.innerHTML = '<p class="text-center text-gray-500">Tu carrito está vacío.</p>';
                document.getElementById('total-carrito').textContent = '$0.00';
                return;
            }

            let total = 0;
            carrito.forEach(item => {
                total += item.precio * item.cantidad;

                const div = document.createElement('div');
                div.className = 'flex justify-between items-center p-2 border-b';

                div.innerHTML = `
                    <span>${item.nombre} x${item.cantidad}</span>
                    <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
                    <button onclick="eliminarDelCarrito(${item.id})" class="text-red-600 ml-4 hover:text-red-800" aria-label="Eliminar ${item.nombre}">❌</button>
                `;

                contenedor.appendChild(div);
            });

            document.getElementById('total-carrito').textContent = `$${total.toFixed(2)}`;
        }

        function eliminarDelCarrito(id) {
            carrito = carrito.filter(item => item.id !== id);
            guardarCarrito();
            mostrarCarrito();
        }

        function vaciarCarrito() {
            if (confirm('¿Estás seguro de vaciar el carrito?')) {
                carrito = [];
                guardarCarrito();
                mostrarCarrito();
            }
        }

        // Mostrar carrito al cargar la página
        window.onload = mostrarCarrito;

        // Opcional: enviar formulario contacto con fetch (API backend)
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (res.ok) {
                    alert('Mensaje enviado con éxito. ¡Gracias!');
                    form.reset();
                } else {
                    alert('Error al enviar mensaje. Por favor, intenta nuevamente.');
                }
            } catch (error) {
                alert('Error de conexión. Intenta más tarde.');
            }
        });
    </script>
</body>

</html>
