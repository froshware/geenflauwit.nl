const steps = [
  {
    title: 'Verkennen',
    text: 'We brengen doelen, beperkingen en bestaande systemen in kaart — in uw tempo.',
  },
  {
    title: 'Richting',
    text: 'Samen bepalen we prioriteiten en een haalbare eerste oplevering.',
  },
  {
    title: 'Bouwen',
    text: 'Korte iteraties, zichtbare voortgang, en ruimte voor bijsturen.',
  },
  {
    title: 'Borgen',
    text: 'Documentatie, overdracht en waar nodig beheer of coaching van uw team.',
  },
]

export function Process() {
  return (
    <section id="aanpak" className="section section--alt" aria-labelledby="aanpak-title">
      <div className="section__inner">
        <div className="section__intro">
          <h2 id="aanpak-title">Zo pakken we het aan</h2>
          <p>
            Geen eindeloze analysefase of een groot “big bang”-project zonder
            tussentijdse validatie. We werken liever in heldere stappen die u
            kunt volgen en bijsturen.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <div key={step.title} className="step">
              <div className="step__num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
