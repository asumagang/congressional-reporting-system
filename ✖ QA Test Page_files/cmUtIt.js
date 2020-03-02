/**/
cmut = window.cmut || {};
cmut.fooUT = cmut.fooUT || function(){
     ok( 1 == "1", "Passed!" );
};

cmut.tconsole = cmut.tconsole || function(){
	var spyObj = sinon.spy(window.console, "log");
    ok(TRUSTE_CMAPI_DEBUG.tconsole.log("testlog"), "Normal use of tconsole.log");
    ok(spyObj.called, "console.log is called");
    spyObj.reset();
    
    ok(TRUSTE_CMAPI_DEBUG.tconsole.log(null), "debug message null");
    ok(spyObj.called, "console.log is called");
    spyObj.reset();
    
    
//    var debugVal = TRUSTE_CMAPI_DEBUG.tconsole.isDebug;
//    TRUSTE_CMAPI_DEBUG.tconsole.isDebug = false;
//    ok(!TRUSTE_CMAPI_DEBUG.tconsole.log("testlog"), "isDebug is false");
//    ok(!spyObj.called, "console.log is not called");  
//    TRUSTE_CMAPI_DEBUG.tconsole.isDebug = debugVal;
    
    spyObj.restore();
};

cmut.isCapable = cmut.isCapable || function(){
	var origCapabilities = TRUSTE_CMAPI_DEBUG.fake.capabilities;
	
	//empty capabilities
	TRUSTE_CMAPI_DEBUG.fake.capabilities = [];
	ok(TRUSTE_CMAPI_DEBUG.isCapable("capability") === 0, "empty capability");
	
	//capability does not exist
	TRUSTE_CMAPI_DEBUG.fake.capabilities = origCapabilities;
	ok(TRUSTE_CMAPI_DEBUG.isCapable("capability") === 0, "capability does not exist");
	
	//action param null
	ok(TRUSTE_CMAPI_DEBUG.isCapable(null) === 0, "action param null");
	
	//valid action
	ok(TRUSTE_CMAPI_DEBUG.isCapable("getConsent"), "valid capability");
};

cmut.getJSON = cmut.getJSON || function() {
	var spyObj;
	
	var param = null;
	var returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, null, "parameter is null");
	
	param = "abcd";
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, false, "parameter is string with alphabetical characters");
	
	param = "1234"
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, 1234, "parameter is string with numeric characters");
	
	param = 1234
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, param, "parameter is a number");
	
	param = "{\"a\":\"b\",\"c\":{\"d\":\"e\"}}";
	paramObj ={"a":"b","c":{"d":"e"}}; 
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(paramObj, returnVal, "parameter is a valid json string");
	
	param ={"a":"b","c":{"d":"e"}}; 
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, param, "parameter is a valid json object");
	
	param = "{a:b,c:{d:e}}";
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, null, "parameter is an invalid json string");
	
	origJSON = window.JSON;
	window.JSON = null;
	
	param = null;
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, null, "window.JSON is null - parameter is null");
	
	param = "abcd";
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, false, "window.JSON is null - parameter is string with alphabetical characters");
	
	param = "1234"
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, 1234, "window.JSON is null - parameter is string with numeric characters");
	
	param = 1234
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, param, "window.JSON is null - parameter is a number");
	
	param = "{\"a\":\"b\",\"c\":{\"d\":\"e\"}}";
	paramObj ={"a":"b","c":{"d":"e"}}; 
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, paramObj, "window.JSON is null - parameter is a valid json string");
	
	param ={"a":"b","c":{"d":"e"}}; 
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, param, "window.JSON is null - parameter is a valid json object");
	
	param = "{a:b,c:{d:e}}";
	returnVal = TRUSTE_CMAPI_DEBUG.getJSON(param);
	deepEqual(returnVal, null, "window.JSON is null - parameter is an invalid json string");
	
    window.JSON = origJSON;
	origJSON = null;
	delete origJSON;
};

cmut.getStorage = cmut.getStorage || function(){
    
};

cmut.unittest = {
    "tconsole": cmut.tconsole,
    "isCapable": cmut.isCapable,
    "getJSON": cmut.getJSON,
    "getStorage": cmut.getStorage,
    "init": cmut.fooUT,
    "loadConsentDecision": cmut.fooUT,
    "sendEvent": cmut.fooUT,
    "sendError": cmut.fooUT,
    "sendPost": cmut.fooUT,
    "isAuthorized": cmut.fooUT,
    "sendUpdatesTo": cmut.fooUT,
    "getBType": cmut.fooUT,
    "getTypePermission": cmut.fooUT,
    "updatePreferences": cmut.fooUT,
    "apiDo": cmut.fooUT,
    "processMessage": cmut.fooUT,
    "messageListener": cmut.fooUT
};

cmut.numUnitTest              = 19;
cmut.numUnitTestExecuted      = 0;
cmut.currentlyTesting         = "";
cmut.currentluTestingCallback = null;

cmut.startUT = cmut.startUT || function(){
	$('#noCmIconAlert').css("display", "none");
	var bar = $('.bar');
    
    QUnit.testDone(function( details ) {
        cmut.numUnitTestExecuted = cmut.numUnitTestExecuted + 1;
        bar.width(cmut.numUnitTestExecuted*16);
        bar.text("Executing " + cmut.numUnitTestExecuted + " of " + cmut.numUnitTest  + " unit test")
    });
    
    for(var name in cmut.unittest){
        module(name);
    	test(name, cmut.unittest[name]);    
    }
    
    $('.progress').css("display", "none");
    $('#qunit').css("display", "block");
    $('#qunit-fixture').css("display", "block");
    $('#qunit-reload-btn').css("display", "block");
};
