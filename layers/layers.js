var wms_layers = [];

var lyr_AMS_56_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "AMS_56",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AMS_56_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.089896, 5224722.990536, -805632.650746, 5225678.240450]
                            })
                        });
var lyr_PNOA_max_actualidade_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "PNOA_max_actualidade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PNOA_max_actualidade_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.012121, 5224722.608461, -805632.028976, 5225678.517412]
                            })
                        });
var format_vector_2 = new ol.format.GeoJSON();
var features_vector_2 = format_vector_2.readFeatures(json_vector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_2.addFeatures(features_vector_2);
var lyr_vector_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_2, 
                style: style_vector_2,
                interactive: true,
                title: '<img src="styles/legend/vector_2.png" /> vector'
            });

lyr_AMS_56_0.setVisible(true);lyr_PNOA_max_actualidade_1.setVisible(true);lyr_vector_2.setVisible(true);
var layersList = [lyr_AMS_56_0,lyr_PNOA_max_actualidade_1,lyr_vector_2];
lyr_vector_2.set('fieldAliases', {'fid': 'fid', });
lyr_vector_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_vector_2.set('fieldLabels', {'fid': 'no label', });
lyr_vector_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});