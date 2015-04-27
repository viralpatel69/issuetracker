Ext.define('Buzzor.prj1.prjone.view.Contacts.CommunicationTypeGrid',{"customWidgetType":"vdGrid","displayName":"Communication Type","title":"Details Grid","name":"CommunicationTypeGrid","itemId":"CommunicationTypeGrid","restURL":"/CommunicationType","controller":"CommunicationTypeControllerGrid","store":[],"bodyPadding":10,"requires":["Buzzor.prj1.prjone.controller.Contacts.CommunicationTypeControllerGrid"],"columns":[{"header":"active_status","dataIndex":"active_status","hidden":true,"flex":1},{"header":"created_by","dataIndex":"created_by","hidden":true,"flex":1},{"header":"created_date","dataIndex":"created_date","hidden":true,"flex":1},{"header":"txn_access_code","dataIndex":"txn_access_code","hidden":true,"flex":1},{"header":"updated_by","dataIndex":"updated_by","hidden":true,"flex":1},{"header":"updated_date","dataIndex":"updated_date","hidden":true,"flex":1},{"header":"version_id","dataIndex":"version_id","hidden":true,"flex":1},{"header":"commType","dataIndex":"commType","hidden":true,"flex":1},{"header":"primaryDisplay","dataIndex":"primaryDisplay","hidden":true},{"header":"primaryKey","dataIndex":"primaryKey","hidden":true},{"header":"Communication Type Name","dataIndex":"commTypeName","hidden":false,"flex":1},{"header":"Communication Type Description","dataIndex":"commTypeDescription","hidden":false,"flex":1}],"listeners":{"scope":"controller","itemclick":"onGridItemClick"},"extend":"Ext.grid.Panel","xtype":"CommunicationTypeGrid"});