sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent)
//all the libraries of UI component are for component also
 {
    "use strict";

    return UIComponent.extend("demo.agechecker.agechecker.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            // Call parent init
            UIComponent.prototype.init.apply(this, arguments);

        }
    });
});
