Ext.define('Buzzor.prj1.prjone.view.Authorization.RolesMain',{"title":"Roles","extend":"Ext.panel.Panel","layout":"border","controller":"RolesMainController","defaults":{"split":true},"requires":["Buzzor.prj1.prjone.view.Authorization.Roles","Buzzor.prj1.prjone.controller.Authorization.RolesMainController","Buzzor.prj1.prjone.view.Authorization.RolesGrid","Buzzor.prj1.prjone.view.Authorization.RolesTree"],"communicationLog":[],"items":[{"width":"20%","region":"west","xtype":"RolesTreeContainer","collapsible":true},{"width":"80%","region":"center","xtype":"tabpanel","itemId":"RolesFormGridContainer","layout":"border","tabPosition":"bottom","items":[{"title":"Data Browser","layout":"border","items":[{"height":"50%","region":"center","xtype":"Roles"},{"height":"50%","region":"south","xtype":"RolesGrid","collapsible":true}]},{"title":"Add New","layout":"border","items":[{"region":"center","xtype":"Roles"}]}]}]});