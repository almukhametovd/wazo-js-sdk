!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("axios")):"function"==typeof define&&define.amd?define(["axios"],t):e["@wazo/sdk"]=t(e.axios)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t={server:null,token:null};var n=n=>{const o=`https://${t.server}/api/auth/0.1/token`,s={backend:"wazo_user",expiration:n.expiration||3600},a={auth:{username:n.username,password:n.password}};e.post(o,s,a).then(e=>((e,n)=>{t.token=e.data.data.token,n&&n(t.token)})(e,n.callback))};var o=n=>{if(t.token){const o=`https://${t.server}/api/auth/0.1/token/${t.token}`;e.delete(o).then((e=>{t.token=null,e&&e(t.token)})(n.callback))}};return{client:class{constructor(e){this.logIn=n,this.logOut=o,this.server=e}},init:e=>{t.server=e.server},logIn:n,logOut:o}});
