sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("demo.first.firstproject.controller.App41", {

        onInit: function () {
            var oModel = new JSONModel({
                inputText: ""
            });
            this.getView().setModel(oModel);
        },

       onLiveChange: function (oEvent) {
    var sValue = oEvent.getParameter("value") || "";

    // convert to uppercase
    var sUpper = sValue.toUpperCase();

    // update only the model (UI updates automatically via binding)
    this.getView().getModel().setProperty("/inputText", sUpper);
}

    });
});
