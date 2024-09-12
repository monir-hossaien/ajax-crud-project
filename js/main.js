let toastMessage = document.getElementById("msg");

async function createData() {
  //select element from dom
  let ProductName = document.getElementById("productName").value;
  let ProductCode = document.getElementById("productCode").value;
  let ProductImage = document.getElementById("productImg").value;
  let UnitPrice = document.getElementById("unitePrice").value;
  let ProductQty = document.getElementById("productQty").value;
  let TotalPrice = document.getElementById("totalPrice").value;

  // data object
  let data = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: ProductImage,
    UnitPrice: parseInt(UnitPrice),
    Qty: parseInt(ProductQty),
    TotalPrice: parseInt(TotalPrice),
  };

  // condition checking
  if (ProductName === "") {
    document.getElementById("loader-animation").style.display = "none";
    toastMessage.innerHTML = "Product Name Required";
    toastMessage.classList.add("msg-style-fail");
    toastMessage.style.width = "18%";

    setTimeout(() => {
      (toastMessage.innerHTML = ""),
        toastMessage.classList.remove("msg-style-fail");
    }, 2000);
  } else if (ProductCode === "") {
    document.getElementById("loader-animation").style.display = "none";
    toastMessage.innerHTML = "Product Code Required";
    toastMessage.classList.add("msg-style-fail");
    toastMessage.style.width = "18%";

    setTimeout(() => {
      (toastMessage.innerHTML = ""),
        toastMessage.classList.remove("msg-style-fail");
    }, 2000);
  } else if (ProductImage === "") {
    document.getElementById("loader-animation").style.display = "none";
    toastMessage.innerHTML = "Product Image Required";
    toastMessage.classList.add("msg-style-fail");
    toastMessage.style.width = "18%";

    setTimeout(() => {
      (toastMessage.innerHTML = ""),
        toastMessage.classList.remove("msg-style-fail");
    }, 2000);
  } else if (UnitPrice === "") {
    document.getElementById("loader-animation").style.display = "none";
    toastMessage.innerHTML = "Unit Price Required";
    toastMessage.classList.add("msg-style-fail");
    toastMessage.style.width = "18%";

    setTimeout(() => {
      (toastMessage.innerHTML = ""),
        toastMessage.classList.remove("msg-style-fail");
    }, 2000);
  } else if (ProductQty === "") {
    document.getElementById("loader-animation").style.display = "none";
    toastMessage.innerHTML = "Product Qty Required";
    toastMessage.classList.add("msg-style-fail");
    toastMessage.style.width = "18%";

    setTimeout(() => {
      (toastMessage.innerHTML = ""),
        toastMessage.classList.remove("msg-style-fail");
    }, 2000);
  } else if (TotalPrice === "") {
    document.getElementById("loader-animation").style.display = "none";
    toastMessage.innerHTML = "Total Price Required";
    toastMessage.classList.add("msg-style-fail");
    toastMessage.style.width = "18%";

    setTimeout(() => {
      (toastMessage.innerHTML = ""),
        toastMessage.classList.remove("msg-style-fail");
    }, 2000);
  } else {
    //loader
    document.getElementById("loader-animation").style.display = "block";

    // Data fetching from third party API
    let res = await axios.post(
      "http://164.68.107.70:6060/api/v1/CreateProduct",
      data
    );
    
    //loader
    document.getElementById("loader-animation").style.display = "none";

    if (res.status === 200) {
      // toast message
      toastMessage.innerHTML = "Request Sent Successfully";
      toastMessage.classList.add("msg-style-success");

      setTimeout(() => {
        (toastMessage.innerHTML = ""),
          toastMessage.classList.remove("msg-style-success");
      }, 2000);

      // window.location = "/index.html"
    } else {
      // toast message
      document.getElementById("loader-animation").style.display = "none";
      toastMessage.innerHTML = "Request failed";
      toastMessage.classList.add("msg-style-fail");

      setTimeout(() => {
        toastMessage.innerHTML = "",
          toastMessage.classList.remove("msg-style-fail");
      }, 2000);
    }

    document.getElementById("productName").value = "";
    document.getElementById("productCode").value = "";
    document.getElementById("productImg").value = "";
    document.getElementById("unitePrice").value = "";
    document.getElementById("productQty").value = "";
    document.getElementById("totalPrice").value = "";
  }
}



