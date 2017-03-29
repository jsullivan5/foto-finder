

$('#save-image').on("click", function(){
  var cardTitle = $('#title').val();
  var cardCaption = $('#caption').val();
  var cardImage = filePath($('input:file').val());
  // var cardImage = $('input:file').val();
  console.log(cardImage);
  var newImageCard = new ImageCard(cardTitle, cardImage, cardCaption);
  console.log(newImageCard);
  $("#gallery").prepend(`
    <div class="image-card">
      <h3 class="white">${cardTitle}</h3>
      <img id="card-image" src=${cardImage}>
      <p class="white">${cardCaption}</p>
      <section class="card-buttons clearfix">
        <img src="images/delete.svg" class="click-icon click-trash" id="card-delete" alt="delete">
        <img src="images/favorite.svg" class="click-icon click-heart" id="card-like" alt="like">
      </section>
    </div>
    `
  )
})

function filePath(filePath) {
   return "photos\\" + filePath.split('\\').pop();
}
//

function ImageCard(cardTitle, cardImage, cardCaption) {
  this.title = cardTitle;
  this.image = cardImage
  this.caption = cardCaption;
}

$('#gallery').on('click','.click-trash', function() {
  console.log($('.click-trash').parent().parent());
  $(this).parent().parent().remove('.image-card');

});

$('#gallery').on('click','.click-heart', function() {
  console.log($('.click-heart').parent().parent());
  $(this).parent().parent().children().toggleClass('favorited');

});
