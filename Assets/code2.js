gdjs.Phase2Code = {};
gdjs.Phase2Code.localVariables = [];
gdjs.Phase2Code.idToCallbackMap = new Map();


gdjs.Phase2Code.eventsList0 = function(runtimeScene) {

};

gdjs.Phase2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Phase2Code.eventsList0(runtimeScene);


return;

}

gdjs['Phase2Code'] = gdjs.Phase2Code;
