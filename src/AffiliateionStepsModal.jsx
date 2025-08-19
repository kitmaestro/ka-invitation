import { X } from "lucide-react";

// Componente para la ventana modal de Pasos de Afiliación
const AffiliationStepsModal = ({ onClose }) => {
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
          Proceso de Afiliación
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-slate-700">
          <li>
            <strong className="text-slate-900">Solicitud Formal:</strong> Envía
            una solicitud de afiliación que incluya una presentación de tus
            trabajos anteriores.
          </li>
          <li>
            <strong className="text-slate-900">
              Entrevista con el Comité:
            </strong>{" "}
            Tendrás una entrevista con nuestro comité de selección para discutir
            tu propuesta.
          </li>
          <li>
            <strong className="text-slate-900">Firma de Contrato:</strong> Una
            vez aprobado, firmaremos el contrato para formalizar tu
            colaboración.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AffiliationStepsModal;
