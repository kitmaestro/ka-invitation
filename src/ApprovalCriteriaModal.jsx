import { X } from "lucide-react";

// Componente para la ventana modal de Criterios de Aprobación
const ApprovalCriteriaModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900 bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-xl transform transition-all scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Criterios de Aprobación
        </h2>
        <ul className="list-disc list-inside space-y-3 text-slate-700">
          <li>
            <strong className="text-slate-900">Relevancia:</strong> El contenido
            debe ser pertinente y valioso para el público docente.
          </li>
          <li>
            <strong className="text-slate-900">Calidad del Contenido:</strong>{" "}
            Se evalúa la profundidad y exactitud del material, no necesariamente
            la calidad de producción.
          </li>
          <li>
            <strong className="text-slate-900">
              Claridad en Producción Audiovisual:
            </strong>{" "}
            La producción debe ser clara y comprensible, asegurando una buena
            experiencia de aprendizaje.
          </li>
          <li>
            <strong className="text-slate-900">
              Validez y Contenido Completo:
            </strong>{" "}
            El curso debe estar completo y ser coherente, con todos los
            materiales necesarios para su impartición.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApprovalCriteriaModal;
