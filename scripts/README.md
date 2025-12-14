# Scripts de Utilidad

## import-novedades.js

Script para importar novedades desde una carpeta estructurada en `public/images/`.

### Estructura esperada

```
public/images/<nombre-carpeta>/
  ├── inicial/
  │   └── <subcarpeta>/
  │       ├── 1.jpeg
  │       ├── 2.jpeg
  │       └── texto.txt
  ├── primario/
  ├── secundario/
  ├── ingles/
  └── parroquial/
```

Cada subcarpeta debe contener:

- Imágenes numeradas: `1.jpeg`, `2.jpeg`, `3.jpeg`, etc.
- Un archivo `texto.txt` con el formato:

  ```
  TITULO: "Título de la novedad"

  DESCRIPCION: Descripción completa de la novedad...
  ```

### Uso

#### Ver el resultado en consola (sin modificar el archivo):

```bash
node scripts/import-novedades.js <nombre-carpeta>
```

#### Agregar directamente al archivo novedades-data.js:

```bash
node scripts/import-novedades.js <nombre-carpeta> --add
```

### Ejemplos

```bash
# Ver novedades de la carpeta 2025-12
node scripts/import-novedades.js 2025-12

# Agregar novedades de la carpeta 2025-12 al archivo
node scripts/import-novedades.js 2025-12 --add

# Usando npm script
npm run import-novedades 2025-12
npm run import-novedades 2025-12 -- --add
```

### Notas

- El script procesa automáticamente todas las subcarpetas dentro de cada categoría
- Las imágenes se ordenan numéricamente (1, 2, 3...)
- Los links se generan automáticamente desde el título
- La categoría "parroquial" se mapea a "Pastoral" en el archivo final
- Las novedades se agregan al **inicio** del array (más recientes primero)
