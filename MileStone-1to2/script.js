var button = document.getElementById("toggle skills");
var skills = document.getElementById("skills");
button.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
var downloadPdfButton = document.getElementById('download-pdf');
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
