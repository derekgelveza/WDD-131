let selectElem = document.querySelector('#choose-Theme');
let logo = document.querySelector('.logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    document.body.classList.remove('dark', 'light');

    if (current === 'dark') {
        document.body.classList.add('dark');
        logo.src = "images/byui-logo-dark.png";
    } else if (current === 'light') {
        document.body.classList.add ('light');
        logo.src = "images/byui-logo_blue.png";
    } else {
        logo.src = "images/byui-logo_blue.png";
    }
}