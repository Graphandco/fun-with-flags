import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
    'pk.eyJ1IjoicmVnZ2lvIiwiYSI6ImNrYzk5bmhvejFqOWozMmxtbnNmaGZpbmUifQ.HW-WPQJOYVzScLODOEhmNw';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: props.long,
            lat: props.lat,
            zoom: 3.7,
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            // style: 'mapbox://styles/mapbox/light-v10',
            style: 'mapbox://styles/mapbox/streets-v11',
            //style: 'mapbox://styles/mapbox/dark-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
        });

        let Marker = new mapboxgl.Marker();
        Marker.setLngLat([this.state.lng, this.state.lat]);
        Marker.addTo(map);

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            });
        });
    }

    render() {
        return (
            <div className='map-wrapper'>
                <div
                    ref={(el) => (this.mapContainer = el)}
                    className='mapContainer'
                />
            </div>
        );
    }
}
