function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 40.2338, lng: -111.6585}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
  ['South Sandy Beach', 40.169446, -111.741807, 4],
  ['Deer Creek Launch', 40.458868, -111.472710, 5],
  ['Lindon Launch', 40.316300, -111.7648527, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}


// // SLIDEOUT MENU

// $(document).ready(function() {
//   var $toggleButton = $('.toggle-button');
//   $toggleButton.on('click', function() {
//     $(this).toggleClass('button-open');
//   });
// });

// $(document).ready(function() {
//     var $toggleButton = $('.toggle-button'),
//         $menuWrap = $('.menu-wrap');

//     $toggleButton.on('click', function() {
//         $(this).toggleClass('button-open');
//         $menuWrap.toggleClass('menu-show');
//     });
// });

// $(document).ready(function() {
//     var $sidebarArrow = $('.sidebar-menu-arrow');
//     $sidebarArrow.click(function() {
//         $(this).next().slideToggle(300);
//     });
