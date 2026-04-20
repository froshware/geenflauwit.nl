export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div>
          <p className="hero__badge">Software &amp; product</p>
          <h1 id="hero-title">
            Bouwen en hosten zonder eigen IT-afdeling
          </h1>
          <p className="hero__lead">
            Wij helpen bedrijven die intern weinig IT-kennis hebben: van
            productvisie tot werkende software, en van hostingkeuzes tot
            beheer — uitgelegd in begrijpelijke taal, zonder overbodige
            complexiteit.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Plan een gesprek
            </a>
            <a className="btn btn--ghost" href="#diensten">
              Bekijk diensten
            </a>
          </div>
        </div>
        <div className="hero__panel">
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--ink)' }}>
            Wat u kunt verwachten
          </p>
          <ul className="hero__list">
            <li>
              <span className="hero__check" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>
                Eén aanspreekpunt voor productrichting én technische uitvoering
              </span>
            </li>
            <li>
              <span className="hero__check" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>
                Hosting en infrastructuur die bij uw risico en budget passen
              </span>
            </li>
            <li>
              <span className="hero__check" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>
                Geen jargon zonder uitleg — transparante keuzes en documentatie
              </span>
            </li>
          </ul>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>Product</strong>
              <span>Roadmap &amp; prioriteit</span>
            </div>
            <div className="hero__stat">
              <strong>Build</strong>
              <span>Iteratief opleveren</span>
            </div>
            <div className="hero__stat">
              <strong>Run</strong>
              <span>Hosting &amp; beheer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
