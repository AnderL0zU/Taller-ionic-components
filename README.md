# Guía de Proyecto: Introducción a Ionic y Angular (Sesión 3.1)
**Asignatura:** Programación de Dispositivos Móviles  
**Unidad 3:** Desarrollo Móvil Multiplataforma (Ionic + Angular)  

---

## 🎯 Descripción del Proyecto
Este proyecto didáctico contiene la implementación completa para la sesión práctica de **4 Horas Presenciales** y la resolución de referencia para el **Reto de Trabajo Independiente (3.5 Horas)**.

### Estructura del Código:
- **`src/app/home/`**: Pantalla inicial demostrativa con tipado estático en TypeScript, enlace de datos por interpolación (`{{ }}`) y enlace de eventos (`(click)`).
- **`src/app/tabs/`**: Implementación de navegación por pestañas (*Tabs*) con:
  - **Tab 1 (Inicio):** Bienvenida dinámica y datos de curso en TypeScript.
  - **Tab 2 (Contador):** Contador interactivo con botones de aumento, disminución y validación.
  - **Tab 3 (Perfil):** Tarjeta de presentación con avatar, datos de contacto y botón interactivo para alternar estado entre **"Disponible"** y **"Ocupado"**.

---

## 🚀 Requisitos e Instalación

### 1. Verificar Entorno
Asegúrate de contar con Node.js y el Ionic CLI instalados:
```bash
node -v      # Recomendado: v18.x o v20.x
npm -v       # Recomendado: v9.x o superior
ionic --version
```

Si no tienes Ionic CLI instalado globalmente:
```bash
npm install -g @ionic/cli
```

### 2. Instalar Dependencias del Proyecto
En la raíz de este proyecto ejecuta:
```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo
Inicia el servidor local con recarga en tiempo real (*Hot Reload*):
```bash
ionic serve
```
La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8100/`.

---

## 🛠️ Herramientas de Inspección Móvil
1. Presiona `F12` o `Ctrl + Shift + I` en Google Chrome o Microsoft Edge.
2. Haz clic en el icono **Toggle Device Toolbar** (`Ctrl + Shift + M`).
3. Selecciona un dispositivo de prueba (por ejemplo *iPhone 14 Pro* o *Pixel 7*) para simular la visualización móvil exacta.

---

## 👨‍💻 Estructura de Archivos Pedagógica
```text
src/app/
├── app.routes.ts         -> Gestor central de rutas de la aplicación
├── home/
│   ├── home.page.html    -> Maquetación con componentes de Ionic (ion-card, ion-button)
│   ├── home.page.scss    -> Estilos visuales del componente
│   └── home.page.ts      -> Variables de clase tipadas y métodos de interacción
└── tabs/
    ├── tab1/             -> Vista de Inicio y bienvenida
    ├── tab2/             -> Vista de Contador interactivo
    └── tab3/             -> Vista de Perfil con conmutador de estado
```
