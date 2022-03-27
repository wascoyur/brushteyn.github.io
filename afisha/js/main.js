function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.header__dropbtn')) {
        var dropdowns = document.getElementsByClassName("header__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function dropdown1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdowns__item')) {
        var dropdowns = document.getElementsByClassName("dropdowns__item-block");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function dropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdowns__item')) {
        var dropdowns = document.getElementsByClassName("dropdowns__item-block");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function dropdown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdowns__item')) {
        var dropdowns = document.getElementsByClassName("dropdowns__item-block");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

$(document).ready(function() {
    $(".lang-choose").on("click", function () {
        $("#myDropdown-2").css("display", "block");
        $("#myDropdown").css("display", "none");
    });
    
    $(".town-choose").on("click", function () {
        $("#myDropdown-3").css("display", "block");
        $("#myDropdown").css("display", "none");
    });
    
    $(".header__dropdown-settings-top").on("click", function () {
        $("#myDropdown-2").css("display", "none");
        $("#myDropdown-3").css("display", "none");
        $("#myDropdown").css("display", "block");
    });
});

