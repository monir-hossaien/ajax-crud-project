const loader = document.getElementById("loader-animation");
let toastMessage = document.getElementById("msg");

let ProductNameInput = document.getElementById("productName");
let ProductCodeInput = document.getElementById("productCode");
let ProductImageInput = document.getElementById("productImg");
let UnitPriceInput = document.getElementById("unitePrice");
let ProductQtyInput = document.getElementById("productQty");
let TotalPriceInput = document.getElementById("totalPrice");

async function fillExistingData() {
  loader.style.display = "block";
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  let URL = `http://164.68.107.70:6060/api/v1/ReadProductById/${id}`;
  let res = await axios.get(URL);
  

  if (res.status === 200) {
    loader.style.display = "none";

    let items = res.data["data"][0];
    console.log(items)
    ProductNameInput.value = items.ProductName;
    ProductCodeInput.value = items.ProductCode;
    ProductImageInput.value = items.Img;
    UnitPriceInput.value = items.UnitPrice;
    ProductQtyInput.value = items.Qty;
    TotalPriceInput.value = items.TotalPrice;

    
  }
}

fillExistingData();



// data object
let data = {
    ProductName: ProductNameInput,
    ProductCode: ProductCodeInput,
    Img: ProductImageInput,
    UnitPrice: UnitPriceInput,
    Qty: ProductQtyInput,
    TotalPrice: TotalPriceInput
};


async function updateData(){
    loader.style.display = "block";
    
    let URL = `http://164.68.107.70:6060/api/v1/UpdateProduct/${ProductID}`
    let res = await axios.post(URL,data)
    
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
