var gmailBtn = $(".gmail");
var gitHubBtn = $(".gitHub");
var linkedInBtn = $(".linkedIn");
var backHomeBtn = $(".backHome");

gmailBtn.on("click", function () {
    window.location.href = "mailto:avamsteimle@gmail.com?subject=Subject&body=message%20goes%20here";
});

gitHubBtn.on("click", function () {
    window.location.href = "http://github.com/kreativekntrl";
});

linkedInBtn.on("click", function () {
    window.location.href = "http://www.linkedin.com/in/avasteimle/";
});


// Scrolls to top of page 
backHomeBtn.on("click", function() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});