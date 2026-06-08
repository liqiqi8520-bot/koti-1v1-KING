const tourStops = [
  { city: "Mandaluyong", group: "north", region: "North / NCR", date: "April 18-19", start: "2026-04-18", venue: "Brgy Mauway Basketball Court", status: "Completed", tag: "complete", champion: "Prince Almond Yambao", runnerUp: "To update", third: "To update", report: "A named city king proof point for local hero storytelling.", highlight: "" },
  { city: "Caloocan", group: "north", region: "North / NCR", date: "April 25-26", start: "2026-04-25", venue: "H Dela Costa Covered Court", status: "Completed", tag: "complete", champion: "To update", runnerUp: "To update", third: "To update", report: "City qualifier completed. Winners and highlight links can be added from FB.", highlight: "" },
  { city: "Valenzuela", group: "north", region: "North / NCR", date: "May 2-3", start: "2026-05-02", venue: "Barangay Tagalag Basketball Court", status: "Completed", tag: "complete", champion: "Tancueco", runnerUp: "To update", third: "To update", report: "A completed northern stop ready for player-card expansion.", highlight: "" },
  { city: "Manila", group: "north", region: "North / NCR", date: "May 9-10", start: "2026-05-09", venue: "San Andres Sports Complex", status: "Completed", tag: "complete", champion: "Deinla", runnerUp: "To update", third: "To update", report: "Manila added central-city proof to the Season 2 route.", highlight: "" },
  { city: "Taguig", group: "north", region: "North / NCR", date: "May 16-17", start: "2026-05-16", venue: "Caimito Basketball Court", status: "Completed", tag: "complete", champion: "Prince Aloba", runnerUp: "To update", third: "To update", report: "Taguig delivered another named city champion for the tour.", highlight: "" },
  { city: "Pateros", group: "north", region: "North / NCR", date: "May 23-24", start: "2026-05-23", venue: "Pateros Sports Complex", status: "Completed", tag: "complete", champion: "Rickson Gerero", runnerUp: "To update", third: "To update", report: "Pateros gives KOTI another compact city rivalry story.", highlight: "" },
  { city: "Marikina", group: "north", region: "North / NCR", date: "May 30-31", start: "2026-05-30", venue: "Barangay Tumana Basketball Court", status: "Completed", tag: "complete", champion: "Jiego Dime", runnerUp: "To update", third: "To update", report: "Jiego Dime's clutch story is a strong short-form recap angle.", highlight: "" },
  { city: "Las Pinas", group: "north", region: "North / NCR", date: "June 6-7", start: "2026-06-06", venue: "Fatima Subd Basketball Court", status: "TBC", tag: "soon", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Next activation slot pending final confirmation.", highlight: "" },
  { city: "Quezon City", group: "north", region: "North / NCR", date: "June 13-14", start: "2026-06-13", venue: "Barangay Roxas Covered Court", status: "Registration Opening Soon", tag: "soon", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "High-recognition NCR stop for player recruitment and city content.", highlight: "" },
  { city: "Pasay", group: "north", region: "North / NCR", date: "June 20-21", start: "2026-06-20", venue: "Edses Basketball Court", status: "Registration Opening Soon", tag: "soon", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Upcoming NCR city stop.", highlight: "" },
  { city: "San Juan", group: "north", region: "North / NCR", date: "June 27-28", start: "2026-06-27", venue: "Barangay Batis Basketball Court", status: "Registration Opening Soon", tag: "soon", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Upcoming city stop with strong city-pride positioning.", highlight: "" },
  { city: "Pasig", group: "north", region: "North / NCR", date: "July 4-5", start: "2026-07-04", venue: "Damayan Basketball Court", status: "Registration Opening Soon", tag: "soon", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Upcoming city stop for the northern route.", highlight: "" },
  { city: "Cainta", group: "north", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Northern pipeline city.", highlight: "" },
  { city: "Pangasinan", group: "north", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Northern expansion route.", highlight: "" },
  { city: "Cavite", group: "north", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Northern expansion route.", highlight: "" },
  { city: "Bulacan", group: "north", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Northern expansion route.", highlight: "" },
  { city: "Mindoro", group: "north", region: "North Expansion", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Northern island expansion opportunity.", highlight: "" },
  { city: "Baguio", group: "north", region: "North Expansion", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Northern mountain-city route opportunity.", highlight: "" },
  { city: "Aklan", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Southern route entry point.", highlight: "" },
  { city: "Cebu", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Major South / Visayas expansion anchor.", highlight: "" },
  { city: "Bohol", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Southern route development area.", highlight: "" },
  { city: "Iloilo", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Southern route development area.", highlight: "" },
  { city: "Bacolod", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Southern route development area.", highlight: "" },
  { city: "Boracay", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Tourism-location activation opportunity.", highlight: "" },
  { city: "Dumaguete", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Southern route development area.", highlight: "" },
  { city: "Mandaue", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Cebu metro-area expansion opportunity.", highlight: "" },
  { city: "Lapu-Lapu", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open", champion: "TBC", runnerUp: "TBC", third: "TBC", report: "Cebu metro-area expansion opportunity.", highlight: "" }
];

const routeBounds = {
  minLat: 5.2,
  maxLat: 18.8,
  minLng: 116.4,
  maxLng: 127.0
};

const nationalRoutePoints = [
  { label: "Mandaluyong", lat: 14.5794, lng: 121.0359, type: "completed" },
  { label: "Caloocan", lat: 14.7566, lng: 121.045, type: "completed" },
  { label: "Valenzuela", lat: 14.7011, lng: 120.983, type: "completed" },
  { label: "Manila", lat: 14.5995, lng: 120.9842, type: "completed" },
  { label: "Taguig", lat: 14.5176, lng: 121.0509, type: "completed" },
  { label: "Pateros", lat: 14.5445, lng: 121.0671, type: "completed" },
  { label: "Marikina", lat: 14.6507, lng: 121.1029, type: "completed" },
  { label: "Las Pinas", lat: 14.4445, lng: 120.9939, type: "completed" },
  { label: "Quezon City", lat: 14.676, lng: 121.0437, type: "completed" },
  { label: "Pasay", lat: 14.5378, lng: 121.0014, type: "completed" },
  { label: "San Juan", lat: 14.6042, lng: 121.0309, type: "completed" },
  { label: "Pasig", lat: 14.5764, lng: 121.0851, type: "completed" },
  { label: "NCR Covered", lat: 14.6091, lng: 121.0223, type: "hub", featured: true },
  { label: "North 60", lat: 15.08, lng: 120.82, type: "s1", featured: true },
  { label: "South 61+", lat: 10.72, lng: 122.56, type: "s1", featured: true },
  { label: "Baguio", lat: 16.4023, lng: 120.596, type: "pipeline", featured: true },
  { label: "Pangasinan", lat: 16.0433, lng: 120.3333, type: "pipeline" },
  { label: "Pampanga", lat: 15.033, lng: 120.684, type: "pipeline" },
  { label: "Bulacan", lat: 14.8527, lng: 120.816, type: "pipeline" },
  { label: "Cavite", lat: 14.2456, lng: 120.8786, type: "pipeline" },
  { label: "Mindoro", lat: 13.4115, lng: 121.1803, type: "pipeline", featured: true },
  { label: "Aklan", lat: 11.706, lng: 122.364, type: "pipeline", featured: true },
  { label: "Boracay", lat: 11.9674, lng: 121.9248, type: "pipeline" },
  { label: "Iloilo", lat: 10.7202, lng: 122.5621, type: "pipeline" },
  { label: "Bacolod", lat: 10.6765, lng: 122.9511, type: "pipeline", featured: true },
  { label: "Dumaguete", lat: 9.3068, lng: 123.3054, type: "pipeline" },
  { label: "Cebu", lat: 10.3157, lng: 123.8854, type: "pipeline", featured: true },
  { label: "Mandaue", lat: 10.3403, lng: 123.9416, type: "pipeline" },
  { label: "Lapu-Lapu", lat: 10.3103, lng: 123.9494, type: "pipeline" },
  { label: "Talisay", lat: 10.2447, lng: 123.8494, type: "pipeline" },
  { label: "Toledo", lat: 10.3773, lng: 123.6386, type: "pipeline" },
  { label: "Bogo", lat: 11.0517, lng: 124.0055, type: "pipeline" },
  { label: "Bohol", lat: 9.65, lng: 123.85, type: "pipeline", featured: true },
  { label: "Tacloban", lat: 11.2449, lng: 125.003, type: "pipeline" },
  { label: "Palawan", lat: 9.9672, lng: 118.7855, type: "future", featured: true },
  { label: "Cagayan de Oro", lat: 8.4542, lng: 124.6319, type: "future" },
  { label: "Zamboanga", lat: 6.9214, lng: 122.079, type: "future" },
  { label: "General Santos", lat: 6.1164, lng: 125.1716, type: "future" },
  { label: "Davao", lat: 7.1907, lng: 125.4553, type: "future", featured: true },
  { label: "North 8 Universities", lat: 14.6042, lng: 121.0309, type: "campus", featured: true },
  { label: "South 8 Universities", lat: 10.3157, lng: 123.8854, type: "campus", featured: true }
];

const routeLineGroups = [
  { type: "completed", labels: ["NCR Covered", "Baguio", "Pangasinan", "Pampanga", "NCR Covered", "Mindoro"] },
  { type: "pipeline", labels: ["NCR Covered", "Aklan", "Bacolod", "Iloilo", "Cebu", "Bohol", "Tacloban"] },
  { type: "future", labels: ["Cebu", "Cagayan de Oro", "Davao", "General Santos", "Zamboanga"] },
  { type: "future", labels: ["NCR Covered", "Palawan"] },
  { type: "campus", labels: ["North 8 Universities", "South 8 Universities"] }
];

const mediaCards = [
  { label: "Live Game", title: "Broadcast-style proof", body: "Real gameplay, sponsor boards, score bug, and event operations in one frame.", image: "assets/facebook/deep-pass-01/fb-deep-01-001.jpg" },
  { label: "Player Moment", title: "Grassroots hero story", body: "A direct 1v1 matchup with KOTI branding and sponsor visibility around the court.", image: "assets/facebook/deep-pass-01/fb-deep-01-004.jpg" },
  { label: "Brand Asset", title: "Tropa Takeover graphic", body: "Creator-ready visual material for livestream, recap, and sponsor presentation use.", image: "assets/facebook/deep-pass-01/fb-deep-01-011.jpg" },
  { label: "Court Proof", title: "Barangay route energy", body: "Local-court atmosphere that supports the community-first activation story.", image: "assets/facebook/deep-pass-01/fb-deep-01-008.jpg" },
  { label: "Player Clip", title: "Short-form content lane", body: "Vertical game content that can move from Facebook to TikTok-style storytelling.", image: "assets/facebook/deep-pass-01/fb-deep-01-002.jpg" },
  { label: "Sponsor View", title: "Visible event inventory", body: "Court boards, sideline assets, and branded areas show what partners can own.", image: "assets/facebook/deep-pass-01/fb-deep-01-005.jpg" },
  { label: "Culture", title: "City-court identity", body: "Photos and clips show KOTI as a live basketball culture, not only a tournament flyer.", image: "assets/facebook/deep-pass-01/fb-deep-01-007.jpg" },
  { label: "Showcase", title: "Content-ready stage", body: "A reusable visual lane for future mall, venue, and finals presentations.", image: "assets/facebook/deep-pass-01/fb-deep-01-012.jpg" }
];

const heroStories = [
  { title: "City King", label: "Mandaluyong", body: "Prince Almond Yambao can become a named proof point for city-pride storytelling." },
  { title: "Clutch Report", label: "Marikina", body: "Jiego Dime's clutch-story angle is strong for short match reports and reel captions." },
  { title: "Season 1 Foundation", label: "121 Games", body: "Season 1 promoted KOTI through 121 barangay-level community games, building a North 60 and South 61+ regional base." }
];

const packages = {
  a: {
    title: "A. Basic Rights",
    body: "Logo placement, event poster recognition, website listing, sponsor mention, and post-event report inclusion.",
    points: ["Website and poster listing", "Event acknowledgment", "Basic brand visibility", "Post-event recap inclusion"]
  },
  b: {
    title: "B. Digital Rights",
    body: "Social media exposure, short-form video integration, livestream mentions, creator content opportunities, and digital campaign support.",
    points: ["FB / TikTok exposure", "Short-video integration", "Livestream or recap mentions", "Creator content opportunities"]
  },
  c: {
    title: "C. On-ground Rights",
    body: "Event booth presence, barangay route activation, mall / venue showcase branding, product sampling, prize support, and on-site audience engagement.",
    points: ["Barangay court or mall venue branding", "Booth or sampling area", "Prize support", "City-stop audience engagement"]
  },
  d: {
    title: "D. Custom Partnership",
    body: "City naming rights, barangay route sponsorship, mall showcase naming, University Championship partnership, Coach C collaboration, public-figure promotion, and customized campaign design.",
    points: ["City or barangay route naming rights", "Mall / venue showcase naming", "University Championship partnership", "Coach C / James Yap style public-figure activation"]
  }
};

const faqs = [
  { q: "How can players join?", a: "Registration links should point to the official KOTI form, Facebook post, or partner app once those URLs are confirmed." },
  { q: "How can cities partner with KOTI?", a: "Cities can support venues, local promotion, player recruitment, and government-unit coordination for a city stop." },
  { q: "How can brands sponsor a city stop?", a: "Brands can choose from basic rights, digital rights, on-ground rights, or a custom campaign package." },
  { q: "Where can fans watch highlights?", a: "Highlight links can be connected to official Facebook, TikTok, or YouTube posts as they are supplied." },
  { q: "When will the University Championship open?", a: "The campus lane is currently planned as North 8 universities and South 8 universities, followed by regional finals and national finals." }
];

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);

function getRouteLane(stop) {
  const venue = `${stop.venue || ""} ${stop.report || ""}`.toLowerCase();
  const showcaseSignals = ["mall", "sm ", "market", "arena", "showcase", "complex", "sports complex"];
  const barangaySignals = ["barangay", "brgy", "covered court", "basketball court", "subd", "damayan"];
  if (showcaseSignals.some((signal) => venue.includes(signal))) return "showcase";
  if (barangaySignals.some((signal) => venue.includes(signal))) return "barangay";
  return stop.tag === "open" ? "barangay" : "showcase";
}

function getRouteLaneLabel(lane) {
  return lane === "showcase" ? "Mall / Venue Showcase" : "Barangay Court Route";
}

function projectRoutePoint(point) {
  const x = ((point.lng - routeBounds.minLng) / (routeBounds.maxLng - routeBounds.minLng)) * 100;
  const y = ((routeBounds.maxLat - point.lat) / (routeBounds.maxLat - routeBounds.minLat)) * 100;
  return {
    ...point,
    x: Math.max(2, Math.min(98, x)),
    y: Math.max(2, Math.min(98, y))
  };
}

function routePointByLabel(points, label) {
  return points.find((point) => point.label === label);
}

function renderNationalRouteMap() {
  const target = document.querySelector("#national-route-map");
  if (!target) return;

  const projected = nationalRoutePoints.map(projectRoutePoint);
  const routeLines = routeLineGroups.map((group) => {
    const coordinates = group.labels
      .map((label) => routePointByLabel(projected, label))
      .filter(Boolean)
      .map((point) => `${point.x.toFixed(2)},${point.y.toFixed(2)}`)
      .join(" ");

    return `<polyline class="route-line ${escapeHtml(group.type)}" points="${coordinates}"></polyline>`;
  }).join("");

  target.innerHTML = `
    <div class="route-map-stage">
      <div class="route-map-title">
        <span>NCR Covered</span>
        <strong>KOTI National Route</strong>
        <p>City coordinates are plotted from real Philippine locations; the visual is branded for KOTI, not copied from Google Maps.</p>
      </div>
      <svg class="route-map-svg" viewBox="0 0 100 100" role="img" aria-label="KOTI national route map across the Philippines">
        <defs>
          <filter id="routeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.8" result="blur"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <path class="route-island luzon" d="M40,11 L53,17 L56,29 L51,41 L42,48 L34,43 L29,31 L33,18 Z"></path>
        <path class="route-island palawan" d="M17,47 L21,51 L24,60 L25,72 L23,83 L19,78 L18,66 L15,56 Z"></path>
        <path class="route-island visayas" d="M43,53 L54,49 L67,52 L75,58 L68,68 L54,69 L45,63 Z"></path>
        <path class="route-island mindanao" d="M64,72 L83,73 L93,82 L84,94 L66,92 L58,83 Z"></path>
        <ellipse class="coverage-halo ncr" cx="${routePointByLabel(projected, "NCR Covered").x.toFixed(2)}" cy="${routePointByLabel(projected, "NCR Covered").y.toFixed(2)}" rx="7.5" ry="5.2"></ellipse>
        <ellipse class="coverage-halo north" cx="${routePointByLabel(projected, "North 60").x.toFixed(2)}" cy="${routePointByLabel(projected, "North 60").y.toFixed(2)}" rx="12" ry="8"></ellipse>
        <ellipse class="coverage-halo south" cx="${routePointByLabel(projected, "South 61+").x.toFixed(2)}" cy="${routePointByLabel(projected, "South 61+").y.toFixed(2)}" rx="13" ry="9"></ellipse>
        ${routeLines}
        ${projected.map((point) => `
          <g class="route-node ${escapeHtml(point.type)} ${point.featured ? "featured" : ""}" transform="translate(${point.x.toFixed(2)} ${point.y.toFixed(2)})">
            <circle r="${point.featured ? "1.8" : "1.05"}"></circle>
            ${point.featured ? `<text x="2.6" y="0.75">${escapeHtml(point.label)}</text>` : ""}
          </g>
        `).join("")}
      </svg>
      <div class="route-map-foot">
        <i>Gold hub: NCR covered</i>
        <i>Violet base: S1 North / South</i>
        <i>Dashed lines: future regions</i>
      </div>
    </div>
  `;
}

function renderMediaGrid(selector) {
  const grid = document.querySelector(selector);
  if (!grid) return;
  grid.innerHTML = mediaCards.map((card) => `
    <article class="media-card">
      <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.title)}">
      <div>
        <span>${escapeHtml(card.label)}</span>
        <strong>${escapeHtml(card.title)}</strong>
        <p>${escapeHtml(card.body)}</p>
      </div>
    </article>
  `).join("");
}

function renderCityCards(filter = "all") {
  const grid = document.querySelector("#city-card-grid");
  if (!grid) return;

  const visible = tourStops.filter((stop) => {
    const lane = getRouteLane(stop);
    if (filter === "all") return true;
    if (filter === "complete") return stop.tag === "complete";
    if (filter === "soon") return stop.tag === "soon";
    if (filter === "open") return stop.tag === "open";
    if (filter === "barangay" || filter === "showcase") return lane === filter;
    return stop.group === filter;
  });

  grid.innerHTML = visible.map((stop) => `
    <article class="city-card">
      <div class="city-card-head">
        <span>${escapeHtml(stop.region)}</span>
        <i class="status ${escapeHtml(stop.tag)}">${escapeHtml(stop.status)}</i>
      </div>
      <em class="lane-badge ${escapeHtml(getRouteLane(stop))}">${escapeHtml(getRouteLaneLabel(getRouteLane(stop)))}</em>
      <strong>${escapeHtml(stop.city)}</strong>
      <p class="date-line">${escapeHtml(stop.date)} | ${escapeHtml(stop.venue)}</p>
      <dl>
        <div><dt>Champion</dt><dd>${escapeHtml(stop.champion)}</dd></div>
        <div><dt>Runner-up</dt><dd>${escapeHtml(stop.runnerUp)}</dd></div>
        <div><dt>Third</dt><dd>${escapeHtml(stop.third)}</dd></div>
      </dl>
      <p>${escapeHtml(stop.report)}</p>
      <a class="text-link" href="${stop.highlight ? escapeHtml(stop.highlight) : "#"}">${stop.highlight ? "Open Highlight" : "Highlight link coming soon"}</a>
    </article>
  `).join("");
}

function renderHeroStories() {
  const grid = document.querySelector("#hero-story-grid");
  if (!grid) return;
  grid.innerHTML = heroStories.map((story) => `
    <article class="story-card">
      <span>${escapeHtml(story.label)}</span>
      <strong>${escapeHtml(story.title)}</strong>
      <p>${escapeHtml(story.body)}</p>
    </article>
  `).join("");
}

function renderPackage(key = "a") {
  const panel = document.querySelector("#package-panel");
  const item = packages[key];
  if (!panel || !item) return;
  panel.innerHTML = `
    <article>
      <span>Package ${escapeHtml(key.toUpperCase())}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
      <ul>
        ${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderFaq() {
  const list = document.querySelector("#faq-list");
  if (!list) return;
  list.innerHTML = faqs.map((item) => `
    <details>
      <summary>${escapeHtml(item.q)}</summary>
      <p>${escapeHtml(item.a)}</p>
    </details>
  `).join("");
}

function updateNextStop() {
  const title = document.querySelector("#next-city-title");
  const copy = document.querySelector("#next-city-copy");
  if (!title || !copy) return;

  const now = new Date();
  const datedStops = tourStops.filter((stop) => stop.start && stop.tag !== "complete");
  const upcoming = datedStops.find((stop) => new Date(`${stop.start}T00:00:00+08:00`) >= now) || datedStops[0];
  if (!upcoming) return;

  title.textContent = `${upcoming.city} is on deck.`;
  copy.textContent = `${upcoming.date} | ${upcoming.status}. The next #HaringLungsod storyline can connect players, crews, city pride, and short-form content.`;
}

document.querySelectorAll("[data-city-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-city-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCityCards(button.dataset.cityFilter);
  });
});

document.querySelectorAll("[data-package]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-package]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPackage(button.dataset.package);
  });
});

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());

renderNationalRouteMap();
renderMediaGrid("#home-media-grid");
renderMediaGrid("#about-media-grid");
renderCityCards();
renderHeroStories();
renderPackage();
renderFaq();
updateNextStop();
