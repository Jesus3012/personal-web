import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desarrollo de Software Custom',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Desarrollo de Software Custom', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "w-full bg-transparent border-0 border-b border-gray-800 focus:border-blue-500 focus:ring-0 px-0 py-3 text-white placeholder-gray-600 transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre Completo"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputClasses} appearance-none [&>option]:bg-gray-900`}
        >
          <option value="Desarrollo de Software Custom">Desarrollo de Software Custom</option>
          <option value="App Móvil">Desarrollo de App Móvil</option>
          <option value="Paquete Web All-in-One">Paquete Web "All-in-One"</option>
          <option value="Otro">Otro requerimiento</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Mensaje o detalles de tu proyecto..."
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : status === 'success' ? (
          '¡Mensaje Enviado!'
        ) : (
          'Enviar Mensaje'
        )}
      </button>
    </form>
  );
}
