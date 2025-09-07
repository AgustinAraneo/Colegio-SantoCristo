// Configuración de administración
export const ADMIN_CONFIG = {
  // Código de acceso para la gestión de contenido

  // Mensaje que se muestra en la pantalla de login
  LOGIN_MESSAGE: "Ingresa el código de acceso para gestionar el contenido",

  // Título de la pantalla de login
  LOGIN_TITLE: "Acceso Administrativo",

  // Nota informativa
  LOGIN_NOTE: "Esta área es solo para administradores del sitio web.",
};

// Función para verificar el código de acceso
export const verifyAccessCode = (code) => {
  return code === ADMIN_CONFIG.ACCESS_CODE;
};
