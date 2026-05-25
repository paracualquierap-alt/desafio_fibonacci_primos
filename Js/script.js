// definamos una funcion
function calcularRiego() {
    // capturar los datos del formulario usando getElementById
    let litrosTotales = parseFloat(document.getElementById("litros").value);
    let cantidadZonas = parseInt(document.getElementById("zonas").value);
    let areaResultado = document.getElementById("resultado");

    // validar que los datos ingresados sean correctos
    // aqui se evalua si los datos son numeros o no
    if (isNaN(litrosTotales) || litrosTotales <= 0 || isNaN(cantidadZonas) || cantidadZonas <= 0) {
        areaResultado.innerHTML = "<p style='color: red;'>Por favor, ingresa valores válidos y mayores a cero.</p>";
        return;
    }

    // calcular la suma total de los términos de Fibonacci que usaremos
    // esto es necesario para saber en cuántas "partes" dividiremos el agua total
    let a = 0;
    let b = 1;
    let c;
    let sumaFibonacci = 0;

    for (let i = 1; i <= cantidadZonas; i++) {
        sumaFibonacci += b; // vamos sumando los términos: 1 + 1 + 2 + 3...
        c = a + b;
        a = b;
        b = c;
    }

    // calcular el valor de "1 unidad de Fibonacci" en litros
    // ej. agua total 100 / 4 = 25, haciendo que cada unida de fibonacci valga 25 litros
    let valorPorUnidad = litrosTotales / sumaFibonacci;

    // reiniciar las variables de Fibonacci para generar el reporte sector por sector
    a = 0;
    b = 1;
    
    // empezamos a construir el HTML que mostraremos en la página
    // se empieza a crear HTML como texto
    let tablaHTML = "<h3>Reporte de Distribución de Agua</h3>";
    tablaHTML += "<table border='1' style='width:100%; border-collapse: collapse; text-align: left;'>";
    tablaHTML += "<tr><th>Sector de Riego</th><th>Proporción (Fibonacci)</th><th>Agua Asignada (Litros)</th></tr>";
    // tablaHTML += seria como "agrega mas contenido"

    // calcular litros por zona
    // ej. fibonacci = 3 y cada unidad = 25
    // 3 * 25 = 75 litros
    for (let i = 1; i <= cantidadZonas; i++) {
        let litrosZona = b * valorPorUnidad; // multiplicamos el término Fibonacci por el valor de cada unidad
        
        // se agregara la fila correspondiente a la tabla (.toFixed(2) para usar solo 2 decimales)
        tablaHTML += "<tr>";
        tablaHTML += "  <td>Sector " + i + "</td>";
        tablaHTML += "  <td>" + b + "</td>";
        tablaHTML += "  <td>" + litrosZona.toFixed(2) + " Ltrs.</td>";
        tablaHTML += "</tr>";

        // avanzar al siguiente número de Fibonacci
        c = a + b;
        a = b;
        b = c;
    }

    tablaHTML += "</table>";  
    
    // se muestra un pequeño texto que indica los datos obtenido y luego se muestra el resultado en la pagina web
    tablaHTML += "<p style='margin-top: 15px;'><strong>Conclusión:</strong> El agua se distribuyó de forma óptima en " + cantidadZonas + " sectores. Al seguir la serie de Fibonacci, garantizamos que las zonas con mayor requerimiento reciban agua proporcionalmente sin exceder el límite de " + litrosTotales + " litros totales disponibles.</p>";

    areaResultado.innerHTML = tablaHTML;
}

// función para alternar entre Modo Claro y Modo Oscuro
function alternarModoOscuro() {
    // seleccionar el cuerpo (body) de la página
    let cuerpo = document.body;
    let boton = document.getElementById("darkToggleBtn");

    // alternar la clase .dark-mode en el body
    // .toggle() agrega la clase si no existe, o la quita si ya existe
    cuerpo.classList.toggle("dark-mode");

    // cambiar el texto e ícono del botón según el modo activo
    if (cuerpo.classList.contains("dark-mode")) {
        boton.innerHTML = "☀️ Modo Claro";
    } else {
        boton.innerHTML = "🌙 Modo Oscuro";
    }
}
