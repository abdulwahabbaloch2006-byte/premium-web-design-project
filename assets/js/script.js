document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  if (contactForm && formResponse) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      if (!data.name || !data.email || !data.message) {
        formResponse.textContent = 'Please fill in the required fields before sending.';
        formResponse.classList.remove('hidden', 'border-emerald-500/30', 'bg-emerald-500/10', 'text-emerald-200');
        formResponse.classList.add('border-amber-500/30', 'bg-amber-500/10', 'text-amber-200');
        return;
      }

      formResponse.textContent = 'Thanks! Your message has been sent successfully.';
      formResponse.classList.remove('hidden', 'border-amber-500/30', 'bg-amber-500/10', 'text-amber-200');
      formResponse.classList.add('border-emerald-500/30', 'bg-emerald-500/10', 'text-emerald-200');
      contactForm.reset();
    });
  }
});
