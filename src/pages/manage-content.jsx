import React, { useState, useEffect } from "react";
import HeaderContainer from "../components/HeaderContainer";
import FooterContainer from "../components/FooterContainer";
import {
  exportNovedadesToFile,
  generateNovedadesDataFile,
  copyToClipboard,
} from "../utils/exportNovedades";

const ManageContent = () => {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNovedad, setEditingNovedad] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "Primario",
    fecha: new Date().getFullYear().toString(),
    imagen: "",
    link: "",
    contenido: {
      media: [],
      text: "",
    },
  });

  const categorias = [
    "Inicial",
    "Primario",
    "Secundario",
    "Pastoral",
    "Ingles",
  ];

  // Cargar novedades al montar el componente
  useEffect(() => {
    fetchNovedades();
  }, []);

  const fetchNovedades = async () => {
    try {
      const response = await fetch("/api/novedades");
      const data = await response.json();
      setNovedades(data);
    } catch (error) {
      console.error("Error al cargar novedades:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMediaChange = (index, field, value) => {
    const newMedia = [...formData.contenido.media];
    newMedia[index] = { ...newMedia[index], [field]: value };
    setFormData((prev) => ({
      ...prev,
      contenido: { ...prev.contenido, media: newMedia },
    }));
  };

  const addMediaItem = () => {
    setFormData((prev) => ({
      ...prev,
      contenido: {
        ...prev.contenido,
        media: [...prev.contenido.media, { type: "image", src: "" }],
      },
    }));
  };

  const removeMediaItem = (index) => {
    const newMedia = formData.contenido.media.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      contenido: { ...prev.contenido, media: newMedia },
    }));
  };

  const generateLink = (titulo) => {
    return titulo
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "")
      .substring(0, 20);
  };

  // Función para normalizar rutas de imágenes
  const normalizeImagePath = (path) => {
    if (!path) return "";
    return path.startsWith("/") ? path : `/${path}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const link = formData.link || generateLink(formData.titulo);

    // Normalizar rutas de imágenes
    const normalizedMedia = formData.contenido.media.map((item) => ({
      ...item,
      src: normalizeImagePath(item.src),
    }));

    const nuevaNovedad = {
      ...formData,
      link,
      imagen: normalizeImagePath(
        formData.contenido.media[0]?.src || formData.imagen
      ),
      contenido: {
        ...formData.contenido,
        media: normalizedMedia,
      },
    };

    try {
      if (editingNovedad !== null) {
        // Editar novedad existente
        const response = await fetch("/api/novedades", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            index: editingNovedad,
            novedad: nuevaNovedad,
          }),
        });

        if (response.ok) {
          await fetchNovedades(); // Recargar novedades
        } else {
          alert("Error al actualizar la novedad");
        }
      } else {
        // Crear nueva novedad
        const response = await fetch("/api/novedades", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaNovedad),
        });

        if (response.ok) {
          await fetchNovedades(); // Recargar novedades
        } else {
          alert("Error al crear la novedad");
        }
      }

      // Resetear formulario
      setFormData({
        titulo: "",
        descripcion: "",
        categoria: "Primario",
        fecha: new Date().getFullYear().toString(),
        imagen: "",
        link: "",
        contenido: {
          media: [],
          text: "",
        },
      });
      setShowForm(false);
      setEditingNovedad(null);
    } catch (error) {
      console.error("Error al guardar novedad:", error);
      alert("Error al guardar la novedad");
    }
  };

  const handleEdit = (index) => {
    const novedad = novedades[index];
    setFormData({
      titulo: novedad.titulo,
      descripcion: novedad.descripcion,
      categoria: novedad.categoria,
      fecha: novedad.fecha,
      imagen: novedad.imagen,
      link: novedad.link,
      contenido: novedad.contenido || { media: [], text: "" },
    });
    setEditingNovedad(index);
    setShowForm(true);
  };

  const handleDelete = async (index) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta novedad?")) {
      try {
        const response = await fetch("/api/novedades", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ index }),
        });

        if (response.ok) {
          await fetchNovedades(); // Recargar novedades
        } else {
          alert("Error al eliminar la novedad");
        }
      } catch (error) {
        console.error("Error al eliminar novedad:", error);
        alert("Error al eliminar la novedad");
      }
    }
  };

  const exportData = () => {
    exportNovedadesToFile(novedades);
  };

  const exportAsCode = () => {
    const code = generateNovedadesDataFile(novedades);
    copyToClipboard(code);
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <HeaderContainer />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#024430]">
                Gestión de Contenido
              </h1>
              <p className="text-gray-600 mt-2">
                Crea y gestiona las novedades del colegio. Los cambios se
                guardan en memoria durante la sesión.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={exportData}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Exportar JSON
              </button>
              <button
                onClick={exportAsCode}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Copiar Código
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#84A17D] text-white px-4 py-2 rounded-lg hover:bg-[#6B8A64] transition"
              >
                Nueva Novedad
              </button>
            </div>
          </div>

          {/* Lista de novedades */}
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Cargando novedades...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {novedades.map((novedad, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="bg-[#84A17D] text-white px-2 py-1 rounded text-sm">
                          {novedad.categoria}
                        </span>
                        <span className="text-gray-600">{novedad.fecha}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {novedad.titulo}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        {novedad.descripcion}
                      </p>
                      <p className="text-sm text-gray-500">
                        Link: /novedades/{novedad.link}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal del formulario */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#024430]">
                  {editingNovedad !== null ? "Editar Novedad" : "Nueva Novedad"}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditingNovedad(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título *
                    </label>
                    <input
                      type="text"
                      name="titulo"
                      value={formData.titulo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoría *
                    </label>
                    <select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                    >
                      {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha *
                    </label>
                    <input
                      type="text"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Link (opcional)
                    </label>
                    <input
                      type="text"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      placeholder="Se genera automáticamente si está vacío"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción *
                  </label>
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contenido completo
                  </label>
                  <textarea
                    name="text"
                    value={formData.contenido.text}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contenido: { ...prev.contenido, text: e.target.value },
                      }))
                    }
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Media (imágenes/videos)
                    </label>
                    <button
                      type="button"
                      onClick={addMediaItem}
                      className="bg-[#84A17D] text-white px-3 py-1 rounded text-sm hover:bg-[#6B8A64]"
                    >
                      Agregar Media
                    </button>
                  </div>

                  {formData.contenido.media.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 mb-4 p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <select
                          value={item.type}
                          onChange={(e) =>
                            handleMediaChange(index, "type", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D] mb-2"
                        >
                          <option value="image">Imagen</option>
                          <option value="video">Video</option>
                        </select>
                        <input
                          type="text"
                          value={item.src}
                          onChange={(e) =>
                            handleMediaChange(index, "src", e.target.value)
                          }
                          placeholder="Ruta de la imagen/video (ej: images/evento/1.jpg o /images/evento/1.jpg)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84A17D]"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeMediaItem(index)}
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingNovedad(null);
                    }}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#84A17D] text-white rounded-lg hover:bg-[#6B8A64]"
                  >
                    {editingNovedad !== null ? "Actualizar" : "Crear"} Novedad
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Sección de instrucciones */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            📋 Instrucciones de Uso
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">
                ✅ Cómo crear novedades:
              </h4>
              <ul className="text-blue-600 space-y-1 text-sm">
                <li>• Haz clic en &quot;Nueva Novedad&quot;</li>
                <li>• Completa título, categoría y descripción</li>
                <li>• Agrega contenido completo y media</li>
                <li>• El link se genera automáticamente</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">
                💾 Cómo guardar cambios:
              </h4>
              <ul className="text-blue-600 space-y-1 text-sm">
                <li>• &quot;Exportar JSON&quot;: Descarga backup</li>
                <li>
                  • &quot;Copiar Código&quot;: Copia el código para pegar en
                  novedades-data.js
                </li>
                <li>• Los cambios se mantienen durante la sesión</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-100 rounded border-l-4 border-yellow-400">
            <p className="text-yellow-800 text-sm">
              <strong>⚠️ Importante:</strong> Para que los cambios sean
              permanentes, debes copiar el código generado y reemplazar el
              contenido del archivo <code>src/data/novedades-data.js</code>
            </p>
          </div>
        </div>
      </div>

      <FooterContainer />
    </div>
  );
};

export default ManageContent;
