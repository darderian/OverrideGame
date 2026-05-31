gdjs.Phase1Code = {};
gdjs.Phase1Code.localVariables = [];
gdjs.Phase1Code.idToCallbackMap = new Map();
gdjs.Phase1Code.GDPlayerObjects1= [];
gdjs.Phase1Code.GDPlayerObjects2= [];
gdjs.Phase1Code.GDPlayerObjects3= [];
gdjs.Phase1Code.GDFloorObjects1= [];
gdjs.Phase1Code.GDFloorObjects2= [];
gdjs.Phase1Code.GDFloorObjects3= [];
gdjs.Phase1Code.GDGroundObjects1= [];
gdjs.Phase1Code.GDGroundObjects2= [];
gdjs.Phase1Code.GDGroundObjects3= [];
gdjs.Phase1Code.GDBulletObjects1= [];
gdjs.Phase1Code.GDBulletObjects2= [];
gdjs.Phase1Code.GDBulletObjects3= [];
gdjs.Phase1Code.GDEnemyObjects1= [];
gdjs.Phase1Code.GDEnemyObjects2= [];
gdjs.Phase1Code.GDEnemyObjects3= [];
gdjs.Phase1Code.GDLifeObjects1= [];
gdjs.Phase1Code.GDLifeObjects2= [];
gdjs.Phase1Code.GDLifeObjects3= [];
gdjs.Phase1Code.GDLifeValueObjects1= [];
gdjs.Phase1Code.GDLifeValueObjects2= [];
gdjs.Phase1Code.GDLifeValueObjects3= [];


gdjs.Phase1Code.eventsList0 = function(runtimeScene) {

};gdjs.Phase1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("jumping");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects2[k] = gdjs.Phase1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects2[k] = gdjs.Phase1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11960628);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("walking");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects1[k] = gdjs.Phase1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects1[k] = gdjs.Phase1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects1[k] = gdjs.Phase1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle-front");
}
}
}

}


};gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Phase1Code.GDEnemyObjects1});
gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Phase1Code.GDPlayerObjects1});
gdjs.Phase1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Phase1Code.GDEnemyObjects1, gdjs.Phase1Code.GDEnemyObjects2);

gdjs.copyArray(gdjs.Phase1Code.GDPlayerObjects1, gdjs.Phase1Code.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDPlayerObjects2[i].getX() < (( gdjs.Phase1Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.Phase1Code.GDEnemyObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects2[k] = gdjs.Phase1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Phase1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDEnemyObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

/* Reuse gdjs.Phase1Code.GDEnemyObjects1 */
/* Reuse gdjs.Phase1Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDPlayerObjects1[i].getX() > (( gdjs.Phase1Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Phase1Code.GDEnemyObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects1[k] = gdjs.Phase1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Phase1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.Phase1Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Phase1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDEnemyObjects1Objects, gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDPlayerObjects1Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDEnemyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDEnemyObjects1[k] = gdjs.Phase1Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDEnemyObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Phase1Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Phase1Code.GDBulletObjects1});
gdjs.Phase1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Phase1Code.GDPlayerObjects1, gdjs.Phase1Code.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects2[k] = gdjs.Phase1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Phase1Code.GDBulletObjects1, gdjs.Phase1Code.GDBulletObjects2);

{for(var i = 0, len = gdjs.Phase1Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDBulletObjects2[i].addForce(-(1000), 0, 1);
}
}
}

}


{

/* Reuse gdjs.Phase1Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects1[k] = gdjs.Phase1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Phase1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDBulletObjects1[i].addForce(1000, 0, 1);
}
}
}

}


};gdjs.Phase1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11965780);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects1);
gdjs.Phase1Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDBulletObjects1Objects, (( gdjs.Phase1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Phase1Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Phase1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Phase1Code.GDPlayerObjects1[0].getPointY("")), "");
}

{ //Subevents
gdjs.Phase1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Phase1Code.GDBulletObjects2});
gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Phase1Code.GDEnemyObjects2});
gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Phase1Code.GDEnemyObjects1});
gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Phase1Code.GDPlayerObjects1});
gdjs.Phase1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Phase1Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Phase1Code.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDBulletObjects2Objects, gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11968124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDBulletObjects2 */
/* Reuse gdjs.Phase1Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Phase1Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDEnemyObjects2[i].getBehavior("Health").Hit(1, false, false, null);
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Phase1Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Phase1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDEnemyObjects1Objects, gdjs.Phase1Code.mapOfGDgdjs_9546Phase1Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11969420);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LifeValue"), gdjs.Phase1Code.GDLifeValueObjects1);
/* Reuse gdjs.Phase1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, false, false, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.Phase1Code.GDLifeValueObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDLifeValueObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.Phase1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Phase1Code.GDPlayerObjects1[0].getBehavior("Health").Health(null))));
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("Flash").Flash(0.5, null);
}
}
}

}


};gdjs.Phase1Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDPlayerObjects2[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDPlayerObjects2[k] = gdjs.Phase1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Phase1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Phase1Code.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Phase1Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Phase1Code.GDEnemyObjects1[i].getBehavior("Health").Health(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Phase1Code.GDEnemyObjects1[k] = gdjs.Phase1Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Phase1Code.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Phase1Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Phase1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Phase1Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LifeValue"), gdjs.Phase1Code.GDLifeValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects1[i].getBehavior("Health").SetHealth(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDLifeValueObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDLifeValueObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Phase1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Phase1Code.GDPlayerObjects1[i].setLayer("5");
}
}
}

}


{


gdjs.Phase1Code.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Phase1Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Phase1Code.GDPlayerObjects1.length !== 0 ? gdjs.Phase1Code.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{


gdjs.Phase1Code.eventsList1(runtimeScene);
}


{


gdjs.Phase1Code.eventsList3(runtimeScene);
}


{


gdjs.Phase1Code.eventsList5(runtimeScene);
}


{


gdjs.Phase1Code.eventsList6(runtimeScene);
}


{


gdjs.Phase1Code.eventsList7(runtimeScene);
}


};

gdjs.Phase1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Phase1Code.GDPlayerObjects1.length = 0;
gdjs.Phase1Code.GDPlayerObjects2.length = 0;
gdjs.Phase1Code.GDPlayerObjects3.length = 0;
gdjs.Phase1Code.GDFloorObjects1.length = 0;
gdjs.Phase1Code.GDFloorObjects2.length = 0;
gdjs.Phase1Code.GDFloorObjects3.length = 0;
gdjs.Phase1Code.GDGroundObjects1.length = 0;
gdjs.Phase1Code.GDGroundObjects2.length = 0;
gdjs.Phase1Code.GDGroundObjects3.length = 0;
gdjs.Phase1Code.GDBulletObjects1.length = 0;
gdjs.Phase1Code.GDBulletObjects2.length = 0;
gdjs.Phase1Code.GDBulletObjects3.length = 0;
gdjs.Phase1Code.GDEnemyObjects1.length = 0;
gdjs.Phase1Code.GDEnemyObjects2.length = 0;
gdjs.Phase1Code.GDEnemyObjects3.length = 0;
gdjs.Phase1Code.GDLifeObjects1.length = 0;
gdjs.Phase1Code.GDLifeObjects2.length = 0;
gdjs.Phase1Code.GDLifeObjects3.length = 0;
gdjs.Phase1Code.GDLifeValueObjects1.length = 0;
gdjs.Phase1Code.GDLifeValueObjects2.length = 0;
gdjs.Phase1Code.GDLifeValueObjects3.length = 0;

gdjs.Phase1Code.eventsList8(runtimeScene);
gdjs.Phase1Code.GDPlayerObjects1.length = 0;
gdjs.Phase1Code.GDPlayerObjects2.length = 0;
gdjs.Phase1Code.GDPlayerObjects3.length = 0;
gdjs.Phase1Code.GDFloorObjects1.length = 0;
gdjs.Phase1Code.GDFloorObjects2.length = 0;
gdjs.Phase1Code.GDFloorObjects3.length = 0;
gdjs.Phase1Code.GDGroundObjects1.length = 0;
gdjs.Phase1Code.GDGroundObjects2.length = 0;
gdjs.Phase1Code.GDGroundObjects3.length = 0;
gdjs.Phase1Code.GDBulletObjects1.length = 0;
gdjs.Phase1Code.GDBulletObjects2.length = 0;
gdjs.Phase1Code.GDBulletObjects3.length = 0;
gdjs.Phase1Code.GDEnemyObjects1.length = 0;
gdjs.Phase1Code.GDEnemyObjects2.length = 0;
gdjs.Phase1Code.GDEnemyObjects3.length = 0;
gdjs.Phase1Code.GDLifeObjects1.length = 0;
gdjs.Phase1Code.GDLifeObjects2.length = 0;
gdjs.Phase1Code.GDLifeObjects3.length = 0;
gdjs.Phase1Code.GDLifeValueObjects1.length = 0;
gdjs.Phase1Code.GDLifeValueObjects2.length = 0;
gdjs.Phase1Code.GDLifeValueObjects3.length = 0;


return;

}

gdjs['Phase1Code'] = gdjs.Phase1Code;
