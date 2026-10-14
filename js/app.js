// Base de datos simulada de los barriles asadores y ahumadores
const barriles = [
    {
        id: 1,
        marca: "Ahumadores Pro",
        nombre: "Barril Asador Compacto Níquel",
        tamano: "Pequeño",
        precio: 350000,
        capacidad: "1 - 8 personas",
        acabado: "Acero Inoxidable / Níquel",
        descripcion: "Ideal para balcones, terrazas y pequeños grupos. Excelente retención de calor y fácil limpieza.",
        imagen: "assets/images/placeholder.jpg"
    },
    {
        id: 2,
        marca: "Fuego & Acero",
        nombre: "Barril Ahumador Master Níquel",
        tamano: "Mediano",
        precio: 650000,
        capacidad: "8 - 20 personas",
        acabado: "Níquel Reforzado",
        descripcion: "El favorito para reuniones familiares. Permite asar, ahumar y colgar cortes largos simultáneamente.",
        imagen: "assets/images/placeholder.jpg"
    },
    {
        id: 3,
        marca: "Brasas del Sur",
        nombre: "Barril Titanio Heavy Duty",
        tamano: "Grande",
        precio: 980000,
        capacidad: "Comercial / Eventos",
        acabado: "Níquel Industrial y Carbón",
        descripcion: "Diseñado para eventos y restaurantes. Máxima capacidad de carga de carbón y carne de alta gama.",
        imagen: "assets/images/placeholder.jpg"
    },
    {
        id: 4,
        marca: "Ahumadores Pro",
        nombre: "Barril Asador Ejecutivo",
        tamano: "Mediano",
        precio: 590000,
        capacidad: "8 - 15 personas",
        acabado: "Níquel Brillante",
        descripcion: "Elegante diseño exterior con detalles metálicos de níquel pulido y termómetro integrado de alta precisión.",
        imagen: "assets/images/placeholder.jpg"
    },
    {
        id: 5,
        marca: "Fuego & Acero",
        nombre: "Mini Barril Nomad",
        tamano: "Pequeño",
        precio: 290000,
        capacidad: "1 - 5 personas",
        acabado: "Níquel Portátil",
        descripcion: "Llévalo a camping, días de campo o salidas de pesca. Ligero, resistente y muy eficiente.",
        imagen: "assets/images/placeholder.jpg"
    },
    {
        id: 6,
        marca: "Brasas del Sur",
        nombre: "Barril Asumador Pro Plus",
        tamano: "Grande",
        precio: 1150000,
        capacidad: "Eventos masivos",
        acabado: "Níquel Mate Reforzado",
        descripcion: "Estructura de alta resistencia con accesorios completos incluidos: ganchos, parrilla superior y garfios.",
        imagen: "assets/images/placeholder.jpg"
    }
];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const brandFilter = document.getElementById('brandFilter');
const sizeFilter = document.getElementById('sizeFilter');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');

// Menú móvil desplegable
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cargar opciones únicas de marcas en el selector
function populateBrands() {
    const brands = [...new Set(barriles.map(b => b.marca))];
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Formatear precio en moneda local (ej: COP o moneda general)
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
}

// Renderizar productos en pantalla
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 10px; color: var(--fire-orange);"></i>
                <p>No se encontraron barriles con los filtros seleccionados.</p>
            </div>
        `;
        return;
    }

    productsToRender.forEach(product => {
        // Enlace preconfigurado para cotizar por WhatsApp de forma rápida
        const mensajeWhatsApp = encodeURIComponent(`Hola, me interesa el barril "${product.nombre}" (${product.marca}) con precio de ${formatPrice(product.precio)}. ¿Está disponible?`);
        const whatsappUrl = `https://wa.me/573001234567?text=${mensajeWhatsApp}`;

        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-image">
                <span class="product-badge">${product.tamano}</span>
                <img src="${product.imagen}" alt="${product.nombre}" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'">
            </div>
            <div class="product-content">
                <span class="product-brand">${product.marca}</span>
                <h3 class="product-title">${product.nombre}</h3>
                <p class="product-desc">${product.descripcion}</p>
                <div class="product-specs">
                    <div><i class="fa-solid fa-users"></i> ${product.capacidad}</div>
                    <div><i class="fa-solid fa-shield-halved"></i> ${product.acabado}</div>
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.precio)}</span>
                    <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp" title="Pedir por WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Filtrar productos
function filterProducts() {
    const selectedBrand = brandFilter.value;
    const selectedSize = sizeFilter.value;

    const filtered = barriles.filter(product => {
        const matchesBrand = (selectedBrand === 'all' || product.marca === selectedBrand);
        const matchesSize = (selectedSize === 'all' || product.tamano === selectedSize);
        return matchesBrand && matchesSize;
    });

    renderProducts(filtered);
}

// Event Listeners para los filtros
brandFilter.addEventListener('change', filterProducts);
sizeFilter.addEventListener('change', filterProducts);

// Manejo del formulario de contacto
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert(`¡Gracias por tu mensaje, ${nombre}! Un asesor se pondrá en contacto contigo muy pronto.`);
    contactForm.reset();
});

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    populateBrands();
    renderProducts(barriles);
}); 