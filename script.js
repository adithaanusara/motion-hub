// =============================================================
// VEHICLE DATA
// ඔබගේ car images assets/cars/ folder එකට දාන්න.
// Example: assets/cars/toyota-chr.png
// =============================================================

const cars = [
  {
    brand: "TOYOTA",
    model: "2024 C-HR",
    bg: "C-HR",
    tagline: "Bold design. Reliable performance. Built for every journey.",
    price: "LKR 18.9M",
    year: "2024",
    mileage: "8,500 km",
    fuel: "Hybrid",
    type: ["SUV", "Hybrid"],
    image: "assets/cars/toyota-chr.png"
  },
  {
    brand: "BMW",
    model: "2023 320i",
    bg: "320i",
    tagline: "Sporty precision with refined everyday comfort.",
    price: "LKR 24.5M",
    year: "2023",
    mileage: "12,000 km",
    fuel: "Petrol",
    type: ["Sedan", "Luxury"],
    image: "assets/cars/bmw-320i.png"
  },
  {
    brand: "MERCEDES-BENZ",
    model: "2022 C200",
    bg: "C200",
    tagline: "Luxury, innovation, and effortless performance.",
    price: "LKR 27.8M",
    year: "2022",
    mileage: "18,400 km",
    fuel: "Petrol",
    type: ["Sedan", "Luxury"],
      image: "assets/cars/mercedes-c200.png"
  },
  {
    brand: "AUDI",
    model: "2023 Q3",
    bg: "Q3",
    tagline: "Compact SUV versatility with premium German engineering.",
    price: "LKR 26.2M",
    year: "2023",
    mileage: "9,800 km",
    fuel: "Petrol",
    type: ["SUV", "Luxury"],
      image: "assets/cars/audi-q3-2023.png"
  },
  {
    brand: "HONDA",
    model: "2024 Vezel",
    bg: "VEZEL",
    tagline: "Smart hybrid efficiency for modern city life.",
    price: "LKR 19.7M",
    year: "2024",
    mileage: "5,200 km",
    fuel: "Hybrid",
    type: ["SUV", "Hybrid"],
    image: "assets/cars/honda-vezel-2024.png"
  },
  {
    brand: "TOYOTA",
    model: "2023 Prius",
    bg: "PRIUS",
    tagline: "Iconic hybrid efficiency with a bold new shape.",
    price: "LKR 20.9M",
    year: "2023",
    mileage: "11,500 km",
    fuel: "Hybrid",
    type: ["Sedan", "Hybrid"],
    image: "assets/cars/toyota-prius-2023.png"
  },
  {
    brand: "BMW",
    model: "2022 X5",
    bg: "X5",
    tagline: "Commanding luxury SUV performance and space.",
    price: "LKR 39.5M",
    year: "2022",
    mileage: "21,300 km",
    fuel: "Diesel",
    type: ["SUV", "Luxury"],
    image: "assets/cars/bmw-x5-2022.png"
  },
  {
    brand: "SUZUKI",
    model: "2024 Swift",
    bg: "SWIFT",
    tagline: "Compact, agile, and perfect for the city.",
    price: "LKR 9.8M",
    year: "2024",
    mileage: "2,900 km",
    fuel: "Petrol",
    type: ["Sedan"],
    image: "assets/cars/suzuki-swift-2024.png"
  },
  {
    brand: "NISSAN",
    model: "2023 X-Trail",
    bg: "X-TRAIL",
    tagline: "Family-ready space with confident SUV capability.",
    price: "LKR 22.3M",
    year: "2023",
    mileage: "13,700 km",
    fuel: "Hybrid",
    type: ["SUV", "Hybrid"],
    image: "assets/cars/nissan-xtrail-2023.png"
  },
  {
    brand: "LAND ROVER",
    model: "2022 Evoque",
    bg: "EVOQUE",
    tagline: "Distinctive British luxury with all-road confidence.",
    price: "LKR 34.9M",
    year: "2022",
    mileage: "17,900 km",
    fuel: "Diesel",
    type: ["SUV", "Luxury"],
    image: "assets/cars/land-rover-evoque-2022.png"
  }
];

// =============================================================
// GLOBAL VARIABLES
// =============================================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

let index = 0;
let autoTimer;
let progressTimer;

const autoDelay = 5200;

// =============================================================
// HELPER FUNCTIONS
// =============================================================

function pad(number) {
  return String(number).padStart(2, "0");
}

function getCarImage(car) {
  return car.image || "assets/cars/car-placeholder.svg";
}

// =============================================================
// HERO SECTION
// =============================================================

function updateHero(newIndex, direction = 1) {
  index = (newIndex + cars.length) % cars.length;

  const car = cars[index];
  const nextCar = cars[(index + 1) % cars.length];
  const stage = $("#carStage");

  const heroBrand = $("#heroBrand");
const heroTopYear = $("#heroTopYear");

if (heroBrand) {
  heroBrand.textContent = car.brand;
}

if (heroTopYear) {
  heroTopYear.textContent = car.year;
}

  if (!stage) return;

  stage.classList.add("changing");

  const heroBgWord = $("#heroBgWord");

  if (heroBgWord) {
    heroBgWord.style.opacity = "0";
  }

  setTimeout(() => {
    const heroBrand = $("#heroBrand");
    const heroTitle = $("#heroTitle");
    const heroTagline = $("#heroTagline");
    const heroPrice = $("#heroPrice");
    const heroYear = $("#heroYear");
    const heroMileage = $("#heroMileage");
    const heroFuel = $("#heroFuel");
    const heroCarImage = $("#heroCarImage");
    const currentSlide = $("#currentSlide");
    const sideCarImage = $("#sideCarImage");
    const sideCarName = $("#sideCarName");

    if (heroBrand) heroBrand.textContent = car.brand;
    if (heroTitle) heroTitle.textContent = car.model;
    if (heroTagline) heroTagline.textContent = car.tagline;
    if (heroPrice) heroPrice.textContent = car.price;
    if (heroYear) heroYear.textContent = car.year;
    if (heroMileage) heroMileage.textContent = car.mileage;
    if (heroFuel) heroFuel.textContent = car.fuel;

    if (heroCarImage) {
      heroCarImage.src = getCarImage(car);
      heroCarImage.alt = `${car.brand} ${car.model}`;

      heroCarImage.onerror = function () {
        console.error("Hero image not found:", car.image);
        this.src = "assets/cars/car-01.svg";
      };
    }

    if (heroBgWord) {
      heroBgWord.textContent = car.bg;
    }

    if (currentSlide) {
      currentSlide.textContent = pad(index + 1);
    }

    if (sideCarImage) {
      sideCarImage.src = getCarImage(nextCar);
      sideCarImage.alt = `${nextCar.brand} ${nextCar.model}`;

      sideCarImage.onerror = function () {
        this.src = "assets/cars/car-02.svg";
      };
    }

    if (sideCarName) {
      sideCarName.textContent = nextCar.model;
    }

    $$(".hero-thumbs button").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });

    stage.classList.remove("changing");

    if (heroBgWord) {
      heroBgWord.style.opacity = "";
    }
  }, 280);

  restartAuto();
}

// =============================================================
// HERO THUMBNAILS
// =============================================================

function createThumbs() {
  const wrapper = $("#heroThumbs");

  if (!wrapper) return;

  wrapper.innerHTML = cars
    .map(
      (car, carIndex) => `
        <button
          type="button"
          aria-label="Show ${car.model}"
          class="${carIndex === 0 ? "active" : ""}"
          data-index="${carIndex}"
        >
          <img
            src="${getCarImage(car)}"
            alt="${car.brand} ${car.model}"
            onerror="this.src='assets/cars/car-01.svg'"
          >
        </button>
      `
    )
    .join("");

  wrapper.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) return;

    updateHero(Number(button.dataset.index));
  });
}

// =============================================================
// AUTO SLIDER
// =============================================================

function restartAuto() {
  clearInterval(autoTimer);
  clearInterval(progressTimer);

  const progressBar = $("#heroProgressBar");
  let elapsed = 0;

  if (progressBar) {
    progressBar.style.width = "0%";
  }

  progressTimer = setInterval(() => {
    elapsed += 50;

    if (progressBar) {
      const progress = Math.min(100, (elapsed / autoDelay) * 100);
      progressBar.style.width = `${progress}%`;
    }
  }, 50);

  autoTimer = setInterval(() => {
    updateHero(index + 1);
  }, autoDelay);
}

// =============================================================
// VEHICLE CARD
// =============================================================

function vehicleCard(car) {
  return `
    <article
      class="vehicle-card reveal"
      data-types="${car.type.join(" ")}"
    >
      <div class="vehicle-media">
        <span class="vehicle-badge">${car.type[0]}</span>

        <img
          src="${getCarImage(car)}"
          alt="${car.brand} ${car.model}"
          onerror="this.src='assets/cars/car-01.svg'"
        >
      </div>

      <div class="vehicle-info">
        <h3>${car.model}</h3>
        <p>${car.brand}</p>

        <div class="vehicle-meta">
          <span>${car.year}</span>
          <span>${car.mileage}</span>
          <span>${car.fuel}</span>
        </div>

        <div class="vehicle-bottom">
          <div class="vehicle-price">
            <span>PRICE</span>
            <strong>${car.price}</strong>
          </div>

          <button
            type="button"
            class="mini-btn inquire-btn"
            data-car="${car.model}"
            aria-label="Inquire about ${car.model}"
          >
            →
          </button>
        </div>
      </div>
    </article>
  `;
}

// =============================================================
// INVENTORY
// =============================================================

function renderInventory(filter = "all", showAll = false) {
  const inventoryGrid = $("#inventoryGrid");
  const showAllButton = $("#showAllCars");

  if (!inventoryGrid) return;

  const filteredCars =
    filter === "all"
      ? cars
      : cars.filter((car) => car.type.includes(filter));

  const visibleCars = showAll
    ? filteredCars
    : filteredCars.slice(0, 6);

  inventoryGrid.innerHTML = visibleCars
    .map(vehicleCard)
    .join("");

  if (showAllButton) {
    showAllButton.style.display =
      filteredCars.length > 6 && !showAll
        ? "inline-flex"
        : "none";
  }

  observeReveals();
}

// =============================================================
// VEHICLE SELECT
// =============================================================

function populateVehicleSelect() {
  const vehicleSelect = $("#vehicleSelect");

  if (!vehicleSelect) return;

  vehicleSelect.innerHTML = `
    <option value="">Select a vehicle</option>
    ${cars
      .map(
        (car) =>
          `<option value="${car.brand} ${car.model}">
            ${car.brand} ${car.model}
          </option>`
      )
      .join("")}
  `;
}

// =============================================================
// FINANCE CALCULATOR
// =============================================================

function calculateFinance() {
  const price = Number($("#calcPrice")?.value) || 0;
  const downPayment = Number($("#calcDown")?.value) || 0;
  const years = Number($("#calcYears")?.value) || 5;

  const principal = Math.max(0, price - downPayment);
  const annualInterest = 0.12;
  const monthlyInterest = annualInterest / 12;
  const months = years * 12;

  let monthlyPayment = 0;

  if (principal > 0 && months > 0) {
    monthlyPayment =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, months)) /
      (Math.pow(1 + monthlyInterest, months) - 1);
  }

  const estimate = $("#monthlyEstimate");

  if (estimate) {
    estimate.textContent =
      `LKR ${Math.round(monthlyPayment / 1000).toLocaleString()}K`;
  }
}

// =============================================================
// SCROLL REVEAL
// =============================================================

function observeReveals() {
  const elements = $$(".reveal, .reveal-left, .reveal-right");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("revealed");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.13
    }
  );

  elements.forEach((element) => {
    if (!element.classList.contains("revealed")) {
      observer.observe(element);
    }
  });
}

// =============================================================
// EVENT LISTENERS
// =============================================================

window.addEventListener("load", () => {
  const loader = $("#pageLoader");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 350);
});

window.addEventListener("scroll", () => {
  const header = $("#siteHeader");

  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 30);
  }
});

$("#prevCar")?.addEventListener("click", () => {
  updateHero(index - 1, -1);
});

$("#nextCar")?.addEventListener("click", () => {
  updateHero(index + 1, 1);
});

$("#menuToggle")?.addEventListener("click", () => {
  const navigation = $("#mainNav");
  const menuButton = $("#menuToggle");

  if (!navigation || !menuButton) return;

  navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    navigation.classList.contains("open")
  );
});

$("#mainNav")?.addEventListener("click", () => {
  $("#mainNav")?.classList.remove("open");
});

$("#filterRow")?.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  $$(".filter").forEach((filterButton) => {
    filterButton.classList.remove("active");
  });

  button.classList.add("active");

  renderInventory(button.dataset.filter);
});

$("#showAllCars")?.addEventListener("click", () => {
  const activeFilter = $(".filter.active");
  const filter = activeFilter?.dataset.filter || "all";

  renderInventory(filter, true);
});

$("#inventoryGrid")?.addEventListener("click", (event) => {
  const button = event.target.closest(".inquire-btn");

  if (!button) return;

  const selectedCar = cars.find(
    (car) => car.model === button.dataset.car
  );

  const vehicleSelect = $("#vehicleSelect");

  if (selectedCar && vehicleSelect) {
    vehicleSelect.value =
      `${selectedCar.brand} ${selectedCar.model}`;
  }

  window.location.hash = "contact";
});

["#calcPrice", "#calcDown", "#calcYears"].forEach((selector) => {
  $(selector)?.addEventListener("input", calculateFinance);
});

$("#contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formMessage = $("#formMessage");

  if (formMessage) {
    formMessage.textContent =
      "Thank you! Your inquiry has been submitted.";
  }

  event.target.reset();
});

const yearNow = $("#yearNow");

if (yearNow) {
  yearNow.textContent = new Date().getFullYear();
}

const totalSlides = $("#totalSlides");

if (totalSlides) {
  totalSlides.textContent = pad(cars.length);
}

// =============================================================
// INITIALIZE WEBSITE
// =============================================================

createThumbs();
renderInventory();
populateVehicleSelect();
calculateFinance();
observeReveals();
updateHero(0);