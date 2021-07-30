/*         var map;
         var geocoder;
         var address = "LE67 4EQ";
         var infoWindow = new google.maps.InfoWindow();
         var latlng = new google.maps.LatLng(0, 0);
         var mapopts = { zoom: 9, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false };
         map = new google.maps.Map(document.getElementById("mapbox"), mapopts);
         geocoder = new google.maps.Geocoder();
         geocoder.geocode({'address': address}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           map.setCenter(results[0].geometry.location);
           var marker = new google.maps.Marker({ map: map, position: results[0].geometry.location });
         var circle = new google.maps.Circle({ map: map, radius: 30000, fillColor: 'cadetblue', strokeColor: '#2020C0', strokeWeight: '1px' });
           circle.bindTo('center', marker, "position");  
         } 
         });
*/