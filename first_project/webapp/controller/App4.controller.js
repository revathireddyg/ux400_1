sap.ui.define([
    "sap/ui/core/mvc/Controller",      // Import base Controller class
    "sap/ui/model/json/JSONModel"      // Import JSONModel to store data
], function (Controller, JSONModel) {
    "use strict";

    // Create controller named App5
    return Controller.extend("ddemo.first.firstproject.controller.App4", {

        // Runs automatically when the view loads
        onInit: function () {

            // ✅ Create a JSON model with initial values
            var oModel = new JSONModel({
                password: "",                // Stores user input password
                inputType: "Password",      // Controls input visibility (Password/Text)
                buttonText: "Show Password" // Initial button label
            });

            // ✅ Attach model to the view
            this.getView().setModel(oModel);
        },

        // ✅ Function triggered when button is pressed
        onTogglePassword: function () {

            // Get the model from the view
            var oModel = this.getView().getModel();

            // Read current input type (Password or Text)
            var sCurrentType = oModel.getProperty("/inputType");

            // ✅ Toggle logic
            if (sCurrentType === "Password") {

                // Change input type to Text → shows password
                oModel.setProperty("/inputType", "Text");

                // Update button text
                oModel.setProperty("/buttonText", "Hide Password");

            } else {

                // Change input type back to Password → hides password
                oModel.setProperty("/inputType", "Password");

                // Update button text
                oModel.setProperty("/buttonText", "Show Password");
            }
        }
    });
});