mapboxgl.accessToken = 'pk.eyJ1Ijoia2NoZ28iLCJhIjoiY2xzYzl0ZmdqMGV2MDJrc2J0d2QxY3BjMSJ9.j4YNLdElfmSsY_rztE1FJw';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 9,
});

map.on('load', () => {

    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }

    });

    map.addSource('buildings-data', {
        type: 'geojson',
        data: ''
    });

    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    });

});