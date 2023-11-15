import App from "./App.svelte";

const mount = (el) => {
  const app = new App({
    target: el
  });

  window.app = app;

  return app;
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };


