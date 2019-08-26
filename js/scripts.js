//frontend
$(document).ready(function(){
  $('select#locationSelector').change(function(event){
    event.preventDefault();
    $('div#output').hide();
    var selection = $('select#locationSelector').val();
    updateOutput(selection);
    $('div#output').show();
  });
});



//backend
//Destination logic

function Destinations(){
  this.places = [];
}



Destinations.prototype.addPlace = function(place) {
  this.places.push(place);
}

var destinationList = new Destinations();


//destination logic
function Place(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}



var location1 = new Place('Maui', 'Ocean', 'Summer', 'Maui is an island');
var location2 = new Place('Mars', 'Olympus Mons', 'galactic summer', 'Mars is a red planet');
var location3 = new Place('Antarctica', 'Icebergs', 'preferably Summer', 'Antartica is a continent');

destinationList.addPlace(location1);
destinationList.addPlace(location2);
destinationList.addPlace(location3);


function updateOutput(selection){
  console.log(selection);


  switch(parseInt(selection)) {
    case 0:
      $('div#output').hide();
      console.log("check");
      break;
    case 1:
      $('h3').text(destinationList.places[0].location)
      $('#item1').text(destinationList.places[0].landmark)
      $('#item2').text(destinationList.places[0].timeOfYear)

      break;
    case 2:
    $('h3').text(destinationList.places[1].location)
    $('#item1').text(destinationList.places[1].landmark)
    $('#item2').text(destinationList.places[1].timeOfYear)
      break;
    case 3:
    $('h3').text(destinationList.places[2].location)
    $('#item1').text(destinationList.places[2].landmark)
    $('#item2').text(destinationList.places[2].timeOfYear)
      break;
  }
};
