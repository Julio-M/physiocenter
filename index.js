document.addEventListener("DOMContentLoaded", function() {
    const cards = [
        "Manual Therapy",
        "Μέθοδος Mckenzie",
        "Kinetic control - <br>Human movement analysis",
        "Dry Needling",
        "Trigger Point Therapy",
        "Kinesio Tape",
        "Μέθοδος Bobath<br>(Ενήλικες)",
        "Μέθοδος Bobath<br>(Βρέφη και παιδιά)",
        "Φυσικά μέσα<br>(Ηλεκτροθεραπεία, θερμα/ψυχρά, Laser, Υπέρηχο)",
        "Μαγνητικός Διεργέτης",
        "Κρουστικός Υπέρηχος",
        "Tecar Therapy"
    ];

    const cardsList = document.querySelector(".cards-list");

    cards.forEach(card => {
        const cardElement = `
            <div class="card">
                <div class="card_title">
                    <p>${card}</p>
                </div>
            </div>
        `;
        cardsList.insertAdjacentHTML('beforeend', cardElement);
    });

    const portfolioItems = [
        {
            href: "static/assets/img/portfolio/fullsize/02BD.jpeg",
            src: "static/assets/img/portfolio/thumbnails/02BD.jpeg",
            category: "Δωμάτιο 1",
            name: "Δωμάτιο 1"
        },
        {
            href: "static/assets/img/portfolio/fullsize/00KD.jpeg",
            src: "static/assets/img/portfolio/thumbnails/00KD.jpeg",
            category: "Παιδικό Δωμάτιο",
            name: "Παιδικό Δωμάτιο"
        },
        {
            href: "static/assets/img/portfolio/fullsize/03BD.jpeg",
            src: "static/assets/img/portfolio/thumbnails/03BD.jpeg",
            category: "Δωμάτιο 2",
            name: "Δωμάτιο 2"
        },
        {
            href: "static/assets/img/portfolio/fullsize/01GM.jpeg",
            src: "static/assets/img/portfolio/thumbnails/01GM.jpeg",
            category: "Γυμναστήριο",
            name: "Γυμναστήριο"
        }
    ];

    const portfolioContainer = document.querySelector("#portfolio .row.no-gutters");

    portfolioItems.forEach(item => {
        const portfolioElement = `
            <div class="col-lg-3 col-sm-6">
                <a class="portfolio-box" href="${item.href}">
                    <img class="img-fluid" src="${item.src}" alt="not found" />
                    <div class="portfolio-box-caption">
                        <div class="project-category text-white-50">${item.category}</div>
                        <div class="project-name">${item.name}</div>
                    </div>
                </a>
            </div>
        `;
        portfolioContainer.insertAdjacentHTML('beforeend', portfolioElement);
    });
});