gdjs.Phase4Code = {};
gdjs.Phase4Code.localVariables = [];
gdjs.Phase4Code.idToCallbackMap = new Map();


gdjs.Phase4Code.eventsList0 = function(runtimeScene) {

};

gdjs.Phase4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Phase4Code.eventsList0(runtimeScene);


return;

}

gdjs['Phase4Code'] = gdjs.Phase4Code;
