function scrollpos() {
    if (window.scrollY<document.getElementById('header').clientHeight)    {
    document.getElementById('navigation').style.display = 'block';
} else {
    document.getElementById('navigation').style.display = 'none';
}
}