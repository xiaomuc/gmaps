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
    document.getElementById('submit').addEventListener('click', function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

// textareaを行単位で切り出す
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

// 時刻表記に変換
function sec2hour(time) {
    var sec = (time % 60) % 60;
    var min = Math.floor(time / 60) % 60;
    var hour = Math.floor(time / 3600) % 24;
    var days = Math.floor(time / (24 * 60 * 60));
    var res = "";
    if (days > 0) {
        res = days + "日"
    }
    if (days > 0 || hour > 0) {
        res = res + hour + "時間";
    }
    res = res + min + "分";
    return res;
}

// 経路検索
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    //  開始点
    var startPoint = $("#start").val();
    //  目的地
    var endPoint = $("#dist").val();
    //  交通手段
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
    //  経由地最適化オプション
    var optimize = $("#optimize").prop('checked');

    //  ルート検索
    directionsService.route({
        origin: startPoint,
        destination: endPoint,
        waypoints: waypts,
        optimizeWaypoints: optimize,
        travelMode: google.maps.TravelMode[selectedMode]
    }, function (response, status) {
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
            $("#routeModal").modal('toggle');
            $("#duration").text('総時間：' + sec2hour(totalDuration));
            $("#distance").text('総距離：' + totalDistance / 1000 + 'km');
        } else {
            $("#dlg-message").text('Error: ' + status)
        }
    });
}