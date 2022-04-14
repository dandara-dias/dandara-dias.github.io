// src: https://dev.to/matteobruni/how-to-create-beautiful-particles-effect-in-vue-js-2-x-and-3-x-27d8

<template>
  <div id="app">
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
    <span>
        <br>
        <p>
            Sou Desenvolvedora Web Full-stack, com preferência por Back-end.
        </p>
        <p>
            Meus pontos fortes são a organização, proatividade e curiosidade. Também gosto muito
            de aprender, principalmente sobre assuntos desafiadores.
        </p>
        <p>
            Comecei a aprender desenvolvimento web pela Trybe.
        </p>
        <p>
            Acredito que a minha convivência com a parte lógica (e interesse por tópicos
            difíceis) me levaram à preferência por Back-end. Mas ao mesmo tempo, meu lado
            criativo sempre me faz montar projetos (e quadros do Trello, apresentações no Canva,
            rascunhos...) e colocar detalhes mais personalizados.
        </p>
        <p>
            Meus hobbies são ler, assistir séries e animes, e jogar videogame. Também planejo
            retomar um hobby antigo, aprender novos idiomas. Para saber mais, você pode me
            encontrar nas redes sociais acima (LinkedIn e GitHub).
        </p>
    </span>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
@media (max-width: 550px) and (max-height: 600px) {
    body {
    margin-top: 100px;
    overflow-x: hidden;
  }

  span {
    display: block;
    margin: 0 auto;
    align-content: center;
    margin-left: 10px;
    font-family: 'Patrick Hand', cursive;
    font-size: 98%;
    border-radius: 25px;
    border: 2px solid #B36B80;
    padding: 9px;
    width: 90%;
    }
}

@media (min-width: 551px) {
  body {
    margin-top: 100px;
    overflow-x: hidden;
  }

  span {
    display: block;
    margin: 0 auto;
    align-content: center;
    margin-left: 100px;
    font-family: 'Patrick Hand', cursive;
    font-size: 116%;
    border-radius: 25px;
    border: 2px solid #B36B80;
    padding: 20px;
    width: 80%;
    }
}

  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
</style>
