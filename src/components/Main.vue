<template>
  <section class="myself" itemscope="" itemprop="Person" itemtype="http://schema.org/Person">
    <figure class="profile">
      <img alt="minha foto de perfil, sorridente e com um cachecol listrado muito legal"
           src="../assets/perfil.jpg"
           itemprop="image"
           />
      <h1 class="name" itemprop="name">Rodrigo Alencar</h1>
      <h2 class="about" itemprop="jobTitle">FullStack Engineer</h2>
      <section class="contact">
        <span class="email" itemprop="email">rodrigovieira18@gmail.com</span>
      </section>
    </figure>
    <nav>
      <ul>
        <li>
          <router-link to="/json">JSON Playground</router-link>
        </li>
        <li>
          <router-link to="/image">Image Resizer</router-link>
        </li>
      </ul>
    </nav>
    <figure class="social">
      <a href="https://github.com/RatoX" aria-label="Github" alt="my shit codes on github" target="_blank">
        <GithubLogo alt="logo do meu github"/>
      </a>
      <a href="https://www.linkedin.com/in/Rodrigo-Alencar" aria-label="Linkedin" alt="my linkedin profile, send me jobs :D" target="_blank">
        <LinkedinLogo alt="logo do meu linkedin" />
      </a>
      <a href="https://twitter.com/ratoox" alt="bad jokes in portuguese" aria-label="Twitter" target="_blank">
        <TwitterLogo alt="logo do meu twitter" />
      </a>
    </figure>
  </section>
</template>

<script>
import GithubLogo from '../assets/logos/github.svg';
import LinkedinLogo from '../assets/logos/linkedin.svg';
import TwitterLogo from '../assets/logos/twitter.svg';

export default {
  name: 'Main',
  components: {
    GithubLogo,
    LinkedinLogo,
    TwitterLogo,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  margin: 20px 0;
}

nav ul {
  margin-top: 10px;
}

.myself {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.profile > img {
  max-width: 150px;
  width: 60%;
  margin: 1em auto;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-border-radius: 99em;
  -moz-border-radius: 99em;
  border-radius: 99em;
  border: 5px solid #222;
  box-shadow: 1px 4px 6px 2px rgba(0, 0, 0, 0.2);
}

.profile > .name {
  text-align: center;
  font-size: 1.6em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05em;
}


.profile > .about {
  text-align: center;
  font-size: 1em;
}

.profile > .contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 1em;

  .email {
    font-weight: bold;
    font-size: 1.1em;
  }
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: auto;
}

.social a + a {
  margin-left: 20px;
}

.social img {
  width: 60px;
  box-shadow: 3px 4px 4px 0px rgba(0,0,0,0.75);
  border-radius: 50%;
  align-self: center;
}

</style>
