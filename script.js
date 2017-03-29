

$('#save-image').on("click", function(){
  var cardTitle = $('#title').val();
  var cardCaption = $('#caption').val();
  var cardImage = filePath($('input:file').val());
  console.log(cardImage);
  var newImageCard = new ImageCard(cardTitle, cardImage, cardCaption);
  console.log(newImageCard);
})

function filePath(filePath) {
  return filePath.split('\\').pop();
}

function ImageCard(cardTitle, cardImage, cardCaption) {
  this.title = cardTitle;
  this.image = cardImage
  this.caption = cardCaption;
}

//console.log()

//var firstCard = ()

new ImageCard()
