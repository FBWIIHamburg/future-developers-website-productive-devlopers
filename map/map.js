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
