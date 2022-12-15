var notify = document.querySelector('.take-info');
var contact_btn = document.querySelector('.send-btn');
var give_info = document.querySelector('.give-info');
contact_btn.addEventListener('click', () => {
    notify.style.display = "none";
    give_info.style.display = "block";

})


// Scroll to top

// scroll top
const topbtn = document.getElementById('sc-top');

// when user scroll down 100px from the top of the document , shows the button

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop) {
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
}

topbtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})