import { SnippetString } from "vscode";
import BasePostfixHandler from "../../base/BasePostfixHandler";
import { PostfixHandler } from "../../base/decorator/PostfixHandler";
import LinetextHandleResult from "../../base/LinetextHandleResult";
import DocumentUtil from "../../util/DocumentUtil";

@PostfixHandler({ language: "go", label: "switch" })
class SwitchPostfixHandler4Go extends BasePostfixHandler {
  handleLineText(
    lineText: string,
    firstNotWhileSpaceIndex: number
  ): string | SnippetString | LinetextHandleResult {
    let endIndex = lineText.lastIndexOf(".");
    const replacement = lineText.substring(firstNotWhileSpaceIndex, endIndex);
    const newText = `switch ${replacement} {\n${DocumentUtil.indentCharacters()}case \${1:condition}:\n${DocumentUtil.indentCharacters()}${DocumentUtil.indentCharacters()}$2\n}`;
    return {
      text: new SnippetString(newText),
      deleteText: {
        startIndex: firstNotWhileSpaceIndex,
        endIndex: endIndex + 1,
      },
      detail: `postfix`,
      documentation: newText,
    };
  }
}
