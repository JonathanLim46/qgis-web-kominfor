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
var format_location_1 = new ol.format.GeoJSON();
var features_location_1 = format_location_1.readFeatures(json_location_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_location_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_location_1.addFeatures(features_location_1);
var lyr_location_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_location_1, 
                style: style_location_1,
                popuplayertitle: 'location',
                interactive: true,
                title: '<img src="styles/legend/location_1.png" /> location'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_location_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_location_1];
lyr_location_1.set('fieldAliases', {'lintang': 'lintang', 'bujur': 'bujur', 'nama': 'nama', });
lyr_location_1.set('fieldImages', {'lintang': 'TextEdit', 'bujur': 'TextEdit', 'nama': 'TextEdit', });
lyr_location_1.set('fieldLabels', {'lintang': 'no label', 'bujur': 'no label', 'nama': 'no label', });
lyr_location_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});