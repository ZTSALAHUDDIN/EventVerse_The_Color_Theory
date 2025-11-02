// EVENT DATA
const events = [
  {
    id: 1,
    name: "Code Clash",
    category: "technical",
    time: "10:00 AM",
    date: "Dec 1",
    venue: "Lab A",
    description: "Intense programming competition where you solve challenges against the clock.",
    rules: "1. Solo participation\n2. 3 hours duration\n3. Any language allowed",
    prizePool: "₹50,000 (1st), ₹30,000 (2nd), ₹20,000 (3rd)",
    totalPrize: 100000,
    organizer: "Programming Club",
    participants: 125,
  },
  {
    id: 2,
    name: "Web Wizardry",
    category: "technical",
    time: "2:00 PM",
    date: "Dec 1",
    venue: "Lab B",
    description: "Build innovative web applications and showcase your web development skills.",
    rules: "1. Teams of 2-3\n2. 4 hours duration\n3. React/Vue preferred",
    prizePool: "₹75,000 (1st), ₹45,000 (2nd), ₹25,000 (3rd)",
    totalPrize: 145000,
    organizer: "Web Dev Club",
    participants: 98,
  },
  {
    id: 3,
    name: "AI Innovation",
    category: "technical",
    time: "10:00 AM",
    date: "Dec 2",
    venue: "Hall C",
    description: "Develop AI solutions for real-world problems using machine learning.",
    rules: "1. Teams of 3-4\n2. 5 hours duration\n3. Any ML framework",
    prizePool: "₹1,00,000 (1st), ₹60,000 (2nd), ₹35,000 (3rd)",
    totalPrize: 195000,
    organizer: "AI & ML Club",
    participants: 87,
  },
  {
    id: 4,
    name: "Cyber Quest",
    category: "technical",
    time: "11:00 AM",
    date: "Dec 3",
    venue: "Lab D",
    description: "Capture the Flag competition testing your cybersecurity skills.",
    rules: "1. Teams of 2\n2. 2 hours duration\n3. No external tools",
    prizePool: "₹80,000 (1st), ₹50,000 (2nd), ₹30,000 (3rd)",
    totalPrize: 160000,
    organizer: "Cybersecurity Club",
    participants: 64,
  },
  {
    id: 5,
    name: "Battle of Bands",
    category: "cultural",
    time: "6:00 PM",
    date: "Dec 1",
    venue: "Auditorium",
    description: "Showcase your musical talents and rock the stage with your band.",
    rules: "1. 4-8 members per band\n2. 15 minutes performance\n3. Original or covers allowed",
    prizePool: "₹60,000 (1st), ₹35,000 (2nd), ₹20,000 (3rd)",
    totalPrize: 115000,
    organizer: "Cultural Committee",
    participants: 42,
  },
  {
    id: 6,
    name: "Dance Revolution",
    category: "cultural",
    time: "7:30 PM",
    date: "Dec 2",
    venue: "Auditorium",
    description: "Express yourself through dance and compete with incredible dancers.",
    rules: "1. Groups or solo\n2. 5 minutes max\n3. Any dance style",
    prizePool: "₹55,000 (1st), ₹30,000 (2nd), ₹15,000 (3rd)",
    totalPrize: 100000,
    organizer: "Dance Club",
    participants: 78,
  },
  {
    id: 7,
    name: "Gaming Tournament",
    category: "gaming",
    time: "9:00 AM",
    date: "Dec 2",
    venue: "Gaming Arena",
    description: "Compete in popular esports titles and prove your gaming prowess.",
    rules: "1. Teams or solo\n2. Playoff format\n3. All laptops provided",
    prizePool: "₹1,50,000 (1st), ₹80,000 (2nd), ₹40,000 (3rd)",
    totalPrize: 270000,
    organizer: "Gaming Club",
    participants: 156,
  },
  {
    id: 8,
    name: "Web Dev Workshop",
    category: "workshops",
    time: "2:00 PM",
    date: "Dec 3",
    venue: "Class Room 5",
    description: "Learn modern web development from industry experts.",
    rules: "1. Free for all\n2. 2 hours session\n3. Laptops required",
    prizePool: "Certificate of Participation",
    totalPrize: 0,
    organizer: "Tech Club",
    participants: 203,
  },
]

const testimonials = [
  {
    text: "EventVerse was incredible! The organization, prizes, and energy were unmatched.",
    author: "Rahul Kumar",
    role: "CSE Student 2024",
  },
  {
    text: "Amazing platform to showcase skills and network with talented individuals!",
    author: "Priya Singh",
    role: "IT Student 2025",
  },
  {
    text: "The prize pools are huge and competitions are really challenging.",
    author: "Arjun Patel",
    role: "ECE Student 2024",
  },
  { text: "Best tech fest ever! Highly recommended to all students.", author: "Neha Verma", role: "CS Student 2025" },
]

const sponsors = [
  { name: "TechCorp", logo: "💻" },
  { name: "Cloud Systems", logo: "☁️" },
  { name: "AI Labs", logo: "🤖" },
  { name: "Web Masters", logo: "🌐" },
  { name: "Game Studios", logo: "🎮" },
  { name: "DevTools", logo: "⚙️" },
]

const faqs = [
  {
    question: "How do I register?",
    answer: "Fill the registration form above with your details and select events. That's it!",
  },
  { question: "What's the total prize pool?", answer: "We have over ₹10,85,000 in prizes across all events!" },
  {
    question: "Can I participate in multiple events?",
    answer: "Yes! Register for as many events as you want. Just check the schedule!",
  },
  {
    question: "Do I need to bring a laptop?",
    answer: "For most technical events, laptops will be provided. You can bring your own if you prefer.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No registration fees! All events are absolutely free to participate.",
  },
  { question: "When does the fest start?", answer: "EventVerse starts on December 1st, 2025. Save the date!" },
]

let selectedEventIds = []

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderEvents(events)
  renderSchedule()
  renderTestimonials()
  renderSponsors()
  renderFAQ()
  populateEventSelect()
  setupEventListeners()
  startCountdown()
  calculateTotalPrize()
  setupMobileMenu()
})

// WELCOME ANIMATION
function setupWelcomeAnimation() {
  const welcomeScreen = document.getElementById("welcomeScreen")

  setTimeout(() => {
    welcomeScreen.style.opacity = "0"
    welcomeScreen.style.visibility = "hidden"
    welcomeScreen.style.pointerEvents = "none"
  }, 3500)

  setTimeout(() => {
    welcomeScreen.classList.add("hidden")
  }, 4500)
}

setupWelcomeAnimation()

// COUNTDOWN TIMER
function startCountdown() {
  const targetDate = new Date("December 1, 2025 00:00:00").getTime()

  function update() {
    const now = new Date().getTime()
    const distance = targetDate - now

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      const daysEl = document.getElementById("days")
      const hoursEl = document.getElementById("hours")
      const minutesEl = document.getElementById("minutes")
      const secondsEl = document.getElementById("seconds")

      if (daysEl) daysEl.textContent = String(days).padStart(2, "0")
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0")
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0")
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0")
    } else {
      const countdownEl = document.getElementById("countdown")
      if (countdownEl) {
        countdownEl.innerHTML =
          '<div style="grid-column: 1/-1; color: var(--accent); font-size: 1.5rem; font-weight: bold; animation: glow 1s infinite;">🎉 FEST IS LIVE! 🎉</div>'
      }
    }
  }

  update()
  setInterval(update, 1000)
}

// CALCULATE TOTAL PRIZE
function calculateTotalPrize() {
  const total = events.reduce((sum, e) => sum + e.totalPrize, 0)
  const formatted = total > 1000000 ? (total / 100000).toFixed(1) + ",00,000+" : "₹" + total.toLocaleString()
  document.getElementById("totalPrize").textContent = "₹" + (total / 100000).toFixed(1).replace(/\.0$/, "") + ",00,000+"
}

// RENDER EVENTS
function renderEvents(eventsToRender) {
  const grid = document.getElementById("eventsGrid")
  grid.innerHTML = ""

  if (eventsToRender.length === 0) {
    grid.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No events found</div>'
    return
  }

  eventsToRender.forEach((event, index) => {
    const card = document.createElement("div")
    card.className = "event-card"
    card.style.animationDelay = `${index * 0.05}s`
    card.innerHTML = `
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <div class="event-prize">
                <div class="event-prize-label">Prize Pool</div>
                <div class="event-prize-amount">${event.prizePool.split("(")[0]}</div>
            </div>
            <div class="event-meta">
                <span>📅 ${event.date}</span>
                <span>📍 ${event.venue}</span>
            </div>
            <button class="btn btn-primary iconic-btn event-card-btn" onclick="openEventModal(${event.id})">
                <span class="icon">→</span> View Details
            </button>
        `
    grid.appendChild(card)
  })
}

// RENDER SCHEDULE
function renderSchedule() {
  const tbody = document.getElementById("scheduleBody")
  tbody.innerHTML = ""

  events.forEach((event) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td>${event.time}</td>
            <td><strong>${event.name}</strong></td>
            <td>${event.venue}</td>
            <td style="color: var(--accent); text-transform: capitalize;">${event.category}</td>
        `
    tbody.appendChild(row)
  })
}

// RENDER TESTIMONIALS
function renderTestimonials() {
  const grid = document.getElementById("testimonialsGrid")
  grid.innerHTML = ""

  testimonials.forEach((test, index) => {
    const card = document.createElement("div")
    card.className = "testimonial-card"
    card.style.animationDelay = `${index * 0.1}s`
    card.innerHTML = `
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">${test.text}</p>
            <div class="testimonial-author">${test.author}</div>
            <div class="testimonial-role">${test.role}</div>
        `
    grid.appendChild(card)
  })
}

// RENDER SPONSORS
function renderSponsors() {
  const grid = document.getElementById("sponsorsGrid")
  grid.innerHTML = ""

  sponsors.forEach((sponsor, index) => {
    const card = document.createElement("div")
    card.className = "sponsor-card"
    card.style.animationDelay = `${index * 0.05}s`
    card.innerHTML = `
            <div class="sponsor-logo">${sponsor.logo}</div>
            <div class="sponsor-name">${sponsor.name}</div>
        `
    grid.appendChild(card)
  })
}

// RENDER FAQ
function renderFAQ() {
  const container = document.getElementById("faqContainer")
  container.innerHTML = ""

  faqs.forEach((faq, index) => {
    const item = document.createElement("div")
    item.className = "faq-item"
    item.style.animationDelay = `${index * 0.05}s`
    item.innerHTML = `
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h3>${faq.question}</h3>
                <span class="faq-toggle">▼</span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `
    container.appendChild(item)
  })
}

// TOGGLE FAQ
function toggleFAQ(element) {
  const answer = element.nextElementSibling
  const toggle = element.querySelector(".faq-toggle")

  document.querySelectorAll(".faq-answer.open").forEach((open) => {
    if (open !== answer) {
      open.classList.remove("open")
      open.previousElementSibling.querySelector(".faq-toggle").classList.remove("open")
    }
  })

  answer.classList.toggle("open")
  toggle.classList.toggle("open")
  playSound("click")
}

// POPULATE EVENT SELECT
function populateEventSelect() {
  const select = document.getElementById("eventSelect")
  select.innerHTML = ""

  events.forEach((event) => {
    const option = document.createElement("option")
    option.value = event.id
    option.textContent = event.name
    select.appendChild(option)
  })

  select.addEventListener("change", updateSelectedEvents)
}

// UPDATE SELECTED EVENTS
function updateSelectedEvents() {
  const select = document.getElementById("eventSelect")
  selectedEventIds = Array.from(select.selectedOptions).map((o) => Number(o.value))
  displaySelectedEvents()
  playSound("click")
}

// DISPLAY SELECTED EVENTS
function displaySelectedEvents() {
  const display = document.getElementById("selectedEventsDisplay")
  display.innerHTML = ""

  selectedEventIds.forEach((id) => {
    const event = events.find((e) => e.id === id)
    if (event) {
      const tag = document.createElement("div")
      tag.className = "event-tag"
      tag.innerHTML = `
                ${event.name}
                <span class="event-tag-remove" onclick="removeEvent(${id})">×</span>
            `
      display.appendChild(tag)
    }
  })
}

// REMOVE EVENT
function removeEvent(id) {
  const select = document.getElementById("eventSelect")
  Array.from(select.options).forEach((opt) => {
    if (Number(opt.value) === id) opt.selected = false
  })
  updateSelectedEvents()
}

// SEARCH AND FILTER
function setupEventListeners() {
  document.getElementById("searchBar").addEventListener("input", filterEvents)

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      filterEvents()
      playSound("click")
    })
  })
}

function filterEvents() {
  const search = document.getElementById("searchBar").value.toLowerCase()
  const filter = document.querySelector(".filter-btn.active").dataset.filter

  let filtered = events

  if (filter !== "all") {
    filtered = filtered.filter((e) => e.category === filter)
  }

  if (search) {
    filtered = filtered.filter(
      (e) => e.name.toLowerCase().includes(search) || e.description.toLowerCase().includes(search),
    )
  }

  renderEvents(filtered)
  playSound("click")
}

// OPEN EVENT MODAL
function openEventModal(eventId) {
  const event = events.find((e) => e.id === eventId)
  if (!event) return

  const modal = document.getElementById("eventModal")
  document.getElementById("modalBody").innerHTML = `
        <h2 style="color: var(--accent); margin-bottom: 1rem;">${event.name}</h2>
        <p>${event.description}</p>
        
        <h3>Prize Pool</h3>
        <p>${event.prizePool}</p>
        
        <h3>Rules & Details</h3>
        <p style="white-space: pre-line;">${event.rules}</p>
        
        <h3>Event Information</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Venue:</strong> ${event.venue}</p>
        <p><strong>Organizer:</strong> ${event.organizer}</p>
        <p><strong>Participants:</strong> ${event.participants}</p>
        
        <button class="btn btn-primary iconic-btn btn-large" onclick="selectEventFromModal(${event.id})" style="margin-top: 1.5rem;">
            <span class="icon">✓</span> Register for This Event
        </button>
    `

  modal.classList.add("active")
  playSound("success")
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("eventModal").classList.remove("active")
}

// SELECT EVENT FROM MODAL
function selectEventFromModal(eventId) {
  if (!selectedEventIds.includes(eventId)) {
    selectedEventIds.push(eventId)
  }

  const select = document.getElementById("eventSelect")
  Array.from(select.options).forEach((opt) => {
    opt.selected = selectedEventIds.includes(Number(opt.value))
  })

  displaySelectedEvents()
  closeModal()
  scrollToSection("register")
  playSound("success")
}

// FORM SUBMISSION
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const fullName = document.getElementById("fullName").value.trim()
  const email = document.getElementById("email").value.trim()
  const college = document.getElementById("college").value.trim()

  if (!fullName || !email || !college || selectedEventIds.length === 0) {
    playSound("error")
    alert("Please fill all required fields and select at least one event!")
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    playSound("error")
    alert("Please enter a valid email!")
    return
  }

  showSuccessPopup()
  document.getElementById("registrationForm").reset()
  selectedEventIds = []
  displaySelectedEvents()
  document.getElementById("eventSelect").value = ""
  playSound("success")
})

// SHOW SUCCESS POPUP
function showSuccessPopup() {
  const popup = document.getElementById("successPopup")
  const eventNames = selectedEventIds.map((id) => events.find((e) => e.id === id).name).join(", ")
  document.getElementById("successMessage").textContent = `You have been registered for: ${eventNames}`
  popup.classList.add("active")

  setTimeout(() => {
    closeSuccessPopup()
  }, 5000)
}

// CLOSE SUCCESS POPUP
function closeSuccessPopup() {
  document.getElementById("successPopup").classList.remove("active")
}

// SCROLL TO SECTION
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

// MOBILE MENU
function setupMobileMenu() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    playSound("click")
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      playSound("click")
    })
  })
}

// SOUND EFFECTS
function playSound(type = "click") {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    if (type === "success") {
      osc.frequency.value = 1000
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2)
      osc.start(audioCtx.currentTime)
      osc.stop(audioCtx.currentTime + 0.2)
    } else if (type === "error") {
      osc.frequency.value = 300
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15)
      osc.start(audioCtx.currentTime)
      osc.stop(audioCtx.currentTime + 0.15)
    } else {
      osc.frequency.value = 800
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1)
      osc.start(audioCtx.currentTime)
      osc.stop(audioCtx.currentTime + 0.1)
    }
  } catch (e) {
    console.log("Audio not available")
  }
}

// CLOSE MODAL ON ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
    closeSuccessPopup()
  }
})

// CLOSE MODAL ON OUTSIDE CLICK
document.getElementById("eventModal").addEventListener("click", (e) => {
  if (e.target.id === "eventModal") {
    closeModal()
  }
})
