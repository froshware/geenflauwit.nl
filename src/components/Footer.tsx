export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {year} Geen Flauw IT — software engineering &amp; product ownership.</p>
        <p>
          <a href="#contact">Contact</a>
          {' · '}
          <a href="#diensten">Diensten</a>
        </p>
      </div>
    </footer>
  )
}
