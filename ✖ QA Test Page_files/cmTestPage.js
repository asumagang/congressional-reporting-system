cmtest = window.cmtest || {};

cmtest.onLoadAction = cmtest.onLoadAction || function () {
    "use strict";
   
    $("#setTpid").click(function () {
        utils.setCookie("te-tpid", "12345");
        var c = utils.getCookie("te-tpid");
        $("#tpid-span").text("TPID sample value set " + c);
    });
    
    $("#loadConsentButton").click(function () {
        window.location.reload();
    });

    $("#setReportLevel").click(cmtest.setReportLevel );

    $("#cookieLogMenu").click(function(){
        cmtest.displayCookies(); 
        cmtest.displayStorage("local"); 
        cmtest.displayStorage("session");
    });
    
    $("#getConsentButton").click( function(){
    	cmtest.getConsent();
    });
    
    $("#resetConsentFieldsButton").click(cmtest.clearConsentFields);
    $("#getConsentDecisionButton").click(cmtest.getConsentDecision);
    $("#clearLog").click(function(){
        utils.clearDiv("log");
    });
    
    $("#clearThirdPartyMessagesLog").click(function(){
        utils.clearDiv("thirdPartyMessagesLog");
    });
  
    $("#domain").change(function () {
        $("#aDomain").val($("#domain").val());
        
        if ($("#domain").val().length > 0) {
            utils.setCookie("domain", $("#domain").val());
        } else {
            utils.deleteCookie("domain");
        }
    });

    $("#country").change(function () {
        if ($("#country").val().length > 0) {
            utils.setCookie("country", $("#country").val());
        } else {
            utils.deleteCookie("country");
        }
    });

    $("#tDomain").change(function () {
        if ($("#tDomain").val().length > 0) {
            utils.setCookie("targetDomain", $("#tDomain").val());
        } else {
            utils.deleteCookie("targetDomain");
        }
    });

    $("#cmProtocol").change(function () {
        utils.setCookie("protocol", $("#cmProtocol").prop("selectedIndex"));
    });
    
    $("#cmTextIcon").change(function () {
        utils.setCookie("textIcon", $("#cmTextIcon").prop("selectedIndex"));
    });
    
    $("#cmDebug").change(function () {
        utils.setCookie("debug", $("#cmDebug").prop("selectedIndex"));
    });

    $("#cmServerSelect").change(function () {
        utils.setCookie("server", $("#cmServerSelect").prop("selectedIndex"));
    });

    $("#cmLanguage").change(function () {
    if ($("#cmLanguage").val().length > 0) {
            utils.setCookie("language", $("#cmLanguage").val());
        } else {
            utils.deleteCookie("language");
        }
    });
    
    $("#cmJS").change(function () {
        if ($("#cmJS").val().length > 0) {
                utils.setCookie("js", $("#cmJS").val());
            } else {
                utils.deleteCookie("js");
            }
        });

    /**
     * For adstest events
     */
    //---------------------------------------------------------
    $("#resetIconFieldsButton").click(adstest.clearFields);
    $("#loadIconButton").click(adstest.loadIcon);
    //---------------------------------------------------------
    
    window.prettyPrint && prettyPrint();
    cmtest.reloadCMParamData();
    
    $('.changing-input').change(function(){
    
    	var requiredClicks    = $("#required").val();
    	var functionalClicks  = $("#functional").val();
    	var advertisingClicks = $("#advertising").val();
    	var iconClicks        = parseInt($("#close").val()) + parseInt($("#agree").val()) + parseInt($("#moreinfo").val()) + (parseInt(requiredClicks)*2) + (parseInt(functionalClicks)*2) + (parseInt(advertisingClicks) * 2);
    	var closeClicks       = parseInt($("#close").val()) + parseInt(requiredClicks) + parseInt(functionalClicks) + parseInt(advertisingClicks);
    	var agreeClicks       = parseInt($("#agree").val()) + parseInt(requiredClicks) + parseInt(functionalClicks) + parseInt(advertisingClicks);
    	var moreinfoClicks    = $("#moreinfo").val();
    	
    	
    	var html = "Icon clicks = " + iconClicks + "<br />" +
    				"Close clicks = " + closeClicks + "<br />" +
    				"Agree clicks = " + agreeClicks + "<br />" +
    				"Required clicks = " + requiredClicks + "<br />" +
    				"Functional clicks = " + functionalClicks + "<br />" +
    				"Advertising clicks = " + advertisingClicks + "<br />" +
    				"More Info clicks = " + moreinfoClicks + "<br />";
    	
    	$('#expected').html(html);
    });
    
    $(".resizable").resizable({
        alsoResize : '#console'
    });
    
    window.onload = null;
};

cmtest.runAutomation = cmtest.runAutomation || function () {
	"use strict";
	var url = "http://jenkins.intranet.truste-labs.com/view/TRUSTe%20Cebu%20QA%20Automations/job/Selenium%20Test%20-%20Consent%20Manager%20Reporting%20Test/buildWithParameters?" +
		"close=" + $('#close').val() + 
		"&agree=" + $('#agree').val() + 
		"&required=" + $('#required').val() +
		"&functional=" + $('#functional').val() +
		"&advertising=" + $('#advertising').val() +
		"&moreinfo=" + $('#moreinfo').val();

	window.open(url, "Test");
	$("#console-title").append("<img style='margin-left: 20px;' id='loading' src='img/ajax-loader.gif'></img>");		
	setTimeout("showLoading()", 10000);
}

function showLoading() {
	$("#loading").remove();
	
	$("#console").attr("src", "http://jenkins.intranet.truste-labs.com/view/TRUSTe%20Cebu%20QA%20Automations/job/Selenium%20Test%20-%20Consent%20Manager%20Reporting%20Test/lastBuild/logText/progressiveText");
	

//	setupRefresh();
}

function setupRefresh() {
      setTimeout("refreshPage();", 1000); // milliseconds
    }
    
function refreshPage() {
	$('#console' ).attr( 'src', function ( i, val ) { return val; });
	setTimeout("refreshPage();", 5000); // milliseconds
}


cmtest.reloadCMParamData = cmtest.reloadCMParamData || function () {
    "use strict";
    
    var ls_cmProtocol        = utils.getCookie("protocol") || 0;
    var ls_cmServer          = utils.getCookie("server") || 3;
    var ls_cmDomain          = utils.getCookie("domain") || "";
    var ls_cmApiTargetDomain = utils.getCookie("targetDomain") || "";
    var ls_cmCountry         = utils.getCookie("country") || "";
    var ls_cmLanguage        = utils.getCookie("language") || "";
    var ls_cmTextIcon        = utils.getCookie("textIcon") || 1;
    var ls_cmDebug           = utils.getCookie("debug") || 1;
    var ls_cmJS              = utils.getCookie("js") || "";
    
    $("#cmProtocol").prop("selectedIndex", ls_cmProtocol);
    $("#cmServerSelect").prop("selectedIndex", ls_cmServer);
    $("#domain").val(ls_cmDomain);
    $("#aDomain").val(ls_cmDomain);
    $("#tDomain").val(ls_cmApiTargetDomain);
    $("#country").val(ls_cmCountry);
    $("#cmLanguage").val(ls_cmLanguage);
    $("#cmTextIcon").prop("selectedIndex", ls_cmTextIcon);
    $("#cmDebug").prop("selectedIndex", ls_cmDebug);
    $("#cmJS").val(ls_cmJS);

    if (ls_cmDomain.length > 0){// && ls_cmCountry !== null) {
        cmtest.loadConsentManagerScript();
    }
    return;
};

cmtest.loadConsentManagerScript = cmtest.loadConsentManager || function () {
    "use strict";
    var s_source;
    
    $("#1").text("");
    s_source = $("#cmProtocol").val();
    s_source += ($("#cmServerSelect").val()=="eu-icon-qa-sf.truste-svc.net_cdn")?"eu-icon-qa-sf.truste-svc.net":$("#cmServerSelect").val();
    s_source += ((($("#cmServerSelect").val()=="consent-st.truste.com") || ($("#cmServerSelect").val()=="eu-icon-qa-sf.truste-svc.net_cdn"))?"/get?name=notice.js&domain=":"/notice?domain=");
    s_source += $("#domain").val();
    s_source += "&";
    
    if($("#country").val() !== ""){ 
        s_source += "country=";
        s_source += $("#country").val();
    }

    s_source += "&c=1";
    if ($("#cmLanguage").val().length > 0) {
        s_source += "&language=";
        s_source += $("#cmLanguage").val();
    }
    
    if($("#cmTextIcon").prop("selectedIndex") == 0){
        s_source += "&text=true";
    }
    
    if($("#cmDebug").prop("selectedIndex") == 0){
        s_source += "&debug=true";
    }
    
    if($("#cmJS").val() !== ""){ 
        s_source += "&js=";
        s_source += $("#cmJS").val();
    }
    
    utils.loadScript(s_source, function () {
        setTimeout(cmtest.loadThirdPartyFrame, 900); 
        setTimeout(cmut.startUT, 900);
    });
    return;
};

cmtest.loadThirdPartyFrame = cmtest.loadThirdPartyFrame || function () {
    "use strict";
    var eo_newFrame = $("#postMsg");
    var eo_divContainer = $("#thirdpartyframe");

    if (eo_newFrame) {
        eo_newFrame.remove();
    	utils.log("Third party frame removed", 0, "log");
    }

    if (utils.removeListener(window, "message", cmtest.getConsentCallBack)) {
        utils.log("Previous window message API listener removed", 0, "log");
    }

    eo_newFrame = document.createElement("iframe");

    if (utils.listenToEvent(window, "message", cmtest.getConsentCallBack)) {
        utils.log("New window message API listener added", 0, "log");
    }

    eo_newFrame.src       = "http://auto-eu-portal.intranet.truste-labs.com/test/thirdparty.html";
    eo_newFrame.width     = "245";
    eo_newFrame.height    = "125";
    eo_newFrame.id        = "postMsg";
    eo_newFrame.scrolling = "no";
    eo_divContainer.append(eo_newFrame);
    return;
};

cmtest.setApiResult = cmtest.setApiResult || function (result) {
    "use strict";
    var s_resultStr, prop;
    s_resultStr  = "";
    if(typeof result === "object"){
        for (prop in result) {
            if (result.hasOwnProperty(prop)) {
                s_resultStr += prop + "&nbsp;:&nbsp;" + result[prop] + "<br />";
            }
        }
    } else {
        s_resultStr = result;
    }
    $("#apiOutput").html(s_resultStr);
};

/******************
 * event listeners
 ******************/
cmtest.getConsent = cmtest.getConsent || function () {
    "use strict";
    var eo_aDomain = $("#aDomain").val();
    var eo_tDomain = $("#tDomain").val();
    var o_apiVal;
    if (truste) {
    	
        o_apiVal = truste.cma.callApi("getConsent", eo_aDomain, eo_tDomain);
        cmtest.setApiResult(o_apiVal);
    } else {
        utils.log("Consent not loaded", 2, "log");    
    }
};

cmtest.clearConsentFields = cmtest.clearConsentFields || function () {
    "use strict";
    
    var eo_cmProtocol     = $("#cmProtocol");
    var eo_cmServerSelect = $("#cmServerSelect");
    var eo_domain         = $("#domain");
    var eo_country        = $("#country");
    var eo_cmLanguage     = $("#cmLanguage");
    var eo_cmTextIcon     = $("#cmTextIcon");
    var eo_cmDebug        = $("#cmDebug");
    var eo_cmJS        	  = $("#cmJS");

    eo_cmProtocol.prop("selectedIndex", 0);
    eo_cmServerSelect.prop("selectedIndex", 3);
    eo_domain.val("");
    eo_country.val("");
    eo_cmLanguage.val("");
    eo_cmTextIcon .prop("selectedIndex", 1); 
    eo_cmDebug.prop("selectedIndex",1);
    eo_cmJS.val("");


    utils.deleteAllCookies();
    
    if(localStorage){
        localStorage.clear();
    }
    
    if(sessionStorage){
        sessionStorage.clear();
    }
    window.location.reload(true);
};


// CM API Test
cmtest.getConsentDecision = cmtest.getConsentDecision || function () {
    "use strict";
    var o_apiVal = truste.cma.callApi("getConsentDecision", "somedomain.com");
    cmtest.setApiResult(o_apiVal);
};

cmtest.getConsentCallBack = cmtest.getConsentCallBack || function (event) {
    "use strict";
    try {
        var json,s_json;
        if(JSON) {
            json   = JSON.parse(event.data);
            s_json = JSON.stringify(json, null, 2);
        } else {
            json = eval("("+event.data+")");
            s_json = event.data;	
        }
        
        if (json && json.PrivacyManagerAPI) {
            utils.log("<pre>"+utils.jsonHighlight(s_json)+"</pre>", 1, "thirdPartyMessagesLog");
        } else {
            utils.log("<pre>"+s_json+"</pre>", 0, "log");
        }
    } catch (e) {
        utils.log(event.data, 0, "log");
    }
};

cmtest.displayStorage = cmtest.displayStorage || function(type) {
    "use strict";
    
    var outId, lsData = utils.getStorageData(type);
    
    switch(type){
        case "local":
            outId = "localStorage";
            break;
        case "session":
            outId = "sessionStorage";
            break;
        default:
            outId = null;
            break;
    }
  
    if(outId){
        if(lsData != null){
            utils.displayObjectToDiv(lsData, outId);
        } else {
            utils.displayObjectToDiv("Your current browser does not support "+ outId, outId);
        }
    }   
};

cmtest.displayCookies = cmtest.displayCookies || function() {
    "use strict";
    
    var cookies = utils.getCookies();
    utils.displayObjectToDiv(cookies, "cookies");   
};


cmtest.reportLevelChange = cmtest.reportLevelChange || function(element){
    if(element.prop("selectedIndex") == 8){
        cmtest.changeReportLevelInput(1);
    }
};

//type 0 - select, type 1 - input field
cmtest.changeReportLevelInput = cmtest.changeReportLevelInput || function(type){
    if(type == 0){
    	$("#selectReportLevel").css("display", "block");
    	$("#inputReportLevel").css("display", "none");
    	$("#reportLevel").prop("selectedIndex", 0);
    } else if(type == 1) {
    	$("#selectReportLevel").css("display", "none");
    	$("#inputReportLevel").css("display", "block");
    }
};

cmtest.setReportLevel = cmtest.setReportLevel|| function(){
    var eo_reportLevel = $("#reportLevel");
    var reportLevel;
    if(eo_reportLevel.val() === "specify"){
        reportLevel = $("#reportLevelInput").val();
    } else {
        reportLevel = eo_reportLevel.val();
    }
    cmtest.setApiResult(truste.cma.callApi("changeReportLevel","test",reportLevel));
}
window.prettyPrint && prettyPrint();
window.onload = cmtest.onLoadAction;


$('document').ready(function(){

});
