//  Google Mapsオブジェクト 
var map;
//  GeoCoder（住所等から位置を特定するAPI)
var geocoder;
//  地図スケール判定用の変数
var minLng, maxLng, minLat, maxLat;
var infowindow;
//  地図初期化用のコールバック
function initMap() {
    //マップの生成と初期位置
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 32.803198,
            lng: 130.707875
        }
    });
    //GeoCoder生成
    geocoder = new google.maps.Geocoder();
    infowindow = new google.maps.InfoWindow();

    //placesオブジェクト(places.js)に登録された位置からマーカーを生成する
    for (var i = 0; i < places.length; i++) {
        setMarker(places[i]);
    }
    google.maps.event.addListener(map, "click", function(event) {
        infowindow.close();
    });
}

//  表示位置最適化:マーカーの位置から地図サイズ・表示位置を最適化する
function fitmap(location) {
    var lat = location.lat();
    var lng = location.lng();
    if (minLng == undefined || minLng > lng) {
        minLng = lng
    }
    if (maxLng == undefined || maxLng < lng) {
        maxLng = lng;
    }
    if (minLat == undefined || minLat > lat) {
        minLat = lat;
    }
    if (maxLat == undefined || maxLat < lat) {
        maxLat = lat;
    }
    var sw = new google.maps.LatLng(maxLat, minLng);
    var ne = new google.maps.LatLng(minLat, maxLng);
    var bounds = new google.maps.LatLngBounds(sw, ne);
    map.fitBounds(bounds);
}

//  マーカー生成：位置情報から地図上にマーカーを設定し、情報ウィンドウを生成する
function setMarker(place) {
    //  住所などから位置を特定
    geocoder.geocode({
        'address': place.address
    }, function(results, status) {
        //正常に位置が取得さた場合
        if (status == google.maps.GeocoderStatus.OK) {
            //情報ウィンドウ生成
            var icon_path = "http://maps.google.com/mapfiles/ms/icons/" + place.icon + ".png";
            /*var infowindow = new google.maps.InfoWindow({
                content: "<h1><a href='" +
                    place.url + "'>" + place.title + "</a></h1><p>" + place.description + "</p>" +
                    "<p>icon: <img src='" + icon_path + "'><strong>" + place.icon + "</strong></p>"
            });*/
            //マーカー生成
            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: icon_path,
                map: map,
                content: "<h1><a href='" +
                    place.url + "'>" + place.title + "</a></h1><p>" + place.description + "</p>" +
                    "<p>icon: <img src='" + icon_path + "'><strong>" + place.icon + "</strong></p>"
            });
            //クリックイベントで情報ウィンドウを開く
            marker.addListener('click', function() {
                infowindow.setContent(marker.content);
                infowindow.open(map, marker);
            });
            //表示位置最適化
            fitmap(results[0].geometry.location);
        } else {
            alert(status);
        }
    });
}