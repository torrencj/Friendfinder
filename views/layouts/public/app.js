
function toggleHide(elem) {
  console.log(elem);
  var item = document.querySelector(elem);
  console.log(item);
  if (item.classList.contains('hidden')) {
   item.classList.remove('hidden');
 } else {
   item.classList.add('hidden');
 }
}

function toggleActive() {
  var item = document.querySelector('.modal');
  if (item.classList.contains('is-active')) {
   item.classList.remove('is-active');
 } else {
   item.classList.add('is-active');
 }
}

document.querySelector('#start-btn').addEventListener('click', function (event) {
  toggleHide('#get-started');
  toggleHide('#quiz')
  // console.log(event.target);
})

document.querySelector('.modal-background').addEventListener('click', function (event) {
  $('.modal-card').empty();
  toggleActive();
})

document.querySelector('.modal-close').addEventListener('click', function (event) {
  $('.modal-card').empty();
  toggleActive();
})

document.querySelector('#submit-btn').addEventListener('click', function (event) {

  event.preventDefault();

  var inputs = $('input');
  var friendData = {};

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      friendData[inputs[i].name] = inputs[i].value
    }
  }

  $.ajax({
    url: "/api/friend",
    method: "post",
    data: friendData
  }).done(function(data) {
    console.log(data.name);

    //My Handlebars templates just don't work at all. Not sure why.
    // var source   = $("#modal-template").html();
    // var template = Handlebars.compile(source);
    // var context = {name: "My New Post", body: "This is my first post!"};
    // var html  = template(context);

    var html = '<div class="modal-card-body">'
             + '<figure class="image">'
             + '<img src="img/'+data.photoURL+'" alt="Image">'
             + '</figure>'
             + '<div class="media-content">'
             + '<div class="content">'
             + '<p><strong>'+data.name+'</strong> <small>@'+data.name+'</small> '
             + '<small>(Closer than you think...)</small><br>'
             + "He can't wait to meet you!</p>"
             + '</div></div></div>'

    $('.modal-card').append(html);

    toggleActive();
  })
  console.log(event.target);
})
