let events = [
    {
        eventId: "E001",
        eventName: "Event 1",
        eventDate: "2026-12-15",
        venue:"Singapore Indoor Stadium",

        ticketCategories:{
            Standard:{
                price:80,
                available: 198
            },
            VIP:{
                price:150,
                available:50
            }
        },
    },
    {
        eventId: "E002",
        eventName:"Event 2",
        eventDate: "2026-12-16",
        venue:"Singapore National Stadium",
        
        ticketCategories:{
            Standard:{
                price:100,
                available:300
            },
            VIP:{
                price:200,
                available:97
            }
        }
    }
]

let bookings = [
    {
        bookingId: "B001",
        customerName: "John",
        eventId: "E001",
        category: "Standard",
        quantity: 2,
        totalPaid: 160,
        promoCode: null,
        status: "Confirmed"
    },
    {
        bookingId: "B002",
        customerName: "Sarah",
        eventId: "E002",
        category:"VIP",
        quantity: 3,
        totalPaid : 600,
        promoCode: null,
        status: "Confirmed"
    }


]

let nextBookingNumber = 3;
//First Function
function addEvent(eventId, eventName, eventDate, venue, standardPrice, standardCapacity, vipPrice, vipCapacity){
    for (let i = 0; i< events.length; i++){
        if (events[i].eventId == eventId){
            return "Event ID already exists"
        }
    }
    if(standardPrice < 0 || vipPrice < 0){
        return "Ticket Prices cannot be negative";
    }
    if(standardCapacity < 0 || vipCapacity < 0){
        return "Ticket capacity cannot be negative";
    }

    let newEvent = {
        eventId: eventId,
        eventName: eventName,
        eventDate: eventDate,
        venue: venue,
        
        ticketCategories:{
            Standard:{
                price: standardPrice,
                available: standardCapacity
            },
            VIP:{
                price:vipPrice,
                available:vipCapacity
            }
        }
    }
    events.push(newEvent);
    return "Event added"
}

// First Function test (Add Event)
console.log("====================================");
console.log(addEvent(
    "E003",
    "Event 3",
    "2027-01-01",
    "NYP",
    70,
    150,
    130,
    50
));

// Adding event with same ID
console.log(addEvent(
    "E001",
    "Another Concert",
    "2027-02-10",
    "National Stadium",
    100,
    200,
    250,
    100
));

// Checking Negative Ticket Prices
console.log(addEvent(
    "E004",
    "Jazz Night",
    "2027-03-10",
    "Esplanade",
    -50,
    200,
    150,
    100
));

// Second Function
function checkAvaliability(eventId, category, quantity) {

    for (let i = 0; i < events.length; i++) {

        if (events[i].eventId == eventId) {

            let selectedEvent = events[i];
            let selectedCategory = selectedEvent.ticketCategories[category];

            if (!selectedCategory) {
                return "Ticket category does not exist";
            }

            if (quantity <= 0) {
                return "Quantity must be a positive whole number";
            }

            if (selectedCategory.available >= quantity) {
                return "Tickets are available";
            } else {
                return "Not enough tickets available";
            }
        }
    }

    return "Event does not exist";
}

//Check availability function tests

console.log("====================================");

console.log(checkAvaliability("E001","Standard",5));

console.log(checkAvaliability("E001","Standard",500));

console.log(checkAvaliability("E001","Premium",1));

console.log(checkAvaliability("E001","VIP","-3"));

console.log(checkAvaliability("E99","VIP",1));

//Third Function
function calculatePrice(eventId, category, quantity){

    for(let i=0; i < events.length; i++){
        if(events[i].eventId == eventId){
            let selectedEvent = events[i];
            let selectedCategory = selectedEvent.ticketCategories[category];

            if(!selectedCategory){
                return "Ticket category does not exist";
            }
            if(quantity <=0){
                return "Quantity must be a positive number";
            }

            let totalPrice = selectedCategory.price * quantity;

            return totalPrice;
        }
    }
    return "Event does not exist"
}

//Calculate price tests
console.log("====================================");

console.log(calculatePrice("E001","Standard",3));
console.log(calculatePrice("E002","VIP",2));
console.log(calculatePrice("E001","Premium",2));
console.log(calculatePrice("E99","VIP",2));
console.log(calculatePrice("E001","Standard",-5));

// Fourth Function

function applyDiscount(totalPrice, promoCode){
    if(totalPrice <=0){
        return "Invalid total price";
    }
    if(promoCode ==null){
        return totalPrice;
    }
    //10% discount
    if(promoCode =="Earlybird10"){
        return totalPrice * 0.90;
    }
    //15% discount
    if(promoCode =="Student15"){
        return totalPrice *0.85;
    }
    else{
        return "Invalid Promotion code"
    }
}

//ApplyDiscount Function checks

console.log("====================================");
console.log(applyDiscount(240,"Earlybird10"));
console.log(applyDiscount(200,"Student15"));
console.log(applyDiscount(240,"no"));
console.log(applyDiscount(240,null));

function purchaseTicket(customerName, eventId, category, quantity, promoCode){
    if(customerName == null){
        return "Customer Name is required";
    }
    let availbility = checkAvaliability(eventId, category, quantity);

    if(availbility != "Tickets are available"){
        return availbility;
    }

    let originalPrice = calculatePrice(eventId, category, quantity);
    if(originalPrice == "string"){
        return originalPrice;
    }

    let finalPrice = applyDiscount(originalPrice, promoCode);
    if(finalPrice =="string"){
        return finalPrice;
    }

    let bookingId = "B"+nextBookingNumber;

    let newBooking = {
        bookingId: bookingId,
        customerName: customerName,
        eventId: eventId,
        category: category,
        quantity: quantity,
        totalPaid: finalPrice,
        promoCode: promoCode,
        status: "Confirmed"
    };

    nextBookingNumber++;
    return "Booking "+ bookingId + " Confirmed! Total paid: $"+finalPrice;
}

//Purchase Ticket Test
console.log("====================================");
console.log(purchaseTicket("Isaac","E001","Standard",3,"Earlybird10"));

