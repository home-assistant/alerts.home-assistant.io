function convertDatesToLocalFormat() {
    const dates = document.querySelectorAll(".unformated-date")
    for (const date of dates) {
        date.innerHTML = new Date(date.innerHTML).toLocaleDateString()
    }

}

convertDatesToLocalFormat()