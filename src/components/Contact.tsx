const EMAIL = 'hallo@geenflauwit.nl'

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__box">
        <h2 id="contact-title">Laten we kennismaken</h2>
        <p>
          Vertel kort waar u tegenaan loopt — bijvoorbeeld een nieuw product,
          migratie, of onduidelijkheid over hosting. We reageren met een
          concreet voorstel voor een vervolgstap.
        </p>
        <a className="contact__email" href={`mailto:${EMAIL}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M4 6h16v12H4z" />
            <path d="M4 8l8 6 8-6" />
          </svg>
          {EMAIL}
        </a>
        <p className="contact__note">
          Liever bellen of een korte video-call? Vermeld het in uw mail; dan
          plannen we iets in.
        </p>
      </div>
    </section>
  )
}
