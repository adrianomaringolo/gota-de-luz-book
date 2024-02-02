"use strict";
exports.__esModule = true;
exports.VisitArea = void 0;
var layout_module_scss_1 = require("./../../styles/layout.module.scss");
var classnames_1 = require("classnames");
var VisitListDisplayer_1 = require("components/visitas/VisitListDisplayer");
var VisitCTA_1 = require("components/visitas/VisitCTA");
exports.VisitArea = function () {
    return (React.createElement("div", { id: "visitacao", className: classnames_1["default"]('section', layout_module_scss_1["default"].section, layout_module_scss_1["default"].sectionVisit) },
        React.createElement("div", { className: layout_module_scss_1["default"].contentArea },
            React.createElement("h2", { className: "fancy-title" }, "VISITA GUIADA \u00C0 CH\u00C1CARA M\u00C3E LUZIA"),
            React.createElement("div", { className: "my-5" },
                React.createElement(VisitListDisplayer_1.VisitListDisplayer, null)),
            React.createElement("p", { className: "mb-4" }, "\u00C9 nessa ch\u00E1cara que s\u00E3o cultivadas as plantas que s\u00E3o destiladas para a obten\u00E7\u00E3o dos insumos dos produtos Gota de Cura."),
            React.createElement("p", { className: "mb-4" },
                React.createElement("b", null, "Local"),
                ": Santo Ant\u00F4nio de Posse, pr\u00F3xima \u00E0 Holambra (cerca de 40 minutos de Campinas/SP)",
                React.createElement("br", null),
                React.createElement("b", null, "Dura\u00E7\u00E3o"),
                ": cerca de 4 horas (das 8h \u00E0s 12h)",
                React.createElement("br", null),
                React.createElement("b", null, "Atividades"),
                ": caf\u00E9 da manh\u00E3 + destila\u00E7\u00E3o de uma planta arom\u00E1tica e explica\u00E7\u00E3o do processo + visita guiada \u00E0 propriedade",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("b", null, "Valor"),
                ": R$ 110,00 por pessoa",
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("big", null,
                    React.createElement("b", null, "Vagas limitadas!"))),
            React.createElement("div", { className: "my-5 flex justify-center" },
                React.createElement(VisitCTA_1.VisitCTA, null)))));
};
