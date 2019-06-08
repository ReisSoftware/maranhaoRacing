gdjs.showScoreCode = {};
gdjs.showScoreCode.GDt1Objects1= [];
gdjs.showScoreCode.GDt1Objects2= [];
gdjs.showScoreCode.GDscoreTxtObjects1= [];
gdjs.showScoreCode.GDscoreTxtObjects2= [];
gdjs.showScoreCode.GDselMenuObjects1= [];
gdjs.showScoreCode.GDselMenuObjects2= [];
gdjs.showScoreCode.GDt2Objects1= [];
gdjs.showScoreCode.GDt2Objects2= [];
gdjs.showScoreCode.GDt3Objects1= [];
gdjs.showScoreCode.GDt3Objects2= [];
gdjs.showScoreCode.GDcRegresObjects1= [];
gdjs.showScoreCode.GDcRegresObjects2= [];
gdjs.showScoreCode.GDfundoObjects1= [];
gdjs.showScoreCode.GDfundoObjects2= [];

gdjs.showScoreCode.conditionTrue_0 = {val:false};
gdjs.showScoreCode.condition0IsTrue_0 = {val:false};
gdjs.showScoreCode.condition1IsTrue_0 = {val:false};


gdjs.showScoreCode.mapOfGDgdjs_46showScoreCode_46GDselMenuObjects1Objects = Hashtable.newFrom({"selMenu": gdjs.showScoreCode.GDselMenuObjects1});gdjs.showScoreCode.eventsList0x706e30 = function(runtimeScene) {

{


gdjs.showScoreCode.condition0IsTrue_0.val = false;
{
gdjs.showScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.showScoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuPrincipal", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


}; //End of gdjs.showScoreCode.eventsList0x706e30
gdjs.showScoreCode.eventsList0xb0cf8 = function(runtimeScene) {

{


{
gdjs.showScoreCode.GDscoreTxtObjects1.createFrom(runtimeScene.getObjects("scoreTxt"));
{for(var i = 0, len = gdjs.showScoreCode.GDscoreTxtObjects1.length ;i < len;++i) {
    gdjs.showScoreCode.GDscoreTxtObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{



}


{


gdjs.showScoreCode.condition0IsTrue_0.val = false;
{
gdjs.showScoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "nCont");
}if (gdjs.showScoreCode.condition0IsTrue_0.val) {
gdjs.showScoreCode.GDcRegresObjects1.createFrom(runtimeScene.getObjects("cRegres"));
{for(var i = 0, len = gdjs.showScoreCode.GDcRegresObjects1.length ;i < len;++i) {
    gdjs.showScoreCode.GDcRegresObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "nCont");
}}

}


{


gdjs.showScoreCode.condition0IsTrue_0.val = false;
{
gdjs.showScoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "toMenu");
}if (gdjs.showScoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuPrincipal", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{



}


{

gdjs.showScoreCode.GDselMenuObjects1.createFrom(runtimeScene.getObjects("selMenu"));

gdjs.showScoreCode.condition0IsTrue_0.val = false;
{
gdjs.showScoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.showScoreCode.mapOfGDgdjs_46showScoreCode_46GDselMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.showScoreCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.showScoreCode.eventsList0x706e30(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.showScoreCode.eventsList0xb0cf8


gdjs.showScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.showScoreCode.GDt1Objects1.length = 0;
gdjs.showScoreCode.GDt1Objects2.length = 0;
gdjs.showScoreCode.GDscoreTxtObjects1.length = 0;
gdjs.showScoreCode.GDscoreTxtObjects2.length = 0;
gdjs.showScoreCode.GDselMenuObjects1.length = 0;
gdjs.showScoreCode.GDselMenuObjects2.length = 0;
gdjs.showScoreCode.GDt2Objects1.length = 0;
gdjs.showScoreCode.GDt2Objects2.length = 0;
gdjs.showScoreCode.GDt3Objects1.length = 0;
gdjs.showScoreCode.GDt3Objects2.length = 0;
gdjs.showScoreCode.GDcRegresObjects1.length = 0;
gdjs.showScoreCode.GDcRegresObjects2.length = 0;
gdjs.showScoreCode.GDfundoObjects1.length = 0;
gdjs.showScoreCode.GDfundoObjects2.length = 0;

gdjs.showScoreCode.eventsList0xb0cf8(runtimeScene);
return;
}
gdjs['showScoreCode'] = gdjs.showScoreCode;
