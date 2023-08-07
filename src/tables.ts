import * as vscode from 'vscode';

const tableOperationsPermitted = [
    'CREATE',
];

const rules = [
    /DEFINER\s*['"]([\w.@]+)['"]/gi,
    /COLLATE\s*=\s*(\w+)/gi,
    // /ENGINE\s*=\s*(\w+)/gi,
    // /AUTO_INCREMENT\s*=\s*(\d+)/gi,
    // /DEFAULT CHARSET\s*=\s*(\w+)/gi,
];

export function validateTable (content : string){
    let cleanContent = clean(content);
    for (const operation of tableOperationsPermitted) {
        if (cleanContent.includes(operation)) {
            if (operation === 'CREATE') {
                vscode.window.showInformationMessage('Done!!!');
            }
        }
    }
} 

function clean(content: string) {    
    let cleanContent = content;
    
    for (const rule of rules) {
        cleanContent = cleanContent.replace(rule, '');
    }

    const createTableRegex = /CREATE\s+TABLE/gi;
    cleanContent = cleanContent.replace(createTableRegex, 'CREATE TABLE');

    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            editBuilder.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), cleanContent );
        }).then(() => {
            // vscode.window.showInformationMessage("Contenido actualizado con éxito");
        });
    }   

	return cleanContent;
}