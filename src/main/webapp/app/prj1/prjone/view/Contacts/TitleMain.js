Ext.define('Buzzor.prj1.prjone.view.Contacts.TitleMain',{"title":"Title","extend":"Ext.panel.Panel","layout":"border","controller":"TitleMainController","defaults":{"split":true},"requires":["Buzzor.prj1.prjone.view.Contacts.Title","Buzzor.prj1.prjone.controller.Contacts.TitleMainController","Buzzor.prj1.prjone.view.Contacts.TitleGrid","Buzzor.prj1.prjone.view.Contacts.TitleTree"],"communicationLog":[],"items":[{"width":"20%","region":"west","xtype":"TitleTreeContainer","collapsible":true},{"width":"80%","region":"center","xtype":"tabpanel","itemId":"TitleFormGridContainer","layout":"border","tabPosition":"bottom","items":[{"title":"Data Browser","layout":"border","items":[{"height":"50%","region":"center","xtype":"Title"},{"height":"50%","region":"south","xtype":"TitleGrid","collapsible":true}]},{"title":"Add New","layout":"border","items":[{"region":"center","xtype":"Title"}]}]}]});