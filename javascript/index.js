// import axios;






// //FOR TEST WIH USER IN SIMPLE SERVLET


postCreateAccountRequest = () => {
    console.log("Entered create the account request")
    var url = "http://localhost:8080/client/new"
}





// getAllRequest = () => {
//     console.log("Recieving get request")
//     var url = "http://localhost:8080/account/all";
//     axios.get(url).then(response => {
//         console.log(response.data)
//             // document.querySelector("#allAccount").innerHTML = JSON.stringify(response.data);
//             document.querySelector("#allAccount").innerHTML = JSON.parse(response.data);


//     });
// };

getAllRequest = () => {
    console.log("Recieving get request")
    var url = "http://localhost:8080/account/all";
    axios.get(url).then(response => {
        console.log(response.data)
        var obj = JSON.parse(response.data);
            obj.
            // document.querySelector("#allAccount").innerHTML = JSON.stringify(response.data);
            document.querySelector("#allAccount").innerHTML = JSON.parse(response.data);


    });
};



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
  