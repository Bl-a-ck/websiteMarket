let r = new XMLHttpRequest();

let ol = document.querySelector("ol");

r.onload = function () {
  if (r.readyState == 4) {
    if (r.status == 200) {
      let data = JSON.parse(r.responseText);
      let products = data.products;

      // console.log(products)


      products.map((product) => {

        
      
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = "./registration/index.html";

        let img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.title;

        let title = document.createElement("h3");
        title.textContent = product.title;
        let princes = document.createElement("p");
        princes.textContent = product.price + "$";

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(princes);
        link.appendChild(li);

        ol.appendChild(link);
      });

      console.log("data recieved..");
    } else {
      console.log("there is some problem..");
    }
  } else {
    console.log("error in request..");
  }
};

r.open("GET", "https://dummyjson.com/products?limit=15", true);
r.send();



function showCategoties(slug){

ol.innerHTML = ` `    
    r.open("GET",`https://dummyjson.com/products/category/${slug}`, true);
r.send();
}









function getcategoties() {
  let qrCategoties = new XMLHttpRequest();
  qrCategoties.onload = function () {
    if (qrCategoties.readyState == 4) {
      if (qrCategoties.status == 200) {
        let categories = JSON.parse(qrCategoties.responseText);

        let codiv = document.querySelector(".categories");

        categories.map(function (ele) {
            codiv.innerHTML += `
                    <span class="categotry" onclick="showCategoties('${ele.slug}')"> ${ele.name} </span>
                  `;
        });

      }
    }
  };

  qrCategoties.open("GET","https://dummyjson.com/products/categories", true);
  qrCategoties.send();
}

getcategoties();


//===================================

//https://dummyjson.com/products/search?q=phone
function search(word){
    ol.innerHTML = ` `    
    r.open("GET",`https://dummyjson.com/products/search?q=${word}`, true);
r.send();

}

let searchI= document.querySelector(".search")

searchI.addEventListener("keyup",()=>{
    search(searchI.value)
})

function registration(){
window.location.href='./registration/index.html'
}