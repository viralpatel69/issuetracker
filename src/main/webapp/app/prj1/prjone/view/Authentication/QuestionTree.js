Ext.define('Buzzor.prj1.prjone.view.Authentication.QuestionTree',{"customWidgetType":"vdTab","displayName":"Question","name":"QuestionTreeContainer","itemId":"QuestionTreeContainer","restURL":"/Question","title":"Search","autoScroll":true,"requires":["Buzzor.prj1.prjone.controller.Authentication.QuestionControllerTree"],"controller":"QuestionControllerTree","items":[{"xtype":"treepanel","title":"Browse","userArrows":true,"rootVisible":false,"itemId":"QuestionTree","listeners":{"select":"treeClick"},"tbar":[{"xtype":"triggerfield","emptyText":"search","triggerCls":"","listeners":{"change":"onTriggerfieldChange","buffer":250}}]},{"title":"Advance Search","xtype":"form","itemId":"queryPanel","buttons":[{"text":"Filter","handler":"onFilterClick"}],"items":[]}],"extend":"Ext.tab.Panel","xtype":"QuestionTreeContainer"});