# CNC — SINUMERIK 808D | DATAN ME500

Manual interactivo de aprendizaje y prácticas para una fresadora CNC DATAN ME500 con SINUMERIK 808D Milling.

## Contenido
- Conociendo la máquina
- Control SINUMERIK 808D
- Puesta en marcha
- Coordenadas
- Herramientas
- Programación CNC
- Ejecución y simulación
- Seguridad
- Diagnóstico
- 3 prácticas interactivas progresivas

## Abrir en VS Code
Puedes usar el servidor Python incluido:

```bash
python app.py
```

Luego abre `http://127.0.0.1:8000`.

## Publicar en GitHub Pages
Este proyecto es estático: GitHub Pages usa `index.html`, `css/`, `js/` e `img/`. No necesitas ejecutar `app.py` en GitHub Pages.

1. Crea un repositorio público.
2. Sube **el contenido de esta carpeta**, de modo que `index.html` quede en la raíz del repositorio.
3. Ve a Settings → Pages.
4. En Build and deployment selecciona `Deploy from a branch`.
5. Branch: `main`; Folder: `/ (root)`.
6. Guarda y espera a que GitHub publique el sitio.

### Muy importante
No subas solamente el archivo `.zip` y no dejes `index.html` dentro de otra carpeta. La estructura del repositorio debe empezar así:

```text
index.html
css/
js/
img/
app.py
README.md
.nojekyll
```
