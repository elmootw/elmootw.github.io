import { useEffect } from 'react';

// 對應 Tailwind 的 scroll-mt-24（6rem），避開固定導覽列
const NAV_OFFSET = 96;

// 直接開帶 #anchor 的網址時，把畫面捲到對應區塊。
// 區塊要等 React render 完才存在，瀏覽器原生的錨點跳轉已經來不及；
// 加上 404.html 轉址後是用 replaceState 還原路徑，更不會觸發跳轉。
// 頁內點側欄 #anchor 連結走瀏覽器原生行為，這裡只處理「初次載入」。
export default function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let timer;
    let done = false;
    const deadline = Date.now() + 3000;
    // 使用者自己動了就不要再搶捲軸
    const abort = () => { done = true; clearTimeout(timer); };
    const events = ['wheel', 'touchstart', 'keydown'];
    events.forEach((e) => window.addEventListener(e, abort, { passive: true, once: true }));

    // 版面在圖片載入後可能位移，再校正一次
    let corrections = 2;
    const tryScroll = () => {
      if (done) return;
      const el = document.getElementById(id);
      if (el) {
        // 必須指定 instant：CSS 的 scroll-behavior: smooth 會讓捲動變成動畫，
        // 而載入期間的版面位移會把動畫打斷，結果是整個沒捲到。
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'instant' });
        if (corrections-- > 0) timer = setTimeout(tryScroll, 250);
      } else if (Date.now() < deadline) {
        timer = setTimeout(tryScroll, 50);
      }
    };
    tryScroll();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, abort));
    };
  }, []);

  return null;
}
