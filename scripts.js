var effect = document.querySelector('span');
effect.addEventListener('click', function() {
    var content = document.querySelector('p');

    if(content.classList.contains('hide-text')) {
        effect.innerHTML = 'Ocultar'
        content.classList.remove('hide-text')
    }else {
        effect.innerHTML = 'Ver mais'
        content.classList.add('hide-text')
    }
});