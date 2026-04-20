export function Audience() {
  return (
    <section id="voor-wie" className="section" aria-labelledby="voor-wie-title">
      <div className="section__inner">
        <div className="section__intro">
          <h2 id="voor-wie-title">Voor wie is dit bedoeld?</h2>
          <p>
            Met name mkb, maatschappelijke organisaties en scale-ups die
            software nodig hebben, maar geen hoofd-IT’er op de loonlijst
            hebben — of die tijdelijk extra expertise zoeken.
          </p>
        </div>
        <div className="two-col">
          <div>
            <h3 style={{ fontSize: '1.15rem', margin: '0 0 1rem' }}>Dit herkent u</h3>
            <ul className="bullet-list">
              <li>
                U wilt digitaliseren of een nieuw product lanceren, maar weet
                niet waar u hosting en beveiliging moet laten.
              </li>
              <li>
                Leveranciers en cloud-termen (VPS, Kubernetes, CI/CD) voelen
                als een black box; u wilt grip zonder zelf alles te worden.
              </li>
              <li>
                U heeft behoefte aan iemand die zowel met bestuur praat als
                code reviewt — zonder twee bureaus die langs elkaar heen werken.
              </li>
            </ul>
          </div>
          <blockquote className="quote">
            Het gaat erom dat u weet wat er gebouwd wordt, waar het draait, en
            hoe u daar later op kunt doorontwikkelen — met of zonder ons.
            <footer>— Praktisch, transparant, zonder flauwekul</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
