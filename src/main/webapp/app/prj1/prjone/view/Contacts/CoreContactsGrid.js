Ext.define('Buzzor.prj1.prjone.view.Contacts.CoreContactsGrid',{"customWidgetType":"vdGrid","displayName":"Core Contacts","title":"Details Grid","name":"CoreContactsGrid","itemId":"CoreContactsGrid","restURL":"/CoreContacts","controller":"CoreContactsControllerGrid","store":[],"bodyPadding":10,"requires":["Buzzor.prj1.prjone.controller.Contacts.CoreContactsControllerGrid"],"columns":[{"header":"active_status","dataIndex":"active_status","hidden":true,"flex":1},{"header":"created_by","dataIndex":"created_by","hidden":true,"flex":1},{"header":"created_date","dataIndex":"created_date","hidden":true,"flex":1},{"header":"txn_access_code","dataIndex":"txn_access_code","hidden":true,"flex":1},{"header":"updated_by","dataIndex":"updated_by","hidden":true,"flex":1},{"header":"updated_date","dataIndex":"updated_date","hidden":true,"flex":1},{"header":"version_id","dataIndex":"version_id","hidden":true,"flex":1},{"header":"Contact Id","dataIndex":"contactId","hidden":true,"flex":1},{"header":"primaryKey","dataIndex":"primaryKey","hidden":true},{"header":"Title","dataIndex":"titleId","hidden":false,"renderer":"renderFormValue","flex":1},{"header":"First Name","dataIndex":"firstName","hidden":false,"flex":1},{"header":"Middle Name","dataIndex":"middleName","hidden":false,"flex":1},{"header":"Last Name","dataIndex":"lastName","hidden":false,"flex":1},{"header":"Native Language Code","dataIndex":"nativeLanguageCode","hidden":false,"renderer":"renderFormValue","flex":1},{"header":"Native Title","dataIndex":"nativeTitle","hidden":false,"flex":1},{"header":"Native First Name","dataIndex":"nativeFirstName","hidden":false,"flex":1},{"header":"Native Middle Name","dataIndex":"nativeMiddleName","hidden":false,"flex":1},{"header":"Native LastName","dataIndex":"nativeLastName","hidden":false,"flex":1},{"header":"Gender","dataIndex":"genderId","hidden":false,"renderer":"renderFormValue","flex":1},{"header":"DOB","dataIndex":"dateofbirth","hidden":false,"flex":1},{"header":"Age","dataIndex":"age","hidden":false,"flex":1},{"header":"Approx DOB","dataIndex":"approximateDOB","hidden":false,"flex":1}],"listeners":{"scope":"controller","itemclick":"onGridItemClick"},"extend":"Ext.grid.Panel","xtype":"CoreContactsGrid"});