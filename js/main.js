const giftData = [
    {
        id: 1,
        title: "מתנה לחתונה",
        img: "wedding.jpg",
        content: "מתנות מושלמות לזוגות צעירים",
        tag: "כלי בית",
        giftIdea1:"קורס בישול בייתי",
        giftIdea2:"גיפט קארד לחנות כליי בית",
    },
    {
        id: 2,
        title: "מתנה ליום הולדת",
        img: "birthday.jpg",
        content: "מתנות ייחודיות לכל גיל ותחום עניין",
        tag: "בידור",
        giftIdea1:"שובר לצניחה חופשית",
        giftIdea2:"גיפט קארד לקריוקי בבר קריוקי",
    },
    {
        id: 3,
        title: "מתנת חנוכת בית",
        img: "housewarming.jpg",
        content: "מתנות מרגשות לחגיגת בית חדש",
        tag: "עיצוב בית",
        giftIdea1:"גיפט קארד לחנות כלי בית",
        giftIdea2:"שובר לקניית עוגה ממאפייה",
    },
    {
        id: 4,
        title: "מתנה ללידה",
        img: "babyshower.jpg",
        content: "מתנות מתוקות ופרקטיות לתינוק הקטן",
        tag: "תינוקות",
        giftIdea1:"גיפט קארד לחנות תינוקות",
        giftIdea2:"קורס התפתחות הילד",
    },
    {
        id: 5,
        title: "מתנה לבוגר",
        img: "graduation.jpg",
        content: "מתנות מעוררות השראה לבוגרים מצטיינים",
        tag: "חינוך",
        giftIdea1:"כרטיס מתנה לחנות ספרים או ציוד משרדי",
        giftIdea2:"תעודת הוקרה מעוצבת – עם הקדשה אישית",
    },
    {
        id: 6,
        title: "מתנה ליום נישואים",
        img: "anniversary.jpg",
        content: "מתנות רומנטיות ורגשניות לזוגות",
        tag: "אורח חיים",
        giftIdea1:"שובר למסאז' זוגי",
        giftIdea2:"שובר לארוחת בוקר זוגית",
    },
    {
        id: 7,
        title: "מתנה למורה",
        img: "teacher.jpg",
        content: "מתנות מרגשות להוקרת מורים מסורים",
        tag: "חינוך",
        giftIdea1:"שובר ליום ספא מפנק",
        giftIdea2:"סדנאת ויפאסאנה",
    },
    {
        id: 8,
        title: "מתנה לפרישה",
        img: "retirement.jpg",
        content: "מתנות חגיגיות למי שפרש בכבוד",
        tag: "אורח חיים",
        giftIdea1:"שובר לשיט בספינת תענוגות",
        giftIdea2:"קורס במשחק ברידג'",
    },
    {
        id: 9,
        title: "מתנה לחג",
        img: "holiday.jpg",
        content: "מתנות חגיגיות ועליזות לעונת החגים",
        tag: "עונתי",
        giftIdea1:"גיפט קארד לחנות כליי בית",
        giftIdea2:"קניית זר פרחים במשלוח עד הבית",
    }
    ,
    {
        id: 10,
        title: "מתנה לבר מצווה",
        img: "BarMitsva.jpg",
        content: "מתנה חגיגית לילד שהופך לנער",
        tag: "אורח חיים",
        giftIdea1:"סוכריות טופי רכות לבית הכנסת",
        giftIdea2:"שובר ללימוד הפרשה אצל רב",
    }
];



// הצג את כל המתנות בעת טעינת העמוד
document.addEventListener('DOMContentLoaded', displayGifts);


function displayGifts() {
    const giftsContainer = document.getElementById("giftsContainer");
    giftsContainer.innerHTML = "";

    giftData.forEach(gift => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-3", "col-sm-4", "mb-4");

        cardElement.innerHTML = `
            <div class="card">
                <img src="img/${gift.img}" class="card-img-top" alt="${gift.title}">
                <div class="card-body">
                    <h5 class="card-title">${gift.title}</h5>
                    <p class="card-text">${gift.content}</p>
                    <button class="btn btn-outline-dark" onclick="showGiftIdeas(${gift.id})">רעיון למתנה</button>
                </div>
            </div>
        `;

        giftsContainer.appendChild(cardElement);
    });
}

function toggleNav() {
    const navMenu = document.getElementById("main-nav");
    const navButton = document.getElementById("nav-button");

    navMenu.classList.toggle("hide-mobile");

    // שינוי הטקסט בכפתור בהתאם למצב
    if (!navMenu.classList.contains("hide-mobile")) {
        navButton.innerHTML = `<img src="img/‏‏nav-close.svg" alt="ניווט">`;
    } else {
        navButton.innerHTML = `<img src="img/‏‏nav-icon.svg" alt="ניווט">`; // אייקון ההמבורגר
    }
    
}

function searchGifts() {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    const giftsContainer = document.getElementById("giftsContainer");
    giftsContainer.innerHTML = "";

    if (searchInput === "") {
        displayGifts();
        return;
    }

    const filteredGifts = giftData.filter(gift =>
        gift.title.toLowerCase().includes(searchInput) ||
        gift.content.toLowerCase().includes(searchInput) ||
        gift.tag.toLowerCase().includes(searchInput)
    );

    if (filteredGifts.length === 0) {
        giftsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>לא נמצאו מתנות תואמות לחיפוש "‎${document.getElementById("searchInput").value}"</p>
            </div>
        `;
        return;
    }

    filteredGifts.forEach(gift => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-3", "col-sm-6", "mb-4");

        cardElement.innerHTML = `
            <div class="card">
                <img src="img/${gift.img}" class="card-img-top" alt="${gift.title}">
                <div class="card-body">
                    <h5 class="card-title">${gift.title}</h5>
                    <p class="card-text">${gift.content}</p>
                    <button class="btn btn-outline-dark" onclick="showGiftIdeas(${gift.id})">הצג מתנה</button>
                </div>
            </div>
        `;

        giftsContainer.appendChild(cardElement);
    });
}
function showGiftIdeas(giftId) {
    const gift = giftData.find(g => g.id === giftId);
    if (!gift) return;

    const giftIdeasList = document.getElementById("giftIdeasList");
    giftIdeasList.innerHTML = `
        <li class="mb-2"> ${gift.giftIdea1}</li>
        <li> ${gift.giftIdea2}</li>
    `;

    const modal = new bootstrap.Modal(document.getElementById('giftModal'));
    modal.show();
}

function resetSearch() {
    // מאפס את שדה החיפוש
    document.getElementById("searchInput").value = "";

    // מאפס את כפתורי הסינון - מסיר active מכולם ומוסיף ל'הכל'
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === 'הכל') {
            button.classList.add('active');
        }
    });

    // מציג מחדש את כל הכרטיסיות
    displayGifts();
}


function filterGifts(tag) {

    const searchInput = document.getElementById("searchInput");
    searchInput.value = "";
    searchInput.placeholder = "חפש מתנות..."; 
    // עדכון כפתורי הסינון
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === tag || (tag === 'all' && button.textContent === 'הכל')) {
            button.classList.add('active');
        }
    });

    const giftsContainer = document.getElementById("giftsContainer");
    giftsContainer.innerHTML = "";

    // סינון המתנות
    let filteredGifts = tag === 'all' ?
        giftData :
        giftData.filter(gift => gift.tag === tag);

    // אם אין תוצאות
    if (filteredGifts.length === 0) {
        giftsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>לא נמצאו מתנות בקטגוריה זו</p>
            </div>
        `;
        return;
    }

    // הצגת המתנות המסוננות
    filteredGifts.forEach(gift => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-md-3", "col-sm-6", "mb-4");

        cardElement.innerHTML = `
            <div class="card">
                <img src="img/${gift.img}" class="card-img-top" alt="${gift.title}">
                <div class="card-body">
                    <h5 class="card-title">${gift.title}</h5>
                    <p class="card-text">${gift.content}</p>
                    <button class="btn btn-outline-dark" onclick="showGiftIdeas(${gift.id})">רעיון למתנה</button>
                </div>
            </div>
        `;

        giftsContainer.appendChild(cardElement);
    });
}