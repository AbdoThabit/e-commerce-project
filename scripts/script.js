const products = [
  {
    id: 1,
    name: "Men Shirt",
    description: "Nice Colorful Shirt",
    price: 109.99,
    imagePath: "imgs/products/men/Shirt.jpg",
  },
  {
    id: 2,
    name: "Jacket",
    description: "Black Jacket",
    price: 289.99,
    imagePath: "imgs/products/men/Jacket.jpg",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Simple black T-Shirt",
    price: 39.99,
    imagePath: "imgs/products/men/T-Shirt.jpg",
  },
  {
    id: 4,
    name: "Shoes",
    description: "Classic brown Shose",
    price: 160,
    imagePath: "imgs/products/men/Shose.jpg",
  },
  {
    id: 5,
    name: "SportShoes",
    description: "White Sport Shose for running",
    price: 110,
    imagePath: "imgs/products/men/SportShoes.jpg",
  },
  {
    id: 6,
    name: "Sun Glasses",
    description: "Nice & Simple Glasses",
    price: 40.99,
    imagePath: "imgs/products/men/SunGlasses.jpg",
  },
  {
    id: 7,
    name: "Belt",
    description: "Classic brown belt",
    price: 39.99,
    imagePath: "imgs/products/men/Belt.jpg",
  },
  {
    id: 8,
    name: "Trousers",
    description: "Simple beige trousers",
    price: 159.99,
    imagePath: "imgs/products/men/Trousers.jpg",
  },
  {
    id: 9,
    name: "Dress",
    description: "Tall black dress",
    price: 259.99,
    imagePath: "imgs/products/women/Dress.jpg",
  },
  {
    id: 10,
    name: "T-Shirt",
    description: "simple bigie T-Shirt",
    price: 49.99,
    imagePath: "imgs/products/women/T-Shirt.jpg",
  },
  {
    id: 11,
    name: "Trousers",
    description: "Beautiful dark Trousers",
    price: 120,
    imagePath: "imgs/products/women/Trousers.jpg",
  },
  {
    id: 12,
    name: "Shose",
    description: "Stylish Women shose",
    price: 149.99,
    imagePath: "imgs/products/women/Shose.jpg",
  },
  {
    id: 13,
    name: "SportShoes",
    description: "Simple & Cute sport shose ",
    price: 100.99,
    imagePath: "imgs/products/women/SportShoes.jpg",
  },
  {
    id: 14,
    name: "belt",
    description: "Simple brown belt for Women",
    price: 79.99,
    imagePath: "imgs/products/women/belt.jpg",
  },
  {
    id: 15,
    name: "Hat",
    description: "Simple hat Women",
    price: 10.99,
    imagePath: "imgs/products/women/Hat.jpg",
  },
  {
    id: 16,
    name: "SunGlasses",
    description: "Simple brown belt for Women",
    price: 100.99,
    imagePath: "imgs/products/women/SunGlasses.jpg",
  },
  {
    id: 17,
    name: "Boys T-Shirt",
    description: "Lovely dark T-shirt",
    price: 70.99,
    imagePath: "imgs/products/kids/BoyT-Shirt.jpg",
  },
  {
    id: 18,
    name: "Girls T-Shirt",
    description: "Lovely blue T-shirt",
    price: 75,
    imagePath: "imgs/products/kids/GirlT-Shirt.jpg",
  },
  {
    id: 19,
    name: "Dress",
    description: "Lovely dress",
    price: 119.99,
    imagePath: "imgs/products/kids/Dress.jpg",
  },
  {
    id: 20,
    name: "Girls Shose",
    description: "Very cute pink shose",
    price: 110,
    imagePath: "imgs/products/kids/PinkShose.jpg",
  },
  {
    id: 21,
    name: "Boys White Shose",
    description: "Lovely White Shose",
    price: 84.99,
    imagePath: "imgs/products/kids/WhiteShose.jpg",
  },
  {
    id: 22,
    name: "Boys White Shose",
    description: "Lovely White Shose",
    price: 84.99,
    imagePath: "imgs/products/kids/WhiteShose.jpg",
  },
  {
    id: 23,
    name: "Girls hat",
    description: "Funny monster hat",
    price: 10.99,
    imagePath: "imgs/products/kids/Hat.jpg",
  },

  {
    id: 24,
    name: "Cap",
    description: "Nice black & gray cap",
    price: 12.99,
    imagePath: "imgs/products/kids/Cap.jpg",
  },
];

console.log(products);
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
  cardTitleH5.innerText = products[1].name;
  var priceSpan = document.createElement("span");
  priceSpan.classList.add("price");
  priceSpan.innerText = "price : " + products[1].price;
  var btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.classList.add("btn");
  btn.classList.add("btn-dark");

  cardBodyDiv.appendChild(cardTitleH5);
  cardBodyDiv.appendChild(priceSpan);
  cardBodyDiv.appendChild(btn);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  divCol.appendChild(cardDiv);
  divRow.appendChild(divCol);

  var container = document.getElementById("maindiv");
  container.appendChild(divRow);
}
console.log(products[1].imagePath);
