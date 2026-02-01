console.log("Portfolio cargado correctamente");

fetch("assets/data/projects.json")
    .then(response => response.json())
    .then(data => {
        const containerHtml = document.getElementById("container-html");
        const containerPracticas = document.getElementById("container-practicas");

        data.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2", "mb-4", "fade-in-card");
            card.innerHTML = `
                <div class="card h-100 shadow-sm border-0 d-flex flex-column">
                    <img src="assets/img/projects/${project.imagen}" class="card-img-top img-proyecto" alt="${project.titulo}">
                    <div class="card-body text-center p-2 d-flex flex-column">
                        <h6 class="card-title fw-bold mb-1" style="font-size: 0.9rem;">${project.titulo}</h6>
                        
                        <p class="card-text text-truncate-custom mb-1">${project.descripcion}</p>
                        
                        <p class="text-muted mb-1" style="font-size: 0.75rem;">
                            <i class="far fa-calendar-alt"></i> ${project.fecha}
                        </p>
                        
                        <p class="card-text mb-2" style="font-size: 0.75rem;"><strong>Estado:</strong> ${project.estado}</p>
                        
                        <div class="mb-2">
                            <span class="badge bg-secondary" style="font-size: 0.65rem;">${project.tecnologia}</span>
                        </div>
                        
                        <a href="${project.enlace}" target="_blank" class="btn btn-primary btn-sm w-100 mt-auto">Ver</a>
                    </div>
                </div>
            `;

            if (project.categoria.toLowerCase() === "html") {
                containerHtml.appendChild(card);
            } else if (project.categoria.toLowerCase() === "practicas") {
                containerPracticas.appendChild(card);
            }
        });

        // Iniciar el observador después de cargar las tarjetas
        iniciarObservador();
    })
    .catch(error => console.error("Error cargando proyectos: ", error));

function iniciarObservador() {
    const sections = document.querySelectorAll('h2[id], section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    const cards = document.querySelectorAll('.fade-in-card');

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -15% 0px', 
        threshold: 0.05 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Lógica para resaltar el menú activo
            if (entry.isIntersecting && !entry.target.classList.contains('fade-in-card')) {
                navLinks.forEach(link => link.classList.remove('nav-link-active'));
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('nav-link-active');
            }

            // Lógica para el efecto de entrada/salida de las tarjetas
            if (entry.target.classList.contains('fade-in-card')) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    cards.forEach(card => observer.observe(card));
}
