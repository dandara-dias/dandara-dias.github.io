<template>
  <div class="container projects">
    <h1>Olá!<br>Eu sou a Dandara,<br>web developer</h1>
    <img src="https://github.com/dandara-dias/dandara-dias.github.io/blob/master/src/assets/avatar.png?raw=true" align="right" alt="Avatar" />
    <div class="overlay"></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (max-width: 550px) and (max-height: 600px) {

    h1 {
      margin-top: 100px;
      font-size: 50px;
      color: #400949;
      transform: translateY(-20px);
      animation: 1.2s slideIn ease-in-out forwards 1s;
      z-index: 10;
      opacity: 0;
      position: relative;
      margin-left: 50px;
      font-family: 'Baloo 2', cursive;
    }

    img {
      display: none;
    }

    h1::before {
      content: '';
      width: 0%;
      height: 7px;
      background-color: #AB416B;
      position: absolute;
      bottom: -10px;
      animation: 1s underline ease-in-out forwards 2s;
      mix-blend-mode: screen;
    }

    @keyframes underline {
      100% {
        width: 70%;
      }
    }

    @keyframes slideIn {
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

  @media (min-width: 551px) {
    // src: https://codepen.io/cassandraPaige/pen/jOEMMyp

    h1 {
      margin-top: 100px;
      font-size: 50px;
      color: #400949;
      transform: translateY(-20px);
      animation: 1.2s slideIn ease-in-out forwards 1s;
      z-index: 10;
      opacity: 0;
      position: relative;
      margin-left: 50px;
      font-family: 'Baloo 2', cursive;
    }

    img {
      margin-top: -150px;
      margin-right: 250px;
      width: 250px;
      height: 250px;
      border-radius: 250px;
      animation: 1.2s slideIn forwards 1.5s;
      z-index: 10;
      opacity: 0;
      position: relative;
    }

    h1::before {
      content: '';
      width: 0%;
      height: 7px;
      background-color: #AB416B;
      position: absolute;
      bottom: -10px;
      animation: 1s underline ease-in-out forwards 2s;
      mix-blend-mode: screen;
    }

    .overlay {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      opacity: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(to bottom right, #CDA2A4, #744448);
      transform: scale(.5);
      animation: .5s slideIn ease-in-out forwards, 1s skewBg ease-in-out;
    }

    @keyframes skewBg {
      0% {
        transform: scale(.5);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes underline {
      100% {
        width: 70%;
      }
    }

    @keyframes slideIn {
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

@import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');

</style>
