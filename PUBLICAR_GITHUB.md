# Publicar este manual en GitHub Pages

## 1. Crear repositorio
- En GitHub selecciona **New repository**.
- Nombre sugerido: `CNC-DATAN-ME500`.
- Selecciona **Public**.

## 2. Subir los archivos
En el repositorio selecciona **Add file → Upload files** y arrastra **todo el contenido de esta carpeta**.

Debe quedar así en GitHub:

```text
CNC-DATAN-ME500/
├── index.html
├── .nojekyll
├── css/
├── js/
├── img/
├── README.md
└── app.py
```

No debe quedar así:

```text
CNC-DATAN-ME500/
└── CNC_DATAN_ME500_manual/
    └── index.html
```

Tampoco debes subir únicamente el ZIP.

## 3. Activar Pages
Ve a **Settings → Pages**.

En **Build and deployment**:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

Pulsa **Save**.

## 4. Abrir el sitio
GitHub mostrará la dirección de tu sitio en la sección Pages. Normalmente tiene esta forma:

`https://TU-USUARIO.github.io/CNC-DATAN-ME500/`

## 5. Si las imágenes no aparecen
Comprueba que exista, por ejemplo:

`img/maquina.jpg`

y que el HTML diga exactamente:

`src="img/maquina.jpg"`

Las rutas son relativas y distinguen mayúsculas/minúsculas.
