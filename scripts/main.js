import { fetchReservations, fetchClowns, fetchAssignments } from "./dataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container")

const render = () => { 
    fetchReservations()
        .then (() => fetchClowns())
        .then (() => fetchAssignments())
        .then(() => {
            mainContainer.innerHTML = ButtonsTheClown()
        })
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {
        render()
})
