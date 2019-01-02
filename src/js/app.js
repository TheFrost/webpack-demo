// main styles
import '../sass/app.scss';

document.getElementById('button').addEventListener('click', e => {
  e.target.classList.toggle('active');

  import('./module').then((module) => {
    const mod = new module.default();
    console.log(mod.getSum());
  });
});