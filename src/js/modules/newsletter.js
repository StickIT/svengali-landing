export function initNewsletter() {
  const form = document.getElementById('subscribe-form');
  const message = document.getElementById('form-message');

  if (!form) return; // sécurité si le formulaire n’existe pas

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        if (message) message.style.display = 'block';
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  });
}