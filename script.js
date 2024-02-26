const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

// sliders-items

const menuItems = document.querySelectorAll(".menu-item");
const sliderImg = document.querySelector(".slider-sub");
const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");



menuItems.forEach((element, index, array) => {
  element.addEventListener("click", () => {
    //change first img
    sliderImg.style.transform = `translateX(${-100 * index}vw)`;

    //change second img
    choosenProduct = products[index];

    //change second img text
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$ " + choosenProduct.price;

  });
});

// color
const currentProductColors = document.querySelectorAll(".color");

currentProductColors.forEach((element, index, array) => {
  element.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


// sizes
const currentProductSizes = document.querySelectorAll(".size");

currentProductSizes.forEach((element, index, array) => {
  element.addEventListener("click", (e) => {
    currentProductSizes.forEach((element, index, array) => {
      element.classList.remove("white")
    })
    e.target.classList.add("white")
  });
});


// buy-now
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// registration-form-open

const registrationImg = document.querySelector(".registration")
const registrationOpen = document.querySelector(".registration-form")

registrationImg.addEventListener("click", () => {
  registrationOpen.style.display = "flex";
})

// registration-validation

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");
const error = document.querySelectorAll("#error");



submit.addEventListener("click", (e) => {
  e.preventDefault();
  validationInput();
})
function validationInput() {
  const unValue = username.value.trim();
  const emValue = email.value.trim();
  const pVAlue = password.value;
  const cpValue = cPassword.value;
  // username
  if (unValue === "" || unValue === undefined) {
    username.classList.add("red")
    error[0].textContent = "Enter your username"
  }
  else {
    error[0].textContent = ""
    username.classList.add("green")
  }
  // email
  var pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (emValue === "" || emValue === undefined) {
    email.classList.add("red")
    error[1].textContent = "Enter your email"
  }
  else if (!pattern.test(emValue)) {
    email.classList.remove("green")
    email.classList.add("red")
    error[1].textContent = ("Enter valid email id");
  }
  else {
    email.classList.add("green")
    error[1].textContent = ""
  }
  // password
  if (pVAlue === "" || pVAlue === undefined) {
    password.classList.add("red")
    error[2].textContent = "Entre your password "
  }
  else if (pVAlue.length < 8) {
    error[2].textContent = "At least 8 charters "
  }
  else {
    password.classList.add("green")
    error[2].textContent = ""
  }
  // cPassword
  if (cpValue === "" || cpValue == undefined) {
    cPassword.classList.add("red")
    error[3].textContent = "entre conform password "
  }
  else if (cpValue !== pVAlue) {
    error[3].textContent = "conform password don't match "
  }
  else {
    cPassword.classList.add("green")
    error[3].textContent = ""
  }
}

// registration-form close

const registrationClose = document.querySelector(".close-registration")

registrationClose.addEventListener("click", () => {
  registrationOpen.style.display = "none";
})
