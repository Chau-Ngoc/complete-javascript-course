"use strict";

const bookings = [];

const createBooking = function (
    flightNumber,
    numberOfPassengers = 1,
    price = 199
) {
    const booking = {
        flightNumber,
        numberOfPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 543);
