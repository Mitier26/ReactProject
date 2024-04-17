import React, { useEffect } from 'react';
const { kakao } = window;

const Location = () => {
    const getInfo = (map) => {
        // 지도의 현재 중심좌표를 얻어옵니다
        var center = map.getCenter();

        // 지도의 현재 레벨을 얻어옵니다
        var level = map.getLevel();

        // 지도타입을 얻어옵니다
        var mapTypeId = map.getMapTypeId();

        // 지도의 현재 영역을 얻어옵니다
        var bounds = map.getBounds();

        // 영역의 남서쪽 좌표를 얻어옵니다
        var swLatLng = bounds.getSouthWest();

        // 영역의 북동쪽 좌표를 얻어옵니다
        var neLatLng = bounds.getNorthEast();

        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
        var boundsStr = bounds.toString();

        var message = '지도 중심좌표는 위도 ' + center.getLat() + ', <br>';
        message += '경도 ' + center.getLng() + ' 이고 <br>';
        message += '지도 레벨은 ' + level + ' 입니다 <br> <br>';
        message += '지도 타입은 ' + mapTypeId + ' 이고 <br> ';
        message += '지도의 남서쪽 좌표는 ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' 이고 <br>';
        message += '북동쪽 좌표는 ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' 입니다';

        // 개발자도구를 통해 직접 message 내용을 확인해 보세요.
        console.log(message);
    };

    useEffect(() => {
        kakao.maps.load(() => {
            var container = document.getElementById('map');
            var option = {
                center: new kakao.maps.LatLng(33.45, 126.57),
                level: 3, // 보이는 범위
                isPanto: true, //부드럽게 이동
            };
            var map = new kakao.maps.Map(container, option);

            var marker = new kakao.maps.Marker({
                position: map.getCenter(),
            });
            marker.setMap(map);

            kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
                // 클릭한 위도, 경도 정보를 가져옵니다
                var latlng = mouseEvent.latLng;

                // 마커 위치를 클릭한 위치로 옮깁니다
                marker.setPosition(latlng);

                var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
                message += '경도는 ' + latlng.getLng() + ' 입니다';

                var resultDiv = document.getElementById('clickLatlng');
                resultDiv.innerHTML = message;
            });

            getInfo(map);
        });
    }, []);

    return (
        <>
            <div id="map" style={{ width: '500px', height: '400px' }}>
                {/* <MapTypeControl position={'TOPRIGHT'} /> */}
                {/* <ZoomControl position={'RIGHT'} /> */}
            </div>
            <div id="clickLatlng"></div>
        </>
    );
};

export default Location;
