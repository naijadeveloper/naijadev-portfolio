const AboutView = ({data}) => {

  function openUrl(url) {
    window.open(url, '_blank');
  }

  return (
    <section className="about">
      <h1 className="avatar-img">
        <img src={data.avatar_url} alt="my_image"></img>
      </h1>

      <p className="github-name">{data.name}</p>
      <p className="github-bio">
        <span>Hello 👋🏾</span>
        {data.bio}. 
        I am learning software design and application development. I'm passionate about gaining and sharing knowledge.
        <span>
          On the other side, I aim at being a polyglot and I am learning how to draw
        </span>
      </p>

      <div className="boxes">
        <div className="box blog" onClick={() => openUrl('https://dev.to/naijadeveloper')}>
          <p>
            <span aria-label="write-emoji">✍🏾</span>
            <span>Blog</span>
          </p>
          <p>
            Read my articles, like, comment or share
          </p>
        </div>

        <div className="box github-login" onClick={() => openUrl(`${data.html_url}`)}>
          <p>
            <span aria-label="laptop-emoji">💻</span> 
            <span>Github</span>
          </p>
          <p>
            Checkout or contribute to any of my open source projects.
          </p>
        </div>

        <div className="box twitter" onClick={() => openUrl(`https://twitter.com/${data.twitter_username}`)}>
          <p>
            <span aria-label="bird-emoji">🐦</span> 
            <span>Twitter</span>
          </p>
          <p>
            Follow me, interact with my tweets and maybe send a DM.
          </p>
        </div>

        <div className="box sandbox" onClick={() => openUrl(`${data.blog}`)}>
          <p>
            <span aria-label="paint-board-emoji">🎨</span> 
            <span>CodeSandbox</span>
          </p>
          <p>
            View and like my sandboxes. DM your thoughts on twitter
          </p>
        </div>
        
        <div className="box location">
          <p>
            <span aria-label="map-emoji" style={{color: '#ccc'}}>🗺</span> 
            <span>Location</span>
          </p>
          <p>
            I currently live in {data.location}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutView;