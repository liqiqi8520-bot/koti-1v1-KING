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

const coveragePanels = {
  north: {
    title: "Season 1 North Base",
    stat: "North 60",
    body: "Season 1 built the first North-side community base before KOTI moved into the larger Season 2 city-qualifier model.",
    chips: ["North Barangays", "Community Games", "Local Courts", "Grassroots Winners"],
    points: [
      { label: "North 60", x: 46, y: 30, status: "active" },
      { label: "NCR Base", x: 48, y: 32, status: "active" },
      { label: "North Route", x: 42, y: 24, status: "open" }
    ]
  },
  south: {
    title: "Season 1 South Base",
    stat: "South 61+",
    body: "Season 1 also built a South-side community base. This gives KOTI a stronger national story before Season 2 expands through core-city qualifiers.",
    chips: ["South Barangays", "Community Games", "Visayas Pathway", "Regional Base"],
    points: [
      { label: "South 61+", x: 55, y: 64, status: "active" },
      { label: "Visayas", x: 54, y: 60, status: "active" },
      { label: "South Route", x: 60, y: 70, status: "open" }
    ]
  },
  next: {
    title: "Season 2 NCR + Future Regions",
    stat: "NCR covered",
    body: "Season 2 has already covered the whole NCR area. The next story is expansion into more core Philippine regions.",
    chips: ["NCR Covered", "Mindoro", "Baguio", "Aklan", "Cebu", "Bohol", "Mindanao", "Palawan", "Davao"],
    points: [
      { label: "NCR", x: 46, y: 30, status: "active" },
      { label: "Mindoro", x: 43, y: 43, status: "open" },
      { label: "Baguio", x: 37, y: 15, status: "open" },
      { label: "Aklan", x: 48, y: 53, status: "open" },
      { label: "Bacolod", x: 46, y: 63, status: "open" },
      { label: "Cebu", x: 57, y: 62, status: "open" },
      { label: "Bohol", x: 61, y: 70, status: "open" },
      { label: "Palawan", x: 30, y: 64, status: "future" },
      { label: "Mindanao", x: 64, y: 86, status: "future" },
      { label: "Davao", x: 73, y: 88, status: "future" }
    ]
  },
  university: {
    title: "University Championship",
    stat: "North 8 + South 8",
    body: "The campus lane is planned as North and South eight-university circuits, then regional finals and national finals.",
    chips: ["North 8 Universities", "South 8 Universities", "Regional Finals", "National Finals"],
    points: [
      { label: "North 8", x: 46, y: 31, status: "campus" },
      { label: "South 8", x: 56, y: 65, status: "campus" }
    ]
  }
};

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

function renderCoverage(key = "north") {
  const target = document.querySelector("#coverage-map");
  const panel = coveragePanels[key];
  if (!target || !panel) return;

  target.innerHTML = `
    <div class="map-card">
      <span>${escapeHtml(panel.stat)}</span>
      <strong>${escapeHtml(panel.title)}</strong>
      <p>${escapeHtml(panel.body)}</p>
      <div class="philippines-point-map" aria-label="Simplified Philippines coverage point map">
        <span class="island-shape luzon-shape"></span>
        <span class="island-shape visayas-shape"></span>
        <span class="island-shape mindanao-shape"></span>
        ${panel.points.map((point) => `
          <b class="map-point ${escapeHtml(point.status)}" style="left:${escapeHtml(point.x)}%;top:${escapeHtml(point.y)}%">
            <i></i>${escapeHtml(point.label)}
          </b>
        `).join("")}
      </div>
      <div class="chip-cloud">
        ${panel.chips.map((chip) => `<i>${escapeHtml(chip)}</i>`).join("")}
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

document.querySelectorAll("[data-map-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-map-tab]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCoverage(button.dataset.mapTab);
  });
});

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

renderCoverage();
renderMediaGrid("#home-media-grid");
renderMediaGrid("#about-media-grid");
renderCityCards();
renderHeroStories();
renderPackage();
renderFaq();
updateNextStop();
