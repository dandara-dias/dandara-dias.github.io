<template>
  <ul>
      <li><img src="https://img.icons8.com/nolan/50/console.png" alt="Terminal favicon" id="navbar-icon"/></li>
      <li class="navbar-items"><router-link to="/">home</router-link></li>
      <li class="navbar-items"><router-link to="/about">about</router-link></li>
      <li class="navbar-items"><router-link to="/portfolio">portfolio</router-link></li>
      <li class="navbar-items"><router-link to="/contact">contact</router-link></li>
      <li class="social-networks">
        <a href="https://www.linkedin.com/in/dandara-dias/" target="_blank">
          <img src="https://img.icons8.com/nolan/50/linkedin.png" alt="Linkedin link" />
        </a>
      </li>
      <li class="social-networks">
        <a href="https://github.com/dandara-dias" target="_blank">
          <img src="https://img.icons8.com/nolan/50/github.png" alt="GitHub link" />
        </a>
      </li>
    </ul>
    <router-view />
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped lang="scss">
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(255, 235, 244, 0.8);
  position: fixed;
  min-width: 100%;
}

li {
  float: left;
}

.social-networks{
  align-content: center;
  margin: -16px;
  margin-left: 5px;
}

li a {
  display: flex;
  color: rgb(51, 30, 54);
  align-items: center;
  padding: 14px 16px;
  margin-left: 70px;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgb(187, 139, 181);
}

#navbar-icon{
  margin-left: 20px;
}

@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

</style>
