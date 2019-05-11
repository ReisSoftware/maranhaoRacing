gdjs.Fase1Code = {};
gdjs.Fase1Code.GDcarroObjects1= [];
gdjs.Fase1Code.GDcarroObjects2= [];
gdjs.Fase1Code.GDcarroObjects3= [];
gdjs.Fase1Code.GDfundoObjects1= [];
gdjs.Fase1Code.GDfundoObjects2= [];
gdjs.Fase1Code.GDfundoObjects3= [];
gdjs.Fase1Code.GDsandObjects1= [];
gdjs.Fase1Code.GDsandObjects2= [];
gdjs.Fase1Code.GDsandObjects3= [];
gdjs.Fase1Code.GDinimigoObjects1= [];
gdjs.Fase1Code.GDinimigoObjects2= [];
gdjs.Fase1Code.GDinimigoObjects3= [];
gdjs.Fase1Code.GDobstaculoObjects1= [];
gdjs.Fase1Code.GDobstaculoObjects2= [];
gdjs.Fase1Code.GDobstaculoObjects3= [];
gdjs.Fase1Code.GDt1Objects1= [];
gdjs.Fase1Code.GDt1Objects2= [];
gdjs.Fase1Code.GDt1Objects3= [];
gdjs.Fase1Code.GDnVidasObjects1= [];
gdjs.Fase1Code.GDnVidasObjects2= [];
gdjs.Fase1Code.GDnVidasObjects3= [];
gdjs.Fase1Code.GDt2Objects1= [];
gdjs.Fase1Code.GDt2Objects2= [];
gdjs.Fase1Code.GDt2Objects3= [];
gdjs.Fase1Code.GDnScoreObjects1= [];
gdjs.Fase1Code.GDnScoreObjects2= [];
gdjs.Fase1Code.GDnScoreObjects3= [];
gdjs.Fase1Code.GDchaveVidaObjects1= [];
gdjs.Fase1Code.GDchaveVidaObjects2= [];
gdjs.Fase1Code.GDchaveVidaObjects3= [];
gdjs.Fase1Code.GDfaixaObjects1= [];
gdjs.Fase1Code.GDfaixaObjects2= [];
gdjs.Fase1Code.GDfaixaObjects3= [];
gdjs.Fase1Code.GDganhouObjects1= [];
gdjs.Fase1Code.GDganhouObjects2= [];
gdjs.Fase1Code.GDganhouObjects3= [];
gdjs.Fase1Code.GDperdeuObjects1= [];
gdjs.Fase1Code.GDperdeuObjects2= [];
gdjs.Fase1Code.GDperdeuObjects3= [];

gdjs.Fase1Code.conditionTrue_0 = {val:false};
gdjs.Fase1Code.condition0IsTrue_0 = {val:false};
gdjs.Fase1Code.condition1IsTrue_0 = {val:false};
gdjs.Fase1Code.condition2IsTrue_0 = {val:false};
gdjs.Fase1Code.conditionTrue_1 = {val:false};
gdjs.Fase1Code.condition0IsTrue_1 = {val:false};
gdjs.Fase1Code.condition1IsTrue_1 = {val:false};
gdjs.Fase1Code.condition2IsTrue_1 = {val:false};


gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects2Objects = Hashtable.newFrom({"carro": gdjs.Fase1Code.GDcarroObjects2});gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDobstaculoObjects2Objects = Hashtable.newFrom({"obstaculo": gdjs.Fase1Code.GDobstaculoObjects2});gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects2Objects = Hashtable.newFrom({"carro": gdjs.Fase1Code.GDcarroObjects2});gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDinimigoObjects2Objects = Hashtable.newFrom({"inimigo": gdjs.Fase1Code.GDinimigoObjects2});gdjs.Fase1Code.eventsList0x720ae8 = function(runtimeScene) {

{


{
}

}


}; //End of gdjs.Fase1Code.eventsList0x720ae8
gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects2Objects = Hashtable.newFrom({"carro": gdjs.Fase1Code.GDcarroObjects2});gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDchaveVidaObjects2Objects = Hashtable.newFrom({"chaveVida": gdjs.Fase1Code.GDchaveVidaObjects2});gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects1Objects = Hashtable.newFrom({"carro": gdjs.Fase1Code.GDcarroObjects1});gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDfaixaObjects1Objects = Hashtable.newFrom({"faixa": gdjs.Fase1Code.GDfaixaObjects1});gdjs.Fase1Code.eventsList0x685dc8 = function(runtimeScene) {

{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "pause");
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "showScore");
}}

}


}; //End of gdjs.Fase1Code.eventsList0x685dc8
gdjs.Fase1Code.eventsList0x6849f0 = function(runtimeScene) {

{


{
gdjs.Fase1Code.GDobstaculoObjects2.createFrom(runtimeScene.getObjects("obstaculo"));
{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setY(gdjs.Fase1Code.GDobstaculoObjects2[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.Fase1Code.GDobstaculoObjects2.createFrom(runtimeScene.getObjects("obstaculo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDobstaculoObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDobstaculoObjects2[i].getX() < 60 ) {
        gdjs.Fase1Code.condition0IsTrue_0.val = true;
        gdjs.Fase1Code.GDobstaculoObjects2[k] = gdjs.Fase1Code.GDobstaculoObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDobstaculoObjects2.length = k;}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDobstaculoObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setAnimationName("cacto");
}
}}

}


{

gdjs.Fase1Code.GDobstaculoObjects2.createFrom(runtimeScene.getObjects("obstaculo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDobstaculoObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDobstaculoObjects2[i].getX() > 640 ) {
        gdjs.Fase1Code.condition0IsTrue_0.val = true;
        gdjs.Fase1Code.GDobstaculoObjects2[k] = gdjs.Fase1Code.GDobstaculoObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDobstaculoObjects2.length = k;}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDobstaculoObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setAnimationName("cacto");
}
}}

}


{

gdjs.Fase1Code.GDobstaculoObjects2.createFrom(runtimeScene.getObjects("obstaculo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDobstaculoObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDobstaculoObjects2[i].getY() > 600 ) {
        gdjs.Fase1Code.condition0IsTrue_0.val = true;
        gdjs.Fase1Code.GDobstaculoObjects2[k] = gdjs.Fase1Code.GDobstaculoObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDobstaculoObjects2.length = k;}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDobstaculoObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setY(-(3400));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setX(gdjs.random(640));
}
}}

}


{

gdjs.Fase1Code.GDobstaculoObjects2.createFrom(runtimeScene.getObjects("obstaculo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDobstaculoObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDobstaculoObjects2[i].getX() > 60 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDobstaculoObjects2[k] = gdjs.Fase1Code.GDobstaculoObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDobstaculoObjects2.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDobstaculoObjects2.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDobstaculoObjects2[i].getX() < 640 ) {
        gdjs.Fase1Code.condition1IsTrue_1.val = true;
        gdjs.Fase1Code.GDobstaculoObjects2[k] = gdjs.Fase1Code.GDobstaculoObjects2[i];
        ++k;
    }
}
gdjs.Fase1Code.GDobstaculoObjects2.length = k;}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDobstaculoObjects2 */
{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setAnimationName("buraco");
}
}}

}


{



}


{

gdjs.Fase1Code.GDcarroObjects2.createFrom(runtimeScene.getObjects("carro"));
gdjs.Fase1Code.GDobstaculoObjects2.createFrom(runtimeScene.getObjects("obstaculo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects2Objects, gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDobstaculoObjects2Objects, false, runtimeScene, false);
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDnVidasObjects2.createFrom(runtimeScene.getObjects("nVidas"));
/* Reuse gdjs.Fase1Code.GDobstaculoObjects2 */
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Fase1Code.GDnVidasObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDnVidasObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setY(-(3400));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDobstaculoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDobstaculoObjects2[i].setX(gdjs.random(640));
}
}}

}


{

gdjs.Fase1Code.GDcarroObjects2.createFrom(runtimeScene.getObjects("carro"));
gdjs.Fase1Code.GDinimigoObjects2.createFrom(runtimeScene.getObjects("inimigo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects2Objects, gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDinimigoObjects2Objects, false, runtimeScene, false);
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDinimigoObjects2 */
{runtimeScene.getVariables().getFromIndex(0).sub(2);
}{for(var i = 0, len = gdjs.Fase1Code.GDinimigoObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDinimigoObjects2[i].setX(gdjs.Fase1Code.GDinimigoObjects2[i].getX() + (300));
}
}
{ //Subevents
gdjs.Fase1Code.eventsList0x720ae8(runtimeScene);} //End of subevents
}

}


{

gdjs.Fase1Code.GDcarroObjects2.createFrom(runtimeScene.getObjects("carro"));
gdjs.Fase1Code.GDchaveVidaObjects2.createFrom(runtimeScene.getObjects("chaveVida"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects2Objects, gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDchaveVidaObjects2Objects, false, runtimeScene, false);
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDchaveVidaObjects2 */
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Fase1Code.GDchaveVidaObjects2.length ;i < len;++i) {
    gdjs.Fase1Code.GDchaveVidaObjects2[i].setY(600);
}
}}

}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));
gdjs.Fase1Code.GDfaixaObjects1.createFrom(runtimeScene.getObjects("faixa"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDcarroObjects1Objects, gdjs.Fase1Code.mapOfGDgdjs_46Fase1Code_46GDfaixaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDganhouObjects1.createFrom(runtimeScene.getObjects("ganhou"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.5);
}{for(var i = 0, len = gdjs.Fase1Code.GDganhouObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDganhouObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Fase1Code.eventsList0x685dc8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Fase1Code.eventsList0x6849f0
gdjs.Fase1Code.eventsList0x686c98 = function(runtimeScene) {

{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "pauseGameOver");
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "showScore");
}}

}


}; //End of gdjs.Fase1Code.eventsList0x686c98
gdjs.Fase1Code.eventsList0xb2358 = function(runtimeScene) {

{


{
gdjs.Fase1Code.GDfaixaObjects1.createFrom(runtimeScene.getObjects("faixa"));
gdjs.Fase1Code.GDganhouObjects1.createFrom(runtimeScene.getObjects("ganhou"));
gdjs.Fase1Code.GDnScoreObjects1.createFrom(runtimeScene.getObjects("nScore"));
gdjs.Fase1Code.GDnVidasObjects1.createFrom(runtimeScene.getObjects("nVidas"));
gdjs.Fase1Code.GDperdeuObjects1.createFrom(runtimeScene.getObjects("perdeu"));
{for(var i = 0, len = gdjs.Fase1Code.GDnVidasObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDnVidasObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDnScoreObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDnScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDfaixaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDfaixaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Fase1Code.GDganhouObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDganhouObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Fase1Code.GDperdeuObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDperdeuObjects1[i].hide();
}
}}

}


{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), "contScore");
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDnScoreObjects1.createFrom(runtimeScene.getObjects("nScore"));
{runtimeScene.getGame().getVariables().getFromIndex(2).add(10);
}{for(var i = 0, len = gdjs.Fase1Code.GDnScoreObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDnScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "contScore");
}}

}


{



}


{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
{
gdjs.Fase1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDchaveVidaObjects1.createFrom(runtimeScene.getObjects("chaveVida"));
{runtimeScene.getVariables().getFromIndex(1).add(100);
}{for(var i = 0, len = gdjs.Fase1Code.GDchaveVidaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDchaveVidaObjects1[i].setY(-(43));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDchaveVidaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDchaveVidaObjects1[i].setX(gdjs.random(640));
}
}}

}


{


{
gdjs.Fase1Code.GDchaveVidaObjects1.createFrom(runtimeScene.getObjects("chaveVida"));
{for(var i = 0, len = gdjs.Fase1Code.GDchaveVidaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDchaveVidaObjects1[i].setY(gdjs.Fase1Code.GDchaveVidaObjects1[i].getY() + (4));
}
}}

}


{



}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() > 120 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() < 630 ) {
        gdjs.Fase1Code.condition1IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(8);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{


{
}

}


{



}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getY() > 0 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
gdjs.Fase1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDcarroObjects1 */
{for(var i = 0, len = gdjs.Fase1Code.GDcarroObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDcarroObjects1[i].setY(gdjs.Fase1Code.GDcarroObjects1[i].getY() - (8));
}
}}

}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getY() < 360 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
gdjs.Fase1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDcarroObjects1 */
{for(var i = 0, len = gdjs.Fase1Code.GDcarroObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDcarroObjects1[i].setY(gdjs.Fase1Code.GDcarroObjects1[i].getY() + (8));
}
}}

}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() > -(30) ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
gdjs.Fase1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDcarroObjects1 */
{for(var i = 0, len = gdjs.Fase1Code.GDcarroObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDcarroObjects1[i].setX(gdjs.Fase1Code.GDcarroObjects1[i].getX() - (8));
}
}}

}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() < 680 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
gdjs.Fase1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDcarroObjects1 */
{for(var i = 0, len = gdjs.Fase1Code.GDcarroObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDcarroObjects1[i].setX(gdjs.Fase1Code.GDcarroObjects1[i].getX() + (8));
}
}}

}


{



}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() > 0 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() < 120 ) {
        gdjs.Fase1Code.condition1IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2.5);
}}

}


{

gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDcarroObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDcarroObjects1[i].getX() > 630 ) {
        gdjs.Fase1Code.condition0IsTrue_1.val = true;
        gdjs.Fase1Code.GDcarroObjects1[k] = gdjs.Fase1Code.GDcarroObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDcarroObjects1.length = k;}gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2.5);
}}

}


{


{
gdjs.Fase1Code.GDfundoObjects1.createFrom(runtimeScene.getObjects("fundo"));
gdjs.Fase1Code.GDsandObjects1.createFrom(runtimeScene.getObjects("sand"));
{for(var i = 0, len = gdjs.Fase1Code.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDfundoObjects1[i].setYOffset(gdjs.Fase1Code.GDfundoObjects1[i].getYOffset() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Fase1Code.GDsandObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDsandObjects1[i].setYOffset(gdjs.Fase1Code.GDsandObjects1[i].getYOffset() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.Fase1Code.eventsList0x6849f0(runtimeScene);
}


{



}


{

gdjs.Fase1Code.GDinimigoObjects1.createFrom(runtimeScene.getObjects("inimigo"));

gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
{gdjs.Fase1Code.conditionTrue_1 = gdjs.Fase1Code.condition0IsTrue_0;
gdjs.Fase1Code.condition0IsTrue_1.val = false;
gdjs.Fase1Code.condition1IsTrue_1.val = false;
{
gdjs.Fase1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 100;
}if ( gdjs.Fase1Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Fase1Code.GDinimigoObjects1.length;i<l;++i) {
    if ( gdjs.Fase1Code.GDinimigoObjects1[i].getY() > 360 ) {
        gdjs.Fase1Code.condition1IsTrue_1.val = true;
        gdjs.Fase1Code.GDinimigoObjects1[k] = gdjs.Fase1Code.GDinimigoObjects1[i];
        ++k;
    }
}
gdjs.Fase1Code.GDinimigoObjects1.length = k;}}
gdjs.Fase1Code.conditionTrue_1.val = true && gdjs.Fase1Code.condition0IsTrue_1.val && gdjs.Fase1Code.condition1IsTrue_1.val;
}
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Fase1Code.GDinimigoObjects1 */
{for(var i = 0, len = gdjs.Fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDinimigoObjects1[i].setY(gdjs.Fase1Code.GDinimigoObjects1[i].getY() - (6));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDcarroObjects1.createFrom(runtimeScene.getObjects("carro"));
gdjs.Fase1Code.GDinimigoObjects1.createFrom(runtimeScene.getObjects("inimigo"));
{for(var i = 0, len = gdjs.Fase1Code.GDinimigoObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDinimigoObjects1[i].addForceTowardObject((gdjs.Fase1Code.GDcarroObjects1.length !== 0 ? gdjs.Fase1Code.GDcarroObjects1[0] : null), 35, 0);
}
}}

}


{



}


{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 500;
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDfaixaObjects1.createFrom(runtimeScene.getObjects("faixa"));
{for(var i = 0, len = gdjs.Fase1Code.GDfaixaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDfaixaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Fase1Code.GDfaixaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDfaixaObjects1[i].setY(gdjs.Fase1Code.GDfaixaObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.Fase1Code.condition0IsTrue_0.val = false;
{
gdjs.Fase1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.Fase1Code.condition0IsTrue_0.val) {
gdjs.Fase1Code.GDchaveVidaObjects1.createFrom(runtimeScene.getObjects("chaveVida"));
gdjs.Fase1Code.GDperdeuObjects1.createFrom(runtimeScene.getObjects("perdeu"));
{for(var i = 0, len = gdjs.Fase1Code.GDperdeuObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDperdeuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Fase1Code.GDchaveVidaObjects1.length ;i < len;++i) {
    gdjs.Fase1Code.GDchaveVidaObjects1[i].setY(100000);
}
}
{ //Subevents
gdjs.Fase1Code.eventsList0x686c98(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Fase1Code.eventsList0xb2358


gdjs.Fase1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Fase1Code.GDcarroObjects1.length = 0;
gdjs.Fase1Code.GDcarroObjects2.length = 0;
gdjs.Fase1Code.GDcarroObjects3.length = 0;
gdjs.Fase1Code.GDfundoObjects1.length = 0;
gdjs.Fase1Code.GDfundoObjects2.length = 0;
gdjs.Fase1Code.GDfundoObjects3.length = 0;
gdjs.Fase1Code.GDsandObjects1.length = 0;
gdjs.Fase1Code.GDsandObjects2.length = 0;
gdjs.Fase1Code.GDsandObjects3.length = 0;
gdjs.Fase1Code.GDinimigoObjects1.length = 0;
gdjs.Fase1Code.GDinimigoObjects2.length = 0;
gdjs.Fase1Code.GDinimigoObjects3.length = 0;
gdjs.Fase1Code.GDobstaculoObjects1.length = 0;
gdjs.Fase1Code.GDobstaculoObjects2.length = 0;
gdjs.Fase1Code.GDobstaculoObjects3.length = 0;
gdjs.Fase1Code.GDt1Objects1.length = 0;
gdjs.Fase1Code.GDt1Objects2.length = 0;
gdjs.Fase1Code.GDt1Objects3.length = 0;
gdjs.Fase1Code.GDnVidasObjects1.length = 0;
gdjs.Fase1Code.GDnVidasObjects2.length = 0;
gdjs.Fase1Code.GDnVidasObjects3.length = 0;
gdjs.Fase1Code.GDt2Objects1.length = 0;
gdjs.Fase1Code.GDt2Objects2.length = 0;
gdjs.Fase1Code.GDt2Objects3.length = 0;
gdjs.Fase1Code.GDnScoreObjects1.length = 0;
gdjs.Fase1Code.GDnScoreObjects2.length = 0;
gdjs.Fase1Code.GDnScoreObjects3.length = 0;
gdjs.Fase1Code.GDchaveVidaObjects1.length = 0;
gdjs.Fase1Code.GDchaveVidaObjects2.length = 0;
gdjs.Fase1Code.GDchaveVidaObjects3.length = 0;
gdjs.Fase1Code.GDfaixaObjects1.length = 0;
gdjs.Fase1Code.GDfaixaObjects2.length = 0;
gdjs.Fase1Code.GDfaixaObjects3.length = 0;
gdjs.Fase1Code.GDganhouObjects1.length = 0;
gdjs.Fase1Code.GDganhouObjects2.length = 0;
gdjs.Fase1Code.GDganhouObjects3.length = 0;
gdjs.Fase1Code.GDperdeuObjects1.length = 0;
gdjs.Fase1Code.GDperdeuObjects2.length = 0;
gdjs.Fase1Code.GDperdeuObjects3.length = 0;

gdjs.Fase1Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['Fase1Code'] = gdjs.Fase1Code;
