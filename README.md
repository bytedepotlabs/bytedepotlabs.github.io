# ByteDepot Labs

Este repositorio contiene el sitio web estático de ByteDepot Labs.

## ¿Qué hay aquí?

- `index.html`: la página principal.
- `src/input.css`: el archivo de Tailwind CSS de entrada.
- `dist/output.css`: el CSS compilado que usa el sitio.
- `build.js`: script para generar el CSS con PostCSS y Tailwind.
- `tailwind.config.js`: configuración de Tailwind.
- `postcss.config.js`: configuración de PostCSS.
- `package.json`: dependencias y comandos de npm.

## Cómo usarlo

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Genera el CSS de Tailwind:

   ```bash
   npm run build
   ```

3. Abre `index.html` en el navegador.

## Si vas a editar estilos

- Cambia `src/input.css` si quieres agregar reglas de Tailwind.
- Si quieres ver los cambios en vivo, usa:

  ```bash
  npm run watch
  ```

## Por qué está así

Antes se usaba `cdn.tailwindcss.com`, pero para producción es mejor compilar el CSS y usar un archivo local.

Así el sitio carga más estable y no depende de un CDN para Tailwind.
