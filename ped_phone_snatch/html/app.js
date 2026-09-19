const prompt = document.getElementById('prompt');
const key = document.getElementById('key');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const distance = document.getElementById('distance');

let hideTimer;

window.addEventListener('message', (event) => {
    const data = event.data || {};

    if (data.action === 'show') {
        window.clearTimeout(hideTimer);

        prompt.style.left = `${Math.max(0.04, Math.min(0.96, data.x)) * 100}%`;
        prompt.style.top = `${Math.max(0.08, Math.min(0.94, data.y)) * 100}%`;
        key.textContent = data.key || 'E';
        title.textContent = data.title || 'Snatch phone';
        subtitle.textContent = data.subtitle || 'Take it before they notice';
        distance.textContent = `${Number(data.distance || 0).toFixed(1)}m`;

        prompt.classList.add('visible');
        prompt.setAttribute('aria-hidden', 'false');
        return;
    }

    if (data.action === 'hide') {
        prompt.classList.remove('visible');
        prompt.setAttribute('aria-hidden', 'true');
        hideTimer = window.setTimeout(() => {
            prompt.style.left = '-9999px';
        }, 180);
    }
});
