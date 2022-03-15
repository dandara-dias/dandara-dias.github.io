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
  @media (max-width: 550px) and (max-height: 600px) {
    ul {
      list-style-type: none;
      margin-top: -95px;
      background-color: rgb(255, 235, 244, 0.9);
      padding: 0;
      overflow: hidden;
      position: fixed;
      min-width: 100%;
      z-index: 1;
    }

    li {
      float: left;
    }

    li a {
      display: flex;
      color: rgb(51, 30, 54);
      align-items: center;
      padding: 12px 8px;
      margin-left: 8px;
      text-decoration: none;
      font-family: 'Quicksand', sans-serif;
    }

    .social-networks {
      align-content: center;
      margin: -10px;
      margin-left: 3px;
    }

    li a:hover {
      background-color: rgb(187, 139, 181);
    }

    #navbar-icon {
      margin-left: 6px;
    }
  }

  @media (min-width: 551px) {
    ul {
      list-style-type: none;
      margin-top: -92px;
      padding: 0;
      overflow: hidden;
      background-color: rgb(255, 235, 244, 0.9);
      position: fixed;
      min-width: 100%;
      z-index: 1;
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
    li a:hover { //src: w3schools
      background-color: rgb(187, 139, 181);
    }

    #navbar-icon{
      margin-left: 20px;
    }
  }
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
</style>
