"use strict"

function initializeControlAddIn(id) {
  var controlAddIn = document.getElementById(id);
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnAddInReady', null);
  generateTable(controlAddIn);
}

function createTable(jsndata){
    var controlAddIn = document.getElementById('controlAddIn');
    generateTable(controlAddIn,jsndata)
}

function sendToNav(funct, paras) {
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(funct, [paras]);
 }
