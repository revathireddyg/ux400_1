sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {

    "use strict";

    return UIComponent.extend("demo.nav.navigation.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {

            UIComponent.prototype.init.apply(this, arguments);

            // Initialize Router
            this.getRouter().initialize();

        }

    });

});


