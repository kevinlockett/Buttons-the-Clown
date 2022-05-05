import { saveReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userEventType = document.querySelector("input[name='typeEvent']").value
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='eventAddress']").value
        const userNmbrAttending = document.querySelector("input[name='numberAttending']").value
        const userPerfLength = document.querySelector("input[name='lengthInHours']").value
        const userEventDate = document.querySelector("input[name='eventDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            eventType: userEventType,
            parentName: userParentName,
            childName: userChildName,
            numberAttending: parseInt(userNmbrAttending),
            address: userAddress,
            date: userEventDate,
            lengthInHours: parseFloat(userPerfLength)
        }

        // Send the data to the API for permanent storage
        saveReservation(dataToSendToAPI)
    }
})

export const ReservationForm = () => {
    let formHTML = `
        <div class="field">
            <label class="label" for="typeEvent">Type of Event</label>
            <input type="text" name="typeEvent" class="input" placeholder="e.g., Birthday Party" />
        </div>
        <div class="field">
            <label class="label" for="parentName">Parent or Sponsor's Name</label>
            <input type="text" name="parentName" class="input" placeholder="Enter the name of the Parent or adult sponsor of the event" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child or Company's Name</label>
            <input type="text" name="childName" class="input" placeholder="Enter the name of the child or company celebrating the event" />
        </div>
        <div class="field">
            <label class="label" for="eventAddress">Address</label>
            <input type="text" name="eventAddress" class="input" placeholder="Enter your address, city, and state" />
        </div>
        <div class="field field--number">
            <label class="label label--number" for="numberAttending">Number Attending</label>
            <input type="number" name="numberAttending" min="1" class="input input--number" placeholder="1" />
        </div>
        <div class="field field--length">
            <label class="label  label--length" for="lengthInHours">Performance length</label>
            <input type="float" name="lengthInHours" min="1" class="input input--length" placeholder="1.5" />
        </div>
        <div class="field field--date">
            <label class="label  label--date" for="eventDate">Event Date</label>
            <input type="date" name="eventDate" class="input input--date date" />
        </div>

        <button class="button btn button--submit shadow" id="submitReservation">Submit Reservation</button>
    `

    return formHTML
}