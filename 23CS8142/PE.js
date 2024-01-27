function toggleNavbar() {
    var links = document.querySelector('.navbar-links');
    links.classList.toggle('show');
}
function toggleText(event, textBoxId) {
    event.preventdefault();
    var textBox = document.getElementById(textBoxId);
    textBox.classList.toggle('expanded');
}