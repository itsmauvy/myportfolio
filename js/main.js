/* main.js — 절제된 모션만.
   .reveal 요소를 뷰포트 진입 시 페이드+상승. GSAP/Lenis/파티클 없음.
   reduced-motion이면 CSS가 알아서 즉시 표시하므로 여기서도 관여 안 함. */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  // 모션 끄거나 IO 미지원 → 전부 즉시 표시 (절대 안 보이는 일 없게)
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  els.forEach(function (el) { io.observe(el); });

  // 안전망: 혹시 관찰이 빗나가도 2.5초 뒤 전부 표시
  setTimeout(function () { els.forEach(function (el) { el.classList.add("is-in"); }); }, 2500);
})();
