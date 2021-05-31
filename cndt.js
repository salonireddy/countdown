(function() {
    const sec = 1000,
        min = sec * 60,
        hr = min * 60,
        day = hr * 24;

    let bday = "Jan 5, 2022 00:00:00",
        countDown = new Date(bday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                timeLeft = countDown - now;

            document.getElementById("days").innerText = Math.floor(timeLeft / (day)),
                document.getElementById("hours").innerText = Math.floor((timeLeft % (day)) / (hr)),
                document.getElementById("minutes").innerText = Math.floor((timeLeft % (hr)) / (min)),
                document.getElementById("seconds").innerText = Math.floor((timeLeft % (min)) / sec);

        }, 0)
}());