const services = [
  {
    title: 'Software engineering',
    tag: 'Ontwikkeling',
    body: 'We ontwerpen en bouwen webapplicaties en integraties die aansluiten op uw processen. Van eerste prototype tot productie: code die onderhoudbaar is en die uw team kan meenemen.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: 'Product ownership',
    tag: 'Focus',
    body: 'We vertalen uw bedrijfsdoelen naar een duidelijke backlog, helpen bij stakeholder-afstemming en zorgen dat u investeert in wat echt waarde levert — niet in overbodige features.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Hosting & bouwen',
    tag: 'Fundament',
    body: 'Geen cloud-expert in huis? We adviseren over hosting, beveiliging en schaalbaarheid, en begeleiden leverancierskeuzes. U blijft eigenaar van de keuzes; wij maken ze begrijpelijk.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="4" width="18" height="6" rx="1" />
        <rect x="3" y="14" width="18" height="6" rx="1" />
        <path d="M7 8h.01M7 18h.01" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="diensten" className="section section--alt" aria-labelledby="diensten-title">
      <div className="section__inner">
        <div className="section__intro">
          <h2 id="diensten-title">Diensten die samenhangen</h2>
          <p>
            Veel organisaties hebben wel digitale ambities, maar geen volwaardig
            IT-team voor architectuur, hosting en continue ontwikkeling. Wij
            vullen dat gat met een combinatie van strategie en uitvoering — zodat
            u niet vastloopt tussen wensen en techniek.
          </p>
        </div>
        <div className="card-grid">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="card__icon">{s.icon}</div>
              <span className="card__tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
