Ext.define('Buzzor.prj1.prjone.controller.Authorization.RolesControllerGrid',{extend : 'Ext.app.ViewController',alias : 'controller.RolesControllerGrid',init : function() {},onGridItemClick : function(me, record, item, index, e,eOpts) {var treePanel = this.view.up().up().up().down('#RolesTree');var foundNode = this.findChild(treePanel.getRootNode(), 'primaryKey', record.data.primaryKey);treePanel.setSelection(foundNode);},renderFormValue : function(val, me){debugger;store = this.view.up().down('#Roles').down('#'+me.column.dataIndex+'').store;return store.findRecord('primaryKey',val).data.primaryDisplay;},setData : function(data){RolesControllerStore = this.view.store;RolesControllerStore.removeAll();RolesControllerStore.add(data);RolesControllerStore.setPageSize(30);RolesControllerStore.sort('primaryDisplay', 'ASC');},findChild : function(node, key, value) {var dNode = node;if (node.data.bConfig != null && node.data.bConfig[key] == value){return node;}else if (node.childNodes) {for (var index = 0; index < node.childNodes.length; index++) {dNode = this.findChild(node.childNodes[index],key, value);if (dNode) {return dNode;}}} else{return null;}}});