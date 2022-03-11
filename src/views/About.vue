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
            Sou uma Desenvolvedora Web Full-stack de 25 anos do RJ, que gosta muito de Back-end
            e tem tendência a criar páginas fofinhas mesmo ainda sendo emo por dentro.
        </p>
        <p>
            Meus pontos fortes são a organização, proatividade e curiosidade. Também gosto muito
            de aprender, principalmente sobre assuntos desafiadores. O que, na hora de escolher
            um curso na faculdade, me levou ao curso mais difícil que eu poderia pensar: Física
            Computacional. Spoiler: não estava errada.
        </p>
        <p>
            Apesar de Física ter sido minha matéria preferida no Ensino Médio (e Educação Física
            a menos preferida), a parte computacional me chamou atenção pois até então o máximo
            de contato que tive com programação foi para colocar glitter e player de música no
            Tumblr. Achei que seria uma habilidade boa para se desenvolver.
        </p>
        <p>
            O foco do curso era resolução de problemas, e não desenvolvimento web. Porém, foi o
            grande responsável pelo desenvolvimento do meu raciocínio lógico e lógica de
            programação. Traços que se mostraram extremamente importantes quando realmente
            comecei a aprender desenvolvimento web pela Trybe.
        </p>
        <p>
            Acredito que a minha convivência com a parte lógica (e interesse por tópicos
            difíceis) me levaram à preferência por Back-end. Mas ao mesmo tempo, meu lado
            criativo sempre me faz montar projetos (e quadros do Trello, apresentações no Canva,
            rascunhos...) e colocar detalhes bonitinhos.
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

  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
</style>
