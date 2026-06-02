/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/first/firstproject/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
