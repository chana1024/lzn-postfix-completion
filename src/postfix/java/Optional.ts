import { SnippetString } from "vscode";
import PostfixHandler from "../../base/suggest/PostfixHandler";
import { Target } from "../../base/decorator/Target";
import { EnablePostfixSuggestion } from "../../base/decorator/EnablePostfixSuggestion";
import { indent } from "../../util/DocumentUtil";
import { Return } from "../../base/decorator/Return";

@EnablePostfixSuggestion({ language: "java", label: "optional.ofnullable" })
class OptionalOfNullable extends PostfixHandler {
    @Target.Slice({})
    @Return.Replace()
    handleTarget(replacement: string) {
        return new SnippetString(`Optional.ofNullable(${replacement}).orElseThrow(()->new CustomException($1))`);
    }
}
@EnablePostfixSuggestion({ language: "java", label: "optional.ifpresent" })
class OptionalIfPresent extends PostfixHandler {
    @Target.Slice({})
    @Return.Replace()
    handleTarget(replacement: string) {
        return new SnippetString(` ${replacement}.ifPresent(item -> {
            $1
        });
`)
    }
}   


