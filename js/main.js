// Initialize Navbar and Footer
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (document.getElementById('navbar')) {
    new Navbar({ currentPage });
  }

  if (document.getElementById('footer')) {
    new Footer();
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-white/95', 'dark:bg-gray-900/95');
      } else {
        nav.classList.remove('shadow-lg', 'bg-white/95', 'dark:bg-gray-900/95');
      }
    });
  }
});

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function showToast(message, type = 'success') {
  const colors = {
    success: 'bg-pink-500',
    error: 'bg-purple-600',
    warning: 'bg-yellow-500',
    info: 'bg-cyan-500'
  };

  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 right-6 ${colors[type]} text-white px-6 py-3 rounded-xl shadow-2xl z-[100] transform translate-y-0 opacity-0 transition-all duration-300 flex items-center gap-3`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function toggleFaq(btn) {
  const content = btn.parentElement.querySelector('.faq-content');
  const icon = btn.querySelector('.faq-icon');
  const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

  document.querySelectorAll('.faq-content').forEach(c => {
    c.style.maxHeight = '0px';
    c.style.paddingBottom = '0';
  });
  document.querySelectorAll('.faq-icon').forEach(i => {
    i.style.transform = 'rotate(0deg)';
  });

  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.paddingBottom = '1.5rem';
    icon.style.transform = 'rotate(180deg)';
  }
}
