Ext.define('Buzzor.prj1.prjone.controller.Location.CurrencyMainController',{extend : 'Ext.app.ViewController',alias : 'controller.CurrencyMainController',init : function(){debugger;this.renderTreeData();},addCommunicationLog : function(response, daoInfo, success) {debugger;if(success){var responseData = Ext.JSON.decode(response.responseText);}responseObj = {name : (daoInfo.fieldLabel!= null)? daoInfo.fieldLabel :daoInfo.title,status : response.status,statusText : response.statusText,success : success,message : success?responseData.response.message:'Failed'};this.view.communicationLog.push(responseObj);},renderTreeData :  function(){var formPanel = this.getView().down("#Currency");var url = formPanel.restURL;var scope = this;var me = this;debugger;Ext.Ajax.request({url : 'secure'+url+'/findAll',method:'GET', sender:scope,jsonData :{},success : function(response,scope){var jsonRespone = Ext.JSON.decode(response.responseText);var data = jsonRespone.response.data;var currentView =  scope.sender.getView();var tree = currentView.down("#CurrencyTree");var rootNode = tree.getRootNode();rootNode.removeAll();for (var int = 0; int < data.length; int++) {var childNode = { text:data[int].primaryDisplay, bConfig:data[int], leaf : true, icon:'images/table_icon.png' };rootNode.appendChild(childNode);}tree.getStore().sort('text','ASC');CurrencyMainControllerGrid = me.view.down('#CurrencyGrid').controller;CurrencyMainControllerGrid.setData(data);var daoInfo = scope.sender.view.down('#CurrencyTree');scope.sender.addCommunicationLog(response, daoInfo, true);},failure : function(response, scope){debugger;var daoInfo = scope.sender.view.down('#CurrencyTree');scope.sender.addCommunicationLog(response, daoInfo, false);}},scope);},treeClick : function( me, record, item, index, e, eOpts ){if (record.data.leaf) {var CurrencyGrid = this.view.down('#CurrencyGrid');var foundRecord = CurrencyGrid.store.findRecord('primaryKey',record.data.bConfig.primaryKey);CurrencyGrid.setSelection(foundRecord);}var formPanel = this.getView().down("#Currency");var vm = formPanel.getViewModel();var data = record.data.bConfig;vm.setData(data);}});