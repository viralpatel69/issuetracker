Ext.define('Buzzor.prj1.prjone.view.Location.VillageMain',{"title":"Village","extend":"Ext.panel.Panel","layout":"border","controller":"VillageMainController","defaults":{"split":true},"requires":["Buzzor.prj1.prjone.view.Location.Village","Buzzor.prj1.prjone.controller.Location.VillageMainController","Buzzor.prj1.prjone.view.Location.VillageGrid","Buzzor.prj1.prjone.view.Location.VillageTree"],"communicationLog":[],"items":[{"width":"20%","region":"west","xtype":"VillageTreeContainer","collapsible":true},{"width":"80%","region":"center","xtype":"tabpanel","itemId":"VillageFormGridContainer","layout":"border","tabPosition":"bottom","items":[{"title":"Data Browser","layout":"border","items":[{"height":"50%","region":"center","xtype":"Village"},{"height":"50%","region":"south","xtype":"VillageGrid","collapsible":true}]},{"title":"Add New","layout":"border","items":[{"region":"center","xtype":"Village"}]}]}]});