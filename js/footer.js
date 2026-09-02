class Footer {
  constructor() {
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.innerHTML = `
      <footer class="bg-gray-900 dark:bg-gray-950 text-gray-300 pt-16 pb-6" role="contentinfo">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

            <div class="space-y-4 sm:col-span-2 lg:col-span-1">
              <a href="index.html" class="flex items-center space-x-2 rtl:space-x-reverse group" aria-label="Sweet Wheels - Cotton Candy &amp; Funnel Cake Food Truck - Home">
                <div class="relative w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span class="text-white text-lg leading-none" aria-hidden="true">&#127853;</span>
                  <span class="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-[11px] shadow-sm" aria-hidden="true">&#128666;</span>
                </div>
                <span class="flex flex-col leading-tight">
                  <span class="text-lg font-bold text-white">Sweet Wheels</span>
                </span>
              </a>
              <p class="text-sm leading-relaxed text-gray-400">
                Your favorite Cotton Candy &amp; Funnel Cake Food Truck! Serving up sweet memories at fairs, festivals, and events since 2018. Every bite is a celebration.
              </p>
              <div class="flex items-center space-x-3 rtl:space-x-reverse pt-2" role="list" aria-label="Social media links">
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-pink-400" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer" role="listitem">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-pink-400" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer" role="listitem">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-pink-400" aria-label="TikTok" title="TikTok" target="_blank" rel="noopener noreferrer" role="listitem">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.58-1.52V6.69h3.58z"/></svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-pink-400" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer" role="listitem">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-white font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
              <ul class="space-y-2.5" role="list" aria-label="Quick links">
                <li><a href="index.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Home</a></li>
                <li><a href="menu.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Menu</a></li>
                <li><a href="about.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>About Us</a></li>
                <li><a href="gallery.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Gallery</a></li>
                <li><a href="locations.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Locations</a></li>
                <li><a href="contact.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold text-base sm:text-lg mb-4">Our Treats</h3>
              <ul class="space-y-2.5" role="list" aria-label="Our treats">
                <li><a href="cotton-candy.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Cotton Candy</a></li>
                <li><a href="funnel-cakes.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Funnel Cakes</a></li>
                <li><a href="menu.html" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Full Menu</a></li>
                <li><a href="menu.html#catering" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Catering</a></li>
                <li><a href="menu.html#specials" class="text-sm text-gray-400 hover:text-pink-400 transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-pink-400"><span class="w-1 h-1 bg-pink-400 rounded-full shrink-0" aria-hidden="true"></span>Daily Specials</a></li>
              </ul>
            </div>

            <div class="sm:col-span-2 lg:col-span-1">
              <h3 class="text-white font-semibold text-base sm:text-lg mb-4">Find Us</h3>
              <ul class="space-y-3" role="list" aria-label="Contact information">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-pink-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-sm text-gray-300">Follow us on social media for our latest locations!</span>
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="text-sm text-gray-300">+1 (555) 987-6543</span>
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="text-sm text-gray-300">hello@sweetwheels.com</span>
                </li>
                <li class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm text-gray-300">Fridays & Weekends, 11AM - 10PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-800 pt-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
              <p class="text-sm text-gray-400">
                &copy; ${new Date().getFullYear()} Sweet Wheels Cotton Candy &amp; Funnel Cake Food Truck. All rights reserved.
              </p>
              <nav class="flex items-center gap-4 text-sm text-gray-400" aria-label="Legal links">
                <a href="#" class="hover:text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-pink-400">Privacy Policy</a>
                <span class="w-px h-3 bg-gray-700" role="separator" aria-hidden="true"></span>
                <a href="#" class="hover:text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-pink-400">Terms of Service</a>
                <span class="w-px h-3 bg-gray-700" role="separator" aria-hidden="true"></span>
                <a href="#" class="hover:text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-pink-400">Sitemap</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
