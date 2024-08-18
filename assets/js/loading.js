document.addEventListener('DOMContentLoaded', async () => {
  const LoadingDom = document.querySelector('#loading-wrapper');
  const HTMLDom = document.querySelector('html');

  await new Promise(resolve => {
    setTimeout(() => {
      LoadingDom.style.opacity = '0';
      HTMLDom.removeAttribute('noScroll');
      resolve();
    }, 1000);
  });

  setTimeout(() => {
    LoadingDom.style.display = 'none';
  }, 400);
});