Ext.define('Buzzor.prj1.prjone.model.Authentication.UserAppStateModel',{"extend":"Ext.data.Model","fields":[{"name":"version_id","type":"int","defaultValue":""},{"name":"appStateId","type":"string","defaultValue":""},{"name":"appsessionid","reference":"LoginSession","defaultValue":""},{"name":"TabId","type":"string","defaultValue":""},{"name":"isActive","type":"int","defaultValue":""},{"name":"sessionDataType","type":"string","defaultValue":""},{"name":"sessionData","type":"string","defaultValue":""},{"name":"entityAudit","reference":"EntityAudit"}]});