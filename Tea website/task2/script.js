
document.getElementById('orderForm').addEventListener('submit', function(event) {

event.preventDefault();

let name = document.getElementById('name').value;

let teaType = document.getElementById('teaType').value;

let quantity = document.getElementById('quantity').value;

if (name && teaType && quantity) {

alert('Order successfully placed!\n' +

'Name: ' + name + '\n' +

'Tea Type: ' + teaType + '\n' +

'Quantity: ' + quantity);

} else {

alert('Please fill out all fields.');

}

});