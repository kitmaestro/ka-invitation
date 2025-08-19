import { useState } from 'react'

// Componente del formulario de contacto
const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const response = await fetch('https://api.kitmaestro/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                setFormData({ fullName: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Hubo un error de conexión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 bg-white rounded-2xl shadow-lg space-y-4">
            <h3 className="text-2xl font-bold text-center text-indigo-700 mb-4">Contáctanos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-700">Nombre Completo</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-1 p-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 p-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">Teléfono</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="w-full sm:w-auto inline-block px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                >
                    Enviar Mensaje
                </button>
            </div>
            {status && <p className="mt-4 text-center font-medium text-sm">{status}</p>}
        </form>
    );
};

export default ContactForm;
