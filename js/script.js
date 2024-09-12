const loader = document.querySelector(".loader-animated");

let toastMessage = document.getElementById("msg");


//product import from from backend

async function getProduct() {
  loader.style.display = "block";
  let res = await axios.get("http://164.68.107.70:6060/api/v1/ReadProduct");
  

  if (res.status === 200) {
    loader.style.display = "none";
    let Products = res.data["data"];
    

    Products.map((product) => {
      document.getElementById("itemList").innerHTML += `
          <tr>

            <td>
            <img src="${product.Img}">
            ${product.ProductName}
            <p>${product.ProductCode}</p>
            </td>

            <td>${product.UnitPrice}</td>
            <td>${product.Qty}</td>
            <td>${product.TotalPrice}</td>
            
            <td>
            <button onclick="updateItem('${product['_id']}')"><i class="fa-solid fa-pen-to-square btn-success"></i></button>
            <button onclick="deleteItem('${product['_id']}')"><i class="fa-solid fa-trash"></i></button>
            </td>
            
          </tr>
        `;
    });
  }
  else{
    loader.style.display = "none";
    toastMessage.innerHTML = "Something went wrong !",
    toastMessage.classList.add("msg-style-fail");

    setTimeout(() => {
      toastMessage.innerHTML = "",
      toastMessage.classList.remove("msg-style-fail");
    }, 2000);


  }
}


// ------------------product delete----------------

async function deleteItem(id){
  
  let URL = `http://164.68.107.70:6060/api/v1/DeleteProduct/${id}`
  let res = await axios.get(URL);
  
  if(res.status === 200){

    document.getElementById("itemList").innerHTML = "";
    toastMessage.innerHTML = "Delete Success",
    toastMessage.classList.add("msg-style-success");

    setTimeout(() => {
      toastMessage.innerHTML = "",
        toastMessage.classList.remove("msg-style-success");
    }, 2000);
    
    await getProduct();
  }
  else{
    toastMessage.innerHTML = "Something went wrong !";
    toastMessage.classList.add("msg-style-fail");

    setTimeout(() => {
      toastMessage.innerHTML = "",
      toastMessage.classList.remove("msg-style-fail");
    }, 2000);
   
  }

}

// ---------------update function-------------
function updateItem(id){
  window.location = `/update.html?id=${id}`

}

// -----------product list function call----------------
getProduct();