document.addEventListener('DOMContentLoaded', () => {
  const ScrollTopIcon = document.querySelector('#top-scroll-icon');
  const targetDom = document.querySelector('#demo-about-section');

  const observerCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      // オプションで監視viewportの高さを大きい値にすることによって、上から下に一度スクロールで入ってきたら監視範囲の外に出ることはない
      ScrollTopIcon.style.opacity = '0.5';
    } else {
      ScrollTopIcon.style.opacity = '0';
    }
  };

  const observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0,
    // rootをnullにしているので監視はviewportになる
    // rootMarginで監視するviewportの余白を変更する
    rootMargin: '10000px 0px -160px 0px'
  });

  observer.observe(targetDom);

  // window.addEventListener('scroll', () => {
  //   if (ScrollTopIcon.style.opacity !== '0.5' && window.scrollY > 300) {
  //     ScrollTopIcon.style.opacity = '0.5';
  //   }
  // });

  ScrollTopIcon.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: "smooth" });
  });

  window.addEventListener('unload', () => {
    observer.disconnect();
  });
});