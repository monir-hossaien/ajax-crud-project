const loader = document.getElementById("loader-animation");
let toastMessage = document.getElementById("msg");

let ProductName = document.getElementById("productName").value;
let ProductCode = document.getElementById("productCode").value;
let ProductImage = document.getElementById("productImg").value;
let UnitPrice = document.getElementById("unitePrice").value;
let ProductQty = document.getElementById("productQty").value;
let TotalPrice = document.getElementById("totalPrice").value;

async function fillExistingData() {
  loader.style.display = "block";
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  let URL = `http://164.68.107.70:6060/api/v1/ReadProductById/${id}`;
  let res = await axios.get(URL);

  if (res.status === 200) {
    loader.style.display = "none";

    let items = res.data["data"][0];

    ProductName = items.ProductName;
    ProductCode = items.ProductCode;
    ProductImage = items.Img;
    UnitPrice = items.UnitPrice;
    ProductQty = items.Qty;
    TotalPrice = items.TotalPrice;

    console.log(
      ProductName,
      ProductCode,
      ProductImage,
      UnitPrice,
      ProductQty,
      TotalPrice
    );
  }
}

fillExistingData();



// data object
let data = {
    ProductName: ProductName,
    ProductCode: ProductCode,
    Img: ProductImage,
    UnitPrice: parseInt(UnitPrice),
    Qty: parseInt(ProductQty),
    TotalPrice: parseInt(TotalPrice),
};

let URL = `http://164.68.107.70:6060/api/v1/UpdateProduct/${ProductID}`

async function updateData(){
    loader.style.display = "block";
    let res = await axios.post(URL,data)
    console.log(data)
    
    if(res.status === 200){
        // toast message
      toastMessage.innerHTML = "Update Successfully";
      toastMessage.classList.add("msg-style-success");

      setTimeout(() => {
        (toastMessage.innerHTML = ""),
          toastMessage.classList.remove("msg-style-success");
      }, 2000);
    }
    else{
        loader.style.display = "none";
        toastMessage.innerHTML = "Request failed";
        toastMessage.classList.add("msg-style-fail");

      setTimeout(() => {
        toastMessage.innerHTML = "",
          toastMessage.classList.remove("msg-style-fail");
      }, 2000);
    }

}
