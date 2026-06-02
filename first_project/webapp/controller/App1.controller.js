/*
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.first.firstproject.controller.App1", {
        onButtonPress: function () {
            var oModel = this.getView().getModel();
            var sCurrentText = oModel.getProperty("/buttonText");

            if (sCurrentText === "Click Me") {
                oModel.setProperty("/buttonText", "Clicked!");
            } else {
                oModel.setProperty("/buttonText", "Click Me");
            }

            MessageToast.show("Button pressed");
        }
    });
});
*/


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("demo.first.firstproject.controller.App1", {

        onInit: function () {
            // Create model with initial value
            var oModel = new JSONModel({
                buttonText: "Click Me"
            });

            //  Set model to view
            this.getView().setModel(oModel);
        },

        onButtonPress: function () {
            var oModel = this.getView().getModel();
            var sCurrentText = oModel.getProperty("/buttonText");

            if (sCurrentText === "Click Me") {
                oModel.setProperty("/buttonText", "Clicked!");
            } else {
                oModel.setProperty("/buttonText", "Click Me");
            }

            MessageToast.show("Button pressed");
        }
    });
});
