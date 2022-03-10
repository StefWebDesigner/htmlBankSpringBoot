// import axios;






// //FOR TEST WIH USER IN SIMPLE SERVLET


postCreateAccountRequest = () => {
    console.log("Entered create the account request")
    var url = "http://localhost:8080/client/new"
}



// ADMINISTATION HTTP REQUEST

//GET ALL BANK ACCOUNTS
getAllRequest = () => {
    console.log("GETTING....ALL ACCOUNTS");
    var url = "http://localhost:8080/account/all";
    axios.get(url).then(response => {
        console.log(response.data);
            document.querySelector("#allAccount").innerHTML = JSON.stringify(response.data);
    });
};


//GET ALL ACCOUNT BY DATE
getAccountByDataRequest = () => {
    console.log("GETTING....ALL ACCOUNTS BY DATE");
    var url = "http://localhost:8080/account/date";
    var date = document.querySelector("#date").value;
    axios.get(url + "?date="+date).then(response => {  
        console.log(response.data)
            document.querySelector("#accountByDate").innerHTML = JSON.stringify(response.data);
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
  