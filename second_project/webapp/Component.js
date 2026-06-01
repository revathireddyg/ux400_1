sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("demo.second.secondproject.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            // Call parent init
            UIComponent.prototype.init.apply(this, arguments);

        }
    });
});