sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("demo.second.secondproject.controller.App19", {

        onInit: function () {
            var oModel = new JSONModel({
                name: "",
                surname: "",
                mobile: "",
                email: "",
                address: "",
                gender: "",
                country: "",

                // Value states
                nameState: "None",
                surnameState: "None",
                mobileState: "None",
                emailState: "None"
            });

            this.getView().setModel(oModel);
        },

        onSubmit: function () {
            var oModel = this.getView().getModel();
            var data = oModel.getData();

            var isValid = true;

            // Reset states
            oModel.setProperty("/nameState", "None");
            oModel.setProperty("/surnameState", "None");
            oModel.setProperty("/mobileState", "None");
            oModel.setProperty("/emailState", "None");

            // Name validation
            if (!data.name) {
                oModel.setProperty("/nameState", "Error");
                isValid = false;
            }

            // Surname validation
            if (!data.surname) {
                oModel.setProperty("/surnameState", "Error");
                isValid = false;
            }

            // Mobile validation (10 digits)
            if (!/^\d{10}$/.test(data.mobile)) {
                oModel.setProperty("/mobileState", "Error");
                isValid = false;
            }

            // Email validation
            if (!/^\S+@\S+\.\S+$/.test(data.email)) {
                oModel.setProperty("/emailState", "Error");
                isValid = false;
            }

            if (!isValid) {
                MessageToast.show("Please fill all mandatory fields correctly");
                return;
            }

            MessageToast.show("Registration Successful ✅");
        }
    });
});