// API de autenticación - Código seguro en el servidor
const ADMIN_CODE = "santocristo2025"; // Solo visible en el servidor

export default function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.body;

    if (code === ADMIN_CODE) {
      // Generar un token simple (en producción usar JWT)
      const token = Buffer.from(`${Date.now()}-${Math.random()}`).toString(
        "base64"
      );

      res.status(200).json({
        success: true,
        token,
        message: "Acceso autorizado",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Código de acceso incorrecto",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Método no permitido" });
  }
}
