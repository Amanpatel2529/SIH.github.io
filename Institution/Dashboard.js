const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function() {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
})

var subjectObject = {
    "2016": {
        "CSE": ["YES", "NO"],
        "MECH": ["YES", "NO"],
        "EE": ["YES", "NO"],
        "CIVIL": ["YES", "NO"],
    },
    "2017": {
        "CSE": ["YES", "NO"],
        "MECH": ["YES", "NO"],
        "EE": ["YES", "NO"],
        "CIVIL": ["YES", "NO"],
    },
    "2018": {
        "CSE": ["YES", "NO"],
        "MECH": ["YES", "NO"],
        "EE": ["YES", "NO"],
        "CIVIL": ["YES", "NO"],
    },
    "2019": {
        "CSE": ["YES", "NO"],
        "MECH": ["YES", "NO"],
        "EE": ["YES", "NO"],
        "CIVIL": ["YES", "NO"],
    },
    "2020": {
        "CSE": ["YES", "NO"],
        "MECH": ["YES", "NO"],
        "EE": ["YES", "NO"],
        "CIVIL": ["YES", "NO"],
    },
    "2021": {
        "CSE": ["YES", "NO"],
        "MECH": ["YES", "NO"],
        "EE": ["YES", "NO"],
        "CIVIL": ["YES", "NO"],
    }
}
window.onload = function() {
    var subjectSel = document.getElementById("year");
    var topicSel = document.getElementById("branch");
    var chapterSel = document.getElementById("Place");
    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function() {
        //empty Chapters dropdown
        chapterSel.length = 1;
        //display correct values
        var z = subjectObject[subjectSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
    }
}