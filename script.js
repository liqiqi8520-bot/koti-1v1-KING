const tourStops = [
  { city: "Mandaluyong", group: "north", region: "North / NCR", date: "April 18-19", start: "2026-04-18", venue: "Brgy Mauway Basketball Court", status: "Completed", tag: "complete" },
  { city: "Caloocan", group: "north", region: "North / NCR", date: "April 25-26", start: "2026-04-25", venue: "H Dela Costa Covered Court", status: "Completed", tag: "complete" },
  { city: "Valenzuela", group: "north", region: "North / NCR", date: "May 2-3", start: "2026-05-02", venue: "Barangay Tagalag Basketball Court", status: "Completed", tag: "complete" },
  { city: "Manila", group: "north", region: "North / NCR", date: "May 9-10", start: "2026-05-09", venue: "San Anadres Sports Complex", status: "Completed", tag: "complete" },
  { city: "Taguig", group: "north", region: "North / NCR", date: "May 16-17", start: "2026-05-16", venue: "Caimito Basketball Court", status: "Completed", tag: "complete" },
  { city: "Pateros", group: "north", region: "North / NCR", date: "May 23-24", start: "2026-05-23", venue: "Pateros Sports Complex", status: "Completed", tag: "complete" },
  { city: "Marikina", group: "north", region: "North / NCR", date: "May 30-31", start: "2026-05-30", venue: "Barangay Tumana Basketball Court", status: "Completed", tag: "complete" },
  { city: "Las Pinas", group: "north", region: "North / NCR", date: "June 6-7", start: "2026-06-06", venue: "Fatima Subd Basketball Court", status: "TBC", tag: "tbc" },
  { city: "Quezon City", group: "north", region: "North / NCR", date: "June 13-14", start: "2026-06-13", venue: "Barangay Roxas Covered Court", status: "Registration Opening Soon", tag: "soon" },
  { city: "Pasay", group: "north", region: "North / NCR", date: "June 20-21", start: "2026-06-20", venue: "Edses Basketball Court", status: "Registration Opening Soon", tag: "soon" },
  { city: "San Juan", group: "north", region: "North / NCR", date: "June 27-28", start: "2026-06-27", venue: "Barangay Batis Basketball Court", status: "Registration Opening Soon", tag: "soon" },
  { city: "Pasig", group: "north", region: "North / NCR", date: "July 4-5", start: "2026-07-04", venue: "Damayan Basketball Court", status: "Registration Opening Soon", tag: "soon" },
  { city: "Cainta", group: "open", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Pangasinan", group: "open", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Cavite", group: "open", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Bulacan", group: "open", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Pampanga", group: "open", region: "North Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Iloilo", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Bacolod", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Boracay", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Dumaguete", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Talisay", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Cebu", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Mandaue", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Lapu-Lapu", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Toledo", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Bogo", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Tagbilaran", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Tacloban", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Cagayan de Oro", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Zamboanga", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "General Santos", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "Davao", group: "south", region: "South Pipeline", date: "To open", venue: "Venue TBC", status: "To Open", tag: "open" },
  { city: "University Championship", group: "university", region: "Development Lane", date: "To develop", venue: "Campus network TBC", status: "To Develop", tag: "university" }
];

const cultureStories = [
  { label: "#HaringLungsod", title: "City Kings", body: "Every stop asks one question: who can carry the name of the city on court?" },
  { label: "#TropaTakeover", title: "Crew Energy", body: "Friends, rivals, and local supporters arrive as a tribe, giving each match a street-level crowd." },
  { label: "Barangay Roots", title: "Real Courts", body: "The format starts where Filipino basketball lives: open courts, loud sidelines, and neighborhood pride." },
  { label: "Mall Stage", title: "Public Arena", body: "KOTI can scale into mall atriums where casual foot traffic becomes live spectators." },
  { label: "Player Story", title: "Unknown to Known", body: "A clutch bucket or city title can turn a grassroots player into a name fans remember." },
  { label: "Recap Culture", title: "Highlights Travel", body: "Short clips, live reactions, and game stories make every city stop useful for social media." },
  { label: "Sponsor Fit", title: "Visible Action", body: "Brands enter the action through courtside presence, naming, content, and city activation." },
  { label: "Future Lane", title: "Campus Kings", body: "A university championship line can open the next recruitment and youth culture layer." }
];

const portalCards = [
  { number: "01", title: "Next Stop", body: "Fast access to the upcoming city, registration status, and event hook.", href: "#next-stop" },
  { number: "02", title: "Barangay Reach", body: "S1 128 barangays plus S2 50 barangays and counting across the tour pipeline.", href: "#coverage" },
  { number: "03", title: "Media Wall", body: "FB/TikTok photos, creator posts, game-day recaps, and player reels.", href: "#media" },
  { number: "04", title: "Partner Lane", body: "Sponsor, venue, city, creator, and government cooperation opportunities.", href: "#partners" }
];

const authorityCards = [
  { label: "Tournament Ambassador", title: "Coach C", body: "Million-reach basketball creator across FB/TikTok, positioned as a KOTI ambassador and content amplifier." },
  { label: "Exposure Signal", title: "12.9M+", body: "Verified cross-platform season exposure, with public reporting stating National Finals alone passed 10M total views." },
  { label: "Public Support", title: "40+ GOV", body: "Cooperation with 40+ government units gives the tour stronger local access, trust, and on-ground activation potential." }
];

const mediaCards = [
  { label: "Hero Visual", title: "Season 2 Identity", body: "Use the official Tropa Takeover visual as the campaign anchor.", image: "assets/koti-season2-kv-16x9.jpg" },
  { label: "Activation Proof", title: "Mall Arena", body: "Sponsor-friendly court energy for high-foot-traffic venue pitches.", image: "assets/mall-activation-koti.png" },
  { label: "Finals Proof", title: "National Stage", body: "Season 1 finals image shows the property can scale beyond local courts.", image: "assets/season1-national-finals-main-kv.jpg" },
  { label: "Culture Placeholder", title: "FB Photo Slot", body: "Replace with real crowd, Coach C, player reel, or government activation photo.", image: "assets/tropa-takeover-logo.png" }
];

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);

function renderSchedule(filter = "all") {
  const body = document.querySelector("#city-schedule-body");
  if (!body) return;

  const visibleStops = tourStops.filter((stop) => {
    if (filter === "all") return true;
    if (filter === "open") return stop.tag === "open";
    return stop.group === filter;
  });

  body.innerHTML = visibleStops.map((stop) => `
    <tr>
      <td>${escapeHtml(stop.city)}</td>
      <td>${escapeHtml(stop.region)}</td>
      <td>${escapeHtml(stop.date)}</td>
      <td>${escapeHtml(stop.venue)}</td>
      <td><span class="tag ${escapeHtml(stop.tag)}">${escapeHtml(stop.status)}</span></td>
    </tr>
  `).join("");
}

function renderCultureWall() {
  const grid = document.querySelector("#culture-wall-grid");
  if (!grid) return;
  grid.innerHTML = cultureStories.map((story) => `
    <article class="culture-tile">
      <span>${escapeHtml(story.label)}</span>
      <strong>${escapeHtml(story.title)}</strong>
      <p>${escapeHtml(story.body)}</p>
    </article>
  `).join("");
}

function renderPortalHub() {
  const grid = document.querySelector("#portal-hub-grid");
  if (!grid) return;
  grid.innerHTML = portalCards.map((card) => `
    <a href="${escapeHtml(card.href)}" class="hub-card">
      <span>${escapeHtml(card.number)}</span>
      <strong>${escapeHtml(card.title)}</strong>
      <p>${escapeHtml(card.body)}</p>
    </a>
  `).join("");
}

function renderAuthorityCards() {
  const grid = document.querySelector("#authority-grid");
  if (!grid) return;
  grid.innerHTML = authorityCards.map((card) => `
    <article class="authority-card">
      <span>${escapeHtml(card.label)}</span>
      <strong>${escapeHtml(card.title)}</strong>
      <p>${escapeHtml(card.body)}</p>
    </article>
  `).join("");
}

function renderMediaWall() {
  const grid = document.querySelector("#media-wall-grid");
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

function updateNextStop() {
  const datedStops = tourStops.filter((stop) => stop.start && stop.tag !== "complete");
  const now = new Date();
  const upcoming = datedStops.find((stop) => new Date(`${stop.start}T00:00:00+08:00`) >= now) || datedStops[0] || tourStops.find((stop) => stop.tag === "open");
  if (!upcoming) return;

  const title = document.querySelector("#next-city-title");
  const copy = document.querySelector("#next-city-copy");
  const status = document.querySelector("#next-city-status");
  const progress = document.querySelector("#next-city-progress");

  if (title) title.textContent = `${upcoming.city} is on deck.`;
  if (copy) {
    copy.textContent = `${upcoming.city} carries the next #HaringLungsod storyline: local players enter, crews show up, clips travel, and the city champion becomes the face of the stop.`;
  }
  if (status) status.textContent = upcoming.status;
  if (progress) progress.style.width = upcoming.tag === "tbc" ? "78%" : "64%";
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSchedule(button.dataset.filter);
  });
});

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());

renderSchedule();
renderCultureWall();
renderPortalHub();
renderAuthorityCards();
renderMediaWall();
updateNextStop();
