Ext.define('Buzzor.prj1.prjone.view.Authentication.Question',{"customWidgetType":"vdFormpanel","title":"Question","name":"Question","itemId":"Question","restURL":"/Question","bodyPadding":10,"items":[{"name":"levelid","itemId":"levelid","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Level Id<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minValue":"0","maxValue":"11","errorMessage":"","restURL":"","allowBlank":false,"bind":"{levelid}"},{"name":"question","itemId":"question","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Question<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{question}"},{"name":"questionDetails","itemId":"questionDetails","xtype":"textareafield","dataType":"TEXT","customWidgetType":"vdTextareafield","fieldLabel":"Details","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{questionDetails}"},{"name":"questionIcon","itemId":"questionIcon","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Icon","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"64","errorMessage":"","restURL":"","allowBlank":true,"bind":"{questionIcon}"}],"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"requires":["Buzzor.prj1.prjone.viewmodel.Authentication.QuestionViewModel","Buzzor.prj1.prjone.model.Authentication.QuestionModel","Buzzor.prj1.prjone.controller.Authentication.QuestionController"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"QuestionController","viewModel":"QuestionViewModel","tools":[{"type":"help","tooltip":"Console","handler":"onConsoleClick"}],"extend":"Ext.form.Panel","xtype":"Question"});