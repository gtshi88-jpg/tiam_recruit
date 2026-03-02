document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".job-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 順番に遅延をつける
        containers.forEach((container, index) => {
          setTimeout(() => {
            container.classList.add("show");
          }, index * 500); // 0.5秒ずつ遅延
        });
        observer.disconnect(); // 1回だけ発火
      }
    });
  }, { threshold: 0.3 });

  if (containers.length > 0) {
    observer.observe(containers[0].parentElement); // セクション監視
  }
});

document.addEventListener("DOMContentLoaded", () => {
    // 監視するオプション（画面の20%が入ったら発火）
    const options = {
        root: null, // ビューポートを基準
        rootMargin: "0px",
        threshold: 0.2 
    };

    // 交差した（画面に入った）時の処理
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面に入ったら 'is-visible' クラスを付与してアニメーション開始
                entry.target.classList.add("is-visible");
                // 一度表示したら監視を解除（パフォーマンス向上）
                observer.unobserve(entry.target);
            }
        });
    };

    // オブザーバーの生成
    const observer = new IntersectionObserver(handleIntersect, options);

    // 監視対象の要素を取得して監視を開始
    // .animate-on-scroll クラスがついている全ての要素を監視
    const targets = document.querySelectorAll(".animate-on-scroll");
    targets.forEach(target => {
        observer.observe(target);
    });
});