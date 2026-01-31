===========================================================
      PORTAFOLIO - DAVID PARRADO GÓMEZ
===========================================================

Bienvenido a mi portafolio. Este proyecto es un escaparate 
de mi trayectoria técnica en los grados de SMR (Sistemas 
Microinformáticos y Redes) y DAW (Desarrollo de Aplicaciones Web).

-----------------------------------------------------------
1. TECNOLOGÍAS UTILIZADAS
-----------------------------------------------------------
* HTML5 y CSS3: Estructura y estilos personalizados.
* Bootstrap 5: Diseño responsive y componentes de interfaz.
* JavaScript: Lógica para carga dinámica de datos.
* JSON: Gestión de información de proyectos de forma externa.

-----------------------------------------------------------
2. ESTRUCTURA DEL PROYECTO
-----------------------------------------------------------
Para mantener el código limpio y profesional, el proyecto 
se organiza de la siguiente manera:

/ (Raíz)
├── index.html          <- Página principal
├── assets/             <- Recursos del sitio
│   ├── css/            <- Estilos (Bootstrap + custom)
│   ├── js/             <- Lógica (main.js)
│   ├── img/            <- Imágenes de los proyectos
│   └── data/           <- Archivo JSON con los datos
└── README.txt          <- Documentación del proyecto

-----------------------------------------------------------
3. FUNCIONAMIENTO TÉCNICO
-----------------------------------------------------------
El sitio utiliza la Fetch API de JavaScript para leer el 
archivo 'assets/data/projects.json'. Esto permite:
- Añadir proyectos nuevos sin modificar el HTML.
- Centralizar la información en un solo lugar.
- Generar las tarjetas de proyectos automáticamente al cargar.

-----------------------------------------------------------
4. CÓMO EJECUTAR EL PROYECTO
-----------------------------------------------------------
Debido a que el navegador bloquea la lectura de archivos 
locales (JSON) por seguridad, se recomienda:
1. Abrir la carpeta con Visual Studio Code.
2. Usar la extensión "Live Server".
3. Hacer clic derecho en index.html -> "Open with Live Server".

-----------------------------------------------------------
5. CONTACTO
-----------------------------------------------------------
* GitHub: https://github.com/DAPAG0
* LinkedIn: https://www.linkedin.com/in/parradogomezdavid/

===========================================================