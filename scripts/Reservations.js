import { getReservations, cancelReservation, getClowns, saveAssignment, } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        cancelReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener("change", event => {
    if (event.target.id === "clowns") {
        const [reservationId, clownId] = event.target.value.split("--")

        const assignmentData = { 
            reservationId: +reservationId,
            clownId: +clownId,
            dateAssigned: new Date().toLocaleDateString('en-US')
        }

    saveAssignment(assignmentData)

    }
})

export const Reservations = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    const listReservations = (reservation) => {

        const findDate = (inputDate) => {
            const splitDate = inputDate.split('-')
            const year = splitDate[0]
            const month = splitDate[1]
            const day = splitDate [2]
            return month + '\/' + day + '\/' + year
        }

        return `
            <li class="li li--schedule"}">
                <div class="li--left">
                    <img class="img--balloon" src="./img/balloon-animal-green-32_tny.png" alt="long blue balloon tied into the shape of a dog" />
                    ${reservation.childName}'s ${reservation.eventType} on ${findDate(reservation.date)}
                </div>
                <div class="li--right">
                    <select class="clowns" id="clowns">
                    <option value="">Select a clown</option>
                        ${clowns.map(clown => {
                            return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                        }).join("")
                    }
                    </select>
                    <button class="button--cancel btn shadow" id="reservation--${reservation.id}">
                        Cancel
                    </button>
                </div>
            </li>
        `
    }

    let reservationHTML = `
        <ul class="ul-title">
            <li class="li-title">
                <div class="li--left">
                    Event
                </div>
                <div class="li--right">
                    Assigned to
                </div>
            </li>
            <ul class="ul--allReservations" >
                ${
                    reservations.map(listReservations).join("")
                }
            </ul>
        </ul>
    `
    return reservationHTML
}
