gdjs.SplashCode = {};
gdjs.SplashCode.GDalvwObjects1= [];
gdjs.SplashCode.GDalvwObjects2= [];
gdjs.SplashCode.GDsplashObjects1= [];
gdjs.SplashCode.GDsplashObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};


gdjs.SplashCode.eventsList0xb0cf8 = function(runtimeScene) {

{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "trocaTela");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menuPrincipal", false);
}}

}


}; //End of gdjs.SplashCode.eventsList0xb0cf8


gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.SplashCode.GDalvwObjects1.length = 0;
gdjs.SplashCode.GDalvwObjects2.length = 0;
gdjs.SplashCode.GDsplashObjects1.length = 0;
gdjs.SplashCode.GDsplashObjects2.length = 0;

gdjs.SplashCode.eventsList0xb0cf8(runtimeScene);
return;
}
gdjs['SplashCode'] = gdjs.SplashCode;
