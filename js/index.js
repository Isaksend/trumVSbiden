document.addEventListener('DOMContentLoaded', function() {
    var btnTrump = document.querySelector('.choose_trump');
    var memTrump = document.getElementById('mem_trump');
    btnTrump.addEventListener('click', function() {
        memTrump.classList.toggle('visible');
    });

    var btnBiden = document.querySelector('.choose_biden');
    var memBiden = document.getElementById("mem_biden");
    btnBiden.addEventListener('click', function() {
        memBiden.classList.toggle('visible');
    });
});
