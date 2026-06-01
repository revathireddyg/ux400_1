/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/calculator/calculatorapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
