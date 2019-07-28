/* eslint-env jquery, browser */
$(document).ready(() => {
  const gradients = ['#B06AB3, #4568DC', '#78ffd6, #007991', '#2F80ED, #56CCF2', '#F2C94C, #F2994A'];
  // if (0)
  $('body').css('background',
    'linear-gradient(to right, $colors)'.replace('$colors',
      gradients[Math.floor(Math.random() * gradients.length)]));

  $('.answer').click(() => {
    console.log(this.innerHTML);
    location.reload();
  });
  // Store data
  let counterQuestions = sessionStorage.getItem('counterQuestions');
  if (counterQuestions) {
    if (window.location.pathname === '/') {
      counterQuestions++;
    }
    sessionStorage.setItem('counterQuestions', counterQuestions);
    console.log(counterQuestions);
    if (counterQuestions >= 5) {
      window.location = '/results';
    }
  }
  if (!counterQuestions) {
    sessionStorage.setItem('counterQuestions', 0);
  }
  console.log(counterQuestions);


  // $('body').css('background',
  // 'radial-gradient(circle, $colors)'.replace('$colors',
  // gradients[Math.floor(Math.random() * gradients.length)]));

  // Initialize a new instance of Particles to disintegrate/integrate the button
  // const particlesOpts = {
  //   type: 'rectangle',
  //   duration: 500,
  //   easing: 'easeOutQuad',
  //   color: '#091388',
  //   direction: 'top',
  //   size: 8
  // };
  // const bttn = document.querySelector('.btn');
  // const particles = new Particles(bttn, particlesOpts);
  //
  // let buttonVisible = true;
  // bttn.addEventListener('click', () => {
  //   if (!particles.isAnimating() && buttonVisible) {
  //     particles.disintegrate();
  //     buttonVisible = !buttonVisible;
  //   }
  // });

  // Disintegrate the button into particles
  // particles.disintegrate();

  // particles.integrate(); // would do the opposite
  // Wrap every letter in a span
  $('.ml6 .letters').each(() => {
    // eslint-disable-next-line no-control-regex
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  // console.log(anime);
  //
  // // if (0)
  // anime.timeline({ loop: false, duration: 500 })
  //   .add({
  //     targets: '.ml6 .letter',
  //     translateY: ['1.1em', 0],
  //     translateZ: 0,
  //     duration: 750,
  //     delay: (el, i) => (50 * i)
  //   }).add({
  //     targets: '.ml6',
  //     opacity: 0,
  //     duration: 1000,
  //     delay: 1000,
  //     easing: 'easeOutExpo',
  //   });
});
