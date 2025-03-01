const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");

const searchHandler = (event) =>{
    console.log(event);
    const searchValue = event.target.value.toLowerCase().trim();
    products.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = "block";            
        }else{
            product.style.display = "none";
        }
    });
};
searchInput.addEventListener("keyup", searchHandler);


const buttons = document.getElementsByClassName("filter");
const articles = document.querySelectorAll(".product-item");

const buttonHandler = (event) => {
    const button = event.target.innerText.toLowerCase();
    articles.forEach((article) => {
        const articleCategory = article.dataset.category.toLowerCase();
        if (articleCategory.includes(button) || button === "all") {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonHandler);
};


const input = document.getElementById("input");
const button2 = document.getElementById("button5")

const inputHandler = (event) => {
    console.log(event);
    const searchValue = input.value.trim();
    products.forEach((product) => {
        const productName = product.children[2].innerText;
        if (productName.includes(searchValue)) {
            product.style.display = "block";            
        } else {
            product.style.display = "none";
        }
    });
};
button2.addEventListener("click", inputHandler);