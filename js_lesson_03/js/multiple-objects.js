// Create the template for object that are hotels
// Constructor- Hàm Tạo
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
};

// Create two hotels objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('Hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('Hotel2');
elHotel2.textContent = details2;