
const doctors = [
    {
        name: "Dr. Gregory", // Male
        specialty: "General Physician",
        experience: "18 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Philippine General Hospital",
        shift: "Mon-Fri, 8AM - 4PM",
        img: "images/doctor1.png",
        profileUrl: "DoctorProfiles/profile1.html",
        location: "Manila",
        isAvailable: true
    },
    {
        name: "Dr. Nicholas Quezon", // Male
        specialty: "Gynecologist",
        experience: "12 years experience",
        availability: ["Online"],
        hospital: "Southern Philippines Medical Center",
        shift: "Tues-Sat, 10AM - 6PM",
        img: "images/doctor2.jpg",
        profileUrl: "DoctorProfiles/profile2.html",
        location: "Davao City",
        isAvailable: true
    },
    {
        name: "Dr. Shaun Murphy", // Male
        specialty: "Dermatologist",
        experience: "9 years experience",
        availability: ["Onsite"],
        hospital: "Cebu Doctors' University Hospital",
        shift: "Wed-Sun, 1PM - 9PM",
        img: "images/doctor3.jpeg",
        profileUrl: "DoctorProfiles/profile3.html",
        location: "Cebu City",
        isAvailable: true
    },
    {
        name: "Dr. Ferdinand Castro", // Male
        specialty: "Pediatricians",
        experience: "15 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Palawan Adventist Hospital",
        shift: "Thurs-Mon, 9AM - 5PM",
        img: "images/doctor4.png",
        profileUrl: "DoctorProfiles/profile4.html",
        location: "Puerto Princesa, Palawan",
        isAvailable: true
    },
    {
        name: "Dr. Isabella Garcia", // Female
        specialty: "Neurologist",
        experience: "11 years experience",
        availability: ["Online"],
        hospital: "St. Luke's Medical Center - Quezon City",
        shift: "Fri-Tues, 2PM - 10PM",
        img: "images/doctor5.png",
        profileUrl: "DoctorProfiles/profile5.html",
        location: "Quezon City",
        isAvailable: true
    },
    {
        name: "Dr. Miguel Lopez", // Male
        specialty: "Gastroenterologist",
        experience: "14 years experience",
        availability: ["Onsite"],
        hospital: "St. Luke's Medical Center - Global City",
        shift: "Sat-Wed, 11AM - 7PM",
        img: "images/doctor6.png",
        profileUrl: "DoctorProfiles/profile6.html",
        location: "Taguig City",
        isAvailable: true
    },
    {
        name: "Dr. Rafael Villanueva", // Male
        specialty: "General Physician",
        experience: "20 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Rizal Medical Center",
        shift: "Sun-Thurs, 8AM - 4PM",
        img: "images/doctor7.png",
        profileUrl: "DoctorProfiles/profile7.html",
        location: "Antipolo City",
        isAvailable: true
    },
    {
        name: "Dr. Gregorio Perez", // Male
        specialty: "Gynecologist",
        experience: "10 years experience",
        availability: ["Online"],
        hospital: "De La Salle University Medical Center",
        shift: "Mon-Fri, 1PM - 9PM",
        img: "images/doctor8.png",
        profileUrl: "DoctorProfiles/profile8.html",
        location: "Dasmariñas, Cavite",
        isAvailable: true
    },
    {
        name: "Dr. Carmen de Guzman", // Female
        specialty: "Dermatologist",
        experience: "7 years experience",
        availability: ["Onsite"],
        hospital: "Medical Center Imus",
        shift: "Tues-Sat, 9AM - 5PM",
        img: "images/doctor9.png",
        profileUrl: "DoctorProfiles/profile9.html",
        location: "Imus, Cavite",
        isAvailable: true
    },
    {
        name: "Dr. Antonio Torres", // Male
        specialty: "Pediatricians",
        experience: "12 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Bacoor Doctors Medical Center",
        shift: "Wed-Sun, 10AM - 6PM",
        img: "images/doctor10.png",
        profileUrl: "DoctorProfiles/profile10.html",
        location: "Bacoor, Cavite",
        isAvailable: true
    },
    {
        name: "Dr. Sofia Padilla", // Female
        specialty: "Neurologist",
        experience: "16 years experience",
        availability: ["Online"],
        hospital: "Manila Doctors Hospital",
        shift: "Thurs-Mon, 12PM - 8PM",
        img: "images/doctor11.png",
        profileUrl: "DoctorProfiles/profile11.html",
        location: "Manila",
        isAvailable: true
    },
    {
        name: "Dr. Javier Aquino", // Male
        specialty: "Gastroenterologist",
        experience: "11 years experience",
        availability: ["Onsite"],
        hospital: "Davao Doctors Hospital",
        shift: "Fri-Tues, 8AM - 4PM",
        img: "images/doctor12.png",
        profileUrl: "DoctorProfiles/profile12.html",
        location: "Davao City",
        isAvailable: true
    },
    {
        name: "Dr. Lourdes Herrera", // Female
        specialty: "General Physician",
        experience: "19 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Perpetual Help Medical Center - Cebu",
        shift: "Sat-Wed, 1PM - 9PM",
        img: "images/doctor13.png",
        profileUrl: "DoctorProfiles/profile13.html",
        location: "Cebu City",
        isAvailable: true
    },
    {
        name: "Dr. Benjamin Santos", // Male
        specialty: "Gynecologist",
        experience: "13 years experience",
        availability: ["Online"],
        hospital: "Ospital ng Palawan",
        shift: "Sun-Thurs, 9AM - 5PM",
        img: "images/doctor14.png",
        profileUrl: "DoctorProfiles/profile14.html",
        location: "Puerto Princesa, Palawan",
        isAvailable: true
    },
    {
        name: "Dr. Patricia Cruz", // Female
        specialty: "Dermatologist",
        experience: "8 years experience",
        availability: ["Onsite"],
        hospital: "National Kidney and Transplant Institute",
        shift: "Mon-Fri, 2PM - 10PM",
        img: "images/doctor15.png",
        profileUrl: "DoctorProfiles/profile15.html",
        location: "Quezon City",
        isAvailable: true
    },
    {
        name: "Dr. Roberto Garcia", // Male
        specialty: "Pediatricians",
        experience: "17 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Makati Medical Center",
        shift: "Tues-Sat, 11AM - 7PM",
        img: "images/doctor16.png",
        profileUrl: "DoctorProfiles/profile16.html",
        location: "Taguig City",
        isAvailable: true
    },
    {
        name: "Dr. Cecilia Villanueva", // Female
        specialty: "Neurologist",
        experience: "10 years experience",
        availability: ["Online"],
        hospital: "Antipolo Medical Center",
        shift: "Wed-Sun, 8AM - 4PM",
        img: "images/doctor17.png",
        profileUrl: "DoctorProfiles/profile17.html",
        location: "Antipolo City",
        isAvailable: true
    },
    {
        name: "Dr. Ferdinand Perez", // Male
        specialty: "Gastroenterologist",
        experience: "15 years experience",
        availability: ["Onsite"],
        hospital: "De La Salle University Medical Center",
        shift: "Thurs-Mon, 1PM - 9PM",
        img: "images/doctor18.png",
        profileUrl: "DoctorProfiles/profile18.html",
        location: "Dasmariñas Cavite",
        isAvailable: true
    },
    {
        name: "Dr. Marissa Torres", // Female
        specialty: "General Physician",
        experience: "12 years experience",
        availability: ["Online", "Onsite"],
        hospital: "Imus Specialist Medical Center",
        shift: "Fri-Tues, 9AM - 5PM",
        img: "images/doctor19.jpg",
        profileUrl: "DoctorProfiles/profile19.html",
        location: "Imus Cavite",
        isAvailable: true
    },
    {
        name: "Dr. Emmanuel Castro", // Male
        specialty: "Gynecologist",
        experience: "9 years experience",
        availability: ["Online"],
        hospital: "St. Dominic Medical Center",
        shift: "Sat-Wed, 10AM - 6PM",
        img: "images/doctor20.jpg",
        profileUrl: "DoctorProfiles/profile20.html",
        location: "Bacoor Cavite",
        isAvailable: true
    }
];


const specialties = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
];



const doctorList = document.getElementById("doctor-list");
const resultsCount = document.getElementById("results-count");
const locationFilter = document.getElementById("location-filter");
const availableNowBtn = document.getElementById("available-now-btn");
const clearBtn = document.getElementById("clear-search");
const filterButton = document.getElementById("filter-button");
const specialtyFilterContainer = document.getElementById("specialty-filter-container");
const input = document.getElementById("search-input");
const suggestions = document.getElementById("suggestions");

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let filteredDoctors = [...doctors];
const specialtyFromURL = new URLSearchParams(window.location.search).get('specialty');
if (specialtyFromURL) {
  const searchTerm = specialtyFromURL.toLowerCase();
  filteredDoctors = doctors.filter(doc => doc.specialty.toLowerCase().includes(searchTerm));
}
renderDoctors(filteredDoctors);


if (input && suggestions) {

  input.addEventListener("focus", showSuggestions);
  input.addEventListener("input", showSuggestions);
  input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default form submission or other default actions
    const query = input.value.trim();
    if (query !== '') {
      redirectToSearch(query);
    }
  }
});

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".suggestions") && e.target !== input) {
      suggestions.classList.remove("show");
    }
  });
}

if (doctorList && resultsCount && locationFilter && availableNowBtn && clearBtn && filterButton && specialtyFilterContainer) {

}

filterButton.addEventListener("click", () => {
    specialtyFilterContainer.classList.toggle("hidden");
});

clearBtn.addEventListener('click', () => {
    input.value = ''; 
    filteredDoctors = [...doctors]; 
    renderDoctors(filteredDoctors); 
    applySpecialtyFilter(); 
    applyAvailabilityFilter(); 
    clearBtn.style.display = 'none'; 
});


function renderDoctors(data) {
    doctorList.innerHTML = '';
    resultsCount.textContent = data.length;

    data.forEach((doc) => {
        const availabilityInfo = doc.availability.map(mode => {
            if (mode === "Online") return `<span class="online-status">🟢 Online</span>`;
            if (mode === "Onsite") return `<span class="onsite-status">🔴 Onsite</span>`;
            return "";
        }).join(" ");

        const card = document.createElement("div");
        card.className = "doctor-card";

        const imagePath = doc.img;
        const imageName = doc.name;

        console.log("Image Path:", imagePath); 
        console.log("Doctor Name:", imageName); 

        const imageHTML = `<img src="${imagePath}" alt="${imageName}" class="doctor-img" />`;

        card.innerHTML = `
            <div class="doctor-card-content">
                ${imageHTML}
                <div class="doctor-info">
                    <div class="doctor-name">${imageName}</div>
                    <div class="doctor-specialty">${doc.specialty}</div>
                    <div class="doctor-experience">${doc.experience}</div>
                    <div class="availability">${availabilityInfo}</div>
                </div>
                <div class="middle-info">
                    <div class="hospital">🏥 ${doc.hospital}</div>
                    <div class="shift">🕒 ${doc.shift}</div>
                </div>
                <div class="schedule-info">
                    <div class="label">Consultation</div>
                    <p class="online">Virtual: ₱350</p>
                    <p class="inperson">Face-to-Face: ₱700</p>
                    <div class="button-group">
                        <button class="profile-button">View Profile</button>
                        <button class="book-button">Book Appointment</button>
                    </div>
                </div>
            </div>
        `;

        const profileBtn = card.querySelector(".profile-button");
        profileBtn.addEventListener("click", () => viewProfile(doc));

        const bookBtn = card.querySelector(".book-button");
        bookBtn.addEventListener("click", () => bookAppointment(doc));

        doctorList.appendChild(card);
    });
}

function viewProfile(doc) {
    if (doc.profileUrl) {
        window.location.href = doc.profileUrl;
    } else {
        console.warn("No profile URL defined for this doctor.");
    }
}

function bookAppointment(doc) {
    window.location.href = `appointment.html?doctorName=${encodeURIComponent(doc.name)}&specialty=${encodeURIComponent(doc.specialty)}&hospital=${encodeURIComponent(doc.hospital)}&shift=${encodeURIComponent(doc.shift)}&img=${encodeURIComponent(doc.img)}`;
}

// --- Location Filtering ---
locationFilter.addEventListener('change', function() {
    const selectedLocation = this.value;
    filteredDoctors = doctors.filter(doctor => selectedLocation === "" || doctor.location === selectedLocation);
    renderDoctors(filteredDoctors);
    applySpecialtyFilter();
    applyAvailabilityFilter();
});

// --- Specialty Checkbox Filtering ---
function populateSpecialtyFilter() {
    const uniqueSpecialties = [...new Set(doctors.map(doc => doc.specialty))].sort();
    const filterDiv = document.querySelector(".specialty-filter");
    filterDiv.innerHTML = '';
    uniqueSpecialties.forEach(specialty => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = specialty;
        checkbox.addEventListener('change', applySpecialtyFilter);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${specialty}`));
        filterDiv.appendChild(label);
    });
}

function applySpecialtyFilter() {
    const checkedSpecialties = Array.from(specialtyFilterContainer.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    let locationFiltered = doctors.filter(doctor => locationFilter.value === "" || doctor.location === locationFilter.value);
    filteredDoctors = checkedSpecialties.length > 0
        ? locationFiltered.filter(doctor => checkedSpecialties.includes(doctor.specialty))
        : locationFiltered;

    renderDoctors(filteredDoctors);
    applyAvailabilityFilter();
}

populateSpecialtyFilter();

// --- "Available Now" Filtering ---
availableNowBtn.addEventListener('click', function() {
    window.location.href = 'available.html'; // Redirect to available.html
});

function applyAvailabilityFilter() {
    let locationAndSpecialtyFiltered = doctors.filter(doctor =>
        (locationFilter.value === "" || doctor.location === locationFilter.value) &&
        (Array.from(specialtyFilterContainer.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value).includes(doctor.specialty) ||
         specialtyFilterContainer.querySelectorAll('input[type="checkbox"]:checked').length === 0)
    );

    filteredDoctors = availableNowBtn.classList.contains('active')
        ? locationAndSpecialtyFiltered.filter(doctor => doctor.isAvailable === true)
        : locationAndSpecialtyFiltered;

    renderDoctors(filteredDoctors);
}

// Initial rendering
applyAvailabilityFilter();
renderDoctors(filteredDoctors);

// --- Search Input Functionality ---
input.addEventListener("focus", showSuggestions);
input.addEventListener("input", showSuggestions);
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default form submission or other default actions
    const query = input.value.trim();
    if (query !== '') {
      redirectToSearch(query);
    }
  }
});

function redirectToSearch(searchTerm) {
  const query = searchTerm || input.value.trim();
  if (query !== '') {
    window.location.href = `search.html?specialty=${encodeURIComponent(query)}`;
  }
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".suggestions") && e.target !== input) {
        suggestions.classList.remove("show");
    }
});

function showSuggestions() {
    const query = input.value.toLowerCase();
    console.log("Search query:", query);

    // Only use specialties
    const filteredSpecialties = specialties
        .filter(s => s.toLowerCase().includes(query))
        .sort();

    console.log("Filtered specialties:", filteredSpecialties);

    suggestions.innerHTML = "";
    if (filteredSpecialties.length > 0) {
        suggestions.classList.add("show");
        filteredSpecialties.forEach(specialty => {
            const div = document.createElement("div");
            const icon = document.createElement("img");
            icon.src = "images/logoonly.png";
            icon.alt = "Search Icon";
            icon.style.width = "20px";
            icon.style.height = "20px";
            icon.style.marginRight = "10px";

            div.appendChild(icon);
            div.appendChild(document.createTextNode(specialty));
            div.addEventListener("click", () => {
                input.value = specialty;
                suggestions.classList.remove("show");
                const searchTerm = specialty.toLowerCase();
                console.log("Search term on click:", searchTerm);

                // Filter doctors by specialty only
                filteredDoctors = doctors.filter(doc =>
                    doc.specialty.toLowerCase().includes(searchTerm)
                );
                console.log("Filtered doctors on click:", filteredDoctors);
                renderDoctors(filteredDoctors);
                clearBtn.style.display = input.value.trim() !== "" ? 'block' : 'none';
            });
            suggestions.appendChild(div);
        });
    } else {
        suggestions.classList.remove("show");
    }
}

function showSpecialtySuggestions() {
    suggestions.innerHTML = "";
    suggestions.classList.add("show");
    specialties.sort().forEach(specialty => {
        const div = document.createElement("div");
        const icon = document.createElement("img");
        icon.src = "images/search-icon.png";
        icon.alt = "Search Icon";
        icon.style.width = "20px";
        icon.style.height = "20px";
        icon.style.marginRight = "10px";

        div.appendChild(icon);
        div.appendChild(document.createTextNode(specialty));
        div.addEventListener("click", () => {
            input.value = specialty;
            suggestions.classList.remove("show");
            const searchTerm = specialty.toLowerCase();
            filteredDoctors = doctors.filter(doc => doc.specialty.toLowerCase() === searchTerm); // Filter ONLY by specialty
            renderDoctors(filteredDoctors);
            applySpecialtyFilter(); // Re-apply specialty filter to keep checkboxes in sync
            applyAvailabilityFilter(); // Re-apply availability filter
            clearBtn.style.display = input.value.trim() !== "" ? 'block' : 'none';
        });
        suggestions.appendChild(div);
    });
}

function populateLocationFilter() {
    const targetLocations = [
        "Manila",
        "Davao City",
        "Cebu City",
        "Quezon City",
        "Antipolo City",
        "Imus Cavite",
        "Dasmarinas Cavite",
        "Bacoor Cavite",
        "Taguig City",
    ];

    locationFilter.innerHTML = `<option value="">All Locations</option>`; // Reset

    targetLocations.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });
}
populateLocationFilter();      
populateSpecialtyFilter();  
renderDoctors(filteredDoctors);

