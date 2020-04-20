const generateJetbrainsXML = ({ allTokens, name }) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
<scheme name="${name}" version="1" parent_scheme="Default">
	<colors>
		<option name="ADDED_LINES_COLOR" value="${allTokens['application.editorGutter.addedBackground'].computedValue}" />
		<option name="ANNOTATIONS_COLOR" value="586e75" />
		<option name="ANNOTATIONS_MERGED_COLOR" value="2aa198" />
		<option name="CARET_COLOR" value="dc322f" />
		<option name="CARET_ROW_COLOR" value="73642" />
		<option name="CONSOLE_BACKGROUND_KEY" value="2b36" />
		<option name="GUTTER_BACKGROUND" value="${allTokens['application.editorGutter.background'].computedValue}" />
		<option name="INDENT_GUIDE" value="${allTokens['application.editorIndentGuide.background'].computedValue}" />
		<option name="LINE_NUMBERS_COLOR" value="${allTokens['application.editorLineNumber.foreground'].computedValue}" />
		<option name="METHOD_SEPARATORS_COLOR" value="73642" />
		<option name="MODIFIED_LINES_COLOR" value="${allTokens['application.gitDecoration.modifiedResourceForeground'].computedValue}" />
		<option name="NOTIFICATION_BACKGROUND" value="" />
		<option name="READONLY_FRAGMENT_BACKGROUND" value="" />
		<option name="RIGHT_MARGIN_COLOR" value="" />
		<option name="SELECTED_INDENT_GUIDE" value="${allTokens['application.editorIndentGuide.activeBackground'].computedValue}" />
		<option name="SELECTED_TEARLINE_COLOR" value="657b83" />
		<option name="SELECTION_BACKGROUND" value="${allTokens['application.selection.background'].computedValue}" />
		<!-- <option name="SELECTION_FOREGROUND" value="2b36" /> -->
		<option name="TEARLINE_COLOR" value="586e75" />
		<option name="WHITESPACES" value="${allTokens['application.editorWhitespace.foreground'].computedValue}" />
	</colors>
	<attributes>
		<option name="ANNOTATION_NAME_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="APACHE_CONFIG.ARG_LEXEM">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="APACHE_CONFIG.COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="APACHE_CONFIG.IDENTIFIER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="Abstract class">
			<value>
				<option name="FOREGROUND" value="b58800" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Annotation">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="Annotation name">
			<value>
				<option name="FOREGROUND" value="6c6fc4" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="Atom">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="BAD_CHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="BASH.BAD_CHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="BASH.EXTERNAL_COMMAND">
			<value />
		</option>
		<option name="BASH.FUNCTION_CALL">
			<value />
		</option>
		<option name="BASH.HERE_DOC">
			<value />
		</option>
		<option name="BASH.HERE_DOC_END">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="BASH.HERE_DOC_START">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="BASH.INTERNAL_COMMAND">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="BASH.KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="BASH.NUMBER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="BASH.PAREN">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="BASH.SHEBANG">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="BASH.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="BASH.STRING2">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="BASH.SUBSHELL_COMMAND">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="BASH.VAR_DEF">
			<value>
				<option name="FOREGROUND" value="2688d1" />
			</value>
		</option>
		<option name="BASH.VAR_USE">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="BASH.VAR_USE_BUILTIN">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="BASH.VAR_USE_COMPOSED">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="BREADCRUMBS_CURRENT">
			<value>
				<option name="FOREGROUND" value="eee8d5" />
			</value>
		</option>
		<option name="BREADCRUMBS_DEFAULT">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="BREADCRUMBS_HOVERED">
			<value>
				<option name="FOREGROUND" value="eee8d5" />
				<option name="BACKGROUND" value="586e75" />
			</value>
		</option>
		<option name="BREADCRUMBS_INACTIVE">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="BREAKPOINT_ATTRIBUTES">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="BUILDOUT.KEY">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="BUILDOUT.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="BUILDOUT.SECTION_NAME">
			<value>
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="BUILDOUT.VALUE">
			<value>
				<option name="FOREGROUND" value="8f9d6a" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CLASS_REFERENCE">
			<value>
				<option name="FOREGROUND" value="b38700" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.BAD_CHARACTER">
			<value>
				<option name="FOREGROUND" value="73642" />
				<option name="BACKGROUND" value="d33682" />
			</value>
		</option>
		<option name="COFFEESCRIPT.BLOCK_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.BOOLEAN">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.BRACE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.BRACKET">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.CLASS_NAME">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.ESCAPE_SEQUENCE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.EXPRESSIONS_SUBSTITUTION_MARK">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="COFFEESCRIPT.FUNCTION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.FUNCTION_BINDING">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.FUNCTION_NAME">
			<value>
				<option name="FOREGROUND" value="b48900" />
			</value>
		</option>
		<option name="COFFEESCRIPT.IDENTIFIER">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="COFFEESCRIPT.JAVASCRIPT_ID">
			<value>
				<option name="FOREGROUND" value="d13681" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="COFFEESCRIPT.LOCAL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="COFFEESCRIPT.NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="COFFEESCRIPT.OBJECT_KEY">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.OPERATIONS">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="COFFEESCRIPT.REGULAR_EXPRESSION_CONTENT">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="COFFEESCRIPT.REGULAR_EXPRESSION_FLAG">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.REGULAR_EXPRESSION_ID">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="COFFEESCRIPT.SEMICOLON">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="COFFEESCRIPT.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="COFFEESCRIPT.STRING_LITERAL">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="COFFEESCRIPT.THIS">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="CONDITIONALLY_NOT_COMPILED">
			<value>
				<option name="FOREGROUND" value="657b83" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="CONSOLE_BLUE_BRIGHT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CONSOLE_BLUE_OUTPUT">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="CONSOLE_CYAN_BRIGHT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CONSOLE_CYAN_OUTPUT">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CONSOLE_DARKGRAY_OUTPUT">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="CONSOLE_ERROR_OUTPUT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="CONSOLE_GRAY_OUTPUT">
			<value>
				<option name="FOREGROUND" value="657b83" />
			</value>
		</option>
		<option name="CONSOLE_GREEN_BRIGHT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CONSOLE_GREEN_OUTPUT">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="CONSOLE_MAGENTA_BRIGHT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="d13681" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CONSOLE_MAGENTA_OUTPUT">
			<value>
				<option name="FOREGROUND" value="d13681" />
			</value>
		</option>
		<option name="CONSOLE_NORMAL_OUTPUT">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="CONSOLE_RED_BRIGHT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CONSOLE_RED_OUTPUT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="CONSOLE_SYSTEM_OUTPUT">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="CONSOLE_USER_INPUT">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="CONSOLE_WHITE_OUTPUT">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
			</value>
		</option>
		<option name="CONSOLE_YELLOW_BRIGHT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CONSOLE_YELLOW_OUTPUT">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="CSS.COMMENT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="CSS.FUNCTION">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CSS.IDENT">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="CSS.IMPORTANT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="CSS.KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="CSS.NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CSS.PROPERTY_NAME">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="CSS.PROPERTY_VALUE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CSS.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CSS.TAG_NAME">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="CSS.URL">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CTRL_CLICKABLE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_COLOR" value="268bd2" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="CUSTOM_INVALID_STRING_ESCAPE_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="CUSTOM_KEYWORD1_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="268ad1" />
			</value>
		</option>
		<option name="CUSTOM_KEYWORD2_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="CUSTOM_KEYWORD3_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="CUSTOM_KEYWORD4_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="CUSTOM_LINE_COMMENT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="CUSTOM_MULTI_LINE_COMMENT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="CUSTOM_NUMBER_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="CUSTOM_STRING_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="CUSTOM_VALID_STRING_ESCAPE_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="Clojure Atom">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="Clojure Character">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Clojure Keyword">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="3" />
			</value>
		</option>
		<option name="Clojure Line comment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Clojure Literal">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Clojure Numbers">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="Clojure Strings">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Cmd.COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Cmd.ENVIRONMENT_VARIABLE">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="3" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Cmd.ENVIRONMENT_VARIABLE_DEFINITION">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Cmd.EXPRESSION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Cmd.KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Cmd.NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="Cmd.STRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Cmd.VARIABLE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="3" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="DART.BADCHARACTER">
			<value>
				<option name="FOREGROUND" value="2b36" />
				<option name="BACKGROUND" value="d33682" />
			</value>
		</option>
		<option name="DART.BUILTIN_TYPES">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DART.COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="DART.KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DART.NUMBER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="DART.STRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DART.UNRESERVED_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DEFAULT_BLOCK_COMMENT">
			<value>
				<option name="FOREGROUND" value="657b83" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="DEFAULT_BRACES">
			<value />
		</option>
		<option name="DEFAULT_BRACKETS">
			<value />
		</option>
		<option name="DEFAULT_COMMA">
			<value />
		</option>
		<option name="DEFAULT_CONSTANT">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="DEFAULT_DOC_COMMENT">
			<value>
				<option name="FOREGROUND" value="657b83" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="DEFAULT_DOC_COMMENT_TAG">
			<value>
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="DEFAULT_DOC_COMMENT_TAG_VALUE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="DEFAULT_DOC_MARKUP">
			<value />
		</option>
		<option name="DEFAULT_DOT">
			<value />
		</option>
		<option name="DEFAULT_ENTITY">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="DEFAULT_IDENTIFIER">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="DEFAULT_INSTANCE_FIELD">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="DEFAULT_INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="DEFAULT_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="DEFAULT_LABEL">
			<value>
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_COLOR" value="808080" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="DEFAULT_LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="DEFAULT_METADATA">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="DEFAULT_NUMBER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="DEFAULT_OPERATION_SIGN">
			<value />
		</option>
		<option name="DEFAULT_PARENTHS">
			<value />
		</option>
		<option name="DEFAULT_PREDEFINED_SYMBOL">
			<value>
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="DEFAULT_SEMICOLON">
			<value />
		</option>
		<option name="DEFAULT_STATIC_FIELD">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="DEFAULT_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="DEFAULT_TAG">
			<value />
		</option>
		<option name="DEFAULT_TEMPLATE_LANGUAGE_COLOR">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="DEFAULT_VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="DELETED_TEXT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="DEPRECATED_ATTRIBUTES">
			<value>
				<option name="EFFECT_COLOR" value="586e75" />
				<option name="EFFECT_TYPE" value="3" />
			</value>
		</option>
		<option name="DIFF_CONFLICT">
			<value>
				<option name="BACKGROUND" value="800b09" />
				<option name="ERROR_STRIPE_COLOR" value="dc322f" />
			</value>
		</option>
		<option name="DIFF_DELETED">
			<value>
				<option name="BACKGROUND" value="4d1d08" />
				<option name="ERROR_STRIPE_COLOR" value="4d1d08" />
			</value>
		</option>
		<option name="DIFF_INSERTED">
			<value>
				<option name="BACKGROUND" value="424d00" />
				<option name="ERROR_STRIPE_COLOR" value="99ff99" />
			</value>
		</option>
		<option name="DIFF_MODIFIED">
			<value>
				<option name="BACKGROUND" value="83f4d" />
				<option name="ERROR_STRIPE_COLOR" value="99ccff" />
			</value>
		</option>
		<option name="DJANGO_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="DJANGO_ID">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DJANGO_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DJANGO_NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="DJANGO_STRING_LITERAL">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DJANGO_TAG_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="DUPLICATE_FROM_SERVER">
			<value>
				<option name="EFFECT_COLOR" value="859900" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="ECMAL4.AL4.LOCAL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="ECMAL4.ATTRIBUTE">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.CLASS">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.DOC_MARKUP">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.DOC_TAG">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="ECMAL4.GLOBAL_FUNCTION">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.GLOBAL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.INSTANCE_MEMBER_FUNCTION">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="ECMAL4.INSTANCE_MEMBER_VARIABLE">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.OPERATION_SIGN">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.PARAMETER">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="ECMAL4.SEMICOLON">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="ECMAL4.STATIC_MEMBER_FUNCTION">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="EFFECT_TYPE" value="0" />
			</value>
		</option>
		<option name="EL.BOUNDS">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="EL.IDENT">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="EL.KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="EL.NUMBER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="EL.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="EL_BACKGROUND">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="ENUM_CONST">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="ERRORS_ATTRIBUTES">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
				<option name="ERROR_STRIPE_COLOR" value="dc322f" />
			</value>
		</option>
		<option name="EXECUTIONPOINT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="eee8d5" />
				<option name="BACKGROUND" value="1f70a6" />
			</value>
		</option>
		<option name="FOLDED_TEXT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="FOLLOWED_HYPERLINK_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_COLOR" value="6c71c4" />
			</value>
		</option>
		<option name="First symbol in list">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Float literal">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GENERIC_SERVER_ERROR_OR_WARNING">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
				<option name="ERROR_STRIPE_COLOR" value="dc322f" />
			</value>
		</option>
		<option name="GHERKIN_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="GHERKIN_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="GHERKIN_OUTLINE_PARAMETER_SUBSTITUTION">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="GHERKIN_PYSTRING">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GHERKIN_REGEXP_PARAMETER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GHERKIN_TABLE_CELL">
			<value>
				<option name="FOREGROUND" value="297bde" />
			</value>
		</option>
		<option name="GHERKIN_TABLE_HEADER_CELL">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="GHERKIN_TABLE_PIPE">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="GHERKIN_TAG">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="GO_BRACES">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GO_BRACKET">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GO_BUILTIN_FUNCTION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GO_BUILTIN_TYPE_REFERENCE">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="GO_KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="GO_METHOD_RECEIVER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="GO_SCOPE_VARIABLE">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="GO_TYPE_REFERENCE">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="GQL_ID">
			<value />
		</option>
		<option name="GQL_INT_LITERAL">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="GQL_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="GQL_STRING_LITERAL">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="GROOVY_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="GString">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Groovydoc tag">
			<value>
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="HAML_CLASS">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="HAML_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="HAML_FILTER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="HAML_FILTER_CONTENT">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="HAML_ID">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="HAML_LINE_CONTINUATION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="HAML_RUBY_CODE">
			<value />
		</option>
		<option name="HAML_RUBY_START">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="HAML_TAG">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="HAML_TEXT">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="HAML_XHTML">
			<value>
				<option name="FOREGROUND" value="83ba0d" />
			</value>
		</option>
		<option name="HTML_ATTRIBUTE_NAME">
			<value>
				<option name="FOREGROUND" value="657b83" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="HTML_ATTRIBUTE_VALUE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="HTML_COMMENT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="HTML_ENTITY_REFERENCE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="HTML_TAG">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="HTML_TAG_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="HYPERLINK_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_COLOR" value="268bd2" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="IDENTIFIER_UNDER_CARET_ATTRIBUTES">
			<value>
				<option name="BACKGROUND" value="11407e" />
				<option name="ERROR_STRIPE_COLOR" value="96ccff" />
			</value>
		</option>
		<option name="IMPLICIT_ANONYMOUS_CLASS_PARAMETER_ATTRIBUTES">
			<value />
		</option>
		<option name="INFO_ATTRIBUTES">
			<value>
				<option name="EFFECT_COLOR" value="b58900" />
				<option name="EFFECT_TYPE" value="5" />
				<option name="ERROR_STRIPE_COLOR" value="b58900" />
			</value>
		</option>
		<option name="INLINE_PARAMETER_HINT">
			<value>
				<option name="FOREGROUND" value="787878" />
				<option name="BACKGROUND" value="3b3b3b" />
			</value>
		</option>
		<option name="INLINE_PARAMETER_HINT_CURRENT">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="BACKGROUND" value="3b3b3b" />
			</value>
		</option>
		<option name="INLINE_PARAMETER_HINT_HIGHLIGHTED">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="BACKGROUND" value="3b3b3b" />
			</value>
		</option>
		<option name="INJECTED_LANGUAGE_FRAGMENT">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="INSTANCE_FIELD_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="IVAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Instance field">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="Instance property reference ID">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="Integer literal">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="Invalid escape in string">
			<value>
				<option name="FOREGROUND" value="d43780" />
				<option name="EFFECT_COLOR" value="db312e" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="JADE_ATTRIBUTE_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="JADE_FILE_PATH">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="JADE_JS_BLOCK">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="JADE_STATEMENTS">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="JADE_TAG_ID">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="JADE_TEXT">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="JAVA_DOC_MARKUP">
			<value />
		</option>
		<option name="JAVA_DOC_TAG">
			<value>
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="JAVA_INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="JAVA_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="JAVA_NUMBER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="JAVA_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="JAVA_VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="JFLEX.COMMENT">
			<value>
				<option name="FOREGROUND" value="566c73" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="JFLEX.JAVA_CODE">
			<value>
				<option name="BACKGROUND" value="73440" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX.OPTION_KEYWORD">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX.OPTION_PARAMETER">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX.OPTION_SIGN">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX.SECTION_SIGN">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="BACKGROUND" value="73440" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX.STRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="JFLEX_MACROS">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX_MACROS_REF">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX_OPTION_BACKGROUND">
			<value>
				<option name="BACKGROUND" value="73440" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX_REGEXP_BACKGROUND">
			<value>
				<option name="BACKGROUND" value="73440" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX_REGEXP_CLASS_SYMBOL">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX_REGEXP_SYMBOL">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JFLEX_STATE_REF">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JS.BADCHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="JS.BLOCK_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="JS.DOC_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="JS.DOC_MARKUP">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="JS.DOC_TAG">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="JS.GLOBAL_FUNCTION">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="JS.GLOBAL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="JS.INSTANCE_MEMBER_FUNCTION">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JS.INSTANCE_MEMBER_VARIABLE">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="JS.INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="JS.KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="JS.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="JS.LOCAL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JS.NUMBER">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
			</value>
		</option>
		<option name="JS.OPERATION_SIGN">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
			</value>
		</option>
		<option name="JS.PARAMETER">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="JS.REGEXP">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="JS.SEMICOLON">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
			</value>
		</option>
		<option name="JS.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="JS.VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="JSP_ATTRIBUTE_NAME">
			<value>
				<option name="FOREGROUND" value="657b83" />
			</value>
		</option>
		<option name="JSP_ATTRIBUTE_VALUE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="JSP_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="JSP_DIRECTIVE_BACKGROUND">
			<value />
		</option>
		<option name="JSP_DIRECTIVE_NAME">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="JSP_SCRIPTING_BACKGROUND">
			<value />
		</option>
		<option name="KOTLIN_ANNOTATION">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="KOTLIN_AUTO_CASTED_VALUE">
			<value>
				<option name="FOREGROUND" value="dbffdb" />
				<option name="FONT_TYPE" value="3" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="KOTLIN_CONSTRUCTOR">
			<value>
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="KOTLIN_FUNCTION_CALL">
			<value />
		</option>
		<option name="KOTLIN_INSTANCE_PROPERTY">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="KOTLIN_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="KOTLIN_LABEL">
			<value>
				<option name="FOREGROUND" value="eb952c" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="KOTLIN_MUTABLE_VARIABLE">
			<value>
				<option name="EFFECT_COLOR" value="6c71c4" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="KOTLIN_NAMESPACE_PROPERTY">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="3" />
			</value>
		</option>
		<option name="KOTLIN_PROPERTY_WITH_BACKING_FIELD">
			<value>
				<option name="EFFECT_COLOR" value="268bd2" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="KOTLIN_SEMICOLON">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="KOTLIN_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="KOTLIN_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="KOTLIN_WRAPPED_INTO_REF">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="LABEL">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="LESS_INJECTED_CODE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="LESS_JS_CODE_DELIM">
			<value>
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="LESS_VARIABLE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="LOCALE.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="LOCALE.MSGCTXT_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="LOCALE.MSGID_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="LOCALE.MSGID_PLURAL_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="LOCALE.MSGSTR_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="LOCALE.MSGSTR_PLURAL_KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="LOCALE.STRING_LITERAL">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="LOGCAT_ASSERT_OUTPUT">
			<value>
				<option name="FOREGROUND" value="cf357f" />
			</value>
		</option>
		<option name="LOGCAT_DEBUG_OUTPUT">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="LOGCAT_ERROR_OUTPUT">
			<value>
				<option name="FOREGROUND" value="db322f" />
			</value>
		</option>
		<option name="LOGCAT_INFO_OUTPUT">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="LOGCAT_VERBOSE_OUTPUT">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="LOGCAT_WARNING_OUTPUT">
			<value>
				<option name="FOREGROUND" value="b38700" />
			</value>
		</option>
		<option name="LOG_ERROR_OUTPUT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="LOG_EXPIRED_ENTRY">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="LOG_WARNING_OUTPUT">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="LUA_BAD_CHARACTER">
			<value>
				<option name="BACKGROUND" value="d13681" />
			</value>
		</option>
		<option name="LUA_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="LUA_DEFINED_CONSTANTS">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="LUA_FIELD">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="LUA_GLOBAL_VAR">
			<value>
				<option name="FOREGROUND" value="8c913b" />
			</value>
		</option>
		<option name="LUA_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="LUA_LOCAL_VAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="LUA_LONGCOMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="LUA_LONGCOMMENT_BRACES">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="BACKGROUND" value="73642" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="LUA_LONGSTRING">
			<value>
				<option name="FOREGROUND" value="1da097" />
			</value>
		</option>
		<option name="LUA_LONGSTRING_BRACES">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="LUA_LUADOC">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="LUA_LUADOC_TAG">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_COLOR" value="808080" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="LUA_LUADOC_VALUE">
			<value>
				<option name="FOREGROUND" value="1da097" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="LUA_NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="LUA_PARAMETER">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="LUA_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="LUA_UPVAL">
			<value>
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_COLOR" value="73642" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="List/map to object conversion">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Local lazy val/var">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Local value">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Local variable">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="MACRONAME">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MACRO_PARAMETER">
			<value>
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MAKO.ATTRIBUTE_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MAKO.CONTROL_STRUCTURE_ID">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MAKO.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="MAKO.SUBSTITUTION">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MAKO.TAG">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MAKO.TAG_ID">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.AUTO_LINK">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.BLOCK_QUOTE">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.BOLD_TEXT">
			<value>
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.CODE_BLOCK">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.EXPLICIT_LINK">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.HEADER_LEVEL_1">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.HEADER_LEVEL_2">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.HEADER_LEVEL_3">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.HEADER_LEVEL_4">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.HEADER_LEVEL_5">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.HEADER_LEVEL_6">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="MARKDOWN.HRULE">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.IMAGE">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.ITALIC_TEXT">
			<value>
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.LINK">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.MAIL_LINK">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.QUOTE">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.REFERENCE_LINK">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.TABLE">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MARKDOWN.VERBATIM">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="MATCHED_BRACE_ATTRIBUTES">
			<value>
				<option name="BACKGROUND" value="1f4d2c" />
			</value>
		</option>
		<option name="MESSAGE_ARGUMENT">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Map key">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="NOT_USED_ELEMENT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="OC.BADCHARACTER">
			<value>
				<option name="BACKGROUND" value="dc322f" />
			</value>
		</option>
		<option name="OC.BLOCK_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="OC.CPP_KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="OC.DIRECTIVE">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="OC.EXTERN_VARIABLE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="3" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="OC.GLOBAL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="OC.KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="OC.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="OC.NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="OC.OPERATION_SIGN">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="OC.PARAMETER">
			<value>
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="OC.PROPERTY">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="OC.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="OC.STRUCT_FIELD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="OC_FORMAT_TOKEN">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="OVERLOADED_OPERATOR">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Object">
			<value>
				<option name="FOREGROUND" value="b58800" />
			</value>
		</option>
		<option name="PHP_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="PHP_CONSTANT">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="PHP_DOC_COMMENT_ID">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="PHP_DOC_TAG">
			<value>
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_COLOR" value="586e75" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="PHP_ESCAPE_SEQUENCE">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="PHP_EXEC_COMMAND_ID">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="PHP_FUNCTION">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="PHP_FUNCTION_CALL">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="PHP_HEREDOC_CONTENT">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="PHP_INSTANCE_FIELD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="PHP_INSTANCE_METHOD">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="PHP_KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="PHP_NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="PHP_OPERATION_SIGN">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="PHP_PARAMETER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="PHP_PREDEFINED SYMBOL">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="PHP_SCRIPTING_BACKGROUND">
			<value />
		</option>
		<option name="PHP_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="PHP_TAG">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="PHP_VAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="PROPERTIES.INVALID_STRING_ESCAPE">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="PROPERTIES.KEY">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="PROPERTIES.VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="PROPERTIES.VALUE">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="PROPS.INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="ebe5d2" />
				<option name="BACKGROUND" value="d33682" />
			</value>
		</option>
		<option name="PROPS.KEY">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="PROPS.MACRO">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PROPS.PROFILE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PROPS.SECTION">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PROPS.VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="PROPS.VALUE">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="PROTOCOL_REFERENCE">
			<value>
				<option name="FOREGROUND" value="b38700" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.BUILTIN_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.CLASS_DEFINITION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.DECORATOR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.DOC_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="PY.FUNC_DEFINITION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="EFFECT_COLOR" value="ffffff" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="PY.KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="PY.KEYWORD_ARGUMENT">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="PY.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="PY.NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="PY.PREDEFINED_DEFINITION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.PREDEFINED_USAGE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="PY.STRING.B">
			<value>
				<option name="FOREGROUND" value="3d8080" />
			</value>
		</option>
		<option name="PY.STRING.U">
			<value>
				<option name="FOREGROUND" value="3d8080" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="PY.VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="Predefined types">
			<value>
				<option name="FOREGROUND" value="2688d1" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="QL_ATTRIBUTE">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="QL_BAD_CHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="QL_DATETIME">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="QL_ENTITY">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="QL_FUNCTION">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="QL_ID_VARIABLE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="QL_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="QL_NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="QL_PARAMETER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="QL_STRING">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="REASSIGNED_PARAMETER_ATTRIBUTES">
			<value>
				<option name="EFFECT_COLOR" value="586e75" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="REGEXP.BAD_CHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="REGEXP.BRACES">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="REGEXP.BRACKETS">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="REGEXP.CHAR_CLASS">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="REGEXP.COMMA">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="REGEXP.COMMENT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="REGEXP.ESC_CHARACTER">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="REGEXP.INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="eee8d5" />
				<option name="BACKGROUND" value="d33682" />
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="REGEXP.META">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="REGEXP.PARENTHS">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="REGEXP.QUOTE_CHARACTER">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="REGEXP.REDUNDANT_ESCAPE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="REST.BOLD">
			<value>
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="REST.EXPLICIT">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="REST.FIELD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="REST.FIXED">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="REST.INLINE">
			<value>
				<option name="BACKGROUND" value="73642" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="REST.INTERPRETED">
			<value>
				<option name="FOREGROUND" value="73642" />
				<option name="BACKGROUND" value="b58900" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="REST.ITALIC">
			<value>
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="REST.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="REST.REF.NAME">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="REST.SECTION.HEADER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="RHTML_COMMENT_ID">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="RHTML_EXPRESSION_END_ID">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="RHTML_EXPRESSION_START_ID">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="RHTML_OMIT_NEW_LINE_ID">
			<value>
				<option name="FOREGROUND" value="cc7833" />
			</value>
		</option>
		<option name="RHTML_SCRIPTING_BACKGROUND_ID">
			<value />
		</option>
		<option name="RHTML_SCRIPTLET_END_ID">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="RHTML_SCRIPTLET_START_ID">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="RUBY_BAD_CHARACTER">
			<value>
				<option name="BACKGROUND" value="dc322f" />
			</value>
		</option>
		<option name="RUBY_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="RUBY_CONSTANT">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="RUBY_CONSTANT_DECLARATION">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="RUBY_CVAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="RUBY_ESCAPE_SEQUENCE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="RUBY_EXPR_IN_STRING">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="RUBY_GVAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="RUBY_HASH_ASSOC">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="RUBY_HEREDOC_ID">
			<value>
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_COLOR" value="0" />
			</value>
		</option>
		<option name="RUBY_INVALID_ESCAPE_SEQUENCE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="RUBY_IVAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="RUBY_KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="RUBY_LINE_CONTINUATION">
			<value>
				<option name="EFFECT_COLOR" value="657b83" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="RUBY_LOCAL_VAR_ID">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="RUBY_METHOD_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="RUBY_NTH_REF">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="RUBY_NUMBER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="RUBY_PARAMDEF_CALL">
			<value>
				<option name="FOREGROUND" value="b58916" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="RUBY_PARAMETER_ID">
			<value>
			</value>
		</option>
		<option name="RUBY_REGEXP">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="5" />
			</value>
		</option>
		<option name="RUBY_SPECIFIC_CALL">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="RUBY_SYMBOL">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="RUBY_WORDS">
			<value>
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Rainbow Parens Level 1 (outermost)">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="Rainbow Parens Level 2">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="Rainbow Parens Level 3">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="Rainbow Parens Level 4">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="Rainbow Parens Level 5">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="Rainbow Parens Level 7">
			<value>
				<option name="FOREGROUND" value="87ff" />
			</value>
		</option>
		<option name="Rainbow Parens Level 8">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="Rainbow Parens Level 9">
			<value>
				<option name="FOREGROUND" value="af005f" />
			</value>
		</option>
		<option name="Regular expression">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SASS_ATTRIBUTE">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="SASS_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="SASS_CONSTANT">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="SASS_DIRECTIVE">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SASS_MIXIN">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="SASS_NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="SASS_RULE">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="SASS_STRING">
			<value />
		</option>
		<option name="SASS_VARIABLE">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="SCOPE_KEY_All">
			<value />
		</option>
		<option name="SCOPE_KEY_Non-Project Files">
			<value />
		</option>
		<option name="SCOPE_KEY_Problems">
			<value />
		</option>
		<option name="SCOPE_KEY_Production">
			<value />
		</option>
		<option name="SCOPE_KEY_Project Files">
			<value />
		</option>
		<option name="SCOPE_KEY_Tests">
			<value />
		</option>
		<option name="SEARCH_RESULT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="eee8d5" />
				<option name="BACKGROUND" value="11407e" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="SMARTY_IDENTIFIER">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="SOY.BAD">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="SOY.COMMAND">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SOY.DOC_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="SOY.DOC_COMMENT_IDENTIFIER">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="SOY.IGNORE">
			<value>
				<option name="FOREGROUND" value="73642" />
				<option name="BACKGROUND" value="d33682" />
			</value>
		</option>
		<option name="SOY.KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SOY.NAMESPACE_ID">
			<value>
				<option name="EFFECT_COLOR" value="fdf6e3" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="SOY.NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="SOY.SPECIAL_CHAR">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SOY.STRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SOY.TEMPLATE_ID">
			<value>
				<option name="EFFECT_COLOR" value="fdf6e3" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="SOY.TEMPLATE_PARAMETER">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="SPY-JS.EXCEPTION">
			<value>
				<option name="BACKGROUND" value="ffcccc" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="SPY-JS.FUNCTION_SCOPE">
			<value>
				<option name="BACKGROUND" value="ffffd7" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="SPY-JS.PATH_LEVEL_ONE">
			<value>
				<option name="BACKGROUND" value="e2ffe2" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="SPY-JS.PATH_LEVEL_TWO">
			<value>
				<option name="EFFECT_COLOR" value="0" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="SPY-JS.PROGRAM_SCOPE">
			<value>
				<option name="BACKGROUND" value="ffffd7" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="SPY-JS.VALUE_HINT">
			<value>
				<option name="EFFECT_COLOR" value="a9a9a9" />
			</value>
		</option>
		<option name="SQL_BAD_CHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="SQL_COLUMN">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SQL_COMMENT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="SQL_DATABASE_OBJECT">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="SQL_KEYWORD">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SQL_LABEL">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="SQL_LOCAL_ALIAS">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="SQL_NUMBER">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="SQL_PARAMETER">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="SQL_PROCEDURE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="SQL_SCHEMA">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="SQL_STRING">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="SQL_SYNTETIC_ENTITY">
			<value />
		</option>
		<option name="SQL_TABLE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="SQL_VARIABLE">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="STATIC_FIELD_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="STATIC_FINAL_FIELD_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="STATIC_METHOD_ATTRIBUTES">
			<value />
		</option>
		<option name="STRUCT_LIKE">
			<value>
				<option name="FOREGROUND" value="b38700" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="Scala Abstract class">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="Scala Annotation name">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="Scala Bad character">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="Scala Class">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="Scala Class method call">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="Scala Invalid escape in string">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="Scala Keyword">
			<value>
				<option name="FOREGROUND" value="93a1a1" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Scala Line comment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Scala Local lazy val/var">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="Scala Method declaration">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="Scala Number">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Scala Object method call">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Scala Parameter">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="Scala Pattern value">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="Scala Predefined types">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="Scala Semicolon">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="Scala String">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Scala Template lazy val/var">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="FONT_TYPE" value="3" />
			</value>
		</option>
		<option name="Scala Template val">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="FONT_TYPE" value="3" />
			</value>
		</option>
		<option name="Scala Template var">
			<value>
				<option name="FOREGROUND" value="839496" />
				<option name="FONT_TYPE" value="3" />
			</value>
		</option>
		<option name="Scala Trait">
			<value>
				<option name="FOREGROUND" value="b58900" />
			</value>
		</option>
		<option name="Scala Type Alias">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
			</value>
		</option>
		<option name="Scala Type parameter">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="Scala Valid escape in string">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Scala XML Text">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="ScalaDoc comment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="ScalaDoc comment tag">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="EFFECT_COLOR" value="73642" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="Special symbol">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Standard function">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="3" />
			</value>
		</option>
		<option name="Static field">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="Static property reference ID">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="String">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="TEA.BADCHARACTER">
			<value>
				<option name="FOREGROUND" value="ede7d4" />
				<option name="BACKGROUND" value="d33682" />
			</value>
		</option>
		<option name="TEA.BLOCK_COMMENT">
			<value>
				<option name="FOREGROUND" value="566c73" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="TEA.INVALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="ede7d4" />
				<option name="BACKGROUND" value="d33682" />
			</value>
		</option>
		<option name="TEA.KEYWORD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="TEA.LINE_COMMENT">
			<value>
				<option name="FOREGROUND" value="566c73" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="TEA.NUMBER">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
			</value>
		</option>
		<option name="TEA.SCRIPTING_BACKGROUND">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="TEA.SCRIPTING_FOREGROUND">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="TEA.STRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="TEA.VALID_STRING_ESCAPE">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="TEMPLATE_VARIABLE_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="b58800" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="TEXT">
			<value>
				<option name="FOREGROUND" value="${allTokens['application.editor.foreground'].computedValue}" />
				<option name="BACKGROUND" value="${allTokens['application.editor.background'].computedValue}" />
			</value>
		</option>
		<option name="TEXT_SEARCH_RESULT_ATTRIBUTES">
			<value>
				<option name="BACKGROUND" value="75e42" />
				<option name="ERROR_STRIPE_COLOR" value="ff00" />
			</value>
		</option>
		<option name="TODO_DEFAULT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="ERROR_STRIPE_COLOR" value="268bd2" />
			</value>
		</option>
		<option name="TWIG_BACKGROUND">
			<value />
		</option>
		<option name="TWIG_BAD_CHARACTER">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="TWIG_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="TWIG_IDENTIFIER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="TWIG_KEYWORD">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="TWIG_NUMBER">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="TWIG_OPERATION_SIGN">
			<value>
				<option name="FOREGROUND" value="859900" />
			</value>
		</option>
		<option name="TWIG_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="TYPEDEF">
			<value>
				<option name="FOREGROUND" value="b38700" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="TYPE_PARAMETER_NAME_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="TYPO">
			<value>
				<option name="EFFECT_COLOR" value="859900" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="Template lazy val/var">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Template val">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="Template var">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="Trait">
			<value>
				<option name="FOREGROUND" value="b58800" />
			</value>
		</option>
		<option name="Type Alias">
			<value>
				<option name="FOREGROUND" value="2688d1" />
			</value>
		</option>
		<option name="Type parameter">
			<value>
				<option name="FOREGROUND" value="2688d1" />
			</value>
		</option>
		<option name="UNMATCHED_BRACE_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="2b36" />
				<option name="BACKGROUND" value="dc322f" />
			</value>
		</option>
		<option name="Unresolved reference access">
			<value>
				<option name="EFFECT_COLOR" value="808080" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="Valid escape in string">
			<value>
				<option name="FOREGROUND" value="d43780" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="WARNING_ATTRIBUTES">
			<value>
				<option name="EFFECT_COLOR" value="b58900" />
				<option name="EFFECT_TYPE" value="2" />
				<option name="ERROR_STRIPE_COLOR" value="b58900" />
			</value>
		</option>
		<option name="WRITE_IDENTIFIER_UNDER_CARET_ATTRIBUTES">
			<value>
				<option name="BACKGROUND" value="432c38" />
				<option name="ERROR_STRIPE_COLOR" value="ff82ce" />
			</value>
		</option>
		<option name="WRITE_SEARCH_RESULT_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="eee8d5" />
				<option name="BACKGROUND" value="432c38" />
			</value>
		</option>
		<option name="WRONG_REFERENCES_ATTRIBUTES">
			<value>
				<option name="FOREGROUND" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="Wrong number">
			<value>
				<option name="FOREGROUND" value="db322f" />
			</value>
		</option>
		<option name="Wrong string">
			<value>
				<option name="FOREGROUND" value="db322f" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="Wrong string literal">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="XML_ATTRIBUTE_NAME">
			<value>
				<option name="FOREGROUND" value="657b83" />
			</value>
		</option>
		<option name="XML_ATTRIBUTE_VALUE">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="XML_COMMENT">
			<value>
				<option name="FOREGROUND" value="dc322f" />
			</value>
		</option>
		<option name="XML_ENTITY_REFERENCE">
			<value>
				<option name="FOREGROUND" value="d33682" />
			</value>
		</option>
		<option name="XML_PROLOGUE">
			<value>
				<option name="FOREGROUND" value="92a1a1" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="XML_TAG">
			<value>
				<option name="FOREGROUND" value="586e75" />
			</value>
		</option>
		<option name="XML_TAG_DATA">
			<value />
		</option>
		<option name="XML_TAG_NAME">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="XPATH.FUNCTION">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="XPATH.KEYWORD">
			<value>
				<option name="FOREGROUND" value="2688cf" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="XPATH.NUMBER">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="XPATH.STRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="XPATH.XPATH_NAME">
			<value>
				<option name="FOREGROUND" value="2aa198" />
			</value>
		</option>
		<option name="XPATH.XPATH_VARIABLE">
			<value>
				<option name="FOREGROUND" value="6c71c4" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="YAML_COMMENT">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
			</value>
		</option>
		<option name="YAML_SCALAR_DSTRING">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="YAML_SCALAR_KEY">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="YAML_SCALAR_LIST">
			<value>
				<option name="BACKGROUND" value="73642" />
			</value>
		</option>
		<option name="YAML_SCALAR_STRING">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="FONT_TYPE" value="1" />
			</value>
		</option>
		<option name="bemhtml.bem.error">
			<value>
				<option name="EFFECT_COLOR" value="dc322f" />
				<option name="EFFECT_TYPE" value="2" />
			</value>
		</option>
		<option name="bemhtml.bem.mlcomment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.bem.slcomment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.bem.value">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.braces">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.json.property">
			<value>
				<option name="FOREGROUND" value="859900" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.keyword.entity">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.keyword.mod">
			<value>
				<option name="FOREGROUND" value="268bd2" />
				<option name="FONT_TYPE" value="1" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.keywords.colon">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="bemhtml.keywords.delim">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.block.comment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.brackets">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.identifier">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.keyword">
			<value>
				<option name="FOREGROUND" value="b58900" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.line.comment">
			<value>
				<option name="FOREGROUND" value="586e75" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.operators">
			<value>
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.string">
			<value>
				<option name="FOREGROUND" value="2aa198" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.type.name">
			<value>
				<option name="FOREGROUND" value="d33682" />
				<option name="FONT_TYPE" value="2" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="go.variable">
			<value>
				<option name="FOREGROUND" value="808080" />
				<option name="EFFECT_TYPE" value="-1" />
			</value>
		</option>
		<option name="org.rust.DOC_CODE">
			<value>
				<option name="FOREGROUND" value="839496" />
			</value>
		</option>
		<option name="org.rust.DOC_HEADING">
			<value>
				<option name="FOREGROUND" value="cb4b16" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="org.rust.ENUM">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="org.rust.FUNCTION">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="org.rust.METHOD">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="org.rust.MUT_BINDING">
			<value>
				<option name="EFFECT_COLOR" value="839496" />
				<option name="EFFECT_TYPE" value="1" />
			</value>
		</option>
		<option name="org.rust.STRUCT">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="org.rust.TRAIT">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
		<option name="org.rust.TYPE_ALIAS">
			<value>
				<option name="FOREGROUND" value="268bd2" />
			</value>
		</option>
	</attributes>
</scheme>`
}

export default generateJetbrainsXML;
