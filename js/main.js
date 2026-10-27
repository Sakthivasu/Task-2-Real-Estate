/* ===================================================
   STACKLY REAL ESTATE - MASTER JAVASCRIPT (CLEAN & COMPLETE)
=================================================== */

// ==========================================
// 1. 12 GALLERY ITEMS DYNAMIC PROPERTY DATABASE
// ==========================================
const gallery12Database = [
    {
        title: "Luxury 3 BHK Villa",
        type: "For Rent",
        price: "25,000",
        duration: "/month",
        location: "Whitefield, Bangalore",
        beds: "3", baths: "3", sqft: "2,400",
        img: "img/clay-banks-364plyVT2eQ-unsplash.webp",
        desc: "Properties built for people to live in, including single-family homes, apartments, townhouses, and condominiums with high-end architecture and premium community access.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Sakthi V:</strong> 'Beautiful villa with top-notch amenities and peaceful atmosphere!'", "<strong>Rajesh K:</strong> 'Spacious rooms and excellent location.'"]
    },
    {
        title: "Royal Elite Villa",
        type: "For Sale",
        price: "2.80 Cr",
        duration: "",
        location: "Indiranagar, Bangalore",
        beds: "4", baths: "4", sqft: "3,800",
        img: "img/francesca-tosolini-Gu4R-0lwXvk-unsplash.webp",
        desc: "Ultra-luxury elite villa in Indiranagar featuring private lawns, Italian marble flooring, and smart home automation systems.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849!2d77.6412!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Rahul M:</strong> 'Breathtaking architecture and prime central location!'", "<strong>Priya S:</strong> 'Awesome garden and private pool area.'"]
    },
    {
        title: "Whispering Pines Villa",
        type: "For Sale",
        price: "1.85 Cr",
        duration: "",
        location: "Race Course, Coimbatore",
        beds: "3", baths: "3", sqft: "3,100",
        img: "img/d5-render-O3LR3ZI5Ams-unsplash.webp",
        desc: "Serene nature-facing villa located near Race Course Coimbatore, surrounded by lush greenery and clean air.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Senthil K:</strong> 'Extremely peaceful area, ideal for retirement or family living.'", "<strong>Meena P:</strong> 'High build quality and excellent ventilation.'"]
    },
    {
        title: "Oceanic Horizon Apartment",
        type: "For Rent",
        price: "50,000",
        duration: "/month",
        location: "ECR Seaface, Chennai",
        beds: "3", baths: "3", sqft: "2,100",
        img: "img/point3d-commercial-imaging-ltd-hfXcKWPGxQs-unsplash.webp",
        desc: "Stunning sea-facing modern apartment on ECR with direct beach access, rooftop swimming pool, and ocean views.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8491629618!2d80.1837107750731!3d13.047486495574365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Karthik R:</strong> 'Morning sea breeze from balcony is amazing.'", "<strong>Divya N:</strong> 'Very secure gated apartment complex.'"]
    },
    {
        title: "Green Park Studio Apartment",
        type: "For Rent",
        price: "22,000",
        duration: "/month",
        location: "Gachibowli, Hyderabad",
        beds: "1", baths: "1", sqft: "850",
        img: "img/point3d-commercial-imaging-ltd-wc4QVZmAF58-unsplash.webp",
        desc: "Cozy compact studio flat ideal for IT professionals working in Gachibowli. Fully furnished with modular kitchen.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647!2d78.3882!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Anil T:</strong> 'Very close to IT parks and metro station.'", "<strong>Sneha M:</strong> 'Low maintenance cost and great community.'"]
    },
    {
        title: "Urban Heights Residency",
        type: "For Rent",
        price: "35,000",
        duration: "/month",
        location: "OMR IT Expressway, Chennai",
        beds: "2", baths: "2", sqft: "1,350",
        img: "img/point3d-commercial-imaging-ltd-hfXcKWPGxQs-unsplash.webp",
        desc: "Modern high-rise residential apartment located right on OMR IT corridor with gym, clubhouse and indoor games.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8491629618!2d80.1837107750731!3d13.047486495574365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Vimal G:</strong> 'Super convenient location for office commuters.'", "<strong>Pooja R:</strong> 'Gym and swimming pool facilities are well maintained.'"]
    },
    {
        title: "Bandra Sea-View Flat",
        type: "For Sale",
        price: "3.10 Cr",
        duration: "",
        location: "Bandra West, Mumbai",
        beds: "2", baths: "2", sqft: "1,400",
        img: "img/point3d-commercial-imaging-ltd-zuJLTgQ53_Q-unsplash.webp",
        desc: "Exclusive sea-view apartment in prime Bandra West locality with high security, valet parking and sea breeze.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317!2d72.7410!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Karan Johar:</strong> 'Top tier location in Mumbai!'", "<strong>Ayesha Khan:</strong> 'Beautiful evening views of the ocean.'"]
    },
    {
        title: "Zero Carbon Smart Eco-Villa",
        type: "For Sale",
        price: "1.95 Cr",
        duration: "",
        location: "ECR Road, Chennai",
        beds: "4", baths: "4", sqft: "3,400",
        img: "img/stephan-bechert-yFV39g6AZ5o-unsplash.webp",
        desc: "Future-ready eco villa powered by solar panels, rainwater harvesting, and smart energy efficient appliances.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8491629618!2d80.1837107750731!3d13.047486495574365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Vijay A:</strong> 'Zero electricity bill eco villa! Highly innovative.'", "<strong>Nandhini R:</strong> 'Spacious garden and sustainable living.'"]
    },
    {
        title: "Skyline Luxury Penthouse",
        type: "For Sale",
        price: "4.50 Cr",
        duration: "",
        location: "Nungambakkam, Chennai",
        beds: "5", baths: "6", sqft: "5,200",
        img: "img/steven-ungermann-CVTmLMv5oG4-unsplash.webp",
        desc: "Magnificent penthouse in central Chennai with private rooftop garden, jacuzzi, and 360-degree skyline views.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8491629618!2d80.1837107750731!3d13.047486495574365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Arun V:</strong> 'The private terrace jacuzzi is mind-blowing!'", "<strong>Sneha L:</strong> 'Luxury at its peak.'"]
    },
    {
        title: "Koregaon Park Gated Duplex",
        type: "For Sale",
        price: "2.15 Cr",
        duration: "",
        location: "Koregaon Park, Pune",
        beds: "3", baths: "3", sqft: "2,900",
        img: "img/steven-ungermann-g4zOyqK_QsY-unsplash.webp",
        desc: "Elegant duplex house located in Pune's most prestigious Koregaon Park neighborhood with private terrace.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Rohan Deshmukh:</strong> 'Very posh environment and great cafes nearby.'", "<strong>Tanvi S:</strong> 'Spacious design.'"]
    },
    {
        title: "Palm Meadows Country Villa",
        type: "For Rent",
        price: "60,000",
        duration: "/month",
        location: "Sarjapur Road, Bangalore",
        beds: "4", baths: "4", sqft: "3,600",
        img: "img/clay-banks-364plyVT2eQ-unsplash.webp",
        desc: "Country style gated villa in Sarjapur Bangalore with private lawn, kids play zone, and tennis courts.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>David P:</strong> 'Wonderful gated community for kids and pets.'", "<strong>Swati M:</strong> 'Greenery everywhere.'"]
    },
    {
        title: "Grand Vista Haven Villa",
        type: "For Sale",
        price: "3.50 Cr",
        duration: "",
        location: "Jubilee Hills, Hyderabad",
        beds: "5", baths: "5", sqft: "4,800",
        img: "img/francesca-tosolini-Gu4R-0lwXvk-unsplash.webp",
        desc: "Palatial 5 BHK villa in Jubilee Hills Hyderabad with private elevator, home theater room, and infinity pool.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647!2d78.3882!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1",
        reviews: ["<strong>Vikram Reddy:</strong> 'Magnificent villa design in Jubilee Hills!'", "<strong>Sravanthi B:</strong> 'Home theater room is super cool.'"]
    }
];

let selectedGalleryIndex = 0;
let currentSelectedItem = gallery12Database[0];

// ==========================================
// 2. DOM CONTENT LOADED - MASTER INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

    // ------------------------------------------
    // COMMON UNIFIED PRELOADER (0% TO 100%)
    // ------------------------------------------
    const preloader = document.getElementById('preloader') || document.querySelector('.preloader-overlay');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent') || document.getElementById('preloaderPercent');

    let currentProgress = 0;
    const preloaderInterval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 5) + 3;

        if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(preloaderInterval);

            if (progressFill) progressFill.style.width = '100%';
            if (progressPercent) progressPercent.textContent = '100%';

            setTimeout(() => {
                if (preloader) {
                    preloader.classList.add('fade-out');
                }
            }, 300);
        } else {
            if (progressFill) progressFill.style.width = currentProgress + '%';
            if (progressPercent) progressPercent.textContent = currentProgress + '%';
        }
    }, 30);

    // ------------------------------------------
    // COMMON WISHLIST HEART COUNTER
    // ------------------------------------------
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistIcon = document.querySelector('.wishlist-icon') || document.getElementById('heartSymbol');
    const wishlistCount = document.getElementById('wishlistCount');

    let isLiked = localStorage.getItem('stacklyWishlisted') === 'true';
    let count = isLiked ? 1 : 0;

    if (wishlistIcon && isLiked) {
        wishlistIcon.classList.add('active');
        if (wishlistCount) wishlistCount.textContent = count;
    }

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function () {
            isLiked = !isLiked;
            localStorage.setItem('stacklyWishlisted', isLiked);
            
            if (isLiked) {
                if (wishlistIcon) wishlistIcon.classList.add('active');
                count = 1;
                alert('Property added to Favorites!');
            } else {
                if (wishlistIcon) wishlistIcon.classList.remove('active');
                count = 0;
                alert('Property removed from Favorites!');
            }
            if (wishlistCount) wishlistCount.textContent = count;
        });
    }

    // ------------------------------------------
    // AUTHENTICATION & PASSWORD TOGGLE
    // ------------------------------------------
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // ------------------------------------------
    // HOME PAGE: ADVANCED SEARCH FILTER
    // ------------------------------------------
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            const selectedLoc = document.getElementById('filterLocation').value.toLowerCase();
            const selectedType = document.getElementById('filterType').value.toLowerCase();
            const selectedPrice = document.getElementById('filterPrice').value.toLowerCase();
            const selectedBeds = document.getElementById('filterBeds').value;

            const propertyCards = document.querySelectorAll('.property-card');

            propertyCards.forEach(card => {
                const loc = card.getAttribute('data-location') || '';
                const type = card.getAttribute('data-type') || '';
                const price = card.getAttribute('data-price') || '';
                const beds = card.getAttribute('data-beds') || '';

                let match = true;
                if (selectedLoc && !loc.toLowerCase().includes(selectedLoc)) match = false;
                if (selectedType && type.toLowerCase() !== selectedType) match = false;
                if (selectedPrice && price.toLowerCase() !== selectedPrice) match = false;
                if (selectedBeds && beds !== selectedBeds) match = false;

                card.style.display = match ? 'block' : 'none';
            });

            const propertiesSection = document.getElementById('properties');
            if (propertiesSection) {
                propertiesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ------------------------------------------
    // HOME PAGE: ADD NEW LAUNCH MODAL & FORM
    // ------------------------------------------
    const modal = document.getElementById('addLaunchModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const newLaunchForm = document.getElementById('newLaunchForm');

    if (openModalBtn && modal) openModalBtn.addEventListener('click', () => modal.classList.add('active'));
    if (closeModalBtn && modal) closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));

    if (newLaunchForm) {
        newLaunchForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const title = document.getElementById('newPropTitle').value;
            const location = document.getElementById('newPropLocation').value;
            const type = document.getElementById('newPropType').value;
            const price = document.getElementById('newPropPrice').value;
            const beds = document.getElementById('newPropBeds').value;
            const baths = document.getElementById('newPropBaths').value;
            const sqft = document.getElementById('newPropSqft').value;
            const imageInput = document.getElementById('newPropImage');

            let imageSrc = "img/stephan-bechert-yFV39g6AZ5o-unsplash.webp";
            if (imageInput && imageInput.files && imageInput.files[0]) {
                imageSrc = URL.createObjectURL(imageInput.files[0]);
            }

            const grid = document.getElementById('propertyGrid');
            if (grid) {
                const newCardHTML = `
                    <div class="property-card" data-location="${location}" data-type="${type}" data-price="luxury" data-beds="${beds}">
                        <div class="card-media">
                            <img src="${imageSrc}" alt="Property">
                            <span class="property-tag sale">New Launch</span>
                        </div>
                        <div class="card-body">
                            <p class="card-location"><i class="fa-solid fa-location-dot"></i> ${location.toUpperCase()}</p>
                            <h3>${title}</h3>
                            <div class="card-features">
                                <span><i class="fa-solid fa-bed"></i> ${beds} Beds</span>
                                <span><i class="fa-solid fa-bath"></i> ${baths} Baths</span>
                                <span><i class="fa-solid fa-vector-square"></i> ${sqft} sqft</span>
                            </div>
                            <div class="card-foot">
                                <span class="card-price">${price}</span>
                                <a href="property-details.html" class="btn-card-action"><i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('afterbegin', newCardHTML);
            }

            if (modal) modal.classList.remove('active');
            newLaunchForm.reset();
            alert('New Launch property added successfully!');
        });
    }

    // ------------------------------------------
    // PROPERTY DETAILS & GALLERY URL SYNC
    // ------------------------------------------
    const urlParams = new URLSearchParams(window.location.search);
    const titleParam = urlParams.get('title');

    if (titleParam && document.getElementById('propTitleDisplay')) {
        const found = gallery12Database.find(p => p.title.toLowerCase() === titleParam.toLowerCase());
        if (found) {
            updatePropertyScreenData(found);
        } else {
            const customProp = {
                title: titleParam,
                type: urlParams.get('type') || "For Rent",
                price: (urlParams.get('price') || "25,000").replace(/[^\d,]/g, ''),
                duration: (urlParams.get('price') || '').includes('Cr') ? '' : '/month',
                location: urlParams.get('location') || "Whitefield, Bangalore",
                beds: urlParams.get('beds') || "3",
                baths: urlParams.get('baths') || "3",
                sqft: urlParams.get('sqft') || "2,400",
                img: urlParams.get('img') || "img/clay-banks-364plyVT2eQ-unsplash.webp",
                desc: `Luxurious ${titleParam} located in ${urlParams.get('location') || 'prime city area'}.`,
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1",
                reviews: [`<strong>Sakthi V:</strong> 'Great experience viewing ${titleParam}.'`]
            };
            updatePropertyScreenData(customProp);
        }
    } else if (document.getElementById('propTitleDisplay')) {
        updatePropertyScreenData(gallery12Database[0]);
    }

    // Populate 12 Gallery Modal Grid
    const gridContainer = document.getElementById('lightboxGridContainer');
    if (gridContainer) {
        let gridHTML = '';
        gallery12Database.forEach((item, idx) => {
            gridHTML += `<img src="${item.img}" alt="${item.title}" class="gallery-selectable-img" onclick="selectGalleryImg(this, ${idx})">`;
        });
        gridContainer.innerHTML = gridHTML;
    }

    const galleryModal = document.getElementById('galleryModal');
    const openGalleryModal = document.getElementById('openGalleryModal');
    const closeGalleryModal = document.getElementById('closeGalleryModal');
    const doneGalleryBtn = document.getElementById('doneGalleryBtn');

    if (openGalleryModal && galleryModal) openGalleryModal.addEventListener('click', () => galleryModal.classList.add('active'));
    if (closeGalleryModal && galleryModal) closeGalleryModal.addEventListener('click', () => galleryModal.classList.remove('active'));

    window.selectGalleryImg = function(imgElement, index) {
        document.querySelectorAll('.gallery-selectable-img').forEach(el => el.style.border = 'none');
        imgElement.style.border = '4px solid #2563eb';
        selectedGalleryIndex = index;
    }

    if (doneGalleryBtn) {
        doneGalleryBtn.addEventListener('click', () => {
            const selectedItem = gallery12Database[selectedGalleryIndex];
            if (selectedItem) {
                updatePropertyScreenData(selectedItem);
                alert(`Loaded complete details for "${selectedItem.title}"!`);
            }
            if (galleryModal) galleryModal.classList.remove('active');
        });
    }

    // ------------------------------------------
    // PROPERTY DETAILS PAGE: BOOKING & SCHEDULE
    // ------------------------------------------
    const bookModal = document.getElementById('bookModal');
    const openBookModal = document.getElementById('openBookModal');
    const closeBookModal = document.getElementById('closeBookModal');
    const bookingForm = document.getElementById('bookingForm');

    if (openBookModal && bookModal) openBookModal.addEventListener('click', () => bookModal.classList.add('active'));
    if (closeBookModal && bookModal) closeBookModal.addEventListener('click', () => bookModal.classList.remove('active'));

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const checkedAmenities = Array.from(document.querySelectorAll('#amenitiesCheckboxGroup input:checked')).map(cb => cb.value);

            const bookingData = {
                title: currentSelectedItem.title,
                price: currentSelectedItem.price,
                location: currentSelectedItem.location,
                img: currentSelectedItem.img,
                beds: currentSelectedItem.beds,
                baths: currentSelectedItem.baths,
                sqft: currentSelectedItem.sqft,
                name: document.getElementById('bookName').value,
                contact: document.getElementById('bookContact').value,
                work: document.getElementById('bookWork').value,
                salary: document.getElementById('bookSalary').value,
                amenities: checkedAmenities.join(', '),
                checkIn: document.getElementById('bookCheckIn').value,
                checkOut: document.getElementById('bookCheckOut').value
            };

            localStorage.setItem('tempBookingData', JSON.stringify(bookingData));
            if (bookModal) bookModal.classList.remove('active');
            window.location.href = `about.html?title=${encodeURIComponent(currentSelectedItem.title)}&price=${encodeURIComponent(currentSelectedItem.price)}&location=${encodeURIComponent(currentSelectedItem.location)}&img=${encodeURIComponent(currentSelectedItem.img)}`;
        });
    }

    const scheduleModal = document.getElementById('scheduleModal');
    const openScheduleModal = document.getElementById('openScheduleModal');
    const closeScheduleModal = document.getElementById('closeScheduleModal');
    const scheduleForm = document.getElementById('scheduleForm');

    if (openScheduleModal && scheduleModal) openScheduleModal.addEventListener('click', () => scheduleModal.classList.add('active'));
    if (closeScheduleModal && scheduleModal) closeScheduleModal.addEventListener('click', () => scheduleModal.classList.remove('active'));

    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const newVisit = {
                name: document.getElementById('schedName').value,
                phone: document.getElementById('schedPhone').value,
                property: currentSelectedItem.title,
                date: document.getElementById('schedDate').value,
                slot: document.getElementById('schedSlot').value
            };
            const existingVisits = JSON.parse(localStorage.getItem('stacklyVisits') || '[]');
            existingVisits.push(newVisit);
            localStorage.setItem('stacklyVisits', JSON.stringify(existingVisits));

            alert('Site visit scheduled successfully!');
            scheduleModal.classList.remove('active');
            scheduleForm.reset();
            window.location.href = 'about.html';
        });
    }

    // ------------------------------------------
    // ABOUT & BOOKING FLOW INITIALIZATION
    // ------------------------------------------
    const storedBooking = JSON.parse(localStorage.getItem('tempBookingData') || '{}');
    const propTitle = urlParams.get('title') || storedBooking.title || "Whispering Pines Villa";
    const propPrice = urlParams.get('price') || storedBooking.price || "1.85 Cr";
    const propLoc = urlParams.get('location') || storedBooking.location || "Race Course, Coimbatore";
    const propImg = urlParams.get('img') || storedBooking.img || "img/d5-render-O3LR3ZI5Ams-unsplash.webp";

    if (document.getElementById('flowPropTitle')) {
        document.getElementById('flowPropTitle').textContent = propTitle;
        document.getElementById('flowPropLoc').textContent = propLoc;
        document.getElementById('sumLoc').textContent = propLoc;
        document.getElementById('flowPropImg').src = propImg;
        
        let durationText = propPrice.includes('Cr') ? '' : '/month';
        document.getElementById('flowPropPrice').textContent = propPrice.includes('Cr') ? `₹ ${propPrice}` : `₹ ${propPrice} ${durationText}`;

        let baseAmount = propPrice.includes('Cr') ? 18500000 : 25000;
        let depositAmount = propPrice.includes('Cr') ? 1850000 : 250000;
        let serviceFee = propPrice.includes('Cr') ? 370000 : 5000;
        let totalPayable = baseAmount + depositAmount + serviceFee;

        if(document.getElementById('totalPayableAmt')) {
            document.getElementById('totalPayableAmt').textContent = `₹ ${totalPayable.toLocaleString('en-IN')}`;
        }

        const proceedBtn = document.getElementById('proceedToPayBtn');
        if (proceedBtn) {
            proceedBtn.addEventListener('click', function () {
                switchStep(2);
            });
        }

        const confirmPayBtn = document.getElementById('confirmPaymentBtn');
        if (confirmPayBtn) {
            confirmPayBtn.addEventListener('click', function () {
                let halfAmt = Math.floor(totalPayable / 2);
                let paidAmount = selectedCategory === 1 ? halfAmt : totalPayable;
                
                const newBooking = {
                    property: propTitle,
                    location: propLoc,
                    price: propPrice,
                    img: propImg,
                    name: document.getElementById('guestName') ? document.getElementById('guestName').value : "Sakthi V",
                    checkIn: document.getElementById('checkInDate') ? document.getElementById('checkInDate').value : "2026-10-27",
                    checkOut: document.getElementById('checkOutDate') ? document.getElementById('checkOutDate').value : "2026-10-31",
                    paymentCategory: selectedCategory,
                    paidAmount: paidAmount
                };

                let existingBookings = JSON.parse(localStorage.getItem('stacklyBookings') || '[]');
                existingBookings.push(newBooking);
                localStorage.setItem('stacklyBookings', JSON.stringify(existingBookings));

                alert('Booking Confirmed Successfully! Redirecting to Dashboard...');
                window.location.href = 'services.html';
            });
        }
    }

    // ------------------------------------------
    // SERVICES & DASHBOARD: RENDER BOOKINGS
    // ------------------------------------------
    const container = document.getElementById('bookingsListContainer');
    const savedBookings = JSON.parse(localStorage.getItem('stacklyBookings') || '[]');
    let activeUserName = "Sakthi V";

    if (savedBookings.length > 0 && savedBookings[savedBookings.length - 1].name) {
        activeUserName = savedBookings[savedBookings.length - 1].name;
    }

    const userNameEl = document.getElementById('loggedUserName');
    const userAvatarEl = document.getElementById('userInitialAvatar');
    if (userNameEl) userNameEl.textContent = activeUserName;
    if (userAvatarEl) userAvatarEl.textContent = activeUserName.charAt(0).toUpperCase();

    if (container && savedBookings.length > 0) {
        savedBookings.forEach(b => {
            let cardDiv = document.createElement('div');
            cardDiv.className = 'booking-item-card';
            cardDiv.setAttribute('data-category', 'upcoming');
            
            let isHalfPaid = (b.paymentCategory === 1);
            let paymentNote = isHalfPaid 
                ? 'Incomplete Payment (50% Advance Paid - Balance due in 50 Days)' 
                : 'Successful & Confirmed (100% Paid)';

            cardDiv.innerHTML = `
                <div class="booking-card-left">
                    <img src="${b.img || 'img/clay-banks-364plyVT2eQ-unsplash.webp'}" alt="Property" class="booking-prop-img">
                    <div class="booking-prop-details">
                        <h3>${b.property || b.title || 'Luxury Property'}</h3>
                        <p><i class="fa-solid fa-location-dot"></i> ${b.location || 'Prime Location, India'}</p>
                        <div class="prop-specs-badges">
                            <span><i class="fa-solid fa-bed"></i> ${b.beds || 3} Beds</span>
                            <span><i class="fa-solid fa-bath"></i> ${b.baths || 3} Baths</span>
                            <span><i class="fa-solid fa-vector-square"></i> ${b.sqft || '2,400'} sqft</span>
                        </div>
                        <div class="booking-dates-info">
                            <span>Check-in ${b.checkIn || '15 Oct 2025'}</span> &bull; <span>Check-out ${b.checkOut || '15 Oct 2026'}</span>
                        </div>
                    </div>
                </div>
                <div class="booking-card-right">
                    <div class="booking-price-txt">₹ ${b.price || '25,000'}</div>
                    <div class="booking-action-btns">
                        <button class="btn-outline-action" onclick="viewBookingDetails('${b.property || b.title}', '${b.location || 'India'}', '${b.name || activeUserName}', '₹ ${b.price || '25,000'}', '${paymentNote}')">View Details</button>
                        <button class="btn-outline-action" onclick="downloadAgreementPDF('${b.property || b.title}')"><i class="fa-solid fa-download"></i> Download</button>
                    </div>
                </div>
            `;
            container.insertBefore(cardDiv, container.firstChild);
        });
    }
});

// ==========================================
// 3. GLOBAL HELPER FUNCTIONS
// ==========================================
function updatePropertyScreenData(item) {
    currentSelectedItem = item;
    if(document.getElementById('propTitleDisplay')) {
        document.getElementById('propTitleDisplay').textContent = item.title;
        document.getElementById('propPriceDisplay').textContent = item.price;
        document.getElementById('propDurationDisplay').textContent = item.duration;
        document.getElementById('propBadgeDisplay').textContent = item.type;
        document.getElementById('propTagDisplay').textContent = item.type;
        document.getElementById('propLocationText').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location}`;
        document.getElementById('locationAddressDisplay').textContent = item.location;
        document.getElementById('propBedsDisplay').textContent = item.beds;
        document.getElementById('propBathsDisplay').textContent = item.baths;
        document.getElementById('propSqftDisplay').textContent = item.sqft;
        document.getElementById('mainPropertyImg').src = item.img;
        document.getElementById('propDescDisplay').textContent = item.desc;
        document.getElementById('propertyMapIframe').src = item.map;
        document.getElementById('bookPropertyTitle').value = item.title;

        let reviewsHtml = '';
        item.reviews.forEach(rev => {
            reviewsHtml += `<div style="padding: 12px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb;"><p>${rev}</p></div>`;
        });
        document.getElementById('dynamicReviewsList').innerHTML = reviewsHtml;
    }
}

function changeImage(element, index) {
    if (gallery12Database[index]) {
        updatePropertyScreenData(gallery12Database[index]);
    }
}

function switchTab(tabName, btnElement) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    btnElement.classList.add('active');
    document.getElementById('tab-' + tabName).classList.add('active');
}

function switchStep(stepNum) {
    const sec1 = document.getElementById('bookingSection1');
    const sec2 = document.getElementById('bookingSection2');
    const sec3 = document.getElementById('bookingSection3');
    const ind1 = document.getElementById('stepIndicator1');
    const ind2 = document.getElementById('stepIndicator2');
    const ind3 = document.getElementById('stepIndicator3');

    if (!sec1 || !sec2 || !sec3) return;

    sec1.classList.remove('active');
    sec2.classList.remove('active');
    sec3.classList.remove('active');
    if(ind1) ind1.classList.remove('active');
    if(ind2) ind2.classList.remove('active');
    if(ind3) ind3.classList.remove('active');

    if (stepNum === 1) {
        sec1.classList.add('active');
        if(ind1) ind1.classList.add('active');
    } else if (stepNum === 2) {
        sec2.classList.add('active');
        if(ind2) ind2.classList.add('active');
    } else if (stepNum === 3) {
        sec3.classList.add('active');
        if(ind3) ind3.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let selectedCategory = 2;
function selectPaymentCategory(cat) {
    selectedCategory = cat;
    if (cat === 1) {
        document.getElementById('payCat1').classList.add('selected');
        document.getElementById('payCat2').classList.remove('selected');
    } else {
        document.getElementById('payCat2').classList.add('selected');
        document.getElementById('payCat1').classList.remove('selected');
    }
}

function toggleDetailsView() {
    const box = document.getElementById('expandableDetailsBox');
    const icon = document.getElementById('viewIcon');
    const text = document.getElementById('viewDetailsText');

    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        icon.className = 'fa-solid fa-chevron-up';
        text.textContent = 'Hide Full Details';
    } else {
        box.style.display = 'none';
        icon.className = 'fa-solid fa-chevron-down';
        text.textContent = 'View Full Details';
    }
}

function switchBookingTab(category, btnElement) {
    document.querySelectorAll('.tab-filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    const cards = document.querySelectorAll('.booking-item-card');
    cards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function viewBookingDetails(title, loc, name, price, paymentStatus) {
    const modalTitle = document.getElementById('modalPropTitle');
    const modalLoc = document.getElementById('modalPropLoc');
    const modalName = document.getElementById('modalGuestName');
    const modalPrice = document.getElementById('modalPropPrice');
    const statusEl = document.getElementById('modalPaymentStatus');
    const modalBox = document.getElementById('bookingDetailsModal');

    if (modalTitle) modalTitle.textContent = title;
    if (modalLoc) modalLoc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${loc}`;
    if (modalName) modalName.textContent = name;
    if (modalPrice) modalPrice.textContent = price;
    
    if (statusEl) {
        statusEl.textContent = paymentStatus;
        if (paymentStatus.includes('Incomplete')) {
            statusEl.className = 'incomplete-text';
            statusEl.style.color = '#dc2626';
        } else {
            statusEl.className = '';
            statusEl.style.color = '#16a34a';
        }
    }

    if (modalBox) modalBox.style.display = 'flex';
}

function closeModal() {
    const modalBox = document.getElementById('bookingDetailsModal');
    if (modalBox) modalBox.style.display = 'none';
}

function downloadAgreementPDF(propertyTitle) {
    alert(`Downloading verified lease & booking agreement PDF for "${propertyTitle}"...`);
    let agreementText = `STACKLY SERVICES - OFFICIAL BOOKING AGREEMENT\n===============================================\nProperty: ${propertyTitle}\nStatus: Verified\nAll terms & conditions applied.`;
    
    let blob = new Blob([agreementText], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${propertyTitle.replace(/\s+/g, '_')}_Agreement.txt`;
    link.click();
}

function submitContactForm(event) {
    event.preventDefault();
    alert('Your message/complaint has been sent successfully to Stackly Real Estate Support!');
    const form = document.getElementById('contactForm');
    if (form) form.reset();
}