Ext.define('Buzzor.prj1.prjone.view.Contacts.CommunicationType',{"customWidgetType":"vdFormpanel","title":"Communication Type","name":"CommunicationType","itemId":"CommunicationType","restURL":"/CommunicationType","bodyPadding":10,"items":[{"name":"commTypeName","itemId":"commTypeName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Communication Type Name","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"128","errorMessage":"","restURL":"","allowBlank":true,"bind":"{commTypeName}"},{"name":"commTypeDescription","itemId":"commTypeDescription","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"Communication Type Description","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{commTypeDescription}"},{"customWidgetType":"vdFormpanel","title":"Communication Group","name":"CommunicationGroup","itemId":"CommunicationGroup","restURL":"/CommunicationGroup","bodyPadding":10,"items":[{"name":"commGroupName","itemId":"commGroupName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Communication Group<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"128","errorMessage":"","restURL":"","allowBlank":false,"bind":"{communicationGroup.commGroupName}"},{"name":"commGroupDescription","itemId":"commGroupDescription","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"Communication Goupr Description","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{communicationGroup.commGroupDescription}"}],"columnWidth":1,"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"}}],"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"requires":["Buzzor.prj1.prjone.viewmodel.Contacts.CommunicationTypeViewModel","Buzzor.prj1.prjone.controller.Contacts.CommunicationTypeController","Buzzor.prj1.prjone.model.Contacts.CommunicationTypeModel","Buzzor.prj1.prjone.model.Contacts.CommunicationGroupModel"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"CommunicationTypeController","viewModel":"CommunicationTypeViewModel","tools":[{"type":"help","tooltip":"Console","handler":"onConsoleClick"}],"extend":"Ext.form.Panel","xtype":"CommunicationType"});