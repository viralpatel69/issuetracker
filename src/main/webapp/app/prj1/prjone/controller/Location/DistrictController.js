Ext.define('Buzzor.prj1.prjone.controller.Location.DistrictController',
{
	extend : 'Ext.app.ViewController',
	alias : 'controller.DistrictController',
	init:function()
	{
		this.countryIdLoad();
		this.regionIdLoad();
	},
addCommunicationLog : function(response, daoInfo, success) {debugger;if(success){var responseData = Ext.JSON.decode(response.responseText);}responseObj = {name : (daoInfo.fieldLabel!= null)? daoInfo.fieldLabel :daoInfo.title,status : response.status,statusText : response.statusText,success : success,message : success?responseData.response.message:'Failed'};this.view.up().up().up().communicationLog.push(responseObj);},onConsoleClick : function() {debugger;Ext.create('Ext.window.Window', {title : 'Communication Log',height : 400,width : 600,layout : 'fit',items : {xtype : 'grid',itemId : 'consoleGrid',border : false,columns : [{header : 'Name',dataIndex : 'name','flex' : 1}, {header : 'Status',dataIndex : 'status','flex' : 1}, {header : 'StatusText',dataIndex : 'statusText','flex' : 1}, {header : 'Success',dataIndex : 'success','flex' : 1}, {header : 'Message',dataIndex : 'message','flex' : 1}],store : Ext.create('Ext.data.Store', {fields : [],data : this.view.up().up().up().communicationLog,autoLoad : true})}}).show();},onDeleteActionColumnClick: function(grid, rowIndex){debugger;grid.store.removeAt(rowIndex);},
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
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#countryId') != null){queryPanel.down('#countryId').setStore(myStore);queryPanel.down('#countryId').getStore().sort('primaryDisplay', 'ASC');}scope.sender.controller.addCommunicationLog(response, daoInfo, true);			},failure : function(response, scope){debugger;var daoInfo = scope.sender.down('#countryId');scope.sender.controller.addCommunicationLog(response, daoInfo, false);}
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
stateIdCombo.getStore().sort('primaryDisplay','ASC');			scope.sender.controller.addCommunicationLog(response, daoInfo, true);},failure : function(response, scope){debugger;var daoInfo = scope.sender.down('#countryId');scope.sender.controller.addCommunicationLog(response, daoInfo, false);}
		},scope);
	},


	regionIdLoad: function (){
		var scope = this.getView();
		Ext.Ajax.request(
		{
			url: 'secure/Region/findAll',
			method:'GET', 
			sender:scope,
			jsonData :{},
			success : function(response,scope){
				var daoInfo = scope.sender.down('#regionId');
				var storedata = Ext.JSON.decode(response.responseText);
				storedata = storedata.response.data;
				var myStore = Ext.create('Ext.data.Store', {
					fields : [],
					data: storedata,
					autoLoad: true
					});
				daoInfo.setStore(myStore);
daoInfo.getStore().sort('primaryDisplay', 'ASC');queryPanel =  scope.sender.up().up().up().down('#queryPanel');if(queryPanel.down('#regionId') != null){queryPanel.down('#regionId').setStore(myStore);queryPanel.down('#regionId').getStore().sort('primaryDisplay', 'ASC');}scope.sender.controller.addCommunicationLog(response, daoInfo, true);			},failure : function(response, scope){debugger;var daoInfo = scope.sender.down('#countryId');scope.sender.controller.addCommunicationLog(response, daoInfo, false);}
		},scope);
	},
	removeId : function (data){
		for (var int = 0; int < data.length; int++) {
		delete data[int]['id'];
	}
},

	createObject : function(data , dataLevel,  assignValue){
		debugger;
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
},
	saveForm: function (){
debugger;
if (!this.getView().isValid()) {return;}var data = this.getViewModel().getData();
if (data.id != null ) {delete data.id;}var jsonData = {};
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
success : function(response, opts) {
Ext.Msg.alert('Server Response', 'Data saved successfully');me.refreshMainForm();},
failure : function(){
Ext.Msg.alert('Server Response', 'Data saving failed');}}, this);
	},
refreshMainForm : function(){debugger;mainView = this.view.up().up().up();mainView.controller.renderTreeData();this.resetForm();},resetForm : function() {this.view.getForm().reset();},
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