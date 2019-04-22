var map;
   let myLatLng={lat: 53.555630, lng: 10.009230};
   let myLatLng1={lat: 53.556530, lng: 10.009230};

   function initMap() {
     map = new google.maps.Map(document.getElementById('myMap'), {
       center:myLatLng ,
       zoom: 12
     });

     // to create marker
     var marker = new google.maps.Marker({
       position: myLatLng,
       animation:google.maps.Animation.DROP,
       map: map,
       icon:"./map/marker.png",

// to make it dragable
       draggable:true,

       title: 'DCI Hamburg'
     });


//      // to make new marker
//      var marker1 = new google.maps.Marker({
//        position: myLatLng1,
//        animation:google.maps.Animation.DROP,
//        map: map,
//        icon:"./map/marker.png",

// // to make it dragable
//        draggable:true,

//        title: 'new marker'
//      });
//      google.maps.event.addListener(map, 'click', function(event) {
//       addMarker(event.latLng, map);
//     });




   }
  //  function addMarker(location, map) {
  //   // Add the marker at the clicked location, and add the next-available label
  //   // from the array of alphabetical characters.
  //   var marker = new google.maps.Marker({
  //     position: location,
  //     draggable:true,
  //     icon:"./map/marker.png",
  //     map: map
  //   });
  // }
