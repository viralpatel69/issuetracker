Ext.define('Buzzor.prj1.prjone.controller.Authentication.UserAccessDomainControllerTree',{extend : 'Ext.app.ViewController',alias : 'controller.UserAccessDomainControllerTree',init : function() {},onFilterClick : function(but, evt){debugger;var currentObject = this.getView();var data =  but.up('form').getForm().getValues();var searchData = {};for (key in data) {console.log(key, data[key]);if (data[key] != null && data[key] != '') {searchData[key] = data[key];}}var loadMask = new Ext.LoadMask({msg : 'Searching data...',target : currentObject.up().up()}).show();Ext.Ajax.request({url : 'secure' + currentObject.restURL+ '/search',method : 'POST',loadMask : loadMask,controller : currentObject,jsonData : Ext.JSON.encode(searchData),success : function(response, currentObject) {debugger;var jsonRespone = Ext.JSON.decode(response.responseText);if (jsonRespone.response.success == true) {debugger;var jsonRespone = Ext.JSON.decode(response.responseText);var data = jsonRespone.response.data;var currentView = currentObject.controller;var tree = currentView.down('#UserAccessDomainTree');var rootNode = tree.getRootNode();rootNode.removeAll();for (var int = 0; int < data.length; int++) {var childNode = {text : data[int].primaryDisplay,bConfig : data[int],leaf : true,icon : 'images/table_icon.png'};rootNode.appendChild(childNode);}tree.getStore().sort('text', 'ASC');UserAccessDomainGrid = currentView.up().down('#UserAccessDomainGrid').controller;UserAccessDomainGrid.setData(data);}currentObject.loadMask.hide();},failure : function(response, eopts) {eopts.loadMask.hide();Ext.MessageBox.show({title : 'Error',msg : response.statusText,icon : Ext.MessageBox.ERROR});}});},treeClick : function( me, record, item, index, e, eOpts ){if (record.data.leaf) {var UserAccessDomainGrid = this.view.up().down('#UserAccessDomainGrid');var foundRecord = UserAccessDomainGrid.store.findRecord('primaryKey',record.data.bConfig.primaryKey);UserAccessDomainGrid.setSelection(foundRecord);}var formPanel = this.getView().up().down("#UserAccessDomain");var vm = formPanel.getViewModel();var data = record.data.bConfig;vm.setData(data);},displayfieldBeforerender :function(me) {debugger;var tree = me.up('UserAccessDomainTree');var root = tree.getRootNode();var leafCount = 0;tree.store.on('fillcomplete', function(store, node) {if (node === root) {root.visitPostOrder('', function(node) {if (node.isLeaf()) {leafCount++;}});me.setValue(leafCount);}});},onTrigger1Click :	function(me) {debugger;var store =me.up('UserAccessDomainTree').store;this.reset();store.clearFilter();this.focus();},onTriggerfieldChange : function(me) {debugger;var tree = me.up().up();var v;try {v = new RegExp(me.getValue(), 'i');tree.store.filter({filterFn : function(node) {var children = node.childNodes, len = children&& children.length,visible = node.isLeaf() ? v.test(node.get('text')) : false, i;for (i = 0; i < len&& !(visible = children[i].get('visible')); i++);return visible;},id : 'titleFilter'});} catch (e) {me.markInvalid('Invalid regular expression');}},});