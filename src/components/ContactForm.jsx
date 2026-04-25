import { useState } from 'react';
import { validarEmail, generarId, formatearFecha } from '../helpers/utils';
import { enviarMensaje } from '../services/contactoService';

const estadoInicial = {
  nombre: '',
  apellidos: '',
  email: '',
  asunto: '',
  mensaje: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formData.nombre.trim()) nuevosErrores.nombre = 'Campo requerido';
    if (!formData.apellidos.trim()) nuevosErrores.apellidos = 'Campo requerido';
    if (!formData.email.trim()) {
      nuevosErrores.email = 'Campo requerido';
    } else if (!validarEmail(formData.email)) {
      nuevosErrores.email = 'Email inválido';
    }
    if (!formData.asunto) nuevosErrores.asunto = 'Selecciona un asunto';
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'Campo requerido';
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    setEnviando(true);
    await enviarMensaje({ ...formData, id: generarId(), fecha: formatearFecha() });
    setEnviando(false);
    setEnviado(true);
    setFormData(estadoInicial);
  };

  if (enviado) {
    return (
      <div className="contact__form">
        <div className="form__success">
          <span className="form__success-icon">✓</span>
          <h3 className="form__success-title">MENSAJE ENVIADO</h3>
          <p className="form__success-text">
            Gracias por contactarnos. Revisa la consola para ver los datos guardados.
          </p>
          <button
            className="form__submit"
            style={{ marginTop: '1.5rem' }}
            onClick={() => setEnviado(false)}
          >
            ENVIAR OTRO
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit} noValidate>
      <div className="form__notice">
        <strong>Demo:</strong> Este es un formulario de demostración. Los datos se guardan en localStorage y se muestran en consola.
      </div>

      <div className="form__row">
        <div className="form__group">
          <label className="form__label" htmlFor="nombre">Nombre</label>
          <input
            className="form__input"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
          {errores.nombre && <span style={{ fontSize: '0.75rem', color: '#ff4444' }}>{errores.nombre}</span>}
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="apellidos">Apellidos</label>
          <input
            className="form__input"
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Tus apellidos"
          />
          {errores.apellidos && <span style={{ fontSize: '0.75rem', color: '#ff4444' }}>{errores.apellidos}</span>}
        </div>
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="email">Email</label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
        />
        {errores.email && <span style={{ fontSize: '0.75rem', color: '#ff4444' }}>{errores.email}</span>}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="asunto">Asunto</label>
        <select
          className="form__select"
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
        >
          <option value="">Selecciona un asunto</option>
          <option value="consulta-general">Consulta general</option>
          <option value="informacion-producto">Información de producto</option>
          <option value="estado-pedido">Estado de pedido</option>
          <option value="devoluciones">Devoluciones</option>
          <option value="otro">Otro</option>
        </select>
        {errores.asunto && <span style={{ fontSize: '0.75rem', color: '#ff4444' }}>{errores.asunto}</span>}
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="mensaje">Mensaje</label>
        <textarea
          className="form__textarea"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí..."
        />
        {errores.mensaje && <span style={{ fontSize: '0.75rem', color: '#ff4444' }}>{errores.mensaje}</span>}
      </div>

      <button className="form__submit" type="submit" disabled={enviando}>
        {enviando ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
      </button>
    </form>
  );
};

export default ContactForm;
