// ロード時に呼ばれるコールバック関数
// 初期化を行っている
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    // マップの指定
    // 大阪市役所本庁舎　〒530-0005 大阪府大阪市北区中之島１丁目３−２０ 34.694012, 135.502202
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 34.694012, lng: 135.502202 }
    });
    directionsDisplay.setMap(map);

    // 送信ボタンにイベント割当
    document.getElementById('submit').addEventListener('click', function () {
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

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    var startPoint, endPoint;
    var text = document.getElementById('route').value;
    var splitByLine = getSplitByLine(text);
    if (splitByLine.length > 1) {
        startPoint = splitByLine[0];
        endPoint = splitByLine[splitByLine.length - 1];
        for (var i = 1; i < splitByLine.length - 1; i++) {
            waypts.push({
                location: splitByLine[i],
                stopover: true
            });
        }
    } else {
        window.alert("地点数が足りません。2箇所以上入力してください。");
    }
    /*
        var checkboxArray = document.getElementById('waypoints');
        for (var i = 0; i < checkboxArray.length; i++) {
            if (checkboxArray.options[i].selected) {
                waypts.push({
                    location: checkboxArray[i].value,
                    stopover: true
                });
            }
        }
    */
    // 要素を取得
    var elements = document.getElementsByName("travelMode");
    var selectedMode = "DRIVING";
    // 選択状態の値を取得
    for (i = elements.length; i--;) {
        if (elements[i].checked) {
            selectedMode = elements[i].value;
            break;
        }
    }
    //selectedMode = document.getElementById('mode').value;
    directionsService.route({
        //        origin: document.getElementById('start').value,
        origin: startPoint,
        //        destination: document.getElementById('end').value,
        destination: endPoint,
        waypoints: waypts,
        optimizeWaypoints: true,
//        travelMode: travelMode
        travelMode: google.maps.TravelMode[selectedMode]
        //travelMode: 'TRANSIT'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
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
            window.alert('Directions request failed due to ' + status);
        }
    });
}