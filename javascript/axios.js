

getRequest = () => {
  var url = 'http://localhost:8080/client';
  var id = document.getElementById('getIdForUser').value;
axios.get(url+"?id="+id).then (response => {
  console.log(response.data)
    document.getElementById("display").innerHTML = response.data.firstName + " " + response.data.lastName;
});
};

postRequest = () => {
  var id = document.getElementById('id');
  var username = document.getElementById("username");
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  
  console.log("hello");
  console.log(id);
axios.post('http://localhost:8080/client', {
  id: id.value,
  username: username.value,
  email: email.value,
  password: password.value
}).then (response => {
    console.log(response);

});
};



//==========================================================

// getRequest = () => {
//   var url = 'http://localhost:8080/user';
//   var id = document.getElementById('getIdForUser').value;
// axios.get(url+"?id="+id).then (response => {
//   console.log(response.data)
//     document.getElementById("display").innerHTML = response.data.firstName + " " + response.data.lastName;
// });
// };

// postRequest = () => {
//   var id = document.getElementById('id');
//   var firstName = document.getElementById("firstName");
//   var lastName = document.getElementById('lastName');
//   console.log("hello");
//   console.log(id);
// axios.post('http://localhost:8080/user', {
//   id: id.value,
//   firstName: firstName.value,
//   lastName: lastName.value
// }).then (response => {
//     console.log(response);

// });
// };
