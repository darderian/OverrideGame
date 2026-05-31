gdjs.Phase3Code = {};
gdjs.Phase3Code.localVariables = [];
gdjs.Phase3Code.idToCallbackMap = new Map();


gdjs.Phase3Code.eventsList0 = function(runtimeScene) {

};

gdjs.Phase3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.Phase3Code.eventsList0(runtimeScene);


return;

}

gdjs['Phase3Code'] = gdjs.Phase3Code;
