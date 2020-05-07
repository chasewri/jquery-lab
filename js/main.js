

$('#add').on('click', function(e) {
  const inputVal = $('input').val();
  const input = $('input');
  const here = $('#here');
  here.before(function() {
    return `<tr class="remove"><td>${inputVal}</td><td><button class="uk-button  \
    uk-button-default remove" type="button"><a href="#" class="uk-icon-link"  \
    uk-icon="icon: trash">
    </a></button></td></tr>`;
  });

  input.val('');
  input.focus();

  $('.remove').on('click', 'button', function(e) {
    $(this).parent('td').parent('tr').fadeOut(1000, function() {
      $(this).remove();
    });
  });
});

  $('.remove').on('click', 'button', function(e) {
    $(this).parent('td').parent('tr').fadeOut(1000, function() {
      $(this).remove();
    });
  });
