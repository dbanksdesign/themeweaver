const generateJetbrainsJSON = ({name, allTokens, dark}) => {
	return JSON.stringify({
		"name": name,
		"dark": dark,
		"author": "",
		"editorScheme": `/themes/${name}.xml`,
		"ui": {
			"*": {
				"background": allTokens[`theme.background.secondary`].computedValue,
				"foreground": allTokens[`theme.font.primary`].computedValue,
	
				"infoForeground": allTokens[`theme.background.info`].computedValue,
	
				"selectionBackground": allTokens[`theme.background.selection.primary.active`].computedValue,
				// "selectionForeground": "#FFFFFF",
				"selectionInactiveBackground": allTokens[`theme.background.selection.primary.inactive`].computedValue,
				"selectionBackgroundInactive": allTokens[`theme.background.selection.primary.inactive`].computedValue,
	
				"disabledBackground": allTokens[`theme.background.tertiary`].computedValue,
				"disabledForeground": allTokens[`theme.font.tertiary`].computedValue,
				"disabledText": allTokens[`theme.font.tertiary`].computedValue,
				"inactiveBackground": allTokens[`theme.background.tertiary`].computedValue,
				"inactiveForeground": allTokens[`theme.font.tertiary`].computedValue,
	
				"acceleratorForeground": "#E6E6E6",
				"acceleratorSelectionForeground": "#E6E6E6",
	
				"errorForeground": allTokens[`theme.font.danger`].computedValue,
	
				"borderColor": allTokens[`theme.border.primary`].computedValue,
				"disabledBorderColor": allTokens[`theme.border.tertiary`].computedValue,
				"focusColor": allTokens[`theme.border.active`].computedValue,
				"focusedBorderColor": allTokens[`theme.border.active`].computedValue,
				"hoverBorderColor": allTokens[`theme.border.active`].computedValue,
				"pressedBorderColor": allTokens[`theme.border.active`].computedValue,
	
				"separatorColor": allTokens[`application.textSeparator.foreground`].computedValue,
				"lineSeparatorColor": allTokens[`application.textSeparator.foreground`].computedValue,
			},
			
			"Borders": {
				"color": "#282a36",
				"ContrastBorderColor": "#282a36"
			},
			"ActionButton": {
				"hoverBackground": allTokens['application.button.hoverBackground'].computedValue,
				"hoverBorderColor": "#00000000",
				"pressedBackground": allTokens['application.button.hoverBackground'].computedValue,
				"pressedBorderColor": "#00000000"
			},
			"Button": {
				"foreground": allTokens['application.button.foreground'].computedValue,
				"startBorderColor": "#00000000",
				"endBorderColor": "#00000000",
				"startBackground": allTokens['theme.background.interactive.base'].computedValue,
				"endBackground": allTokens['theme.background.interactive.base'].computedValue,
				"focusedBorderColor": "#bd93f9",
				"default": {
					"foreground": allTokens['application.button.foreground'].computedValue,
					"startBackground": allTokens['theme.background.interactive.secondary.base'].computedValue,
					"endBackground": allTokens['theme.background.interactive.secondary.base'].computedValue,
					"startBorderColor": "#00000000",
					"endBorderColor": "#00000000",
					"focusColor": "#bd93f9",
					"focusedBorderColor": "#bd93f9"
				}
			},
			"Counter": {
				"foreground": "#414450",
				"background": "#2fc864"
			},
			"CheckBoxMenuItem": {
				"acceleratorSelectionForeground": "#ff79c6"
			},
			"ComboBox": {
				"modifiedItemForeground": "#ff79c6",
				"ArrowButton": {
					"background": "#44475a",
					"nonEditableBackground": "#44475a",
					"iconColor": "#bd93f9"
				},
				"selectionBackground": "#bd93f9",
				"nonEditableBackground": "#44475a"
			},
			"CompletionPopup": {
				"selectionBackground": "#6272a4",
				"selectionInactiveBackground": "#4E5A82",
				"matchForeground": "#ff79c6"
			},
			"Component": {
				"focusColor": "#bd93f9",
				"borderColor": "#6272a4",
				"focusedBorderColor": "#6272a4",
				"errorFocusColor": "#ff5554",
				"inactiveErrorFocusColor": "#ff5554",
				"warningFocusColor": "#f1fa8c",
				"inactiveWarningFocusColor": "#f1fa8c"
			},
			"DragAndDrop": {
				"areaBorderColor": "#6272a4"
			},
			"Editor": {
				"background": allTokens['application.editor.background'].computedValue,
				"shortcutForeground": "#ff79c6"
			},
			"EditorTabs": {
				"background": allTokens['application.editorGroupHeader.tabsBackground'].computedValue,
				"underlinedTabBackground": allTokens['application.tab.activeBackground'].computedValue,
				"underlineColor": allTokens['application.tab.unfocusedHoverBorder'].computedValue,
				"underlineHeight": 1
			},
			"FileColor": {
				"Blue": allTokens['theme.font.blue.transparent'].computedValue,
				"Green": allTokens['theme.font.green.transparent'].computedValue,
				"Orange": allTokens['theme.font.orange.transparent'].computedValue,
				"Yellow": allTokens['theme.font.yellow.transparent'].computedValue,
				"Rose": allTokens['theme.font.pink.transparent'].computedValue,
				"Violet": allTokens['theme.font.purple.transparent'].computedValue
			},
			"Label": {
				"foreground": allTokens['theme.font.secondary'].computedValue,
				"errorForeground": allTokens['theme.font.danger'].computedValue
			},
			"Link": {
				"activeForeground": allTokens['theme.font.link.primary.inactive'].computedValue,
				"hoverForeground": allTokens['theme.font.link.primary.active'].computedValue,
				"visitedForeground": allTokens['theme.font.link.secondary.active'].computedValue,
				"pressedForeground": allTokens['theme.font.link.primary.active'].computedValue
			},
			"Notification": {
				"borderColor": "#6272a4",
				"errorBorderColor": "#ff5554",
				"errorBackground": "#414450",
				"errorForeground": "#f8f8f2",
				"ToolWindow": {
					"warningForeground": "#f8f8f2",
					"warningBackground": "#414450",
					"warningBorderColor": "#ffb86c",
					"errorForeground": "#f8f8f2",
					"errorBorderColor": "#ff5554",
					"errorBackground": "#414450",
					"informativeForeground": "#f8f8f2",
					"informativeBackground": "#414450",
					"informativeBorderColor": "#50fa7b"
				}
			},
			"Panel.background": allTokens['theme.background.tertiary'].computedValue,
			"Plugins": {
				"SearchField": {
					"background": "#44475a"
				},
				"SectionHeader": {
					"foreground": "#f8f8f2"
				},
				"lightSelectionBackground": "#282a35",
				"Button": {
					"installBorderColor": "#bd93f9",
					"installForeground": "#bd93f9",
					"installBackground": "#414450",
					"installFillForeground": "#414450",
					"installFillBackground": "#bd93f9",
					"installFocusedBackground": "#414450",
					"updateBorderColor": "#5da3f4",
					"updateForeground": "#f8f8f2",
					"updateBackground": "#5da3f4"
				},
				"Tab": {
					"selectedBackground": "#282a35",
					"selectedForeground": "#f8f8f2",
					"hoverBackground": "#282a35"
				}
			},
			"ProgressBar": {
				"failedColor": "#ff5554",
				"failedEndColor": "#ff5554",
				"trackColor": "#6272a4",
				"progressColor": "#ff79c6",
				"indeterminateStartColor": "#bd93f9",
				"indeterminateEndColor": "#bd93f9",
				"passedColor": "#50fa7b",
				"passedEndColor": "#50fa7b"
			},
			"Popup": {
				"Header": {
					"activeBackground": "#44475a",
					"inactiveBackground": "#44475a"
				}
			},
			"SearchEverywhere": {
				"SearchField": {
					"background": "#44475a"
				},
				"Tab": {
					"selectedBackground": "#313341",
					"selectedForeground": "#f8f8f2"
				}
			},
			"SearchMatch": {
				"startBackground": "#ff79c6",
				"endBackground": "#ff79c6"
			},
			"Separator.separatorColor": allTokens['theme.border.tertiary'].computedValue,
			"TabbedPane": {
				"tabSelectionHeight": 1,
				"focusColor": "#282a35",
				"hoverColor": "#282a35",
				"underlineColor": "#bd93f9",
				"contentAreaColor": "#282a35"
			},
			"ToggleButton": {
				"onBackground": "#50fa7b",
				"onForeground": "#282a35",
				"offBackground": "#6272a4",
				"offForeground": "#282a35",
				"buttonColor": "#f8f8f2"
			},
			"ToolWindow": {
				"Button": {
					"hoverBackground": allTokens['theme.background.interactive.base'].computedValue
				},
				"Header": {
					"background": allTokens['application.panel.background'].computedValue,
					"inactiveBackground": allTokens['application.panel.background'].computedValue
				},
				"HeaderTab": {
					"underlineColor": "#bd93f9",
					"underlineHeight": 1,
					"underlinedTabBackground": "#313341",
					"underlinedTabInactiveBackground": "#313341"
				}
			},
			"Tree": {
				"modifiedItemForeground": allTokens['application.gitDecoration.modifiedResourceForeground'].computedValue,
				"selectionBackground": allTokens['application.list.activeSelectionBackground'].computedValue,
				"selectionInactiveBackground": allTokens['application.list.inactiveSelectionBackground'].computedValue
			},
			"ValidationTooltip": {
				"errorBackground": "#ff5554",
				"errorBorderColor": "#ff5554",
				"warningBorderColor": "#ffb86c",
				"warningBackground": "#ffb86c"
			},
			"VersionControl": {
				"FileHistory": {
					"Commit": {
						"selectedBranchBackground": "#44475a"
					}
				},
				"GitLog": {
					"headIconColor": "#f1fa8c",
					"localBranchIconColor": "#50fa7b",
					"remoteBranchIconColor": "#bd93f9",
					"tagIconColor": "#ff79c6",
					"otherIconColor": "#8be9fd"
				},
				"Log": {
					"Commit": {
						"currentBranchBackground": "#44475a"
					}
				}
			},
			"WelcomeScreen": {
				"separatorColor": "#191b1f",
				"Projects": {
					"background": "#282a35",
					"selectionBackground": "#44475a",
					"selectionInactiveBackground": "#44475a"
				}
			}
		},
		"icons": {
			"ColorPalette": {
				"Actions.Blue": allTokens['theme.font.code.27'].computedValue,
				"Actions.Green": allTokens['theme.font.code.25'].computedValue,
				"Actions.Grey": allTokens['theme.font.tertiary'].computedValue,
				"Actions.GreyInline.Dark": allTokens['theme.font.quaternary'].computedValue,
				"Actions.GreyInline": allTokens['theme.font.quaternary'].computedValue,
				"Actions.Red": allTokens['theme.font.code.21'].computedValue,
				"Actions.Yellow": allTokens['theme.font.code.23'].computedValue,
				"Objects.Blue": allTokens['theme.font.code.25'].computedValue,
				"Objects.Green": allTokens['theme.font.code.27'].computedValue,
				"Objects.GreenAndroid": allTokens['theme.font.code.27'].computedValue,
				"Objects.Grey": allTokens['theme.font.tertiary'].computedValue,
				"Objects.Pink": allTokens['theme.font.code.29'].computedValue,
				"Objects.Purple": allTokens['theme.font.code.28'].computedValue,
				"Objects.Red": allTokens['theme.font.code.21'].computedValue,
				"Objects.RedStatus": allTokens['theme.font.code.21'].computedValue,
				"Objects.Yellow": allTokens['theme.font.code.23'].computedValue,
				"Objects.YellowDark": allTokens['theme.font.code.3'].computedValue,
				"Objects.BlackText": "#282a35",
				"Checkbox.Border.Default.Dark": allTokens['theme.background.interactive.base'].computedValue,
				"Checkbox.Border.Selected.Dark": allTokens['theme.background.interactive.hover'].computedValue,
				"Checkbox.Background.Default.Dark": allTokens['theme.background.interactive.secondary.base'].computedValue,
				"Checkbox.Foreground.Selected.Dark": allTokens['theme.background.interactive.secondary.hover'].computedValue,
				"Checkbox.Focus.Wide.Dark": "#bd93f9",
				"Checkbox.Focus.Thin.Selected.Dark": "#bd93f9",
				"Checkbox.Focus.Thin.Default.Dark": "#bd93f9"
			}
		}
	}, null, 2);
}

export default generateJetbrainsJSON;
