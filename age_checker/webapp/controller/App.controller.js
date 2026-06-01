sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {

    "use strict";

    return Controller.extend(
        "demo.agechecker.agechecker.controller.App",
    {

        onCheckEligibility: function () {

            // Read values
            var sName =
                this.byId("candidateName")
                    .getValue();

            var nAge = parseInt(
                this.byId("candidateAge")
                    .getValue()
            );

            // Validation
            if (!sName || !nAge) {

                MessageToast.show(
                    "Please enter all details"
                );

                return;
            }

            // Eligibility Check
            var sMessage = "";

            if (nAge >= 18) {

                sMessage =
                    sName +
                    " is eligible for voting";

            } else {

                sMessage =
                    sName +
                    " is NOT eligible for voting";
            }

            // Display Output
            this.byId("resultText")
                .setText(sMessage);

            // Toast
            MessageToast.show(
                "Eligibility Checked"
            );
        }
    });
});