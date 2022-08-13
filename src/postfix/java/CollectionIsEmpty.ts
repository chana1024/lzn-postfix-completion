import { SnippetString } from "vscode";
import { EnablePostfixSuggestion } from "../../base/decorator/EnablePostfixSuggestion";
import { Return } from "../../base/decorator/Return";
import { Target } from "../../base/decorator/Target";
import PostfixHandler from "../../base/suggest/PostfixHandler";

@EnablePostfixSuggestion({ language: "java", label: "Collection.isEmpty" })
class CollectionIsEmpty extends PostfixHandler {
    @Target.Slice({})
    @Return.Replace()
    handleTarget(replacement: string) {
        return new SnippetString(`CollectionUtils.isEmpty(${replacement})`);
    }
}
