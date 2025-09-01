// scripts.js

// Espera a que el DOM esté cargado antes de ejecutar
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio cargado correctamente.");

    // Ejemplo: botón para volver arriba
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑";
    backToTop.id = "backToTop";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.display = "none";
    backToTop.style.padding = "10px";
    backToTop.style.borderRadius = "50%";
    backToTop.style.border = "none";
    backToTop.style.background = "#007bff";
    backToTop.style.color = "#fff";
    backToTop.style.cursor = "pointer";
    document.body.appendChild(backToTop);

    // Mostrar botón cuando se hace scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Acción del botón
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 📊 Ejemplo de espacio para Chart.js
    // Si decides integrar Chart.js, descomenta y agrega tu configuración
    /*
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Python', 'SQL', 'R', 'Tableau'],
            datasets: [{
                label: 'Nivel de dominio',
                data: [90, 80, 70, 60],
                backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2']
            }]
        }
    });
    */
});
