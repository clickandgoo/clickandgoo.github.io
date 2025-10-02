// Año dinámico
      document.getElementById('year').textContent = new Date().getFullYear();

      // FAQ toggle
      document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const answer = btn.parentElement.querySelector('.faq-answer');
          answer.classList.toggle('hidden');
          const icon = btn.querySelector('.icon');
          if (icon) icon.textContent = answer.classList.contains('hidden') ? '＋' : '－';
        });
      });

      // Modal video
      const modal = document.getElementById('video-modal');
      const frame = document.getElementById('video-frame');
      document.querySelectorAll('.open-video').forEach(btn => {
        btn.addEventListener('click', () => {
          frame.src = btn.getAttribute('data-video') + '?autoplay=1';
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });
      });
      document.getElementById('close-video').addEventListener('click', () => {
        frame.src = '';
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          frame.src = '';
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      });

      // Formulario (simulación de envío)
      const form = document.getElementById('contact-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.innerHTML = '<div class="text-center py-10"><h3 class="text-2xl font-bold">¡Gracias! 🎉</h3><p class="mt-2 text-gray-700">Hemos recibido tu mensaje. Te contactaremos muy pronto.</p></div>';
      });