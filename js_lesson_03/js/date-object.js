// Create a variable to hold a new Date object
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the year to the element
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';