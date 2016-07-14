const fs = require("fs");

const PACKAGE_NAME = "native-ui-customizable";

const TAB_CLOSE_BUTTON_POSITION_CONFIG = `${PACKAGE_NAME}.tabCloseButtonPosition`;
const TAB_HEIGHT_CONFIG = `${PACKAGE_NAME}.tabHeight`;
const TAB_MAX_WIDTH_CONFIG = `${PACKAGE_NAME}.tabMaxWidth`;

function formatTabMaxWidth(value) {
	if (typeof value === "number") {
		return value + "px";
	} else {
		return "100%";
	}
}

function writeCustomStyle(options) {
	const tabMaxWidth = atom.config.get(TAB_MAX_WIDTH_CONFIG);
	const currentStyles = {
		"@tab-height": atom.config.get(TAB_HEIGHT_CONFIG) + "px",
		"@tab-max-width": formatTabMaxWidth(tabMaxWidth)
	};
	var optionsToWrite = Object.assign(currentStyles, options.styles);
	var customStyleContent = "";
	Object.keys(optionsToWrite).forEach(function (k) {
		customStyleContent += `${k}: ${optionsToWrite[k]};\r\n`;
	});

	fs.writeFile(`${__dirname}/../styles/custom.less`, customStyleContent, "utf8", () => {
		if (!options || !options.noReload) {
			var themePackage = atom.packages.getLoadedPackage(PACKAGE_NAME);

			if (themePackage) {
				themePackage.deactivate();
				setImmediate(() => themePackage.activate());
			}
		}
	});
}

function applyTabCloseIconStyle(value) {
	const tabBar = document.querySelectorAll(".tab-bar");
	if (tabBar) {
		if (value === "Right") {
			tabBar[0].classList.add("close-icon-right");
		} else {
			tabBar[0].classList.remove("close-icon-right");
		}
	}
}

module.exports = {
	config: {
		tabHeight: {
			title: "Tab Height (px):",
			type: "integer",
			minimum: 19,
			maximum: 32,
			default: 24
		},
		tabMaxWidth: {
			title: "Tab Max Width (px): ",
			type: ["integer", "string"],
			default: "Auto"
		},
		tabCloseButtonPosition: {
			title: "Tabs Close Button Position: ",
			description: "",
			type: "string",
			default: "Left",
			enum: [
				"Left",
				"Right"
			]
		}
	},
	activate() {
		atom.config.onDidChange(TAB_CLOSE_BUTTON_POSITION_CONFIG, (evt) => {
			applyTabCloseIconStyle(evt.newValue);
		});
		atom.config.onDidChange(TAB_HEIGHT_CONFIG, (evt) => {
			writeCustomStyle({
				styles: {
					"@tab-height": evt.newValue + "px"
				}
			});
		});
		atom.config.onDidChange(TAB_MAX_WIDTH_CONFIG, (evt) => {
			writeCustomStyle({
				styles: {
					"@tab-max-width": formatTabMaxWidth(evt.newValue)
				}
			});
		});
	},
	deactivate() {

	}
};
