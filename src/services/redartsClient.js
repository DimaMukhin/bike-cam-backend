const axios = require('axios');

const BASE_URL = 'http://localhost:3004';

async function getAllCyclists() {
    let cyclists = await axios.get(`${BASE_URL}/cyclists`);
    return cyclists.data;
}

async function getCyclistById(cyclistId) {
    let cyclist = await axios.get(`${BASE_URL}/cyclists/${cyclistId}`);
    return cyclist.data;
}

async function getAllTrips() {
    let trips = await axios.get(`${BASE_URL}/trips`);
    return trips.data;
}

async function getTripById(tripId) {
    let trip = await axios.get(`${BASE_URL}/trips/${tripId}`);
    return trip.data;
}

async function createNewCyclist(cyclist) {
    axios.post(`${BASE_URL}/cyclists`, cyclist);
}

async function createNewTrip(trip) {
    axios.post(`${BASE_URL}/trips`, trip);
}

async function updateTrip(tripId, tripChanges) {
    axios.patch(`${BASE_URL}/trips/${tripId}`, tripChanges);
}

async function updateCyclist(cyclistId, cyclistChanges) {
    axios.patch(`${BASE_URL}/cyclists/${cyclistId}`, cyclistChanges);
}

module.exports = {
    getAllCyclists,
    getCyclistById,
    getAllTrips,
    getTripById,
    createNewCyclist,
    createNewTrip,
    updateTrip,
    updateCyclist
}