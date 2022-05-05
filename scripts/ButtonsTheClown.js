import { Header } from "./Header.js"
import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"
import { Footer } from "./Footer.js"

export const ButtonsTheClown = () => {
    return `
        <header class='header'>
            ${Header()}
        </header>
        <main class='main-content'>
            <section class="reservation-form">
                <h2>Reserve a clown</h2>
                ${ReservationForm()}                
            </section>
            <section class='unassigned-gigs'>
                <h2>Clown Gig Schedule</h2>
                ${Reservations()}
            </section>
        </main>
        <footer class='footer'>
            ${Footer()}
        </footer>
    `
}
