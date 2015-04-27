Ext.define('Buzzor.prj1.prjone.view.Location.RegionGrid',{"customWidgetType":"vdGrid","displayName":"Region","title":"Details Grid","name":"RegionGrid","itemId":"RegionGrid","restURL":"/Region","controller":"RegionControllerGrid","store":[],"bodyPadding":10,"requires":["Buzzor.prj1.prjone.controller.Location.RegionControllerGrid"],"columns":[{"header":"active_status","dataIndex":"active_status","hidden":true,"flex":1},{"header":"created_by","dataIndex":"created_by","hidden":true,"flex":1},{"header":"created_date","dataIndex":"created_date","hidden":true,"flex":1},{"header":"txn_access_code","dataIndex":"txn_access_code","hidden":true,"flex":1},{"header":"updated_by","dataIndex":"updated_by","hidden":true,"flex":1},{"header":"updated_date","dataIndex":"updated_date","hidden":true,"flex":1},{"header":"version_id","dataIndex":"version_id","hidden":true,"flex":1},{"header":"Region Id","dataIndex":"regionId","hidden":true,"flex":1},{"header":"primaryDisplay","dataIndex":"primaryDisplay","hidden":true},{"header":"primaryKey","dataIndex":"primaryKey","hidden":true},{"header":"Country","dataIndex":"countryId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"State","dataIndex":"stateId","hidden":true,"renderer":"renderFormValue","flex":1},{"header":"Region Name","dataIndex":"regionName","hidden":false,"flex":1},{"header":"Region Code 1","dataIndex":"regionCode1","hidden":false,"flex":1},{"header":"Region Code 2","dataIndex":"regionCodeChar2","hidden":false,"flex":1},{"header":"Region Description","dataIndex":"regionDescription","hidden":false,"flex":1},{"header":"Flag","dataIndex":"regionFlag","hidden":false,"flex":1},{"header":"Region Latitude","dataIndex":"regionLatitude","hidden":false,"flex":1},{"header":"Region Longitude","dataIndex":"regionLongitude","hidden":false,"flex":1}],"listeners":{"scope":"controller","itemclick":"onGridItemClick"},"extend":"Ext.grid.Panel","xtype":"RegionGrid"});