// src: https://dev.to/matteobruni/how-to-create-beautiful-particles-effect-in-vue-js-2-x-and-3-x-27d8

<template>
  <div id="app">
    <h1>Teste</h1>
    <Particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 900,
                                duration: 2,
                                opacity: 0.2,
                                size: 40
                            },
                            push: {
                                quantity: 1
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.9
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#FCEFEF',
                            opacity: 0.2
                        },
                        links: {
                            color: '#FCEFEF',
                            distance: 110,
                            enable: true,
                            opacity: 0.2,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: true,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.2
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }"
        />
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
  body {
    margin-top: 100px;
    overflow: hidden;
  }

  h1 {
    margin-left: 50px;
  }
</style>
