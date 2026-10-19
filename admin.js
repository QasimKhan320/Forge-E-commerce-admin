"use strict";

(() => {
  const STORAGE_KEY = "forgeAdminDataV1";
  const SESSION_KEY = "forgeAdminSession";
  const DEFAULT_PASSWORD = "ForgeDemo2026!";
  const today = new Date("2026-10-19T12:00:00");

  const initialData = {
    profile: {
      firstName: "Ayesha",
      lastName: "Malik",
      email: "admin@forge.pk",
      phone: "+92 300 555 0198",
      password: DEFAULT_PASSWORD,
    },
    categories: [
      { id: "cat-laptops", name: "Gaming laptops", description: "Portable performance for work and play.", active: true },
      { id: "cat-pcs", name: "Gaming PCs", description: "Prebuilt desktops ready to power up.", active: true },
      { id: "cat-gpus", name: "Graphics cards", description: "GPUs for high-performance gaming builds.", active: true },
      { id: "cat-monitors", name: "Monitors", description: "High refresh-rate displays and accessories.", active: true },
      { id: "cat-peripherals", name: "Peripherals", description: "Keyboards, mice, headsets, and more.", active: true },
      { id: "cat-components", name: "PC components", description: "Quality components for custom builds.", active: true },
    ],
    products: [
      { id: "prod-titan", name: "Forge Titan RTX 5080", sku: "FG-PC-0508", category: "Gaming PCs", description: "High-performance desktop with GeForce RTX 5080 and 32 GB DDR5 memory.", price: 689900, stock: 14, threshold: 5, published: true, image: "", sold: 18 },
      { id: "prod-acer", name: "Acer Predator Helios Neo 16", sku: "AC-LT-2416", category: "Gaming laptops", description: "16-inch QHD gaming laptop with Intel Core i7 and RTX graphics.", price: 429999, stock: 3, threshold: 5, published: true, image: "", sold: 12 },
      { id: "prod-lg", name: "LG UltraGear 27GR75Q", sku: "LG-MN-2775", category: "Monitors", description: "27-inch QHD monitor with a 165 Hz refresh rate.", price: 96200, stock: 22, threshold: 6, published: true, image: "", sold: 27 },
      { id: "prod-msi", name: "MSI GeForce RTX 4070 SUPER", sku: "MS-GC-407S", category: "Graphics cards", description: "12 GB graphics card for high detail 1440p gaming.", price: 224500, stock: 0, threshold: 4, published: true, image: "", sold: 9 },
      { id: "prod-logi", name: "Logitech G Pro X TKL", sku: "LG-KB-PXTK", category: "Peripherals", description: "Compact wireless mechanical gaming keyboard.", price: 48900, stock: 18, threshold: 5, published: true, image: "", sold: 31 },
    ],
    customers: [
      { id: "cus-hamza", name: "Hamza Siddiqui", email: "hamza.s@email.pk", joined: "2025-01-12", newsletter: true },
      { id: "cus-sana", name: "Sana Raza", email: "sana.r@email.pk", joined: "2025-03-03", newsletter: true },
      { id: "cus-bilal", name: "Bilal Ahmed", email: "bilal.ahmed@email.pk", joined: "2026-10-18", newsletter: false },
      { id: "cus-mehwish", name: "Mehwish Khan", email: "mehwish.k@email.pk", joined: "2024-08-22", newsletter: true },
      { id: "cus-omar", name: "Omar Farooq", email: "omar.f@email.pk", joined: "2026-07-06", newsletter: true },
      { id: "cus-noor", name: "Noor Ali", email: "noor.ali@email.pk", joined: "2026-10-11", newsletter: false },
    ],
    orders: [
      { id: "FG-10842", customerId: "cus-hamza", date: "2026-10-19", items: ["prod-titan", "prod-logi"], total: 184900, payment: "Paid", status: "Processing" },
      { id: "FG-10841", customerId: "cus-sana", date: "2026-10-19", items: ["prod-lg"], total: 62500, payment: "Paid", status: "Delivered" },
      { id: "FG-10840", customerId: "cus-bilal", date: "2026-10-18", items: ["prod-logi", "prod-logi", "prod-logi"], total: 23800, payment: "Cash on delivery", status: "Pending" },
      { id: "FG-10839", customerId: "cus-mehwish", date: "2026-10-18", items: ["prod-acer"], total: 96200, payment: "Paid", status: "Delivered" },
      { id: "FG-10838", customerId: "cus-omar", date: "2026-10-17", items: ["prod-msi", "prod-logi"], total: 41750, payment: "Paid", status: "Shipped" },
      { id: "FG-10837", customerId: "cus-noor", date: "2026-10-17", items: ["prod-lg"], total: 18900, payment: "Refunded", status: "Cancelled" },
      { id: "FG-10836", customerId: "cus-hamza", date: "2026-09-28", items: ["prod-titan"], total: 689900, payment: "Paid", status: "Delivered" },
      { id: "FG-10835", customerId: "cus-sana", date: "2026-09-16", items: ["prod-acer"], total: 429999, payment: "Paid", status: "Delivered" },
      { id: "FG-10834", customerId: "cus-mehwish", date: "2026-08-21", items: ["prod-lg", "prod-logi"], total: 145100, payment: "Paid", status: "Delivered" },
      { id: "FG-10833", customerId: "cus-omar", date: "2026-07-30", items: ["prod-msi"], total: 224500, payment: "Paid", status: "Delivered" },
      { id: "FG-10832", customerId: "cus-noor", date: "2026-06-18", items: ["prod-logi"], total: 48900, payment: "Paid", status: "Delivered" },
      { id: "FG-10831", customerId: "cus-bilal", date: "2026-05-09", items: ["prod-lg"], total: 96200, payment: "Paid", status: "Delivered" },
      { id: "FG-10830", customerId: "cus-mehwish", date: "2026-04-14", items: ["prod-titan"], total: 689900, payment: "Paid", status: "Delivered" },
    ],
    reviews: [
      { id: "rev-1", customerId: "cus-mehwish", date: "2026-10-18", rating: 5, title: "Excellent build quality", productId: "prod-lg", body: "The monitor looks amazing and the colours are so vivid. Delivery was quick, packaging was secure, and setup was simple.", response: "" },
      { id: "rev-2", customerId: "cus-hamza", date: "2026-10-17", rating: 5, title: "Perfect for my setup", productId: "prod-titan", body: "The performance is fantastic for both gaming and editing. Support helped me choose the right configuration before ordering.", response: "Thanks for choosing Forge, Hamza. Enjoy your new setup!" },
      { id: "rev-3", customerId: "cus-sana", date: "2026-10-15", rating: 4, title: "Great laptop, slight delay", productId: "prod-acer", body: "Really happy with the laptop and its performance. Delivery took one day longer than expected, but the team kept me updated.", response: "" },
      { id: "rev-4", customerId: "cus-omar", date: "2026-10-13", rating: 3, title: "Good product, needs better instructions", productId: "prod-logi", body: "The keyboard feels solid and types well. The software setup took a bit of searching, but it works perfectly now.", response: "We appreciate your feedback and will review the setup guide." },
    ],
  };

  let data;
  let storageAvailable = true;
  let orderSort = { key: "date", direction: "desc" };
  let analyticsDays = 30;
  let editingCategoryId = null;
  let toastTimer;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const cloneInitialData = () => JSON.parse(JSON.stringify(initialData));
  const text = (tag, value, className) => {
    const node = document.createElement(tag);
    node.textContent = value == null ? "" : String(value);
    if (className) node.className = className;
    return node;
  };
  const actionButton = (label, action, className = "button secondary small") => {
    const button = text("button", label, className);
    button.type = "button";
    button.dataset.action = action;
    return button;
  };
  const money = (value) => `₨ ${Number(value || 0).toLocaleString("en-PK")}`;
  const dateLabel = (iso) => {
    const date = new Date(`${iso}T12:00:00`);
    return Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString("en-PK", { day: "2-digit", month: "short", year: "numeric" });
  };
  const id = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  const customerFor = (customerId) => data.customers.find((item) => item.id === customerId);
  const productFor = (productId) => data.products.find((item) => item.id === productId);
  const safeArray = (value, fallback) => Array.isArray(value) ? value : fallback;
  const isIsoDate = (value) => {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T12:00:00`);
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
  };

  function notify(message, kind = "success") {
    let region = $("[data-notifications]");
    if (!region) {
      region = document.createElement("div");
      region.dataset.notifications = "";
      region.className = "toast-region";
      region.setAttribute("aria-live", "polite");
      region.setAttribute("aria-atomic", "true");
      document.body.append(region);
    }
    region.replaceChildren();
    const toast = text("div", message, `toast ${kind}`);
    toast.setAttribute("role", kind === "error" ? "alert" : "status");
    region.append(toast);
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.remove(), 4200);
  }

  function saveData(message = "") {
    if (!storageAvailable) {
      notify("Browser storage is unavailable; this change cannot be saved.", "error");
      return false;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      storageAvailable = false;
      console.error("Could not save Forge demo data to localStorage.", error);
      notify("Changes are active for this page but could not be saved in this browser.", "error");
      return false;
    }
    if (message) notify(message);
    return true;
  }

  function loadData() {
    let saved;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      storageAvailable = false;
      console.error("Could not read Forge demo data from localStorage.", error);
      notify("Browser storage is unavailable; sample data will be used for this page only.", "error");
      return cloneInitialData();
    }
    if (!saved) return cloneInitialData();
    try {
      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object") throw new Error("Saved demo data is not an object.");
      const profile = { ...initialData.profile, ...(parsed.profile || {}) };
      const categories = safeArray(parsed.categories, initialData.categories)
        .filter((category) => category && typeof category === "object" && String(category.name || "").trim())
        .map((category, index) => ({
          id: String(category.id || `cat-restored-${index}`),
          name: String(category.name).trim(),
          description: String(category.description || ""),
          active: category.active !== false,
        }));
      const products = safeArray(parsed.products, initialData.products)
        .filter((product) => product && typeof product === "object" && String(product.name || "").trim() && String(product.sku || "").trim())
        .map((product, index) => ({
          id: String(product.id || `prod-restored-${index}`),
          name: String(product.name).trim(),
          sku: String(product.sku).trim(),
          category: String(product.category || ""),
          description: String(product.description || ""),
          price: Number.isFinite(Number(product.price)) && Number(product.price) >= 0 ? Number(product.price) : 0,
          stock: Number.isInteger(Number(product.stock)) && Number(product.stock) >= 0 ? Number(product.stock) : 0,
          threshold: Number.isInteger(Number(product.threshold)) && Number(product.threshold) >= 0 ? Number(product.threshold) : 0,
          published: product.published !== false,
          image: typeof product.image === "string" ? product.image : "",
          sold: Number.isInteger(Number(product.sold)) && Number(product.sold) >= 0 ? Number(product.sold) : 0,
        }));
      const customers = safeArray(parsed.customers, initialData.customers)
        .filter((customer) => customer && typeof customer === "object" && String(customer.name || "").trim())
        .map((customer, index) => ({
          id: String(customer.id || `cus-restored-${index}`),
          name: String(customer.name).trim(),
          email: String(customer.email || ""),
          joined: isIsoDate(customer.joined) ? customer.joined : today.toISOString().slice(0, 10),
          newsletter: Boolean(customer.newsletter),
        }));
      const validStatuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled", "Refunded"];
      const orders = safeArray(parsed.orders, initialData.orders)
        .filter((order) => order && typeof order === "object" && String(order.id || "").trim())
        .map((order, index) => ({
          id: String(order.id || `FG-restored-${index}`),
          customerId: String(order.customerId || ""),
          date: isIsoDate(order.date) ? order.date : today.toISOString().slice(0, 10),
          items: safeArray(order.items, []).filter((productId) => typeof productId === "string"),
          total: Number.isFinite(Number(order.total)) && Number(order.total) >= 0 ? Number(order.total) : 0,
          payment: String(order.payment || "Unspecified"),
          status: validStatuses.includes(order.status) ? order.status : "Pending",
        }));
      const reviews = safeArray(parsed.reviews, initialData.reviews)
        .filter((review) => review && typeof review === "object" && String(review.id || "").trim())
        .map((review, index) => ({
          id: String(review.id || `rev-restored-${index}`),
          customerId: String(review.customerId || ""),
          date: isIsoDate(review.date) ? review.date : today.toISOString().slice(0, 10),
          rating: Number.isInteger(Number(review.rating)) && Number(review.rating) >= 1 && Number(review.rating) <= 5 ? Number(review.rating) : 5,
          title: String(review.title || "Customer review"),
          productId: String(review.productId || ""),
          body: String(review.body || ""),
          response: String(review.response || ""),
        }));
      if (typeof profile.firstName !== "string" || !profile.firstName.trim()) profile.firstName = initialData.profile.firstName;
      if (typeof profile.lastName !== "string" || !profile.lastName.trim()) profile.lastName = initialData.profile.lastName;
      if (typeof profile.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) profile.email = initialData.profile.email;
      if (typeof profile.phone !== "string") profile.phone = initialData.profile.phone;
      if (typeof profile.password !== "string" || profile.password.length < 8) profile.password = DEFAULT_PASSWORD;
      return {
        profile,
        categories,
        products,
        customers,
        orders,
        reviews,
      };
    } catch (error) {
      console.error("Could not restore Forge demo data.", error);
      notify("Saved demo data was invalid, so the sample data has been restored.", "error");
      return cloneInitialData();
    }
  }

  function adminName() {
    return `${data.profile.firstName} ${data.profile.lastName}`.trim() || "Store administrator";
  }

  function updateAdminIdentity() {
    const initials = adminName().split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    $$(".user-name").forEach((node) => { node.textContent = adminName(); });
    $$(".avatar").forEach((node) => { node.textContent = initials; });
    const profileCard = $(".profile-card");
    if (profileCard) {
      const heading = $("h2", profileCard);
      const avatar = $(".profile-avatar", profileCard);
      if (heading) heading.textContent = adminName();
      if (avatar) {
        avatar.textContent = initials;
        avatar.setAttribute("aria-label", `${adminName()} initials`);
      }
      const details = $$(".profile-detail strong", profileCard);
      if (details[0]) details[0].textContent = data.profile.email;
    }
    const greeting = $(".page-heading h1");
    if (location.pathname.endsWith("/index.html") && greeting) greeting.textContent = `Good afternoon, ${data.profile.firstName}`;
  }

  function enforceSession() {
    const loginPage = location.pathname.endsWith("/login.html") || location.pathname === "login.html";
    let authenticated = false;
    try {
      authenticated = localStorage.getItem(SESSION_KEY) === "active";
    } catch (error) {
      storageAvailable = false;
      console.error("Could not read the simulated session.", error);
      notify("Browser storage is unavailable; the demo session cannot be remembered.", "error");
    }
    if (loginPage && authenticated) {
      location.replace("index.html");
      return false;
    }
    if (!loginPage && !authenticated) {
      location.replace("login.html");
      return false;
    }
    return true;
  }

  function addSharedControls() {
    const topbarRight = $(".topbar-right");
    if (topbarRight && !$(".logout-button", topbarRight)) {
      const logout = actionButton("Log out", "logout", "button secondary small logout-button");
      topbarRight.append(logout);
    }
    const sidebar = $(".sidebar");
    const brand = $(".brand", sidebar || document);
    if (sidebar && brand && !$(".mobile-menu-button", sidebar)) {
      const toggle = actionButton("☰ Menu", "toggle-menu", "button secondary small mobile-menu-button");
      toggle.setAttribute("aria-expanded", "true");
      brand.after(toggle);
    }
  }

  function statusClass(status) {
    const value = status.toLowerCase();
    if (value === "pending") return "status pending";
    if (value === "processing" || value === "shipped") return "status processing";
    if (value === "cancelled" || value === "refunded") return "status cancelled";
    if (value === "draft") return "status draft";
    return "status";
  }

  function setStatus(node, value) {
    node.className = statusClass(value);
    node.textContent = value;
  }

  function stockState(product) {
    if (product.stock <= 0) return "Out of stock";
    if (product.stock <= product.threshold) return "Low stock";
    return "In stock";
  }

  function currentStats() {
    const validOrders = data.orders.filter((order) => order.status !== "Cancelled" && order.status !== "Refunded");
    const sales = validOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const stockOut = data.products.filter((product) => product.stock <= 0).length;
    const stockLow = data.products.filter((product) => product.stock > 0 && product.stock <= product.threshold).length;
    return { validOrders, sales, stockOut, stockLow };
  }

  function setStatCards(values) {
    $$(".stat-card").forEach((card) => {
      const label = ($(".stat-top", card)?.firstElementChild?.textContent || "").trim().toLowerCase();
      const value = values[label];
      if (value === undefined) return;
      const valueNode = $(".stat-value", card);
      const note = $(".stat-note", card);
      if (valueNode) valueNode.textContent = value;
      if (note && values[`${label}:note`]) note.textContent = values[`${label}:note`];
    });
  }

  function renderStats() {
    const stats = currentStats();
    const analyticsPage = location.pathname.endsWith("/analytics.html") || location.pathname === "analytics.html";
    const reviewsPage = location.pathname.endsWith("/reviews.html") || location.pathname === "reviews.html";
    const reportingOrders = data.orders.filter((order) => {
      if (order.status === "Cancelled" || order.status === "Refunded") return false;
      if (!analyticsPage || analyticsDays === 0) return true;
      const age = (today - new Date(`${order.date}T12:00:00`)) / 86400000;
      return age >= 0 && age <= analyticsDays;
    });
    const reportingSales = reportingOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const refundedOrders = data.orders.filter((order) => {
      if (order.status !== "Refunded") return false;
      if (!analyticsPage || analyticsDays === 0) return true;
      const age = (today - new Date(`${order.date}T12:00:00`)) / 86400000;
      return age >= 0 && age <= analyticsDays;
    }).length;
    setStatCards({
      "total sales": money(stats.sales),
      "orders": String(data.orders.length),
      "products": String(data.products.length),
      "categories": String(data.categories.length),
      "customers": String(data.customers.length),
      "all orders": String(data.orders.length),
      "awaiting fulfilment": String(data.orders.filter((order) => ["Pending", "Processing"].includes(order.status)).length),
      "in transit": String(data.orders.filter((order) => order.status === "Shipped").length),
      "delivered this month": String(data.orders.filter((order) => order.status === "Delivered" && order.date?.startsWith("2026-10")).length),
      "returns requested": String(data.orders.filter((order) => order.status === "Refunded").length),
      "total products": String(data.products.length),
      "published": String(data.products.filter((product) => product.published).length),
      "low stock": String(stats.stockLow),
      "out of stock": String(stats.stockOut),
      "draft products": String(data.products.filter((product) => !product.published).length),
      "total categories": String(data.categories.length),
      "active": String(data.categories.filter((category) => category.active).length),
      "unassigned products": String(data.products.filter((product) => !data.categories.some((category) => category.name === product.category)).length),
      "top category": (() => {
        const counts = data.categories.map((category) => ({ name: category.name, count: data.products.filter((product) => product.category === category.name).length }));
        return counts.sort((a, b) => b.count - a.count)[0]?.name || "—";
      })(),
      "draft categories": String(data.categories.filter((category) => !category.active).length),
      "total customers": String(data.customers.length),
      "new this month": String(reviewsPage
        ? data.reviews.filter((review) => review.date?.startsWith("2026-10")).length
        : data.customers.filter((customer) => customer.joined?.startsWith("2026-10")).length),
      "returning customers": `${data.customers.filter((customer) => customerOrderCount(customer.id) > 1).length}`,
      "average order value": analyticsPage
        ? money(reportingOrders.length ? Math.round(reportingSales / reportingOrders.length) : 0)
        : money(stats.validOrders.length ? Math.round(stats.sales / stats.validOrders.length) : 0),
      "newsletter members": String(data.customers.filter((customer) => customer.newsletter).length),
      "gross sales": money(analyticsPage ? reportingSales : stats.sales),
      "net orders": String(reportingOrders.length),
      "conversion rate": "—",
      "refund rate": `${data.orders.length ? Math.round((refundedOrders / data.orders.length) * 1000) / 10 : 0}%`,
      "average rating": `${data.reviews.length ? (data.reviews.reduce((sum, review) => sum + review.rating, 0) / data.reviews.length).toFixed(1) : "0.0"} / 5`,
      "total reviews": String(data.reviews.length),
      "needs a response": String(data.reviews.filter((review) => !review.response).length),
      "5-star reviews": `${data.reviews.length ? Math.round((data.reviews.filter((review) => review.rating === 5).length / data.reviews.length) * 100) : 0}%`,
      "top category:note": (() => {
        const top = data.categories.map((category) => ({ name: category.name, count: data.products.filter((product) => product.category === category.name).length }))
          .sort((a, b) => b.count - a.count)[0];
        return top ? `${top.count} products · ${data.products.length ? Math.round(top.count / data.products.length * 1000) / 10 : 0}% of catalogue` : "No products assigned";
      })(),
    });
    const dashboardSales = $("[data-dashboard-sales]");
    if (dashboardSales) dashboardSales.textContent = money(stats.sales);
    const orderCount = $("[data-order-count]");
    if (orderCount) orderCount.textContent = `${data.orders.length} orders total`;
    renderInventorySummary(stats);
    updateAdminIdentity();
  }

  function customerOrderCount(customerId) {
    return data.orders.filter((order) => order.customerId === customerId && order.status !== "Cancelled").length;
  }

  function unitsSold(productId) {
    return data.orders
      .filter((order) => !["Cancelled", "Refunded"].includes(order.status))
      .reduce((total, order) => total + order.items.filter((item) => item === productId).length, 0);
  }

  function makeProgressRow(label, count, total, color) {
    const wrapper = document.createElement("div");
    const row = document.createElement("div");
    row.className = "quick-row";
    row.append(text("span", label, "quick-label"), text("span", `${count} products`, "quick-value"));
    const track = document.createElement("div");
    track.className = "progress-track";
    track.style.marginTop = "8px";
    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = `${total ? (count / total) * 100 : 0}%`;
    if (color) fill.style.background = color;
    track.append(fill);
    wrapper.append(row, track);
    return wrapper;
  }

  function renderInventorySummary(stats) {
    const target = $("[data-inventory-summary]");
    if (!target) return;
    const inStock = data.products.filter((product) => product.stock > product.threshold).length;
    target.replaceChildren(
      makeProgressRow("In stock", inStock, data.products.length),
      makeProgressRow("Low stock", stats.stockLow, data.products.length, "var(--yellow)"),
      makeProgressRow("Out of stock", stats.stockOut, data.products.length, "var(--red)"),
    );
    const note = document.createElement("p");
    note.className = "report-note";
    note.textContent = `${stats.stockLow + stats.stockOut} product${stats.stockLow + stats.stockOut === 1 ? "" : "s"} need a stock check.`;
    target.append(note);
  }

  function emptyRow(tbody, columns, message) {
    const row = document.createElement("tr");
    const cell = text("td", message);
    cell.colSpan = columns;
    cell.style.textAlign = "center";
    cell.style.padding = "24px";
    row.append(cell);
    tbody.replaceChildren(row);
  }

  function renderProducts() {
    const tbody = $("[data-products-table]");
    if (!tbody) return;
    const search = ($('input[placeholder="Product name or SKU"]')?.value || "").trim().toLowerCase();
    const categorySelect = $$("select").find((select) => select.name === "category" && !select.closest("[data-product-form]"));
    const stockSelect = $$("select").find((select) => select.name === "stock");
    const categoryValue = categorySelect?.value;
    const stockValue = stockSelect?.value;
    const products = data.products.filter((product) => {
      const matchesSearch = !search || `${product.name} ${product.sku}`.toLowerCase().includes(search);
      const matchesCategory = !categoryValue || categoryValue === "All categories" || product.category === categoryValue;
      const state = stockState(product);
      const matchesStock = !stockValue || stockValue === "Any stock" || state === stockValue;
      return matchesSearch && matchesCategory && matchesStock;
    });
    if (!products.length) return emptyRow(tbody, 7, "No products match your search or filters.");
    tbody.replaceChildren();
    products.forEach((product) => {
      const row = document.createElement("tr");
      const productCell = document.createElement("td");
      const productWrap = document.createElement("div");
      productWrap.className = "product-cell";
      productWrap.append(text("span", "▣", "product-thumb"));
      const nameWrap = document.createElement("span");
      nameWrap.append(text("span", product.name, "table-primary"), text("span", product.description || "Forge hardware", "table-secondary"));
      productWrap.append(nameWrap);
      productCell.append(productWrap);
      const stockCell = document.createElement("td");
      stockCell.append(document.createTextNode(`${product.stock} units`));
      const meter = document.createElement("div");
      meter.className = "stock-meter";
      const fill = document.createElement("span");
      fill.style.width = `${Math.min(100, product.stock * 5)}%`;
      if (product.stock <= product.threshold) fill.style.background = "var(--yellow)";
      if (product.stock <= 0) fill.style.background = "var(--red)";
      meter.append(fill);
      stockCell.append(meter);
      const state = stockState(product);
      const status = text("span", state, state === "Low stock" ? "status pending" : state === "Out of stock" ? "status low" : "status");
      const actions = document.createElement("td");
      actions.append(actionButton("Edit", `edit-product:${product.id}`), document.createTextNode(" "), actionButton("Delete", `delete-product:${product.id}`, "button danger small"));
      row.append(productCell, text("td", product.sku), text("td", product.category), text("td", money(product.price)), stockCell, (() => { const td = document.createElement("td"); td.append(status); return td; })(), actions);
      tbody.append(row);
    });
  }

  function syncProductCategoryOptions(selectedValue = "") {
    const select = $("#category", $("[data-product-form]") || document);
    if (select) {
      const placeholder = text("option", "Choose a category");
      placeholder.value = "";
      select.replaceChildren(placeholder);
      data.categories.forEach((category) => {
        const option = text("option", category.name);
        option.value = category.name;
        select.append(option);
      });
      select.value = selectedValue;
    }
    const filter = $$("select").find((item) => item.name === "category" && !item.closest("[data-product-form]"));
    if (filter) {
      const value = filter.value || "All categories";
      const all = text("option", "All categories");
      all.value = "All categories";
      filter.replaceChildren(all);
      data.categories.forEach((category) => {
        const option = text("option", category.name);
        option.value = category.name;
        filter.append(option);
      });
      filter.value = data.categories.some((category) => category.name === value) ? value : "All categories";
    }
  }

  function renderCategories() {
    const target = $("[data-category-list]");
    if (!target) return;
    target.replaceChildren();
    if (!data.categories.length) {
      const message = text("p", "No categories yet. Add your first category below.", "panel-subtitle");
      target.append(message);
      return;
    }
    data.categories.forEach((category) => {
      const card = document.createElement("article");
      card.className = "panel category-card";
      if (editingCategoryId === category.id) {
        const form = document.createElement("form");
        form.className = "category-edit-form";
        form.dataset.categoryId = category.id;
        const nameLabel = text("label", "Category name");
        const nameInput = document.createElement("input");
        nameInput.className = "control";
        nameInput.name = "name";
        nameInput.value = category.name;
        nameInput.required = true;
        nameLabel.append(nameInput);
        const descriptionLabel = text("label", "Description");
        const descriptionInput = document.createElement("input");
        descriptionInput.className = "control";
        descriptionInput.name = "description";
        descriptionInput.value = category.description || "";
        descriptionLabel.append(descriptionInput);
        const visibilityLabel = text("label", "Visibility");
        const visibility = document.createElement("select");
        visibility.className = "control";
        visibility.name = "active";
        [["Active", "true"], ["Draft", "false"]].forEach(([label, value]) => {
          const option = text("option", label);
          option.value = value;
          option.selected = String(category.active) === value;
          visibility.append(option);
        });
        visibilityLabel.append(visibility);
        const buttons = document.createElement("div");
        buttons.className = "form-actions";
        const save = text("button", "Save", "button small");
        save.type = "submit";
        const cancel = actionButton("Cancel", "cancel-category-edit");
        buttons.append(save, cancel);
        form.append(nameLabel, descriptionLabel, visibilityLabel, buttons);
        card.append(form);
        target.append(card);
        return;
      }
      const top = document.createElement("div");
      top.className = "category-card-top";
      top.append(text("span", "◫", "category-symbol"));
      const status = text("span", category.active ? "Active" : "Draft", category.active ? "status" : "status draft");
      top.append(status);
      const heading = text("h2", category.name);
      const description = text("p", category.description || "No description provided.");
      const footer = document.createElement("div");
      footer.className = "category-meta";
      const count = data.products.filter((product) => product.category === category.name).length;
      footer.append(text("span", `${count} products`));
      const actions = document.createElement("span");
      actions.append(actionButton("Edit", `edit-category:${category.id}`), document.createTextNode(" "), actionButton("Delete", `delete-category:${category.id}`, "button danger small"));
      footer.append(actions);
      card.append(top, heading, description, footer);
      target.append(card);
    });
    syncProductCategoryOptions();
  }

  function orderMatchesDate(order, range) {
    if (!range || range === "Last 30 days" || range === "All time") {
      if (range === "All time") return true;
      const age = (today - new Date(`${order.date}T12:00:00`)) / 86400000;
      return age >= 0 && age <= 30;
    }
    const age = (today - new Date(`${order.date}T12:00:00`)) / 86400000;
    if (range === "Today") return age >= 0 && age < 1;
    if (range === "Last 7 days") return age >= 0 && age <= 7;
    if (range === "This year") return order.date?.startsWith("2026");
    return true;
  }

  function orderFiltered() {
    const tbody = $("[data-orders-table]");
    const controls = tbody?.closest(".panel") || document;
    const search = ($('input[placeholder="Order number or customer"]', controls)?.value || "").trim().toLowerCase();
    const status = $$("select", controls).find((select) => select.name === "status")?.value;
    const range = $$("select", controls).find((select) => select.name === "range")?.value;
    const results = data.orders.filter((order) => {
      const customer = customerFor(order.customerId);
      const matchesSearch = !search || `${order.id} ${customer?.name || ""} ${customer?.email || ""}`.toLowerCase().includes(search);
      const matchesStatus = !status || status === "All statuses" || order.status === status;
      return matchesSearch && matchesStatus && orderMatchesDate(order, range);
    });
    const { key, direction } = orderSort;
    results.sort((a, b) => {
      const left = key === "customer" ? customerFor(a.customerId)?.name || "" : a[key];
      const right = key === "customer" ? customerFor(b.customerId)?.name || "" : b[key];
      const comparison = typeof left === "number" ? left - right : String(left || "").localeCompare(String(right || ""));
      return comparison * (direction === "asc" ? 1 : -1);
    });
    return results;
  }

  function renderOrders() {
    const tbody = $("[data-orders-table]");
    if (!tbody) return;
    const filtered = orderFiltered();
    const compact = location.pathname.endsWith("/index.html") || location.pathname === "index.html";
    if (!filtered.length) return emptyRow(tbody, compact ? 5 : 7, "No orders match your search or filters.");
    tbody.replaceChildren();
    filtered.slice(0, compact ? 4 : filtered.length).forEach((order) => {
      const customer = customerFor(order.customerId);
      const row = document.createElement("tr");
      row.append(text("td", `#${order.id}`));
      const customerCell = document.createElement("td");
      customerCell.append(text("span", customer?.name || "Removed customer", "table-primary"));
      if (!compact) customerCell.append(text("span", customer?.email || "", "table-secondary"));
      const statusCell = document.createElement("td");
      if (compact) {
        statusCell.append(text("span", order.status, statusClass(order.status)));
      } else {
        const select = document.createElement("select");
        select.className = "control order-status";
        select.dataset.orderId = order.id;
        ["Pending", "Processing", "Shipped", "Delivered", "Cancelled", "Refunded"].forEach((value) => {
          const option = text("option", value);
          option.value = value;
          option.selected = value === order.status;
          select.append(option);
        });
        statusCell.append(select);
      }
      row.append(customerCell, text("td", dateLabel(order.date)));
      if (!compact) {
        row.append(text("td", `${order.items.length} item${order.items.length === 1 ? "" : "s"}`), text("td", order.payment));
      }
      row.append(text("td", money(order.total)), statusCell);
      tbody.append(row);
    });
    const footer = $(".table-footer");
    if (footer && !compact) {
      const summary = footer.querySelector(":scope > span");
      if (summary) summary.textContent = `Showing ${filtered.length} of ${data.orders.length} orders`;
    }
  }

  function renderCustomers() {
    const tbody = $("[data-customers-table]");
    if (!tbody) return;
    const form = tbody.closest(".panel");
    const search = ($('input[placeholder="Name or email address"]', form)?.value || "").trim().toLowerCase();
    const type = $$("select", form).find((select) => select.name === "type")?.value;
    const joined = $$("select", form).find((select) => select.name === "joined")?.value;
    const customers = data.customers.filter((customer) => {
      const count = customerOrderCount(customer.id);
      const typeMatches = !type || type === "All customers" || (type === "New" ? count <= 1 : count > 1);
      let dateMatches = true;
      const age = (today - new Date(`${customer.joined}T12:00:00`)) / 86400000;
      if (joined === "This month") dateMatches = customer.joined.startsWith("2026-10");
      if (joined === "Last 90 days") dateMatches = age <= 90;
      return typeMatches && dateMatches && `${customer.name} ${customer.email}`.toLowerCase().includes(search);
    });
    if (!customers.length) return emptyRow(tbody, 6, "No customers match your search or filters.");
    tbody.replaceChildren();
    customers.forEach((customer) => {
      const customerOrders = data.orders.filter((order) => order.customerId === customer.id && order.status !== "Cancelled");
      const spent = customerOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
      const lastOrder = customerOrders.slice().sort((a, b) => b.date.localeCompare(a.date))[0];
      const segment = spent >= 400000 ? "VIP" : customerOrders.length > 1 ? "Returning" : "New";
      const row = document.createElement("tr");
      const identity = document.createElement("td");
      identity.append(text("span", customer.name, "table-primary"), text("span", customer.email, "table-secondary"));
      const segmentCell = document.createElement("td");
      segmentCell.append(text("span", segment, segment === "New" ? "status processing" : "status"));
      row.append(identity, text("td", dateLabel(customer.joined)), text("td", String(customerOrders.length)), text("td", money(spent)), text("td", lastOrder ? dateLabel(lastOrder.date) : "—"), segmentCell);
      tbody.append(row);
    });
    const footer = $(".table-footer");
    if (footer) {
      const summary = footer.querySelector(":scope > span");
      if (summary) summary.textContent = `Showing ${customers.length} of ${data.customers.length} customers`;
    }
  }

  function renderReviews() {
    const target = $("[data-review-list]");
    if (!target) return;
    const form = $(".filters");
    const search = ($('input[type="search"]', form)?.value || "").trim().toLowerCase();
    const ratingValue = $$("select", form).find((select) => select.name === "rating")?.value || "All ratings";
    const responseValue = $$("select", form).find((select) => select.name === "status")?.value || "All reviews";
    const rating = Number.parseInt(ratingValue, 10);
    const reviews = data.reviews.filter((review) => {
      const product = productFor(review.productId);
      const customer = customerFor(review.customerId);
      const hasResponse = Boolean(review.response);
      return (!search || `${review.title} ${review.body} ${customer?.name || ""} ${product?.name || ""}`.toLowerCase().includes(search))
        && (Number.isNaN(rating) || review.rating === rating)
        && (responseValue === "All reviews" || (responseValue === "Needs response" ? !hasResponse : hasResponse));
    });
    target.replaceChildren();
    if (!reviews.length) {
      target.append(text("p", "No reviews match your search or filters.", "panel-subtitle"));
      return;
    }
    reviews.forEach((review) => {
      const card = document.createElement("article");
      card.className = "review-card";
      const header = document.createElement("div");
      header.className = "review-head";
      const titleWrap = document.createElement("div");
      const stars = text("div", `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`, "stars");
      stars.setAttribute("aria-label", `${review.rating} out of 5 stars`);
      titleWrap.append(stars, text("h3", review.title));
      const customer = customerFor(review.customerId);
      titleWrap.append(text("p", `${customer?.name || "Customer"} · ${dateLabel(review.date)}`, "review-meta"));
      header.append(titleWrap, text("span", review.response ? "Responded" : "Needs response", review.response ? "status" : "status pending"));
      card.append(header, text("p", review.body, "review-copy"), text("p", `Product: ${productFor(review.productId)?.name || "Product removed"}`, "review-meta"));
      if (review.response) {
        const response = document.createElement("div");
        response.className = "report-note";
        response.style.marginTop = "12px";
        response.append(text("strong", "Forge response"), text("p", review.response));
        card.append(response);
      }
      const responseForm = document.createElement("form");
      responseForm.className = "review-response-form";
      responseForm.dataset.reviewId = review.id;
      const label = text("label", review.response ? "Update response" : "Write a response");
      const area = document.createElement("textarea");
      area.className = "control";
      area.name = "response";
      area.rows = 3;
      area.maxLength = 500;
      area.placeholder = "Reply to this customer...";
      area.required = true;
      area.value = review.response || "";
      label.append(area);
      responseForm.append(label, actionButton("Save response", "save-review-response"));
      card.append(responseForm);
      target.append(card);
    });
  }

  function renderCategorySelects() {
    const productForm = $("[data-product-form]");
    const select = productForm && $("#category", productForm);
    syncProductCategoryOptions(select?.value || "");
  }

  function renderProfileForm() {
    const form = $("[data-profile-form]");
    if (!form) return;
    $("#first-name", form).value = data.profile.firstName;
    $("#last-name", form).value = data.profile.lastName;
    $("#profile-email", form).value = data.profile.email;
    $("#phone", form).value = data.profile.phone || "";
  }

  function renderDashboardCharts() {
    const target = $("[data-sales-chart]");
    if (!target) return;
    const months = [];
    for (let offset = 6; offset >= 0; offset -= 1) {
      const date = new Date(today.getFullYear(), today.getMonth() - offset, 1);
      months.push({ year: date.getFullYear(), month: date.getMonth(), label: date.toLocaleDateString("en", { month: "short" }), total: 0 });
    }
    const validOrders = currentStats().validOrders;
    validOrders.forEach((order) => {
      const date = new Date(`${order.date}T12:00:00`);
      const month = months.find((entry) => entry.year === date.getFullYear() && entry.month === date.getMonth());
      if (month) month.total += Number(order.total || 0);
    });
    const max = Math.max(1, ...months.map((month) => month.total));
    target.replaceChildren();
    months.forEach((month) => {
      const column = document.createElement("div");
      column.className = "chart-column";
      const bar = document.createElement("span");
      bar.className = "chart-bar";
      bar.style.height = `${Math.max(5, (month.total / max) * 100)}%`;
      bar.title = `${month.label}: ${money(month.total)}`;
      column.append(bar, text("span", month.label, "chart-label"));
      target.append(column);
    });
    const popular = $("[data-popular-products]");
    if (popular) {
      const ranked = data.products.slice().sort((a, b) => unitsSold(b.id) - unitsSold(a.id)).slice(0, 5);
      if (!ranked.length) return emptyRow(popular, 4, "No product sales recorded yet.");
      popular.replaceChildren();
      ranked.forEach((product) => {
        const row = document.createElement("tr");
        row.append(text("td", product.name), text("td", product.category), text("td", money(product.price)), text("td", String(unitsSold(product.id))));
        popular.append(row);
      });
    }
  }

  function renderAnalytics() {
    const grid = $(".analytics-grid");
    if (!grid) return;
    const days = analyticsDays;
    const cutoff = new Date(today.getTime() - (days || 36500) * 86400000);
    const orders = data.orders.filter((order) => {
      if (order.status === "Cancelled" || order.status === "Refunded") return false;
      if (days === 0) return true;
      return new Date(`${order.date}T12:00:00`) >= cutoff;
    });
    const monthlyPanel = grid.querySelector(".panel");
    const chart = $(".chart", monthlyPanel || document);
    if (chart) {
      const buckets = [];
      const count = days === 7 ? 7 : days === 30 ? 4 : 7;
      for (let i = count - 1; i >= 0; i -= 1) {
        const date = new Date(today);
        date.setDate(today.getDate() - (days === 7 ? i : i * Math.ceil(Math.max(days, 30) / count)));
        buckets.push({ date, label: days === 7 ? date.toLocaleDateString("en", { weekday: "short" }) : date.toLocaleDateString("en", { month: "short" }), total: 0 });
      }
      orders.forEach((order) => {
        const date = new Date(`${order.date}T12:00:00`);
        let bucket = buckets.find((entry, index) => {
          const next = buckets[index + 1];
          return date >= entry.date && (!next || date < next.date);
        });
        if (!bucket && buckets.length) {
          const earliest = buckets[0];
          if (date < earliest.date) bucket = earliest;
        }
        if (bucket) bucket.total += Number(order.total || 0);
      });
      const max = Math.max(1, ...buckets.map((bucket) => bucket.total));
      chart.replaceChildren();
      buckets.forEach((bucket) => {
        const column = document.createElement("div");
        column.className = "chart-column";
        const bar = document.createElement("span");
        bar.className = "chart-bar";
        bar.style.height = `${Math.max(5, bucket.total / max * 100)}%`;
        bar.title = `${bucket.label}: ${money(bucket.total)}`;
        column.append(bar, text("span", bucket.label, "chart-label"));
        chart.append(column);
      });
    }
    const categoryPanel = grid.children[1];
    const categoryBars = $(".bar-chart", categoryPanel || document);
    if (categoryBars) {
      categoryBars.replaceChildren();
      const totals = data.categories.map((category) => ({
        name: category.name,
        total: data.products.filter((product) => product.category === category.name)
          .reduce((sum, product) => sum + product.price * unitsSold(product.id), 0),
      })).sort((a, b) => b.total - a.total).slice(0, 5);
      const max = Math.max(1, ...totals.map((item) => item.total));
      totals.forEach((item) => {
        const row = document.createElement("div");
        row.className = "bar-row";
        const track = document.createElement("div");
        track.className = "progress-track";
        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = `${item.total / max * 100}%`;
        track.append(fill);
        row.append(text("span", item.name), track, text("strong", money(item.total)));
        categoryBars.append(row);
      });
    }
    const statusPanel = grid.children[2];
    const statusBody = $(".quick-list", statusPanel || document);
    if (statusBody) {
      statusBody.replaceChildren();
      const statuses = [
        { label: "Delivered", matches: ["Delivered"], color: "var(--green)" },
        { label: "Processing / shipped", matches: ["Pending", "Processing", "Shipped"], color: "var(--blue)" },
        { label: "Cancelled / refunded", matches: ["Cancelled", "Refunded"], color: "var(--yellow)" },
      ];
      statuses.forEach((status) => {
        const count = data.orders.filter((order) => status.matches.includes(order.status)).length;
        const percent = data.orders.length ? (count / data.orders.length) * 100 : 0;
        const wrapper = document.createElement("div");
        const line = document.createElement("div");
        line.className = "quick-row";
        line.append(text("span", status.label, "quick-label"), text("span", `${count} orders · ${percent.toFixed(1)}%`, "quick-value"));
        const track = document.createElement("div");
        track.className = "progress-track";
        track.style.marginTop = "8px";
        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = `${percent}%`;
        fill.style.background = status.color;
        track.append(fill);
        wrapper.append(line, track);
        statusBody.append(wrapper);
      });
    }
    const growthPanel = grid.children[3];
    const growth = $(".stat-value", growthPanel || document);
    if (growth) growth.textContent = `${data.customers.filter((customer) => {
      const date = new Date(`${customer.joined}T12:00:00`);
      return date >= cutoff;
    }).length} new customers`;
  }

  function renderAll() {
    renderStats();
    renderProducts();
    renderCategories();
    renderOrders();
    renderCustomers();
    renderReviews();
    renderCategorySelects();
    renderProfileForm();
    renderDashboardCharts();
    renderAnalytics();
  }

  function updateProductForm() {
    const form = $("[data-product-form]");
    if (!form) return;
    const params = new URLSearchParams(location.search);
    const editing = data.products.find((product) => product.id === params.get("edit"));
    syncProductCategoryOptions(editing?.category || "");
    if (editing) {
      document.title = `Edit ${editing.name} | Forge Admin`;
      const heading = $(".page-heading h1");
      if (heading) heading.textContent = "Edit product";
      $("#product-name").value = editing.name;
      $("#sku").value = editing.sku;
      $("#description").value = editing.description || "";
      $("#price").value = String(editing.price);
      $("#compare-price").value = editing.comparePrice || "";
      $("#quantity").value = String(editing.stock);
      $("#reorder").value = String(editing.threshold);
      const visibility = $(`input[name="visibility"][value="${editing.published ? "published" : "draft"}"]`, form);
      if (visibility) visibility.checked = true;
    }
    const submitButtons = $$('button[type="submit"]', form);
    submitButtons.forEach((button) => {
      button.addEventListener("click", () => { form.dataset.submitVisibility = button.value; });
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = $("#product-name").value.trim();
      const sku = $("#sku").value.trim();
      const category = $("#category").value;
      const price = Number($("#price").value);
      const stock = Number($("#quantity").value);
      const threshold = Number($("#reorder").value);
      const duplicateSku = data.products.some((product) => product.sku.toLowerCase() === sku.toLowerCase() && product.id !== editing?.id);
      if (!name || !sku || !category || !Number.isFinite(price) || price <= 0 || !Number.isInteger(stock) || stock < 0 || !Number.isInteger(threshold) || threshold < 0) {
        notify("Enter a name, SKU, category, positive price, and valid non-negative stock values.", "error");
        return;
      }
      if (duplicateSku) return notify("That SKU is already used by another product.", "error");
      if (!data.categories.some((item) => item.name === category)) return notify("Choose an existing product category.", "error");
      const visibility = form.dataset.submitVisibility || $("input[name='visibility']:checked", form)?.value || "published";
      const product = {
        id: editing?.id || id("prod"),
        name,
        sku,
        category,
        description: $("#description").value.trim(),
        price,
        comparePrice: Number($("#compare-price").value) || 0,
        stock,
        threshold,
        published: visibility === "published",
        image: $("#image")?.files?.[0]?.name || editing?.image || "",
        sold: editing?.sold || 0,
      };
      if (editing) data.products[data.products.findIndex((item) => item.id === editing.id)] = product;
      else data.products.push(product);
      if (!saveData(editing ? "Product updated." : "Product added.")) return;
      location.href = "products.html";
    });
  }

  function setupCategoryForm() {
    const form = $("[data-category-form]");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = $("#category-name", form).value.trim();
      const description = $("#category-description", form).value.trim();
      const active = $("#category-status", form).value === "Active";
      if (!name) return notify("Enter a category name.", "error");
      if (data.categories.some((category) => category.name.toLowerCase() === name.toLowerCase())) return notify("A category with that name already exists.", "error");
      data.categories.push({ id: id("cat"), name, description, active });
      saveData("Category added.");
      renderAll();
      form.reset();
    });
  }

  function setupLogin() {
    const form = $(".login-form");
    if (!form) return;
    const button = $('button[type="button"]', form);
    const message = $("[data-login-message]", form);
    const credentialHint = $("[data-login-credentials]", form);
    if (credentialHint) {
      const passwordHint = data.profile.password === DEFAULT_PASSWORD
        ? `Demo password: ${DEFAULT_PASSWORD}.`
        : "Use the password you saved in Admin profile.";
      credentialHint.textContent = `Demo email: ${data.profile.email}. ${passwordHint}`;
    }
    const login = () => {
      const email = $("#email", form).value.trim().toLowerCase();
      const password = $("#password", form).value;
      const expectedEmail = String(data.profile.email || "").toLowerCase();
      const expectedPassword = data.profile.password || DEFAULT_PASSWORD;
      if (email !== expectedEmail || password !== expectedPassword) {
        if (message) {
          message.textContent = "Email or password is incorrect. Please try the demo credentials.";
          message.className = "help-text negative";
        }
        return;
      }
      try {
        localStorage.setItem(SESSION_KEY, "active");
      } catch (error) {
        console.error("Could not create the simulated demo session.", error);
        if (message) message.textContent = "Browser storage is unavailable. Enable localStorage to sign in.";
        return;
      }
      location.href = "index.html";
    };
    form.addEventListener("submit", (event) => { event.preventDefault(); login(); });
    button?.addEventListener("click", login);
    $("#email", form)?.addEventListener("input", () => { if (message) message.textContent = ""; });
    $("#password", form)?.addEventListener("input", () => { if (message) message.textContent = ""; });
  }

  function setupProfileForms() {
    const profileForm = $("[data-profile-form]");
    profileForm?.addEventListener("submit", (event) => event.preventDefault());
    profileForm?.querySelector("button")?.addEventListener("click", () => {
      const firstName = $("#first-name", profileForm).value.trim();
      const lastName = $("#last-name", profileForm).value.trim();
      const email = $("#profile-email", profileForm).value.trim().toLowerCase();
      const phone = $("#phone", profileForm).value.trim();
      if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return notify("Enter your first name, last name, and a valid email address.", "error");
      data.profile = { ...data.profile, firstName, lastName, email, phone };
      saveData("Profile details saved.");
      updateAdminIdentity();
    });
    const passwordForm = $("[data-password-form]");
    passwordForm?.addEventListener("submit", (event) => event.preventDefault());
    passwordForm?.querySelector("button")?.addEventListener("click", () => {
      const current = $("#current-password", passwordForm).value;
      const next = $("#new-password", passwordForm).value;
      const confirm = $("#confirm-password", passwordForm).value;
      if (current !== (data.profile.password || DEFAULT_PASSWORD)) return notify("Current password does not match the demo account.", "error");
      if (next.length < 8) return notify("New password must contain at least 8 characters.", "error");
      if (next !== confirm) return notify("New password and confirmation do not match.", "error");
      if (next === current) return notify("Choose a password different from your current one.", "error");
      data.profile.password = next;
      saveData("Demo password changed. Use the new password on your next sign-in.");
      passwordForm.reset();
    });
  }

  function setupFilters() {
    const orderPanel = $("[data-orders-table]")?.closest(".panel");
    const customerPanel = $("[data-customers-table]")?.closest(".panel");
    const productPanel = $("[data-products-table]")?.closest(".panel");
    const reviewForm = $(".filters", document.querySelector("[data-review-list]")?.parentElement?.parentElement || document);
    [orderPanel, customerPanel, productPanel, reviewForm].filter(Boolean).forEach((panel) => {
      const form = $("form.filters", panel) || (panel.matches("form.filters") ? panel : null);
      form?.addEventListener("submit", (event) => event.preventDefault());
      $$('input[type="search"], select', form || panel).forEach((control) => {
        control.addEventListener(control.type === "search" ? "input" : "change", () => {
          if (panel === orderPanel) renderOrders();
          if (panel === customerPanel) renderCustomers();
          if (panel === productPanel) renderProducts();
          if (form === reviewForm || panel === reviewForm) renderReviews();
        });
      });
    });
    const reportForm = $("[data-report-filter]");
    reportForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = $("select", reportForm).value;
      analyticsDays = value === "all" ? 0 : Number(value) || 30;
      renderStats();
      renderAnalytics();
      notify("Report period updated.");
    });
    const orderForm = orderPanel && $("form.filters", orderPanel);
    orderForm?.addEventListener("submit", () => renderOrders());
    const customerForm = customerPanel && $("form.filters", customerPanel);
    customerForm?.addEventListener("submit", () => renderCustomers());
    const productForm = productPanel && $("form.filters", productPanel);
    productForm?.addEventListener("submit", () => renderProducts());
    if (reviewForm) {
      $$('input[type="search"], select', reviewForm).forEach((control) => {
        control.addEventListener("change", renderReviews);
        control.addEventListener("input", renderReviews);
      });
      reviewForm.addEventListener("submit", (event) => { event.preventDefault(); renderReviews(); });
    }
    const ordersTable = $("[data-orders-table]");
    const headers = ordersTable?.closest("table")?.querySelectorAll("thead th") || [];
    const page = location.pathname.split("/").pop();
    const sortMap = page === "index.html" ? [] : ["id", "customer", "date", "items", "payment", "total", "status"];
    headers.forEach((header, index) => {
      const key = sortMap[index];
      if (!key || ["items", "payment"].includes(key)) return;
      header.tabIndex = 0;
      header.setAttribute("role", "button");
      header.setAttribute("aria-label", `Sort orders by ${key}`);
      const sort = () => {
        orderSort = { key, direction: orderSort.key === key && orderSort.direction === "asc" ? "desc" : "asc" };
        renderOrders();
      };
      header.addEventListener("click", sort);
      header.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); sort(); }
      });
    });
  }

  function setupReviewFilters() {
    const form = $("[data-review-list]")?.parentElement?.querySelector("form.filters");
    if (!form) return;
    form.addEventListener("submit", (event) => { event.preventDefault(); renderReviews(); });
    $$("input, select", form).forEach((control) => {
      control.addEventListener(control.type === "search" ? "input" : "change", renderReviews);
    });
  }

  function bindActions() {
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      const action = button.dataset.action;
      if (action === "logout") {
        try { localStorage.removeItem(SESSION_KEY); } catch (error) { console.error("Could not clear the demo session.", error); }
        location.href = "login.html";
      } else if (action === "toggle-menu") {
        const sidebar = $(".sidebar");
        const collapsed = sidebar.classList.toggle("nav-collapsed");
        button.setAttribute("aria-expanded", String(!collapsed));
      } else if (action.startsWith("edit-product:")) {
        location.href = `product-form.html?edit=${encodeURIComponent(action.split(":")[1])}`;
      } else if (action.startsWith("delete-product:")) {
        const productId = action.split(":")[1];
        const product = productFor(productId);
        if (!product || !window.confirm(`Delete "${product.name}"? This cannot be undone.`)) return;
        data.products = data.products.filter((item) => item.id !== productId);
        saveData("Product deleted.");
        renderAll();
      } else if (action.startsWith("edit-category:")) {
        editingCategoryId = action.split(":")[1];
        renderCategories();
      } else if (action === "cancel-category-edit") {
        editingCategoryId = null;
        renderCategories();
      } else if (action.startsWith("delete-category:")) {
        const categoryId = action.split(":")[1];
        const category = data.categories.find((item) => item.id === categoryId);
        if (!category) return;
        if (data.products.some((product) => product.category === category.name)) return notify("Move this category’s products to another category before deleting it.", "error");
        if (!window.confirm(`Delete category "${category.name}"? This cannot be undone.`)) return;
        data.categories = data.categories.filter((item) => item.id !== categoryId);
        saveData("Category deleted.");
        renderAll();
      } else if (action === "save-review-response") {
        const form = button.closest("form[data-review-id]");
        const review = data.reviews.find((item) => item.id === form?.dataset.reviewId);
        const response = $('textarea[name="response"]', form)?.value.trim();
        if (!review || !response) return notify("Write a response before saving.", "error");
        review.response = response;
        saveData("Review response saved.");
        renderReviews();
        renderStats();
      }
    });
    document.addEventListener("change", (event) => {
      const select = event.target.closest(".order-status");
      if (!select) return;
      const order = data.orders.find((item) => item.id === select.dataset.orderId);
      if (!order) return;
      const next = select.value;
      if (order.status !== next && ["Cancelled", "Refunded"].includes(next) && !window.confirm(`Set order ${order.id} to ${next.toLowerCase()}?`)) {
        select.value = order.status;
        return;
      }
      order.status = next;
      if (next === "Refunded") order.payment = "Refunded";
      saveData(`Order ${order.id} updated to ${next}.`);
      renderStats();
      renderOrders();
      renderDashboardCharts();
      renderAnalytics();
    });
    document.addEventListener("submit", (event) => {
      const form = event.target.closest(".review-response-form");
      if (form) {
        event.preventDefault();
        $("button[data-action='save-review-response']", form)?.click();
      }
      const categoryForm = event.target.closest(".category-edit-form");
      if (categoryForm) {
        event.preventDefault();
        const category = data.categories.find((item) => item.id === categoryForm.dataset.categoryId);
        const name = $('input[name="name"]', categoryForm)?.value.trim();
        if (!category || !name) return notify("Category name cannot be empty.", "error");
        if (data.categories.some((item) => item.id !== category.id && item.name.toLowerCase() === name.toLowerCase())) return notify("A category with that name already exists.", "error");
        const oldName = category.name;
        category.name = name;
        category.description = $('input[name="description"]', categoryForm)?.value.trim() || "";
        category.active = $('select[name="active"]', categoryForm)?.value === "true";
        data.products.forEach((product) => { if (product.category === oldName) product.category = name; });
        editingCategoryId = null;
        saveData("Category updated.");
        renderAll();
      }
    });
  }

  function addLogoutAndMobileMenu() {
    addSharedControls();
    const profile = $(".user-chip");
    if (profile) profile.setAttribute("aria-label", `Open profile for ${adminName()}`);
  }

  function initialize() {
    data = loadData();
    const loginPage = location.pathname.endsWith("/login.html") || location.pathname === "login.html";
    if (!enforceSession()) return;
    addLogoutAndMobileMenu();
    setupLogin();
    setupCategoryForm();
    setupProfileForms();
    updateProductForm();
    setupFilters();
    setupReviewFilters();
    bindActions();
    renderAll();
    if (loginPage) return;
  }

  initialize();
})();
