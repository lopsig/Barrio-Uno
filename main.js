document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initReveal();
  initTyping();
  initMatchTicker();
  initParticles();
  initNavProgreso();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date('2026-06-18T00:00:00').getTime();

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById('count-days').textContent = String(d).padStart(2, '0');
    document.getElementById('count-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('count-minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('count-seconds').textContent = String(s).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);
  });
}

function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const phrases = [
    'Explora los grupos del Mundial 2026',
    'Colecciona los cromos de tus jugadores favoritos',
    'Conoce al equipo detrás de Barrio Uno',
    '6 grupos · 24 selecciones · 1 sueño'
  ];
  let pi = 0, ci = 0, isDeleting = false;

  function type() {
    const phrase = phrases[pi];
    if (isDeleting) {
      el.textContent = phrase.substring(0, ci--);
      if (ci < 0) { isDeleting = false; pi = (pi + 1) % phrases.length; }
    } else {
      el.textContent = phrase.substring(0, ci++);
      if (ci > phrase.length) { isDeleting = true; setTimeout(type, 2000); return; }
    }
    setTimeout(type, isDeleting ? 25 : 50);
  }

  type();
}

function initMatchTicker() {
  const container = document.querySelector('.match-ticker');
  if (!container) return;
  const rows = container.querySelectorAll('.match-row');
  if (rows.length < 2) return;

  let current = 0;
  rows.forEach((r, i) => { r.style.display = i === 0 ? '' : 'none'; });

  setInterval(() => {
    rows[current].style.display = 'none';
    current = (current + 1) % rows.length;
    rows[current].style.display = '';
  }, 4000);
}

function initParticles() {
  let canvas = document.getElementById('particles-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    document.body.prepend(canvas);
  }

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 10000));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.4 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(233, 69, 96, ${p.a})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(233, 69, 96, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  draw();
}

function initNavProgreso() {
  const badge = document.getElementById('nav-progreso');
  if (!badge) return;
  const saved = JSON.parse(localStorage.getItem('barrioCromos') || '[]');
  const total = 12;
  const done = saved.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const hue = Math.round((pct / 100) * 120);
  badge.textContent = `${pct}% (${done}/${total})`;
  badge.style.color = `hsl(${hue}, 85%, 50%)`;
}
