import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjglpzne");

  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-cyan-400/10";

  const labelClass = "mb-2 block text-sm font-medium text-slate-300";

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-green-400/20 bg-green-400/10 px-6 py-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-400/15 text-green-300">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white">Mensaje enviado</h4>
        <p className="mt-2 text-sm text-slate-400">
          Gracias por contactarnos. Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ej. RexCoreSolutions"
          required
          className={fieldClass}
        />
        <ValidationError prefix="Nombre" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="correo@empresa.com"
          required
          className={fieldClass}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Servicio de interés
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            defaultValue="Desarrollo de Software Custom"
            className={`${fieldClass} appearance-none pr-12`}
          >
            <option className="bg-slate-900" value="Desarrollo de Software Custom">
              Desarrollo de Software Custom
            </option>
            <option className="bg-slate-900" value="App Móvil">
              Desarrollo de App Móvil
            </option>
            <option className="bg-slate-900" value="Paquete Web All-in-One">
              Paquete Web All-in-One
            </option>
            <option className="bg-slate-900" value="Otro">
              Otro requerimiento
            </option>
          </select>

          <svg
            className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <ValidationError prefix="Servicio" field="service" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Detalles del proyecto
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntanos qué necesitas, objetivos, tiempos o funcionalidades principales..."
          required
          rows={5}
          className={`${fieldClass} resize-none`}
        />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

        <span className="relative flex items-center gap-2">
          {state.submitting ? (
            <>
              <svg className="h-5 w-5 animate-spin text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </span>
      </button>
    </form>
  );
}