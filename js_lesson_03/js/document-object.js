// Create a variable called msg to hold a new message that will be shown on the page
// Find the title of the document and put it in the msg variable
var msg = '<p><b>page title: </b>' + document.title + '<br>';
// Find the URL of the document and add it to the msg variable
msg += '<b>page address: </b>' + document.URL + '<br>';
// Find the date of the document was last modified and add it to the msg variable
msg += '<b>last modified: </b>' + document.lastModified + '<br>';
// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the message to the element
el.innerHTML = msg;