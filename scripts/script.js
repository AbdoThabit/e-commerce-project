function forwardImg() {
  var img = document.getElementById("slider");
  var src = img.getAttribute("src");

  imgNum = Number(src.charAt(20));
  if (imgNum == 2) imgNum = 1;
  else imgNum += 1;
  var newSrc = "imgs/imgsTobeSlided/" + imgNum + ".jpg";

  img.setAttribute("src", newSrc);
}
function startSlidShow() {
  intervalID = setInterval(forwardImg, 3000);
}
var cartArr = [];

const products = [
  {
    id: 1,
    name: "Men Shirt",
    description: "Nice Colorful Shirt",
    price: 109.99,
    imagePath: "imgs/products/men/Shirt.jpg",
    category: "men's",
  },
  {
    id: 2,
    name: "Jacket",
    description: "Black Jacket",
    price: 289.99,
    imagePath: "imgs/products/men/Jacket.jpg",
    category: "men's",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Simple black T-Shirt",
    price: 39.99,
    imagePath: "imgs/products/men/T-Shirt.jpg",
    category: "men's",
  },
  {
    id: 4,
    name: "Shoes",
    description: "Classic brown Shose",
    price: 160,
    imagePath: "imgs/products/men/Shose.jpg",
    category: "men's",
  },
  {
    id: 5,
    name: "SportShoes",
    description: "White Sport Shose for running",
    price: 110,
    imagePath: "imgs/products/men/SportShoes.jpg",
    category: "men's",
  },
  {
    id: 6,
    name: "Sun Glasses",
    description: "Nice & Simple Glasses",
    price: 40.99,
    imagePath: "imgs/products/men/SunGlasses.jpg",
    category: "men's",
  },
  {
    id: 7,
    name: "Belt",
    description: "Classic brown belt",
    price: 39.99,
    imagePath: "imgs/products/men/Belt.jpg",
    category: "men's",
  },
  {
    id: 8,
    name: "Trousers",
    description: "Simple beige trousers",
    price: 159.99,
    imagePath: "imgs/products/men/Trousers.jpg",
    category: "men's",
  },
  {
    id: 9,
    name: "Dress",
    description: "Tall black dress",
    price: 259.99,
    imagePath: "imgs/products/women/Dress.jpg",
    category: "women's",
  },
  {
    id: 10,
    name: "T-Shirt",
    description: "simple bigie T-Shirt",
    price: 49.99,
    imagePath: "imgs/products/women/T-Shirt.jpg",
    category: "women's",
  },
  {
    id: 11,
    name: "Trousers",
    description: "Beautiful dark Trousers",
    price: 120,
    imagePath: "imgs/products/women/Trousers.jpg",
    category: "women's",
  },
  {
    id: 12,
    name: "Shose",
    description: "Stylish Women shose",
    price: 149.99,
    imagePath: "imgs/products/women/Shose.jpg",
    category: "women's",
  },
  {
    id: 13,
    name: "SportShoes",
    description: "Simple & Cute sport shose ",
    price: 100.99,
    imagePath: "imgs/products/women/SportShoes.jpg",
    category: "women's",
  },
  {
    id: 14,
    name: "belt",
    description: "Simple brown belt for Women",
    price: 79.99,
    imagePath: "imgs/products/women/belt.jpg",
    category: "women's",
  },
  {
    id: 15,
    name: "Hat",
    description: "Simple hat Women",
    price: 10.99,
    imagePath: "imgs/products/women/Hat.jpg",
    category: "women's",
  },
  {
    id: 16,
    name: "SunGlasses",
    description: "Simple brown belt for Women",
    price: 100.99,
    imagePath: "imgs/products/women/SunGlasses.jpg",
    category: "women's",
  },
  {
    id: 17,
    name: "Boys T-Shirt",
    description: "Lovely dark T-shirt",
    price: 70.99,
    imagePath: "imgs/products/kids/BoyT-Shirt.jpg",
    category: "kids",
  },
  {
    id: 18,
    name: "Girls T-Shirt",
    description: "Lovely blue T-shirt",
    price: 75,
    imagePath: "imgs/products/kids/GirlT-Shirt.jpg",
    category: "kids",
  },
  {
    id: 19,
    name: "Dress",
    description: "Lovely dress",
    price: 119.99,
    imagePath: "imgs/products/kids/Dress.jpg",
    category: "kids",
  },
  {
    id: 20,
    name: "Girls Shose",
    description: "Very cute pink shose",
    price: 110,
    imagePath: "imgs/products/kids/PinkShose.jpg",
    category: "kids",
  },
  {
    id: 21,
    name: "Boys White Shose",
    description: "Lovely White Shose",
    price: 84.99,
    imagePath: "imgs/products/kids/WhiteShose.jpg",
    category: "kids",
  },
  {
    id: 22,
    name: "Boys White Shose",
    description: "Stylish Shose for Boys",
    price: 84.99,
    imagePath: "imgs/products/kids/Shose.jpg",
    category: "kids",
  },
  {
    id: 23,
    name: "Girls hat",
    description: "Funny monster hat",
    price: 10.99,
    imagePath: "imgs/products/kids/Hat.jpg",
    category: "kids",
  },

  {
    id: 24,
    name: "Cap",
    description: "Nice black & gray cap",
    price: 12.99,
    imagePath: "imgs/products/kids/Cap.jpg",
    category: "kids",
  },
];

function showProducts() {
  var divRow = document.createElement("div");
  divRow.classList.add("row");
  var divCol = document.createElement("div");
  divCol.classList.add("col-md-3");
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  var img = document.createElement("img");
  img.classList.add("card-img-top");
  img.classList.add("imgproduct");
  img.src = products[1].imagePath;
  var cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  var cardTitleH5 = document.createElement("h5");
  cardTitleH5.classList.add("card-title");
  cardTitleH5.innerText = "Product name :" + products[1].name;
  var priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  priceSpan.innerHTML = "price : " + products[1].price + "<br>";
  var btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.classList.add("btn");
  btn.classList.add("btn-dark");
  var descriptionDiv = document.createElement("div");
  descriptionDiv.innerText = products[1].description;

  cardBodyDiv.appendChild(cardTitleH5);
  cardBodyDiv.appendChild(descriptionDiv);
  cardBodyDiv.appendChild(priceSpan);
  cardBodyDiv.appendChild(btn);
  cardDiv.appendChild(cardTitleH5);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  divCol.appendChild(cardDiv);
  divRow.appendChild(divCol);

  var container = document.getElementById("maindiv");
  container.appendChild(divRow);
  console.log(descriptionDiv.innerText);
}
function getAllProducts() {
  var row = document.getElementById("productsrow");
  for (var i = 0; i < products.length; i++) {
    var divCol = document.createElement("div");
    divCol.classList.add("col-md-3");
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card", products[i].category, "mb-5");
    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("imgproduct");
    img.src = products[i].imagePath;
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    var cardTitleH5 = document.createElement("h5");
    cardTitleH5.classList.add("card-title");
    cardTitleH5.innerText = products[i].name;
    var priceSpan = document.createElement("span");
    priceSpan.classList.add("price");
    priceSpan.innerHTML = "price : " + products[i].price + "<br>";
    var btn = document.createElement("button");
    //btn.setAttribute("id",products[i].id)
    btn.innerText = "Add to Cart";
    btn.classList.add("btn");
    btn.classList.add("btn-dark");
    var descriptionDiv = document.createElement("div");
    descriptionDiv.innerText = products[i].description;

    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(descriptionDiv);
    cardBodyDiv.appendChild(priceSpan);
    cardBodyDiv.appendChild(btn);
    cardDiv.appendChild(cardTitleH5);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
    divCol.appendChild(cardDiv);
    row.appendChild(divCol);
  }
}

function filterItems(event) {
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    if (event.target.id == "all") cards[i].classList.remove("hidden");
    else {
      if (
        cards[i].classList.contains(event.target.id) &&
        cards[i].classList.contains("hidden")
      )
        cards[i].classList.remove("hidden");

      if (!cards[i].classList.contains(event.target.id))
        cards[i].classList.add("hidden");
    }
  }
}
