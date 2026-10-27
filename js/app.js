let barriles = [];

// Cargar los datos desde el archivo JSON al iniciar la aplicación
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('barriles.json');
        barriles = await response.json();
        
        populateBrands();
        renderProducts(barriles);
    } catch (error) {
        console.error('Error al cargar el catálogo de barriles:', error);
    }
});  

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
        const whatsappUrl = `https://wa.me/573104839028?text=${mensajeWhatsApp}`;

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