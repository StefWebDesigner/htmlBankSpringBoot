// ======================== CREATE ACCOUNT HTTP REQUEST ============================

// localhost:8080/client/new?type=SAVING&requiresCard=true

//I need cors or a reaccuring preflight failed requestion

postCreateAccountRequest = () => {
    var url = "http://localhost:8080/client/new";
    var username = document.querySelector("#username");
    var email = document.querySelector("#email");
    var password = document.querySelector("#password")
    var typeCreate = document.querySelector("#typeCreate");
    var requiresCard = document.querySelector("#requiresCard");
    
    axios.post(url, {
        data: {
            username : username.value,
            email : email.value,
            password : password.value
        }, params: {
            typeCreate : typeCreate.value,
            requiresCard : requiresCard.value
        }}).then(response => response.status).catch(err => console.warn(err)); 
                console.log("Withdraw when through");
        };


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
};



// ======================== TRANSACTIONAL HTTP REQUEST ============================

// localhost:8080/account/deposit?id=9&amount=50.0

//TO DEPOSIT MONEY INTO AN ACCOUNT 
//UNFORTUNATELY i HAVE TO HARD CODE AN ID THOUGH :(
depositRequest = () => {
    var url = "http://localhost:8080/account/deposit";
    amount = document.querySelector("#deposit");
    // FIND A BETTER WAY TO GET THE ID THROUGH THE FRONT END SIDE
    id = document.querySelector("#bankId")
    axios.post(url, null, { params: {
        id : id.value,
        amount : amount.value
    }}).then(response => response.status).catch(err => console.warn(err)); 
        console.log("Deposit when through");
};
        
      //TO DEPOSIT MONEY INTO AN ACCOUNT 
//UNFORTUNATELY i HAVE TO HARD CODE AN ID THOUGH :(
// - I would need to try and target the id from the login 
//and this is seen when looking at the console--- so it may 
//that is where to look
withdrawRequest = () => {
    var url = "http://localhost:8080/account/withdraw";
     amount = document.querySelector("#withdraw");
     id = document.querySelector("#withdrawBankId");
    axios.post(url, null, { params: {
        id : id.value,
        amount : amount.value
    }}).then(response => response.status).catch(err => console.warn(err)); 
        console.log("Withdraw when through");
};


//COULDN'T GET IT TO WORK (400 STATUTS)
getUserAccountRequest = () => {
    console.log("ENTEREING THE GET USER ACCOUNT INFORMATION");
    var url4 = "http://localhost:8080/client/";
    var userID = document.querySelector("#getUserID");
    axios.get(url4+userID).then(response => {
        console.log(response.data);
        document.querySelector("#userAccountModal").innerHTML = JSON.stringify(response.data);
        console.log("Getting information");
        alert("Getting your information for you now!")
    });
    };










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
  

