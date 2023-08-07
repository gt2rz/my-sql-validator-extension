import * as vscode from 'vscode';
import { CREATE_TABLE_REGEX, TABLE_RULES } from '../constants';
import { updateContent } from '../../common/utils';

const tableOperationsPermitted = [
    'CREATE',
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
    
    for (const rule of TABLE_RULES) {
        cleanContent = cleanContent.replace(rule, '');
    }

    cleanContent = cleanContent.replace(CREATE_TABLE_REGEX, 'CREATE TABLE');

    updateContent(cleanContent);

	return cleanContent;
}

