# 🌀 Desafío Web: Fibonacci en Sistemas de Riego Eficiente

Este proyecto ha sido desarrollado como parte de la evaluación práctica del **Desafío Web**, enfocado en la aplicación de patrones matemáticos para la resolución de problemas del mundo real mediante tecnologías web estándar.

---

## 📝 Información del Estudiante
* **Nombre del Estudiante:** David Angel Mamani Aspi
* **Materia:** Programacion Web I
* **Título del Proyecto:** Matemáticas que resuelven problemas: Fibonacci en la Automatización de Riego Eficiente
* **Fecha:** Mayo de 2026

---

## 🎯 Descripción de la Solución Real
En la agricultura moderna y la ecología, optimizar el uso del agua es un reto crítico ante la escasez hídrica mundial. Esta página web interactiva simula un **Distribuidor de Agua Automatizado** para terrenos divididos en sectores de cultivo concéntricos o secuenciales. 

En lugar de distribuir el agua de forma lineal o uniforme (lo que causaría desperdicio en algunas zonas e insuficiencia en otras), la aplicación emplea la **Sucesión de Fibonacci** ($1, 1, 2, 3, 5, 8, \dots$) para calcular proporciones naturales de distribución. De esta manera, las zonas con requerimientos iniciales más fuertes reciben el flujo hidráulico optimizado y escalonado de forma exacta sin exceder la capacidad total del tanque ingresado por el usuario.

---

## 💻 Características del Proyecto
El desarrollo se realizó cumpliendo rigurosamente todas las directrices de la guía de evaluación:
* **Lógica en JavaScript Limpio:** Cálculo exacto de la serie de Fibonacci mediante bucles iterativos optimizados (evitando el uso innecesario de vectores pesados en memoria).
* **Manipulación del DOM:** Captura de datos de formularios y renderizado de tablas dinámicas de resultados en pantalla utilizando exclusivamente `document.getElementById()`.
* **Diseño Visual y Responsivo:** Estructura CSS semántica y moderna adaptable a dispositivos móviles, tablets y computadoras de escritorio.
* **Funcionalidad Extra (UX Premium):** Implementación de un conmutador dinámico de **Modo Oscuro / Modo Claro** mediante la manipulación de clases nativas en JavaScript para mejorar la accesibilidad del usuario.
* **Tipografía Estilizada:** Integración de Google Fonts (`Montserrat` para encabezados con presencia institucional y `Open Sans` para máxima legibilidad).

---

## 📂 Estructura del Repositorio
Siguiendo los lineamientos de orden exigidos en la Sección 9 del proyecto, los archivos se organizan de la siguiente manera:

```text
desafio-fibonacci-primos/
│
├── index.html          # Estructura semántica, formularios y secciones del proyecto
├── README.md           # Documentación general del proyecto (este archivo)
│
├── css/
│   └── estilos.css     # Estilos visuales, diseño responsivo y Modo Oscuro
│
└── js/
    └── script.js       # Lógica matemática de Fibonacci y control dinámico del DOM
