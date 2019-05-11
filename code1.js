gdjs.menuPrincipalCode = {};
gdjs.menuPrincipalCode.GDbtnObjects1= [];
gdjs.menuPrincipalCode.GDbtnObjects2= [];
gdjs.menuPrincipalCode.GDbtnObjects3= [];
gdjs.menuPrincipalCode.GDselecaoJogarObjects1= [];
gdjs.menuPrincipalCode.GDselecaoJogarObjects2= [];
gdjs.menuPrincipalCode.GDselecaoJogarObjects3= [];
gdjs.menuPrincipalCode.GDselecaoSairObjects1= [];
gdjs.menuPrincipalCode.GDselecaoSairObjects2= [];
gdjs.menuPrincipalCode.GDselecaoSairObjects3= [];
gdjs.menuPrincipalCode.GDmaraObjects1= [];
gdjs.menuPrincipalCode.GDmaraObjects2= [];
gdjs.menuPrincipalCode.GDmaraObjects3= [];

gdjs.menuPrincipalCode.conditionTrue_0 = {val:false};
gdjs.menuPrincipalCode.condition0IsTrue_0 = {val:false};
gdjs.menuPrincipalCode.condition1IsTrue_0 = {val:false};


gdjs.menuPrincipalCode.mapOfGDgdjs_46menuPrincipalCode_46GDselecaoJogarObjects1Objects = Hashtable.newFrom({"selecaoJogar": gdjs.menuPrincipalCode.GDselecaoJogarObjects1});gdjs.menuPrincipalCode.eventsList0x683e50 = function(runtimeScene) {

{


gdjs.menuPrincipalCode.condition0IsTrue_0.val = false;
{
gdjs.menuPrincipalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.menuPrincipalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase1", false);
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.menuPrincipalCode.eventsList0x683e50
gdjs.menuPrincipalCode.eventsList0xb2358 = function(runtimeScene) {

{

gdjs.menuPrincipalCode.GDselecaoJogarObjects1.createFrom(runtimeScene.getObjects("selecaoJogar"));

gdjs.menuPrincipalCode.condition0IsTrue_0.val = false;
{
gdjs.menuPrincipalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuPrincipalCode.mapOfGDgdjs_46menuPrincipalCode_46GDselecaoJogarObjects1Objects, runtimeScene, true, false);
}if (gdjs.menuPrincipalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.menuPrincipalCode.eventsList0x683e50(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.menuPrincipalCode.eventsList0xb2358


gdjs.menuPrincipalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.menuPrincipalCode.GDbtnObjects1.length = 0;
gdjs.menuPrincipalCode.GDbtnObjects2.length = 0;
gdjs.menuPrincipalCode.GDbtnObjects3.length = 0;
gdjs.menuPrincipalCode.GDselecaoJogarObjects1.length = 0;
gdjs.menuPrincipalCode.GDselecaoJogarObjects2.length = 0;
gdjs.menuPrincipalCode.GDselecaoJogarObjects3.length = 0;
gdjs.menuPrincipalCode.GDselecaoSairObjects1.length = 0;
gdjs.menuPrincipalCode.GDselecaoSairObjects2.length = 0;
gdjs.menuPrincipalCode.GDselecaoSairObjects3.length = 0;
gdjs.menuPrincipalCode.GDmaraObjects1.length = 0;
gdjs.menuPrincipalCode.GDmaraObjects2.length = 0;
gdjs.menuPrincipalCode.GDmaraObjects3.length = 0;

gdjs.menuPrincipalCode.eventsList0xb2358(runtimeScene);
return;
}
gdjs['menuPrincipalCode'] = gdjs.menuPrincipalCode;
