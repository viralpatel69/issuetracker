Ext.define('Buzzor.prj1.prjone.model.Authorization.RoleMenuBridgeModel',{"extend":"Ext.data.Model","fields":[{"name":"version_id","type":"int","defaultValue":""},{"name":"roleMenuMapId","type":"string","defaultValue":""},{"name":"roleid","reference":"Roles","defaultValue":""},{"name":"menuid","reference":"AppMenus","defaultValue":""},{"name":"entityAudit","reference":"EntityAudit"}]});