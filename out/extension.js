"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const table_1 = require("./core/validators/table");
function activate(context) {
    const types = [
        'TABLE'
    ];
    let validateSQL = vscode.commands.registerCommand('my-sql-validator.validateSQL', () => {
        const activeTab = vscode.window.activeTextEditor;
        if (!activeTab) {
            vscode.window.showErrorMessage('No hay una pestaña activa');
            return;
        }
        const content = activeTab?.document.getText();
        if (!content) {
            vscode.window.showErrorMessage('El archivo tiene contenido');
            return;
        }
        for (const type of types) {
            const isType = content?.includes(type);
            if (!isType) {
                vscode.window.showErrorMessage('No hay un tipo de operacion permitida. Solo de tipo: ' + types.join(', '));
                return;
            }
            if (isType) {
                if (type === 'TABLE') {
                    (0, table_1.validateTable)(content);
                }
            }
        }
        ;
    });
    context.subscriptions.push(validateSQL);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map