<template>
  <section class="myself" itemscope="" itemprop="Person" itemtype="http://schema.org/Person">
    <figure class="profile">
      <img alt="minha foto de perfil, sorridente e com um cachecol listrado muito legal"
           src="static/perfil.jpg"
           itemprop="image"
           >
           <h1 class="name" itemprop="name">Rodrigo Alencar</h1>
           <h2 class="about" itemprop="jobTitle">I am a FullStack developer</h2>
           <section class="contact">
             <span class="email" itemprop="email">rodrigovieira18@gmail.com</span>
           </section>
    </figure>
    <figure class="social">
      <a href="https://github.com/RatoX" target="_blank">
        <img src="static/logos/github.svg" alt="logo do meu github">
      </a>
      <a href="https://www.linkedin.com/in/Rodrigo-Alencar" target="_blank">
        <img src="static/logos/linkedin.svg" alt="logo do meu linkedin">
      </a>
      <a href="https://twitter.com/ratoox" target="_blank">
        <img src="static/logos/twitter.svg" alt="logo do meu twitter">
      </a>
    </figure>
  </section>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  align-self: center;
}

.myself {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}

.profile > img {
  max-width: 200px;
  width: 60%;
  max-height: 200px;
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
  font-size: 1.1em;
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
