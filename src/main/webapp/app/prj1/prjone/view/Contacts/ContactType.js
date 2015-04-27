Ext.define('Buzzor.prj1.prjone.view.Contacts.ContactType',{"customWidgetType":"vdFormpanel","title":"Contact Type","name":"ContactType","itemId":"ContactType","restURL":"/ContactType","bodyPadding":10,"items":[{"name":"contactType","itemId":"contactType","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Contact Type","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"128","errorMessage":"","restURL":"","allowBlank":true,"bind":"{contactType}"},{"name":"contactTypeDesc","itemId":"contactTypeDesc","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"Contact Type Description","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{contactTypeDesc}"},{"name":"contactTypeIcon","itemId":"contactTypeIcon","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Contact Type Icon","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"128","errorMessage":"","restURL":"","allowBlank":true,"bind":"{contactTypeIcon}"}],"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"requires":["Buzzor.prj1.prjone.model.Contacts.ContactTypeModel","Buzzor.prj1.prjone.viewmodel.Contacts.ContactTypeViewModel","Buzzor.prj1.prjone.controller.Contacts.ContactTypeController"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"ContactTypeController","viewModel":"ContactTypeViewModel","tools":[{"type":"help","tooltip":"Console","handler":"onConsoleClick"}],"extend":"Ext.form.Panel","xtype":"ContactType"});