Ext.define('Buzzor.prj1.prjone.model.Location.DistrictModel',{"extend":"Ext.data.Model","fields":[{"name":"version_id","type":"int","defaultValue":""},{"name":"districtId","type":"string","defaultValue":""},{"name":"countryid","reference":"Country","defaultValue":""},{"name":"stateid","reference":"State","defaultValue":""},{"name":"regionid","reference":"Region","defaultValue":""},{"name":"Name","type":"string","defaultValue":""},{"name":"code2","type":"string","defaultValue":""},{"name":"districtDescription","type":"string","defaultValue":""},{"name":"districtFlag","type":"string","defaultValue":""},{"name":"districtLatitude","type":"int","defaultValue":""},{"name":"districtLongitude","type":"int","defaultValue":""},{"name":"entityAudit","reference":"EntityAudit"}]});