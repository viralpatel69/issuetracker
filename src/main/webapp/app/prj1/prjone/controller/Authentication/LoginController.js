Ext.define('Buzzor.prj1.prjone.controller.Authentication.LoginController',
{
	extend : 'Ext.app.ViewController',
	alias : 'controller.LoginController',
	init:function()
	{
		this.countryIdLoad();
		this.nativeLanguageCodeLoad();
		this.questionIdLoad();
		this.commTypeLoad();
		this.genderIdLoad();
		this.commGroupIdLoad();
		this.userAccessDomainIdLoad();
		this.addressTypeIdLoad();
		this.titleIdLoad();
		this.userAccessLevelIdLoad();

	var storeCommunicationData = new Ext.data.Store({ fields : [],data : []    });
gridCommunicationData = this.view.down('#CommunicationDataGrid'); 
gridCommunicationData.setStore(storeCommunicationData)

	var storeAddress = new Ext.data.Store({ fields : [],data : []    });
gridAddress = this.view.down('#AddressGrid'); 
gridAddress.setStore(storeAddress)

	var storePassRecovery = new Ext.data.Store({ fields : [],data : []    });
gridPassRecovery = this.view.down('#PassRecoveryGrid'); 
gridPassRecovery.setStore(storePassRecovery)
	},
addCommunicationLog : function(response, success, daoInfo) {try{if (success) {var responseData = Ext.JSON.decode(response.responseText);}if(daoInfo == null){responseObj = {name : '',status : response.status,statusText : response.statusText,success : success,message : success ? responseData.response.message : 'Failed'};}else{responseObj = {name : (daoInfo.fieldLabel != null)? daoInfo.fieldLabel: daoInfo.title,status : response.status,statusText : response.statusText,success : success,message : success ? responseData.response.message : 'Failed'};}this.view.up().up().up().communicationLog.push(responseObj);} catch(addCommunicationLogException){}},onConsoleClick : function() {Ext.create('Ext.window.Window', {title : 'Communication Log',height : 400,width : 600,layout : 'fit',items : {xtype : 'grid',itemId : 'consoleGrid',border : false,columns : [{header : 'Name',dataIndex : 'name','flex' : 1}, {header : 'Status',dataIndex : 'status','flex' : 1}, {header : 'StatusText',dataIndex : 'statusText','flex' : 1}, {header : 'Success',dataIndex : 'success','flex' : 1}, {header : 'Message',dataIndex : 'message','flex' : 1}],store : Ext.create('Ext.data.Store', {fields : [],data : this.view.up().up().up().communicationLog,autoLoad : true})}}).show();},onDeleteActionColumnClick: function(grid, rowIndex){grid.store.removeAt(rowIndex);},
	fetchDataFromStore : function(store) {
	storeItems = store.data.items;
	obj = {};
	arr = [];
	for (counter in storeItems) {	arr.push(storeItems[counter].data);}
	return obj['objArr'] = arr;
},


	countryIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/Country/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#countryId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#countryId') != null){queryPanel.down('#countryId').setStore(myStore);queryPanel.down('#countryId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#countryId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#countryId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	nativeLanguageCodeLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/Language/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#nativeLanguageCode');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#nativeLanguageCode') != null){queryPanel.down('#nativeLanguageCode').setStore(myStore);queryPanel.down('#nativeLanguageCode').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#nativeLanguageCode');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#nativeLanguageCode');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	questionIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/Question/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#questionId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#questionId') != null){queryPanel.down('#questionId').setStore(myStore);queryPanel.down('#questionId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#questionId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#questionId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	onstateIdChange: function (primaryKey){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/City/findBystateId',
			method:'POST', 
		 jsonData : {
			 findKey : primaryKey.value 
		}, 
			sender:scope,
			success : function(response,scope){
				var cityIdCombo = scope.sender.down('#cityId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				cityIdCombo.setStore(myStore);
var daoInfo = scope.sender.down('#cityId');cityIdCombo.getStore().sort('primaryDisplay','ASC');var daoInfo = scope.sender.down('#cityId');			scope.sender.controller.addCommunicationLog(response, true, daoInfo);},failure : function(response, scope){var daoInfo = scope.sender.down('#cityId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	oncountryIdChange: function (primaryKey){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/State/findBycountryId',
			method:'POST', 
		 jsonData : {
			 findKey : primaryKey.value 
		}, 
			sender:scope,
			success : function(response,scope){
				var stateIdCombo = scope.sender.down('#stateId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				stateIdCombo.setStore(myStore);
var daoInfo = scope.sender.down('#stateId');stateIdCombo.getStore().sort('primaryDisplay','ASC');var daoInfo = scope.sender.down('#stateId');			scope.sender.controller.addCommunicationLog(response, true, daoInfo);},failure : function(response, scope){var daoInfo = scope.sender.down('#stateId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	commTypeLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/CommunicationType/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#commType');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#commType') != null){queryPanel.down('#commType').setStore(myStore);queryPanel.down('#commType').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#commType');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#commType');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	genderIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/Gender/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#genderId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#genderId') != null){queryPanel.down('#genderId').setStore(myStore);queryPanel.down('#genderId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#genderId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#genderId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	commGroupIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/CommunicationGroup/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#commGroupId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#commGroupId') != null){queryPanel.down('#commGroupId').setStore(myStore);queryPanel.down('#commGroupId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#commGroupId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#commGroupId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	userAccessDomainIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/UserAccessDomain/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#userAccessDomainId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#userAccessDomainId') != null){queryPanel.down('#userAccessDomainId').setStore(myStore);queryPanel.down('#userAccessDomainId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#userAccessDomainId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#userAccessDomainId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	addressTypeIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/AddressType/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#addressTypeId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#addressTypeId') != null){queryPanel.down('#addressTypeId').setStore(myStore);queryPanel.down('#addressTypeId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#addressTypeId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#addressTypeId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	titleIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/Title/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#titleId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#titleId') != null){queryPanel.down('#titleId').setStore(myStore);queryPanel.down('#titleId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#titleId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#titleId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	userAccessLevelIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/UserAccessLevel/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#userAccessLevelId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#userAccessLevelId') != null){queryPanel.down('#userAccessLevelId').setStore(myStore);queryPanel.down('#userAccessLevelId').getStore().sort('primaryDisplay', 'ASC');}var daoInfo = scope.sender.down('#userAccessLevelId');scope.sender.controller.addCommunicationLog(response, true, daoInfo);			},failure : function(response, scope){var daoInfo = scope.sender.down('#userAccessLevelId');scope.sender.controller.addCommunicationLog(response, false, daoInfo);}
		},scope);
	},


	
addCommunicationData : function(){
	var formCommunicationData = this.view.down('#CommunicationDataForm');
	var gridCommunicationData = this.view.down('#CommunicationDataGrid');
	 if(formCommunicationData.isValid()){
		gridCommunicationData.getStore().add(formCommunicationData.getValues());	}formCommunicationData.reset();
	},


	
onCommunicationDataGridItemClick : function(cellModel, record, rowIndex, columnIndex, eOpts){
	form = this.view.down('#CommunicationDataForm');
	form.loadRecord(record)
	},


	
addAddress : function(){
	var formAddress = this.view.down('#AddressForm');
	var gridAddress = this.view.down('#AddressGrid');
	 if(formAddress.isValid()){
		gridAddress.getStore().add(formAddress.getValues());	}formAddress.reset();
	},


	
onAddressGridItemClick : function(cellModel, record, rowIndex, columnIndex, eOpts){
	form = this.view.down('#AddressForm');
	form.loadRecord(record)
	},


	
addPassRecovery : function(){
	var formPassRecovery = this.view.down('#PassRecoveryForm');
	var gridPassRecovery = this.view.down('#PassRecoveryGrid');
	 if(formPassRecovery.isValid()){
		gridPassRecovery.getStore().add(formPassRecovery.getValues());	}formPassRecovery.reset();
	},


	
onPassRecoveryGridItemClick : function(cellModel, record, rowIndex, columnIndex, eOpts){
	form = this.view.down('#PassRecoveryForm');
	form.loadRecord(record)
	},
	removeId : function (data){
		for (var int = 0; int < data.length; int++) {
		delete data[int]['id'];
	}
},

	createObject : function(data , dataLevel,  assignValue){
		this.removeId(assignValue);
		var dataLevels = dataLevel.split('.');
		var currentObject = data;
		for ( var iterable_element in dataLevels) {
		console.log(dataLevels[iterable_element]);
		var element = dataLevels[iterable_element];
		var elementValue = currentObject[element];
		if(currentObject[element]){
		console.log(elementValue);
		currentObject = elementValue;}
		else{
		currentObject[element] = assignValue;
		return currentObject;
}}		return data;},
renderFormValue: function(value, metaData,record, row, col, store, gridView)
{
try {
var comboStore = this.getView().down('#'+metaData.column.dataIndex).getStore();
var index = comboStore.findExact('primaryKey',value);
return comboStore.getAt(index).data.primaryDisplay;
} catch ( e ) {
return value;
}
},showNextCard : function(btn) {var grid = this.view.layout.getActiveItem().down('grid');if (!this.view.layout.getActiveItem().isValid() ) {if(grid == null || grid.store.getCount() ==0 )return;}this.view.layout.setActiveItem(this.view.layout.getNext());prevBut = btn.up().down('#card-prev');prevBut.setDisabled(false);if (!this.view.layout.getNext()) {btn.setDisabled(true);}},showPreviousCard : function(btn) {this.view.layout.setActiveItem(this.view.layout.getPrev());nextBut = btn.up().down('#card-next');nextBut.setDisabled(false);if (!this.view.layout.getPrev()) {btn.setDisabled(true);}},
	saveForm: function (){
var firstCard = this.view.down('#firstCard');if(!firstCard.getForm().isValid()){return;}var addCommunicationDataForm = this.view.down('#CommunicationDataForm');var addCommunicationData = this.view.down('#CommunicationDataGrid');
if(!(addCommunicationDataForm.isValid() || addCommunicationData.store.getCount() != 0)){return;}this.addCommunicationData();var addAddressForm = this.view.down('#AddressForm');var addAddress = this.view.down('#AddressGrid');
if(!(addAddressForm.isValid() || addAddress.store.getCount() != 0)){return;}this.addAddress();var addPassRecoveryForm = this.view.down('#PassRecoveryForm');var addPassRecovery = this.view.down('#PassRecoveryGrid');
if(!(addPassRecoveryForm.isValid() || addPassRecovery.store.getCount() != 0)){return;}this.addPassRecovery();var data = this.getViewModel().getData();
if (data.id != null ) {delete data.id;}var addCommunicationDataBindLavel = addCommunicationData.bindLevel;
	delete data[addCommunicationDataBindLavel];
	this.createObject(data, addCommunicationDataBindLavel, this.fetchDataFromStore(addCommunicationData.getStore()));
var addAddressBindLavel = addAddress.bindLevel;
	delete data[addAddressBindLavel];
	this.createObject(data, addAddressBindLavel, this.fetchDataFromStore(addAddress.getStore()));
var addPassRecoveryBindLavel = addPassRecovery.bindLevel;
	delete data[addPassRecoveryBindLavel];
	this.createObject(data, addPassRecoveryBindLavel, this.fetchDataFromStore(addPassRecovery.getStore()));
var jsonData = {};
		for(key in data){
		console.log(key,data[key]);
		if(data[key]!= null){		
jsonData[key] = data[key];}	
}
		 this.modifyData(jsonData);
	console.log(Ext.JSON.encode(jsonData));
var method;if(jsonData.primaryKey == null){method = 'POST'}else{method = 'PUT'}restURL = this.view.restURL;
var me = this;Ext.Ajax.request({
url : 'secure'+restURL+'/',
method : method,
jsonData : jsonData,
success : function(response, opts) {var responseData = Ext.JSON.decode(response.responseText);if(responseData.response.success){Ext.Msg.alert('Server Response','Data saved successfully');me.refreshMainForm();}else{Ext.Msg.alert('Server Response','Data saving failed');}me.addCommunicationLog(response, true);},
failure : function(response, scope){
Ext.Msg.alert('Server Response', 'Data saving failed');me.addCommunicationLog(response, false);}}, this);
	},
refreshMainForm : function(){mainView = this.view.up().up().up();mainView.controller.renderTreeData();this.resetForm();},resetForm : function() {this.view.getForm().reset();
	var gridCommunicationData = this.view.down('#CommunicationDataGrid');
		gridCommunicationData.getStore().removeAll();
	var gridAddress = this.view.down('#AddressGrid');
		gridAddress.getStore().removeAll();
	var gridPassRecovery = this.view.down('#PassRecoveryGrid');
		gridPassRecovery.getStore().removeAll();},
modifyData : function(config) {
 
if (!config) { return null; }
for (i in config) {if(config[i]){
config[i] = config[i].valueOf();
console.log(i + '   '+ config[i]);
if (typeof config[i] == 'object') {
this.modifyData(config[i]);
}
}
}
}
	}
);