$(document).ready(function () {
    // var flag = true;
    
    
    $('#login-form').submit(function (event) {
        event.preventDefault();
        
        
            var email = $("#email").val();
            var password = $("#password").val();
        // alert("Click huva meri jaan")
        
        // const token = generateToken();
        // console.log(flag);


        axios.get(`http://localhost:3000/user?${email}&password=${password}`)
            .then(response => {
                if(response.data.length === 0){
                    alert("user is not registered, Please register")
                }else{

                    sessionStorage.setItem("name", response.data[0].name)
                    sessionStorage.setItem("userId", response.data[0].id)
                    sessionStorage.setItem("email", response.data[0].email)
                    alert("Login successfull.")
                    window.location.replace('index.html')
                }

            })

            .catch(error => {
                console.error('Registration failed:', error);
            });



    });
});
