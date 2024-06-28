// Показать/скрыть кнопку возврата наверх
window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Прокрутка наверх при нажатии на кнопку
document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};

// Disqus
var disqus_config = function () {
    this.page.url = 'https://leny1050.github.io/Flud/';  // Укажите адрес вашей страницы
    this.page.identifier = 'https://leny1050.github.io/Flud/'; // Укажите уникальный идентификатор страницы (можете использовать URL страницы)
};

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://fludjj.disqus.com/embed.js'; // Замените на ваш короткий идентификатор
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

