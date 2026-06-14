import { useEffect } from 'react';
export default function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      els => els.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}
