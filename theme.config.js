export default {
  footer: (
    <footer>
      <small>
      <hr />
      <p>Mads Opheim. Doing my best for a better world. Through better tech and better policies.</p>
        <a href="/feed.xml">
            <img className="icon" src="/images/icons/rss.svg" alt="RSS" />
        </a>
        <a href="mailto:mads.opheim+web@gmail.com">
            <img className="icon" src="/images/icons/gmail.svg" alt="E-mail" />
        </a>
        <a href="//github.com/madsop/">
            <img className="icon" src="/images/icons/github.svg" alt="E-mail" />
        </a>
        <a href="//linkedin.com/in/madsopheim/">
            <img className="icon" src="/images/icons/linkedin.svg" alt="LinkedIn"/>
        </a>
        <a href="//bsky.app/profile/madsopheim.com">
            <img className="icon" src="/images/icons/bluesky.svg" alt="Bluesky"/>
        </a>
        <a href="//sessionize.com/mads-opheim/">
            <img className="icon" src="/images/icons/sessionize.svg" alt="Bluesky"/>
        </a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 5rem;
        }
        a {
          float: left;
        }
      `}</style>
    </footer>
  ),
};
