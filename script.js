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

$('#save-image').on("click", function() {
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

// Disable Buttons

function disable() {
var title = $('#title').val();
var caption = $('#caption').val();
var chooseFile = $('#file').val();
if ($('#title').val() === '' || $('#caption').val() === '' || $('#file').val() === '') {
  $('#save-image').prop('disabled', true);
} else {
  $('#save-image').prop('disabled', false);
}
console.log('program ran through');
console.log('so far so good');
console.log('title = ' + title);
console.log('caption = ' + caption +typeof(caption));
console.log('choosefile = ' + chooseFile);
}

$(document).on('input change', 'input', disable)

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
