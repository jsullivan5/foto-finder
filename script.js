// Functions

function ImageCard(cardTitle, cardImage, cardCaption) {
  this.title = cardTitle;
  this.image = cardImage
  this.caption = cardCaption;
}

function filePath(filePath) {
   return "photos\\" + filePath.split('\\').pop();
}

//Content Generation

$('#save-image').on("click", function(){
  var cardTitle = $('#title').val();
  var cardCaption = $('#caption').val();
  var cardImage = filePath($('input:file').val());
  var newImageCard = new ImageCard(cardTitle, cardImage, cardCaption);
  $("#gallery").prepend(`
    <div class="image-card">
      <h3 class="white">${cardTitle}</h3>
      <img id="card-image" src=${cardImage}>
      <p class="white">${cardCaption}</p>
      <section class="card-buttons clearfix">
        <button class="click-icon click-trash card-delete" alt="delete"></button>
        <button class="click-icon click-heart card-like" alt="like"></button>
      </section>
    </div>
    `
  );
  $('#add-file-text').text('');
})

$('#file').on('change', 'input:file', function() {
  console.log('hearing file change');
})

// Disable Buttons

$(document).on('input', 'input:text', 'input:file', function (e) {
  var title = $('#title').val();
  var caption = $('#caption').val();
  var chooseFile = $('#file').val();
  if (title != '' && caption != '' && chooseFile != '') {
    $("#save-image").removeAttr("disabled");
  } else {
    $("#save-image").attr("disabled", "disabled");
  }
});

$("document").ready(function(){
  var title = $('#title').val();
  var caption = $('#caption').val();
  var chooseFile = $('#file').val();
  $("#file").change(function() {
    console.log($('um' + '#file').val());
    console.log($('#caption').val());
    console.log($('#title').val());
    if (chooseFile != undefined) {
      $("#save-image").removeAttr("disabled");
    } else {
      $("#save-image").attr("disabled", "disabled");
    }
  });
});

// Created Content Functionality

$('#gallery').on('click','.click-trash', function() {
  console.log($('.click-trash').parent().parent());
  $(this).parent().parent().remove('.image-card');
});

$('#gallery').on('click','.click-heart', function() {
  console.log($('.click-heart').parent().parent());
  $(this).parent().parent().children().toggleClass('favorited');
  $(this).toggleClass('click-heart-like');
})
