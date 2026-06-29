// Fallback database to prevent CORS issues if opened via file:// protocol
const fallbackProducts = [
  {
    "id": 1,
    "name": "Nordic Lounge Sessel",
    "price": 249.90,
    "category": "Wohnzimmer",
    "description": "Erleben Sie ultimativen Komfort mit unserem Nordic Lounge Sessel. Perfekt für entspannte Leseabende in stilvollem Design.",
    "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.8,
    "popular": true,
    "new": false
  },
  {
    "id": 2,
    "name": "Eichenholz Esstisch 'Silva'",
    "price": 599.00,
    "category": "Esszimmer",
    "description": "Massiver Esstisch aus nachhaltig angebautem Eichenholz. Bietet Platz für bis zu 6 Personen für gemütliche Abendessen.",
    "image": "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.5,
    "popular": false,
    "new": true
  },
  {
    "id": 3,
    "name": "Sofa 'Cloud' 3-Sitzer",
    "price": 899.00,
    "category": "Wohnzimmer",
    "description": "Das Sofa 'Cloud' macht seinem Namen alle Ehre. Superweiche Polsterung und ein modernes, zeitloses Design.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.9,
    "popular": true,
    "new": false
  },
  {
    "id": 4,
    "name": "Polsterbett 'Somnia'",
    "price": 750.00,
    "category": "Schlafzimmer",
    "description": "Edles Polsterbett mit hohem Kopfteil und integriertem Bettkasten für maximalen Stauraum und besten Schlafkomfort.",
    "image": "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.7,
    "popular": false,
    "new": false
  },
  {
    "id": 5,
    "name": "Schreibtisch 'WorkSpace'",
    "price": 329.90,
    "category": "Büro",
    "description": "Elektrisch höhenverstellbarer Schreibtisch für ergonomisches Arbeiten im Home-Office.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.6,
    "popular": true,
    "new": true
  },
  {
    "id": 6,
    "name": "Bürostuhl 'ErgoPro'",
    "price": 289.00,
    "category": "Büro",
    "description": "Premium Bürostuhl mit 3D-Armlehnen, Lordosenstütze und atmungsaktivem Netzrücken.",
    "image": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.4,
    "popular": false,
    "new": false
  },
  {
    "id": 7,
    "name": "Nachttisch 'Luma'",
    "price": 89.90,
    "category": "Schlafzimmer",
    "description": "Kompakter Nachttisch mit zwei Schubladen im skandinavischen Stil. Perfekte Ergänzung für jedes Schlafzimmer.",
    "image": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.7,
    "popular": true,
    "new": false
  },
  {
    "id": 8,
    "name": "Sideboard 'Vintage'",
    "price": 459.00,
    "category": "Wohnzimmer",
    "description": "Stilvolles Sideboard im Retro-Look aus Mangoholz. Viel Stauraum für Ihre persönlichen Schätze.",
    "image": "https://images.unsplash.com/photo-1601392740426-907c7b028119?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.3,
    "popular": false,
    "new": false
  },
  {
    "id": 9,
    "name": "Kleiderschrank 'Space'",
    "price": 899.90,
    "category": "Schlafzimmer",
    "description": "Geräumiger Schwebetürenschrank mit integrierter LED-Beleuchtung und Spiegel.",
    "image": "https://images.unsplash.com/photo-1595526114101-11b332b73bc2?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.8,
    "popular": false,
    "new": true
  },
  {
    "id": 10,
    "name": "Esstischstuhl 'Velvet'",
    "price": 119.00,
    "category": "Esszimmer",
    "description": "Komfortabler Stuhl mit weichem Samtbezug und goldenen Metallbeinen. Verleiht Ihrem Esszimmer einen Hauch von Luxus.",
    "image": "https://images.unsplash.com/photo-1503602642458-1428384a6018?w=600&auto=format&fit=crop&q=80",
    "video": "https://www.w3schools.com/html/mov_bbb.mp4",
    "rating": 4.6,
    "popular": false,
    "new": true
  }
];

// Active state values
let products = [];
let cart = JSON.parse(localStorage.getItem('lt_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('lt_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('lt_current_user')) || null;

// --- Toast Notification Helper ---
function showNotification(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'info') icon = '❤️';

  toast.innerHTML = `<span style="font-size: 1.15rem;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  // Slide out and destroy element
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    }, 300);
  }, 2700);
}

// --- Theme Toggle Logic ---
function initTheme() {
  const savedTheme = localStorage.getItem('lt_theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  updateThemeToggleUI();

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('lt_theme', isDark ? 'dark' : 'light');
      updateThemeToggleUI();
    });
  }
}

function updateThemeToggleUI() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  const isDark = document.body.classList.contains('dark-theme');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

// Load initial databases
async function loadProducts() {
  initTheme();
  try {
    const response = await fetch('./data/products.json');
    if (!response.ok) throw new Error('Fetch failed');
    products = await response.json();
  } catch (error) {
    console.warn("Could not fetch products.json due to CORS/Network. Using local fallback products.", error);
    products = fallbackProducts;
  }
  
  updateGlobalHeaderUI();
  initPage();
}

function initPage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);

  if (page === 'index.html' || page === '') {
    renderHome();
  } else if (page === 'shop.html') {
    renderCatalog();
  } else if (page === 'detail.html') {
    renderDetail();
  } else if (page === 'contact.html') {
    initContactForm();
  } else if (page === 'cart.html') {
    renderCart();
  } else if (page === 'profile.html') {
    renderProfile();
  }

  initNewsletter();
}

// --- Global UI Elements (Header Cart Count & Session Nav) ---
function updateGlobalHeaderUI() {
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalItems;
    cartCountEl.style.display = totalItems > 0 ? 'inline-block' : 'none';
  }

  const userNavEl = document.getElementById('user-nav');
  if (userNavEl) {
    if (currentUser) {
      userNavEl.innerHTML = `<a href="profile.html" style="font-weight: 600; color: var(--primary-color);">👋 ${currentUser.username}</a>`;
    } else {
      userNavEl.innerHTML = `<a href="profile.html">Anmelden</a>`;
    }
  }
}

// --- Cart Operations ---
window.addToCart = function(productId, qty = 1) {
  productId = parseInt(productId);
  const existingItemIndex = cart.findIndex(item => item.productId === productId);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += parseInt(qty);
  } else {
    cart.push({ productId, qty: parseInt(qty) });
  }
  saveCart();
  showNotification("Artikel wurde dem Warenkorb hinzugefügt!", "success");
};

window.removeFromCart = function(productId) {
  productId = parseInt(productId);
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  renderCart();
  showNotification("Artikel aus dem Warenkorb entfernt.", "info");
};

window.updateCartQty = function(productId, qty) {
  productId = parseInt(productId);
  const qtyVal = parseInt(qty);
  if (qtyVal <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(item => item.productId === productId);
  if (item) {
    item.qty = qtyVal;
    saveCart();
    renderCart();
    showNotification("Warenkorb aktualisiert.", "success");
  }
};

function saveCart() {
  localStorage.setItem('lt_cart', JSON.stringify(cart));
  updateGlobalHeaderUI();
}

// --- Wishlist Operations ---
window.toggleWishlist = function(event, productId) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  productId = parseInt(productId);
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showNotification("Aus Merkliste entfernt.", "info");
  } else {
    wishlist.push(productId);
    showNotification("Zur Merkliste hinzugefügt!", "success");
  }
  localStorage.setItem('lt_wishlist', JSON.stringify(wishlist));
  
  // Re-render items on active catalog grids if any
  const page = window.location.pathname.split('/').pop();
  if (page === 'shop.html') {
    renderCatalog();
  } else if (page === 'index.html' || page === '') {
    renderHome();
  } else if (page === 'detail.html') {
    renderDetail();
  } else if (page === 'profile.html') {
    renderProfile();
  }
};

window.isInWishlist = function(productId) {
  return wishlist.includes(parseInt(productId));
};

// --- Home Page ---
function renderHome() {
  const popularContainer = document.getElementById('popular-products');
  const newContainer = document.getElementById('new-products');

  if (popularContainer) {
    const popular = products.filter(p => p.popular);
    popularContainer.innerHTML = popular.map(p => createProductCard(p)).join('');
  }

  if (newContainer) {
    const newItems = products.filter(p => p.new);
    newContainer.innerHTML = newItems.map(p => createProductCard(p)).join('');
  }
}

// --- Product Catalog Page ---
let activeCategory = 'All';

function renderCatalog() {
  const grid = document.getElementById('catalog-grid');
  const filtersContainer = document.getElementById('category-filters');
  if (!grid) return;

  const categories = ['All', ...new Set(products.map(p => p.category))];

  if (filtersContainer) {
    filtersContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === activeCategory ? 'active' : ''}" onclick="filterCategory('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  const filtered = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

window.filterCategory = function(category) {
  activeCategory = category;
  renderCatalog();
};

// Unified dynamic card builder
function createProductCard(product) {
  const isWish = isInWishlist(product.id);
  return `
    <article class="card">
      <button class="wishlist-overlay-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(event, ${product.id})" aria-label="Zur Merkliste hinzufügen">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>
      <div style="height: 200px; overflow: hidden; position: relative; cursor: pointer;" onclick="location.href='detail.html?id=${product.id}'">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        ${product.new ? '<span style="position: absolute; top: 10px; left: 10px; background: var(--secondary-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">NEW</span>' : ''}
        ${product.popular ? '<span style="position: absolute; top: 10px; left: 10px; background: var(--primary-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">HOT</span>' : ''}
      </div>
      <div style="padding: var(--spacing-lg);">
        <span style="font-size: var(--text-xs); color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${product.category}</span>
        <h3 style="font-size: var(--text-lg); margin: var(--spacing-xs) 0 var(--spacing-sm); cursor: pointer;" onclick="location.href='detail.html?id=${product.id}'">${product.name}</h3>
        <p style="color: var(--text-muted); font-size: var(--text-sm); height: 4.5em; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; margin-bottom: var(--spacing-md);">${product.description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md);">
          <span style="font-size: var(--text-xl); font-weight: 700; font-family: var(--font-headings);">CHF ${product.price.toFixed(2)}</span>
          <a href="detail.html?id=${product.id}" class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: var(--text-xs);">Details</a>
        </div>
        <button class="btn" style="width: 100%; padding: 0.5rem;" onclick="addToCart(${product.id}, 1)">In den Warenkorb 🛒</button>
      </div>
    </article>
  `;
}

// --- Product Detail Page ---
function renderDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = products.find(p => p.id === productId);

  const container = document.getElementById('detail-container');
  if (!container) return;

  if (!product) {
    container.innerHTML = `<h2>Produkt nicht gefunden</h2><a href="shop.html" class="btn">Zurück zum Shop</a>`;
    return;
  }

  const isWish = isInWishlist(product.id);

  container.innerHTML = `
    <div class="responsive-split-grid">
      <div>
        <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); margin-bottom: var(--spacing-lg); position: relative;">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; display: block;">
          <button class="wishlist-overlay-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(event, ${product.id})" style="top: 20px; right: 20px; width: 44px; height: 44px;" aria-label="Zur Merkliste hinzufügen">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
          <video controls style="width: 100%; display: block;">
            <source src="${product.video}" type="video/mp4">
            Ihr Browser unterstützt keine Videos.
          </video>
        </div>
      </div>
      <div>
        <span style="text-transform: uppercase; color: var(--text-muted); font-size: var(--text-sm); font-weight: 600;">${product.category}</span>
        <h1 style="font-size: var(--text-3xl); margin: var(--spacing-xs) 0 var(--spacing-md);">${product.name}</h1>
        <p style="font-size: var(--text-xl); font-weight: 700; color: var(--primary-color); margin-bottom: var(--spacing-lg); font-family: var(--font-headings);">CHF ${product.price.toFixed(2)}</p>
        <p style="color: var(--text-muted); margin-bottom: var(--spacing-xl); line-height: 1.6;">${product.description}</p>
        
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: var(--spacing-xl); background-color: var(--panel-bg); margin-bottom: var(--spacing-md);">
          <h3 style="margin-bottom: var(--spacing-md);">Dieses Produkt bestellen</h3>
          <form id="order-form" onsubmit="handleDirectOrderSubmit(event, ${product.id})">
            <div class="form-group">
              <label>Menge</label>
              <input type="number" min="1" max="99" value="1" id="order-qty" required>
            </div>
            <div style="display: flex; gap: var(--spacing-sm); margin-top: var(--spacing-lg);">
              <button type="submit" class="btn" style="flex: 2;">Direkt bestellen</button>
              <button type="button" class="btn btn-secondary" style="flex: 3;" onclick="addToCart(${product.id}, document.getElementById('order-qty').value)">In den Warenkorb 🛒</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

// Single item direct order checkout
window.handleDirectOrderSubmit = function(event, productId) {
  event.preventDefault();
  const qty = parseInt(document.getElementById('order-qty').value);
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (!currentUser) {
    showNotification("Bitte loggen Sie sich ein, um zu bestellen.", "error");
    setTimeout(() => { location.href = 'profile.html'; }, 1000);
    return;
  }

  const newOrder = {
    orderId: 'ORD-' + Math.floor(Math.random() * 900000 + 100000),
    date: new Date().toLocaleDateString('de-CH'),
    items: [{ name: product.name, qty: qty, price: product.price }],
    total: product.price * qty,
    status: 'In Bearbeitung'
  };

  saveUserOrder(newOrder);
  alert(`Bestellung erfolgreich abgeschlossen!\nBestellnummer: ${newOrder.orderId}\nGesamtsumme: CHF ${newOrder.total.toFixed(2)}`);
  location.href = 'profile.html';
};

// --- Shopping Cart Page (`cart.html`) ---
function renderCart() {
  const container = document.getElementById('cart-page-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: var(--spacing-xxl) 0;">
        <h2 style="margin-bottom: var(--spacing-md);">Ihr Warenkorb ist leer</h2>
        <p style="color: var(--text-muted); margin-bottom: var(--spacing-lg);">Entdecken Sie unsere Produkte und legen Sie diese in den Warenkorb.</p>
        <a href="shop.html" class="btn">Zum Shop</a>
      </div>
    `;
    return;
  }

  let totalAmount = 0;
  let rowsHtml = '';

  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.productId);
    if (!p) return;

    const rowTotal = p.price * item.qty;
    totalAmount += rowTotal;

    rowsHtml += `
      <tr>
        <td data-label="Produkt">
          <div style="display: flex; align-items: center; gap: var(--spacing-md);">
            <img src="${p.image}" alt="${p.name}" class="cart-item-img">
            <div>
              <h4 style="font-size: var(--text-base);">${p.name}</h4>
              <span style="font-size: var(--text-xs); color: var(--text-muted);">${p.category}</span>
            </div>
          </div>
        </td>
        <td data-label="Preis">CHF ${p.price.toFixed(2)}</td>
        <td data-label="Anzahl">
          <input type="number" min="1" max="99" value="${item.qty}" class="cart-qty-input" onchange="updateCartQty(${p.id}, this.value)">
        </td>
        <td data-label="Total">CHF ${rowTotal.toFixed(2)}</td>
        <td data-label="Aktion">
          <button class="cart-remove-btn" onclick="removeFromCart(${p.id})">Entfernen</button>
        </td>
      </tr>
    `;
  });

  container.innerHTML = `
    <div class="cart-layout-grid">
      <div>
        <table class="cart-table">
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Preis</th>
              <th>Anzahl</th>
              <th>Total</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
      <div>
        <div class="cart-total-box">
          <h3 style="margin-bottom: var(--spacing-md); font-family: var(--font-headings); border-bottom: 1px solid var(--border-color); padding-bottom: var(--spacing-sm);">Bestellübersicht</h3>
          <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: var(--text-lg); margin-bottom: var(--spacing-lg);">
            <span>Gesamttotal:</span>
            <span>CHF ${totalAmount.toFixed(2)}</span>
          </div>

          <h4 style="margin-bottom: var(--spacing-sm); border-top: 1px solid var(--border-color); padding-top: var(--spacing-md);">Versandadresse &amp; Zahlung</h4>
          <form id="checkout-form" onsubmit="handleCartCheckout(event, ${totalAmount})">
            <div class="form-group">
              <label>Name</label>
              <input type="text" id="check-name" value="${currentUser ? currentUser.username : ''}" required>
            </div>
            <div class="form-group">
              <label>Lieferadresse</label>
              <textarea id="check-address" placeholder="Strasse, PLZ, Ort" required rows="3"></textarea>
            </div>
            <div class="form-group">
              <label>Zahlungsart</label>
              <select id="check-payment" required>
                <option value="Kreditkarte">Kreditkarte</option>
                <option value="TWINT">TWINT</option>
                <option value="Rechnung">Rechnung</option>
              </select>
            </div>
            <button type="submit" class="btn" style="width: 100%; margin-top: var(--spacing-sm);">Jetzt kostenpflichtig bestellen</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// Bulk checkout
window.handleCartCheckout = function(event, totalAmount) {
  event.preventDefault();
  if (!currentUser) {
    showNotification("Bitte loggen Sie sich ein, um zu bestellen.", "error");
    setTimeout(() => { location.href = 'profile.html'; }, 1000);
    return;
  }

  const name = document.getElementById('check-name').value;
  const address = document.getElementById('check-address').value;
  
  const orderItems = cart.map(item => {
    const p = products.find(prod => prod.id === item.productId);
    return { name: p.name, qty: item.qty, price: p.price };
  });

  const newOrder = {
    orderId: 'ORD-' + Math.floor(Math.random() * 900000 + 100000),
    date: new Date().toLocaleDateString('de-CH'),
    items: orderItems,
    total: totalAmount,
    status: 'In Bearbeitung',
    shippingAddress: address
  };

  saveUserOrder(newOrder);

  // Clear cart
  cart = [];
  saveCart();

  alert(`Bestellung erfolgreich abgeschlossen!\nBestellnummer: ${newOrder.orderId}\nZahlung: ${document.getElementById('check-payment').value}\nTotal: CHF ${totalAmount.toFixed(2)}`);
  location.href = 'profile.html';
};

// --- User Profiles & Auth Pages (`profile.html`) ---
let activeAuthTab = 'login';

window.switchAuthTab = function(tab) {
  activeAuthTab = tab;
  renderProfile();
};

// Handle account order history saving
function saveUserOrder(order) {
  if (!currentUser) return;
  const registeredUsers = JSON.parse(localStorage.getItem('lt_users')) || [];
  const uIndex = registeredUsers.findIndex(u => u.username === currentUser.username);
  if (uIndex > -1) {
    if (!registeredUsers[uIndex].orders) {
      registeredUsers[uIndex].orders = [];
    }
    registeredUsers[uIndex].orders.unshift(order);
    localStorage.setItem('lt_users', JSON.stringify(registeredUsers));
    
    // Sync current session state
    currentUser.orders = registeredUsers[uIndex].orders;
    localStorage.setItem('lt_current_user', JSON.stringify(currentUser));
  }
}

function renderProfile() {
  const container = document.getElementById('profile-page-container');
  if (!container) return;

  // Render Login/Register form if user is not authenticated
  if (!currentUser) {
    container.innerHTML = `
      <div class="auth-container">
        <div class="auth-tabs">
          <div class="auth-tab ${activeAuthTab === 'login' ? 'active' : ''}" onclick="switchAuthTab('login')">Anmelden</div>
          <div class="auth-tab ${activeAuthTab === 'register' ? 'active' : ''}" onclick="switchAuthTab('register')">Registrieren</div>
        </div>
        
        ${activeAuthTab === 'login' ? `
          <form onsubmit="handleLoginSubmit(event)">
            <div class="form-group">
              <label>Benutzername</label>
              <input type="text" id="login-username" required>
            </div>
            <div class="form-group">
              <label>Passwort</label>
              <input type="password" id="login-password" required>
            </div>
            <button type="submit" class="btn" style="width: 100%; margin-top: var(--spacing-sm);">Einloggen</button>
          </form>
        ` : `
          <form onsubmit="handleRegisterSubmit(event)">
            <div class="form-group">
              <label>Benutzername</label>
              <input type="text" id="reg-username" required>
            </div>
            <div class="form-group">
              <label>E-Mail-Adresse</label>
              <input type="email" id="reg-email" required>
            </div>
            <div class="form-group">
              <label>Passwort</label>
              <input type="password" id="reg-password" required>
            </div>
            <button type="submit" class="btn" style="width: 100%; margin-top: var(--spacing-sm);">Registrieren</button>
          </form>
        `}
      </div>
    `;
    return;
  }

  // User details, Wishlist, Order History
  const history = currentUser.orders || [];
  let historyHtml = history.length === 0 
    ? '<p style="color: var(--text-muted);">Sie haben bisher noch keine Bestellungen getätigt.</p>' 
    : history.map(order => `
        <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: var(--spacing-md); margin-bottom: var(--spacing-md); background-color: var(--bg-color);">
          <div style="display: flex; justify-content: space-between; font-weight: 600; margin-bottom: var(--spacing-xs);">
            <span>Bestellung: ${order.orderId}</span>
            <span style="color: var(--primary-color);">${order.status}</span>
          </div>
          <p style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--spacing-sm);">Datum: ${order.date}</p>
          <ul style="padding-left: 20px; font-size: var(--text-sm);">
            ${order.items.map(item => `<li>${item.qty}x ${item.name} (CHF ${item.price.toFixed(2)})</li>`).join('')}
          </ul>
          <div style="text-align: right; font-weight: 700; margin-top: var(--spacing-sm); font-size: var(--text-base);">
            Gesamtsumme: CHF ${order.total.toFixed(2)}
          </div>
        </div>
      `).join('');

  // Render Wishlist
  const wishItems = products.filter(p => wishlist.includes(p.id));
  let wishlistHtml = wishItems.length === 0 
    ? '<p style="color: var(--text-muted);">Ihre Merkliste ist leer.</p>' 
    : `<div class="grid-container">${wishItems.map(p => createProductCard(p)).join('')}</div>`;

  container.innerHTML = `
    <div class="profile-layout-grid">
      <div>
        <div class="cart-total-box" style="text-align: center;">
          <div style="width: 80px; height: 80px; border-radius: var(--radius-full); background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold; margin: 0 auto var(--spacing-md);">
            ${currentUser.username.charAt(0).toUpperCase()}
          </div>
          <h3>${currentUser.username}</h3>
          <p style="color: var(--text-muted); font-size: var(--text-sm); margin-bottom: var(--spacing-lg);">${currentUser.email}</p>
          <button class="btn btn-secondary" onclick="handleLogout()" style="width: 100%;">Abmelden</button>
        </div>
      </div>
      <div>
        <div style="margin-bottom: var(--spacing-xxl);">
          <h2 style="font-family: var(--font-headings); margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--primary-color); padding-bottom: var(--spacing-xs);">Meine Merkliste (Wishlist)</h2>
          ${wishlistHtml}
        </div>
        <div>
          <h2 style="font-family: var(--font-headings); margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--secondary-color); padding-bottom: var(--spacing-xs);">Bestellhistorie</h2>
          ${historyHtml}
        </div>
      </div>
    </div>
  `;
}

window.handleLoginSubmit = function(event) {
  event.preventDefault();
  const user = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value;

  const registeredUsers = JSON.parse(localStorage.getItem('lt_users')) || [];
  const foundUser = registeredUsers.find(u => u.username.toLowerCase() === user.toLowerCase() && u.password === pass);

  if (foundUser) {
    currentUser = foundUser;
    localStorage.setItem('lt_current_user', JSON.stringify(currentUser));
    updateGlobalHeaderUI();
    renderProfile();
    showNotification(`Willkommen zurück, ${currentUser.username}!`, "success");
  } else {
    showNotification("Ungültiger Benutzername oder Passwort.", "error");
  }
};

window.handleRegisterSubmit = function(event) {
  event.preventDefault();
  const user = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-password').value;

  const registeredUsers = JSON.parse(localStorage.getItem('lt_users')) || [];
  
  if (registeredUsers.some(u => u.username.toLowerCase() === user.toLowerCase())) {
    showNotification("Dieser Benutzername ist bereits vergeben.", "error");
    return;
  }

  const newUser = {
    username: user,
    email: email,
    password: pass,
    orders: []
  };

  registeredUsers.push(newUser);
  localStorage.setItem('lt_users', JSON.stringify(registeredUsers));

  currentUser = newUser;
  localStorage.setItem('lt_current_user', JSON.stringify(currentUser));
  updateGlobalHeaderUI();
  renderProfile();
  showNotification("Konto erfolgreich erstellt!", "success");
};

window.handleLogout = function() {
  currentUser = null;
  localStorage.removeItem('lt_current_user');
  updateGlobalHeaderUI();
  renderProfile();
  showNotification("Erfolgreich abgemeldet.", "info");
};

// --- Contact Form ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    showNotification(`Nachricht wurde erfolgreich übermittelt. Danke, ${name}!`, "success");
    form.reset();
  });
}

// --- Newsletter Subscription ---
function initNewsletter() {
  const form = document.getElementById('newsletter-footer-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification("Newsletter erfolgreich abonniert!", "success");
    form.reset();
  });
}

// Load products database on startup
document.addEventListener('DOMContentLoaded', loadProducts);
