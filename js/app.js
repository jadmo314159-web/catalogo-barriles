// Base de datos simulada de los barriles asadores y ahumadores
const barriles = [
    {
        id: 1,
        marca: "Flami",
        nombre: "Flami eco - 7 libras",
        tamano: "mini",
        precio: 280000,
        capacidad: "1 - 8 personas",
        acabado: "Acero Inoxidable / Níquel",
        descripcion: "Ideal para balcones, terrazas y pequeños grupos. Excelente retención de calor y fácil limpieza.",
        caracteristicasHtml: `
            <strong>Características del producto</strong>
            <ul>
                <li>Capacidad: 7 lb (ideal para 6 a 8 personas).</li>
                <li>Altura: 53,5 cm.</li>
                <li>Diámetro / Ancho: 30 cm.</li>
                <li>Material y agarre: Fabricado en acero inoxidable con asas/mangos de madera para facilitar el agarre sin quemarse.</li>
            </ul>
            <strong>Accesorios y componentes incluidos</strong>
            <ul>
                <li>1 Garfio</li>
                <li>6 Ganchos</li>
                <li>1 Carbonera</li>
                <li>1 Parrilla para asar</li>
                <li>1 Cenicero</li>
                <li>Termómetro</li>
                <li>Esclusa en la tapa</li>
                <li>Enganche en la base</li>
            </ul>
        `,
        imagenes: [
            "assets/images/flami7l.jpg",
            "assets/images/flami7la.jpg",
            "assets/images/flami7lb.jpg",
            "assets/images/flami7lc.jpg"
        ]
    },

    {
        id: 2,
        marca: "Ingrill",
        nombre: "Barril Ingril  - 7 libras",
        tamano: "mini",
        precio: 320000,
        capacidad: "1 - 8 personas",
        acabado: "Acero Inoxidable / Níquel",
        descripcion: "Ideal para balcones, terrazas y pequeños grupos. Excelente retención de calor y fácil limpieza.",
        imagenes: [
              "assets/images/ingrill7l.jpg",
              "assets/images/ingrill7la.jpg",
              "assets/images/ingrill7lb.jpg",
              "assets/images/ingrill7lc.jpg"
             
       ] 
    },

    {
        id: 3,
        marca: "Brasa Firme",
        nombre: "Barril Brasa Firme - 12 Libras",
        tamano: "Pequeño",
        precio: 380000,
        capacidad: "1 - 10 personas",
        acabado: "Níquel Reforzado",
        descripcion: "El favorito para reuniones familiares. Permite asar, ahumar y colgar cortes largos simultáneamente.",
        imagenes: [
            "assets/images/brasafirme12l.jpg",
            "assets/images/brasafirme12la.jpg",
            "assets/images/brasafirme12lb.jpg"

        ] 
    },
    {    
        id: 4,
        marca: "Steak and Beer",
        nombre: "Steak and Beer - 12 Libras",
        tamano: "Pequeño",
        precio: 380000,
        capacidad: "1 - 10 personas",
        acabado: "Níquel Reforzado",
        descripcion:"El favorito para reuniones familiares. Permite asar, ahumar y colgar cortes largos simultáneamente.",
        imagenes: [
            "assets/images/steakandbeer12l.jpg",
            "assets/images/steakandbeer12lb.jpg",
            "assets/images/steakandbeer12lc.jpg",
            "assets/images/steakandbeer12ld.jpg"
        ]
    },
    {
        id: 5,
        marca: "Ingrill",
        nombre: "Barril Ingril  - 15 libras",
        tamano: "Mediano",
        precio: 500000,
        capacidad: "1 - 18",
        acabado: "Níquel Industrial y Carbón",
        descripcion: "Diseñado para eventos y restaurantes. Máxima capacidad de carga de carbón y carne de alta gama.",
        imagenes: [
            "assets/images/ingrill15l.jpg",
            "assets/images/ingrill15la.jpg",
            "assets/images/ingrill15lb.jpg",
            "assets/images/ingrill15lc.jpg"
        ]
    },
    {
        id: 6,
        marca: "Brasa Firme",
        nombre: "Brasa Firme - 20 libras",
        tamano: "Mediano",
        precio: 550000,
        capacidad: "15 - 25 personas",
        acabado: "Níquel Brillante",
        descripcion: "Elegante diseño exterior con detalles metálicos de níquel pulido y termómetro integrado de alta precisión.",
        imagenes: [
            "assets/images/brasafirme20l.jpg",
            "assets/images/brasafirme20la.jpg",
            "assets/images/brasafirme20lb.jpg"

        ]
    },
        {
        id: 7,
        marca: "Ingrill",
        nombre: "Ingril Mundialista 25 libras",
        tamano: "Mediano",
        precio: 600000,
        capacidad: "25 - 30 personas",
        acabado: "Níquel Portátil",
        descripcion: "Llévalo a camping, días de campo o salidas de pesca. Ligero, resistente y muy eficiente.",
        imagenes: [
            "assets/images/ingrillmundialista25l.jpg",
            "assets/images/ingrillmundialista25la.jpg",
            "assets/images/ingrillmundialista25lb.jpg",
            "assets/images/ingrillmundialista25lc.jpg"

        ]
    },
    {
        id: 8,
        marca: "Ingrill",
        nombre: "Ingrill mediano 25 libras",
        tamano: "Mediano",
        precio: 650000,
        capacidad: "25 - 30 personas",
        acabado: "Níquel Portátil",
        descripcion: "Llévalo a camping, días de campo o salidas de pesca. Ligero, resistente y muy eficiente.",
        imagenes: [
            "assets/images/ingrill25l.jpg",
            "assets/images/ingrill25la.jpg",
            "assets/images/ingrill25lb.jpg",
            "assets/images/ingrill25lc.jpg"

        ]
    },
    {
        id: 9,
        marca: "Humo Barriles",
        nombre: "Humo Barril - 30 libras",
        tamano: "Grande",
        precio: 720000,
        capacidad: "35 - 40",
        acabado: "Níquel Mate Reforzado",
        descripcion: "Estructura de alta resistencia con accesorios completos incluidos: ganchos, parrilla superior y garfios.",
        imagenes: [
            "assets/images/humobarriles30l.jpg",                       
            "assets/images/humobarriles30la.jpg",
            "assets/images/humobarriles30lb.jpg"

        ]
    },
    {
        id: 10,
        marca: "Ingrill",
        nombre: "Ingrill 45 libras",
        tamano: "Grande",
        precio: 850000,
        capacidad: "50 - 60",
        acabado: "Níquel Mate Reforzado",
        descripcion: "Estructura de alta resistencia con accesorios completos incluidos: ganchos, parrilla superior y garfios.",
        imagenes: [
            "assets/images/ingrill45l.jpg",
            "assets/images/ingrill45la.jpg",
            "assets/images/ingrill45lb.jpg",
            "assets/images/ingrill45lc.jpg"


        ]
    },
    {
        id: 11,
        marca: "Humo Barriles",
        nombre: "Humo Barriles 60 libras",
        tamano: "Jumbo",
        precio: 1000000,
        capacidad: "70 - 80",
        acabado: "Níquel Mate Reforzado",
        descripcion: "Estructura de alta resistencia con accesorios completos incluidos: ganchos, parrilla superior y garfios.",
        imagenes: [
            "assets/images/humobarriles60l.jpg",
            "assets/images/humobarriles60la.jpg",
            "assets/images/humobarriles60lb.jpg",
            "assets/images/humobarriles60lc.jpg"
        ]
    },
    {
        id: 12,
        marca: "Carnivore",
        nombre: "Barril Carnivore 100 libras",
        tamano: "Mega",
        precio: 1300000,
        capacidad: "90 - 100",
        acabado: "Níquel Mate Reforzado",
        descripcion: "Ideal para emprendenores.",
        imagenes: [
            "assets/images/carnivore100l.jpg"
        ]
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

// Formatear precio en moneda local
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
        const mensajeWhatsApp = encodeURIComponent(`Hola, me interesa el barril "${product.nombre}" (${product.marca}) con precio de ${formatPrice(product.precio)}. ¿Está disponible?`);
        const whatsappUrl = `https://wa.me/573001234567?text=${mensajeWhatsApp}`;

        // Generar imágenes y pasar el arreglo completo y el índice al hacer clic
        const imagenesHtml = product.imagenes.map((img, index) => `
            <img src="${img}" alt="${product.nombre}" onclick='openLightbox(${JSON.stringify(product.imagenes)}, ${index})' onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'">
        `).join('');

        // Generar los puntos blancos indicadores
        const dotsHtml = product.imagenes.length > 1 ? `
            <div class="product-dots">
                ${product.imagenes.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
            </div>
        ` : '';

        // Sección del botón de características (si el producto las tiene)
        const featuresHtml = product.caracteristicasHtml ? `
            <div class="btn-features-container">
                <button class="btn-features toggle-features-btn">
                    <i class="fa-solid fa-list-check"></i> Características del producto
                </button>
            </div>
            <div class="features-dropdown">
                ${product.caracteristicasHtml}
                <button class="btn-hide-features hide-features-btn">Ocultar</button>
            </div>
        ` : '';

        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="product-image" style="position: relative;">
                <span class="product-badge">${product.tamano}</span>
                <div class="product-images-scroll">
                    ${imagenesHtml}
                </div>
                ${dotsHtml}
            </div>
            <div class="product-content">
                <span class="product-brand">${product.marca}</span>
                <h3 class="product-title">${product.nombre}</h3>
                <p class="product-desc">${product.descripcion}</p>
                
                ${featuresHtml}

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

        // Sincronizar los puntos blancos cuando el usuario hace scroll en la tarjeta de imágenes
        const scrollContainer = card.querySelector('.product-images-scroll');
        const dots = card.querySelectorAll('.dot');
        if (scrollContainer && dots.length > 0) {
            scrollContainer.addEventListener('scroll', () => {
                const index = Math.round(scrollContainer.scrollLeft / scrollContainer.clientWidth);
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            });
        }

        // Lógica del botón de características desplegable
        const btnToggleFeatures = card.querySelector('.toggle-features-btn');
        const featuresDropdown = card.querySelector('.features-dropdown');
        const btnHideFeatures = card.querySelector('.hide-features-btn');

        if (btnToggleFeatures && featuresDropdown) {
            btnToggleFeatures.addEventListener('click', (e) => {
                e.stopPropagation();
                featuresDropdown.classList.toggle('active');
            });

            if (btnHideFeatures) {
                btnHideFeatures.addEventListener('click', (e) => {
                    e.stopPropagation();
                    featuresDropdown.classList.remove('active');
                });
            }

            // Ocultar automáticamente si el usuario sigue mirando y sale del área de la tarjeta (Intersection Observer)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        featuresDropdown.classList.remove('active');
                    }
                });
            }, { threshold: 0.2 }); // Se oculta cuando menos del 20% de la tarjeta es visible en pantalla

            observer.observe(card);
        }
    });
}

// Funciones para manejar el visor ampliado (Lightbox) con scroll horizontal de fotos
function openLightbox(imagenesArray, initialIndex) {
    let modal = document.getElementById('lightboxModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'lightboxModal';
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
            <div class="lightbox-container" id="lightboxContainer"></div>
        `;
        document.body.appendChild(modal);
    }

    const container = document.getElementById('lightboxContainer');
    container.innerHTML = imagenesArray.map(img => `
        <img src="${img}" class="lightbox-content" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'">
    `).join('');

    modal.classList.add('active');

    setTimeout(() => {
        container.scrollLeft = container.clientWidth * initialIndex;
    }, 50);
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
    }
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