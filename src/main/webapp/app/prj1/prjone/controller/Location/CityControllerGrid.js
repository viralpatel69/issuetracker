Ext.define('Buzzor.prj1.prjone.controller.Location.CityControllerGrid',{extend : 'Ext.app.ViewController',alias : 'controller.CityControllerGrid',init : function() {},onGridItemClick : function(me, record, item, index, e,eOpts) {var treePanel = this.view.up().up().up().down('#CityTree');var foundNode = this.findChild(treePanel.getRootNode(), 'primaryKey', record.data.primaryKey);treePanel.setSelection(foundNode);},renderFormValue : function(val, me){debugger;store = this.view.up().down('#City').down('#'+me.column.dataIndex+'').store;return store.findRecord('primaryKey',val).data.primaryDisplay;},setData : function(data){CityControllerStore = this.view.store;CityControllerStore.removeAll();CityControllerStore.add(data);CityControllerStore.setPageSize(30);CityControllerStore.sort('primaryDisplay', 'ASC');},findChild : function(node, key, value) {var dNode = node;if (node.data.bConfig != null && node.data.bConfig[key] == value){return node;}else if (node.childNodes) {for (var index = 0; index < node.childNodes.length; index++) {dNode = this.findChild(node.childNodes[index],key, value);if (dNode) {return dNode;}}} else{return null;}}});