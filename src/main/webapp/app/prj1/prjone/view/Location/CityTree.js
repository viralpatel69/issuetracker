Ext.define('Buzzor.prj1.prjone.view.Location.CityTree',{"customWidgetType":"vdTab","displayName":"City","name":"CityTreeContainer","itemId":"CityTreeContainer","restURL":"/City","title":"Search","autoScroll":true,"requires":["Buzzor.prj1.prjone.controller.Location.CityControllerTree"],"controller":"CityControllerTree","items":[{"xtype":"treepanel","title":"Browse","userArrows":true,"rootVisible":false,"itemId":"CityTree","listeners":{"select":"treeClick"},"tbar":[{"xtype":"triggerfield","emptyText":"search","triggerCls":"","listeners":{"change":"onTriggerfieldChange","buffer":250}}]},{"title":"Advance Search","xtype":"form","itemId":"queryPanel","buttons":[{"text":"Filter","handler":"onFilterClick"}],"items":[]}],"extend":"Ext.tab.Panel","xtype":"CityTreeContainer"});