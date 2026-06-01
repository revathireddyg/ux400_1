sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    "use strict";

    return Controller.extend(
        "demo.calculator.calculatorapp.controller.App",
    {

        onAdd: function () {

            var n1 = parseInt(
                this.byId("num1").getValue()
            );

            var n2 = parseInt(
                this.byId("num2").getValue()
            );

            var sum = n1 + n2;

            this.byId("resultText")
                .setText("Sum = " + sum);
        }
    });
});