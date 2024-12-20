import vueSvg from './assets/images/vue.svg';

const modules = import.meta.glob('./dir/*.js')

const imgDom = document.createElement('img');
imgDom.src = vueSvg;
imgDom.style.width='45px';
imgDom.style.height='45px'
document.body.append(imgDom)

console.log('vueSvg', vueSvg)

for (const path in modules) {
    modules[path]().then((mod) => {
      console.log(path, mod)
    })
  }