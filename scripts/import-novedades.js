const fs = require("fs");
const path = require("path");

// Función para generar link (igual que en manage-content.jsx)
function generateLink(titulo) {
  return titulo
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "")
    .substring(0, 20);
}

// Mapeo de categorías
const categoriaMap = {
  inicial: "Inicial",
  primario: "Primario",
  secundario: "Secundario",
  ingles: "Ingles",
  parroquial: "Pastoral",
};

// Función para leer y parsear texto.txt
function parseTextFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  let titulo = "";
  let descripcion = "";
  let inDescripcion = false;

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith("TITULO:")) {
      titulo = line.replace("TITULO:", "").trim();
      // Remover comillas si las tiene
      titulo = titulo.replace(/^["']|["']$/g, "");
    } else if (line.startsWith("DESCRIPCION:")) {
      descripcion = line.replace("DESCRIPCION:", "").trim();
      inDescripcion = true;
    } else if (inDescripcion && line) {
      descripcion += " " + line;
    }
  }

  return { titulo: titulo.trim(), descripcion: descripcion.trim() };
}

// Función para encontrar todas las imágenes numeradas
function findImages(dirPath) {
  const files = fs.readdirSync(dirPath);
  const images = [];

  for (let file of files) {
    if (file.match(/^\d+\.(jpeg|jpg|png)$/i)) {
      images.push(file);
    }
  }

  // Ordenar numéricamente
  images.sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)/)[1]);
    const numB = parseInt(b.match(/^(\d+)/)[1]);
    return numA - numB;
  });

  return images;
}

// Función principal
function importNovedades(carpetaNombre) {
  const baseDir = path.join("public", "images", carpetaNombre);
  const novedades = [];

  if (!fs.existsSync(baseDir)) {
    console.error(`❌ Error: La carpeta "${baseDir}" no existe.`);
    process.exit(1);
  }

  console.log(`📁 Procesando carpeta: ${baseDir}\n`);

  // Procesar cada categoría
  const categorias = [
    "inicial",
    "primario",
    "secundario",
    "ingles",
    "parroquial",
  ];

  for (let categoria of categorias) {
    const categoriaDir = path.join(baseDir, categoria);
    if (!fs.existsSync(categoriaDir)) {
      console.log(`⚠️  Categoría "${categoria}" no encontrada, saltando...`);
      continue;
    }

    const subcarpetas = fs
      .readdirSync(categoriaDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (let subcarpeta of subcarpetas) {
      const subcarpetaPath = path.join(categoriaDir, subcarpeta);
      const textoPath = path.join(subcarpetaPath, "texto.txt");

      if (!fs.existsSync(textoPath)) {
        console.log(`⚠️  No se encontró texto.txt en: ${subcarpetaPath}`);
        continue;
      }

      const { titulo, descripcion } = parseTextFile(textoPath);
      const images = findImages(subcarpetaPath);

      if (images.length === 0) {
        console.log(`⚠️  No se encontraron imágenes en: ${subcarpetaPath}`);
        continue;
      }

      // Construir rutas de imágenes (usando forward slashes para web)
      const imageBasePath = `/images/${carpetaNombre}/${categoria}/${subcarpeta}`;
      const primeraImagen = `${imageBasePath}/${images[0]}`;

      // Crear array de media
      const media = images.map((img) => ({
        type: "image",
        src: `${imageBasePath}/${img}`,
      }));

      const novedad = {
        titulo: titulo,
        descripcion: descripcion,
        categoria: categoriaMap[categoria],
        fecha: "2025",
        imagen: primeraImagen,
        link: generateLink(titulo),
        contenido: {
          media: media,
          text: descripcion,
        },
      };

      novedades.push(novedad);
      console.log(`✅ Procesada: ${titulo}`);
    }
  }

  return novedades;
}

// Función para formatear como código JavaScript
function formatAsJavaScript(novedades) {
  let code = "";
  novedades.forEach((novedad, index) => {
    code += "  {\n";
    code += `    titulo: ${JSON.stringify(novedad.titulo)},\n`;
    code += `    descripcion: ${JSON.stringify(novedad.descripcion)},\n`;
    code += `    categoria: ${JSON.stringify(novedad.categoria)},\n`;
    code += `    fecha: ${JSON.stringify(novedad.fecha)},\n`;
    code += `    imagen: ${JSON.stringify(novedad.imagen)},\n`;
    code += `    link: ${JSON.stringify(novedad.link)},\n`;
    code += "    contenido: {\n";
    code += "      media: [\n";
    novedad.contenido.media.forEach((item) => {
      code += "        {\n";
      code += `          type: ${JSON.stringify(item.type)},\n`;
      code += `          src: ${JSON.stringify(item.src)},\n`;
      code += "        },\n";
    });
    code += "      ],\n";
    code += `      text: ${JSON.stringify(novedad.contenido.text)},\n`;
    code += "    },\n";
    code += "  }";
    if (index < novedades.length - 1) {
      code += ",";
    }
    code += "\n";
  });
  return code;
}

// Función para agregar al archivo
function addToFile(novedades, carpetaNombre) {
  const filePath = path.join("src", "data", "novedades-data.js");
  const content = fs.readFileSync(filePath, "utf-8");

  // Encontrar la línea después de "export const novedadesData = ["
  const lines = content.split("\n");
  const insertIndex = lines.findIndex((line) =>
    line.includes("export const novedadesData = [")
  );

  if (insertIndex === -1) {
    console.error("❌ No se encontró la declaración del array en el archivo.");
    return false;
  }

  // Generar el código de las novedades (con coma al final para la siguiente novedad)
  const novedadesCode = formatAsJavaScript(novedades);
  const novedadesCodeWithComma = novedadesCode.trimEnd() + ",\n";

  // Insertar después de la línea del array
  lines.splice(insertIndex + 1, 0, novedadesCodeWithComma);

  // Escribir el archivo
  fs.writeFileSync(filePath, lines.join("\n"), "utf-8");
  return true;
}

// Main
const carpetaNombre = process.argv[2];

if (!carpetaNombre) {
  console.log("📝 Script para importar novedades desde una carpeta");
  console.log("\nUso:");
  console.log("  node scripts/import-novedades.js <nombre-carpeta> [--add]");
  console.log("\nEjemplos:");
  console.log("  node scripts/import-novedades.js 2025-12");
  console.log("  node scripts/import-novedades.js 2025-12 --add");
  console.log("\nOpciones:");
  console.log(
    "  --add    Agrega las novedades directamente al archivo novedades-data.js"
  );
  console.log("           (sin --add solo muestra el resultado en consola)");
  process.exit(1);
}

const shouldAdd = process.argv.includes("--add");

try {
  const novedades = importNovedades(carpetaNombre);

  if (novedades.length === 0) {
    console.log("\n⚠️  No se encontraron novedades para procesar.");
    process.exit(0);
  }

  console.log(`\n✅ Total de novedades procesadas: ${novedades.length}\n`);

  if (shouldAdd) {
    console.log("📝 Agregando novedades al archivo novedades-data.js...");
    if (addToFile(novedades, carpetaNombre)) {
      console.log("✅ Novedades agregadas exitosamente al archivo!");
    } else {
      console.log("❌ Error al agregar las novedades al archivo.");
      process.exit(1);
    }
  } else {
    console.log("📋 Código JavaScript generado:\n");
    console.log("=".repeat(60));
    const code = formatAsJavaScript(novedades);
    console.log(code);
    console.log("=".repeat(60));
    console.log("\n💡 Tip: Usa --add para agregar directamente al archivo");
  }
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
