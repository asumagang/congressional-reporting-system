adstest = window.adstest || {};

adstest.removeIcon = adstest.removeIcon || function () {
    for(currentElement = $("#2").prev(); currentElement.prop("tagName") !== "LEGEND"; currentElement = $("#2").prev()){
    	currentElement.remove();
    }
};

adstest.removeIfrm = adstest.removeIfrm || function() {
	$("iframe#2-iframe").attr("src", "");
	$("iframe#2-iframe").css("display", "none");
	return false;
};

adstest.clearFields = adstest.clearFields || function () {
	$("select#iconServerHost").val("icon-qa-sf.truste-svc.net");
	$("input#iconAid").val("");
	$("input#iconPid").val("");
	$("input#iconCid").val("");
	$("select#iconPlacement").val("tr");
	$("input#iconJs").val("");
	$("input#iconWidth").val("");
	$("input#iconHeight").val("");
	$("input#iconAtlasId").val("");
	$("input#iconAdmarker").val("");
	$("select#iconProtocol").val("http");
	$("select#iconCam").val("0");
	$("#2").removeAttr("style");
	//adstest.removeIcon();
	adstest.removeIfrm();
	return false;
}

adstest.loadIcon = adstest.loadIcon || function () {
    "use strict";
    //if($("input#iconJs").val() == "regv") {
    	var s_source;
    	s_source = "http://auto-eu-consent.truste-svc.net/qa/tags.php?";
    	s_source += "icnsrv=" + $("select#iconServerHost").val();
    	s_source += "&pid=" + $("input#iconPid").val();
    	s_source += "&aid=" + $("input#iconAid").val();
    	s_source += "&cid=" + $("input#iconCid").val();
    	s_source += "&w=" + $("#iconWidth").val();
    	s_source += "&h=" + $("#iconHeight").val();
    	s_source += "&atlasId=" + $("input#iconAtlasId").val();
    	s_source += "&admarker=" + $("input#iconAdmarker").val();
    	s_source += "&cam=" + $("#iconCam").val();
    	s_source += "&iframes=";
    	s_source += "&iframetype=";
    	s_source += "&feat=";
    	s_source += "&mod=";
    	s_source += "&prot=" + $("#iconProtocol").val();
    	if($("#iconPlacement").val().length > 0){
    		s_source += "&plc=" + $("#iconPlacement").val();
    	}
    	s_source += "&js=" + $("input#iconJs").val();
    	utils.loadIframe(s_source);
    	
    	//, function () {
//    	    $("#adIconLoadingMessage").css("display", "none");
//    	    $("body").trigger('load');
//    	    $("#2").css("background-color", "#F9FCC6");
//    	});
//    }
//    else {
//	    var s_source;
//	    $("#2").removeAttr("style");
//	    $("#adIconLoadingMessage").css("display", "block");
//	    adstest.removeIcon();
//	    s_source = "http://" + $("input#iconServerHost").val() + "/ca?pid=";
//	    
//	    s_source += $("input#iconPid").val();
//	    s_source += "&aid=";
//	    
//	    s_source += $("input#iconAid").val();
//	    s_source += "&cid=";
//	    
//	    s_source += $("input#iconCid").val();
//	    s_source += "&c=2&";
//	    if($("#iconWidth").val().length !== ""){ 
//	        s_source += "w=";
//	        s_source += $("#iconWidth").val();
//	        $("#2").css("width", $("#iconWidth").val());
//	    }
//	
//	    if ($("#iconHeight").val().length > 0) {
//	        s_source += "&h=";
//	        s_source += $("#iconHeight").val();
//	        $("#2").css("height", $("#iconHeight").val());
//	        
//	    }
//	    
//	    if($("#iconPlacement").val().length > 0){
//	        s_source += "&plc=";
//	        s_source += $("#iconPlacement").val();
//	    }
//	    
//	    utils.loadScript(s_source, function () {
//	        $("#adIconLoadingMessage").css("display", "none");
//	        $("body").trigger('load');
//	        $("#2").css("background-color", "green");
//	    });
//    }
    
    return false;
};
