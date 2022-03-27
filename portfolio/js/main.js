let gumb = document.querySelector('.header-burger');

gumb.addEventListener('click', function () {
    let menu = document.querySelector('.inner');
    let header = document.querySelector('.header');
    menu.classList.toggle('show');
    header.classList.toggle('header-mobile--shown');
})

$(".header-nav__link").click(function () {

    var listItems = $(".header-nav__link");

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }

    this.classList.add("active");
});


const myAge = document.querySelector('.age');
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

myAge.append(getAge("1991/06/08"));

const workYears = document.querySelector('.work-years');

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

workYears.append(getAge("2017/02/08"));
