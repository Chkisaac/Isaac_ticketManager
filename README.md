# Ticket booking manager

## 1. Project Description
This ticket booking manager javascript module is designed to manage events and ticket purchases. It allows users to add new events, check ticket availabilities, calculate total ticket prices, apply discounts when a discount code is provided and purchase tickets.

For this project, it uses arrays and objects to store dummy data regarding events and booking information.

## 2. Requirement
System requires Node.js installed

## 3. How to run program

1. Open project folder
2. Open the 'isaac_ticketManager.js' file.
3. Open terminal
4. Run 'node isaac_ticketManager.js'
5. Results for the test cases will be shown in the terminal

## 4. Module Functions

### Function 1. addEvent()

addEvent() allows users to add new events to the event array.
Its parameters are : 
eventID- unique ID
eventName- Name of event
eventDate- Date of event
venue- event location
standardPrice- standard ticket price
standardCapacity- number of standard tickets
vipPrice- vip ticket prices
vipCapacity- Number of VIP tickets

**Example** 
console.log(addEvent("E005", "Rock Festival", "2027-01-10", "NYP", 80, 200, 150, 100));

Function checks for duplicate eventID and invalid negative prices or capacity before adding the event

### Function 2. checkAvailbility()

Function checks whether requested ticket quantity is available for a specific event and category

Its parameters are : eventID, category, quantity

**Example** 
console.log(checkAvaliability("E001", "Standard", 5));

**Expected Output**
Tickets are available

### Function 3. calculatePrice()

function calculates the total ticket price by multiplying the ticket price by the requested quantity

Its parameters are : eventID, category, quantity

**Example** 
console.log(calculatePrice("E001","Standard",3));

**Expected Output**
240

### Function 4: applyDiscount()

function applies promotional discounts to the original ticket prices.

Its parameters are : totalPrice, promocode.

**Example**
console.log(applyDiscount(240, "Earlybird10"));

**Expected output** 
216

If no promo code is entered, the original price is returned

### Function 5. purchaseTicket()

Function processess ticket purchase by checking availability, calculating ticket price, applying discount, generating bookingID and saving the booking.

Its parameters are : customerName, eventID, category, quantity, promoCode

**Example**

console.log(purchaseTicket("Isaac", "E001", "Standard", 3, "Earlybird10"));

**Expected Output**
Booking B3 Confirmed! Total paid: $216

Successful purchase adds booking to the booking array and reduces remaining ticket quantity.

## 5. Data storage

This module uses 2 arrays. Events and Booking.

Events stores the eventID, names, dates, venues, ticket prices and remaining ticket quantities

Booking stors the bookingID, customerNames, eventIDs, ticketCategories, quantities, total payments, promo codes and booking status.

## 6. Error Handling

The module includes basic validation to prevent users for inputing duplicate eventIDs, Negative ticket prices or capacities, purchases exceeding available tickets, invalid promo codes and missing customer names.

## 7. Testing

The functions are tested using console.log() statements with valid and invalid inputs

To run the tests, type 'node isaac_tickrtManager.js' in the terminal and the terminal will display the results of each functon call.