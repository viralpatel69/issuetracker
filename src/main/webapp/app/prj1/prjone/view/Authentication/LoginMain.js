Ext.define('Buzzor.prj1.prjone.view.Authentication.LoginMain',{"title":"Login","extend":"Ext.panel.Panel","layout":"border","controller":"LoginMainController","defaults":{"split":true},"communicationLog":[],"requires":["Buzzor.prj1.prjone.view.Authentication.Login","Buzzor.prj1.prjone.controller.Authentication.LoginMainController","Buzzor.prj1.prjone.view.Authentication.LoginGrid","Buzzor.prj1.prjone.view.Authentication.LoginTree"],"items":[{"width":"20%","region":"west","xtype":"LoginTreeContainer","collapsible":true},{"width":"80%","region":"center","xtype":"tabpanel","itemId":"LoginFormGridContainer","layout":"border","tabPosition":"bottom","items":[{"title":"Data Browser","layout":"border","items":[{"height":"50%","region":"center","xtype":"Login"},{"height":"50%","region":"south","xtype":"LoginGrid","collapsible":true}]},{"title":"Add New","layout":"border","items":[{"region":"center","xtype":"Login"}]}]}]});