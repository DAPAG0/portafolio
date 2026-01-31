console.log("Portfolio cargado correctamente");

fetch("assets/data/projects.json")
    .then(response => response.json())
    .then(data => {
        const containerHtml = document.getElementById("container-html");
        const containerPracticas = document.getElementById("container-practicas");

        //Crear tarjeta
        data.forEach(project => {
            const card = document.createElement("div");
            card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");

            card.innerHTML = `
                <div class="card h-100 shadow">
                    <img src="assets/img/projects/${project.imagen}" class="card-img-top img-proyecto" alt="${project.titulo}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${project.titulo}</h5>
                        <p class="card-text">${project.descripcion}</p>
                        <p class="card-text">Fecha: ${project.fecha}</p>
                        <p class="card-text">Estado: ${project.estado}.</p>
                        <p class="card-text">Tecnologias: ${project.tecnologia}.</p>
                        <a href="${project.enlace}" target="_blank" class="btn btn-primary">Mostrar</a>
                    </div>
                </div>
            `;

            //Filtros
            if (project.categoria.toLowerCase() == "html") {
                containerHtml.appendChild(card);
            }
            else if (project.categoria.toLowerCase() == "practicas") {
                containerPracticas.appendChild(card);
            }
        });
    })
    .catch(error => console.error("Error cargando proyectos: ", error));
