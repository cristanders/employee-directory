# Directorio de Empleados (Employee Directory)
Actividad 1 del Bimestre 4 de Taller - Fundación Kinal

## 1. Descripción Breve del Proyecto
Este proyecto consiste en una aplicación desarrollada en Angular orientada a la gestión de un directorio de empleados. La documentación describe el proceso de creación, la arquitectura de carpetas, la integración de componentes iniciales y la planificación de la estructura para futuras conexiones con un backend.

---

## Instalación y Ejecución

1. Clona el repositorio e instala las dependencias utilizando **pnpm**:
**pnpm install**

## 2. Creación Correcta del Proyecto con Angular CLI
El proyecto se generó desde la terminal utilizando las herramientas oficiales de Angular CLI de forma limpia y sin errores de compilación.
* Para iniciar el servidor de desarrollo local, ejecuta:
**ng serve**

Una vez iniciado el servidor, abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente al modificar los archivos fuente.

 ## 3. Estructura del Proyecto
La arquitectura de directorios del proyecto se compone de los siguientes elementos clave:

src/: Directorio raíz que contiene todo el código fuente de la aplicación.

app/: Contiene la lógica central, módulos y componentes principales del sistema.

assets/: Carpeta destinada a recursos estáticos como imágenes, iconos o archivos multimedia.

environments/: Archivos de configuración para gestionar variables de entorno según el entorno de ejecución.

AppModule: Módulo principal que declara los componentes y gestiona las dependencias del sistema.

AppComponent: Componente raíz que sirve como contenedor principal de la interfaz visual.

EMPLOYEE-DIRECTORY/
├── .angular/
├── .vscode/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── employee-grid/
│   │   │   └── profile/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── .editorconfig
├── .gitignore
├── .prettierrc
└── angular.json

## 4. Generación e Integración de Componentes Iniciales
Los componentes iniciales fueron creados mediante la interfaz de comandos y se encuentran correctamente enlazados:
Generación de componentes mediante comando:

ng generate component component-name

Cada componente creado se encuentra integrado dentro del módulo principal y se visualiza correctamente en la interfaz de la aplicación.

## 5. Preparación para la Conexión con el Backend
El proyecto cuenta con una organización básica orientada a la escalabilidad:

Se ha planificado la creación de una carpeta de servicios (services/) para centralizar la lógica de peticiones HTTP.

Se estructuraron los puntos de conexión base utilizando los archivos de entornos (environments), facilitando la integración asíncrona con una API backend (Node.js u otro entorno).

## 6. Componentes Principales
La interfaz gráfica se encuentra fragmentada en los siguientes módulos lógicos:

dashboard: Panel de control general que resume las métricas y accesos rápidos de la aplicación.

employee-grid: Componente encargado de renderizar de forma tabular o en rejilla el listado de registros de empleados.

profile: Componente dedicado a la visualización y gestión de la información detallada del personal.

 ## Comandos Útiles Adicionales
Construcción (Building)
Para compilar el proyecto y generar los artefactos de producción en el directorio dist/:
ng build
Pruebas (Testing)
Para ejecutar pruebas unitarias con el capturador de pruebas configurado:
ng test
