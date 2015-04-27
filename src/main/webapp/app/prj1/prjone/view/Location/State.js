Ext.define('Buzzor.prj1.prjone.view.Location.State',{"customWidgetType":"vdFormpanel","title":"State","name":"State","itemId":"State","restURL":"/State","bodyPadding":10,"items":[{"name":"countryId","itemId":"countryId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Country Code","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"Country","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":true,"bind":"{countryId}"},{"name":"stateName","itemId":"stateName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"State Name","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateName}"},{"name":"stateCode","itemId":"stateCode","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"State Code","primaryDisplay":false,"primaryKey":false,"minValue":"0","maxValue":"2","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateCode}"},{"name":"stateCodeChar2","itemId":"stateCodeChar2","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"State Code 2","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"32","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateCodeChar2}"},{"name":"stateCodeChar3","itemId":"stateCodeChar3","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"State Code 3","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"32","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateCodeChar3}"},{"name":"stateDescription","itemId":"stateDescription","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"State Description","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateDescription}"},{"name":"stateFlag","itemId":"stateFlag","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Flag","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"128","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateFlag}"},{"name":"stateCapital","itemId":"stateCapital","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Capital","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"128","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateCapital}"},{"name":"stateCapitalLatitude","itemId":"stateCapitalLatitude","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Capitial Latitude","primaryDisplay":false,"primaryKey":false,"minValue":"0","maxValue":"11","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateCapitalLatitude}"},{"name":"stateCapitalLongitude","itemId":"stateCapitalLongitude","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Capitial Longitude","primaryDisplay":false,"primaryKey":false,"minValue":"0","maxValue":"11","errorMessage":"","restURL":"","allowBlank":true,"bind":"{stateCapitalLongitude}"}],"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"requires":["Buzzor.prj1.prjone.controller.Location.StateController","Buzzor.prj1.prjone.model.Location.StateModel","Buzzor.prj1.prjone.viewmodel.Location.StateViewModel"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"StateController","viewModel":"StateViewModel","tools":[{"type":"help","tooltip":"Console","handler":"onConsoleClick"}],"extend":"Ext.form.Panel","xtype":"State"});