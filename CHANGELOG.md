# Changelog

## 0.18.3

- Make the [Linter Package](https://atom.io/packages/linter) match Native UI's appearance.

## 0.18.2

- Reset changes from [#47](https://github.com/fv0/native-ui/issues/42). Issue mentioned in [#55](https://github.com/fv0/native-ui/issues/42).

## 0.18.1

- Added some new loading indicators.

## 0.18.0

- [#48](https://github.com/fv0/native-ui/issues/42): Removed :before of modal
- When renaming large file paths they are displayed in one text field and not in one line
- If the tree view is hidden and only one file is shown, the tab bar gets hidden (thanks @leo).

## 0.17.0

- Removed deprecated classes highlighted by Deprecation Cop.
- Show resize handle on hover in the treeview
- Unfocused state of tab bar when no file is open gets displayed in the correct color.

## 0.16.1

- Bringing back an improved unfocused window state

## 0.16.0

- Removed window blur
- New folder arrows
- Increase of the tab color contrast
- Finetuned status bar appearance

## 0.15.1

- [#42](https://github.com/fv0/native-ui/issues/42): Fix for two icons looking messed up.

## 0.15.0

- Added ICO file for Windows users
- Fixed double border on top of project search results
- Removed right margin on Git status bar items
- Updated screenshots

## 0.14.0

- Increased contrast between active tab and normal tabs.
- The status bar items and display of the Git status have been slightly modified.
- Added a border around the list of items when toggling the command palette, fuzzy finder, etc
- All elements now have a decreased opacity when not in focus.
- Fixed bug that the border between editor and tree view sometimes vanished (might relate to [#39](https://github.com/fv0/native-ui/issues/39)).

## 0.13.0

- Perfected close buttons.
- Made the tabs and treeview have a lighter color, when the window is out of focus. Thanks to [leo](https://github.com/leo).
- Added subtle gradient to status bar like in Finder.
- Adjusted the Git status indicators for the tabs.

## 0.12.0

- Simplified the _modified_ indicator and removed the color of it.
- Moved changelog to seperate file. Atom now recognizes this and shows it as a button in the theme.
- Added colored tab corners to show the Git status.
- Fixed [#29](https://github.com/fv0/native-ui/issues/29): No more overlapping of the scrollbar if you decide to have scrollbars visible all the time.
- Fixed [#30](https://github.com/fv0/native-ui/issues/30): When the files tree view is closed there is no more border to the left of the window.
- Fixed [#35](https://github.com/fv0/native-ui/pull/35): Spell corrections didn't have the correct background color.
- Adjusted box-shadows globally to look more natural.

### 0.11.0

- Fixed [#27](https://github.com/fv0/native-ui/issues/27): You can know scroll and click in the modal windows again.
- Fixed [#23](https://github.com/fv0/native-ui/issues/23): For people who choose VCS coloring in the settings of the `tabs` package, this is a more better readible display and is optically identical to the sidebar solution. [#25](https://github.com/fv0/native-ui/issues/25) is related.
- Fixed [#22](https://github.com/fv0/native-ui/issues/22): No border bottom radius on popup window when there is no description.
- Started this changelog.
