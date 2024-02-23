// Для modal
document.querySelectorAll('.modal_toggle').forEach(function (modalOpen) {
    modalOpen.addEventListener('click', function () {
        document.getElementById('modal').classList.toggle('is_active');
    });
});

// Для phoneMask
const phones = document.querySelectorAll('.phone');
let phoneMask = new Inputmask("+7 (999)-999-99-99");
phones.forEach(phone => {
    phoneMask.mask(phone);
});

function sendJSON() {
    event.preventDefault();
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let city = document.querySelector('#city');
    var settings = {
        "url": "https://backend.sdelkaservicedomain.ru/sdelka/leadsForLanding/leadFromLanding",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "phone": phone.value,
            "name": name.value,
            "city": city.value,
        }),
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

gsap.registerPlugin(ScrollTrigger);
gsap.to("#author", {
    scrollTrigger: {
        trigger: "#authorWrap",
        start: "60% 80%",
        end: "90% 80%",
        markers: true,
        scrub: true
    },
    filter: "blur(0px)"
});

