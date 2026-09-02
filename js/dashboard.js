(function () {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    window.location.href = 'login.html';
    return;
  }

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Mock data
  const rewards = {
    points: 840,
    tier: 'Sprinkle Member',
    treatsBought: 14,
    nextFreeAt: 1000,
  };

  const favorites = [
    { name: 'Strawberry Cotton Candy', type: 'Cotton Candy', price: '$6', image: 'assets/images/cotton-candy.jpg' },
    { name: 'Classic Funnel Cake', type: 'Funnel Cake', price: '$7', image: 'assets/images/funnel-cake.jpg' },
    { name: 'Strawberry Dreamsicle Cake', type: 'Funnel Cake', price: '$10', image: 'assets/images/dessert2.jpg' },
    { name: 'Blue Raspberry Cloud', type: 'Cotton Candy', price: '$6', image: 'assets/images/dessert3.jpg' },
  ];

  const orders = [
    { treats: 'Classic Funnel Cake + 2 Cotton Candy cones', date: 'Aug 30, 2026', total: '$19', points: 60 },
    { treats: 'Jumbo Cotton Candy (Bubblegum)', date: 'Aug 17, 2026', total: '$7', points: 25 },
    { treats: 'Strawberry Dreamsicle Cake', date: 'Jul 26, 2026', total: '$10', points: 35 },
  ];

  function buildFavoritesHtml() {
    return favorites
      .map(
        (f) => `
      <div class="glass-card rounded-2xl overflow-hidden card-hover">
        <div class="h-44 overflow-hidden">
          <img src="${f.image}" alt="${f.name}" class="w-full h-full object-cover">
        </div>
        <div class="p-5">
          <div class="text-[10px] font-bold uppercase tracking-wider text-fuchsia-500 mb-1">${f.type}</div>
          <h3 class="font-bold text-gray-900 dark:text-white mb-1">${f.name}</h3>
          <div class="flex items-center justify-between mt-3">
            <span class="text-xl font-bold gradient-text">${f.price}</span>
            <button class="text-sm font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-500">Order</button>
          </div>
        </div>
      </div>
    `
      )
      .join('');
  }

  function buildOrdersHtml() {
    return orders
      .map(
        (o) => `
      <div class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60">
        <div class="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shrink-0">
          <i class="fas fa-candy-cane w-5 h-5 text-white"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-sm text-gray-900 dark:text-white truncate">${o.treats}</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">${o.date}</p>
        </div>
        <div class="text-right shrink-0">
          <div class="font-bold text-gray-900 dark:text-white">${o.total}</div>
          <div class="text-xs text-pink-500 font-medium">+${o.points} pts</div>
        </div>
      </div>
    `
      )
      .join('');
  }

  // Welcome & profile
  const welcomeEl = document.getElementById('welcomeMessage');
  if (welcomeEl) {
    const name = user.name || 'Sweet Friend';
    welcomeEl.textContent = `Welcome back, ${name}!`;
  }

  const pointsEl = document.getElementById('pointsTotal');
  if (pointsEl) pointsEl.textContent = rewards.points;

  const treatsEl = document.getElementById('treatsBought');
  if (treatsEl) treatsEl.textContent = rewards.treatsBought;

  const tierEl = document.getElementById('tierName');
  if (tierEl) tierEl.textContent = rewards.tier.split(' ')[0];

  const favCountEl = document.getElementById('favoritesCount');
  if (favCountEl) favCountEl.textContent = favorites.length;

  // Progress bar
  const fill = document.getElementById('progressBarFill');
  const progressText = document.getElementById('progressText');
  if (fill && progressText) {
    const pct = Math.min(100, Math.round((rewards.points / rewards.nextFreeAt) * 100));
    fill.style.width = pct + '%';
    const remaining = rewards.nextFreeAt - rewards.points;
    progressText.textContent = remaining > 0
      ? `${remaining} points to a free classic cone. You get a point for every $1 you spend!`
      : 'You\'ve earned a free classic cone — redeem it at your next visit!';
  }

  // Orders
  const ordersContainer = document.getElementById('ordersContainer');
  if (ordersContainer) ordersContainer.innerHTML = buildOrdersHtml();

  // Favorites
  const favContainer = document.getElementById('favoritesContainer');
  if (favContainer) favContainer.innerHTML = buildFavoritesHtml();

  // Profile + logout
  const profileContainer = document.getElementById('profileContainer');
  if (profileContainer) {
    profileContainer.innerHTML = `
      <div class="glass-card rounded-2xl p-8">
        <div class="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div class="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            ${(user.name || 'S').charAt(0).toUpperCase()}
          </div>
          <div>
            <p class="font-bold text-gray-900 dark:text-white">${user.name || 'Sweet Friend'}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">${user.email || ''}</p>
          </div>
        </div>
        <div class="space-y-2 text-sm mt-4">
          <div class="flex justify-between"><span class="text-gray-500 dark:text-gray-400">Phone:</span><span class="font-medium text-gray-900 dark:text-white">${user.phone || 'Not set'}</span></div>
          <div class="flex justify-between"><span class="text-gray-500 dark:text-gray-400">Rewards Tier:</span><span class="font-medium text-gray-900 dark:text-white">${rewards.tier}</span></div>
          <div class="flex justify-between"><span class="text-gray-500 dark:text-gray-400">Member Since:</span><span class="font-medium text-gray-900 dark:text-white">2025</span></div>
        </div>
        <button id="logoutDashboardBtn" class="w-full mt-6 px-4 py-3 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-xl text-sm font-bold hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-all flex items-center justify-center gap-2">
          <i class="fas fa-right-from-bracket"></i>
          Logout
        </button>
      </div>
    `;

    const logoutBtn = document.getElementById('logoutDashboardBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        window.location.href = 'index.html';
      });
    }
  }

  if (!welcomeEl && !pointsEl && !ordersContainer) {
    window.location.href = 'login.html';
  }
})();