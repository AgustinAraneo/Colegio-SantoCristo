// Función para exportar las novedades a un archivo JSON
export const exportNovedadesToFile = (novedades) => {
  try {
    const dataStr = JSON.stringify(novedades, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "novedades-backup.json";
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error al exportar novedades:", error);
  }
};

// Función para generar el código del archivo novedades-data.js
export const generateNovedadesDataFile = (novedades) => {
  const fileContent = `export const novedadesData = ${JSON.stringify(
    novedades,
    null,
    2
  )};\n`;
  return fileContent;
};

// Función para copiar al portapapeles
export const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Código copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar:", err);
      });
  } else {
    // Fallback para navegadores más antiguos
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Código copiado al portapapeles");
  }
};
