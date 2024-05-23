function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

function setCookie(name, value, days, domain) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    var domainString = domain ? `; domain=${domain}` : '';
    document.cookie = name + "=" + (value || "") + expires + domainString + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function () {
    var language = getCookie('googtrans');
    if (!language) {
        document.getElementById('language-modal').style.display = 'block';
    } else {
        googleTranslateElementInit();
    }
};

function openLanguageModal() {
    document.getElementById('language-modal').style.display = 'block';
}

function setLanguage() {
    var language = document.getElementById('language-select').value;
    var domain = window.location.hostname === '127.0.0.1' ? '127.0.0.1' : 'mantrasankalp.com';
    setCookie('googtrans', `/en/${language}`, 365, domain);
    document.getElementById('language-modal').style.display = 'none';
    location.reload();
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(hideLoader, 1500); 
});