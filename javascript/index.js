// ======================== CREATE ACCOUNT HTTP REQUEST ============================

//***** JUST NOT WORKING!!! MOVE ON */
postCreateAccountRequest = () => {
        console.log("GETTING...CREATING INFORMATION");
        var username = document.querySelector("#username");
        var email = document.querySelector("#email");
        var password = document.querySelector("#password");
        var typeCreate = document.querySelector("#typeCreate");
        var requiresCard = document.querySelector("#requiresCard");
        axios.post(`http://localhost:8080/client/new?type=${typeCreate}&requiresCard=${requiresCard}`, {
            username: username.value,
            email: email.value,
            password: password.value
        }).then(response => {
            console.log(response);
        });

        };




// postCreateAccountRequest = () => {
//     console.log("GETTING...CREATING INFORMATION");
//     var url = "http://localhost:8080/client/new";
//     var username = document.querySelector("#username").value;
//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;
//     var typeCreate = document.querySelector("#typeCreate");
//     var requiresCard = document.querySelector("#requiresCard");
//     axios.post(`${url}?type=${typeCreate}&requiresCard=${requiresCard}`, { 
//         username: username.value,
//         email: email.value,
//         password: password.value
//     }).then(response => {
//         console.log(response.data);
//         alert("You have successfully created an account...redirecting you now!")
//         window.location.href = "login.html";
//     });
// };


  
//   postRequest = () => {
//     var id = document.getElementById('id');
//     var firstName = document.getElementById("firstName");
//     var lastName = document.getElementById('lastName');
//     console.log("hello");
//     console.log(id);
//   axios.post('http://localhost:8080/user', {
//     id: id.value,
//     firstName: firstName.value,
//     lastName: lastName.value
//   }).then (response => {
//       console.log(response);
  
//   });
//   };
  


// ======================== Login HTTP REQUEST ============================

//LOGIN IN  REQUEST
getLoginRequest = () => {
    console.log("GETTING....LOGIN INFORMATION");
    var url = "http://localhost:8080/client/login";
    var usernameLogin = document.querySelector("#usernameLogin").value;
    var passwordLogin = document.querySelector("#passwordLogin").value;
    axios.get(url + "?username=" + usernameLogin + "&password=" + passwordLogin).then(response => {
        console.log(response.data);
        alert("You information is correct...redirecting you now!");
        window.location.href = "transaction.html";

    });
};


// ======================== ADMINISTATION HTTP REQUEST ============================

//GET ALL BANK ACCOUNTS
getAllRequest = () => {
    console.log("GETTING....ALL ACCOUNTS");
    var url = "http://localhost:8080/account/all";
    axios.get(url).then(response => {
        console.log(response.data);
            document.querySelector("#allAccount").innerHTML = JSON.stringify(response.data);
            alert("All bank accounts are showing now");
    });
};


//GET ALL ACCOUNT BY DATE
getAccountByDateRequest = () => {
    console.log("GETTING....ALL ACCOUNTS BY DATE");
    var url = "http://localhost:8080/account/date";
    var date = document.querySelector("#date").value;
    axios.get(url + "?date=" + date).then(response => {  
        console.log(response.data);
            document.querySelector("#accountByDate").innerHTML = JSON.stringify(response.data);
            alert(`All bank accounts for ${date} are shown`);
    });
};

//GET ALL ACCOUNT BY CHECKING ACCOUNT
getAccountByCheckingRequest = () => {
    console.log("GETTING...ALL ACCOUNTS BY CHECKING");
    var url = "http://localhost:8080/account/type";
    var checkingType = document.querySelector("#checkingType").value;
    axios.get(url + "?type=" + checkingType).then(response => {
        console.log(response.data);
            document.querySelector("#accountByCheckingAccount").innerHTML = JSON.stringify(response.data);
            alert(`All bank accounts for ${checkingType} account are shown`);
    });
}










// 2022-02-28

// getRequest = () => {
//     var url = 'http://localhost:8080/user';
//     var id = document.getElementById('getIdForUser').value;
//   axios.get(url+"?id="+id).then (response => {
//     console.log(response.data)
//       document.getElementById("display").innerHTML = response.data.firstName + " " + response.data.lastName;
//   });
//   };
  
//   postRequest = () => {
//     var id = document.getElementById('id');
//     var firstName = document.getElementById("firstName");
//     var lastName = document.getElementById('lastName');
//     console.log("hello");
//     console.log(id);
//   axios.post('http://localhost:8080/user', {
//     id: id.value,
//     firstName: firstName.value,
//     lastName: lastName.value
//   }).then (response => {
//       console.log(response);
  
//   });
//   };
  