window.onload = function () {

    const homeLink = document.querySelector("#home");
    const aboutLink = document.querySelector("#about");
    const contactLink = document.querySelector("#contact");

    homeLink.addEventListener("click", () => {
        // TODO quando clicco su home nascondo le sezioni attive e mostro home 
        // TODO se home già attivo non faccio niente
        if ($('.page__home').hasClass("hidden")) {

            if (!$('.page__about').hasClass("hidden")) {
                $('.page__about').animate({
                    opacity: .0,
                }, 500, () => console.log("animazione completata")).hide({
                    queue: true,
                });
                $('.page__about').addClass("hidden");
            } else if (!$('.page__contact').hasClass("hidden")) {
                $('.page__contact').animate({
                    opacity: .0,
                }, 500, () => console.log("animazione completata")).hide({
                    queue: true,
                });
                $('.page__contact').addClass("hidden");
            }


            $('.page__home').animate({
                opacity: 1.0,
            }, 500, () => console.log("animazione completata")).show();

            $('.page__home').removeClass("hidden");
        }
    });
    aboutLink.addEventListener("click", () => {
        if ($('.page__about').hasClass("hidden")) {

            if (!$('.page__home').hasClass("hidden")) {
                $('.page__home').animate({
                    opacity: .0,
                }, 500, () => console.log("animazione completata")).hide({
                    queue: true,
                });
                $('.page__home').addClass("hidden");
            } else if (!$('.page__contact').hasClass("hidden")) {
                $('.page__contact').animate({
                    opacity: .0,
                }, 500, () => console.log("animazione completata")).hide({
                    queue: true,
                });
                $('.page__contact').addClass("hidden");
            }


            $('.page__about').animate({
                opacity: 1.0,
            }, 500, () => console.log("animazione completata")).show();

            $('.page__about').removeClass("hidden");
        }

    });

    contactLink.addEventListener("click", () => {
        if ($('.page__contact').hasClass("hidden")) {

            if (!$('.page__home').hasClass("hidden")) {
                $('.page__home').animate({
                    opacity: .0,
                }, 500, () => console.log("animazione completata")).hide({
                    queue: true,
                });
                $('.page__home').addClass("hidden");
            } else if (!$('.page__about').hasClass("hidden")) {
                $('.page__about').animate({
                    opacity: .0,
                }, 500, () => console.log("animazione completata")).hide({
                    queue: true,
                });
                $('.page__about').addClass("hidden");
            }


            $('.page__contact').animate({
                opacity: 1.0,
            }, 500, () => console.log("animazione completata")).show();

            $('.page__contact').removeClass("hidden");
        }

    });

}