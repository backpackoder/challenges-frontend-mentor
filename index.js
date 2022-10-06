// Responsive
const isMinWidth1440px = window.matchMedia("(min-width: 1440px)");

// All the queries start
// Scrolling menu
const scrollingMenuBtn = document.querySelector("#scrollingMenuBtn");
const scrollingMenu = document.querySelector("#scrollingMenu");
const closeMenuIcon = document.querySelector("#closeMenuIcon");

// Quantity of articles selected
const lessArticles = document.querySelector("#lessArticles");
const numberOfArticlesSelected = document.querySelector("#numberOfArticlesSelected");
const moreArticles = document.querySelector("#moreArticles");

// Buttons for change the image on mobile
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const imgProduct = document.querySelectorAll(".imgProduct");

// When we select the thumbnail images on desktop
const allImages = document.querySelector("#allImages");
const imgProductFocus = document.querySelectorAll(".imgProductFocus");
const imgProductThumbnail = document.querySelectorAll(".imgProductThumbnail");
const imgProductThumbnailFocus = document.querySelectorAll(".imgProductThumbnailFocus");
const allImagesFocus = document.querySelector("#allImagesFocus");
const closeImagesFocus = document.querySelector("#closeImagesFocus");

// When we click on the "Add to cart" button
const addToCartBtn = document.querySelector("#addToCartBtn");
const articlesNotification = document.querySelector("#articlesNotification");
const numberOfArticlesNotification = document.querySelector("#numberOfArticlesNotification");
const priceDetails = document.querySelector("#priceDetails");
const totalPrice = document.querySelector("#totalPrice");
const deleteIcon = document.querySelector("#deleteIcon");

// When we click on the cart icon
const cartIcon = document.querySelector("#cartIcon");
const cartList = document.querySelector("#cartList");
const articlesInTheCartList = document.querySelector("#articlesInTheCartList");
const emptyCartCatchPhrase = document.querySelector("#emptyCartCatchPhrase");

// All the queries end --------------------------------------------------------------------------------


// When we open or close the scrolling menu
scrollingMenuBtn.addEventListener("click", openScrollingMenu);
closeMenuIcon.addEventListener("click", openScrollingMenu);

function openScrollingMenu() {
    scrollingMenu.classList.toggle("active");
}

// When we change the quantity of articles selected
lessArticles.addEventListener("click", oneArticleLess);
moreArticles.addEventListener("click", oneArticleMore);

let counter = 0;
numberOfArticlesSelected.innerHTML = counter;

function oneArticleLess() {
    if (counter > 0) {
        counter--;
        numberOfArticlesSelected.innerHTML = counter;
    }
}

function oneArticleMore() {
    if (counter < 99) {
        counter++;
        numberOfArticlesSelected.innerHTML = counter;
    }
}

// When we change the photos with prevBtn and nextBtn for mobile
let imgShowed = 0;

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

function prevImg() {
    if (imgShowed === 0) {
        for (i = 0; i < imgProduct.length; i++) {
            imgProduct[i].style.display = "none";
        }
        imgProduct[3].style.display = "block";
        imgShowed = 3;
    } else {
        for (i = 0; i < imgProduct.length; i++) {
            imgProduct[i].style.display = "none";
        }
        imgShowed--;
        imgProduct[imgShowed].style.display = "block";
    }
}

function nextImg() {
    if (imgShowed === 3) {
        for (i = 0; i < imgProduct.length; i++) {
            imgProduct[i].style.display = "none";
        }
        imgProduct[0].style.display = "block";
        imgShowed = 0;
    } else {
        for (i = 0; i < imgProduct.length; i++) {
            imgProduct[i].style.display = "none";
        }
        imgShowed++;
        imgProduct[imgShowed].style.display = "block";
    }
}

// When we change the photos with prevBtn and nextBtn on desktop
let imgShowedFocus = 0;

prevBtnFocus.addEventListener("click", prevImgFocus);
nextBtnFocus.addEventListener("click", nextImgFocus);
closeImagesFocus.addEventListener("click", closeFocus);

function prevImgFocus() {
    if (imgShowedFocus === 0) {
        for (i = 0; i < imgProductFocus.length; i++) {
            imgProductFocus[i].style.display = "none";
        }
        imgProductFocus[3].style.display = "block";
        imgShowedFocus = 3;
    } else {
        for (i = 0; i < imgProductFocus.length; i++) {
            imgProductFocus[i].style.display = "none";
        }
        imgShowedFocus--;
        imgProductFocus[imgShowedFocus].style.display = "block";
    }
}

function nextImgFocus() {
    if (imgShowedFocus === 3) {
        for (i = 0; i < imgProductFocus.length; i++) {
            imgProductFocus[i].style.display = "none";
        }
        imgProductFocus[0].style.display = "block";
        imgShowedFocus = 0;
    } else {
        for (i = 0; i < imgProductFocus.length; i++) {
            imgProductFocus[i].style.display = "none";
        }
        imgShowedFocus++;
        imgProductFocus[imgShowedFocus].style.display = "block";
    }
}

function closeFocus() {
    allImagesFocus.classList.remove("active");
}

// When we select the thumbnail images on desktop
// With allImages
for (let i = 0; i < imgProductThumbnail.length; i++) {
    imgProductThumbnail[i].addEventListener('click', () => {
        imgProductThumbnail.forEach((e) => {
            e.classList.remove("active");
        })
        imgProductThumbnail[i].classList.add("active");
        imgProduct.forEach((e) => {
            e.style.display = "none";
        })
        imgProduct[i].style.display = "block";
    });
}

for (let i = 0; i < imgProduct.length; i++) {
    imgProduct[i].addEventListener("click", () => {
        allImagesFocus.classList.add("active");
    })
}

// With allImagesFocus
for (let i = 0; i < imgProductThumbnailFocus.length; i++) {
    imgProductThumbnailFocus[i].addEventListener('click', () => {
        imgProductThumbnailFocus.forEach((e) => {
            e.classList.remove("active");
        })
        imgProductThumbnailFocus[i].classList.add("active");
        imgProductFocus.forEach((e) => {
            e.style.display = "none";
        })
        imgProductFocus[i].style.display = "block";
    });
}

for (let i = 0; i < imgProductFocus.length; i++) {
    imgProductFocus[i].addEventListener("click", () => {
        allImagesFocus.classList.add("active");
    })
}

// When we click on the "Add to cart" button
addToCartBtn.addEventListener("click", addArticlesToCart);
deleteIcon.addEventListener("click", deleteArticles);

function addArticlesToCart() {
    if (counter === 0) {
        articlesNotification.classList.remove("active");
        numberOfArticlesNotification.innerHTML = "";
    } else {
        articlesNotification.classList.add("active");
        numberOfArticlesNotification.innerHTML = counter;
    }
    cartDetails()
}

function cartDetails() {
    if (counter > 0) {
        articlesInTheCartList.classList.add("active");
        priceDetails.innerHTML = "$125.00 x " + counter;
        let calculatedPrice = counter * 125;
        let calculatedPriceToFixed2 = calculatedPrice.toFixed(2);
        totalPrice.innerHTML = "$" + calculatedPriceToFixed2;
        
        emptyCartCatchPhrase.classList.remove("active");
    } else {
        articlesInTheCartList.classList.remove("active");
        emptyCartCatchPhrase.classList.add("active");
    }
}

function deleteArticles() {
    articlesInTheCartList.classList.remove("active");
    emptyCartCatchPhrase.classList.add("active");
    articlesNotification.classList.remove("active");
}

// When we click on the cart icon
cartIcon.addEventListener("click", openCart);

function openCart() {
    cartList.classList.toggle("active");
}



if (isMinWidth1440px) {
}