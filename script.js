const weaponsByPoints = {
    1: [
        { name: "Bornheim No. 3", price: 146 },
        { name: "Bornheim No. 3 Extended", price: 203 },
        { name: "Bornheim No. 3 Silencer", price: 174 },
        { name: "Conversion", price: 55 },
        { name: "Conversion Chain", price: 84 },
        { name: "LeMat", price: 83 },
        { name: "Nagant M1895", price: 24 },
        { name: "Nagant M1895 Silencer", price: 27 },
        { name: "New Army", price: 90 },
        { name: "New Army Swift", price: 108 },
        { name: "Officer", price: 96 },
        { name: "Officer Brawler", price: 106 },
        { name: "Pax", price: 80 },
        { name: "Pax Claw", price: 90 },
        { name: "Pax Trueshot", price: 141 },
        { name: "Scottfield", price: 77 },
        { name: "Scottfield Brawler", price: 87 },
        { name: "Scottfield Spitfire", price: 108 },
        { name: "Scottfield Swift", price: 95 },
        { name: "Sparks Pistol", price: 155 },
        { name: "Sparks Pistol Silencer", price: 178 },
        { name: "Hand Crossbow", price: 30 }
    ],
    2: [
        { name: "Bornheim No. 3 Match", price: 180 },
        { name: "Nagant M1895 Precision", price: 29 },
        { name: "Nagant M1895 Deadeye", price: 30 },
        { name: "Scottfield Precision", price: 85 },
        { name: "Vandal 73C", price: 35 },
        { name: "Vandal 73C Striker", price: 45 },
        { name: "Vandal 73C Bullseye", price: 37 },
        { name: "Centennial Shorty", price: 103 },
        { name: "Centennial Shorty Silencer", price: 137 },
        { name: "Centennial Pointman", price: 114 },
        { name: "Drilling Shorty", price: 330 },
        { name: "Drilling Hatchet", price: 340 },
        { name: "Springfield 1866 Shorty", price: 33 },
        { name: "Springfield 1866 Striker", price: 43 },
        { name: "Springfield 1866 Bullseye", price: 35 },
        { name: "Uppercut", price: 310 },
        { name: "Mosin Obrez", price: 290 },
        { name: "Mosin Obrez Mace", price: 300 },
        { name: "Mosin Obrez Extended", price: 350 },
        { name: "Rival 78 Shorty", price: 145 },
        { name: "Rival 78 Mace", price: 155 },
        { name: "Romero 77 Shorty", price: 46 },
        { name: "Romero 77 Hatchet", price: 56 },
        { name: "Specter 1882 Shorty", price: 164 },
        { name: "Terminus Shorty", price: 148 },
        { name: "Bomb Launcher", price: 110 },
        { name: "Dolch 96", price: 690 },
        { name: "Dolch 96 Claw", price: 700 },
        { name: "Dolch 96 Bullseye", price: 725 },
        { name: "Chu Ko Nu", price: 75 },
        { name: "Haymaker", price: 279 },
        { name: "Flame Rifle", price: 0 }
    ],
    3: [
        { name: "Frontier 73C", price: 41 },
        { name: "Frontier 73C Silencer", price: 55 },
        { name: "Frontier 73C Marksman", price: 45 },
        { name: "LeMat Carbine", price: 115 },
        { name: "LeMat Carbine Marksman", price: 127 },
        { name: "Officer Carbine", price: 183 },
        { name: "Officer Carbine Deadeye", price: 192 },
        { name: "Vetterli 71", price: 105 },
        { name: "Vetterli 71 Deadeye", price: 110 },
        { name: "Vetterli 71 Marksman", price: 116 },
        { name: "Vetterli 71 Bayonet", price: 115 },
        { name: "Vetterli 71 Silencer", price: 150 },
        { name: "1865 Carbine", price: 70 },
        { name: "1865 Carbine Aperture", price: 74 },
        { name: "1865 Carbine Silencer", price: 80 },
        { name: "1890 Cavalry", price: 56 },
        { name: "Uppercut Precision", price: 321 },
        { name: "Uppercut Deadeye", price: 337 },
        { name: "Berthier 1892", price: 380 },
        { name: "Berthier 1892 Riposte", price: 390 },
        { name: "Berthier 1892 Deadeye", price: 397 },
        { name: "Berthier 1892 Marksman", price: 413 },
        { name: "Mosin Obrez Match", price: 345 },
        { name: "Mosin Obrez Sharpeye", price: 362 },
        { name: "Auto-4 Shorty", price: 300 },
        { name: "Bomb Lance", price: 199 },
        { name: "Dolch 96 Precision", price: 730 },
        { name: "Hunting Bow", price: 57 }
    ],
    4: [
        { name: "Infantry 73L", price: 78 },
        { name: "Infantry 73L Bayonet", price: 88 },
        { name: "Infantry 73L Sniper", price: 90 },
        { name: "Marathon", price: 68 },
        { name: "Marathon Swift", price: 95 },
        { name: "Ranger 73", price: 75 },
        { name: "Ranger 73 Aperture", price: 79 },
        { name: "Ranger 73 Talon", price: 85 },
        { name: "Ranger 73 Swift", price: 128 },
        { name: "Sparks", price: 130 },
        { name: "Sparks Silencer", price: 150 },
        { name: "Sparks Sniper", price: 150 },
        { name: "Maynard Sniper", price: 139 },
        { name: "Maynard Sniper Silencer", price: 159 },
        { name: "Centennial", price: 157 },
        { name: "Centennial Sniper", price: 181 },
        { name: "Centennial Trauma", price: 167 },
        { name: "Drilling", price: 510 },
        { name: "Springfield 1866", price: 38 },
        { name: "Springfield 1866 Marksman", price: 42 },
        { name: "Springfield 1866 Bayonet", price: 48 },
        { name: "Vetterli 71 Cyclone", price: 280 },
        { name: "Mako 1895", price: 360 },
        { name: "Mako 1895 Claw", price: 370 },
        { name: "Mako 1895 Aperture", price: 378 },
        { name: "Martini-Henry", price: 122 },
        { name: "Martini-Henry Deadeye", price: 128 },
        { name: "Martini-Henry Riposte", price: 132 },
        { name: "Martini-Henry Marksman", price: 134 },
        { name: "Martini-Henry Ironside", price: 159 },
        { name: "Krag", price: 450 },
        { name: "Krag Bayonet", price: 460 },
        { name: "Krag Sniper", price: 517 },
        { name: "Krag Silencer", price: 517 },
        { name: "Lebel 1886", price: 397 },
        { name: "Lebel 1886 Aperture", price: 417 },
        { name: "Lebel 1886 Talon", price: 407 },
        { name: "Lebel 1886 Marksman", price: 437 },
        { name: "Mosin-Nagant", price: 620 },
        { name: "Mosin-Nagant Bayonet", price: 630 },
        { name: "Mosin-Nagant Sniper", price: 713 },
        { name: "Rival 78", price: 170 },
        { name: "Rival 78 Trauma", price: 180 },
        { name: "Romero 77", price: 66 },
        { name: "Romero 77 Talon", price: 76 },
        { name: "Romero 77 Alamo", price: 98 },
        { name: "Slate", price: 313 },
        { name: "Slate Riposte", price: 323 },
        { name: "Specter 1882", price: 188 },
        { name: "Specter 1882 Bayonet", price: 198 },
        { name: "Terminus", price: 168 },
        { name: "Crossbow", price: 50 },
        { name: "Crossbow Deadeye", price: 53 },
        { name: "Homestead 78", price: 0 },
        { name: "Shredder", price: 0 },
        { name: "Wildland", price: 0 }
    ],
    5: [
        { name: "Mosin-Nagant Avtomat", price: 1250 },
        { name: "Auto-5", price: 600 },
        { name: "Nitro Express", price: 1015 }
    ]
};

const IMAGE_FOLDER = "images/";

// Elementy DOM
const quartermasterToggle = document.getElementById("quartermaster-toggle");
const slotsMaxDisplay = document.getElementById("slots-max");
const generateBtn = document.getElementById("generate-btn");
const totalPriceDisplay = document.getElementById("total-price");

const ddWeapon1 = document.getElementById("dd-weapon1");
const ddWeapon2 = document.getElementById("dd-weapon2");

function getWeaponImagePath(weaponName) {
    const formattedName = weaponName.replace(/ /g, "_");
    return `${IMAGE_FOLDER}${formattedName}.webp`;
}

// Obsługa Custom Dropdown
function setupCustomDropdown(dropdownEl) {
    const trigger = dropdownEl.querySelector(".dropdown-trigger");
    const options = dropdownEl.querySelectorAll(".dropdown-option");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        // Zamknij inne otwarte dropdowny
        document.querySelectorAll(".custom-dropdown").forEach(dd => {
            if (dd !== dropdownEl) dd.classList.remove("open");
        });
        dropdownEl.classList.toggle("open");
    });

    options.addEventListener ? null : null; // Safety check

    options.forEach(option => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            if (option.classList.contains("disabled")) return;

            options.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");

            dropdownEl.querySelector(".selected-text").textContent = option.textContent;
            dropdownEl.dataset.value = option.dataset.value;

            dropdownEl.classList.remove("open");
            updateSelectOptions();
        });
    });
}

// Pobieranie wybranej wartości
function getDropdownValue(dropdownEl) {
    const selected = dropdownEl.querySelector(".dropdown-option.selected");
    return selected ? selected.dataset.value : "auto";
}

// Ustawianie wartości z poziomu kodu
function setDropdownValue(dropdownEl, val) {
    const options = dropdownEl.querySelectorAll(".dropdown-option");
    options.forEach(opt => {
        opt.classList.remove("selected");
        if (opt.dataset.value === val) {
            opt.classList.add("selected");
            dropdownEl.querySelector(".selected-text").textContent = opt.textContent;
        }
    });
}

// Zamykanie menu po kliknięciu poza nie
document.addEventListener("click", () => {
    document.querySelectorAll(".custom-dropdown").forEach(dd => dd.classList.remove("open"));
});

// Aktualizacja blokowania opcji na podstawie limitu punktów
function updateSelectOptions() {
    const maxSlots = quartermasterToggle.checked ? 6 : 5;
    slotsMaxDisplay.textContent = maxSlots;

    const val1 = getDropdownValue(ddWeapon1);
    const val2 = getDropdownValue(ddWeapon2);

    // Opcje dla broni 2 na podstawie broni 1
    const pts1 = val1 === "auto" ? 0 : parseInt(val1);
    const maxAllowedForW2 = maxSlots - pts1;

    ddWeapon2.querySelectorAll(".dropdown-option").forEach(opt => {
        if (opt.dataset.value === "auto") return;
        const optVal = parseInt(opt.dataset.value);
        if (optVal > maxAllowedForW2 || optVal >= maxSlots) {
            opt.classList.add("disabled");
        } else {
            opt.classList.remove("disabled");
        }
    });

    if (ddWeapon2.querySelector(".dropdown-option.selected")?.classList.contains("disabled")) {
        setDropdownValue(ddWeapon2, "auto");
    }

    // Opcje dla broni 1 na podstawie broni 2
    const pts2 = val2 === "auto" ? 0 : parseInt(val2);
    const maxAllowedForW1 = maxSlots - pts2;

    ddWeapon1.querySelectorAll(".dropdown-option").forEach(opt => {
        if (opt.dataset.value === "auto") return;
        const optVal = parseInt(opt.dataset.value);
        if (optVal > maxAllowedForW1 || optVal >= maxSlots) {
            opt.classList.add("disabled");
        } else {
            opt.classList.remove("disabled");
        }
    });

    if (ddWeapon1.querySelector(".dropdown-option.selected")?.classList.contains("disabled")) {
        setDropdownValue(ddWeapon1, "auto");
    }
}

function getRandomWeapon(pts) {
    const pool = weaponsByPoints[pts] || [];
    if (pool.length === 0) return null;
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    return { ...chosen, points: parseInt(pts) };
}

function generateLoadout() {
    const maxSlots = quartermasterToggle.checked ? 6 : 5;

    let w1Val = getDropdownValue(ddWeapon1);
    let w2Val = getDropdownValue(ddWeapon2);

    let pts1, pts2;

    if (w1Val !== "auto" && w2Val !== "auto") {
        pts1 = parseInt(w1Val);
        pts2 = parseInt(w2Val);
    } else if (w1Val !== "auto" && w2Val === "auto") {
        pts1 = parseInt(w1Val);
        const maxForW2 = maxSlots - pts1;
        const availableSizes = Object.keys(weaponsByPoints)
            .map(Number)
            .filter(size => size <= maxForW2 && weaponsByPoints[size].length > 0);
        pts2 = availableSizes[Math.floor(Math.random() * availableSizes.length)];
    } else if (w1Val === "auto" && w2Val !== "auto") {
        pts2 = parseInt(w2Val);
        const maxForW1 = maxSlots - pts2;
        const availableSizes = Object.keys(weaponsByPoints)
            .map(Number)
            .filter(size => size <= maxForW1 && weaponsByPoints[size].length > 0);
        pts1 = availableSizes[Math.floor(Math.random() * availableSizes.length)];
    } else {
        const availableSizes = Object.keys(weaponsByPoints)
            .map(Number)
            .filter(size => size < maxSlots && weaponsByPoints[size].length > 0);
        pts1 = availableSizes[Math.floor(Math.random() * availableSizes.length)];

        const remaining = maxSlots - pts1;
        const secondSizes = Object.keys(weaponsByPoints)
            .map(Number)
            .filter(size => size <= remaining && weaponsByPoints[size].length > 0);
        pts2 = secondSizes[Math.floor(Math.random() * secondSizes.length)];
    }

    const weapon1 = getRandomWeapon(pts1);
    const weapon2 = getRandomWeapon(pts2);

    if (!weapon1 || !weapon2) {
        alert("Brak broni w bazie danych dla wybranego układu kwadratów!");
        return;
    }

    updateWeaponUI("1", weapon1);
    updateWeaponUI("2", weapon2);

    totalPriceDisplay.textContent = `$${weapon1.price + weapon2.price}`;
}

function updateWeaponUI(slotNumber, weapon) {
    const nameEl = document.getElementById(`name-weapon${slotNumber}`);
    const priceEl = document.getElementById(`price-weapon${slotNumber}`);
    const badgeEl = document.getElementById(`badge-weapon${slotNumber}`);
    const imgEl = document.getElementById(`img-weapon${slotNumber}`);
    const placeholderEl = document.getElementById(`ph-weapon${slotNumber}`);

    nameEl.textContent = weapon.name;
    priceEl.textContent = `$${weapon.price}`;

    const squares = "■".repeat(weapon.points);
    badgeEl.textContent = `${squares} [${weapon.points}]`;

    const imgPath = getWeaponImagePath(weapon.name);
    imgEl.src = imgPath;

    imgEl.onload = () => {
        imgEl.classList.remove("hidden");
        placeholderEl.style.display = "none";
    };

    imgEl.onerror = () => {
        imgEl.classList.add("hidden");
        placeholderEl.style.display = "block";
        placeholderEl.textContent = "Brak obrazka";
    };
}

// Inicjalizacja komponentów
setupCustomDropdown(ddWeapon1);
setupCustomDropdown(ddWeapon2);

quartermasterToggle.addEventListener("change", updateSelectOptions);
generateBtn.addEventListener("click", generateLoadout);

// Pierwsza aktywacja limitów
updateSelectOptions();