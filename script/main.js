document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "dd-mm-yyyy",
        "yearRange": 70,
    });
});


document.querySelectorAll(".sign-in").forEach(function(element) {
    element.onclick = show;
    element.unselectable = "on"
});

function show() {
    let modalId = this.dataset.modal
    document.querySelector(modalId).classList.remove("hide")
    document.onkeydown = function(e) {
        if (e.keyCode == 27) close()
    }
}

document.querySelectorAll(".modal-project-close").forEach(function(element) {
    element.onclick = close;
});

document.querySelectorAll(".modal-wrapper").forEach(function(element) {
    element.onclick = close
});

document.querySelector("#sign-in .modal-project").onclick = function() {
    event.stopPropagation()
}

function close() {
    document.querySelectorAll('.modal-wrapper').forEach(function(element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

document.querySelector("#sign-up .modal-project").onclick = function() {
    event.stopPropagation()
}

document.querySelector('.read-rules').onclick = function() {
    document.querySelector('.slider-project').style.marginLeft = '-370px';
}

document.querySelectorAll('.go-back').forEach(function(element) {
    element.onclick = function() {
        document.querySelector('.slider-project').style.marginLeft = '0';
    }
})


document.querySelector('#switcher').onchange = function() {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    } else {
        document.querySelector('#signup-submit').classList.add('disabled');

    }
}

document.querySelector(".go-up").onclick = function() {
    document.querySelector('.right-part').scrollTop = "100px";
}