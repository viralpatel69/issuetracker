Ext.define('Buzzor.prj1.prjone.view.Contacts.CoreContacts',{"customWidgetType":"vdFormpanel","title":"Core Contacts","name":"CoreContacts","itemId":"CoreContacts","restURL":"/CoreContacts","bodyPadding":10,"items":[{"xtype":"form","itemId":"firstCard","items":[{"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"items":[{"name":"titleId","itemId":"titleId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Title<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"Title","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false,"bind":"{titleId}"},{"name":"firstName","itemId":"firstName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"First Name<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{firstName}"},{"name":"middleName","itemId":"middleName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Middle Name<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{middleName}"},{"name":"lastName","itemId":"lastName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Last Name<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false,"bind":"{lastName}"},{"name":"nativeLanguageCode","itemId":"nativeLanguageCode","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Native Language Code","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"Language","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":true,"bind":"{nativeLanguageCode}"},{"name":"nativeTitle","itemId":"nativeTitle","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Native Title","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":true,"bind":"{nativeTitle}"},{"name":"nativeFirstName","itemId":"nativeFirstName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Native First Name","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":true,"bind":"{nativeFirstName}"},{"name":"nativeMiddleName","itemId":"nativeMiddleName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Native Middle Name","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":true,"bind":"{nativeMiddleName}"},{"name":"nativeLastName","itemId":"nativeLastName","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Native LastName","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":true,"bind":"{nativeLastName}"},{"name":"genderId","itemId":"genderId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Gender<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"Gender","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false,"bind":"{genderId}"},{"name":"dateofbirth","itemId":"dateofbirth","xtype":"datefield","dataType":"DATETIME","customWidgetType":"vdDatefield","fieldLabel":"DOB","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{dateofbirth}"},{"name":"age","itemId":"age","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Age","primaryDisplay":false,"primaryKey":false,"minValue":"18","maxValue":"100","errorMessage":"","restURL":"","allowBlank":true,"bind":"{age}"},{"name":"approximateDOB","itemId":"approximateDOB","xtype":"datefield","dataType":"DATETIME","customWidgetType":"vdDatefield","fieldLabel":"Approx DOB","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true,"bind":"{approximateDOB}"}]}]},{"customWidgetType":"vdFormpanel","title":"Communication Data","name":"CommunicationData","itemId":"CommunicationDataForm","restURL":"/CommunicationData","bodyPadding":10,"items":[{"xtype":"form","itemId":"firstCard","items":[{"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"items":[{"name":"commGroupId","itemId":"commGroupId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Communication Group<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"CommunicationGroup","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false},{"name":"commType","itemId":"commType","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Communication Type<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"CommunicationType","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false},{"name":"commData","itemId":"commData","xtype":"textfield","dataType":"TEXT","customWidgetType":"vdTextfield","fieldLabel":"Communication Data<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","errorMessage":"","restURL":"","allowBlank":false}]}]},{"columnWidth":1,"xtype":"button","customWidgetType":"vdButton","maxWidth":242,"text":"Add CommunicationData","handler":"addCommunicationData"},{"xtype":"grid","title":"CommunicationData","columnWidth":1,"customWidgetType":"vdGrid","itemId":"CommunicationDataGrid","fieldLabel":"List","bindLevel":"communicationData","listeners":{"select":"onCommunicationDataGridItemClick"},"columns":[{"header":"active_status","dataIndex":"active_status","hidden":true,"flex":1},{"header":"created_by","dataIndex":"created_by","hidden":true,"flex":1},{"header":"created_date","dataIndex":"created_date","hidden":true,"flex":1},{"header":"txn_access_code","dataIndex":"txn_access_code","hidden":true,"flex":1},{"header":"updated_by","dataIndex":"updated_by","hidden":true,"flex":1},{"header":"updated_date","dataIndex":"updated_date","hidden":true,"flex":1},{"header":"version_id","dataIndex":"version_id","hidden":true,"flex":1},{"header":"commType","dataIndex":"commDataId","hidden":true,"flex":1},{"header":"Communication Group","dataIndex":"commGroupId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"Communication Type","dataIndex":"commType","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"Communication Data","dataIndex":"commData","hidden":false,"flex":1},{"xtype":"actioncolumn","width":30,"sortable":false,"menuDisable":true,"items":[{"icon":"images/delete.gif","tooltip":"Delete Record","handler":"onDeleteActionColumnClick"}]}]}],"xtype":"form"},{"customWidgetType":"vdFormpanel","title":"Address","name":"Address","itemId":"AddressForm","restURL":"/Address","bodyPadding":10,"items":[{"xtype":"form","itemId":"firstCard","items":[{"layout":"column","defaults":{"columnWidth":0.5,"labelAlign":"left","labelWidth":200,"margin":"5 5 5 5"},"items":[{"name":"addressLabel","itemId":"addressLabel","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Address Label","primaryDisplay":false,"primaryKey":false,"minLength":"0","maxLength":"11","errorMessage":"","restURL":"","allowBlank":true},{"name":"address1","itemId":"address1","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"Address1","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true},{"name":"address2","itemId":"address2","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"Address2","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true},{"name":"addressTypeId","itemId":"addressTypeId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Address Type<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"AddressType","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false},{"name":"address3","itemId":"address3","xtype":"textareafield","dataType":"VARCHAR","customWidgetType":"vdTextareafield","fieldLabel":"Address3","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"","allowBlank":true},{"name":"zipcode","itemId":"zipcode","xtype":"textfield","dataType":"VARCHAR","customWidgetType":"vdTextfield","fieldLabel":"Postal Code<font color='red'> *<\/font>","primaryDisplay":true,"primaryKey":false,"minLength":"0","maxLength":"256","errorMessage":"","restURL":"","allowBlank":false},{"name":"cityId","itemId":"cityId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"City<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"City","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false},{"name":"stateId","itemId":"stateId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"State<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"State","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false,"listeners":{"change":"onstateIdChange"}},{"name":"countryId","itemId":"countryId","xtype":"combo","dataType":"VARCHAR","customWidgetType":"vdCombo","fieldLabel":"Country<font color='red'> *<\/font>","primaryDisplay":false,"primaryKey":false,"errorMessage":"","restURL":"Country","displayField":"primaryDisplay","valueField":"primaryKey","allowBlank":false,"listeners":{"change":"oncountryIdChange"}},{"name":"latitude","itemId":"latitude","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Latitude","primaryDisplay":false,"primaryKey":false,"minValue":"0","maxValue":"11","errorMessage":"","restURL":"","allowBlank":true},{"name":"longtitude","itemId":"longtitude","xtype":"numberfield","dataType":"INT","customWidgetType":"vdNumberfield","fieldLabel":"Longitude","primaryDisplay":false,"primaryKey":false,"minValue":"0","maxValue":"11","errorMessage":"","restURL":"","allowBlank":true}]}]},{"columnWidth":1,"xtype":"button","customWidgetType":"vdButton","maxWidth":132,"text":"Add Address","handler":"addAddress"},{"xtype":"grid","title":"Address","columnWidth":1,"customWidgetType":"vdGrid","itemId":"AddressGrid","fieldLabel":"List","bindLevel":"address","listeners":{"select":"onAddressGridItemClick"},"columns":[{"header":"active_status","dataIndex":"active_status","hidden":true,"flex":1},{"header":"created_by","dataIndex":"created_by","hidden":true,"flex":1},{"header":"created_date","dataIndex":"created_date","hidden":true,"flex":1},{"header":"txn_access_code","dataIndex":"txn_access_code","hidden":true,"flex":1},{"header":"updated_by","dataIndex":"updated_by","hidden":true,"flex":1},{"header":"updated_date","dataIndex":"updated_date","hidden":true,"flex":1},{"header":"version_id","dataIndex":"version_id","hidden":true,"flex":1},{"header":"Address Id","dataIndex":"addressId","hidden":true,"flex":1},{"header":"Address Label","dataIndex":"addressLabel","hidden":false,"flex":1},{"header":"Address1","dataIndex":"address1","hidden":false,"flex":1},{"header":"Address2","dataIndex":"address2","hidden":false,"flex":1},{"header":"Address Type","dataIndex":"addressTypeId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"Address3","dataIndex":"address3","hidden":false,"flex":1},{"header":"Postal Code","dataIndex":"zipcode","hidden":false,"flex":1},{"header":"City","dataIndex":"cityId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"State","dataIndex":"stateId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"Country","dataIndex":"countryId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"Latitude","dataIndex":"latitude","hidden":false,"flex":1},{"header":"Longitude","dataIndex":"longtitude","hidden":false,"flex":1},{"xtype":"actioncolumn","width":30,"sortable":false,"menuDisable":true,"items":[{"icon":"images/delete.gif","tooltip":"Delete Record","handler":"onDeleteActionColumnClick"}]}]}],"xtype":"form"}],"tools":[{"type":"help","tooltip":"Get Console","handler":"onConsoleClick"}],"tbar":["->",{"itemId":"card-prev","text":"&laquo; Previous","handler":"showPreviousCard","disabled":true},{"itemId":"card-next","text":"Next &raquo;","handler":"showNextCard"}],"layout":"card","defaults":{"autoScroll":true},"requires":["Buzzor.prj1.prjone.model.Contacts.CoreContactsModel","Buzzor.prj1.prjone.controller.Contacts.CoreContactsController","Buzzor.prj1.prjone.model.Contacts.CommunicationDataModel","Buzzor.prj1.prjone.model.Location.AddressModel","Buzzor.prj1.prjone.viewmodel.Contacts.CoreContactsViewModel"],"autoScroll":true,"buttons":[{"text":"Save","listeners":{"click":"saveForm"}},{"text":"Reset","listeners":{"click":"resetForm"}}],"controller":"CoreContactsController","viewModel":"CoreContactsViewModel","extend":"Ext.form.Panel","xtype":"CoreContacts"});