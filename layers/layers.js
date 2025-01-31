var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uscities_mainland_1 = new ol.format.GeoJSON();
var features_uscities_mainland_1 = format_uscities_mainland_1.readFeatures(json_uscities_mainland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uscities_mainland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uscities_mainland_1.addFeatures(features_uscities_mainland_1);
var lyr_uscities_mainland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uscities_mainland_1, 
                style: style_uscities_mainland_1,
                popuplayertitle: 'uscities_mainland',
                interactive: true,
    title: 'uscities_mainland<br />\
    <img src="styles/legend/uscities_mainland_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/uscities_mainland_1_1.png" /> Rendah<br />\
    <img src="styles/legend/uscities_mainland_1_2.png" /> Sedang<br />\
    <img src="styles/legend/uscities_mainland_1_3.png" /> Padat<br />\
    <img src="styles/legend/uscities_mainland_1_4.png" /> Sangat Padat<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_uscities_mainland_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_uscities_mainland_1];
lyr_uscities_mainland_1.set('fieldAliases', {'city': 'city', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'population', 'density': 'density', 'timezone': 'timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'sunrise_sh', 'sunset_sho': 'sunset_sho', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'daylight', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_uscities_mainland_1.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'TextEdit', 'sunset_lon': 'TextEdit', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_uscities_mainland_1.set('fieldLabels', {'city': 'no label', 'state_id': 'no label', 'state_name': 'no label', 'lat': 'no label', 'lng': 'no label', 'population': 'no label', 'density': 'no label', 'timezone': 'no label', 'sunrise_lo': 'no label', 'sunset_lon': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'day_length': 'no label', 'night_leng': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_uscities_mainland_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});