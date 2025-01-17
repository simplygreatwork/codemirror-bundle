
import {
	keymap,
	highlightSpecialChars,
	drawSelection,
	highlightActiveLine,
	dropCursor,
	rectangularSelection,
	crosshairCursor,
   lineNumbers,
	highlightActiveLineGutter,
	EditorView
} from "@codemirror/bundle"

import {
	EditorState
} from "@codemirror/bundle"

import {
	defaultHighlightStyle,
	syntaxHighlighting,
	indentOnInput,
	bracketMatching,
	foldGutter,
	foldKeymap
} from "@codemirror/bundle"

import {
	defaultKeymap,
	history,
	historyKeymap
} from "@codemirror/bundle"

import {
	searchKeymap,
	highlightSelectionMatches
} from "@codemirror/bundle"

import {
	autocompletion,
	completionKeymap,
	closeBrackets,
	closeBracketsKeymap
} from "@codemirror/bundle"

import {
	lintKeymap
} from "@codemirror/bundle"

export const basic_setup = (() => [
	
	lineNumbers(),
	highlightActiveLineGutter(),
	highlightSpecialChars(),
	history(),
	foldGutter(),
	drawSelection(),
	dropCursor(),
	EditorState.allowMultipleSelections.of(true),
	indentOnInput(),
	syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
	bracketMatching(),
	closeBrackets(),
	autocompletion(),
	rectangularSelection(),
	crosshairCursor(),
	highlightActiveLine(),
	highlightSelectionMatches(),
	keymap.of([
		...closeBracketsKeymap,
		...defaultKeymap,
		...searchKeymap,
		...historyKeymap,
		...foldKeymap,
		...completionKeymap,
		...lintKeymap
	])
])()

export const minimal_setup = (() => [
	
	highlightSpecialChars(),
	history(),
	drawSelection(),
	syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
	keymap.of([
		...defaultKeymap,
		...historyKeymap,
	])
])()
