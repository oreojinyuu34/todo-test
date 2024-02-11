const Header = () => {
  return (
    <section className="navbar is-success navbar-section">
      <nav
        className="container navbar-container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand has-text-weight-bold is-size-5">
          <a className="navbar-item" href="/" aria-label="Home">
            やる事リスト
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Header;
