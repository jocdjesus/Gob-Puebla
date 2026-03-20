//components/portal/EcosistemaDigital.tsx
"use client";

import { useState } from "react";
import {
  Bus,
  ShieldCheck,
  TreePine,
  Wheat,
  Landmark,
  Palmtree,
  Dumbbell,
  Palette,
  Radio,
  Shield,
  Heart,
  GraduationCap,
  AlertOctagon,
  Stethoscope,
  Briefcase,
  Construction,
  Users,
  Scale,
  Smartphone,
  Download,
  ChevronRight,
  FileText,
} from "lucide-react";

const aplicaciones = [
  {
    id: 1,
    nombre: "Mujer Segura Puebla",
    secretaria: "Secretaría de las Mujeres",
    descripcion:
      "Botón de pánico, directorio de ayuda y recursos para mujeres.",
    icon: ShieldCheck,
    color: "#db2777",
    categoria: "Seguridad",
    hasDownload: true,
    hasVerMas: true,
    hasApp: true,
  },
  {
    id: 2,
    nombre: "Puebla en Movimiento",
    secretaria: "Secretaría de Movilidad y Transporte",
    descripcion:
      "Consulta rutas, horarios y paga tu transporte público desde tu celular.",
    icon: Bus,
    color: "#2563eb",
    categoria: "Movilidad",
    hasDownload: true,
    hasVerMas: true,
    hasApp: false,
  },
  {
    id: 3,
    nombre: "Salud Pública Puebla",
    secretaria: "Secretaría de Salud",
    descripcion: "Citas médicas, cartilla de vacunación y centros de salud.",
    icon: Stethoscope,
    color: "#0891b2",
    categoria: "Salud",
    hasDownload: true,
    hasVerMas: true,
    hasApp: false,
  },
  {
    id: 4,
    nombre: "Vecino Vigilante Puebla",
    secretaria: "Secretaría de Seguridad Pública",
    descripcion: "Reportes de seguridad, emergencias y coordinación vecinal.",
    icon: Shield,
    color: "#dc2626",
    categoria: "Seguridad",
    hasDownload: false,
    hasVerMas: true,
    hasApp: false,
    showEmailAlert: true,
  },
  {
    id: 5,
    nombre: "Infraestructura Puebla",
    secretaria: "Secretaría de Infraestructura",
    descripcion: "Reporta daños en infraestructura y consulta obras públicas.",
    icon: Construction,
    color: "#57534e",
    categoria: "Infraestructura",
    hasDownload: false,
    hasVerMas: true,
    hasApp: false,
    showEmailAlert: true,
  },
  {
    id: 6,
    nombre: "Salud Materna Puebla",
    secretaria: "Secretaría de Salud",
    descripcion:
      "Brinda seguimiento integral a la salud materna, control prenatal, orientación médica y acceso a servicios para el cuidado de la madre y el bebé.",
    icon: Stethoscope,
    color: "#0891b2",
    categoria: "Salud",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 7,
    nombre: "Alerta Corrupción Puebla",
    secretaria: "Secretaría de Anticorrupción y Buen Gobierno",
    descripcion: "Denuncia actos de corrupción de forma anónima y segura.",
    icon: AlertOctagon,
    color: "#ca8a04",
    categoria: "Anticorrupción",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 8,
    nombre: "Empleo Puebla",
    secretaria: "Secretaría de Desarrollo Económico y Trabajo",
    descripcion: "Bolsa de trabajo, capacitación y apoyo a emprendedores.",
    icon: Briefcase,
    color: "#0284c7",
    categoria: "Empleo",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 9,
    nombre: "AgroConecta Puebla",
    secretaria: "Secretaría de Agricultura y Desarrollo Rural",
    descripcion:
      "Información de mercados, clima agrícola y programas de apoyo.",
    icon: Wheat,
    color: "#d97706",
    categoria: "Agricultura",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 10,
    nombre: "Puebla Conectada",
    secretaria: "Secretaría de Gobernación",
    descripcion:
      "Información de protección civil, alertas y comunicados oficiales.",
    icon: Radio,
    color: "#4f46e5",
    categoria: "Gobierno",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 11,
    nombre: "Bienestar Comunitario",
    secretaria: "Secretaría del Bienestar",
    descripcion: "Programas sociales, apoyos y servicios comunitarios.",
    icon: Heart,
    color: "#e11d48",
    categoria: "Bienestar",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 12,
    nombre: "Escuela Puebla",
    secretaria: "Secretaría de Educación Pública",
    descripcion:
      "Inscripciones, becas, calendario escolar y recursos educativos.",
    icon: GraduationCap,
    color: "#059669",
    categoria: "Educación",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 14,
    nombre: "EcoVigía Puebla",
    secretaria: "Secretaría de Medio Ambiente",
    descripcion:
      "Reporta problemas ambientales y consulta la calidad del aire.",
    icon: TreePine,
    color: "#16a34a",
    categoria: "Ambiente",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 15,
    nombre: "Cultura Viva Puebla",
    secretaria: "Secretaría de Arte y Cultura",
    descripcion: "Cartelera cultural, museos, eventos y patrimonio poblano.",
    icon: Palette,
    color: "#9333ea",
    categoria: "Cultura",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 16,
    nombre: "Puebla Transparente",
    secretaria: "Secretaría de Planeación, Finanzas y Administración",
    descripcion:
      "Consulta el uso de recursos públicos y datos abiertos del gobierno.",
    icon: Landmark,
    color: "#475569",
    categoria: "Transparencia",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 17,
    nombre: "Gabinete en Terreno",
    secretaria: "Coordinación General de Gabinete",
    descripcion: "Agenda de giras y actividades del gobierno en tu comunidad.",
    icon: Users,
    color: "#7c3aed",
    categoria: "Gobierno",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 18,
    nombre: "Justicia Cerca",
    secretaria: "Consejería Jurídica",
    descripcion: "Asesoría legal gratuita y orientación jurídica ciudadana.",
    icon: Scale,
    color: "#52525b",
    categoria: "Legal",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 19,
    nombre: "Puebla Digital",
    secretaria: "Coordinación General de Comunicación y Agenda Digital",
    descripcion:
      "Hub central de servicios digitales y transformación tecnológica.",
    icon: Smartphone,
    color: "#c026d3",
    categoria: "Digital",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 20,
    nombre: "Puebla Viva",
    secretaria: "Secretaría de Desarrollo Turístico",
    descripcion:
      "Descubre destinos, eventos y experiencias turísticas en Puebla.",
    icon: Palmtree,
    color: "#0d9488",
    categoria: "Turismo",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
  {
    id: 21,
    nombre: "Juega Puebla",
    secretaria: "Secretaría de Deporte y Juventud",
    descripcion: "Eventos deportivos, instalaciones y programas para jóvenes.",
    icon: Dumbbell,
    color: "#ea580c",
    categoria: "Deporte",
    hasDownload: false,
    hasVerMas: false,
    hasApp: false,
  },
];

const categorias = [
  "Todas",
  "Seguridad",
  "Salud",
  "Educación",
  "Empleo",
  "Gobierno",
  "Movilidad",
  "Cultura",
];

export function EcosistemaDigital() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [showAll, setShowAll] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const appsFiltradas =
    categoriaActiva === "Todas"
      ? aplicaciones
      : aplicaciones.filter((app) => app.categoria === categoriaActiva);

  const appsToShow = showAll ? appsFiltradas : appsFiltradas.slice(0, 8);

  const handleDownloadClick = (appNombre: string) => {
    setAlertMessage(
      `Primero debes iniciar sesión o registrarte para descargar el documento de ${appNombre}`,
    );
    setTimeout(() => setAlertMessage(null), 3000);
  };

  const handleVerMasClick = (appNombre: string, showEmailAlert?: boolean) => {
    if (showEmailAlert) {
      setAlertMessage(
        `Solicita el documento a ramirez.martinez.josedejesus@gmail.com para ${appNombre}`,
      );
      setTimeout(() => setAlertMessage(null), 3000);
    } else {
      // Aquí puedes redirigir a la página de detalles
      console.log(`Ver más de ${appNombre}`);
    }
  };

  return (
    <section className="index-eco-section" aria-labelledby="ecosistema-title">
      <div className="index-eco-container">
        <div className="index-eco-header">
          <span className="index-eco-badge">Ecosistema Digital</span>
          <h2 id="ecosistema-title" className="index-eco-title">
            Puebla Ciudadana
          </h2>
          <p className="index-eco-subtitle">
            Descarga las aplicaciones oficiales del Gobierno del Estado de
            Puebla y lleva los servicios públicos en tu bolsillo.
          </p>
        </div>

        {alertMessage && (
          <div className="index-alert-message">{alertMessage}</div>
        )}

        <div className="index-eco-filters">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoriaActiva(cat);
                setShowAll(false);
              }}
              className={`index-filter-btn ${categoriaActiva === cat ? "index-filter-btn-active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="index-apps-grid">
          {appsToShow.map((app) => {
            const Icon = app.icon;
            return (
              <article key={app.id} className="index-app-card">
                <div className="index-app-header">
                  <div
                    className="index-app-icon-box"
                    style={{ backgroundColor: app.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="index-app-info">
                    <h3 className="index-app-name">{app.nombre}</h3>
                    <p className="index-app-secretaria">{app.secretaria}</p>
                  </div>
                </div>
                <p className="index-app-desc">{app.descripcion}</p>
                <div className="index-app-actions">
                  {(app.hasVerMas || app.hasDownload) && (
                    <>
                      {app.hasVerMas && (
                        <button
                          onClick={() =>
                            handleVerMasClick(app.nombre, app.showEmailAlert)
                          }
                          className="index-app-link"
                        >
                          Ver más <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                      {app.hasDownload && (
                        <button
                          onClick={() => handleDownloadClick(app.nombre)}
                          className="index-app-btn-download"
                        >
                          <Download className="w-3 h-3" /> Descargar documento
                        </button>
                      )}
                      {app.hasApp && (
                        <button className="index-app-btn-download">
                          <Download className="w-3 h-3" /> Descargar app
                        </button>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {appsFiltradas.length > 8 && !showAll && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              className="index-filter-btn"
              onClick={() => setShowAll(true)}
              style={{ color: "#2563eb", borderColor: "#bfdbfe" }}
            >
              Ver todas las aplicaciones ({appsFiltradas.length})
            </button>
          </div>
        )}

        <div className="index-eco-footer-banner">
          <div className="index-banner-flex">
            <div className="index-banner-content">
              <h3 className="index-banner-title">
                Descarga el launcher Puebla Ciudadano
              </h3>
              <p className="index-banner-text">
                Accede de forma centralizada a todas las herramientas
                tecnológicas del gobierno desde tu dispositivo.
              </p>
            </div>
            <div className="index-banner-btns">
              <button className="index-btn-white">
                <Smartphone className="w-4 h-4" /> Google Play
              </button>
              <button className="index-btn-white">
                <FileText className="w-4 h-4" /> Documentación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
