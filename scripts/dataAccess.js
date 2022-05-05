const API = "https://buttons-api-mbz76.ondigitalocean.app"
const mainContainer = document.querySelector("#container")

const applicationState = {
    reservations: [],
    clowns: [],
    assignments: []
}

// RESERVATIONS

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(res => res.json())
        .then(
            (eventReservations) => {
                // Store the external state in application state
                applicationState.reservations = eventReservations
            }
        )
}

export const getReservations = () => {
    const reservationsArr = applicationState.reservations.map(reservation => ({...reservation}))
    const sortByDate = reservationsArr => {
        const sorter = (a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        }
        reservationsArr.sort(sorter)
    }
    sortByDate(reservationsArr)
    return reservationsArr
}

export const saveReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userReservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
    .then(res => res.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const cancelReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// CLOWNS

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(res => res.json())
    .then(
        (alleyClowns) => {
            // Store the external state in application state
            applicationState.clowns = alleyClowns
        }
        )
    }
    
export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

// ASSIGNMENTS

export const fetchAssignments = () => {
    return fetch(`${API}/assignments`)
        .then(res => res.json())
        .then(
            (gigAssignments) => {
                // Store the external state in application state
                applicationState.assignments = gigAssignments
            }
        )
}

export const saveAssignment = (clownAssignment) => {
    const fetchOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(clownAssignment)
    }

    return fetch(`${API}/assignments`, fetchOptions)
    .then(res => res.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
