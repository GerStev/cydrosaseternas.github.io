// script.js
// Menú responsive
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animación del botón hamburguesa
    menuToggle.classList.toggle('active');
    const spans = menuToggle.getElementsByTagName('span');
    if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const spans = menuToggle.getElementsByTagName('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Añadir efecto de hover a las tarjetas
document.querySelectorAll('.flor-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Animación para los botones de comprar
document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
        alert('¡Gracias por tu interés! Esta función estará disponible pronto en su version final.');
    });
});

// Detectar cambios en el ancho de la ventana
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const spans = menuToggle.getElementsByTagName('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Efecto de hover mejorado para el logo
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.3) rotate(360deg)';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Manejo de filtros en el catálogo
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Agregar clase active al botón clickeado
        btn.classList.add('active');
        
        const filtro = btn.getAttribute('data-filter');
        filtrarProductos(filtro);
    });
});

function filtrarProductos(categoria) {
    document.querySelectorAll('.producto-card').forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        contactForm.reset();
    });
}

//Ruta de direccion a la pagina de incio por mdeio del logo
document.getElementById('logo').addEventListener('click', function() {
    window.location.href = 'index.html'; // o la ruta de tu página inicial
});