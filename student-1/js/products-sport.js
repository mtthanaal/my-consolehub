document.getElementById("hidesubmit").addEventListener("click", function (e) {
  e.preventDefault();
  validateform();
});

function validateform() {
  let first = document.products.first.value.trim();
  let last = document.products.last.value.trim();
  let email = document.products.email.value.trim();
  let telephone1 = document.products.telephone1.value.trim();
  let line1 = document.products.line1.value.trim();
  let from = document.products.from.value;
  let to = document.products.to.value;
  let accnum = document.products.accnum.value.trim();
  let expiry = document.products.expiry.value.trim();
  let cvv = document.products.cvv.value.trim();
  let terms = document.products.terms.checked;
  let paymentmode = getRadioValue(document.products.mode);

  if (paymentmode === "cash") {
    if (first === "") {
      alert("Please fill out the first name field.");
    } else if (last === "") {
      alert("Please fill out the last name field.");
    } else if (email === "") {
      alert("Please fill out the email field.");
    } else if (telephone1 === "") {
      alert("Please fill out at least one telephone number.");
    } else if (line1 === "") {
      alert("Please fill out the Address field.");
    } else if (from === "" || to === "") {
      alert("Please select the delivery period.");
    } else {
      getsummary();
    }
  } else {
    if (first === "") {
      alert("Please fill out the first name field.");
    } else if (last === "") {
      alert("Please fill out the last name field.");
    } else if (email === "") {
      alert("Please fill out the email field.");
    } else if (telephone1 === "") {
      alert("Please fill out at least one telephone number.");
    } else if (line1 === "") {
      alert("Please fill out the Address field.");
    } else if (from === "" || to === "") {
      alert("Please select the delivery period.");
    } else if (accnum === "") {
      alert("Please fill out the Account Number.");
    } else if (expiry === "") {
      alert("Please fill out the expiry Date.");
    } else if (cvv === "") {
      alert("Please fill out the CVV.");
    } else if (terms === "") {
      alert("Please Agree to Our Terms and Conditions.");
    } else {
      getsummary();
    }
  }
}

//-------------------------------------------------------------------------------------------------------------

function getRadioValue(radioArray) {
  for (let i = 0; i < radioArray.length; i++) {
    if (radioArray[i].checked) {
      return radioArray[i].value;
    }
  }
  return "";
}

//-------------------------------------------------------------------------------------------------------------

document.products.addEventListener("change", function () {
  let paymentmode = getRadioValue(document.products.mode);

  if (paymentmode === "card") {
    document.getElementById("cardrequired").style.display = "block";
  } else {
    document.getElementById("cardrequired").style.display = "none";
  }

  let terms = document.products.terms.checked;
  document.getElementById("hidesubmit").disabled = !terms;
});

//-------------------------------------------------------------------------------------------------------------

let products = [
  {
    name: "FIFA 23",
    quantity: 0,
    unit: 850,
  },

  {
    name: "Skate SIm",
    quantity: 0,
    unit: 1000,
  },

  {
    name: "Rocket League",
    quantity: 0,
    unit: 1200,
  },

  {
    name: "AEW:Fight Forever",
    quantity: 0,
    unit: 1250,
  },

];

let cards = document.getElementsByClassName("plus");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    products[i]["quantity"]++;
    document.getElementsByClassName("quantity")[i].innerHTML =
      products[i]["quantity"];
    calculateTotal();
  });

  document
    .getElementsByClassName("minus")
    [i].addEventListener("click", function () {
      if (products[i]["quantity"] > 0) {
        products[i]["quantity"]--;
      }
      document.getElementsByClassName("quantity")[i].innerHTML =
        products[i]["quantity"];
      calculateTotal();
    });
}

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i]["quantity"] * products[i]["unit"];
  }

  // Get all elements with class "total"
  const totalElements = document.querySelectorAll(".total");

  // Update the content of each element with the calculated total
  totalElements.forEach((element) => {
    element.innerHTML = "Total: Rs." + total;
  });

  return total;
}

function getsummary() {
  console.log("getsummary called");
  let first = document.products.first.value.trim();
  let last = document.products.last.value.trim();
  let email = document.products.email.value.trim();

  document.getElementById("shop").style.display = "none";
  document.getElementById("summary").style.display = "block";

  for (let i = 0; i < products.length; i++) {
    if (products[i]["quantity"] > 0) {
      let price = products[i]["quantity"] * products[i]["unit"];
      document.getElementsByClassName("summaryitem")[i].style.display =
        "inline-block";
      document.getElementsByClassName("summaryquantity")[i].innerHTML =
        "Quantity: " + products[i]["quantity"];
      document.getElementsByClassName("summarycost")[i].innerHTML =
        "Price: Rs." + price;
      document.summary.name.value = first + " " + last;
      document.summary.email.value = email;
    }
  }

  document.getElementById("summary-total").innerHTML = "Rs." + calculateTotal();
}
