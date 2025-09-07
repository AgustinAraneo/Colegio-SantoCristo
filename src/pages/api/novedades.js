import { novedadesData } from "../../data/novedades-data";

// Simulamos una base de datos en memoria para desarrollo
// En producción, esto debería conectarse a una base de datos real
let novedades = [...novedadesData];

export default function handler(req, res) {
  // Configurar CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "GET") {
    // Devolver todas las novedades
    res.status(200).json(novedades);
  } else if (req.method === "POST") {
    // Crear nueva novedad
    try {
      const nuevaNovedad = req.body;

      // Validar datos requeridos
      if (
        !nuevaNovedad.titulo ||
        !nuevaNovedad.descripcion ||
        !nuevaNovedad.categoria
      ) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
      }

      // Generar link si no se proporciona
      if (!nuevaNovedad.link) {
        nuevaNovedad.link = nuevaNovedad.titulo
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "")
          .substring(0, 20);
      }

      // Agregar la nueva novedad al inicio
      novedades.unshift(nuevaNovedad);

      res.status(201).json({
        message: "Novedad creada exitosamente",
        novedad: nuevaNovedad,
      });
    } catch (error) {
      console.error("Error al crear novedad:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  } else if (req.method === "PUT") {
    // Actualizar novedad existente
    try {
      const { index, novedad } = req.body;

      if (index === undefined || !novedad) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
      }

      // Validar que el índice existe
      if (index < 0 || index >= novedades.length) {
        return res.status(400).json({ error: "Índice de novedad inválido" });
      }

      // Actualizar la novedad
      novedades[index] = novedad;

      res
        .status(200)
        .json({ message: "Novedad actualizada exitosamente", novedad });
    } catch (error) {
      console.error("Error al actualizar novedad:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  } else if (req.method === "DELETE") {
    // Eliminar novedad
    try {
      const { index } = req.body;

      if (index === undefined) {
        return res.status(400).json({ error: "Falta el índice de la novedad" });
      }

      // Validar que el índice existe
      if (index < 0 || index >= novedades.length) {
        return res.status(400).json({ error: "Índice de novedad inválido" });
      }

      // Eliminar la novedad
      const novedadEliminada = novedades.splice(index, 1)[0];

      res.status(200).json({
        message: "Novedad eliminada exitosamente",
        novedad: novedadEliminada,
      });
    } catch (error) {
      console.error("Error al eliminar novedad:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    res.status(405).json({ error: "Método no permitido" });
  }
}
