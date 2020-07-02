var wms_layers = [];

var lyr_AMS_1956_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "AMS_1956",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AMS_1956_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.089896, 5224722.990536, -805632.650746, 5225678.240450]
                            })
                        });
var lyr_nacional_19801986_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "nacional_1980-1986",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/nacional_19801986_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.224725, 5224723.401851, -805631.739250, 5225678.980317]
                            })
                        });
var lyr_SIGPAC_2002_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SIGPAC_2002",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SIGPAC_2002_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.096854, 5224722.637069, -805631.967392, 5225678.579862]
                            })
                        });
var lyr_PNOA_max_actualidade_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "PNOA_max_actualidade",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PNOA_max_actualidade_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.012121, 5224722.608461, -805632.028976, 5225678.517412]
                            })
                        });
var format_vector_4 = new ol.format.GeoJSON();
var features_vector_4 = format_vector_4.readFeatures(json_vector_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_4.addFeatures(features_vector_4);
var lyr_vector_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_4, 
                style: style_vector_4,
                interactive: true,
                title: '<img src="styles/legend/vector_4.png" /> vector'
            });
var lyr_catastro_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "catastro",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/catastro_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.129033, 5224722.606025, -805631.912054, 5225678.519828]
                            })
                        });

lyr_AMS_1956_0.setVisible(true);lyr_nacional_19801986_1.setVisible(true);lyr_SIGPAC_2002_2.setVisible(true);lyr_PNOA_max_actualidade_3.setVisible(true);lyr_vector_4.setVisible(true);lyr_catastro_5.setVisible(true);
var layersList = [lyr_AMS_1956_0,lyr_nacional_19801986_1,lyr_SIGPAC_2002_2,lyr_PNOA_max_actualidade_3,lyr_vector_4,lyr_catastro_5];
lyr_vector_4.set('fieldAliases', {'fid': 'fid', });
lyr_vector_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_vector_4.set('fieldLabels', {'fid': 'no label', });
lyr_vector_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});