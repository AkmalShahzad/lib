/**
 * Copyright (c) 2013-16 Karooya Technologies Pvt. Ltd. All Rights Reserved.
 * 
 * Description: Utility methods.
 * 
 * @author sachin
 */
function encodeBase64(str) {
  return window.btoa(encodeURIComponent(encodeURIComponent(str)));
}

function decodeBase64(str) {
  return decodeURIComponent(decodeURIComponent(window.atob(str)));
}

function getReferrer() {
  var referrer = document.referrer;
  if (!referrer || referrer === "") {
    referrer = "Direct-visit";
  }
  return referrer;
}

function getCurrentPageURL() {
  return window.location.href; 
}

function getSimpleURLParam(name) {
  if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
     return decodeURIComponent(name[1]);
}

function setCookie(cname, cvalue, exdays, domain, path) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + + ";domain=" + domain + ";path=" + path;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return undefined;
}