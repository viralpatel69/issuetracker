Ext.define('Buzzor.prj1.prjone.view.Authentication.UserAccessDomain',{"customWidgetType":"vdFormpanel","title":"User Access Domain","name":"UserAccessDomain","itemId":"UserAccessDomain","restURL":"/UserAccessDomain","bodyPadding":10,"items":[{"name":"userAccessDomain","itemId":"userAccessDomain","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Access Domain<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minValue":"0","maxValue":"11","errorMessage":"","restURL":"","allowBlank":false,"bind":"{userAccessDomain}"},{"name":"domainName","itemId":"domainName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Access Domain Name<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"3","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{domainName}"},{"name":"domainDescription","itemId":"domainDescription","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Description<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"3","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{domainDescription}"},{"name":"domainHelp","itemId":"domainHelp","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Help","primaryDisplay":false,"primaryKey":false,"minLength":"3","maxLength":"2048","errorMessage":"","restURL":"","allowBlank":true,"bind":"{domainHelp}"},{"name":"domainIcon","itemId":"domainIcon","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Icon","primaryDisplay":false,"primaryKey":false,"minLength":"3","maxLength":"256","errorMessage":"","restURL":"","allowBlank":true,"bind":"{domainIcon}"}],"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"requires":["Buzzor.prj1.prjone.model.Authentication.UserAccessDomainModel","Buzzor.prj1.prjone.viewmodel.Authentication.UserAccessDomainViewModel","Buzzor.prj1.prjone.controller.Authentication.UserAccessDomainController"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"UserAccessDomainController","viewModel":"UserAccessDomainViewModel","tools":[{"type":"help","tooltip":"Console","handler":"onConsoleClick"}],"extend":"Ext.form.Panel","xtype":"UserAccessDomain"});