let form = document.querySelector("form");
let textfFaild = document.querySelector(".text-field");
let textlFaild = document.querySelector(".text-field1");
let phoneField = document.querySelector(".phone-field");
let emailField = document.querySelector(".email-field");
let passField = document.querySelector(".pass-field");

let fn = document.querySelector(".fn");
let ln = document.querySelector(".ln");
let pas = document.querySelector(".pass");
let pho = document.querySelector(".pho");
let ema = document.querySelector(".ema");

let userContainer = document.querySelector(".userContainer");
let firstnameP = document.querySelector(".Username");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let fnameRegex = /^[A-Z][a-z]{3,10}$/;
  let myfName = textfFaild.value;
  let firstName = fnameRegex.test(myfName);

  let lnameRegex = /^[A-Z][a-z]{3,10}$/;
  let mylName = textlFaild.value;
  let lastName = lnameRegex.test(mylName);

  let phoneRegex = /^(01)[0-9]{9}$/;
  let myphone = phoneField.value;
  let phone = phoneRegex.test(myphone);

  let passRegex = /^[0-9]{9}$/;
  let mypass = passField.value;
  let pass = passRegex.test(mypass);

  let emailRegex = /^\w[A-Za-z0-9+=^%&]{0,20}(@gmail.com)$/;
  let emailName = emailField.value;
  let email = emailRegex.test(emailName);

  
  fn.innerHTML = '';
  ln.innerHTML = '';
  pho.innerHTML = '';
  pas.innerHTML = '';
  ema.innerHTML = '';

  if (!firstName) {
    console.log("Error first name");
    fn.innerHTML = `Error first name`;
  } else if (!lastName) {
    console.log("Error last name");
    ln.innerHTML = `Error last name`;
  } else if (!phone) {
    console.log("Error phone");
    pho.innerHTML = `Error in phone`;
  } else if (!pass) {
    console.log("Error pass");
    pas.innerHTML = `Error in pass`;
  } else if (!email) {
    console.log("Error email");
    ema.innerHTML = `Error in Email`;
  } else {
    console.log("ALL Data Done");

    
    // firstnameP.innerHTML = myfName;

    Swal.fire({
      title: "Good",
      text: "ALL Data Done!!",
      icon: "success",
    }).then(() => {
      window.location.href = "./After Registration/index.html";
    });
  }
});

function randbtn() {
  window.location.href = './After Registration/index.html';
}






// if(firstName = fnameRegex.test(myfName)){

//   firstName.map(function(user){
//     userContainer.innerHTML = "";
//     firstnameP.innerHTML += `
//     <div class="divimg"><img src="${user.image}" alt="">
//     <span class="Username">Username: ${user.username} 
//     <span class="Useremail">${user.email}</span>
//      </span></div>
//   <br>`;
//   })
//   }
  