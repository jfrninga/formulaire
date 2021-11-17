$(document).ready(function () {
    $('#successMsg').hide();
    $('#errorMsg').hide();

    var valeur = $('#email').val;
    console.log(valeur);
    if (valeur.val.includes("@")) {
        $('#successMsg').show(); 
        $('#errorMsg').hide();
    } else {
        $('#successMsg').hide();
        $('#errorMsg').show();
    }
});












