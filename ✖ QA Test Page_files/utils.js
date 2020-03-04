utils = window.utils || {};

//from http://www.w3schools.com/js/js_cookies.asp
utils.setCookie = utils.setCookie || function (c_name, value) {
    "use strict";
    var c_value, exdays, exdate;
    exdays = 1;
    exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
};

//from http://www.w3schools.com/js/js_cookies.asp
utils.getCookie = utils.getCookie || function (c_name) {
    "use strict";
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x === c_name) {
            return unescape(y);
        }
    }
};


//from http://www.w3schools.com/js/js_cookies.asp
utils.getCookies = utils.getCookies || function () {
    "use strict";
    var cookies = {};
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        cookies[x] = y;
    }
    return cookies;
};



//from http://stackoverflow.com/a/5977055
utils.deleteCookie = utils.deleteCookie || function (c_name) {
    "use strict";
    document.cookie = encodeURIComponent(c_name) + "=deleted; expires=" + new Date(0).toUTCString() + "path=/";
};

//works only on the test page domain cookies
utils.deleteAllCookies = utils.deleteAllCookies || function () {
    "use strict";
    var cookieNames = document.cookie.match(/\w+(?==)/g) || null;
    if (cookieNames) {
        for (var index = 0; index < cookieNames.length; index++) {
            utils.deleteCookie(cookieNames[index]);
        }
    }
}

utils.getStorageData = utils.getStorageData || function(type){
    "use strict";
    var i = 0, oJson = {}, sKey, storageObj; 
    
    switch(type){
        case "local":
            storageObj = window.localStorage;
            break;
        case "session":
            storageObj = window.sessionStorage;
            break;
        default:
            storageObj = null;
            utils.log("Invalid storage type", 2, "log");
            break;
    }
    
    if(storageObj){
	    try {
	        while ((sKey = storageObj.key(i))) {
	            if(!(typeof oJson[sKey] === "object")){
	        	    oJson[sKey] = storageObj.getItem(sKey);
	            }
	            i++;
	        }
	    } catch(e){}
	} else {
	    oJson = null;
	}
    
    return oJson;    
};

utils.displayObjectToDiv = utils.displayObjectToDiv || function(obj, id){
    "use strict";
    var div, table, alertDiv, thead, tr, th, tbody, td, pre,json, s_json, isJson, h4, p;
    
    div = document.getElementById(id);
    
    if(typeof obj === "object") {
	    table = document.createElement("table");
	    thead = document.createElement("thead");
	    tr    = document.createElement("tr");
	    
	    th = document.createElement("th");
	    th.innerHTML = "Name";
	    tr.appendChild(th);
	    
	    th = document.createElement("th");
	    th.innerHTML = "Value";
	    tr.appendChild(th);
	    
	    thead.appendChild(tr);
	    table.appendChild(thead);
	    
	    tbody = document.createElement("tbody");
	        
	   
	    for (var prop in obj) {
	        isJson = false;
	        if (obj.hasOwnProperty(prop)) {
	            tr = document.createElement("tr");
	            
	            td = document.createElement("td");
	            td.innerHTML = prop;
	            tr.appendChild(td);
	            
	            td = document.createElement("td");
	            
	            try {
	                if(JSON) {
	                    json   = JSON.parse(obj[prop]);
	                    s_json = JSON.stringify(json, null, 2);
	                } else {
	                    json = eval("("+obj[prop]+")");
	                    s_json = obj[prop];	
	                }
	                isJson = typeof json === "object";
	            } catch (e) {
	                s_json = obj[prop];	
	            }
	            
	            if(isJson){
	                pre = document.createElement("pre");
	                pre.innerHTML = s_json;
	                td.appendChild(pre);
	            } else {
	                td.innerHTML = s_json;
	            }
	            tr.appendChild(td);
	            tbody.appendChild(tr);
	        }
	    }
	    
	    table.appendChild(tbody);
	    table.className = "table";
	    div.innerHTML = "";
	    div.appendChild(table);    
	} else { 
	    alertDiv = document.createElement("div");
	    alertDiv.className = "alert alert-block";
	    h4 = document.createElement("h4");
	    h4.innerHTML = "Object not supported!";
	    p = document.createElement("p");
	    p.innerHTML = obj;
	    alertDiv.appendChild(h4);
	    alertDiv.appendChild(p);
	    
	    div.innerHTML = "";
	    div.appendChild(alertDiv);	
	}
};


utils.listenToEvent = utils.listenToEvent || function (obj, etype, fn) {
    "use strict";
    var retVal;
    try {
        if (obj.addEventListener) {
            obj.addEventListener(etype, fn, false);
            retVal = true;
        } else if (obj.attachEvent) {
            retVal = obj.attachEvent("on" + etype, fn);
        } else {
            utils.log("Browser does not support listening to events", 2, "log");
            retVal = false;
        }
    } catch (e) {
        utils.log(e.message, 2, "log");
        retVal = false;
    }
    return retVal;
};

utils.removeListener = utils.removeListener || function (obj, etype, fn) {
    "use strict";
    var retVal;
    try {
        if (obj.removeEventListener) {
            obj.removeEventListener(etype, fn, false);
            retVal = true;
        } else if (obj.detachEvent) {
            retVal = obj.detachEvent("on" + etype, fn);
        } else {
            utils.log("Browser does not support removing events", 2, "log");
            retVal = false;
        }
    } catch (e) {
        utils.log(e.message, 2, "log");
        retVal = false;
    }
    return retVal;
};

//from http://stackoverflow.com/a/7220510
utils.jsonHighlight = utils.jsonHighlight || function (json) {
    "use strict";
    
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

utils.log = utils.log || function (message, type, outId) {
    "use strict";

    var logDiv = document.getElementById(outId);
    var divH, divMsg;

    divMsg = document.createElement("div");

    switch (type) {
        case 0:
            //an ordinary log
            divMsg.className = "alert alert-info";
            break;
        case 1:
            //an API message log
            divMsg.className = "alert alert-success";
            break;
        case 2:
            // an error log 
            divMsg.className = "alert alert-error";
            break;
        default:
    }

    divMsg.innerHTML = message;
    logDiv.appendChild(divMsg);
    logDiv.scrollTop = logDiv.scrollHeight;
};

utils.clearDiv = utils.clearDiv || function (id) {
    "use strict";
    var logDiv = document.getElementById(id);
    logDiv.innerHTML = "";
};

utils.loadScript = utils.loadScript || function (src, callback) {
    "use strict";
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.async = false;

    s.onreadystatechange = s.onload = function () {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    
    // use body if available. more safe in IE
    (document.body || head).appendChild(s);
};


utils.loadIframe = utils.loadIframe || function (src) { //, callback) {
	"use strict";
	var iFrm = (document.getElementById("2-iframe") || head);
//	iFrm.onreadystatechange = iFrm.onload = function () {
//	    var state = iFrm.readyState;
//	    if (!callback.done && (!state || /loaded|complete/.test(state))) {
//	        callback.done = true;
//	        callback();
//	    }
//	};
	
	iFrm.style.cssText = "width: 100%; height: 500px; display:block";
	iFrm.setAttribute("src", src);
}