import * as vscode from 'vscode';
import { validateTable } from './tables';

export function activate(context: vscode.ExtensionContext) {

	const types = [
		'TABLE'
	];

	let validateSQL = vscode.commands.registerCommand('my-sql-validator.validateSQL', () => {
		const activeTab = vscode.window.activeTextEditor;

		if(!activeTab) {
			vscode.window.showErrorMessage('No hay una pestaña activa');
			return;
		}

		const content = activeTab?.document.getText();

		if(!content) {
			vscode.window.showErrorMessage('El archivo tiene contenido');
			return;
		}

		types.map((type) => {
			const isType = content?.includes(type);

			if(!isType) {
				vscode.window.showErrorMessage('No hay un tipo de operacion permitida. Solo de tipo: ' + types.join(', '));
				return;
			}

			if (isType) {
				if (type === 'TABLE') {				
					validateTable(content);					
				}
			}

		});	

	});

	context.subscriptions.push(validateSQL);

}

export function deactivate() {}

