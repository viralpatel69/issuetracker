Ext.define('Buzzor.prj1.prjone.controller.Authentication.LoginControllerTree',{extend : 'Ext.app.ViewController',alias : 'controller.LoginControllerTree',init : function() {},addCommunicationLog : function(response, success, daoInfo) { try{if (success) {var responseData = Ext.JSON.decode(response.responseText);}if(daoInfo == null){responseObj = {name : '',status : response.status,statusText : response.statusText,success : success,message : success ? responseData.response.message : 'Failed'};}else{responseObj = {name : (daoInfo.fieldLabel != null)? daoInfo.fieldLabel: daoInfo.title,status : response.status,statusText : response.statusText,success : success,message : success ? responseData.response.message : 'Failed'};}this.view.up().up().communicationLog.push(responseObj);}catch(addCommunicationLogException){}},onFilterClick : function(but, evt){debugger;var currentObject = this.getView();var data =  but.up('form').getForm().getValues();var searchData = {};for (key in data) {console.log(key, data[key]);if (data[key] != null && data[key] != '') {searchData[key] = data[key];}}var loadMask = new Ext.LoadMask({msg : 'Searching data...',target : currentObject.up().up()}).show();Ext.Ajax.request({url : 'secure' + currentObject.restURL+ '/search',method : 'POST',loadMask : loadMask,controller : currentObject,jsonData : Ext.JSON.encode(searchData),success : function(response, currentObject) {var jsonRespone = Ext.JSON.decode(response.responseText);if (jsonRespone.response.success == true) {var jsonRespone = Ext.JSON.decode(response.responseText);var data = jsonRespone.response.data;var currentView = currentObject.controller;var tree = currentView.down('#LoginTree');var rootNode = tree.getRootNode();rootNode.removeAll();for (var int = 0; int < data.length; int++) {var childNode = {text : data[int].primaryDisplay,bConfig : data[int],leaf : true,icon : 'images/table_icon.png'};rootNode.appendChild(childNode);}tree.getStore().sort('text', 'ASC');LoginGrid = currentView.up().down('#LoginGrid').controller;LoginGrid.setData(data);var daoInfo = scope.sender.view.down('#LoginTree');controller.controller.addCommunicationLog(response, true, daoInfo);}currentObject.loadMask.hide();},failure : function(response, eopts) {eopts.loadMask.hide();Ext.MessageBox.show({title : 'Error',msg : response.statusText,icon : Ext.MessageBox.ERROR});var daoInfo = scope.sender.view.down('#LoginTree');controller.controller.addCommunicationLog(response, false, daoInfo);}});},treeClick : function( me, record, item, index, e, eOpts ){if (record.data.leaf) {var LoginGrid = this.view.up().down('#LoginGrid');var foundRecord = LoginGrid.store.findRecord('primaryKey',record.data.bConfig.primaryKey);LoginGrid.setSelection(foundRecord);}var formPanel = this.getView().up().down("#Login");var vm = formPanel.getViewModel();var data = record.data.bConfig;vm.setData(data);var CommunicationDataGrid = formPanel.down('#CommunicationDataGrid');CommunicationDataGrid.store.loadData(data.communicationdata);CommunicationDataGrid.setSelection(1);var AddressGrid = formPanel.down('#AddressGrid');AddressGrid.store.loadData(data.address);AddressGrid.setSelection(1);var PassRecoveryGrid = formPanel.down('#PassRecoveryGrid');PassRecoveryGrid.store.loadData(data.passrecovery);PassRecoveryGrid.setSelection(1);},displayfieldBeforerender :function(me) {var tree = me.up('LoginTree');var root = tree.getRootNode();var leafCount = 0;tree.store.on('fillcomplete', function(store, node) {if (node === root) {root.visitPostOrder('', function(node) {if (node.isLeaf()) {leafCount++;}});me.setValue(leafCount);}});},onTrigger1Click :	function(me) {var store =me.up('LoginTree').store;this.reset();store.clearFilter();this.focus();},onTriggerfieldChange : function(me) {var tree = me.up().up();var v;try {v = new RegExp(me.getValue(), 'i');tree.store.filter({filterFn : function(node) {var children = node.childNodes, len = children&& children.length,visible = node.isLeaf() ? v.test(node.get('text')) : false, i;for (i = 0; i < len&& !(visible = children[i].get('visible')); i++);return visible;},id : 'titleFilter'});} catch (e) {me.markInvalid('Invalid regular expression');}}});