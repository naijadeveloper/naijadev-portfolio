
const AboutView = ({data}) => {

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
        <p className="box blog">
          <span>
            <a href="https://dev.to/naijadeveloper">✍🏾 Blog</a>
          </span>
          <span>
            Read my articles, like, comment or share
          </span>
        </p>

        <p className="box github-login">
          <span>
            <a href={data.html_url}>👨🏾‍💻 Github</a>
          </span>
          <span>
            Checkout or contribute to any of my open source projects.
          </span>
        </p>

        <p className="box twitter">
          <span>
            <a href={`https://twitter.com/${data.twitter_username}`}>🐦 Twitter</a>
          </span>
          <span>
            Follow me, interact with my tweets and maybe send a DM.
          </span>
        </p>

        <p className="box sandbox">
          <span>
            <a href={`${data.blog}`}>🎨 CodeSandbox</a>
          </span>
          <span>
            View and like my sandboxes. DM your thoughts on twitter
          </span>
        </p>
        
        <p className="box location">
          <span>🗺 Location</span>
          <span>I currently live in {data.location}</span>
        </p>
      </div>
    </section>
  );
}

export default AboutView;