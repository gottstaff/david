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
var lyr_Sombreado_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sombreado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sombreado_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807722.467637, 5224043.980444, -804897.420273, 5225980.690009]
                            })
                        });
var lyr_cuncas_hidrogrficas_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "cuncas_hidrográficas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cuncas_hidrogrficas_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807722.467637, 5224043.980444, -804897.420273, 5225980.690009]
                            })
                        });
var format_vector_6 = new ol.format.GeoJSON();
var features_vector_6 = format_vector_6.readFeatures(json_vector_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vector_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vector_6.addFeatures(features_vector_6);
var lyr_vector_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vector_6, 
                style: style_vector_6,
                interactive: true,
                title: '<img src="styles/legend/vector_6.png" /> vector'
            });
var lyr_catastro_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "catastro",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/catastro_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-807395.129033, 5224722.606025, -805631.912054, 5225678.519828]
                            })
                        });
var format_Contornos_8 = new ol.format.GeoJSON();
var features_Contornos_8 = format_Contornos_8.readFeatures(json_Contornos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contornos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contornos_8.addFeatures(features_Contornos_8);
var lyr_Contornos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contornos_8, 
                style: style_Contornos_8,
                interactive: true,
                title: '<img src="styles/legend/Contornos_8.png" /> Contornos'
            });

lyr_AMS_1956_0.setVisible(true);lyr_nacional_19801986_1.setVisible(true);lyr_SIGPAC_2002_2.setVisible(true);lyr_PNOA_max_actualidade_3.setVisible(true);lyr_Sombreado_4.setVisible(true);lyr_cuncas_hidrogrficas_5.setVisible(true);lyr_vector_6.setVisible(true);lyr_catastro_7.setVisible(true);lyr_Contornos_8.setVisible(true);
var layersList = [lyr_AMS_1956_0,lyr_nacional_19801986_1,lyr_SIGPAC_2002_2,lyr_PNOA_max_actualidade_3,lyr_Sombreado_4,lyr_cuncas_hidrogrficas_5,lyr_vector_6,lyr_catastro_7,lyr_Contornos_8];
lyr_vector_6.set('fieldAliases', {'fid': 'fid', });
lyr_Contornos_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_vector_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_Contornos_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_vector_6.set('fieldLabels', {'fid': 'no label', });
lyr_Contornos_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Contornos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});