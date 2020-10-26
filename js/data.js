const menu = [{
        id: 1,
        title: "Teriyaki Chicken Casserole",
        category: "Dinner",
        price: 10.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/wvpsxx1468256321.jpg",
        tag: "Meat, Casserole",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Banana Pancakes",
        category: "Breakfast",
        price: 5.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/sywswr1511383814.jpg",
        tag: "Breakfast, Desert, Sweet",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Poutine",
        category: "Lunch",
        price: 6.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/uuyrrx1487327597.jpg",
        tag: "UnHealthy, Speciality, HangoverFood",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Christmas Pudding Trifle",
        category: "Other",
        price: 5.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/r33cud1576791081.jpg",
        tag: "Christmas",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Full English Breakfast",
        category: "Breakfast",
        price: 9.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/sqrtwu1511721265.jpg",
        tag: "Greasy, UnHealthy, Calorific, Breakfast, BBQ",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Peanut Butter Cheesecake",
        category: "Other",
        price: 4.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/qtuuys1511387068.jpg",
        tag: "Cake, Desert, Treat, UnHealthy, Speciality",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Steak Diane",
        category: "Dinner",
        price: 25.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/vussxq1511882648.jpg",
        tag: "DateNight, Expensive, Meat, MainMeal",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Big Mac",
        category: "Lunch",
        price: 3.99,
        img: "https:\/\/www.themealdb.com\/images\/media\/meals\/urzj1d1587670726.jpg",
        tag: "Beef",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Iced Coffee Fillip",
        category: "Drinks",
        price: 2.99,
        img: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/sxtxrp1454514223.jpg",
        tag: "Coffee",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Sangria #1",
        category: "Drinks",
        price: 10.99,
        img: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xrvxpp1441249280.jpg",
        tag: "Alcohol",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
];

const testimonalData = [{
        person: "-John Doe",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi velit ipsam itaque tempore voluptates enim facilis in reprehenderit laboriosam."
    },
    {
        person: "-Jane Doe",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi velit ipsam itaque tempore voluptates enim facilis in reprehenderit laboriosam."
    },
    {
        person: "-Peter Grill",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi velit ipsam itaque tempore voluptates enim facilis in reprehenderit laboriosam."
    },
];

const dishesData = [{
        name: "Strawberry Rhubarb Pie",
        price: 100,
        image: "https:\/\/www.themealdb.com\/images\/media\/meals\/178z5o1585514569.jpg",
        description: "Lorem ipsum is simply dummy text of the printing and type setting industry."
    },
    {
        name: "Fettucine alfredo",
        price: 100,
        image: "https:\/\/www.themealdb.com\/images\/media\/meals\/uquqtu1511178042.jpg",
        description: "Lorem ipsum is simply dummy text of the printing and type setting industry."
    },
    {
        name: "Cajun spiced fish tacos",
        price: 100,
        image: "https://www.themealdb.com//images//media//meals//uvuyxu1503067369.jpg",
        description: "Lorem ipsum is simply dummy text of the printing and type setting industry."
    },
    {
        name: "Fish Stew with Rouille",
        price: 100,
        image: "https://www.themealdb.com//images//media//meals//vptqpw1511798500.jpg",
        description: "Lorem ipsum is simply dummy text of the printing and type setting industry."
    },
]

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.menu-item-list');
const testimonalContent = document.querySelector('.testimonal-content');
const favoriteDishes = document.querySelector('.favorite-dishes');
const all = document.querySelector('#all')


// load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
    displayTestimonalContent(testimonalData);
    displayFavDishes(dishesData);
});


function displayTestimonalContent(testimonals) {
    let testimonalData = testimonals.map((testimonal) => {
        return `<div class="owl-item ">
                <p>${testimonal.review}</p>
                <h5>${testimonal.person}</h5>
                </div>`;
    });
    testimonalData = testimonalData.join("");
    testimonalContent.innerHTML = testimonalData;
}

function displayFavDishes(dishes) {
    let favDishes = dishes.map((dish) => {
        return ` <div class="col-md-3 mx-auto align-items-center justify-content-center mb-4 owl-item">
        <div class="card">
            <img src="${dish.image}"
                alt="" class="card-top-img img-fluid">
            <div class="card-footer">
                <h4>${dish.name}</h4>
                <p>${dish.description}</p>
                <span class="price text-orange">$${dish.price}</span>
            </div>
        </div>
    </div>`;
    });
    favDishes = favDishes.join("");
    favoriteDishes.innerHTML = favDishes;
}

// Display menu items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return ` <div class="col-md-6 item border p-0 my-3">
    <div class="row">
        <div class="col-4 d-sm-none d-lg-block food-img">
            <img src="${item.img}"
                class="img-fluid pr-3 py-2" alt="">
        </div>
        <div class="col-md-8 col-sm-12 text-left food-descrption">
            <div class="row">
                <div class="col-md-9 col-sm-12">
                    <img src="${item.img}"
                        class="img-fluid mobile" alt="">
                    <h4 class="pt-3">${item.title}</h4>
                </div>
                <div class="col-3 mt-2 d-sm-none d-md-block">
                    <span class="price text-orange large-screen">$${item.price}</span>
                </div>
            </div>
            <h6>${item.tag}</h6>
            <p>Lorem ipsum is simply dummy text of the printing and type setting industry.
            </p>
            <span class="price text-orange mobile">$${item.price}</span>
        </div>
    </div>
</div>
`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);

    const categoryBtns = categories.map((category) => {
        return `<li class="menu-item filter-btn d-lg-inline-block d-sm-block" id=${category} data-id="${category}">${category}</li>`
    }).join("");
    container.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category == category) {
                    return menuItem;
                }
            });

            if (category) {
                filterBtns.forEach((btn) => {
                    btn.classList.remove('tabActive');
                    e.target.classList.add('tabActive');
                });

                filterBtns.forEach((btn) => {
                    btn.classList.remove('tabActive');
                });

                const element = document.getElementById(category);
                console.log(element);
                element.classList.add('tabActive');
            }

            if (category == "All") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}