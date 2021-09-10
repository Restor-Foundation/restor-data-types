"use strict";
exports.__esModule = true;
exports.isCalculationError = exports.CalculationErrorCode = exports.VisualizationType = void 0;
var VisualizationType;
(function (VisualizationType) {
    VisualizationType["Text"] = "text";
    VisualizationType["BarChart"] = "barchart";
    VisualizationType["CategoricalBarChart"] = "categoricalbarchart";
    VisualizationType["VerticalBarChart"] = "verticalbarchart";
    VisualizationType["SpeciesChart"] = "specieschart";
    VisualizationType["HorizontalBoxChart"] = "horizontalboxchart";
    VisualizationType["Alert"] = "alert";
    VisualizationType["LineChart"] = "linechart";
})(VisualizationType = exports.VisualizationType || (exports.VisualizationType = {}));
/** Calculation errors */
var CalculationErrorCode;
(function (CalculationErrorCode) {
    CalculationErrorCode["NO_DATA"] = "NO_DATA";
    CalculationErrorCode["AREA_TOO_LARGE"] = "AREA_TOO_LARGE";
    CalculationErrorCode["ERROR_IN_MAP"] = "ERROR_IN_MAP";
    CalculationErrorCode["UNKNOWN_EARTHENGINE_ERROR"] = "UNKNOWN_EARTHENGINE_ERROR";
})(CalculationErrorCode = exports.CalculationErrorCode || (exports.CalculationErrorCode = {}));
function isCalculationError(test) {
    return !Array.isArray(test) && !!test.error_code;
}
exports.isCalculationError = isCalculationError;
