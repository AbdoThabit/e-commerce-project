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

sum = 0;
function viewCarts() {
  var divContainer = document.getElementById("maindiv");
  var totalPrice = document.getElementById("total");
  console.log(divContainer);
  var arr = document.cookie.split("=");
  var carts = arr[1].split(",");
  console.log(carts);
  for (var i = 0; i < carts.length; i++) {
    for (var j = 0; j < products.length; j++) {
      if (Number(carts[i]) == products[j].id) {
        var row = document.createElement("div");
        row.classList.add("row", "mb-4");
        var imgDiv = document.createElement("div");
        imgDiv.classList.add("col-md-3");
        var img = document.createElement("img");
        img.setAttribute("src", products[j].imagePath);
        img.style["width"] = "100%";
        var detailsDiv = document.createElement("div");
        detailsDiv.classList.add("col-md-9");
        innerdiv = document.createElement("div");
        innerdiv.classList.add("mt-3");
        var p1 = document.createElement("p");
        p1.innerText = "Description : " + products[j].description;
        var p2 = document.createElement("p");
        p2.innerText = "Category : " + products[j].category;
        var p3 = document.createElement("p");
        p3.innerText = "price : " + products[j].price;
        var btn = document.createElement("button");
        btn.classList.add("btn", "btn-dark", "btn-block");
        btn.setAttribute("onclick", "remove(event)");
        btn.setAttribute("id", products[j].price);
        btn.innerText = "remove";
        imgDiv.appendChild(img);
        innerdiv.appendChild(p1);
        innerdiv.appendChild(p2);
        innerdiv.appendChild(p3);
        innerdiv.appendChild(btn);
        detailsDiv.appendChild(innerdiv);
        row.appendChild(imgDiv);
        row.appendChild(detailsDiv);
        console.log(row);
        divContainer.appendChild(row);
        sum += products[j].price;
      }
    }
  }
  if (sum != 0) totalPrice.innerText = "Total price = " + sum + "$";
}

function remove(event) {
  var row = event.target.parentNode.parentNode.parentNode;
  row.remove();
  console.log(Math.round(sum));
  var totalPrice = document.getElementById("total");
  sum -= Number(event.target.id);
  totalPrice.innerText = "Total price = " + Math.round(sum) + "$";
  if (Math.round(sum) == 0) {
    totalPrice.innerText = "";
  }
}
