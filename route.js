// ロード時に呼ばれるコールバック関数
// 初期化を行っている
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    // マップの指定
    // 大阪市役所本庁舎　〒530-0005 大阪府大阪市北区中之島１丁目３−２０ 34.694012, 135.502202
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 32.803198, lng: 130.707875 }
    });
    directionsDisplay.setMap(map);

    // 送信ボタンにイベント割当
    document.getElementById('submit').addEventListener('click', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

function getSplitByLine(text) {
    var lines = text.split('\n');
    var outArray = new Array();

    for (var i = 0; i < lines.length; i++) {
        // 空行は無視する
        if (lines[i] == '') {
            continue;
        }

        outArray.push(lines[i]);
    }
    return outArray;
}

function sec2hour(time) {
    var sec = (time % 60) % 60;
    var min = Math.floor(time / 60) % 60;
    var hour = Math.floor(time / 3600);
    var res = "";
    if (hour > 0) {
        res = hour + "時間";
    }
    res = res + min + "分";
    return res;
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    var startPoint = $("#start").val();
    var endPoint = $("#dist").val();
    var selectedMode = $("input[name=travelMode]:checked").val();
    if (selectedMode != "TRANSIT") {
        var text = $('#waypoint').val();
        var splitByLine = getSplitByLine(text);
        for (var i = 0; i < splitByLine.length; i++) {
            waypts.push({
                location: splitByLine[i],
                stopover: true
            });
        }
    }
    var optimize = $("#optimize").prop('checked');
    //selectedMode = document.getElementById('mode').value;
    directionsService.route({
        //        origin: document.getElementById('start').value,
        origin: startPoint,
        //        destination: document.getElementById('end').value,
        destination: endPoint,
        waypoints: waypts,
        optimizeWaypoints: optimize,
        //        travelMode: travelMode
        travelMode: google.maps.TravelMode[selectedMode]
            //travelMode: 'TRANSIT'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var totalDistance = 0;
            var totalDuration = 0;
            var legs = response.routes[0].legs;
            for (var i = 0; i < legs.length; i++) {
                totalDistance += legs[i].distance.value;
                totalDuration += legs[i].duration.value;
            }
            $("#dlg-message").text('');
            $("#exampleModal").modal('toggle');
            $("#duration").text('総時間：' + sec2hour(totalDuration));
            $("#distance").text('総距離：' + totalDistance / 1000 + 'km');
            //            document.getElementById("duration").innerHTML = "総時間：" + sec2hour(totalDuration);
            //document.getElementById("distance").innerHTML = "総距離：" + totalDistance / 1000 + "km";
            /*
                                    var route = response.routes[0];
                                    var summaryPanel = document.getElementById('directions-panel');
                                    summaryPanel.innerHTML = '';
                                    // For each route, display summary information.
                                    for (var i = 0; i < route.legs.length; i++) {
                                        var routeSegment = i + 1;
                                        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                                            '</b><br>';
                                        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
                                        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
                                        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
                                    }
                                */
        } else {
            //window.alert('Directions request failed due to ' + status);
            $("#dlg-message").text('Error: ' + status)
        }
    });
}