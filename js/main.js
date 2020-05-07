const storage = [];
const here = $('#here');


if(localStorage.length !== 0) {
  for(let i = 0; i < localStorage.length; i++) {
    storString = localStorage.key(i).toString();
    storage.unshift(storString);
  }
  storage.forEach((str) => {
    here.before(`<tr class="remove"><td>${str}</td><td><button
    class="uk-button uk-button-default remove" type="button"><a href="#"
    class="uk-icon-link" uk-icon="icon: trash"></a></button></td></tr>`);
  });

}

$('#add').on('click', function(e) {
  const inputVal = $('input').val();
  const input = $('input');
  here.before(function() {
    return `<tr class="remove"><td>${inputVal}</td><td><button class="uk-button  \
    uk-button-default remove" type="button"><a href="#" class="uk-icon-link"  \
    uk-icon="icon: trash">
    </a></button></td></tr>`;
  });
  localStorage.setItem(inputVal, inputVal);

  input.val('');
  input.focus();

  $('.remove').on('click', 'button', function(e) {
    $(this).parent('td').parent('tr').fadeOut(1000, function() {
      let $this = $(this);
      let text = $this.first().text();
      localStorage.removeItem(text);
      $(this).remove();
    });
  });
});

  $('.remove').on('click', 'button', function(e) {
    $(this).parent('td').parent('tr').fadeOut(1000, function() {
      let $this = $(this);
      let text = $this.first().text();
      localStorage.removeItem(text);
      $(this).remove();
    });
  });
