Ext.define('Buzzor.prj1.prjone.view.Authorization.Roles',{"customWidgetType":"vdFormpanel","title":"Roles","name":"Roles","itemId":"Roles","restURL":"/Roles","bodyPadding":10,"items":[{"name":"RoleName","itemId":"RoleName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Role Name<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{RoleName}"},{"name":"RoleDescription","itemId":"RoleDescription","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Name<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{RoleDescription}"},{"name":"RoleIcon","itemId":"RoleIcon","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Icon","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"64","errorMessage":"","restURL":"","allowBlank":true,"bind":"{RoleIcon}"},{"name":"roleHelp","itemId":"roleHelp","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Help","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":true,"bind":"{roleHelp}"}],"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"requires":["Buzzor.prj1.prjone.viewmodel.Authorization.RolesViewModel","Buzzor.prj1.prjone.controller.Authorization.RolesController","Buzzor.prj1.prjone.model.Authorization.RolesModel"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"RolesController","viewModel":"RolesViewModel","tools":[{"type":"help","tooltip":"Console","handler":"onConsoleClick"}],"extend":"Ext.form.Panel","xtype":"Roles"});