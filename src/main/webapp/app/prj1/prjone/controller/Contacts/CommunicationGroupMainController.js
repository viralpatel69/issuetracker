Ext.define('Buzzor.prj1.prjone.controller.Contacts.CommunicationGroupMainController',{extend : 'Ext.app.ViewController',alias : 'controller.CommunicationGroupMainController',init : function(){debugger;this.renderTreeData();},addCommunicationLog : function(response, daoInfo, success) {debugger;if(success){var responseData = Ext.JSON.decode(response.responseText);}responseObj = {name : (daoInfo.fieldLabel!= null)? daoInfo.fieldLabel :daoInfo.title,status : response.status,statusText : response.statusText,success : success,message : success?responseData.response.message:'Failed'};this.view.communicationLog.push(responseObj);},renderTreeData :  function(){var formPanel = this.getView().down("#CommunicationGroup");var url = formPanel.restURL;var scope = this;var me = this;debugger;Ext.Ajax.request({url : 'secure'+url+'/findAll',method:'GET', sender:scope,jsonData :{},success : function(response,scope){var jsonRespone = Ext.JSON.decode(response.responseText);var data = jsonRespone.response.data;var currentView =  scope.sender.getView();var tree = currentView.down("#CommunicationGroupTree");var rootNode = tree.getRootNode();rootNode.removeAll();for (var int = 0; int < data.length; int++) {var childNode = { text:data[int].primaryDisplay, bConfig:data[int], leaf : true, icon:'images/table_icon.png' };rootNode.appendChild(childNode);}tree.getStore().sort('text','ASC');CommunicationGroupMainControllerGrid = me.view.down('#CommunicationGroupGrid').controller;CommunicationGroupMainControllerGrid.setData(data);var daoInfo = scope.sender.view.down('#CommunicationGroupTree');scope.sender.addCommunicationLog(response, daoInfo, true);},failure : function(response, scope){debugger;var daoInfo = scope.sender.view.down('#CommunicationGroupTree');scope.sender.addCommunicationLog(response, daoInfo, false);}},scope);},treeClick : function( me, record, item, index, e, eOpts ){if (record.data.leaf) {var CommunicationGroupGrid = this.view.down('#CommunicationGroupGrid');var foundRecord = CommunicationGroupGrid.store.findRecord('primaryKey',record.data.bConfig.primaryKey);CommunicationGroupGrid.setSelection(foundRecord);}var formPanel = this.getView().down("#CommunicationGroup");var vm = formPanel.getViewModel();var data = record.data.bConfig;vm.setData(data);CommunicationTypeGridGrid = this.view.up().down('#CommunicationTypeGrid');CommunicationTypeGridStore = CommunicationTypeGridGrid.getStore();CommunicationTypeGridStore.clearData();CommunicationTypeGridRec = record.data.bConfig.communicationType;CommunicationTypeGridStore.setRecords(CommunicationTypeGridRec);CommunicationTypeGridGrid.setSelection(0);}});