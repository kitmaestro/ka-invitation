import { useState } from "react";
import {
  Sparkles,
  DollarSign,
  Award,
  Clock,
  Users,
  Zap,
  BookOpen,
  CheckCircle,
  Handshake,
} from "lucide-react";
import ApprovalCriteriaModal from "./ApprovalCriteriaModal";
import AffiliationStepsModal from "./AffiliateionStepsModal";
import ContactForm from "./ContactForm";

// Componente principal de la aplicación
export default function App() {
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showAffiliationModal, setShowAffiliationModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col items-center p-4 sm:p-8">
      {/* Conditionally render modals based on state */}
      {showApprovalModal && (
        <ApprovalCriteriaModal onClose={() => setShowApprovalModal(false)} />
      )}
      {showAffiliationModal && (
        <AffiliationStepsModal onClose={() => setShowAffiliationModal(false)} />
      )}

      {/* Contenedor principal para centrar el contenido y limitar el ancho */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Encabezado con imagen y título */}
        <div className="relative h-48 md:h-64 flex items-center justify-center p-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center">
          <Sparkles className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-20 animate-pulse-slow" />
          <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold leading-tight z-10">
            Únete a <br className="sm:hidden" />
            KitMaestro Academy
          </h1>
          <p className="absolute bottom-4 text-sm sm:text-base opacity-90 z-10 font-light">
            Tu plataforma exclusiva para vender talleres y conferencias.
          </p>
        </div>

        {/* Sección de Introducción */}
        <div className="p-6 sm:p-10 space-y-6 md:space-y-8">
          <p className="text-lg sm:text-xl font-medium text-center text-indigo-700">
            Estamos construyendo un ecosistema para devolverle el brillo a la
            profesión docente.
          </p>
          <p className="text-base text-center text-slate-600 max-w-3xl mx-auto">
            KitMaestro Academy es una plataforma diseñada para que maestros como
            tú, con conocimiento valioso, puedan compartirlo y monetizarlo. Aquí
            te contamos por qué deberías ser parte de nuestra comunidad.
          </p>
        </div>

        {/* Sección de Beneficios Clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-6 sm:p-10 bg-slate-100">
          {/* Tarjeta de Beneficio */}
          <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex-shrink-0 p-3 bg-purple-100 text-purple-600 rounded-full">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Sin costo de membresía
              </h3>
              <p className="text-slate-600">
                No cobramos tarifas ni membresías. Si necesitas financiamiento
                para producir tu contenido, tenemos un programa de patrocinio
                que puede ayudarte a cambio de un 5% adicional de las ventas.
              </p>
            </div>
          </div>

          {/* Tarjeta de Beneficio */}
          <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex-shrink-0 p-3 bg-indigo-100 text-indigo-600 rounded-full">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Retención del 10%
              </h3>
              <p className="text-slate-600">
                Solo retenemos un 10% de tus ventas para cubrir los gastos de
                transacción y los costos de la plataforma. El 90% restante es
                tuyo.
              </p>
            </div>
          </div>

          {/* Tarjeta de Beneficio */}
          <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex-shrink-0 p-3 bg-yellow-100 text-yellow-600 rounded-full">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Facilidad de uso y promoción
              </h3>
              <p className="text-slate-600">
                Publicas tu curso y, si cumple con nuestros criterios, se
                publica y se promociona sin costo adicional durante 7 días en
                nuestros canales.
              </p>
            </div>
          </div>

          {/* Tarjeta de Beneficio */}
          <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex-shrink-0 p-3 bg-teal-100 text-teal-600 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Control total
              </h3>
              <p className="text-slate-600">
                Tú decides el precio y la modalidad de certificación. Recibirás
                un panel de control para monitorear tus cursos y las entregas de
                los participantes.
              </p>
            </div>
          </div>

          {/* Tarjeta de Beneficio */}
          <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm md:col-span-2">
            <div className="flex-shrink-0 p-3 bg-pink-100 text-pink-600 rounded-full">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1 text-slate-900">
                Membresía gratuita de KitMaestro
              </h3>
              <p className="text-slate-600">
                Al unirte a KitMaestro Academy, tu membresía en la aplicación
                principal de KitMaestro será completamente gratuita, para
                siempre.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de más información con botones para modales */}
        <div className="p-6 sm:p-10 bg-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-center text-indigo-700">
            Más Información
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setShowApprovalModal(true)}
              className="flex items-center justify-center space-x-2 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-slate-800">
                Criterios de Aprobación
              </span>
            </button>
            <button
              onClick={() => setShowAffiliationModal(true)}
              className="flex items-center justify-center space-x-2 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Handshake className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-slate-800">
                Pasos para Afiliación
              </span>
            </button>
          </div>
        </div>

        {/* Sección de cursos de ejemplo */}
        <div className="p-6 sm:p-10 bg-white space-y-6">
          <h2 className="text-2xl font-bold text-center text-indigo-700">
            Ejemplos de Cursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-100 shadow-sm">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900">
                Programación para Docentes
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Aprende a usar lenguajes de programación para crear actividades
                interactivas en el aula.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-100 shadow-sm">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900">
                Estrategias de Evaluación Formativa
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Técnicas y herramientas para evaluar el progreso de los
                estudiantes de forma continua.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-100 shadow-sm">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900">
                Uso de IA en el Aula
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Guía práctica para integrar la inteligencia artificial en la
                planificación y enseñanza.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-100 shadow-sm">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900">
                Gestión de Aulas Inclusivas
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Métodos para crear un ambiente de aprendizaje que responda a las
                necesidades de todos los estudiantes.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <ContactForm />

        {/* Sección de Cierre y Llamada a la Acción (CTA) */}
        <div className="p-6 sm:p-10 bg-indigo-700 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¡Menos estrés, más tiempo!
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mb-6 max-w-3xl mx-auto">
            Nuestra aplicación permite a los docentes ahorrar hasta 20 horas de
            trabajo cada semana, dándoles más tiempo para lo que realmente
            importa.
          </p>
          <div className="inline-block px-8 py-4 text-lg font-bold text-indigo-700 bg-white rounded-full shadow-lg transition-colors duration-200">
            Únete a nuestra comunidad
          </div>
        </div>
      </div>
    </div>
  );
}
