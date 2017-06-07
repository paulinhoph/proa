(function() {
  var complementos = document.getElementById('complementos');

  function addContent() {
    
    var title = document.createElement('h2');
    title.classList.add('complemento-title');
    title.innerHTML = this.getAttribute('data-title');

    var paragraph = document.createElement('p');
    paragraph.classList.add('complemento-title');
    paragraph.innerHTML = this.getAttribute('data-text');

    var btn = document.createElement('button');
    btn.classList.add('complemento-btn');
    btn.innerHTML = 'X';
    
    btn.addEventListener('click', function() {
      complementos.style.display = 'none';
      complementos.innerHTML = '';
    });


    complementos.appendChild(title);
    complementos.appendChild(paragraph);
    complementos.appendChild(btn);
    complementos.style.display = 'block';
  }

  document.querySelectorAll('.itens').forEach(item=>item.addEventListener('click', addContent, false));
})()
