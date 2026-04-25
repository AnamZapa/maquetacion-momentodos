import ContactForm from '../components/ContactForm';
import '../styles/pages.css';

const Contacto = () => {
  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + 4rem)' }}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Escríbenos</span>
          <h1 className="section__title">Contacto</h1>
          <p className="section__subtitle">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <h2 className="contact__info-title">INFORMACIÓN DE CONTACTO</h2>

            <div className="contact__info-item">
              <p className="contact__info-label">Dirección</p>
              <p className="contact__info-value">
                Calle Urban Style 123<br />
                28001 Madrid, España
              </p>
            </div>

            <div className="contact__info-item">
              <p className="contact__info-label">Teléfono</p>
              <p className="contact__info-value">+34 91 123 45 67</p>
            </div>

            <div className="contact__info-item">
              <p className="contact__info-label">Email</p>
              <p className="contact__info-value">info@urbanthreads.com</p>
            </div>

            <div className="contact__info-item">
              <p className="contact__info-label">Horario</p>
              <p className="contact__info-value">
                Lun - Vie: 9:00 - 18:00<br />
                Sáb: 10:00 - 14:00
              </p>
            </div>
          </div>

          <div>
            <h2 className="contact__info-title">ENVÍANOS UN MENSAJE</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
