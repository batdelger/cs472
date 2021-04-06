$(function () {
    $('#mainForm').on('submit', function(e) {
            e.preventDefault();
            let email = $('#exampleInputEmail1').val();
            let password = $('#exampleInputPassword1').val();
            let url = $('#exampleInputURL1').val();
            let checkMe = $('#exampleCheck1').val();
            console.log("Form data:");
            console.log("Email        :", email);
            console.log("Password     :", password);
            console.log("Homepage URL :", url);
            console.log("Check me out :", checkMe);
        });
})