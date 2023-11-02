var menuBtn = document.getElementById('menu-btn');
var sideNav = document.getElementById('side-nav');

sideNav.style.left = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.left == "-250px") {
        sideNav.style.left = "0px"
    }

    else {
        sideNav.style.left = "-250px"
    }
}


function details(bag_img, bag_name, bag_price) {
    localStorage.setItem('bag_pic', bag_img)
    localStorage.setItem('bag_naam', bag_name)
    localStorage.setItem('bag_cost', bag_price)
}

function show_details() {
    var baggage_image = localStorage.getItem('bag_pic');
    var baggage_name = localStorage.getItem('bag_naam');
    var baggage_price = localStorage.getItem('bag_cost');

    document.getElementById('bag-image').src = baggage_image;
    document.getElementById('bag-name').innerHTML = baggage_name;
    document.getElementById('bag-price').innerHTML = "Rs . " + baggage_price;
    document.getElementById('total-price-input').value = baggage_price;

}

var qty = 1;

function add() {

    var t_price = localStorage.getItem('bag_cost');


    if (qty >= 10) {
        alert("Maximum Limit is 10")


    }
    else {
        qty++;
        var mul = t_price * qty;


        document.getElementById('quantity').value = qty;
        document.getElementById('total-price-input').value = mul;


    }
}

function minus() {
    var t_price = localStorage.getItem('bag_cost');
    if (qty <= 1) {
        alert("Minimum limit is 1")

    }
    else {
        qty--;
        var mul = t_price * qty;

        document.getElementById('quantity').value = qty;
        document.getElementById('total-price-input').value = mul;

    }
}


var namergx = /^[A-Za-z]{3,6}$/;
var numrgx = /^[0-9]{4}[-][0-9]{7}$/;

function check_fname() {
    var naam = document.getElementById('fname').value;
    if (naam.match(namergx)) {
        document.getElementById('fname').style.borderColor = "green";
        document.getElementById('invalid_fname').innerHTML = "";



    }
    else {
        document.getElementById('invalid_fname').innerHTML = "Invalid First Name";
        document.getElementById('fname').style.borderColor = "red";


    }





}

function check_lname() {
    var naam = document.getElementById('lname').value;
    if (naam.match(namergx)) {
        document.getElementById('lname').style.borderColor = "green";
        document.getElementById('invalid_lname').innerHTML = "";



    }
    else {
        document.getElementById('invalid_lname').innerHTML = "Invalid Last Name";
        document.getElementById('lname').style.borderColor = "red";


    }
}

function numcheck() {
    var num = document.getElementById('phn_num').value;
    if (num.match(numrgx)) {
        document.getElementById('nummsg').innerHTML = "";

        document.getElementById('phn_num').style.borderColor = "green";


    }
    else {
        document.getElementById('nummsg').innerHTML = "Invalid Number";
        document.getElementById('phn_num').style.borderColor = "red";

    }
}
function ratings(a){

    if(a==1){
        document.getElementById('st1').style.color="red";
        document.getElementById('st2').style.color="black";
        document.getElementById('st3').style.color="black";
        document.getElementById('st4').style.color="black";
        document.getElementById('st5').style.color="black";
    }

    if(a==2){
        document.getElementById('st1').style.color="red";
        document.getElementById('st2').style.color="red";
        document.getElementById('st3').style.color="black";
        document.getElementById('st4').style.color="black";
        document.getElementById('st5').style.color="black";
    }

    if(a==3){
        document.getElementById('st1').style.color="red";
        document.getElementById('st2').style.color="red";
        document.getElementById('st3').style.color="red";
        document.getElementById('st4').style.color="black";
        document.getElementById('st5').style.color="black";
    }

    if(a==4){
        document.getElementById('st1').style.color="red";
        document.getElementById('st2').style.color="red";
        document.getElementById('st3').style.color="red";
        document.getElementById('st4').style.color="red";
        document.getElementById('st5').style.color="black";
    }

    if(a==5){
        document.getElementById('st1').style.color="red";
        document.getElementById('st2').style.color="red";
        document.getElementById('st3').style.color="red";
        document.getElementById('st4').style.color="red";
        document.getElementById('st5').style.color="red";
    }


}