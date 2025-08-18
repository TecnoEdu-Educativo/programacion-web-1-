// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navbarMenu.classList.remove('active');
        }
    });
});

// Category filtering
const categoryBtns = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (category === 'all' || productCategory === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });

        // Hide the new section when a category is selected and it's not "all"
        if (category !== 'all') {
            document.getElementById('shoe-world').style.display = 'none';
        } else {
            document.getElementById('shoe-world').style.display = 'block';
        }
    });
});

// Animate products on scroll
const observerOptions = {
    threshold: 0.1
};

const productObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease forwards';
            entry.target.style.animationDelay = `${entry.target.dataset.index * 0.1}s`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

products.forEach((product, index) => {
    product.dataset.index = index;
    productObserver.observe(product);
});

// Collapsible list functionality for "Mundo del Zapato"
const collapsibleButtons = document.querySelectorAll('.collapsible-button');

collapsibleButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            content.style.maxHeight = null;
        } else {
            content.classList.add('show');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});