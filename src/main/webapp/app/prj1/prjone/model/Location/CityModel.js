Ext.define('Buzzor.prj1.prjone.model.Location.CityModel',{"extend":"Ext.data.Model","fields":[{"name":"version_id","type":"int","defaultValue":""},{"name":"cityId","type":"string","defaultValue":""},{"name":"countryid","reference":"Country","defaultValue":""},{"name":"stateid","reference":"State","defaultValue":""},{"name":"districtid","reference":"District","defaultValue":""},{"name":"cityName","type":"string","defaultValue":""},{"name":"cityCodeChar2","type":"string","defaultValue":""},{"name":"cityCode","type":"int","defaultValue":""},{"name":"cityDescription","type":"string","defaultValue":""},{"name":"cityFlag","type":"string","defaultValue":""},{"name":"cityLatitude","type":"int","defaultValue":""},{"name":"cityLongitude","type":"int","defaultValue":""},{"name":"entityAudit","reference":"EntityAudit"}]});