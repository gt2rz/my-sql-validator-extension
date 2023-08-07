import * as vscode from 'vscode';

export function log(value: any) {
	let outputChannel = vscode.window.createOutputChannel("Validacion SQL");
	outputChannel.show(true);
	const begin = new Date().toLocaleString();
	outputChannel.appendLine(`${begin} ${value}`);
}

export function updateContent(content: string) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            editBuilder.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), content );
        }).then(() => {
            // vscode.window.showInformationMessage("Contenido actualizado con éxito");
        });
    }   
}