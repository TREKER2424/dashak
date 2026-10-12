import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ZmZBLKrA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BADGES = {
	NNN: {
		bg: "#1F4E9A",
		fg: "#F4F7FB",
		d: "M16 46V18h8l16 18V18h8v28h-8L24 28v18z"
	},
	KHD: {
		bg: "#0A4C9A",
		fg: "#F2F6FB",
		d: "M32 12c8 10 14 18 14 26a14 14 0 0 1-28 0c0-8 6-16 14-26z"
	},
	POB: {
		bg: "#9E1B32",
		fg: "#F6F3EE",
		d: "M32 14 52 46H12z"
	},
	SHP: {
		bg: "#1A1A1A",
		fg: "#F58220",
		d: "M32 10 54 32 32 54 10 32z"
	},
	SBR: {
		bg: "#CC0000",
		fg: "#F4F0EA",
		d: "M30 8h4v30h10L32 56 20 38h10z"
	},
	RVD: {
		bg: "#12344D",
		fg: "#3DDCFF",
		d: "M8 24c6-8 10-8 16 0s10 8 16 0 10-8 16 0v6c-6 0-10 2-16-6s-10-8-16-2-10 6-16 2zm0 16c6-8 10-8 16 0s10 8 16 0 10-8 16 0v6c-6 0-10 2-16-6s-10-8-16-2-10 6-16 2z"
	},
	ARZ: {
		bg: "#123A70",
		fg: "#F4F7FB",
		d: "M14 50V28a18 18 0 0 1 36 0v22h-8V28a10 10 0 0 0-20 0v22z"
	},
	MVY: {
		bg: "#1A1A1A",
		fg: "#E05A00",
		d: "M12 48V16l20 22 20-22v32h-8V30L32 44 20 30v18z"
	},
	ENI: {
		bg: "#0C2340",
		fg: "#D71920",
		d: "M16 50 38 12h12L28 50z"
	},
	KDV: {
		bg: "#1F7A3A",
		fg: "#F4F7F2",
		d: "M32 10c2 10 12 14 12 24 0 8-5 16-12 20-7-4-12-12-12-20 0-10 10-14 12-24z"
	},
	SIB: {
		bg: "#1B4F9C",
		fg: "#F4F7FB",
		d: "M6 48 22 18l10 14 8-18 18 34z"
	},
	DBA: {
		bg: "#1E4ED8",
		fg: "#F7F7F2",
		d: "M16 14h18a16 16 0 0 1 0 36H16zm8 8h10a8 8 0 0 1 0 20H24z"
	},
	IRT: {
		bg: "#111111",
		fg: "#F5C400",
		d: "M8 26h48v8H8zm0 14c8-10 14-10 22 0s14 10 22 0v8H8z"
	},
	TMP: {
		bg: "#3A2A08",
		fg: "#E2B93B",
		d: "M32 8l4 14 14-4-8 12 14 6-16 2 8 14-14-10-14 10 8-14-16-2 14-6-8-12 14 4z"
	},
	BUR: {
		bg: "#0033A0",
		fg: "#FFD100",
		d: "M32 14a18 18 0 1 0 .1 0z"
	},
	BAI: {
		bg: "#0E7490",
		fg: "#E7F6F8",
		d: "M6 34c8-10 14-10 20 0s14 10 20 0 12-10 16 0v14H6z"
	}
};
function Crest({ id, className = "h-10 w-10" }) {
	const badge = BADGES[id];
	if (badge) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 64 64",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "32",
			r: "30",
			fill: badge.bg
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: badge.d,
			fill: badge.fg,
			fillRule: "evenodd"
		})]
	});
	const common = {
		className,
		viewBox: "0 0 64 64",
		"aria-hidden": true
	};
	switch (id) {
		case "KHM": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "32",
					r: "30",
					fill: "#981C1E"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 10c2 8 2 12 0 18-6 2-10 8-10 14h20c0-6-4-12-10-14 2-6 2-10 0-18z",
					fill: "#F4F0EA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "46",
					r: "4",
					fill: "#981C1E"
				})
			]
		});
		case "SPM": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "32",
					r: "30",
					fill: "#CC0000"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M14 40 32 12l18 28H14z",
					fill: "#F4F0EA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22 40 32 24l10 16H22z",
					fill: "#CC0000"
				})
			]
		});
		case "SHU": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "32",
					r: "30",
					fill: "#1F6B45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 12c6 8 8 14 8 22H24c0-8 2-14 8-22z",
					fill: "#F4F1E8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 28c4 4 6 8 6 12H26c0-4 2-8 6-12z",
					fill: "#1F6B45"
				})
			]
		});
		case "ENR": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "30",
				fill: "#142033"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M34 8 22 34h10l-4 22 18-30H34l4-18z",
				fill: "#E2B93B"
			})]
		});
		case "ZNM": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "30",
				fill: "#7A1F2B"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 18h32v8H16zM18 26h28l-4 24H22L18 26z",
				fill: "#F2C94C"
			})]
		});
		case "ALT": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "30",
				fill: "#2E6BFF"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "m32 12 4 12h12l-10 8 4 12-10-7-10 7 4-12-10-8h12z",
				fill: "#F7F7F2"
			})]
		});
		case "SKL": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "30",
				fill: "#143024"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 36c8-16 14-20 20-20 4 8 6 14 4 24-6 2-12 2-18 0 2-4 4-8 2-12-4 2-8 6-8 8z",
				fill: "#8FE388"
			})]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			...common,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "30",
				fill: "#0E6E8C"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 34c6-6 10-6 16 0s10 6 16 0 10-6 12 0v8c-6 0-10 2-16-4s-10-6-16-2-10 6-12 4z",
				fill: "#E7F2EA"
			})]
		});
	}
}
var active = "ru";
function setActiveLang(lang) {
	active = lang === "en" ? "en" : "ru";
	if (typeof document !== "undefined") document.documentElement.lang = active;
}
function getLang() {
	return active;
}
/** Interface copy. Russian stays the default; English is used only after the settings switch. */
function tr(ruText, enText) {
	return active === "en" ? enText : ruText;
}
var HALF_L = 52.5;
var GOAL_HW = 3.66;
var FORMATIONS = {
	"4-3-3": [
		{
			"x": 0,
			"y": -.92,
			"role": "GK"
		},
		{
			"x": -.78,
			"y": -.5,
			"role": "LB"
		},
		{
			"x": -.28,
			"y": -.58,
			"role": "CB"
		},
		{
			"x": .28,
			"y": -.58,
			"role": "CB"
		},
		{
			"x": .78,
			"y": -.5,
			"role": "RB"
		},
		{
			"x": -.42,
			"y": -.08,
			"role": "CM"
		},
		{
			"x": .42,
			"y": -.08,
			"role": "CM"
		},
		{
			"x": 0,
			"y": .12,
			"role": "CAM"
		},
		{
			"x": -.7,
			"y": .4,
			"role": "LW"
		},
		{
			"x": 0,
			"y": .48,
			"role": "ST"
		},
		{
			"x": .7,
			"y": .4,
			"role": "RW"
		}
	],
	"4-4-2": [
		{
			"x": 0,
			"y": -.92,
			"role": "GK"
		},
		{
			"x": -.78,
			"y": -.5,
			"role": "LB"
		},
		{
			"x": -.28,
			"y": -.58,
			"role": "CB"
		},
		{
			"x": .28,
			"y": -.58,
			"role": "CB"
		},
		{
			"x": .78,
			"y": -.5,
			"role": "RB"
		},
		{
			"x": -.7,
			"y": .02,
			"role": "LM"
		},
		{
			"x": -.24,
			"y": -.08,
			"role": "CM"
		},
		{
			"x": .24,
			"y": -.08,
			"role": "CM"
		},
		{
			"x": .7,
			"y": .02,
			"role": "RM"
		},
		{
			"x": -.18,
			"y": .46,
			"role": "ST"
		},
		{
			"x": .18,
			"y": .46,
			"role": "ST"
		}
	],
	"3-5-2": [
		{
			"x": 0,
			"y": -.92,
			"role": "GK"
		},
		{
			"x": -.42,
			"y": -.56,
			"role": "CB"
		},
		{
			"x": 0,
			"y": -.6,
			"role": "CB"
		},
		{
			"x": .42,
			"y": -.56,
			"role": "CB"
		},
		{
			"x": -.82,
			"y": -.05,
			"role": "LM"
		},
		{
			"x": -.4,
			"y": -.12,
			"role": "CM"
		},
		{
			"x": 0,
			"y": .02,
			"role": "CAM"
		},
		{
			"x": .4,
			"y": -.12,
			"role": "CM"
		},
		{
			"x": .82,
			"y": -.05,
			"role": "RM"
		},
		{
			"x": -.18,
			"y": .46,
			"role": "ST"
		},
		{
			"x": .18,
			"y": .46,
			"role": "ST"
		}
	],
	"4-2-3-1": [
		{
			"x": 0,
			"y": -.92,
			"role": "GK"
		},
		{
			"x": -.78,
			"y": -.5,
			"role": "LB"
		},
		{
			"x": -.28,
			"y": -.58,
			"role": "CB"
		},
		{
			"x": .28,
			"y": -.58,
			"role": "CB"
		},
		{
			"x": .78,
			"y": -.5,
			"role": "RB"
		},
		{
			"x": -.28,
			"y": -.18,
			"role": "CDM"
		},
		{
			"x": .28,
			"y": -.18,
			"role": "CDM"
		},
		{
			"x": -.62,
			"y": .18,
			"role": "LW"
		},
		{
			"x": 0,
			"y": .16,
			"role": "CAM"
		},
		{
			"x": .62,
			"y": .18,
			"role": "RW"
		},
		{
			"x": 0,
			"y": .48,
			"role": "ST"
		}
	]
};
var FORMATION_IDS = [
	"4-3-3",
	"4-4-2",
	"3-5-2",
	"4-2-3-1"
];
var TEAMS = [
	{
		"id": "KHM",
		"code": "KHM",
		"name": "Химик-Август",
		"city": "Вурнары",
		"stadium": "Стадион Химик",
		"home": "#981C1E",
		"away": "#F4F0EA",
		"league": "chuvash",
		"roster": [
			{
				"name": "И. Иванов",
				"pos": "GK",
				"ovr": 68,
				"speed": 62,
				"stamina": 88,
				"num": 1,
				"age": 27
			},
			{
				"name": "П. Андреев",
				"pos": "LB",
				"ovr": 63,
				"speed": 76,
				"stamina": 88,
				"num": 2,
				"age": 28
			},
			{
				"name": "А. Николаев",
				"pos": "CB",
				"ovr": 65,
				"speed": 68,
				"stamina": 85,
				"num": 3,
				"age": 32
			},
			{
				"name": "Р. Егоров",
				"pos": "CB",
				"ovr": 64,
				"speed": 76,
				"stamina": 79,
				"num": 4,
				"age": 27
			},
			{
				"name": "К. Орлов",
				"pos": "RB",
				"ovr": 66,
				"speed": 77,
				"stamina": 85,
				"num": 5,
				"age": 26
			},
			{
				"name": "В. Фёдоров",
				"pos": "CM",
				"ovr": 70,
				"speed": 75,
				"stamina": 92,
				"num": 6,
				"age": 32
			},
			{
				"name": "Д. Кузьмин",
				"pos": "CM",
				"ovr": 67,
				"speed": 74,
				"stamina": 89,
				"num": 8,
				"age": 29
			},
			{
				"name": "Л. Степанов",
				"pos": "CAM",
				"ovr": 68,
				"speed": 69,
				"stamina": 81,
				"num": 10,
				"age": 23
			},
			{
				"name": "Н. Григорьев",
				"pos": "LW",
				"ovr": 67,
				"speed": 73,
				"stamina": 84,
				"num": 11,
				"age": 28
			},
			{
				"name": "С. Васильев",
				"pos": "ST",
				"ovr": 72,
				"speed": 84,
				"stamina": 89,
				"num": 9,
				"age": 21
			},
			{
				"name": "А. Павлов",
				"pos": "RW",
				"ovr": 65,
				"speed": 77,
				"stamina": 87,
				"num": 7,
				"age": 25
			},
			{
				"name": "Г. Ермолаев",
				"pos": "GK",
				"ovr": 66,
				"speed": 61,
				"stamina": 88,
				"num": 12,
				"age": 23
			},
			{
				"name": "А. Воробьёв",
				"pos": "CB",
				"ovr": 70,
				"speed": 71,
				"stamina": 80,
				"num": 13,
				"age": 30
			},
			{
				"name": "М. Алексеев",
				"pos": "CM",
				"ovr": 67,
				"speed": 81,
				"stamina": 80,
				"num": 14,
				"age": 32
			},
			{
				"name": "Г. Зайцев",
				"pos": "ST",
				"ovr": 65,
				"speed": 67,
				"stamina": 91,
				"num": 15,
				"age": 26
			},
			{
				"name": "П. Павлов",
				"pos": "LW",
				"ovr": 69,
				"speed": 79,
				"stamina": 79,
				"num": 16,
				"age": 29
			}
		]
	},
	{
		"id": "SPM",
		"code": "SPM",
		"name": "Спартак",
		"city": "Чебоксары",
		"stadium": "Олимпийский",
		"home": "#CC0000",
		"away": "#1E4ED8",
		"league": "chuvash",
		"roster": [
			{
				"name": "Д. Петров",
				"pos": "GK",
				"ovr": 64,
				"speed": 60,
				"stamina": 82,
				"num": 1,
				"age": 28
			},
			{
				"name": "С. Козлов",
				"pos": "LB",
				"ovr": 65,
				"speed": 70,
				"stamina": 82,
				"num": 2,
				"age": 22
			},
			{
				"name": "А. Белов",
				"pos": "CB",
				"ovr": 66,
				"speed": 73,
				"stamina": 92,
				"num": 4,
				"age": 26
			},
			{
				"name": "И. Морозов",
				"pos": "CB",
				"ovr": 63,
				"speed": 78,
				"stamina": 90,
				"num": 5,
				"age": 19
			},
			{
				"name": "В. Новиков",
				"pos": "RB",
				"ovr": 64,
				"speed": 68,
				"stamina": 80,
				"num": 3,
				"age": 22
			},
			{
				"name": "П. Лебедев",
				"pos": "CM",
				"ovr": 67,
				"speed": 75,
				"stamina": 80,
				"num": 6,
				"age": 27
			},
			{
				"name": "К. Михайлов",
				"pos": "CM",
				"ovr": 68,
				"speed": 70,
				"stamina": 87,
				"num": 8,
				"age": 31
			},
			{
				"name": "Р. Алексеев",
				"pos": "CAM",
				"ovr": 66,
				"speed": 78,
				"stamina": 90,
				"num": 10,
				"age": 21
			},
			{
				"name": "А. Киселёв",
				"pos": "LW",
				"ovr": 65,
				"speed": 78,
				"stamina": 85,
				"num": 11,
				"age": 19
			},
			{
				"name": "М. Смирнов",
				"pos": "ST",
				"ovr": 69,
				"speed": 81,
				"stamina": 87,
				"num": 9,
				"age": 20
			},
			{
				"name": "Н. Попов",
				"pos": "RW",
				"ovr": 67,
				"speed": 77,
				"stamina": 85,
				"num": 7,
				"age": 22
			},
			{
				"name": "И. Ермолаев",
				"pos": "GK",
				"ovr": 63,
				"speed": 61,
				"stamina": 79,
				"num": 12,
				"age": 23
			},
			{
				"name": "К. Николаев",
				"pos": "CB",
				"ovr": 67,
				"speed": 73,
				"stamina": 80,
				"num": 13,
				"age": 19
			},
			{
				"name": "Н. Смирнов",
				"pos": "CM",
				"ovr": 70,
				"speed": 77,
				"stamina": 79,
				"num": 14,
				"age": 21
			},
			{
				"name": "П. Павлов",
				"pos": "ST",
				"ovr": 74,
				"speed": 70,
				"stamina": 85,
				"num": 15,
				"age": 29
			},
			{
				"name": "Н. Назаров",
				"pos": "LW",
				"ovr": 70,
				"speed": 69,
				"stamina": 82,
				"num": 16,
				"age": 25
			}
		]
	},
	{
		"id": "SHU",
		"code": "SHU",
		"name": "ФК Шумерля",
		"city": "Шумерля",
		"stadium": "Труд",
		"home": "#1F6B45",
		"away": "#F4F1E8",
		"league": "chuvash",
		"roster": [
			{
				"name": "Р. Воробьёв",
				"pos": "GK",
				"ovr": 60,
				"speed": 58,
				"stamina": 85,
				"num": 1,
				"age": 31
			},
			{
				"name": "И. Киселёв",
				"pos": "LB",
				"ovr": 63,
				"speed": 83,
				"stamina": 83,
				"num": 2,
				"age": 31
			},
			{
				"name": "И. Ермолаев",
				"pos": "CB",
				"ovr": 64,
				"speed": 77,
				"stamina": 87,
				"num": 3,
				"age": 21
			},
			{
				"name": "В. Павлов",
				"pos": "CB",
				"ovr": 64,
				"speed": 70,
				"stamina": 90,
				"num": 4,
				"age": 27
			},
			{
				"name": "Р. Попов",
				"pos": "RB",
				"ovr": 64,
				"speed": 78,
				"stamina": 85,
				"num": 5,
				"age": 29
			},
			{
				"name": "Л. Виноградов",
				"pos": "CM",
				"ovr": 60,
				"speed": 82,
				"stamina": 92,
				"num": 6,
				"age": 27
			},
			{
				"name": "Р. Николаев",
				"pos": "CM",
				"ovr": 60,
				"speed": 70,
				"stamina": 86,
				"num": 7,
				"age": 32
			},
			{
				"name": "Д. Савельев",
				"pos": "CAM",
				"ovr": 64,
				"speed": 82,
				"stamina": 88,
				"num": 8,
				"age": 32
			},
			{
				"name": "М. Григорьев",
				"pos": "LW",
				"ovr": 61,
				"speed": 73,
				"stamina": 79,
				"num": 9,
				"age": 29
			},
			{
				"name": "П. Григорьев",
				"pos": "ST",
				"ovr": 63,
				"speed": 80,
				"stamina": 90,
				"num": 10,
				"age": 32
			},
			{
				"name": "О. Медведев",
				"pos": "RW",
				"ovr": 67,
				"speed": 84,
				"stamina": 79,
				"num": 11,
				"age": 27
			},
			{
				"name": "Е. Марков",
				"pos": "GK",
				"ovr": 62,
				"speed": 59,
				"stamina": 79,
				"num": 12,
				"age": 19
			},
			{
				"name": "О. Тихонов",
				"pos": "CB",
				"ovr": 63,
				"speed": 79,
				"stamina": 84,
				"num": 13,
				"age": 33
			},
			{
				"name": "Г. Марков",
				"pos": "CM",
				"ovr": 59,
				"speed": 75,
				"stamina": 79,
				"num": 14,
				"age": 27
			},
			{
				"name": "П. Тихонов",
				"pos": "ST",
				"ovr": 63,
				"speed": 75,
				"stamina": 92,
				"num": 15,
				"age": 19
			},
			{
				"name": "Н. Новиков",
				"pos": "LW",
				"ovr": 60,
				"speed": 77,
				"stamina": 90,
				"num": 16,
				"age": 33
			}
		]
	},
	{
		"id": "ENR",
		"code": "ENR",
		"name": "Энергия",
		"city": "Новочебоксарск",
		"stadium": "Химик-Арена",
		"home": "#E2B93B",
		"away": "#142033",
		"league": "chuvash",
		"roster": [
			{
				"name": "Г. Егоров",
				"pos": "GK",
				"ovr": 60,
				"speed": 66,
				"stamina": 88,
				"num": 1,
				"age": 26
			},
			{
				"name": "П. Зайцев",
				"pos": "LB",
				"ovr": 66,
				"speed": 80,
				"stamina": 82,
				"num": 2,
				"age": 19
			},
			{
				"name": "Т. Тихонов",
				"pos": "CB",
				"ovr": 68,
				"speed": 66,
				"stamina": 85,
				"num": 3,
				"age": 28
			},
			{
				"name": "П. Лебедев",
				"pos": "CB",
				"ovr": 65,
				"speed": 72,
				"stamina": 93,
				"num": 4,
				"age": 20
			},
			{
				"name": "М. Марков",
				"pos": "RB",
				"ovr": 64,
				"speed": 84,
				"stamina": 85,
				"num": 5,
				"age": 28
			},
			{
				"name": "К. Орлов",
				"pos": "CM",
				"ovr": 65,
				"speed": 72,
				"stamina": 84,
				"num": 6,
				"age": 19
			},
			{
				"name": "Г. Зайцев",
				"pos": "CM",
				"ovr": 66,
				"speed": 73,
				"stamina": 79,
				"num": 7,
				"age": 28
			},
			{
				"name": "К. Богданов",
				"pos": "CAM",
				"ovr": 68,
				"speed": 83,
				"stamina": 86,
				"num": 8,
				"age": 26
			},
			{
				"name": "О. Козлов",
				"pos": "LW",
				"ovr": 70,
				"speed": 71,
				"stamina": 88,
				"num": 9,
				"age": 31
			},
			{
				"name": "М. Смирнов",
				"pos": "ST",
				"ovr": 71,
				"speed": 70,
				"stamina": 81,
				"num": 10,
				"age": 22
			},
			{
				"name": "Г. Соколов",
				"pos": "RW",
				"ovr": 64,
				"speed": 70,
				"stamina": 93,
				"num": 11,
				"age": 34
			},
			{
				"name": "И. Тихонов",
				"pos": "GK",
				"ovr": 64,
				"speed": 60,
				"stamina": 88,
				"num": 12,
				"age": 30
			},
			{
				"name": "Л. Николаев",
				"pos": "CB",
				"ovr": 68,
				"speed": 77,
				"stamina": 86,
				"num": 13,
				"age": 21
			},
			{
				"name": "Д. Виноградов",
				"pos": "CM",
				"ovr": 65,
				"speed": 67,
				"stamina": 81,
				"num": 14,
				"age": 32
			},
			{
				"name": "Д. Григорьев",
				"pos": "ST",
				"ovr": 69,
				"speed": 81,
				"stamina": 91,
				"num": 15,
				"age": 22
			},
			{
				"name": "О. Волков",
				"pos": "LW",
				"ovr": 65,
				"speed": 78,
				"stamina": 93,
				"num": 16,
				"age": 19
			}
		]
	},
	{
		"id": "ZNM",
		"code": "ZNM",
		"name": "Знамя",
		"city": "Канаш",
		"stadium": "Энергия",
		"home": "#7A1F2B",
		"away": "#F2C94C",
		"league": "chuvash",
		"roster": [
			{
				"name": "Н. Крылов",
				"pos": "GK",
				"ovr": 63,
				"speed": 65,
				"stamina": 79,
				"num": 1,
				"age": 22
			},
			{
				"name": "П. Соколов",
				"pos": "LB",
				"ovr": 63,
				"speed": 67,
				"stamina": 87,
				"num": 2,
				"age": 25
			},
			{
				"name": "М. Петров",
				"pos": "CB",
				"ovr": 64,
				"speed": 74,
				"stamina": 83,
				"num": 3,
				"age": 20
			},
			{
				"name": "Д. Николаев",
				"pos": "CB",
				"ovr": 62,
				"speed": 81,
				"stamina": 79,
				"num": 4,
				"age": 32
			},
			{
				"name": "Н. Виноградов",
				"pos": "RB",
				"ovr": 61,
				"speed": 68,
				"stamina": 81,
				"num": 5,
				"age": 19
			},
			{
				"name": "Е. Семенов",
				"pos": "CM",
				"ovr": 62,
				"speed": 67,
				"stamina": 83,
				"num": 6,
				"age": 33
			},
			{
				"name": "Е. Кузьмин",
				"pos": "CM",
				"ovr": 65,
				"speed": 77,
				"stamina": 84,
				"num": 7,
				"age": 34
			},
			{
				"name": "Н. Семенов",
				"pos": "CAM",
				"ovr": 66,
				"speed": 75,
				"stamina": 83,
				"num": 8,
				"age": 30
			},
			{
				"name": "Д. Осипов",
				"pos": "LW",
				"ovr": 68,
				"speed": 70,
				"stamina": 83,
				"num": 9,
				"age": 25
			},
			{
				"name": "М. Марков",
				"pos": "ST",
				"ovr": 66,
				"speed": 73,
				"stamina": 79,
				"num": 10,
				"age": 20
			},
			{
				"name": "С. Виноградов",
				"pos": "RW",
				"ovr": 66,
				"speed": 73,
				"stamina": 80,
				"num": 11,
				"age": 24
			},
			{
				"name": "А. Лебедев",
				"pos": "GK",
				"ovr": 64,
				"speed": 60,
				"stamina": 91,
				"num": 12,
				"age": 29
			},
			{
				"name": "С. Смирнов",
				"pos": "CB",
				"ovr": 62,
				"speed": 78,
				"stamina": 90,
				"num": 13,
				"age": 31
			},
			{
				"name": "Д. Степанов",
				"pos": "CM",
				"ovr": 61,
				"speed": 74,
				"stamina": 84,
				"num": 14,
				"age": 31
			},
			{
				"name": "Л. Орлов",
				"pos": "ST",
				"ovr": 69,
				"speed": 82,
				"stamina": 82,
				"num": 15,
				"age": 30
			},
			{
				"name": "А. Соколов",
				"pos": "LW",
				"ovr": 68,
				"speed": 79,
				"stamina": 88,
				"num": 16,
				"age": 32
			}
		]
	},
	{
		"id": "ALT",
		"code": "ALT",
		"name": "Алатырь",
		"city": "Алатырь",
		"stadium": "Старт",
		"home": "#2E6BFF",
		"away": "#F7F7F2",
		"league": "chuvash",
		"roster": [
			{
				"name": "Д. Иванов",
				"pos": "GK",
				"ovr": 58,
				"speed": 65,
				"stamina": 87,
				"num": 1,
				"age": 32
			},
			{
				"name": "А. Иванов",
				"pos": "LB",
				"ovr": 62,
				"speed": 71,
				"stamina": 78,
				"num": 2,
				"age": 19
			},
			{
				"name": "Т. Киселёв",
				"pos": "CB",
				"ovr": 61,
				"speed": 81,
				"stamina": 94,
				"num": 3,
				"age": 25
			},
			{
				"name": "С. Савельев",
				"pos": "CB",
				"ovr": 59,
				"speed": 69,
				"stamina": 90,
				"num": 4,
				"age": 31
			},
			{
				"name": "Д. Орлов",
				"pos": "RB",
				"ovr": 58,
				"speed": 74,
				"stamina": 82,
				"num": 5,
				"age": 26
			},
			{
				"name": "Р. Орлов",
				"pos": "CM",
				"ovr": 60,
				"speed": 70,
				"stamina": 80,
				"num": 6,
				"age": 23
			},
			{
				"name": "Р. Марков",
				"pos": "CM",
				"ovr": 63,
				"speed": 84,
				"stamina": 90,
				"num": 7,
				"age": 21
			},
			{
				"name": "Р. Воробьёв",
				"pos": "CAM",
				"ovr": 62,
				"speed": 72,
				"stamina": 86,
				"num": 8,
				"age": 31
			},
			{
				"name": "П. Зайцев",
				"pos": "LW",
				"ovr": 63,
				"speed": 70,
				"stamina": 84,
				"num": 9,
				"age": 32
			},
			{
				"name": "А. Зайцев",
				"pos": "ST",
				"ovr": 63,
				"speed": 81,
				"stamina": 93,
				"num": 10,
				"age": 32
			},
			{
				"name": "Н. Зайцев",
				"pos": "RW",
				"ovr": 68,
				"speed": 77,
				"stamina": 84,
				"num": 11,
				"age": 25
			},
			{
				"name": "Н. Савельев",
				"pos": "GK",
				"ovr": 57,
				"speed": 63,
				"stamina": 82,
				"num": 12,
				"age": 23
			},
			{
				"name": "А. Петров",
				"pos": "CB",
				"ovr": 64,
				"speed": 68,
				"stamina": 82,
				"num": 13,
				"age": 22
			},
			{
				"name": "В. Морозов",
				"pos": "CM",
				"ovr": 64,
				"speed": 82,
				"stamina": 93,
				"num": 14,
				"age": 28
			},
			{
				"name": "Р. Смирнов",
				"pos": "ST",
				"ovr": 64,
				"speed": 81,
				"stamina": 78,
				"num": 15,
				"age": 27
			},
			{
				"name": "К. Иванов",
				"pos": "LW",
				"ovr": 62,
				"speed": 82,
				"stamina": 79,
				"num": 16,
				"age": 25
			}
		]
	},
	{
		"id": "SKL",
		"code": "SKL",
		"name": "Сокол",
		"city": "Ядрин",
		"stadium": "Юность",
		"home": "#143024",
		"away": "#8FE388",
		"league": "chuvash",
		"roster": [
			{
				"name": "Н. Петров",
				"pos": "GK",
				"ovr": 64,
				"speed": 63,
				"stamina": 80,
				"num": 1,
				"age": 31
			},
			{
				"name": "Л. Медведев",
				"pos": "LB",
				"ovr": 60,
				"speed": 69,
				"stamina": 93,
				"num": 2,
				"age": 28
			},
			{
				"name": "П. Виноградов",
				"pos": "CB",
				"ovr": 63,
				"speed": 67,
				"stamina": 80,
				"num": 3,
				"age": 20
			},
			{
				"name": "Н. Лебедев",
				"pos": "CB",
				"ovr": 68,
				"speed": 67,
				"stamina": 83,
				"num": 4,
				"age": 23
			},
			{
				"name": "Д. Кузьмин",
				"pos": "RB",
				"ovr": 62,
				"speed": 66,
				"stamina": 91,
				"num": 5,
				"age": 27
			},
			{
				"name": "П. Попов",
				"pos": "CM",
				"ovr": 62,
				"speed": 71,
				"stamina": 88,
				"num": 6,
				"age": 23
			},
			{
				"name": "Е. Морозов",
				"pos": "CM",
				"ovr": 65,
				"speed": 77,
				"stamina": 84,
				"num": 7,
				"age": 21
			},
			{
				"name": "К. Алексеев",
				"pos": "CAM",
				"ovr": 60,
				"speed": 83,
				"stamina": 80,
				"num": 8,
				"age": 33
			},
			{
				"name": "П. Ермолаев",
				"pos": "LW",
				"ovr": 66,
				"speed": 73,
				"stamina": 82,
				"num": 9,
				"age": 29
			},
			{
				"name": "Г. Белов",
				"pos": "ST",
				"ovr": 66,
				"speed": 76,
				"stamina": 83,
				"num": 10,
				"age": 30
			},
			{
				"name": "М. Белов",
				"pos": "RW",
				"ovr": 66,
				"speed": 75,
				"stamina": 88,
				"num": 11,
				"age": 27
			},
			{
				"name": "Г. Лебедев",
				"pos": "GK",
				"ovr": 62,
				"speed": 63,
				"stamina": 84,
				"num": 12,
				"age": 26
			},
			{
				"name": "С. Попов",
				"pos": "CB",
				"ovr": 63,
				"speed": 74,
				"stamina": 79,
				"num": 13,
				"age": 21
			},
			{
				"name": "А. Белов",
				"pos": "CM",
				"ovr": 62,
				"speed": 74,
				"stamina": 82,
				"num": 14,
				"age": 24
			},
			{
				"name": "С. Смирнов",
				"pos": "ST",
				"ovr": 67,
				"speed": 81,
				"stamina": 89,
				"num": 15,
				"age": 27
			},
			{
				"name": "Р. Волков",
				"pos": "LW",
				"ovr": 69,
				"speed": 75,
				"stamina": 94,
				"num": 16,
				"age": 23
			}
		]
	},
	{
		"id": "CVL",
		"code": "CVL",
		"name": "Цивиль",
		"city": "Цивильск",
		"stadium": "Волна",
		"home": "#0E6E8C",
		"away": "#E7F2EA",
		"league": "chuvash",
		"roster": [
			{
				"name": "Г. Виноградов",
				"pos": "GK",
				"ovr": 57,
				"speed": 62,
				"stamina": 84,
				"num": 1,
				"age": 22
			},
			{
				"name": "П. Макаров",
				"pos": "LB",
				"ovr": 58,
				"speed": 71,
				"stamina": 80,
				"num": 2,
				"age": 33
			},
			{
				"name": "М. Морозов",
				"pos": "CB",
				"ovr": 62,
				"speed": 77,
				"stamina": 86,
				"num": 3,
				"age": 27
			},
			{
				"name": "А. Степанов",
				"pos": "CB",
				"ovr": 57,
				"speed": 84,
				"stamina": 79,
				"num": 4,
				"age": 23
			},
			{
				"name": "Г. Иванов",
				"pos": "RB",
				"ovr": 64,
				"speed": 78,
				"stamina": 82,
				"num": 5,
				"age": 31
			},
			{
				"name": "Е. Белов",
				"pos": "CM",
				"ovr": 63,
				"speed": 73,
				"stamina": 83,
				"num": 6,
				"age": 32
			},
			{
				"name": "П. Морозов",
				"pos": "CM",
				"ovr": 58,
				"speed": 70,
				"stamina": 81,
				"num": 7,
				"age": 31
			},
			{
				"name": "Г. Зайцев",
				"pos": "CAM",
				"ovr": 57,
				"speed": 72,
				"stamina": 89,
				"num": 8,
				"age": 32
			},
			{
				"name": "О. Морозов",
				"pos": "LW",
				"ovr": 67,
				"speed": 73,
				"stamina": 88,
				"num": 9,
				"age": 23
			},
			{
				"name": "К. Марков",
				"pos": "ST",
				"ovr": 61,
				"speed": 83,
				"stamina": 78,
				"num": 10,
				"age": 32
			},
			{
				"name": "В. Лебедев",
				"pos": "RW",
				"ovr": 66,
				"speed": 80,
				"stamina": 88,
				"num": 11,
				"age": 19
			},
			{
				"name": "И. Егоров",
				"pos": "GK",
				"ovr": 55,
				"speed": 63,
				"stamina": 81,
				"num": 12,
				"age": 29
			},
			{
				"name": "П. Назаров",
				"pos": "CB",
				"ovr": 57,
				"speed": 68,
				"stamina": 88,
				"num": 13,
				"age": 31
			},
			{
				"name": "В. Волков",
				"pos": "CM",
				"ovr": 59,
				"speed": 79,
				"stamina": 91,
				"num": 14,
				"age": 27
			},
			{
				"name": "А. Макаров",
				"pos": "ST",
				"ovr": 64,
				"speed": 75,
				"stamina": 93,
				"num": 15,
				"age": 33
			},
			{
				"name": "Г. Алексеев",
				"pos": "LW",
				"ovr": 67,
				"speed": 69,
				"stamina": 80,
				"num": 16,
				"age": 28
			}
		]
	},
	{
		"id": "NNN",
		"code": "NNN",
		"name": "Нижний Новгород",
		"city": "Нижний Новгород",
		"stadium": "Совкомбанк Арена",
		"home": "#1F4E9A",
		"away": "#F4F7FB",
		"league": "volga",
		"roster": [
			{
				"name": "Д. Фролов",
				"pos": "GK",
				"ovr": 73,
				"speed": 63,
				"stamina": 88,
				"num": 1,
				"age": 25
			},
			{
				"name": "Е. Киселёв",
				"pos": "LB",
				"ovr": 74,
				"speed": 83,
				"stamina": 82,
				"num": 2,
				"age": 20
			},
			{
				"name": "М. Медведев",
				"pos": "CB",
				"ovr": 75,
				"speed": 73,
				"stamina": 92,
				"num": 3,
				"age": 26
			},
			{
				"name": "В. Смирнов",
				"pos": "CB",
				"ovr": 76,
				"speed": 74,
				"stamina": 78,
				"num": 4,
				"age": 22
			},
			{
				"name": "О. Павлов",
				"pos": "RB",
				"ovr": 74,
				"speed": 67,
				"stamina": 88,
				"num": 5,
				"age": 20
			},
			{
				"name": "Р. Смирнов",
				"pos": "CM",
				"ovr": 75,
				"speed": 74,
				"stamina": 92,
				"num": 6,
				"age": 26
			},
			{
				"name": "О. Савельев",
				"pos": "CM",
				"ovr": 76,
				"speed": 77,
				"stamina": 79,
				"num": 7,
				"age": 21
			},
			{
				"name": "Д. Лебедев",
				"pos": "CAM",
				"ovr": 77,
				"speed": 66,
				"stamina": 88,
				"num": 8,
				"age": 21
			},
			{
				"name": "Д. Петров",
				"pos": "LW",
				"ovr": 76,
				"speed": 83,
				"stamina": 85,
				"num": 9,
				"age": 21
			},
			{
				"name": "О. Соколов",
				"pos": "ST",
				"ovr": 78,
				"speed": 80,
				"stamina": 81,
				"num": 10,
				"age": 26
			},
			{
				"name": "Л. Николаев",
				"pos": "RW",
				"ovr": 75,
				"speed": 71,
				"stamina": 88,
				"num": 11,
				"age": 33
			},
			{
				"name": "Н. Макаров",
				"pos": "GK",
				"ovr": 74,
				"speed": 59,
				"stamina": 91,
				"num": 12,
				"age": 28
			},
			{
				"name": "Р. Козлов",
				"pos": "CB",
				"ovr": 74,
				"speed": 73,
				"stamina": 82,
				"num": 13,
				"age": 21
			},
			{
				"name": "М. Семенов",
				"pos": "CM",
				"ovr": 74,
				"speed": 68,
				"stamina": 80,
				"num": 14,
				"age": 31
			},
			{
				"name": "В. Воробьёв",
				"pos": "ST",
				"ovr": 74,
				"speed": 77,
				"stamina": 82,
				"num": 15,
				"age": 28
			},
			{
				"name": "Е. Виноградов",
				"pos": "LW",
				"ovr": 74,
				"speed": 69,
				"stamina": 92,
				"num": 16,
				"age": 32
			}
		]
	},
	{
		"id": "KHD",
		"code": "KHD",
		"name": "Химик",
		"city": "Дзержинск",
		"stadium": "Химик",
		"home": "#0A4C9A",
		"away": "#F2F6FB",
		"league": "volga",
		"roster": [
			{
				"name": "Е. Михайлов",
				"pos": "GK",
				"ovr": 71,
				"speed": 66,
				"stamina": 94,
				"num": 1,
				"age": 33
			},
			{
				"name": "Е. Виноградов",
				"pos": "LB",
				"ovr": 72,
				"speed": 80,
				"stamina": 86,
				"num": 2,
				"age": 21
			},
			{
				"name": "П. Савельев",
				"pos": "CB",
				"ovr": 73,
				"speed": 81,
				"stamina": 91,
				"num": 3,
				"age": 30
			},
			{
				"name": "Г. Волков",
				"pos": "CB",
				"ovr": 74,
				"speed": 77,
				"stamina": 80,
				"num": 4,
				"age": 26
			},
			{
				"name": "Е. Назаров",
				"pos": "RB",
				"ovr": 72,
				"speed": 73,
				"stamina": 86,
				"num": 5,
				"age": 33
			},
			{
				"name": "О. Павлов",
				"pos": "CM",
				"ovr": 73,
				"speed": 81,
				"stamina": 83,
				"num": 6,
				"age": 30
			},
			{
				"name": "К. Смирнов",
				"pos": "CM",
				"ovr": 74,
				"speed": 75,
				"stamina": 80,
				"num": 7,
				"age": 34
			},
			{
				"name": "В. Козлов",
				"pos": "CAM",
				"ovr": 75,
				"speed": 82,
				"stamina": 80,
				"num": 8,
				"age": 26
			},
			{
				"name": "Н. Белов",
				"pos": "LW",
				"ovr": 74,
				"speed": 67,
				"stamina": 90,
				"num": 9,
				"age": 26
			},
			{
				"name": "Е. Орлов",
				"pos": "ST",
				"ovr": 76,
				"speed": 70,
				"stamina": 92,
				"num": 10,
				"age": 25
			},
			{
				"name": "Т. Осипов",
				"pos": "RW",
				"ovr": 73,
				"speed": 72,
				"stamina": 93,
				"num": 11,
				"age": 34
			},
			{
				"name": "К. Богданов",
				"pos": "GK",
				"ovr": 70,
				"speed": 62,
				"stamina": 80,
				"num": 12,
				"age": 31
			},
			{
				"name": "П. Григорьев",
				"pos": "CB",
				"ovr": 74,
				"speed": 67,
				"stamina": 83,
				"num": 13,
				"age": 32
			},
			{
				"name": "О. Михайлов",
				"pos": "CM",
				"ovr": 74,
				"speed": 77,
				"stamina": 80,
				"num": 14,
				"age": 29
			},
			{
				"name": "Р. Фёдоров",
				"pos": "ST",
				"ovr": 74,
				"speed": 77,
				"stamina": 83,
				"num": 15,
				"age": 24
			},
			{
				"name": "А. Павлов",
				"pos": "LW",
				"ovr": 74,
				"speed": 78,
				"stamina": 89,
				"num": 16,
				"age": 32
			}
		]
	},
	{
		"id": "POB",
		"code": "POB",
		"name": "Победа",
		"city": "Нижний Новгород",
		"stadium": "Северный",
		"home": "#9E1B32",
		"away": "#F6F3EE",
		"league": "volga",
		"roster": [
			{
				"name": "К. Романов",
				"pos": "GK",
				"ovr": 68,
				"speed": 59,
				"stamina": 92,
				"num": 1,
				"age": 24
			},
			{
				"name": "И. Новиков",
				"pos": "LB",
				"ovr": 69,
				"speed": 66,
				"stamina": 90,
				"num": 2,
				"age": 21
			},
			{
				"name": "А. Васильев",
				"pos": "CB",
				"ovr": 70,
				"speed": 70,
				"stamina": 86,
				"num": 3,
				"age": 25
			},
			{
				"name": "А. Белов",
				"pos": "CB",
				"ovr": 71,
				"speed": 78,
				"stamina": 91,
				"num": 4,
				"age": 28
			},
			{
				"name": "Г. Семенов",
				"pos": "RB",
				"ovr": 69,
				"speed": 75,
				"stamina": 88,
				"num": 5,
				"age": 25
			},
			{
				"name": "Д. Фёдоров",
				"pos": "CM",
				"ovr": 70,
				"speed": 83,
				"stamina": 79,
				"num": 6,
				"age": 32
			},
			{
				"name": "П. Новиков",
				"pos": "CM",
				"ovr": 71,
				"speed": 69,
				"stamina": 90,
				"num": 7,
				"age": 28
			},
			{
				"name": "В. Павлов",
				"pos": "CAM",
				"ovr": 72,
				"speed": 67,
				"stamina": 91,
				"num": 8,
				"age": 29
			},
			{
				"name": "Л. Голубев",
				"pos": "LW",
				"ovr": 71,
				"speed": 71,
				"stamina": 81,
				"num": 9,
				"age": 24
			},
			{
				"name": "И. Орлов",
				"pos": "ST",
				"ovr": 73,
				"speed": 69,
				"stamina": 86,
				"num": 10,
				"age": 32
			},
			{
				"name": "О. Григорьев",
				"pos": "RW",
				"ovr": 70,
				"speed": 73,
				"stamina": 85,
				"num": 11,
				"age": 26
			},
			{
				"name": "Н. Петров",
				"pos": "GK",
				"ovr": 66,
				"speed": 62,
				"stamina": 89,
				"num": 12,
				"age": 26
			},
			{
				"name": "Н. Медведев",
				"pos": "CB",
				"ovr": 71,
				"speed": 75,
				"stamina": 90,
				"num": 13,
				"age": 21
			},
			{
				"name": "В. Соколов",
				"pos": "CM",
				"ovr": 67,
				"speed": 77,
				"stamina": 85,
				"num": 14,
				"age": 25
			},
			{
				"name": "С. Морозов",
				"pos": "ST",
				"ovr": 73,
				"speed": 83,
				"stamina": 89,
				"num": 15,
				"age": 32
			},
			{
				"name": "Д. Алексеев",
				"pos": "LW",
				"ovr": 74,
				"speed": 67,
				"stamina": 85,
				"num": 16,
				"age": 20
			}
		]
	},
	{
		"id": "SHP",
		"code": "SHP",
		"name": "Шахтёр",
		"city": "Пешелань",
		"stadium": "Шахтёр",
		"home": "#F58220",
		"away": "#1A1A1A",
		"league": "volga",
		"roster": [
			{
				"name": "Т. Осипов",
				"pos": "GK",
				"ovr": 66,
				"speed": 65,
				"stamina": 82,
				"num": 1,
				"age": 26
			},
			{
				"name": "А. Крылов",
				"pos": "LB",
				"ovr": 67,
				"speed": 75,
				"stamina": 81,
				"num": 2,
				"age": 20
			},
			{
				"name": "Т. Семенов",
				"pos": "CB",
				"ovr": 68,
				"speed": 80,
				"stamina": 86,
				"num": 3,
				"age": 27
			},
			{
				"name": "Л. Белов",
				"pos": "CB",
				"ovr": 69,
				"speed": 83,
				"stamina": 84,
				"num": 4,
				"age": 28
			},
			{
				"name": "Е. Иванов",
				"pos": "RB",
				"ovr": 67,
				"speed": 78,
				"stamina": 81,
				"num": 5,
				"age": 28
			},
			{
				"name": "Е. Марков",
				"pos": "CM",
				"ovr": 68,
				"speed": 69,
				"stamina": 88,
				"num": 6,
				"age": 33
			},
			{
				"name": "Н. Степанов",
				"pos": "CM",
				"ovr": 69,
				"speed": 81,
				"stamina": 87,
				"num": 7,
				"age": 31
			},
			{
				"name": "Л. Фролов",
				"pos": "CAM",
				"ovr": 70,
				"speed": 68,
				"stamina": 80,
				"num": 8,
				"age": 25
			},
			{
				"name": "Д. Николаев",
				"pos": "LW",
				"ovr": 69,
				"speed": 77,
				"stamina": 90,
				"num": 9,
				"age": 27
			},
			{
				"name": "И. Фёдоров",
				"pos": "ST",
				"ovr": 71,
				"speed": 83,
				"stamina": 87,
				"num": 10,
				"age": 33
			},
			{
				"name": "О. Фёдоров",
				"pos": "RW",
				"ovr": 68,
				"speed": 69,
				"stamina": 79,
				"num": 11,
				"age": 31
			},
			{
				"name": "А. Павлов",
				"pos": "GK",
				"ovr": 63,
				"speed": 59,
				"stamina": 85,
				"num": 12,
				"age": 19
			},
			{
				"name": "Г. Фролов",
				"pos": "CB",
				"ovr": 72,
				"speed": 79,
				"stamina": 84,
				"num": 13,
				"age": 27
			},
			{
				"name": "П. Осипов",
				"pos": "CM",
				"ovr": 65,
				"speed": 74,
				"stamina": 83,
				"num": 14,
				"age": 27
			},
			{
				"name": "Е. Зайцев",
				"pos": "ST",
				"ovr": 73,
				"speed": 80,
				"stamina": 83,
				"num": 15,
				"age": 24
			},
			{
				"name": "Р. Назаров",
				"pos": "LW",
				"ovr": 71,
				"speed": 78,
				"stamina": 80,
				"num": 16,
				"age": 22
			}
		]
	},
	{
		"id": "SBR",
		"code": "SBR",
		"name": "Спартак Бор",
		"city": "Бор",
		"stadium": "Спартак",
		"home": "#CC0000",
		"away": "#F4F0EA",
		"league": "volga",
		"roster": [
			{
				"name": "В. Волков",
				"pos": "GK",
				"ovr": 64,
				"speed": 67,
				"stamina": 90,
				"num": 1,
				"age": 28
			},
			{
				"name": "К. Тихонов",
				"pos": "LB",
				"ovr": 65,
				"speed": 82,
				"stamina": 87,
				"num": 2,
				"age": 23
			},
			{
				"name": "Л. Козлов",
				"pos": "CB",
				"ovr": 66,
				"speed": 75,
				"stamina": 83,
				"num": 3,
				"age": 32
			},
			{
				"name": "Т. Савельев",
				"pos": "CB",
				"ovr": 67,
				"speed": 84,
				"stamina": 93,
				"num": 4,
				"age": 34
			},
			{
				"name": "Н. Воробьёв",
				"pos": "RB",
				"ovr": 65,
				"speed": 67,
				"stamina": 88,
				"num": 5,
				"age": 20
			},
			{
				"name": "О. Кузьмин",
				"pos": "CM",
				"ovr": 66,
				"speed": 77,
				"stamina": 92,
				"num": 6,
				"age": 31
			},
			{
				"name": "М. Зайцев",
				"pos": "CM",
				"ovr": 67,
				"speed": 69,
				"stamina": 79,
				"num": 7,
				"age": 28
			},
			{
				"name": "И. Михайлов",
				"pos": "CAM",
				"ovr": 68,
				"speed": 68,
				"stamina": 93,
				"num": 8,
				"age": 31
			},
			{
				"name": "И. Марков",
				"pos": "LW",
				"ovr": 67,
				"speed": 70,
				"stamina": 91,
				"num": 9,
				"age": 29
			},
			{
				"name": "С. Николаев",
				"pos": "ST",
				"ovr": 69,
				"speed": 80,
				"stamina": 84,
				"num": 10,
				"age": 29
			},
			{
				"name": "Р. Козлов",
				"pos": "RW",
				"ovr": 66,
				"speed": 74,
				"stamina": 80,
				"num": 11,
				"age": 32
			},
			{
				"name": "К. Кузьмин",
				"pos": "GK",
				"ovr": 65,
				"speed": 62,
				"stamina": 90,
				"num": 12,
				"age": 23
			},
			{
				"name": "М. Крылов",
				"pos": "CB",
				"ovr": 69,
				"speed": 75,
				"stamina": 82,
				"num": 13,
				"age": 21
			},
			{
				"name": "К. Марков",
				"pos": "CM",
				"ovr": 67,
				"speed": 77,
				"stamina": 81,
				"num": 14,
				"age": 20
			},
			{
				"name": "Л. Павлов",
				"pos": "ST",
				"ovr": 69,
				"speed": 71,
				"stamina": 90,
				"num": 15,
				"age": 31
			},
			{
				"name": "А. Соколов",
				"pos": "LW",
				"ovr": 72,
				"speed": 66,
				"stamina": 78,
				"num": 16,
				"age": 20
			}
		]
	},
	{
		"id": "RVD",
		"code": "RVD",
		"name": "Радий-Волна-Д",
		"city": "Нижний Новгород",
		"stadium": "Волна",
		"home": "#12344D",
		"away": "#3DDCFF",
		"league": "volga",
		"roster": [
			{
				"name": "И. Голубев",
				"pos": "GK",
				"ovr": 63,
				"speed": 59,
				"stamina": 91,
				"num": 1,
				"age": 23
			},
			{
				"name": "Р. Медведев",
				"pos": "LB",
				"ovr": 64,
				"speed": 80,
				"stamina": 78,
				"num": 2,
				"age": 21
			},
			{
				"name": "Р. Марков",
				"pos": "CB",
				"ovr": 65,
				"speed": 69,
				"stamina": 85,
				"num": 3,
				"age": 22
			},
			{
				"name": "С. Козлов",
				"pos": "CB",
				"ovr": 66,
				"speed": 79,
				"stamina": 94,
				"num": 4,
				"age": 28
			},
			{
				"name": "В. Алексеев",
				"pos": "RB",
				"ovr": 64,
				"speed": 71,
				"stamina": 81,
				"num": 5,
				"age": 21
			},
			{
				"name": "К. Павлов",
				"pos": "CM",
				"ovr": 65,
				"speed": 82,
				"stamina": 87,
				"num": 6,
				"age": 22
			},
			{
				"name": "М. Морозов",
				"pos": "CM",
				"ovr": 66,
				"speed": 82,
				"stamina": 86,
				"num": 7,
				"age": 25
			},
			{
				"name": "И. Михайлов",
				"pos": "CAM",
				"ovr": 67,
				"speed": 70,
				"stamina": 78,
				"num": 8,
				"age": 23
			},
			{
				"name": "С. Михайлов",
				"pos": "LW",
				"ovr": 66,
				"speed": 83,
				"stamina": 79,
				"num": 9,
				"age": 30
			},
			{
				"name": "Н. Богданов",
				"pos": "ST",
				"ovr": 68,
				"speed": 72,
				"stamina": 84,
				"num": 10,
				"age": 19
			},
			{
				"name": "С. Попов",
				"pos": "RW",
				"ovr": 65,
				"speed": 76,
				"stamina": 89,
				"num": 11,
				"age": 28
			},
			{
				"name": "Н. Михайлов",
				"pos": "GK",
				"ovr": 62,
				"speed": 62,
				"stamina": 86,
				"num": 12,
				"age": 25
			},
			{
				"name": "Р. Новиков",
				"pos": "CB",
				"ovr": 61,
				"speed": 74,
				"stamina": 78,
				"num": 13,
				"age": 22
			},
			{
				"name": "П. Белов",
				"pos": "CM",
				"ovr": 63,
				"speed": 73,
				"stamina": 80,
				"num": 14,
				"age": 25
			},
			{
				"name": "О. Павлов",
				"pos": "ST",
				"ovr": 67,
				"speed": 67,
				"stamina": 78,
				"num": 15,
				"age": 34
			},
			{
				"name": "Р. Фёдоров",
				"pos": "LW",
				"ovr": 71,
				"speed": 75,
				"stamina": 84,
				"num": 16,
				"age": 25
			}
		]
	},
	{
		"id": "ARZ",
		"code": "ARZ",
		"name": "Арзамас",
		"city": "Арзамас",
		"stadium": "Знамя",
		"home": "#123A70",
		"away": "#F4F7FB",
		"league": "volga",
		"roster": [
			{
				"name": "Т. Макаров",
				"pos": "GK",
				"ovr": 61,
				"speed": 65,
				"stamina": 86,
				"num": 1,
				"age": 34
			},
			{
				"name": "М. Егоров",
				"pos": "LB",
				"ovr": 62,
				"speed": 82,
				"stamina": 80,
				"num": 2,
				"age": 24
			},
			{
				"name": "А. Алексеев",
				"pos": "CB",
				"ovr": 63,
				"speed": 82,
				"stamina": 86,
				"num": 3,
				"age": 20
			},
			{
				"name": "К. Иванов",
				"pos": "CB",
				"ovr": 64,
				"speed": 79,
				"stamina": 81,
				"num": 4,
				"age": 24
			},
			{
				"name": "М. Тихонов",
				"pos": "RB",
				"ovr": 62,
				"speed": 69,
				"stamina": 88,
				"num": 5,
				"age": 27
			},
			{
				"name": "В. Кузьмин",
				"pos": "CM",
				"ovr": 63,
				"speed": 72,
				"stamina": 93,
				"num": 6,
				"age": 31
			},
			{
				"name": "Р. Тихонов",
				"pos": "CM",
				"ovr": 64,
				"speed": 82,
				"stamina": 85,
				"num": 7,
				"age": 33
			},
			{
				"name": "А. Медведев",
				"pos": "CAM",
				"ovr": 65,
				"speed": 82,
				"stamina": 78,
				"num": 8,
				"age": 30
			},
			{
				"name": "В. Новиков",
				"pos": "LW",
				"ovr": 64,
				"speed": 70,
				"stamina": 87,
				"num": 9,
				"age": 33
			},
			{
				"name": "Р. Макаров",
				"pos": "ST",
				"ovr": 66,
				"speed": 69,
				"stamina": 92,
				"num": 10,
				"age": 33
			},
			{
				"name": "К. Степанов",
				"pos": "RW",
				"ovr": 63,
				"speed": 77,
				"stamina": 91,
				"num": 11,
				"age": 22
			},
			{
				"name": "С. Марков",
				"pos": "GK",
				"ovr": 65,
				"speed": 65,
				"stamina": 81,
				"num": 12,
				"age": 21
			},
			{
				"name": "Е. Попов",
				"pos": "CB",
				"ovr": 61,
				"speed": 75,
				"stamina": 84,
				"num": 13,
				"age": 32
			},
			{
				"name": "П. Тихонов",
				"pos": "CM",
				"ovr": 64,
				"speed": 68,
				"stamina": 87,
				"num": 14,
				"age": 34
			},
			{
				"name": "С. Волков",
				"pos": "ST",
				"ovr": 63,
				"speed": 81,
				"stamina": 86,
				"num": 15,
				"age": 21
			},
			{
				"name": "Д. Новиков",
				"pos": "LW",
				"ovr": 69,
				"speed": 74,
				"stamina": 91,
				"num": 16,
				"age": 20
			}
		]
	},
	{
		"id": "MVY",
		"code": "MVY",
		"name": "Металлург",
		"city": "Выкса",
		"stadium": "Металлург",
		"home": "#E05A00",
		"away": "#1A1A1A",
		"league": "volga",
		"roster": [
			{
				"name": "Н. Макаров",
				"pos": "GK",
				"ovr": 60,
				"speed": 65,
				"stamina": 91,
				"num": 1,
				"age": 27
			},
			{
				"name": "К. Белов",
				"pos": "LB",
				"ovr": 61,
				"speed": 74,
				"stamina": 79,
				"num": 2,
				"age": 31
			},
			{
				"name": "Р. Назаров",
				"pos": "CB",
				"ovr": 62,
				"speed": 71,
				"stamina": 83,
				"num": 3,
				"age": 20
			},
			{
				"name": "Г. Григорьев",
				"pos": "CB",
				"ovr": 63,
				"speed": 73,
				"stamina": 83,
				"num": 4,
				"age": 29
			},
			{
				"name": "Т. Романов",
				"pos": "RB",
				"ovr": 61,
				"speed": 72,
				"stamina": 79,
				"num": 5,
				"age": 23
			},
			{
				"name": "Н. Алексеев",
				"pos": "CM",
				"ovr": 62,
				"speed": 76,
				"stamina": 91,
				"num": 6,
				"age": 28
			},
			{
				"name": "В. Воробьёв",
				"pos": "CM",
				"ovr": 63,
				"speed": 70,
				"stamina": 93,
				"num": 7,
				"age": 19
			},
			{
				"name": "С. Голубев",
				"pos": "CAM",
				"ovr": 64,
				"speed": 74,
				"stamina": 82,
				"num": 8,
				"age": 25
			},
			{
				"name": "Л. Тихонов",
				"pos": "LW",
				"ovr": 63,
				"speed": 70,
				"stamina": 89,
				"num": 9,
				"age": 21
			},
			{
				"name": "М. Орлов",
				"pos": "ST",
				"ovr": 65,
				"speed": 69,
				"stamina": 83,
				"num": 10,
				"age": 30
			},
			{
				"name": "Е. Павлов",
				"pos": "RW",
				"ovr": 62,
				"speed": 67,
				"stamina": 94,
				"num": 11,
				"age": 32
			},
			{
				"name": "И. Лебедев",
				"pos": "GK",
				"ovr": 59,
				"speed": 60,
				"stamina": 91,
				"num": 12,
				"age": 27
			},
			{
				"name": "И. Иванов",
				"pos": "CB",
				"ovr": 63,
				"speed": 66,
				"stamina": 80,
				"num": 13,
				"age": 33
			},
			{
				"name": "С. Романов",
				"pos": "CM",
				"ovr": 64,
				"speed": 77,
				"stamina": 92,
				"num": 14,
				"age": 27
			},
			{
				"name": "С. Степанов",
				"pos": "ST",
				"ovr": 65,
				"speed": 76,
				"stamina": 85,
				"num": 15,
				"age": 25
			},
			{
				"name": "Р. Медведев",
				"pos": "LW",
				"ovr": 68,
				"speed": 82,
				"stamina": 85,
				"num": 16,
				"age": 20
			}
		]
	},
	{
		"id": "ENI",
		"code": "ENI",
		"name": "Енисей",
		"city": "Красноярск",
		"stadium": "Центральный",
		"home": "#D71920",
		"away": "#0C2340",
		"league": "siberia",
		"roster": [
			{
				"name": "Н. Морозов",
				"pos": "GK",
				"ovr": 66,
				"speed": 62,
				"stamina": 91,
				"num": 1,
				"age": 20
			},
			{
				"name": "Д. Морозов",
				"pos": "LB",
				"ovr": 67,
				"speed": 73,
				"stamina": 86,
				"num": 2,
				"age": 32
			},
			{
				"name": "Л. Тихонов",
				"pos": "CB",
				"ovr": 68,
				"speed": 82,
				"stamina": 82,
				"num": 3,
				"age": 21
			},
			{
				"name": "М. Петров",
				"pos": "CB",
				"ovr": 69,
				"speed": 75,
				"stamina": 88,
				"num": 4,
				"age": 25
			},
			{
				"name": "О. Орлов",
				"pos": "RB",
				"ovr": 67,
				"speed": 81,
				"stamina": 79,
				"num": 5,
				"age": 28
			},
			{
				"name": "Н. Егоров",
				"pos": "CM",
				"ovr": 68,
				"speed": 80,
				"stamina": 84,
				"num": 6,
				"age": 34
			},
			{
				"name": "М. Зайцев",
				"pos": "CM",
				"ovr": 69,
				"speed": 69,
				"stamina": 81,
				"num": 7,
				"age": 31
			},
			{
				"name": "К. Григорьев",
				"pos": "CAM",
				"ovr": 70,
				"speed": 72,
				"stamina": 89,
				"num": 8,
				"age": 23
			},
			{
				"name": "А. Васильев",
				"pos": "LW",
				"ovr": 69,
				"speed": 77,
				"stamina": 89,
				"num": 9,
				"age": 32
			},
			{
				"name": "Е. Тихонов",
				"pos": "ST",
				"ovr": 71,
				"speed": 70,
				"stamina": 88,
				"num": 10,
				"age": 26
			},
			{
				"name": "С. Алексеев",
				"pos": "RW",
				"ovr": 68,
				"speed": 68,
				"stamina": 90,
				"num": 11,
				"age": 27
			},
			{
				"name": "П. Семенов",
				"pos": "GK",
				"ovr": 66,
				"speed": 60,
				"stamina": 91,
				"num": 12,
				"age": 22
			},
			{
				"name": "Н. Крылов",
				"pos": "CB",
				"ovr": 66,
				"speed": 67,
				"stamina": 80,
				"num": 13,
				"age": 29
			},
			{
				"name": "Д. Назаров",
				"pos": "CM",
				"ovr": 66,
				"speed": 71,
				"stamina": 79,
				"num": 14,
				"age": 28
			},
			{
				"name": "В. Морозов",
				"pos": "ST",
				"ovr": 74,
				"speed": 80,
				"stamina": 84,
				"num": 15,
				"age": 30
			},
			{
				"name": "Т. Макаров",
				"pos": "LW",
				"ovr": 71,
				"speed": 80,
				"stamina": 83,
				"num": 16,
				"age": 19
			}
		]
	},
	{
		"id": "KDV",
		"code": "KDV",
		"name": "КДВ",
		"city": "Томск",
		"stadium": "Труд",
		"home": "#1F7A3A",
		"away": "#F4F7F2",
		"league": "siberia",
		"roster": [
			{
				"name": "В. Осипов",
				"pos": "GK",
				"ovr": 64,
				"speed": 60,
				"stamina": 86,
				"num": 1,
				"age": 24
			},
			{
				"name": "К. Новиков",
				"pos": "LB",
				"ovr": 65,
				"speed": 73,
				"stamina": 82,
				"num": 2,
				"age": 21
			},
			{
				"name": "Д. Голубев",
				"pos": "CB",
				"ovr": 66,
				"speed": 77,
				"stamina": 89,
				"num": 3,
				"age": 23
			},
			{
				"name": "П. Фёдоров",
				"pos": "CB",
				"ovr": 67,
				"speed": 83,
				"stamina": 84,
				"num": 4,
				"age": 22
			},
			{
				"name": "О. Васильев",
				"pos": "RB",
				"ovr": 65,
				"speed": 75,
				"stamina": 85,
				"num": 5,
				"age": 30
			},
			{
				"name": "В. Назаров",
				"pos": "CM",
				"ovr": 66,
				"speed": 81,
				"stamina": 88,
				"num": 6,
				"age": 32
			},
			{
				"name": "Д. Алексеев",
				"pos": "CM",
				"ovr": 67,
				"speed": 71,
				"stamina": 94,
				"num": 7,
				"age": 21
			},
			{
				"name": "К. Макаров",
				"pos": "CAM",
				"ovr": 68,
				"speed": 83,
				"stamina": 91,
				"num": 8,
				"age": 28
			},
			{
				"name": "О. Лебедев",
				"pos": "LW",
				"ovr": 67,
				"speed": 70,
				"stamina": 79,
				"num": 9,
				"age": 29
			},
			{
				"name": "Р. Романов",
				"pos": "ST",
				"ovr": 69,
				"speed": 82,
				"stamina": 80,
				"num": 10,
				"age": 31
			},
			{
				"name": "А. Романов",
				"pos": "RW",
				"ovr": 66,
				"speed": 77,
				"stamina": 84,
				"num": 11,
				"age": 27
			},
			{
				"name": "Л. Марков",
				"pos": "GK",
				"ovr": 66,
				"speed": 64,
				"stamina": 83,
				"num": 12,
				"age": 25
			},
			{
				"name": "Г. Морозов",
				"pos": "CB",
				"ovr": 69,
				"speed": 74,
				"stamina": 92,
				"num": 13,
				"age": 28
			},
			{
				"name": "Г. Фролов",
				"pos": "CM",
				"ovr": 67,
				"speed": 82,
				"stamina": 90,
				"num": 14,
				"age": 29
			},
			{
				"name": "В. Лебедев",
				"pos": "ST",
				"ovr": 70,
				"speed": 82,
				"stamina": 86,
				"num": 15,
				"age": 34
			},
			{
				"name": "К. Воробьёв",
				"pos": "LW",
				"ovr": 73,
				"speed": 80,
				"stamina": 82,
				"num": 16,
				"age": 30
			}
		]
	},
	{
		"id": "SIB",
		"code": "SIB",
		"name": "Сибирь",
		"city": "Новосибирск",
		"stadium": "Спартак",
		"home": "#1B4F9C",
		"away": "#F4F7FB",
		"league": "siberia",
		"roster": [
			{
				"name": "О. Павлов",
				"pos": "GK",
				"ovr": 62,
				"speed": 62,
				"stamina": 79,
				"num": 1,
				"age": 29
			},
			{
				"name": "Т. Фролов",
				"pos": "LB",
				"ovr": 63,
				"speed": 82,
				"stamina": 94,
				"num": 2,
				"age": 30
			},
			{
				"name": "Т. Тихонов",
				"pos": "CB",
				"ovr": 64,
				"speed": 71,
				"stamina": 81,
				"num": 3,
				"age": 32
			},
			{
				"name": "Г. Тихонов",
				"pos": "CB",
				"ovr": 65,
				"speed": 71,
				"stamina": 82,
				"num": 4,
				"age": 19
			},
			{
				"name": "Л. Ермолаев",
				"pos": "RB",
				"ovr": 63,
				"speed": 69,
				"stamina": 81,
				"num": 5,
				"age": 34
			},
			{
				"name": "Д. Марков",
				"pos": "CM",
				"ovr": 64,
				"speed": 73,
				"stamina": 87,
				"num": 6,
				"age": 22
			},
			{
				"name": "О. Новиков",
				"pos": "CM",
				"ovr": 65,
				"speed": 81,
				"stamina": 94,
				"num": 7,
				"age": 33
			},
			{
				"name": "Д. Крылов",
				"pos": "CAM",
				"ovr": 66,
				"speed": 81,
				"stamina": 91,
				"num": 8,
				"age": 33
			},
			{
				"name": "Т. Алексеев",
				"pos": "LW",
				"ovr": 65,
				"speed": 80,
				"stamina": 86,
				"num": 9,
				"age": 19
			},
			{
				"name": "Д. Алексеев",
				"pos": "ST",
				"ovr": 67,
				"speed": 84,
				"stamina": 82,
				"num": 10,
				"age": 34
			},
			{
				"name": "Т. Крылов",
				"pos": "RW",
				"ovr": 64,
				"speed": 83,
				"stamina": 90,
				"num": 11,
				"age": 32
			},
			{
				"name": "С. Соколов",
				"pos": "GK",
				"ovr": 66,
				"speed": 68,
				"stamina": 83,
				"num": 12,
				"age": 24
			},
			{
				"name": "О. Фёдоров",
				"pos": "CB",
				"ovr": 61,
				"speed": 80,
				"stamina": 79,
				"num": 13,
				"age": 25
			},
			{
				"name": "Е. Семенов",
				"pos": "CM",
				"ovr": 65,
				"speed": 66,
				"stamina": 91,
				"num": 14,
				"age": 26
			},
			{
				"name": "Д. Егоров",
				"pos": "ST",
				"ovr": 65,
				"speed": 67,
				"stamina": 93,
				"num": 15,
				"age": 29
			},
			{
				"name": "Д. Иванов",
				"pos": "LW",
				"ovr": 70,
				"speed": 74,
				"stamina": 89,
				"num": 16,
				"age": 21
			}
		]
	},
	{
		"id": "DBA",
		"code": "DBA",
		"name": "Динамо",
		"city": "Барнаул",
		"stadium": "Динамо",
		"home": "#1E4ED8",
		"away": "#F7F7F2",
		"league": "siberia",
		"roster": [
			{
				"name": "Р. Козлов",
				"pos": "GK",
				"ovr": 60,
				"speed": 61,
				"stamina": 82,
				"num": 1,
				"age": 24
			},
			{
				"name": "О. Зайцев",
				"pos": "LB",
				"ovr": 61,
				"speed": 82,
				"stamina": 85,
				"num": 2,
				"age": 19
			},
			{
				"name": "Н. Киселёв",
				"pos": "CB",
				"ovr": 62,
				"speed": 74,
				"stamina": 84,
				"num": 3,
				"age": 32
			},
			{
				"name": "Е. Фёдоров",
				"pos": "CB",
				"ovr": 63,
				"speed": 75,
				"stamina": 86,
				"num": 4,
				"age": 31
			},
			{
				"name": "В. Медведев",
				"pos": "RB",
				"ovr": 61,
				"speed": 77,
				"stamina": 85,
				"num": 5,
				"age": 28
			},
			{
				"name": "С. Воробьёв",
				"pos": "CM",
				"ovr": 62,
				"speed": 70,
				"stamina": 79,
				"num": 6,
				"age": 30
			},
			{
				"name": "Г. Фролов",
				"pos": "CM",
				"ovr": 63,
				"speed": 83,
				"stamina": 84,
				"num": 7,
				"age": 30
			},
			{
				"name": "Н. Виноградов",
				"pos": "CAM",
				"ovr": 64,
				"speed": 75,
				"stamina": 90,
				"num": 8,
				"age": 31
			},
			{
				"name": "К. Егоров",
				"pos": "LW",
				"ovr": 63,
				"speed": 71,
				"stamina": 83,
				"num": 9,
				"age": 28
			},
			{
				"name": "С. Богданов",
				"pos": "ST",
				"ovr": 65,
				"speed": 69,
				"stamina": 81,
				"num": 10,
				"age": 22
			},
			{
				"name": "Т. Назаров",
				"pos": "RW",
				"ovr": 62,
				"speed": 72,
				"stamina": 86,
				"num": 11,
				"age": 21
			},
			{
				"name": "Л. Орлов",
				"pos": "GK",
				"ovr": 58,
				"speed": 60,
				"stamina": 87,
				"num": 12,
				"age": 32
			},
			{
				"name": "А. Романов",
				"pos": "CB",
				"ovr": 59,
				"speed": 83,
				"stamina": 80,
				"num": 13,
				"age": 23
			},
			{
				"name": "М. Иванов",
				"pos": "CM",
				"ovr": 61,
				"speed": 83,
				"stamina": 92,
				"num": 14,
				"age": 33
			},
			{
				"name": "И. Воробьёв",
				"pos": "ST",
				"ovr": 68,
				"speed": 76,
				"stamina": 90,
				"num": 15,
				"age": 27
			},
			{
				"name": "П. Григорьев",
				"pos": "LW",
				"ovr": 63,
				"speed": 77,
				"stamina": 83,
				"num": 16,
				"age": 34
			}
		]
	},
	{
		"id": "IRT",
		"code": "IRT",
		"name": "Иртыш",
		"city": "Омск",
		"stadium": "Красная Звезда",
		"home": "#F5C400",
		"away": "#111111",
		"league": "siberia",
		"roster": [
			{
				"name": "К. Савельев",
				"pos": "GK",
				"ovr": 58,
				"speed": 63,
				"stamina": 86,
				"num": 1,
				"age": 25
			},
			{
				"name": "П. Виноградов",
				"pos": "LB",
				"ovr": 59,
				"speed": 81,
				"stamina": 84,
				"num": 2,
				"age": 25
			},
			{
				"name": "Т. Лебедев",
				"pos": "CB",
				"ovr": 60,
				"speed": 70,
				"stamina": 85,
				"num": 3,
				"age": 27
			},
			{
				"name": "Е. Богданов",
				"pos": "CB",
				"ovr": 61,
				"speed": 81,
				"stamina": 89,
				"num": 4,
				"age": 29
			},
			{
				"name": "И. Медведев",
				"pos": "RB",
				"ovr": 59,
				"speed": 71,
				"stamina": 78,
				"num": 5,
				"age": 34
			},
			{
				"name": "А. Соколов",
				"pos": "CM",
				"ovr": 60,
				"speed": 69,
				"stamina": 80,
				"num": 6,
				"age": 26
			},
			{
				"name": "Г. Романов",
				"pos": "CM",
				"ovr": 61,
				"speed": 70,
				"stamina": 81,
				"num": 7,
				"age": 28
			},
			{
				"name": "Р. Воробьёв",
				"pos": "CAM",
				"ovr": 62,
				"speed": 81,
				"stamina": 81,
				"num": 8,
				"age": 31
			},
			{
				"name": "Е. Савельев",
				"pos": "LW",
				"ovr": 61,
				"speed": 84,
				"stamina": 92,
				"num": 9,
				"age": 31
			},
			{
				"name": "Н. Виноградов",
				"pos": "ST",
				"ovr": 63,
				"speed": 70,
				"stamina": 92,
				"num": 10,
				"age": 26
			},
			{
				"name": "В. Орлов",
				"pos": "RW",
				"ovr": 60,
				"speed": 79,
				"stamina": 84,
				"num": 11,
				"age": 21
			},
			{
				"name": "К. Богданов",
				"pos": "GK",
				"ovr": 56,
				"speed": 67,
				"stamina": 94,
				"num": 12,
				"age": 23
			},
			{
				"name": "В. Семенов",
				"pos": "CB",
				"ovr": 57,
				"speed": 74,
				"stamina": 82,
				"num": 13,
				"age": 20
			},
			{
				"name": "К. Егоров",
				"pos": "CM",
				"ovr": 56,
				"speed": 73,
				"stamina": 84,
				"num": 14,
				"age": 30
			},
			{
				"name": "А. Назаров",
				"pos": "ST",
				"ovr": 63,
				"speed": 80,
				"stamina": 88,
				"num": 15,
				"age": 21
			},
			{
				"name": "Т. Назаров",
				"pos": "LW",
				"ovr": 63,
				"speed": 75,
				"stamina": 87,
				"num": 16,
				"age": 30
			}
		]
	},
	{
		"id": "TMP",
		"code": "TMP",
		"name": "Темп",
		"city": "Барнаул",
		"stadium": "Темп",
		"home": "#E2B93B",
		"away": "#3A2A08",
		"league": "siberia",
		"roster": [
			{
				"name": "С. Савельев",
				"pos": "GK",
				"ovr": 57,
				"speed": 67,
				"stamina": 82,
				"num": 1,
				"age": 28
			},
			{
				"name": "Т. Зайцев",
				"pos": "LB",
				"ovr": 58,
				"speed": 83,
				"stamina": 86,
				"num": 2,
				"age": 33
			},
			{
				"name": "М. Орлов",
				"pos": "CB",
				"ovr": 59,
				"speed": 80,
				"stamina": 91,
				"num": 3,
				"age": 26
			},
			{
				"name": "А. Киселёв",
				"pos": "CB",
				"ovr": 60,
				"speed": 67,
				"stamina": 87,
				"num": 4,
				"age": 23
			},
			{
				"name": "О. Петров",
				"pos": "RB",
				"ovr": 58,
				"speed": 75,
				"stamina": 88,
				"num": 5,
				"age": 22
			},
			{
				"name": "Е. Богданов",
				"pos": "CM",
				"ovr": 59,
				"speed": 71,
				"stamina": 85,
				"num": 6,
				"age": 33
			},
			{
				"name": "Т. Алексеев",
				"pos": "CM",
				"ovr": 60,
				"speed": 77,
				"stamina": 88,
				"num": 7,
				"age": 20
			},
			{
				"name": "Д. Ермолаев",
				"pos": "CAM",
				"ovr": 61,
				"speed": 79,
				"stamina": 84,
				"num": 8,
				"age": 26
			},
			{
				"name": "К. Фролов",
				"pos": "LW",
				"ovr": 60,
				"speed": 79,
				"stamina": 85,
				"num": 9,
				"age": 32
			},
			{
				"name": "Л. Назаров",
				"pos": "ST",
				"ovr": 62,
				"speed": 70,
				"stamina": 82,
				"num": 10,
				"age": 30
			},
			{
				"name": "Р. Алексеев",
				"pos": "RW",
				"ovr": 59,
				"speed": 67,
				"stamina": 92,
				"num": 11,
				"age": 25
			},
			{
				"name": "И. Медведев",
				"pos": "GK",
				"ovr": 53,
				"speed": 63,
				"stamina": 80,
				"num": 12,
				"age": 20
			},
			{
				"name": "К. Назаров",
				"pos": "CB",
				"ovr": 55,
				"speed": 77,
				"stamina": 91,
				"num": 13,
				"age": 31
			},
			{
				"name": "Р. Зайцев",
				"pos": "CM",
				"ovr": 60,
				"speed": 67,
				"stamina": 87,
				"num": 14,
				"age": 26
			},
			{
				"name": "О. Крылов",
				"pos": "ST",
				"ovr": 64,
				"speed": 74,
				"stamina": 92,
				"num": 15,
				"age": 25
			},
			{
				"name": "В. Тихонов",
				"pos": "LW",
				"ovr": 63,
				"speed": 68,
				"stamina": 93,
				"num": 16,
				"age": 22
			}
		]
	},
	{
		"id": "BUR",
		"code": "BUR",
		"name": "Бурятия",
		"city": "Улан-Удэ",
		"stadium": "Центральный",
		"home": "#0033A0",
		"away": "#FFD100",
		"league": "siberia",
		"roster": [
			{
				"name": "В. Савельев",
				"pos": "GK",
				"ovr": 56,
				"speed": 66,
				"stamina": 90,
				"num": 1,
				"age": 21
			},
			{
				"name": "Л. Козлов",
				"pos": "LB",
				"ovr": 57,
				"speed": 71,
				"stamina": 86,
				"num": 2,
				"age": 33
			},
			{
				"name": "И. Богданов",
				"pos": "CB",
				"ovr": 58,
				"speed": 84,
				"stamina": 83,
				"num": 3,
				"age": 21
			},
			{
				"name": "Н. Егоров",
				"pos": "CB",
				"ovr": 59,
				"speed": 74,
				"stamina": 88,
				"num": 4,
				"age": 19
			},
			{
				"name": "А. Лебедев",
				"pos": "RB",
				"ovr": 57,
				"speed": 81,
				"stamina": 79,
				"num": 5,
				"age": 27
			},
			{
				"name": "О. Соколов",
				"pos": "CM",
				"ovr": 58,
				"speed": 69,
				"stamina": 83,
				"num": 6,
				"age": 23
			},
			{
				"name": "В. Попов",
				"pos": "CM",
				"ovr": 59,
				"speed": 77,
				"stamina": 83,
				"num": 7,
				"age": 32
			},
			{
				"name": "Т. Петров",
				"pos": "CAM",
				"ovr": 60,
				"speed": 79,
				"stamina": 91,
				"num": 8,
				"age": 28
			},
			{
				"name": "Е. Егоров",
				"pos": "LW",
				"ovr": 59,
				"speed": 82,
				"stamina": 86,
				"num": 9,
				"age": 28
			},
			{
				"name": "Л. Смирнов",
				"pos": "ST",
				"ovr": 61,
				"speed": 69,
				"stamina": 78,
				"num": 10,
				"age": 22
			},
			{
				"name": "П. Новиков",
				"pos": "RW",
				"ovr": 58,
				"speed": 81,
				"stamina": 86,
				"num": 11,
				"age": 23
			},
			{
				"name": "М. Голубев",
				"pos": "GK",
				"ovr": 56,
				"speed": 62,
				"stamina": 85,
				"num": 12,
				"age": 28
			},
			{
				"name": "Г. Богданов",
				"pos": "CB",
				"ovr": 59,
				"speed": 82,
				"stamina": 92,
				"num": 13,
				"age": 21
			},
			{
				"name": "К. Попов",
				"pos": "CM",
				"ovr": 56,
				"speed": 66,
				"stamina": 82,
				"num": 14,
				"age": 26
			},
			{
				"name": "Г. Козлов",
				"pos": "ST",
				"ovr": 63,
				"speed": 76,
				"stamina": 88,
				"num": 15,
				"age": 24
			},
			{
				"name": "С. Зайцев",
				"pos": "LW",
				"ovr": 62,
				"speed": 76,
				"stamina": 93,
				"num": 16,
				"age": 23
			}
		]
	},
	{
		"id": "BAI",
		"code": "BAI",
		"name": "Байкал",
		"city": "Иркутск",
		"stadium": "Труд",
		"home": "#0E7490",
		"away": "#E7F6F8",
		"league": "siberia",
		"roster": [
			{
				"name": "К. Воробьёв",
				"pos": "GK",
				"ovr": 55,
				"speed": 65,
				"stamina": 91,
				"num": 1,
				"age": 34
			},
			{
				"name": "В. Голубев",
				"pos": "LB",
				"ovr": 56,
				"speed": 72,
				"stamina": 81,
				"num": 2,
				"age": 30
			},
			{
				"name": "О. Макаров",
				"pos": "CB",
				"ovr": 57,
				"speed": 73,
				"stamina": 84,
				"num": 3,
				"age": 28
			},
			{
				"name": "М. Иванов",
				"pos": "CB",
				"ovr": 58,
				"speed": 68,
				"stamina": 91,
				"num": 4,
				"age": 33
			},
			{
				"name": "Л. Егоров",
				"pos": "RB",
				"ovr": 56,
				"speed": 76,
				"stamina": 89,
				"num": 5,
				"age": 27
			},
			{
				"name": "Е. Савельев",
				"pos": "CM",
				"ovr": 57,
				"speed": 76,
				"stamina": 82,
				"num": 6,
				"age": 33
			},
			{
				"name": "Р. Новиков",
				"pos": "CM",
				"ovr": 58,
				"speed": 83,
				"stamina": 83,
				"num": 7,
				"age": 20
			},
			{
				"name": "С. Киселёв",
				"pos": "CAM",
				"ovr": 59,
				"speed": 84,
				"stamina": 92,
				"num": 8,
				"age": 25
			},
			{
				"name": "О. Назаров",
				"pos": "LW",
				"ovr": 58,
				"speed": 83,
				"stamina": 93,
				"num": 9,
				"age": 33
			},
			{
				"name": "А. Григорьев",
				"pos": "ST",
				"ovr": 60,
				"speed": 76,
				"stamina": 88,
				"num": 10,
				"age": 30
			},
			{
				"name": "П. Михайлов",
				"pos": "RW",
				"ovr": 57,
				"speed": 70,
				"stamina": 86,
				"num": 11,
				"age": 23
			},
			{
				"name": "И. Белов",
				"pos": "GK",
				"ovr": 59,
				"speed": 66,
				"stamina": 90,
				"num": 12,
				"age": 21
			},
			{
				"name": "Г. Козлов",
				"pos": "CB",
				"ovr": 59,
				"speed": 80,
				"stamina": 88,
				"num": 13,
				"age": 22
			},
			{
				"name": "Д. Морозов",
				"pos": "CM",
				"ovr": 59,
				"speed": 72,
				"stamina": 81,
				"num": 14,
				"age": 24
			},
			{
				"name": "С. Семенов",
				"pos": "ST",
				"ovr": 59,
				"speed": 69,
				"stamina": 87,
				"num": 15,
				"age": 26
			},
			{
				"name": "К. Фролов",
				"pos": "LW",
				"ovr": 60,
				"speed": 72,
				"stamina": 85,
				"num": 16,
				"age": 24
			}
		]
	}
];
var CLUB_INFO = {
	"KHM": {
		"capacity": 3050,
		"coach": "А. Петров",
		"founded": 1965,
		"style": "Высокий прессинг"
	},
	"SPM": {
		"capacity": 15e3,
		"coach": "Р. Орлов",
		"founded": 1961,
		"style": "Владение мячом"
	},
	"SHU": {
		"capacity": 3500,
		"coach": "В. Егоров",
		"founded": 1970,
		"style": "Контратака"
	},
	"ENR": {
		"capacity": 6200,
		"coach": "Д. Волков",
		"founded": 1978,
		"style": "Фланговые забегания"
	},
	"ZNM": {
		"capacity": 4100,
		"coach": "С. Белов",
		"founded": 1954,
		"style": "Низкий блок"
	},
	"ALT": {
		"capacity": 2800,
		"coach": "И. Савельев",
		"founded": 1968,
		"style": "Вертикальные передачи"
	},
	"SKL": {
		"capacity": 2500,
		"coach": "Н. Крылов",
		"founded": 1982,
		"style": "Прессинг на своей половине"
	},
	"CVL": {
		"capacity": 2200,
		"coach": "М. Тихонов",
		"founded": 1991,
		"style": "Игра через опорного"
	},
	"NNN": {
		"capacity": 44899,
		"coach": "В. Гаранин",
		"founded": 2015,
		"style": "Владение мячом"
	},
	"KHD": {
		"capacity": 1e4,
		"coach": "Главный тренер",
		"founded": 1946,
		"style": "Высокий прессинг"
	},
	"POB": {
		"capacity": 3e3,
		"coach": "Главный тренер",
		"founded": 2023,
		"style": "Вертикальные передачи"
	},
	"SHP": {
		"capacity": 1500,
		"coach": "Главный тренер",
		"founded": 1994,
		"style": "Контратака"
	},
	"SBR": {
		"capacity": 2500,
		"coach": "Главный тренер",
		"founded": 1961,
		"style": "Фланговые забегания"
	},
	"RVD": {
		"capacity": 2e3,
		"coach": "Главный тренер",
		"founded": 2008,
		"style": "Игра через опорного"
	},
	"ARZ": {
		"capacity": 3200,
		"coach": "Главный тренер",
		"founded": 2016,
		"style": "Низкий блок"
	},
	"MVY": {
		"capacity": 7e3,
		"coach": "Главный тренер",
		"founded": 1957,
		"style": "Прессинг на своей половине"
	},
	"ENI": {
		"capacity": 15e3,
		"coach": "Главный тренер",
		"founded": 1937,
		"style": "Владение мячом"
	},
	"KDV": {
		"capacity": 1e4,
		"coach": "Главный тренер",
		"founded": 2023,
		"style": "Высокий прессинг"
	},
	"SIB": {
		"capacity": 12100,
		"coach": "Главный тренер",
		"founded": 1936,
		"style": "Фланговые забегания"
	},
	"DBA": {
		"capacity": 15e3,
		"coach": "Главный тренер",
		"founded": 1957,
		"style": "Контратака"
	},
	"IRT": {
		"capacity": 4500,
		"coach": "Главный тренер",
		"founded": 1946,
		"style": "Низкий блок"
	},
	"TMP": {
		"capacity": 3e3,
		"coach": "Главный тренер",
		"founded": 1989,
		"style": "Вертикальные передачи"
	},
	"BUR": {
		"capacity": 1e4,
		"coach": "Главный тренер",
		"founded": 2014,
		"style": "Игра через опорного"
	},
	"BAI": {
		"capacity": 16800,
		"coach": "Главный тренер",
		"founded": 2018,
		"style": "Прессинг на своей половине"
	}
};
var STYLE_EN = {
	"Высокий прессинг": "High press",
	"Владение мячом": "Possession",
	"Контратака": "Counter-attack",
	"Фланговые забегания": "Wide runs",
	"Низкий блок": "Low block",
	"Вертикальные передачи": "Vertical passes",
	"Прессинг на своей половине": "Press on their own half",
	"Игра через опорного": "Play through the pivot",
	"Универсальный": "All-round"
};
function styleLabel(style) {
	return getLang() === "en" ? STYLE_EN[style] ?? style : style;
}
function coachLabel(name) {
	return name === "Главный тренер" ? getLang() === "en" ? "Head coach" : name : name;
}
function leagueMeta(id) {
	if (id === "volga") return {
		title: "Волжский",
		name: "Волжский мяч"
	};
	if (id === "siberia") return {
		title: "Сибирский",
		name: "Сибирский мяч"
	};
	return {
		title: "Чувашский",
		name: "Чувашский мяч"
	};
}
function leagueTitle(id, full = false) {
	const meta = leagueMeta(id);
	if (getLang() !== "en") return full ? meta.name : meta.title;
	if (id === "volga") return full ? "Volga Ball" : "Volga";
	if (id === "siberia") return full ? "Siberian Ball" : "Siberian";
	return full ? "Chuvash Ball" : "Chuvash";
}
/** Opponent shape. Same club lines up differently from match to match. */
function clubShape(teamId, salt = 0) {
	const style = clubInfo(teamId).style.toLowerCase();
	let pref = 0;
	if (style.includes("фланг")) pref = 2;
	else if (style.includes("вертикал") || style.includes("контрат")) pref = 1;
	else if (style.includes("низк") || style.includes("своей") || style.includes("опорн")) pref = 3;
	const shift = Math.abs(Math.trunc(salt)) % 3;
	return FORMATION_IDS[(pref + shift) % FORMATION_IDS.length];
}
function clubInfo(id) {
	return CLUB_INFO[id] ?? {
		capacity: 3e3,
		coach: "Главный тренер",
		founded: 1970,
		style: "Универсальный"
	};
}
function teamById(id) {
	const team = TEAMS.find((t) => t.id === id);
	if (team) return team;
	return {
		id,
		code: (id || "???").slice(0, 3),
		name: "Клуб снят",
		city: "—",
		stadium: "—",
		home: "#1F6B45",
		away: "#F4F1E8",
		league: "chuvash",
		roster: []
	};
}
var LEAGUE_ORDER = [
	"volga",
	"chuvash",
	"siberia"
];
function teamsIn(id) {
	return TEAMS.filter((t) => t.league === id);
}
function leagueIds(teamId) {
	return teamsIn(TEAMS.find((t) => t.id === teamId)?.league ?? "chuvash").map((t) => t.id);
}
function neighborLeague(id, dir) {
	const i = LEAGUE_ORDER.indexOf(id);
	return LEAGUE_ORDER[((i < 0 ? 1 : i) + dir + LEAGUE_ORDER.length) % LEAGUE_ORDER.length];
}
function avgOvr(team) {
	const xi = team.roster.slice(0, 11);
	if (!xi.length) return 60;
	return Math.round(xi.reduce((s, p) => s + p.ovr, 0) / xi.length);
}
function clubRating(id) {
	return avgOvr(teamById(id));
}
function coachRating(id) {
	const avg = clubRating(id);
	const style = clubInfo(id).style;
	const bump = style.includes("прессинг") || style.includes("Прессинг") ? 1 : style.includes("Владение") ? 2 : 0;
	return Math.max(58, Math.min(90, avg + bump));
}
function playerAttrs(p) {
	if (p.accuracy != null && p.hardness != null) return {
		speed: p.speed,
		accuracy: p.accuracy,
		hardness: p.hardness
	};
	let h = 0;
	for (let i = 0; i < p.name.length; i++) h = (h * 33 + p.name.charCodeAt(i)) % 97;
	const atk = p.pos === "ST" || p.pos === "LW" || p.pos === "RW" || p.pos === "CAM";
	const def = p.pos === "CB" || p.pos === "CDM" || p.pos === "LB" || p.pos === "RB" || p.pos === "GK";
	const accuracy = Math.max(46, Math.min(94, Math.round(p.ovr + (atk ? 6 : def ? -3 : 1) + h % 7 - 3)));
	const hardness = Math.max(40, Math.min(96, Math.round(p.ovr + (def ? 8 : atk ? -5 : 0) + h * 3 % 9 - 4)));
	return {
		speed: p.speed,
		accuracy,
		hardness
	};
}
function seasonFixtures(ids) {
	const n = ids.length;
	const list = ids.slice();
	const first = [];
	for (let r = 0; r < n - 1; r++) {
		const pairs = [];
		for (let i = 0; i < n / 2; i++) {
			const a = list[i];
			const b = list[n - 1 - i];
			const swap = r % 2 === 1 && i === 0;
			pairs.push({
				round: r,
				home: swap ? b : a,
				away: swap ? a : b,
				hg: null,
				ag: null
			});
		}
		first.push(pairs);
		const fixed = list[0];
		const rest = list.slice(1);
		const last = rest.pop();
		rest.unshift(last);
		list.splice(0, list.length, fixed, ...rest);
	}
	const second = first.map((pairs, i) => pairs.map((p) => ({
		round: i + (n - 1),
		home: p.away,
		away: p.home,
		hg: null,
		ag: null
	})));
	return [...first.flat(), ...second.flat()];
}
function tableOf(fixtures) {
	const rows = /* @__PURE__ */ new Map();
	for (const f of fixtures) {
		if (!rows.has(f.home)) rows.set(f.home, {
			id: f.home,
			p: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			pts: 0
		});
		if (!rows.has(f.away)) rows.set(f.away, {
			id: f.away,
			p: 0,
			w: 0,
			d: 0,
			l: 0,
			gf: 0,
			ga: 0,
			pts: 0
		});
	}
	for (const f of fixtures) {
		if (f.hg === null || f.ag === null) continue;
		const h = rows.get(f.home);
		const a = rows.get(f.away);
		if (!h || !a) continue;
		h.p++;
		a.p++;
		h.gf += f.hg;
		h.ga += f.ag;
		a.gf += f.ag;
		a.ga += f.hg;
		if (f.hg > f.ag) {
			h.w++;
			h.pts += 3;
			a.l++;
		} else if (f.hg < f.ag) {
			a.w++;
			a.pts += 3;
			h.l++;
		} else {
			h.d++;
			a.d++;
			h.pts++;
			a.pts++;
		}
	}
	return [...rows.values()].sort((a, b) => b.pts - a.pts || b.gf - b.ga - (a.gf - a.ga) || b.gf - a.gf);
}
function profile(role) {
	switch (role) {
		case "GK": return {
			line: 0,
			flank: 0
		};
		case "CB": return {
			line: 1,
			flank: 0
		};
		case "LB": return {
			line: 1,
			flank: -1
		};
		case "RB": return {
			line: 1,
			flank: 1
		};
		case "CDM": return {
			line: 2,
			flank: 0
		};
		case "CM": return {
			line: 2,
			flank: 0
		};
		case "LM": return {
			line: 2,
			flank: -1
		};
		case "RM": return {
			line: 2,
			flank: 1
		};
		case "CAM": return {
			line: 3,
			flank: 0
		};
		case "LW": return {
			line: 3,
			flank: -1
		};
		case "RW": return {
			line: 3,
			flank: 1
		};
		case "ST": return {
			line: 4,
			flank: 0
		};
	}
}
function slotFit(role, slotRole) {
	if (role === "GK" || slotRole === "GK") return role === slotRole ? 2 : -8;
	const a = profile(role);
	const b = profile(slotRole);
	const d = Math.abs(a.line - b.line) + Math.abs(a.flank - b.flank);
	if (d === 0) return 2;
	if (d <= 1.5) return 0;
	return -3;
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function simOtherScore(homeOvr, awayOvr, seed) {
	const rng = mulberry32(seed);
	const poisson = (lambda) => {
		const L = Math.exp(-lambda);
		let k = 0;
		let p = 1;
		do {
			k++;
			p *= rng();
		} while (p > L && k < 8);
		return k - 1;
	};
	return [poisson(Math.max(.35, 1.25 + (homeOvr - awayOvr) / 28)), poisson(Math.max(.3, 1.05 + (awayOvr - homeOvr) / 28))];
}
var AudioBus = class {
	ctx = null;
	crowd = null;
	murmur = null;
	filter = null;
	mid = null;
	alive = false;
	phrase = 0;
	nextChant = 1.4;
	ui = true;
	suppressed = false;
	unlock() {
		this.ctxOnly();
		const ctx = this.ctx;
		if (!ctx || this.crowd) {
			if (ctx?.state === "suspended") ctx.resume();
			return;
		}
		const buffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
		const data = buffer.getChannelData(0);
		let b0 = 0;
		let b1 = 0;
		for (let i = 0; i < data.length; i++) {
			const white = Math.random() * 2 - 1;
			b0 = .985 * b0 + .015 * white;
			b1 = .9 * b1 + .1 * white;
			data[i] = b0 * .82 + b1 * .28;
		}
		const src = ctx.createBufferSource();
		src.buffer = buffer;
		src.loop = true;
		const low = ctx.createBiquadFilter();
		low.type = "lowpass";
		low.frequency.value = 380;
		const mid = ctx.createBiquadFilter();
		mid.type = "bandpass";
		mid.frequency.value = 640;
		mid.Q.value = .45;
		const lowGain = ctx.createGain();
		lowGain.gain.value = 0;
		const midGain = ctx.createGain();
		midGain.gain.value = 0;
		const sum = ctx.createGain();
		sum.gain.value = 1;
		src.connect(low);
		low.connect(lowGain);
		src.connect(mid);
		mid.connect(midGain);
		lowGain.connect(sum);
		midGain.connect(sum);
		sum.connect(ctx.destination);
		src.start();
		this.filter = low;
		this.mid = mid;
		this.crowd = lowGain;
		this.murmur = midGain;
		if (ctx.state === "suspended") ctx.resume();
	}
	setMatch(on) {
		this.alive = on;
		if (!on && this.ctx) {
			const t = this.ctx.currentTime;
			this.crowd?.gain.setTargetAtTime(0, t, .12);
			this.murmur?.gain.setTargetAtTime(0, t, .12);
		}
	}
	update(dt, volume, muffled, heat = 0) {
		if (!this.ctx || !this.crowd || !this.murmur || !this.filter || !this.mid || !this.alive) return;
		const v = Math.max(0, Math.min(1, volume));
		const h = Math.max(0, Math.min(1, heat));
		this.phrase += dt;
		const swell = .55 + .45 * Math.sin(this.phrase * .85) * Math.sin(this.phrase * .23);
		const bed = (muffled ? .05 : .085 + h * .05 + swell * .02) * v;
		const chat = (muffled ? .022 : .04 + h * .045) * v;
		const t = this.ctx.currentTime;
		this.crowd.gain.setTargetAtTime(bed, t, .25);
		this.murmur.gain.setTargetAtTime(chat, t, .18);
		this.filter.frequency.setTargetAtTime(muffled ? 220 : 300 + h * 90, t, .3);
		this.mid.frequency.setTargetAtTime(muffled ? 480 : 520 + h * 180, t, .25);
		this.nextChant -= dt;
		if (this.nextChant <= 0) {
			this.nextChant = (muffled ? 3.6 : 1.8) + Math.random() * 1.8 - h * .6;
			this.chant(h, v * (muffled ? .4 : 1));
			if (h > .72 && Math.random() < .22) this.clap(v * .35, h);
		}
	}
	chant(heat, volume) {
		if (!this.ctx || volume <= 0) return;
		const t = this.ctx.currentTime;
		const dur = .7 + heat * .55;
		const noise = this.ctx.createBufferSource();
		const buffer = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * dur), this.ctx.sampleRate);
		const data = buffer.getChannelData(0);
		let brown = 0;
		for (let i = 0; i < data.length; i++) {
			const env = Math.sin(i / data.length * Math.PI);
			brown = .94 * brown + .06 * (Math.random() * 2 - 1);
			data[i] = brown * env;
		}
		noise.buffer = buffer;
		const band = this.ctx.createBiquadFilter();
		band.type = "bandpass";
		band.frequency.value = 280 + heat * 160 + Math.random() * 40;
		band.Q.value = .7;
		const g = this.ctx.createGain();
		const peak = volume * (.05 + heat * .06);
		g.gain.setValueAtTime(1e-4, t);
		g.gain.exponentialRampToValueAtTime(Math.max(2e-4, peak), t + .16);
		g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
		noise.connect(band);
		band.connect(g);
		g.connect(this.ctx.destination);
		noise.start(t);
		noise.stop(t + dur + .02);
	}
	clap(volume, heat) {
		if (!this.ctx || volume <= 0) return;
		const beats = 1 + Math.floor(heat * 1.2);
		for (let i = 0; i < beats; i++) {
			const t = this.ctx.currentTime + i * (.28 + heat * .06);
			const noise = this.ctx.createBufferSource();
			const buffer = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * .09), this.ctx.sampleRate);
			const data = buffer.getChannelData(0);
			let brown = 0;
			for (let n = 0; n < data.length; n++) {
				brown = .86 * brown + .14 * (Math.random() * 2 - 1);
				data[n] = brown * Math.pow(1 - n / data.length, 1.6);
			}
			noise.buffer = buffer;
			const lp = this.ctx.createBiquadFilter();
			lp.type = "lowpass";
			lp.frequency.value = 380;
			const g = this.ctx.createGain();
			g.gain.setValueAtTime(Math.max(2e-4, volume * .007), t);
			g.gain.exponentialRampToValueAtTime(1e-4, t + .08);
			noise.connect(lp);
			lp.connect(g);
			g.connect(this.ctx.destination);
			noise.start(t);
			noise.stop(t + .1);
		}
	}
	click() {
		if (!this.ui || this.suppressed) return;
		try {
			this.ctxOnly();
			this.tone(520, .018, .0032, "sine");
		} catch {}
	}
	ctxOnly() {
		if (typeof window === "undefined") return;
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return;
		if (!this.ctx) this.ctx = new AC();
		if (this.ctx.state === "suspended") this.ctx.resume();
	}
	tone(freq, dur, gain, type = "sine") {
		if (!this.ctx || gain <= 0 || !Number.isFinite(freq) || !Number.isFinite(gain)) return;
		const t = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const g = this.ctx.createGain();
		osc.type = type;
		osc.frequency.value = freq;
		g.gain.setValueAtTime(gain, t);
		g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
		osc.connect(g);
		g.connect(this.ctx.destination);
		osc.start(t);
		osc.stop(t + dur + .02);
	}
	kick() {
		if (this.suppressed) return;
		try {
			this.ctxOnly();
			this.thud();
		} catch {}
	}
	thud() {
		if (!this.ctx) return;
		const ctx = this.ctx;
		const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * .06), ctx.sampleRate);
		const data = buffer.getChannelData(0);
		let brown = 0;
		for (let i = 0; i < data.length; i++) {
			brown = .82 * brown + .18 * (Math.random() * 2 - 1);
			data[i] = brown * Math.pow(1 - i / data.length, 1.4);
		}
		const src = ctx.createBufferSource();
		src.buffer = buffer;
		const lp = ctx.createBiquadFilter();
		lp.type = "lowpass";
		lp.frequency.value = 160;
		const g = ctx.createGain();
		g.gain.value = .07;
		src.connect(lp);
		lp.connect(g);
		g.connect(ctx.destination);
		src.start();
	}
	whistle() {
		if (this.suppressed) return;
		this.tone(1480, .12, .02);
		this.tone(1760, .08, .012);
	}
	goal() {
		if (this.suppressed || !this.ctx || typeof window === "undefined") return;
		const t = this.ctx.currentTime;
		this.crowd?.gain.setTargetAtTime(.16, t, .05);
		this.murmur?.gain.setTargetAtTime(.09, t, .05);
		this.chant(1, 1);
		this.clap(1, 1);
	}
};
var audio = new AudioBus();
buildNets();
function buildNets() {
	const nets = [];
	for (const gy of [HALF_L, -HALF_L]) {
		const nodes = [];
		const cols = 9;
		const rows = 5;
		for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
			const x = -GOAL_HW + c / 8 * GOAL_HW * 2;
			const z = r / 4 * 2.4;
			const y = gy + Math.sign(gy) * .15;
			const pin = r === 4 || c === 0 || c === 8;
			nodes.push({
				x,
				y,
				z,
				px: x,
				py: y,
				pz: z,
				pin
			});
		}
		nets.push(nodes);
	}
	return nets;
}
function pitchTheme() {
	return {
		sky: [
			"#0c2416",
			"#145c30",
			"#07110c"
		],
		stand: "#0d1612",
		tier: "#1a2c24",
		grass: ["#187a3a", "#1f9a48"],
		accent: "#8fe388"
	};
}
function paintMatch(ctx, w, h, field) {
	const theme = pitchTheme();
	const scale = h / Math.max(20, field.viewH);
	const fy = field.flipY ? -1 : 1;
	const shake = (field.cam.shake || 0) * 4;
	const project = (x, y, z = 0) => {
		const s = scale;
		return {
			sx: w / 2 + (x - field.cam.x) * s + shake,
			sy: h * .52 - (y - field.cam.y) * fy * s - z * s,
			s
		};
	};
	ctx.clearRect(0, 0, w, h);
	const sky = ctx.createLinearGradient(0, 0, 0, h);
	const wet = field.weather === "rain";
	const cold = field.weather === "snow";
	sky.addColorStop(0, wet ? "#141c24" : cold ? "#1a2228" : theme.sky[0]);
	sky.addColorStop(.42, wet ? "#1c2830" : cold ? "#243038" : theme.sky[1]);
	sky.addColorStop(1, theme.sky[2]);
	ctx.fillStyle = sky;
	ctx.fillRect(0, 0, w, h);
	drawStands(ctx, project, field.weatherT ?? 0, field.homeColor, field.awayColor, theme);
	drawGrass(ctx, project, theme);
	drawLines(ctx, project);
	if (field.offsideY != null) {
		ctx.save();
		ctx.strokeStyle = "rgba(212,83,74,0.9)";
		ctx.setLineDash([6, 6]);
		ctx.lineWidth = Math.max(1.5, project(0, 0).s * .1);
		strokeWorld(ctx, project, [[-34, field.offsideY], [34, field.offsideY]]);
		ctx.restore();
	}
	drawGoals(ctx, project, field, theme);
	drawShadows(ctx, project, field);
	const sprites = field.players.filter((p) => p.on && !p.red).map((p) => ({
		p,
		y: p.y
	})).sort((a, b) => a.y - b.y);
	for (const { p } of sprites) drawPlayer(ctx, project, p, p.uid === field.controlledId, p.side === 0 ? field.homeColor : field.awayColor, theme.accent);
	if (field.official) drawOfficial(ctx, project, field.official);
	drawBall(ctx, project, field.ball);
	drawWeather(ctx, w, h, field);
	for (const q of field.particles) {
		const pt = project(q.x, q.y, q.life / q.max * 2);
		ctx.globalAlpha = Math.max(0, q.life / q.max);
		ctx.fillStyle = q.color;
		ctx.fillRect(pt.sx, pt.sy, q.size * pt.s, q.size * pt.s);
		ctx.globalAlpha = 1;
	}
	const vig = ctx.createRadialGradient(w / 2, h / 2, h * .2, w / 2, h / 2, h * .72);
	vig.addColorStop(0, "rgba(0,0,0,0)");
	vig.addColorStop(1, "rgba(0,0,0,0.45)");
	ctx.fillStyle = vig;
	ctx.fillRect(0, 0, w, h);
}
var FANS = buildFans();
function buildFans() {
	const fans = [];
	const gap = 2.4;
	const depth = 11;
	const stands = [
		{
			x0: -35,
			x1: 35,
			y0: HALF_L + gap,
			y1: HALF_L + gap + depth,
			cols: 38,
			rows: 6
		},
		{
			x0: -35,
			x1: 35,
			y0: -HALF_L - gap - depth,
			y1: -HALF_L - gap,
			cols: 38,
			rows: 6
		},
		{
			x0: 36.4,
			x1: 47.4,
			y0: -HALF_L + 1,
			y1: HALF_L - 1,
			cols: 8,
			rows: 22
		},
		{
			x0: -47.4,
			x1: -36.4,
			y0: -HALF_L + 1,
			y1: HALF_L - 1,
			cols: 8,
			rows: 22
		}
	];
	let n = 0;
	for (const stand of stands) for (let r = 0; r < stand.rows; r++) for (let c = 0; c < stand.cols; c++) {
		if ((r + c * 3) % 8 === 0) continue;
		const tx = (c + .5) / stand.cols;
		const ty = (r + .5) / stand.rows;
		const x = stand.x0 + (stand.x1 - stand.x0) * tx;
		const y = stand.y0 + (stand.y1 - stand.y0) * ty;
		const camp = y >= 0 ? 1 : 0;
		fans.push({
			x,
			y,
			z: .35 + r * .42,
			phase: n % 19 * .41,
			camp,
			salt: n * 5 + r * 3 + c
		});
		n++;
	}
	return fans;
}
function shirtTint(hex, salt) {
	const raw = hex.replace("#", "");
	const full = raw.length === 3 ? raw.split("").map((ch) => ch + ch).join("") : raw;
	const n = Number.parseInt(full, 16);
	if (!Number.isFinite(n)) return hex;
	const k = .58 + salt % 6 * .08;
	const lift = salt % 4 * 14;
	const ch = (shift) => Math.max(0, Math.min(255, Math.round((n >> shift & 255) * k + lift)));
	return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
}
function drawStands(ctx, project, time, homeColor, awayColor, theme) {
	const gap = 2.4;
	const depth = 11.6;
	ctx.fillStyle = theme.stand;
	poly(ctx, project, [
		[-49.5, -HALF_L - gap - depth - 1.5],
		[49.5, -HALF_L - gap - depth - 1.5],
		[49.5, HALF_L + gap + depth + 1.5],
		[-49.5, HALF_L + gap + depth + 1.5]
	]);
	ctx.fill();
	ctx.fillStyle = theme.tier;
	const tiers = [
		[
			-34.4,
			HALF_L + gap,
			34.4,
			HALF_L + gap + depth
		],
		[
			-34.4,
			-HALF_L - gap - depth,
			34.4,
			-HALF_L - gap
		],
		[
			36.4,
			-HALF_L,
			48,
			HALF_L
		],
		[
			-48,
			-HALF_L,
			-36.4,
			HALF_L
		]
	];
	for (const [x0, y0, x1, y1] of tiers) {
		poly(ctx, project, [
			[x0, y0],
			[x1, y0],
			[x1, y1],
			[x0, y1]
		]);
		ctx.fill();
	}
	for (const fan of FANS) {
		const wave = Math.sin(time * 2.1 + fan.phase);
		const jump = Math.max(0, Math.sin(time * 1.15 + fan.phase * 1.7));
		const p = project(fan.x, fan.y, fan.z + jump * .55);
		const s = Math.max(2.4, p.s * .62);
		const lean = wave * s * .18;
		const main = fan.camp === 0 ? homeColor : awayColor;
		const other = fan.camp === 0 ? awayColor : homeColor;
		ctx.fillStyle = shirtTint(fan.salt % 9 === 0 ? other : main, fan.salt);
		ctx.globalAlpha = .94;
		ctx.fillRect(p.sx - s * .42 + lean, p.sy - s * 1.15, s * .84, s * 1.05);
		ctx.fillStyle = "#efd0b0";
		ctx.beginPath();
		ctx.arc(p.sx + lean * .4, p.sy - s * 1.38, s * .34, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.globalAlpha = 1;
	const boards = [
		[
			0,
			HALF_L + 1.15,
			"#e7f2ea"
		],
		[
			0,
			-HALF_L - 1.15,
			theme.accent
		],
		[
			35.15,
			0,
			"#e2b93b"
		],
		[
			-35.15,
			0,
			"#c4534a"
		]
	];
	for (const [x, y, color] of boards) {
		const horizontal = Math.abs(y) > Math.abs(x);
		const p = project(x, y, .35);
		ctx.fillStyle = color;
		if (horizontal) ctx.fillRect(p.sx - p.s * 34, p.sy - p.s * .35, p.s * 34 * 2, p.s * .7);
		else ctx.fillRect(p.sx - p.s * .35, p.sy - p.s * HALF_L, p.s * .7, p.s * HALF_L * 2);
	}
}
function drawGrass(ctx, project, theme) {
	const stripes = 14;
	const span = HALF_L * 2 / stripes;
	for (let i = 0; i < stripes; i++) {
		const y0 = -HALF_L + i * span;
		ctx.fillStyle = i % 2 === 0 ? theme.grass[0] : theme.grass[1];
		poly(ctx, project, [
			[-34, y0],
			[34, y0],
			[34, y0 + span],
			[-34, y0 + span]
		]);
		ctx.fill();
	}
}
function poly(ctx, project, pts) {
	ctx.beginPath();
	pts.forEach(([x, y], i) => {
		const p = project(x, y, 0);
		if (i === 0) ctx.moveTo(p.sx, p.sy);
		else ctx.lineTo(p.sx, p.sy);
	});
	ctx.closePath();
}
function strokeWorld(ctx, project, pts, close = false) {
	ctx.beginPath();
	pts.forEach(([x, y], i) => {
		const p = project(x, y, 0);
		if (i === 0) ctx.moveTo(p.sx, p.sy);
		else ctx.lineTo(p.sx, p.sy);
	});
	if (close) ctx.closePath();
	ctx.stroke();
}
function drawLines(ctx, project) {
	ctx.strokeStyle = "rgba(255,255,255,0.88)";
	ctx.lineWidth = Math.max(1.2, project(0, 0).s * .12);
	strokeWorld(ctx, project, [
		[-34, -HALF_L],
		[34, -HALF_L],
		[34, HALF_L],
		[-34, HALF_L]
	], true);
	strokeWorld(ctx, project, [[-34, 0], [34, 0]]);
	const circle = [];
	for (let i = 0; i <= 40; i++) {
		const a = i / 40 * Math.PI * 2;
		circle.push([Math.cos(a) * 9.15, Math.sin(a) * 9.15]);
	}
	strokeWorld(ctx, project, circle, true);
	for (const s of [1, -1]) {
		strokeWorld(ctx, project, [
			[-20.16, s * HALF_L],
			[-20.16, s * (HALF_L - 16.5)],
			[20.16, s * (HALF_L - 16.5)],
			[20.16, s * HALF_L]
		]);
		strokeWorld(ctx, project, [
			[-9.16, s * HALF_L],
			[-9.16, s * (HALF_L - 5.5)],
			[9.16, s * (HALF_L - 5.5)],
			[9.16, s * HALF_L]
		]);
	}
}
function drawGoals(ctx, project, field, theme) {
	const frame = field.phase === "goal" ? theme.accent : "#f4f7f2";
	for (const gy of [HALF_L, -HALF_L]) {
		const sign = Math.sign(gy);
		const h = 2.44;
		const back = gy + sign * 1.35;
		ctx.strokeStyle = "rgba(231,242,234,0.55)";
		ctx.lineWidth = Math.max(1, project(0, 0).s * .07);
		const net = [
			[
				[
					-GOAL_HW,
					gy,
					h
				],
				[
					GOAL_HW,
					gy,
					h
				],
				[
					GOAL_HW,
					back,
					h * .72
				],
				[
					-GOAL_HW,
					back,
					h * .72
				]
			],
			[
				[
					-GOAL_HW,
					gy,
					0
				],
				[
					-GOAL_HW,
					gy,
					h
				],
				[
					-GOAL_HW,
					back,
					h * .72
				],
				[
					-GOAL_HW,
					back,
					0
				]
			],
			[
				[
					GOAL_HW,
					gy,
					0
				],
				[
					GOAL_HW,
					gy,
					h
				],
				[
					GOAL_HW,
					back,
					h * .72
				],
				[
					GOAL_HW,
					back,
					0
				]
			]
		];
		for (const poly3 of net) {
			ctx.beginPath();
			poly3.forEach(([x, y, z], i) => {
				const p = project(x, y, z);
				if (i === 0) ctx.moveTo(p.sx, p.sy);
				else ctx.lineTo(p.sx, p.sy);
			});
			ctx.closePath();
			ctx.stroke();
		}
		ctx.strokeStyle = frame;
		ctx.lineWidth = Math.max(2, project(0, 0).s * .16);
		const posts = [
			[
				-GOAL_HW,
				gy,
				0
			],
			[
				-GOAL_HW,
				gy,
				h
			],
			[
				GOAL_HW,
				gy,
				h
			],
			[
				GOAL_HW,
				gy,
				0
			]
		];
		ctx.beginPath();
		posts.forEach(([x, y, z], i) => {
			const p = project(x, y, z);
			if (i === 0) ctx.moveTo(p.sx, p.sy);
			else ctx.lineTo(p.sx, p.sy);
		});
		ctx.stroke();
	}
}
function drawShadows(ctx, project, field) {
	ctx.fillStyle = "rgba(0,0,0,0.35)";
	for (const p of field.players) {
		if (!p.on || p.red) continue;
		const s = project(p.x, p.y, 0);
		ctx.beginPath();
		ctx.ellipse(s.sx, s.sy + 2, s.s * .55, s.s * .28, 0, 0, Math.PI * 2);
		ctx.fill();
	}
	const b = project(field.ball.x, field.ball.y, 0);
	ctx.beginPath();
	ctx.ellipse(b.sx, b.sy + 2, b.s * (.28 + field.ball.z * .02), b.s * .16, 0, 0, Math.PI * 2);
	ctx.fill();
}
function drawPlayer(ctx, project, p, ctrl, kit, accent) {
	const foot = project(p.x, p.y, 0);
	const s = Math.max(12, Math.min(28, foot.s * .92));
	const nose = project(p.x - Math.sin(p.yaw) * 1.15, p.y + Math.cos(p.yaw) * 1.15, 0);
	if (ctrl) {
		ctx.strokeStyle = accent;
		ctx.lineWidth = Math.max(2, s * .1);
		ctx.beginPath();
		ctx.arc(foot.sx, foot.sy - s * .15, Math.max(13, s * 1.15), 0, Math.PI * 2);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(foot.sx, foot.sy);
		ctx.lineTo(nose.sx, nose.sy);
		ctx.stroke();
	}
	const faceX = -Math.sin(p.yaw);
	const bx = foot.sx;
	const by = foot.sy - s * .72;
	const grd = ctx.createLinearGradient(bx, by - s, bx, by + s);
	grd.addColorStop(0, shade(kit, 1.25));
	grd.addColorStop(1, shade(kit, .72));
	ctx.fillStyle = p.role === "GK" ? "#f08a24" : grd;
	ctx.beginPath();
	ctx.ellipse(bx, by, s * .5, s * .72, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "rgba(255,255,255,0.35)";
	ctx.fillRect(bx - s * .5, by - s * .05, s, s * .12);
	ctx.fillStyle = "#f0d2b4";
	ctx.beginPath();
	ctx.arc(bx + faceX * s * .08, by - s * .78, Math.max(4, s * .3), 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "#f4f7f2";
	ctx.font = `700 ${Math.max(9, s * .34)}px Oswald, sans-serif`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(String(p.num), bx, by);
	ctx.textBaseline = "alphabetic";
}
function drawBall(ctx, project, ball) {
	const p = project(ball.x, ball.y, ball.z);
	const r = Math.max(4.5, Math.min(10, p.s * .36));
	ctx.fillStyle = "#f7f7f5";
	ctx.beginPath();
	ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "#111111";
	ctx.beginPath();
	ctx.moveTo(p.sx, p.sy - r * .42);
	for (let i = 1; i <= 5; i++) {
		const a = -Math.PI / 2 + i * 2 * Math.PI / 5;
		ctx.lineTo(p.sx + Math.cos(a) * r * .42, p.sy + Math.sin(a) * r * .42);
	}
	ctx.closePath();
	ctx.fill();
	ctx.strokeStyle = "#111111";
	ctx.lineWidth = Math.max(1, r * .08);
	ctx.beginPath();
	ctx.arc(p.sx, p.sy, r * .72, 0, Math.PI * 2);
	ctx.stroke();
}
function drawOfficial(ctx, project, official) {
	const body = project(official.x, official.y, .95);
	const head = project(official.x, official.y, 1.55);
	ctx.fillStyle = "#111111";
	ctx.beginPath();
	ctx.ellipse(body.sx, body.sy, body.s * .58, body.s * .88, 0, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "#f2c94c";
	ctx.fillRect(body.sx - body.s * .58, body.sy - body.s * .2, body.s * 1.16, body.s * .22);
	ctx.fillStyle = "#f0d2b4";
	ctx.beginPath();
	ctx.arc(head.sx, head.sy, Math.max(4, head.s * .32), 0, Math.PI * 2);
	ctx.fill();
}
function drawWeather(ctx, w, h, field) {
	if (!field.weather || field.weather === "clear") return;
	const t = field.weatherT ?? 0;
	ctx.save();
	if (field.weather === "rain") {
		ctx.strokeStyle = "rgba(210,225,235,0.35)";
		ctx.lineWidth = 1;
		for (let i = 0; i < 70; i++) {
			const x = (i * 97 + t * 180) % (w + 40) - 20;
			const y = (i * 53 + t * 320) % (h + 40) - 20;
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x - 6, y + 16);
			ctx.stroke();
		}
	} else {
		ctx.fillStyle = "rgba(255,255,255,0.8)";
		for (let i = 0; i < 50; i++) {
			const x = (i * 113 + t * 40) % w;
			const y = (i * 71 + t * 50) % h;
			ctx.fillRect(x, y, 2.5, 2.5);
		}
	}
	ctx.restore();
}
function shade(hex, m) {
	const c = hex.replace("#", "");
	const n = parseInt(c.length === 3 ? c.split("").map((ch) => ch + ch).join("") : c, 16);
	return `rgb(${Math.max(0, Math.min(255, Math.round((n >> 16 & 255) * m)))},${Math.max(0, Math.min(255, Math.round((n >> 8 & 255) * m)))},${Math.max(0, Math.min(255, Math.round((n & 255) * m)))})`;
}
function diffFromRatings(mine, theirs) {
	const gap = theirs - mine;
	if (gap >= 14) return "legend";
	if (gap >= 9) return "world";
	if (gap >= 5) return "pro";
	if (gap >= 1) return "amateur";
	return "novice";
}
var DIFF = {
	novice: {
		acc: .2,
		speed: .62,
		save: .12,
		press: .4,
		mate: .96,
		tackle: .2,
		mark: .75
	},
	amateur: {
		acc: .4,
		speed: .72,
		save: .26,
		press: .85,
		mate: .84,
		tackle: .36,
		mark: 1
	},
	pro: {
		acc: .72,
		speed: .9,
		save: .78,
		press: 1.05,
		mate: .56,
		tackle: .94,
		mark: 1.7
	},
	world: {
		acc: .86,
		speed: .98,
		save: .88,
		press: 1.28,
		mate: .44,
		tackle: 1.1,
		mark: 1.95
	},
	legend: {
		acc: .98,
		speed: 1.14,
		save: .96,
		press: 2.75,
		mate: .28,
		tackle: 1.4,
		mark: 2.25
	}
};
var PLAN_LABEL = {
	tiki: "Тики-така",
	bus: "Автобус",
	press: "Высокий прессинг",
	counter: "Контратака",
	wing: "Фланги",
	direct: "Вертикальный футбол"
};
function matchPace(v) {
	if (Math.abs(v - .82) < .03 || Math.abs(v - .68) < .03 || Math.abs(v - .78) < .03) return .78;
	if (Math.abs(v - .96) < .03) return .96;
	if (Math.abs(v - 1.58) < .03 || Math.abs(v - 1.45) < .03 || Math.abs(v - 1.18) < .03 || Math.abs(v - 1.12) < .03 || Math.abs(v - 1) < .03) return 1.12;
	return v > .4 && v < 2.2 ? v : .96;
}
function saltOf(a, b) {
	let h = 0;
	const s = `${a}:${b}`;
	for (let i = 0; i < s.length; i++) h = h * 33 + s.charCodeAt(i) >>> 0;
	return h;
}
function planFromStyle(style) {
	const s = style.toLowerCase();
	if (s.includes("владен") || s.includes("опорн")) return "tiki";
	if (s.includes("низк") || s.includes("своей")) return "bus";
	if (s.includes("высокий")) return "press";
	if (s.includes("контрат")) return "counter";
	if (s.includes("фланг")) return "wing";
	if (s.includes("вертикал")) return "direct";
	if (s.includes("пресс")) return "press";
	return "tiki";
}
function clamp(v, a, b) {
	return Math.max(a, Math.min(b, v));
}
function hypot(x, y) {
	return Math.hypot(x, y);
}
function dist(a, b) {
	return hypot(a.x - b.x, a.y - b.y);
}
var MatchSim = class MatchSim {
	players = [];
	ball = {
		x: 0,
		y: 0,
		z: 0,
		vx: 0,
		vy: 0,
		vz: 0,
		px: 0,
		py: 0,
		owner: null,
		lastUid: null,
		lastSide: null,
		kickAt: -10,
		assistUid: null,
		assistAt: -10,
		assistSide: null,
		fromThrow: false,
		offside: /* @__PURE__ */ new Set(),
		squash: 0
	};
	particles = [];
	homeColor;
	awayColor;
	controlledId = "";
	cam = {
		x: 0,
		y: 0,
		shake: 0
	};
	viewH = 62;
	phase = "play";
	home;
	away;
	half = 1;
	clock = 0;
	halfLen;
	halfBase;
	score = [0, 0];
	scorers = [];
	paused = false;
	keys = /* @__PURE__ */ new Set();
	axes = {
		x: 0,
		y: 0
	};
	sprintHeld = false;
	padSprint = false;
	aim = null;
	formation = "4-3-3";
	subsUsed = 0;
	banner = "Ваш игрок в кольце — ведите мяч вверх";
	bannerT = 3.4;
	goalPopup = null;
	popupT = 0;
	goalT = 0;
	dead = null;
	now = 0;
	diff;
	level = "novice";
	volume = .8;
	canvas = null;
	ctx = null;
	cssW = 0;
	cssH = 0;
	onHud = null;
	raf = 0;
	hudAcc = 0;
	ticks = 0;
	buf = {
		pass: 0,
		shoot: 0,
		tackle: 0,
		switch: 0,
		quick: 0
	};
	kickSide = 0;
	goalSeq = 0;
	userSide = 0;
	speedMul = 1;
	simming = false;
	offsideY = null;
	offsideT = 0;
	idle = 0;
	touch = {
		x: 0,
		y: 0
	};
	lockControl = false;
	referee = false;
	refCorrect = 0;
	refWrong = 0;
	incident = null;
	incidentAge = 0;
	weather = "clear";
	kit = "primary";
	official = {
		x: 0,
		y: 0
	};
	weatherT = 0;
	added = 0;
	addedApplied = false;
	possTime = [0, 0];
	shotN = [0, 0];
	foulN = [0, 0];
	passN = [0, 0];
	penN = [0, 0];
	offN = [0, 0];
	style = ["tactical", "tactical"];
	tactic = ["tiki", "tiki"];
	shapes = ["4-3-3", "4-4-2"];
	kitPicked = false;
	homeKit = null;
	awayKit = null;
	kickPower = .8;
	chargeKind = null;
	chargeT = 0;
	padPass = false;
	padShoot = false;
	manualSwitchAt = -10;
	relayUid = "";
	relayAt = -10;
	setPieceId = "";
	looseAge = 0;
	static active = /* @__PURE__ */ new Set();
	constructor(opts) {
		this.home = {
			...teamById(opts.homeId),
			roster: opts.homeRoster ?? teamById(opts.homeId).roster
		};
		this.away = {
			...teamById(opts.awayId),
			roster: opts.awayRoster ?? teamById(opts.awayId).roster
		};
		this.homeColor = this.home.home;
		this.awayColor = this.away.away;
		this.halfLen = Math.max(30, opts.halfMin * 60);
		this.halfBase = this.halfLen;
		this.diff = DIFF[opts.difficulty];
		this.level = opts.difficulty;
		this.formation = opts.formation ?? "4-3-3";
		this.speedMul = matchPace(opts.speed ?? 1);
		this.lockControl = Boolean(opts.lockControl);
		this.referee = Boolean(opts.referee);
		this.weather = opts.weather ?? "clear";
		this.kit = opts.kit ?? "primary";
		this.userSide = opts.userSide === 1 ? 1 : 0;
		const salt = opts.shapeSalt ?? saltOf(opts.homeId, opts.awayId);
		if (this.referee) {
			const homeShape = clubShape(opts.homeId, salt);
			let awayShape = clubShape(opts.awayId, salt + 1);
			if (awayShape === homeShape) awayShape = clubShape(opts.awayId, salt + 2);
			this.shapes = [homeShape, awayShape];
		} else {
			const foe = this.userSide === 0 ? 1 : 0;
			const foeId = foe === 0 ? opts.homeId : opts.awayId;
			this.shapes = [clubShape(opts.homeId, salt), clubShape(opts.awayId, salt + 1)];
			this.shapes[this.userSide] = this.formation in FORMATIONS ? this.formation : "4-3-3";
			if (this.shapes[foe] === this.shapes[this.userSide]) this.shapes[foe] = clubShape(foeId, salt + 2);
		}
		this.buildSquad(0, this.home, this.shapes[0], this.userSide === 0 ? opts.lockId : void 0);
		this.buildSquad(1, this.away, this.shapes[1], this.userSide === 1 ? opts.lockId : void 0);
		this.applyColors();
		this.style = [this.teamStyle(0), this.teamStyle(1)];
		this.tactic = [planFromStyle(clubInfo(this.home.id).style), planFromStyle(clubInfo(this.away.id).style)];
		this.startWalk();
		audio.setMatch(true);
		audio.whistle();
		MatchSim.active.add(this);
	}
	static haltAll() {
		for (const sim of [...MatchSim.active]) sim.stop();
	}
	buildSquad(side, team, formation, lockId) {
		team.roster.forEach((def, i) => {
			const p = this.make(side, def, i < 11, i < 11 ? i : -1);
			if (lockId && def.id === lockId) p.pinned = true;
			this.players.push(p);
		});
		this.applyFormation(side, formation, false);
	}
	make(side, def, on, slot) {
		return {
			uid: def.id ? `${side}:${def.id}` : `${side}-${def.num}-${def.name}`,
			side,
			name: def.name,
			role: def.pos,
			ovr: def.ovr,
			eff: def.ovr + Math.round(((def.form ?? 70) - 70) / 8),
			speed: def.speed,
			stamina: 100,
			maxStamina: def.stamina,
			num: def.num,
			on,
			slot,
			x: 0,
			y: 0,
			vx: 0,
			vy: 0,
			yaw: side === 0 ? 0 : Math.PI,
			cd: 0,
			think: Math.random() * .4,
			tx: 0,
			ty: 0,
			order: false,
			yellow: 0,
			red: false,
			fouls: 0,
			form: def.form ?? 70,
			fitness: def.fitness ?? 100,
			pinned: false,
			accuracy: playerAttrs(def).accuracy,
			hardness: playerAttrs(def).hardness
		};
	}
	start() {
		if (this.raf || typeof requestAnimationFrame === "undefined") return;
		this.bindKeys();
		let last = performance.now();
		let frameErr = "";
		const loop = (now) => {
			const dt = Math.min(.05, (now - last) / 1e3);
			last = now;
			try {
				this.step(dt);
				this.paint();
				frameErr = "";
			} catch (err) {
				this.banner = tr("Кадр сброшен — игра продолжается", "The frame was reset — play goes on");
				this.bannerT = 1.2;
				const msg = err instanceof Error ? err.message : String(err);
				if (msg !== frameErr) {
					frameErr = msg;
					console.error(err);
				}
			}
			this.raf = requestAnimationFrame(loop);
		};
		this.raf = requestAnimationFrame(loop);
	}
	stop() {
		if (this.raf) cancelAnimationFrame(this.raf);
		this.raf = 0;
		this.unbindKeys();
		audio.setMatch(false);
		MatchSim.active.delete(this);
	}
	onKeyDown = (e) => {
		if (e.repeat) return;
		this.keys.add(e.code);
		if ([
			"Space",
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"Tab",
			"KeyR"
		].includes(e.code)) e.preventDefault();
		if (e.code === "Escape") {
			e.preventDefault();
			this.togglePause();
			return;
		}
		if (this.paused) return;
		if (this.referee) {
			if (e.code === "KeyY") this.judge("yellow");
			if (e.code === "KeyR") this.judge("red");
			if (e.code === "KeyO") this.judge("offside");
			if (e.code === "KeyU") this.judge("notoffside");
			if (e.code === "KeyF" || e.code === "KeyG") this.judge("foul");
			if (e.code === "KeyN") this.judge("clear");
			return;
		}
		if (e.code === "Space" || e.code === "KeyJ") this.arm("pass");
		if (e.code === "KeyF" || e.code === "KeyK") this.arm("shoot");
		if (e.code === "KeyC") this.tap("tackle");
		if (e.code === "KeyQ" || e.code === "Tab") this.tap("switch");
		if (e.code === "KeyR") this.tap("quick");
	};
	onKeyUp = (e) => {
		this.keys.delete(e.code);
		if (e.code === "Space" || e.code === "KeyJ") this.release("pass");
		if (e.code === "KeyF" || e.code === "KeyK") this.release("shoot");
	};
	onBlur = () => {
		if (this.forcedKeys) return;
		this.keys.clear();
		this.sprintHeld = false;
	};
	bindKeys() {
		window.addEventListener("keydown", this.onKeyDown, true);
		window.addEventListener("keyup", this.onKeyUp, true);
		window.addEventListener("blur", this.onBlur);
	}
	unbindKeys() {
		window.removeEventListener("keydown", this.onKeyDown, true);
		window.removeEventListener("keyup", this.onKeyUp, true);
		window.removeEventListener("blur", this.onBlur);
	}
	bindCanvas(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.resize();
	}
	resize() {
		const c = this.canvas;
		if (!c) return;
		const dpr = Math.min(2, window.devicePixelRatio || 1);
		this.cssW = c.clientWidth;
		this.cssH = c.clientHeight;
		c.width = Math.max(1, Math.floor(this.cssW * dpr));
		c.height = Math.max(1, Math.floor(this.cssH * dpr));
		this.ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
		this.fitPitch();
	}
	/** Broadcast camera: close enough to read shirts, not the whole bowl. */
	fitPitch() {
		const portrait = this.cssH >= this.cssW;
		this.viewH = portrait ? 40 : 30;
	}
	get flipY() {
		return this.userSide === 1;
	}
	followCam(dt) {
		const p = this.referee ? null : this.ctrl();
		let tx = this.ball.x * .62 + (p ? p.x * .38 : this.ball.x * .38);
		let ty = this.ball.y * .62 + (p ? p.y * .38 : this.ball.y * .38);
		tx += clamp(this.ball.vx, -14, 14) * .18;
		ty += clamp(this.ball.vy, -14, 14) * .22;
		const visY = this.viewH * .42;
		const visX = visY * ((this.cssW || 1) / Math.max(1, this.cssH || 1));
		tx = clamp(tx, -34 + Math.min(12, visX * .45), 34 - Math.min(12, visX * .45));
		ty = clamp(ty, -HALF_L + visY * .7, HALF_L - visY * .7);
		const k = Math.min(1, Math.max(.04, dt) * 4.4);
		this.cam.x += (tx - this.cam.x) * k;
		this.cam.y += (ty - this.cam.y) * k;
	}
	tap(kind) {
		if (this.paused || this.phase === "halftime" || this.phase === "fulltime" || this.phase === "goal" || this.phase === "intro") return;
		this.buf[kind] = .18;
	}
	arm(kind) {
		if (this.paused || this.referee || this.phase !== "play") return;
		if (this.chargeKind === kind) return;
		this.chargeKind = kind;
		this.chargeT = 0;
	}
	release(kind) {
		if (this.chargeKind !== kind) return;
		this.kickPower = clamp(.48 + Math.min(this.chargeT, .75) / .75 * .52, .48, 1);
		this.chargeKind = null;
		this.chargeT = 0;
		this.tap(kind);
	}
	fire(kind, power) {
		this.chargeKind = null;
		this.chargeT = 0;
		this.kickPower = clamp(power, .35, 1);
		this.tap(kind);
	}
	holdSprint(v) {
		this.sprintHeld = v;
	}
	forcedKeys = null;
	setKeys(codes) {
		this.forcedKeys = codes.slice();
		this.keys.clear();
		for (const c of codes) this.keys.add(c);
	}
	togglePause() {
		if (this.phase === "fulltime" || this.phase === "goal") return;
		this.paused = !this.paused;
		this.emit(true);
	}
	continueHalf() {
		if (this.phase !== "halftime") return;
		this.half = 2;
		this.clock = 0;
		this.halfLen = this.halfBase;
		this.addedApplied = false;
		this.paused = false;
		for (const p of this.players) if (p.on) p.stamina = clamp(p.stamina + 22, 0, 100);
		this.kickoff(1);
		this.banner = tr("Второй тайм", "Second half");
		this.bannerT = 2;
		audio.whistle();
		this.emit(true);
	}
	/** Whistle exactly on the selected half. Added time does not stretch the match. */
	finishHalf() {
		this.added = 0;
		this.clock = this.halfLen;
		if (this.half === 1) {
			this.phase = "halftime";
			this.banner = tr("Перерыв", "Half-time");
			this.bannerT = 3;
		} else {
			this.phase = "fulltime";
			this.banner = tr("Финальный свисток", "Full time");
			this.bannerT = 4;
		}
		audio.whistle();
		this.emit(true);
	}
	/** Play the rest of the match with both sides under AI, then open the final summary. */
	simulateToEnd() {
		if (this.simming || this.phase === "intro" || this.phase === "fulltime") return;
		this.simming = true;
		this.paused = false;
		audio.suppressed = true;
		try {
			let guard = 0;
			const live = () => this.phase;
			while (live() !== "fulltime" && guard++ < 25e4) {
				if (this.phase === "halftime") this.continueHalf();
				if (this.referee && this.incident) this.settleIncident();
				this.step(1 / 60);
			}
		} finally {
			audio.suppressed = false;
			this.simming = false;
			this.paused = false;
			if (this.phase !== "fulltime") {
				this.phase = "fulltime";
				this.banner = tr("Финальный свисток", "Full time");
				this.bannerT = 4;
			}
			this.emit(true);
		}
	}
	debug() {
		const p = this.ctrl();
		return {
			phase: this.phase,
			paused: this.paused,
			keys: [...this.keys],
			forced: this.forcedKeys,
			id: this.controlledId,
			on: p?.on ?? false,
			vx: p?.vx ?? 0,
			vy: p?.vy ?? 0,
			x: p?.x ?? 0,
			y: p?.y ?? 0,
			clock: this.clock,
			dead: this.dead?.kind ?? "",
			owner: this.ball.owner
		};
	}
	getSpeed() {
		const p = this.ctrl();
		return p ? hypot(p.vx, p.vy) : 0;
	}
	getYaw() {
		return this.ctrl()?.yaw ?? 0;
	}
	ctrl() {
		return this.players.find((p) => p.uid === this.controlledId) ?? null;
	}
	sidePlayers(side, on = true) {
		return this.players.filter((p) => p.side === side && p.on === on && !p.red);
	}
	attack(side) {
		return side === 0 ? 1 : -1;
	}
	applyFormation(side, formation, teleport) {
		const id = formation in FORMATIONS ? formation : "4-3-3";
		this.shapes[side] = id;
		if (side === this.userSide) this.formation = id;
		const slots = FORMATIONS[id] ?? FORMATIONS["4-3-3"];
		const pool = this.sidePlayers(side).slice();
		const used = /* @__PURE__ */ new Set();
		slots.forEach((slot, index) => {
			let best = null;
			let bestScore = -999;
			for (const p of pool) {
				if (used.has(p.uid)) continue;
				const score = slotFit(p.role, slot.role) * 8 + (p.role === slot.role ? 6 : 0) + p.ovr / 50 + (p.pinned && p.role === slot.role ? 40 : 0);
				if (score > bestScore) {
					bestScore = score;
					best = p;
				}
			}
			if (!best) return;
			used.add(best.uid);
			best.slot = index;
			best.eff = best.ovr + slotFit(best.role, slot.role);
			if (teleport) {
				const pos = this.homeOf(best);
				best.x = pos.x;
				best.y = pos.y;
				best.vx = 0;
				best.vy = 0;
			}
		});
		if (teleport && this.ball.owner) {
			if (this.players.find((q) => q.uid === this.ball.owner)?.side === side) this.stick();
		}
		this.emit(true);
	}
	homeOf(p) {
		const slots = FORMATIONS[this.shapes[p.side]] ?? FORMATIONS["4-3-3"];
		const slot = slots[p.slot] ?? slots[0];
		const atk = this.attack(p.side);
		return {
			x: atk * slot.x * 26,
			y: atk * slot.y * 42
		};
	}
	lineRole(p) {
		return (FORMATIONS[this.shapes[p.side]] ?? FORMATIONS["4-3-3"])[p.slot]?.role ?? p.role;
	}
	placeTeam(side) {
		for (const p of this.sidePlayers(side)) {
			const pos = this.homeOf(p);
			p.x = pos.x;
			p.y = pos.y;
			p.vx = 0;
			p.vy = 0;
			p.order = false;
		}
	}
	teamStyle(side) {
		const style = clubInfo((side === 0 ? this.home : this.away).id).style.toLowerCase();
		if (style.includes("пресс") || style.includes("контрат")) return "rough";
		const xi = this.players.filter((p) => p.side === side && p.on);
		if (!xi.length) return "tactical";
		return xi.reduce((s, p) => s + p.hardness, 0) / xi.length >= xi.reduce((s, p) => s + p.accuracy, 0) / xi.length + 6 ? "rough" : "tactical";
	}
	applyColors() {
		this.homeColor = (this.homeKit ?? "primary") === "inverse" ? this.home.away : this.home.home;
		if (this.awayKit === "primary") this.awayColor = this.away.home;
		else this.awayColor = this.away.away;
	}
	setKit(kit) {
		this.setSideKit(this.userSide, kit);
	}
	setSideKit(side, kit) {
		if (this.phase !== "intro") return;
		if (side === 0) this.homeKit = kit;
		else this.awayKit = kit;
		this.kit = kit;
		this.kitPicked = this.homeKit !== null && this.awayKit !== null;
		this.applyColors();
		const who = side === this.userSide ? "Ваша форма" : "Форма соперника";
		this.banner = `${who}: ${kit === "primary" ? tr("цвет клуба", "club colours") : tr("инверсия", "inverse")}`;
		this.bannerT = 2.4;
		this.emit(true);
	}
	setWeather(weather) {
		if (this.phase !== "intro") return;
		this.weather = weather;
		this.emit(true);
	}
	beginPlay() {
		if (this.phase !== "intro") return;
		if (this.homeKit === null || this.awayKit === null) {
			this.banner = tr("Выберите форму себе и сопернику — матч ещё не начался", "Pick your kit and the opponent's — the match has not started");
			this.bannerT = 2.6;
			this.emit(true);
			return;
		}
		this.kickoff(0);
		this.banner = tr("Развод с центра. Мяч у хозяев", "Kick-off. The home side has the ball");
		this.bannerT = 2.2;
		this.emit(true);
	}
	startWalk() {
		this.phase = "intro";
		this.dead = null;
		this.placeTeam(0);
		this.placeTeam(1);
		for (const p of this.players) {
			if (!p.on) continue;
			p.y = -this.attack(p.side) * (HALF_L - 6);
			p.vx = 0;
			p.vy = 0;
		}
		this.ball.owner = null;
		this.ball.x = 0;
		this.ball.y = 0;
		this.ball.vx = 0;
		this.ball.vy = 0;
		this.official = {
			x: 0,
			y: -8
		};
		const first = this.sidePlayers(this.userSide).find((p) => p.pinned && p.role !== "GK") ?? this.sidePlayers(this.userSide).find((p) => p.role !== "GK" && p.on);
		this.controlledId = this.referee ? "" : first?.uid ?? "";
		this.banner = tr("Выберите свою форму и форму соперника. Пока обе не выбраны, матч не начнётся", "Pick your kit and the opponent's. The match will not start until both are chosen");
		this.bannerT = 6;
	}
	walk(dt) {
		for (const p of this.players) {
			if (!p.on || p.red) continue;
			const home = this.homeOf(p);
			p.x += (home.x - p.x) * Math.min(1, dt * .8);
			p.y += (home.y - p.y) * Math.min(1, dt * .8);
			p.yaw = this.attack(p.side) > 0 ? 0 : Math.PI;
		}
		this.official.y += (0 - this.official.y) * Math.min(1, dt * .6);
	}
	kickoff(side) {
		let taker = this.sidePlayers(side).filter((p) => p.role === "CM" || p.role === "ST" || p.role === "CAM" || p.role === "LW" || p.role === "RW").sort((a, b) => b.eff - a.eff)[0] ?? this.sidePlayers(side).find((p) => p.role !== "GK") ?? this.sidePlayers(side)[0];
		if (!taker) return;
		this.phase = "play";
		this.dead = null;
		this.kickSide = side;
		this.placeTeam(0);
		this.placeTeam(1);
		const pinned = this.sidePlayers(this.userSide).find((p) => p.pinned && p.role !== "GK");
		if (pinned && side === this.userSide) taker = pinned;
		const atk = this.attack(side);
		taker.x = 0;
		taker.y = -atk * .85;
		taker.yaw = atk > 0 ? 0 : Math.PI;
		this.ball.owner = taker.uid;
		this.ball.x = 0;
		this.ball.y = 0;
		this.ball.z = 0;
		this.ball.vx = 0;
		this.ball.vy = 0;
		this.ball.vz = 0;
		this.ball.lastUid = taker.uid;
		this.ball.lastSide = side;
		this.ball.kickAt = this.now;
		this.ball.fromThrow = false;
		this.ball.offside.clear();
		const cover = side === this.userSide ? taker : this.nearestOutfield(this.userSide, 0, 0) ?? taker;
		this.controlledId = pinned?.uid ?? cover.uid;
		if (this.lockControl && pinned) this.controlledId = pinned.uid;
		if (this.referee) this.controlledId = "";
		if (this.ctrl()?.role === "GK") {
			const out = this.nearestOutfield(this.userSide, 0, 0);
			if (out && out.role !== "GK") this.controlledId = out.uid;
		}
		this.stick();
	}
	nearestMate(side, x, y) {
		return this.sidePlayers(side).slice().sort((a, b) => hypot(a.x - x, a.y - y) - hypot(b.x - x, b.y - y))[0] ?? null;
	}
	nearestOutfield(side, x, y) {
		return this.sidePlayers(side).filter((p) => p.on && !p.red && p.role !== "GK").sort((a, b) => hypot(a.x - x, a.y - y) - hypot(b.x - x, b.y - y))[0] ?? this.nearestMate(side, x, y) ?? null;
	}
	substitute(outUid, inUid) {
		const out = this.players.find((p) => p.uid === outUid);
		const inn = this.players.find((p) => p.uid === inUid);
		if (!out || !inn || out.side !== this.userSide || inn.side !== this.userSide) return tr("Нельзя", "Not allowed");
		if (!this.teamHasBall(this.userSide)) return tr("Замена только когда мяч у вашей команды", "Subs only while your team has the ball");
		if (!out.on || inn.on) return tr("Нельзя", "Not allowed");
		if (this.subsUsed >= 5) return tr("Лимит замен", "Substitution limit");
		if (out.role === "GK" || inn.role === "GK") {
			if (out.role !== "GK" || inn.role !== "GK") return tr("Вратарь только на вратаря", "A goalkeeper only replaces a goalkeeper");
		} else if (!this.roleOk(out.role, inn.role)) return tr("Позиция не совпадает", "Position does not fit");
		inn.on = true;
		inn.slot = out.slot;
		inn.x = out.x;
		inn.y = out.y;
		inn.vx = 0;
		inn.vy = 0;
		inn.stamina = Math.min(100, inn.maxStamina);
		out.on = false;
		out.slot = -1;
		out.vx = 0;
		out.vy = 0;
		this.subsUsed++;
		if (this.controlledId === out.uid) this.controlledId = inn.uid;
		this.applyFormation(this.userSide, this.formation, false);
		this.banner = tr(`${inn.name} вместо ${out.name}`, `${inn.name} on for ${out.name}`);
		this.bannerT = 2.4;
		this.emit(true);
		return null;
	}
	roleOk(outRole, inRole) {
		if (outRole === "GK" || inRole === "GK") return outRole === inRole;
		const rank = (r) => r === "ST" || r === "LW" || r === "RW" ? 3 : r === "CAM" ? 2 : r === "CB" || r === "LB" || r === "RB" ? 0 : 1;
		return Math.abs(rank(outRole) - rank(inRole)) <= 2;
	}
	recommend() {
		const tired = this.sidePlayers(this.userSide).filter((p) => p.role !== "GK" && p.stamina < 42).sort((a, b) => a.stamina - b.stamina);
		const bench = this.players.filter((p) => p.side === this.userSide && !p.on && !p.red).sort((a, b) => b.stamina - a.stamina);
		for (const out of tired) for (const inn of bench) if (this.roleOk(out.role, inn.role) && this.subsUsed < 5) return {
			outName: out.name,
			inName: inn.name,
			outUid: out.uid,
			inUid: inn.uid
		};
		return null;
	}
	step(realDt) {
		const dt = clamp(realDt, 0, .05);
		this.now += dt;
		this.ticks++;
		if (this.forcedKeys) {
			this.keys.clear();
			for (const c of this.forcedKeys) this.keys.add(c);
		}
		this.pollPad();
		Object.keys(this.buf).forEach((k) => {
			this.buf[k] = Math.max(0, this.buf[k] - dt);
		});
		if (this.popupT > 0 && !this.paused) this.popupT -= dt;
		if (this.bannerT > 0) this.bannerT -= dt;
		if (this.offsideT > 0) {
			this.offsideT -= dt;
			if (this.offsideT <= 0) this.offsideY = null;
		}
		this.ball.squash = Math.max(0, this.ball.squash - dt * 3);
		if (this.cam.shake > 0) this.cam.shake = Math.max(0, this.cam.shake - dt * 2.4);
		try {
			if (!this.simming) audio.update(dt, this.volume, this.paused, Math.min(1, Math.abs(this.ball.y) / HALF_L));
		} catch {}
		if (this.paused) {
			this.emit(false);
			return;
		}
		if (this.chargeKind && this.phase === "play") this.chargeT = Math.min(.75, this.chargeT + dt);
		this.weatherT += dt;
		if (!this.simming) this.followCam(dt);
		if (this.phase === "intro") {
			this.walk(dt);
			this.emit(false);
			return;
		}
		if (this.phase === "halftime" || this.phase === "fulltime") {
			this.emit(false);
			return;
		}
		if (this.phase === "play" || this.phase === "goal") {
			this.clock += dt;
			if (this.phase === "play" && this.ball.lastSide != null) this.possTime[this.ball.lastSide] += dt;
			if (this.clock >= this.halfLen) {
				this.finishHalf();
				return;
			}
		}
		if (this.phase === "goal") {
			this.goalT -= dt;
			this.burstStep(dt);
			if (this.goalT <= 0) this.kickoff(this.kickSide);
			this.emit(false);
			return;
		}
		if (this.referee && this.incident) {
			this.incidentAge += dt;
			if (this.incidentAge > 1.25) {
				this.incidentAge = 0;
				this.settleIncident();
			}
			this.emit(false);
			return;
		}
		this.incidentAge = 0;
		this.updateHumans(dt);
		this.updateAI(dt);
		this.keeperTake();
		this.integrate(dt);
		this.keepGoalersInBox();
		this.separate(dt);
		this.ballPhysics(dt);
		this.deflect();
		this.carryGoal();
		this.lines();
		const ox = clamp(this.ball.x * .65 + 8, -30, 30);
		const oy = clamp(this.ball.y * .35, -HALF_L + 8, HALF_L - 8);
		this.official.x += (ox - this.official.x) * .08;
		this.official.y += (oy - this.official.y) * .08;
		this.recover(dt);
		this.emit(false);
	}
	padBits = new Array(16).fill(false);
	pollPad() {
		const pads = typeof navigator !== "undefined" ? navigator.getGamepads?.() : null;
		if (!pads) return;
		const pad = [...pads].find((g) => g && g.connected);
		if (!pad) return;
		const dz = .18;
		let x = pad.axes[0] ?? 0;
		let y = -(pad.axes[1] ?? 0);
		const m = Math.hypot(x, y);
		if (m < dz) {
			x = 0;
			y = 0;
		} else {
			const s = (m - dz) / .8200000000000001 / m;
			x *= s;
			y *= s;
		}
		if (Math.hypot(this.touch.x, this.touch.y) < .2) {
			this.axes.x = x;
			this.axes.y = y;
		}
		const down = (i) => (pad.buttons[i]?.pressed ?? false) || (pad.buttons[i]?.value ?? 0) > .55;
		const edge = (i) => {
			const now = down(i);
			const was = this.padBits[i] ?? false;
			this.padBits[i] = now;
			return now && !was;
		};
		if (edge(9)) this.togglePause();
		if (this.referee) {
			if (edge(0)) this.judge("yellow");
			if (edge(1)) this.judge("foul");
			if (edge(2)) this.judge("offside");
			if (edge(3)) this.judge("red");
			if (edge(5)) this.judge("clear");
			if (edge(6)) this.judge("notoffside");
			return;
		}
		const passNow = down(0);
		const shootNow = down(1);
		if (passNow && !this.padPass) this.arm("pass");
		if (!passNow && this.padPass) this.release("pass");
		if (shootNow && !this.padShoot) this.arm("shoot");
		if (!shootNow && this.padShoot) this.release("shoot");
		this.padPass = passNow;
		this.padShoot = shootNow;
		if (edge(2)) this.tap("tackle");
		if (edge(3) || edge(4)) this.tap("switch");
		if (edge(13)) this.tap("quick");
		this.padSprint = (pad.buttons[7]?.value ?? 0) > .45 || down(5);
	}
	moveAxes() {
		let mx = (this.keys.has("KeyD") || this.keys.has("ArrowRight") ? 1 : 0) - (this.keys.has("KeyA") || this.keys.has("ArrowLeft") ? 1 : 0);
		let my = (this.keys.has("KeyW") || this.keys.has("ArrowUp") ? 1 : 0) - (this.keys.has("KeyS") || this.keys.has("ArrowDown") ? 1 : 0);
		if (mx === 0 && my === 0) {
			const stick = Math.hypot(this.touch.x, this.touch.y) > .12 ? this.touch : this.axes;
			mx = stick.x;
			my = stick.y;
		}
		const mag = Math.hypot(mx, my);
		if (mag > 1) {
			mx /= mag;
			my /= mag;
		}
		if (this.userSide === 1) my = -my;
		return {
			mx,
			my,
			mag: Math.min(1, mag)
		};
	}
	updateHumans(dt) {
		if (this.referee || this.simming) return;
		if (this.lockControl) {
			const pinned = this.players.find((q) => q.pinned && q.role !== "GK");
			if (!pinned) {
				const out = this.nearestOutfield(this.userSide, this.ball.x, this.ball.y);
				if (this.ctrl()?.role === "GK" && out) this.controlledId = out.uid;
			} else {
				this.controlledId = pinned.uid;
				if (!pinned.on || pinned.red) return;
			}
		}
		const p = this.ctrl();
		if (!p || !p.on || p.red || p.role === "GK") {
			if (this.lockControl && this.players.some((q) => q.pinned && q.role !== "GK")) return;
			const mate = this.nearestOutfield(this.userSide, this.ball.x, this.ball.y);
			if (mate) this.controlledId = mate.uid;
			return;
		}
		const ownerNow = this.players.find((q) => q.uid === this.ball.owner) ?? null;
		this.autoDefend(ownerNow);
		const liveP = this.ctrl();
		if (!liveP || !liveP.on || liveP.red || liveP.role === "GK") return;
		const { mx, my, mag } = this.moveAxes();
		const live = this.live(liveP);
		const sprint = (this.sprintHeld || this.padSprint || this.keys.has("ShiftLeft") || this.keys.has("ShiftRight")) && liveP.stamina > 8 && mag > .15;
		const fit = .78 + .22 * (liveP.fitness / 100);
		const tempo = this.speedMul < .9 ? .82 : this.speedMul < 1.05 ? .92 : this.speedMul > 1.3 ? 1.46 : 1.18;
		const max = (4.5 + live.speed / 100 * 5.1) * tempo * (sprint ? 1.28 : 1) * (.62 + .38 * (liveP.stamina / 100)) * (this.ball.owner === liveP.uid ? .92 : 1) * fit;
		const tvx = mx * max;
		const tvy = my * max;
		const k = Math.min(1, dt * 12);
		liveP.vx += (tvx - liveP.vx) * k;
		liveP.vy += (tvy - liveP.vy) * k;
		if (mag > .18) {
			const target = Math.atan2(-mx, my);
			const d = Math.atan2(Math.sin(target - liveP.yaw), Math.cos(target - liveP.yaw));
			liveP.yaw += d * Math.min(1, dt * 14);
		}
		if (mag > .12) this.idle = 0;
		else this.idle += dt;
		if (this.idle > 2.2 && this.bannerT <= 0) {
			this.banner = tr("WASD или джойстик слева — кольцо на вашем игроке", "WASD or the stick on the left — the ring is on your player");
			this.bannerT = 2.4;
			this.idle = 0;
		}
		if (sprint) liveP.stamina = Math.max(0, liveP.stamina - 15 * dt);
		if (this.buf.switch > 0) {
			this.buf.switch = 0;
			this.switchPlayer();
		}
		if (this.buf.quick > 0 && this.dead) {
			this.buf.quick = 0;
			if (!this.teamHasBall(this.userSide)) {
				this.banner = tr("Замена только со своим мячом", "Subs only while you have the ball");
				this.bannerT = 1.3;
			} else {
				const rec = this.recommend();
				if (rec) this.substitute(rec.outUid, rec.inUid);
			}
		}
		const actor = this.ctrl() ?? liveP;
		if (this.buf.pass > 0 && this.ball.owner === actor.uid) {
			this.buf.pass = 0;
			this.pass(actor);
		}
		if (this.buf.shoot > 0 && this.ball.owner === actor.uid) {
			this.buf.shoot = 0;
			this.shoot(actor);
		}
		if (this.buf.tackle > 0) {
			this.buf.tackle = 0;
			this.userTackle(actor);
		}
		if (this.dead && actor.uid === this.setPieceId && dist(actor, this.dead) < 1.75) this.ball.owner = actor.uid;
		const owner = this.players.find((q) => q.uid === this.ball.owner);
		if (this.now - this.manualSwitchAt > .45 && owner && owner.side === this.userSide && owner.on && !owner.red && owner.uid !== actor.uid && (owner.pinned || !this.lockControl && owner.role !== "GK" && this.now - this.ball.kickAt > .16)) this.controlledId = owner.uid;
	}
	/** While defending, stay on the chosen nearest player unless someone else is clearly closer. */
	autoDefend(owner) {
		if (this.lockControl || this.referee || this.simming) return;
		if (owner?.side === this.userSide || this.teamHasBall(this.userSide)) return;
		if (this.now - this.manualSwitchAt < 2.6) return;
		const nearest = this.nearestOutfield(this.userSide, this.ball.x, this.ball.y);
		if (!nearest) return;
		const current = this.ctrl();
		if (!current || !current.on || current.red || current.role === "GK" || current.side !== this.userSide) {
			this.controlledId = nearest.uid;
			return;
		}
		if (nearest.uid === current.uid) return;
		if (dist(nearest, this.ball) + 2.4 < dist(current, this.ball)) this.controlledId = nearest.uid;
	}
	/** Switch is for defending: available only after your side loses the ball. */
	switchPlayer() {
		if (this.lockControl || this.referee) return;
		if (this.teamHasBall(this.userSide)) {
			this.banner = tr("Смена игрока только без мяча", "Switch player only after you lose the ball");
			this.bannerT = 1.2;
			return;
		}
		this.manualSwitchAt = this.now;
		const mates = this.sidePlayers(this.userSide).filter((m) => m.on && !m.red && m.role !== "GK").slice().sort((a, b) => dist(a, this.ball) - dist(b, this.ball));
		if (!mates.length) return;
		const next = mates[(Math.max(0, mates.findIndex((m) => m.uid === this.controlledId)) + 1) % mates.length];
		if (next) this.controlledId = next.uid;
	}
	teamHasBall(side) {
		const owner = this.players.find((q) => q.uid === this.ball.owner);
		if (owner) return owner.side === side;
		if (this.dead) return this.dead.side === side;
		return false;
	}
	forward(p) {
		return {
			x: -Math.sin(p.yaw),
			y: Math.cos(p.yaw)
		};
	}
	live(p) {
		const form = .84 + p.form / 100 * .28;
		const fit = .82 + p.fitness / 100 * .18;
		return {
			speed: p.speed * form * fit,
			accuracy: clamp(p.accuracy * form, 42, 97),
			hardness: clamp(p.hardness * (.9 + p.fitness / 500), 40, 97)
		};
	}
	pass(p) {
		const aim = this.aim && dist(p, this.aim) > 3 ? this.aim : null;
		const facing = this.forward(p);
		const live = this.live(p);
		const powerMul = p.uid === this.controlledId ? this.kickPower : .78;
		const maxD = 18 + powerMul * 30;
		let best = null;
		let bestScore = aim ? 8 : .2;
		for (const m of this.sidePlayers(p.side)) {
			if (m.uid === p.uid) continue;
			const d = dist(p, m);
			if (d < 3.5 || d > maxD) continue;
			if (aim) {
				const ad = dist(m, aim);
				if (ad < bestScore) {
					bestScore = ad;
					best = m;
				}
			} else {
				const dx = m.x - p.x;
				const dy = m.y - p.y;
				const dot = (dx * facing.x + dy * facing.y) / d;
				if (dot < .12) continue;
				const score = dot * 1.6 + this.attack(p.side) * dy * .03 + (d > 7 && d < 24 ? .4 : 0);
				if (score > bestScore) {
					bestScore = score;
					best = m;
				}
			}
		}
		const err = (1 - live.accuracy / 100) * (.55 + (1 - powerMul) * .45) * this.passErr(p);
		const jitter = () => (Math.random() - .5) * err;
		if (best) {
			const flight = .26 + (1 - powerMul) * .2;
			const tx = best.x + best.vx * flight;
			const ty = best.y + best.vy * flight;
			const gap = hypot(tx - p.x, ty - p.y);
			const pace = this.passPace(gap, powerMul);
			this.kick(p, tx - p.x + jitter() * 4, ty - p.y + jitter() * 4, pace, .12 + powerMul * .22, false);
			this.banner = tr(`Пас: ${best.name}`, `Pass: ${best.name}`);
			this.bannerT = 1.3;
		} else {
			const dirx = aim ? aim.x - p.x : facing.x;
			const diry = aim ? aim.y - p.y : facing.y;
			this.kick(p, dirx + jitter() * 3, diry + jitter() * 3, this.passPace(14 + powerMul * 10, powerMul), .1 + powerMul * .16, false);
		}
		this.aim = null;
	}
	passPace(gap, powerMul) {
		return clamp((12 + gap * .92) * (.78 + powerMul * .48), 15, 48);
	}
	shoot(p) {
		this.shotN[p.side] += 1;
		const atk = this.attack(p.side);
		const live = this.live(p);
		const user = p.uid === this.controlledId && !this.simming;
		const facing = this.forward(p);
		const ownGoalY = -atk * HALF_L;
		const faceOwn = facing.y * atk < -.22;
		const aimOwn = Boolean(this.aim && Math.abs(this.aim.y - ownGoalY) + 4 < Math.abs(this.aim.y - atk * 52.5));
		const ownNet = user && (faceOwn || aimOwn);
		const gy = (ownNet ? -atk : atk) * HALF_L;
		const rival = this.referee || p.side !== this.userSide;
		const powerMul = user ? this.kickPower : rival ? .58 + this.diff.acc * .42 : .72;
		const aimX = this.aim ? clamp(this.aim.x, -3.3, 3.3) : clamp(-Math.sin(p.yaw) * 2.2, -3.1, 3.1);
		let acc = clamp(live.accuracy / 100 - Math.max(0, powerMul - .82) * .22, .34, .97);
		if (!user && rival) acc = clamp(.34 + this.diff.acc * .58 + acc * .16, .38, this.diff.acc >= .9 ? .96 : .9);
		else if (!user) acc = clamp(.42 + acc * .4, .4, .88);
		const punish = !user && !this.referee && p.side !== this.userSide && this.level !== "novice" && !ownNet;
		if (punish) acc = clamp(Math.max(acc, .84), .84, .93);
		const dx = aimX - p.x;
		const dy = gy - p.y;
		const ang = Math.atan2(dx, dy) + (Math.random() - .5) * (1 - acc) * (ownNet ? .28 : .85);
		const power = clamp((16 + live.hardness / 100 * 12) * (.58 + powerMul * .55), 12, 34);
		const zLift = dist(p, {
			x: 0,
			y: gy
		});
		const reach = clamp(14 + zLift * .72, 16, 46);
		let paced = ownNet ? reach : !user && zLift > 18 ? clamp(Math.max(power, 12 + zLift * .9), 12, 38) : power;
		let z = ownNet ? .28 + Math.min(.35, zLift * .004) : zLift > 22 ? 2.2 + powerMul * 2.4 : .7 + powerMul * .8;
		if (!ownNet && !user && zLift > 12 && zLift < 36 && !punish) z = clamp(5.2 + (zLift - 16) * .06, 4.8, 6.6);
		if (punish) {
			const tempo = this.ballTempo();
			const scale = .85 + tempo * .15;
			paced = clamp(Math.max(paced, 15 + zLift * 1.12), 18, 42);
			const pace = Math.max(16, paced * tempo);
			const drag = this.weather === "clear" ? .8 : 1.25;
			let flight = Math.max(.32, zLift / pace);
			for (let i = 0; i < 4; i++) {
				const cover = pace * (1 - Math.exp(-drag * flight)) / drag;
				flight = Math.max(.28, flight * (zLift / Math.max(4, cover)));
			}
			z = clamp((1.3 + 6.5 * flight * flight) / flight / scale, 2.6, 9);
		}
		this.kick(p, Math.sin(ang), Math.cos(ang), paced, z, true);
		this.banner = ownNet ? tr(`Удар в свои! ${p.name}`, `At his own net! ${p.name}`) : tr(`Удар! ${p.name}`, `Shot! ${p.name}`);
		this.bannerT = 1.4;
		this.aim = null;
	}
	kick(p, dx, dy, power, z, shot) {
		const len = hypot(dx, dy) || 1;
		const thrown = this.dead?.kind === "throw";
		this.ball.owner = null;
		this.ball.lastUid = p.uid;
		this.ball.lastSide = p.side;
		this.ball.kickAt = this.now;
		this.ball.fromThrow = thrown;
		if (!shot && !thrown) {
			this.ball.assistUid = p.uid;
			this.ball.assistAt = this.now;
			this.ball.assistSide = p.side;
			this.markOffside(p);
		} else this.ball.offside.clear();
		this.ball.vx = dx / len * power * this.ballTempo();
		this.ball.vy = dy / len * power * this.ballTempo();
		this.ball.vz = z * (.85 + this.ballTempo() * .15);
		this.ball.z = .2;
		this.dead = null;
		if (!shot) {
			this.passN[p.side] += 1;
			this.relayUid = p.uid;
			this.relayAt = this.now;
		}
		audio.kick();
	}
	markOffside(passer) {
		this.ball.offside.clear();
		const atk = this.attack(passer.side);
		const defs = this.sidePlayers(1 - passer.side).slice().sort((a, b) => atk * b.y - atk * a.y);
		const line = defs[1]?.y ?? defs[0]?.y ?? atk * 52.5;
		for (const m of this.sidePlayers(passer.side)) {
			if (m.uid === passer.uid || m.role === "GK") continue;
			const aheadBall = atk * m.y > atk * this.ball.y + .4;
			const aheadLine = atk * m.y > atk * line;
			const inHalf = atk * m.y > 0;
			if (aheadBall && aheadLine && inHalf) this.ball.offside.add(m.uid);
		}
		if (this.ball.offside.size) {
			this.offsideY = line;
			this.offsideT = 1.4;
		}
	}
	userTackle(p) {
		const foe = this.players.find((q) => q.side !== p.side && q.on && this.ball.owner === q.uid);
		if (!foe || foe.role === "GK" || dist(p, foe) > 2.15) return;
		p.cd = .62;
		const behind = this.fromBehind(p, foe);
		const sprint = this.sprintHeld || this.padSprint || this.keys.has("ShiftLeft") || this.keys.has("ShiftRight");
		const mine = this.live(p);
		const theirs = this.live(foe);
		const gotBall = dist(p, this.ball) < 1.28;
		if (gotBall && !behind && Math.random() < this.userTackleChance(mine.hardness, theirs.hardness)) {
			this.popBall(foe, p);
			this.banner = tr(`Отбор: ${p.name}`, `Tackle: ${p.name}`);
			this.bannerT = 1.2;
			return;
		}
		if (dist(p, foe) > 1.85 && !gotBall) return;
		this.foul(p, foe, this.booking(p, foe, behind, sprint));
	}
	fromBehind(by, victim) {
		const face = this.forward(victim);
		const dx = by.x - victim.x;
		const dy = by.y - victim.y;
		const d = hypot(dx, dy) || 1;
		return dx / d * face.x + dy / d * face.y < -.2;
	}
	/** Last defender fouling a player through on goal is a red, not an injury. */
	lastMan(by, victim) {
		if (by.side === victim.side || by.role === "GK") return false;
		if (this.attack(victim.side) * victim.y < 8) return false;
		const goalY = -this.attack(by.side) * HALF_L;
		const depth = Math.abs(by.y - goalY);
		for (const q of this.sidePlayers(by.side)) {
			if (q.uid === by.uid || q.role === "GK" || !q.on || q.red) continue;
			if (Math.abs(q.y - goalY) < depth - .8) return false;
		}
		return dist(by, victim) < 3.4;
	}
	booking(by, victim, behind, sprint) {
		if (this.lastMan(by, victim)) return "red";
		if (behind && by.hardness >= 84) return "red";
		if (behind) return "yellow";
		if (sprint && (by.hardness >= 68 || Math.random() < .62)) return "yellow";
		if (by.fouls >= 1 && Math.random() < .48) return "yellow";
		if (by.hardness >= 74 && Math.random() < .36) return "yellow";
		if (Math.random() < (this.referee ? .28 : .16)) return "yellow";
		return "none";
	}
	popBall(from, to) {
		if (from.role === "GK") return;
		this.ball.kickAt = this.now;
		this.ball.offside.clear();
		this.ball.fromThrow = false;
		if (to && to.on && !to.red && to.role !== "GK") {
			this.ball.owner = to.uid;
			this.ball.lastUid = to.uid;
			this.ball.lastSide = to.side;
			this.ball.vx = 0;
			this.ball.vy = 0;
			this.ball.vz = 0;
			this.stick();
			return;
		}
		this.ball.owner = null;
		this.ball.vx = (Math.random() - .5) * 8;
		this.ball.vy = (Math.random() - .5) * 8;
		this.ball.vz = 1.2;
		this.ball.lastUid = from.uid;
		this.ball.lastSide = from.side;
	}
	judge(kind) {
		if (!this.referee || this.paused || this.phase !== "play") return;
		const inc = this.incident;
		if (!inc) {
			if (kind === "notoffside") this.banner = tr("Офсайда нет", "No offside");
			else if (kind === "clear") this.banner = tr("Игра продолжается", "Play on");
			else {
				this.refWrong++;
				this.banner = tr("Лишний свисток", "Nothing to call");
				audio.whistle();
			}
			this.bannerT = 1.4;
			this.emit(true);
			return;
		}
		const actor = inc.actor;
		const victim = inc.victimPlayer;
		const drop = () => {
			this.incident = null;
		};
		if (inc.kind === "offside") {
			if (kind === "offside" && actor) {
				this.refCorrect++;
				drop();
				this.applyOffside(actor);
				return;
			}
			if (kind === "notoffside") {
				this.refWrong++;
				this.banner = tr("Офсайд пропущен", "Offside missed");
			} else {
				this.refWrong++;
				this.banner = tr("Это был офсайд", "That was offside");
			}
			this.bannerT = 1.5;
			if (actor) {
				this.ball.offside.delete(actor.uid);
				this.ball.owner = actor.uid;
				this.ball.lastUid = actor.uid;
				this.ball.lastSide = actor.side;
			}
			drop();
			this.emit(true);
			return;
		}
		if (!actor || !victim) {
			drop();
			return;
		}
		const expect = inc.expect;
		const booked = actor.yellow > 0;
		const laws = (card) => {
			drop();
			this.applyFoul(actor, victim, card, inc.inBox ? "penalty" : "freekick");
		};
		if (kind === "offside") {
			this.refWrong++;
			this.banner = tr("Это был фол, не офсайд", "That was a foul, not offside");
			this.bannerT = 1.5;
			laws("none");
			return;
		}
		if (kind === "notoffside") {
			this.refCorrect++;
			this.banner = inc.inBox ? tr("Не офсайд. Пенальти", "Not offside. Penalty") : tr("Не офсайд. Штрафной", "Not offside. Free kick");
			laws("none");
			this.banner = inc.inBox ? tr("Не офсайд. Пенальти", "Not offside. Penalty") : tr("Не офсайд. Штрафной", "Not offside. Free kick");
			this.bannerT = 1.6;
			this.emit(true);
			return;
		}
		if (kind === "foul") {
			const plain = expect === "none";
			if (plain) this.refCorrect++;
			else this.refWrong++;
			laws("none");
			this.banner = plain ? inc.inBox ? tr("Фол. Пенальти", "Foul. Penalty") : tr(`Фол. ${actor.name}`, `Foul. ${actor.name}`) : tr("Фол есть, карточка мимо", "Foul given, the card was missed");
			this.bannerT = 1.6;
			this.emit(true);
			return;
		}
		if (kind === "clear") {
			this.refWrong++;
			this.banner = tr("Фол пропущен", "Foul missed");
			this.bannerT = 1.5;
			drop();
			this.emit(true);
			return;
		}
		const card = kind === "red" ? "red" : "yellow";
		const rightYellow = kind === "yellow" && expect === "yellow";
		const rightRed = kind === "red" && expect === "red";
		if (rightYellow || rightRed) this.refCorrect++;
		else this.refWrong++;
		laws(card);
		const sent = booked && kind === "yellow";
		this.banner = rightYellow || rightRed ? sent ? tr("Вторая жёлтая", "Second yellow") : tr("Карточка верная", "Correct card") : tr("Карточка не по эпизоду", "Card did not fit the incident");
		this.bannerT = 1.6;
		this.emit(true);
	}
	/** Free kick or penalty follows the spot. The referee does not pick the restart. */
	settleIncident() {
		const inc = this.incident;
		if (!inc) return;
		this.incident = null;
		if (inc.kind === "offside" && inc.actor) {
			this.applyOffside(inc.actor);
			return;
		}
		if (inc.actor && inc.victimPlayer) {
			this.applyFoul(inc.actor, inc.victimPlayer, "none", inc.inBox ? "penalty" : "freekick");
			this.banner = inc.inBox ? tr("Пенальти", "Penalty") : tr("Штрафной", "Free kick");
			this.bannerT = 1.4;
			this.emit(true);
		}
	}
	foul(by, victim, card = "none") {
		const atk = this.attack(victim.side);
		const inBox = Math.abs(by.x) < 20 && atk * by.y > atk * 36 && atk * by.y < atk * 52.5;
		if (this.referee) {
			if (this.incident) return;
			this.incident = {
				kind: "foul",
				by: by.name,
				victim: victim.name,
				inBox,
				side: victim.side,
				x: by.x,
				y: by.y,
				actor: by,
				victimPlayer: victim,
				expect: card
			};
			this.banner = inBox ? tr("Момент в штрафной", "Incident in the box") : tr("Стык. Ваше решение", "A coming-together. Your call");
			this.bannerT = 2;
			return;
		}
		this.applyFoul(by, victim, card);
	}
	applyFoul(by, victim, card, spot) {
		const atk = this.attack(victim.side);
		const inBox = Math.abs(by.x) < 20 && atk * by.y > atk * 36 && atk * by.y < atk * 52.5;
		const pen = spot ? spot === "penalty" : inBox;
		this.dead = {
			kind: pen ? "penalty" : "freekick",
			side: victim.side,
			x: pen ? 0 : clamp(by.x, -33, 33),
			y: pen ? atk * 41.5 : clamp(by.y, -HALF_L + 2, HALF_L - 2),
			wait: .55,
			age: 0
		};
		this.giveDead(victim.side);
		this.foulN[by.side] += 1;
		by.fouls += 1;
		if (pen) this.penN[victim.side] += 1;
		const directRed = card === "red";
		if (directRed || card === "yellow") {
			if (directRed) {
				by.red = true;
				by.on = false;
				by.vx = 0;
				by.vy = 0;
				this.banner = tr(`Красная карточка. ${by.name}`, `Red card. ${by.name}`);
				if (this.ball.owner === by.uid) this.ball.owner = null;
			} else {
				by.yellow += 1;
				if (by.yellow >= 2) {
					by.red = true;
					by.on = false;
					by.vx = 0;
					by.vy = 0;
					this.banner = tr(`Вторая жёлтая. ${by.name} удалён`, `Second yellow. ${by.name} is sent off`);
					if (this.ball.owner === by.uid) this.ball.owner = null;
				} else this.banner = tr(`Жёлтая карточка. ${by.name}`, `Yellow card. ${by.name}`);
			}
		} else this.banner = this.banner || (pen ? tr("Пенальти", "Penalty") : tr(`Фол. ${by.name}`, `Foul. ${by.name}`));
		this.bannerT = 2;
		audio.whistle();
		this.emit(true);
	}
	giveDead(side) {
		if (!this.dead) return;
		this.dead.age = 0;
		const taker = this.dead.kind === "goalkick" ? this.sidePlayers(side).find((p) => p.role === "GK" && p.on && !p.red) ?? this.nearestMate(side, this.dead.x, this.dead.y) : this.nearestOutfield(side, this.dead.x, this.dead.y);
		this.setPieceId = taker?.uid ?? "";
		this.ball.owner = null;
		this.ball.x = this.dead.x;
		this.ball.y = this.dead.y;
		this.ball.z = 0;
		this.ball.vx = 0;
		this.ball.vy = 0;
		this.ball.vz = 0;
		this.ball.fromThrow = this.dead.kind === "throw";
		this.ball.offside.clear();
		this.ball.lastSide = side;
		this.ball.kickAt = this.now;
		if (taker && side === this.userSide && !this.lockControl && !this.referee && taker.role !== "GK") this.controlledId = taker.uid;
	}
	updateAI(dt) {
		const owner = this.players.find((p) => p.uid === this.ball.owner) ?? null;
		const duty = {};
		for (const side of [0, 1]) {
			const list = this.sidePlayers(side).filter((q) => q.on && !q.red && q.role !== "GK" && (this.simming || q.uid !== this.controlledId)).sort((a, b) => dist(a, this.ball) - dist(b, this.ball));
			const oppHas = !owner || owner.side !== side;
			const loose = !owner && !this.dead;
			const aiSide = this.referee || side !== this.userSide;
			const legend = aiSide && this.diff.press >= 2;
			const organised = aiSide && this.diff.tackle >= .85;
			if ((oppHas || loose) && list[0]) duty[list[0].uid] = "press";
			if (oppHas && list[1] && (legend || this.referee || organised && this.attack(side) * this.ball.y < 6)) duty[list[1].uid] = "press";
			if (oppHas && list[2] && (legend || this.referee)) duty[list[2].uid] = "press";
			if (owner?.side === side) for (const q of list.filter((m) => m.uid !== owner.uid).slice(0, 2)) duty[q.uid] = "support";
		}
		for (const p of this.players) {
			if (!p.on || p.red || !this.simming && p.uid === this.controlledId) continue;
			p.cd = Math.max(0, p.cd - dt);
			p.think -= dt;
			const job = duty[p.uid] ?? "hold";
			const spot = p.role === "GK" ? this.keeperSpot(p) : this.zoneTarget(p, this.shapePoint(p), job, owner);
			let tx = spot.x;
			let ty = spot.y;
			if (owner?.uid === p.uid) {
				if (p.think <= 0) {
					const tempo = this.speedMul;
					const calm = tempo < .85 ? 1.16 : tempo < 1.05 ? 1.1 : tempo > 1.15 ? .84 : 1;
					const rivalMind = this.referee || p.side !== this.userSide;
					const iq = this.referee ? 1.35 : rivalMind ? .95 + this.diff.acc * .55 : .9;
					p.think = (p.role === "GK" ? .42 : this.referee ? .36 : .72) * calm / iq;
					this.aiOnBall(p);
				}
				if (this.ball.owner === p.uid && p.order && p.role !== "GK") {
					tx = p.tx;
					ty = p.ty;
				}
			} else p.order = false;
			if (this.dead && p.uid === this.setPieceId && (this.simming || p.uid !== this.controlledId)) {
				tx = this.dead.x;
				ty = this.dead.y - this.attack(this.dead.side) * 1.05;
			}
			const dx = tx - p.x;
			const dy = ty - p.y;
			const d = hypot(dx, dy) || 1;
			const live = this.live(p);
			const rival = this.referee || p.side !== this.userSide;
			const carrying = owner?.uid === p.uid;
			const diffPace = this.referee ? 1.12 : rival ? .88 + this.diff.speed * .18 : .96;
			const jobBoost = job === "press" ? this.referee ? 1.18 : 1.1 : job === "support" ? 1.04 : 1;
			const pieceBoost = this.dead && p.uid === this.setPieceId ? 1.3 : 1;
			const pace = (4.35 + live.speed / 100 * 2.7) * diffPace * this.paceScale(p) * (carrying ? .94 : .9) * jobBoost * pieceBoost * (.78 + .22 * (p.stamina / 100)) * (.9 + .1 * (p.fitness / 100));
			const spd = d < .65 ? pace * d : pace;
			const k = Math.min(1, dt * (carrying ? 7 : 6.2));
			p.vx += (dx / d * spd - p.vx) * k;
			p.vy += (dy / d * spd - p.vy) * k;
			if (hypot(p.vx, p.vy) > .25) {
				const target = Math.atan2(-p.vx, p.vy);
				const diff = Math.atan2(Math.sin(target - p.yaw), Math.cos(target - p.yaw));
				p.yaw += diff * Math.min(1, dt * 8);
			}
			if (carrying && p.role !== "GK") p.stamina = Math.max(0, p.stamina - 2.2 * dt);
			const mayTackle = owner && owner.side !== p.side && owner.role !== "GK" && p.role !== "GK" && p.cd <= 0 && !this.dead;
			const line = this.lineRole(p);
			const back = line === "CB" || line === "LB" || line === "RB" || line === "CDM";
			const legend = rival && this.diff.press >= 2;
			const stepOut = Boolean(owner && back && rival && this.diff.tackle >= .85 && dist(p, owner) < (legend ? 3.6 : 2.7));
			const arm = this.referee ? 2.65 : job === "press" ? legend ? 2.45 : 2.2 : stepOut ? 2.15 : 1.55;
			if (mayTackle && owner && dist(p, owner) < arm && (job === "press" || stepOut || Math.random() < (this.referee ? .72 : .34))) {
				const tempo = this.speedMul;
				p.cd = this.referee ? .72 : tempo > 1.15 ? 1.35 : tempo < .85 ? 1.85 : 1.55;
				const behind = this.fromBehind(p, owner);
				const mine = this.live(p);
				const hold = this.live(owner);
				const win = clamp(.18 + (rival ? clamp(.38 + this.diff.tackle * .42, .38, .92) : .5) * .4 + (mine.hardness - hold.hardness) / 480 - (behind ? .22 : 0), .12, legend ? .72 : .62);
				const foulP = this.referee ? .42 : behind ? .5 : .38;
				if (!behind && Math.random() < win) this.popBall(owner, p);
				else if (dist(p, owner) < (this.referee ? 1.7 : 1.5) && Math.random() < foulP) this.foul(p, owner, this.booking(p, owner, behind, false));
			}
		}
		this.serviceDead(dt);
	}
	ballTempo() {
		if (this.speedMul < .9) return .86;
		if (this.speedMul < 1.05) return .93;
		if (this.speedMul > 1.3) return 1.42;
		return 1.16;
	}
	serviceDead(dt) {
		if (!this.dead || this.phase !== "play") return;
		this.dead.age = (this.dead.age ?? 0) + dt;
		const taker = this.players.find((p) => p.uid === this.setPieceId && p.on && !p.red);
		if (!taker) return;
		if (!this.simming && !this.referee && taker.side === this.userSide && taker.uid === this.controlledId) {
			if (dist(taker, this.dead) < 1.75) this.ball.owner = taker.uid;
			return;
		}
		const arrived = dist(taker, {
			x: this.dead.x,
			y: this.dead.y - this.attack(taker.side) * 1.05
		}) < 1.5;
		const age = this.dead.age ?? 0;
		const hardOpp = !this.referee && taker.side !== this.userSide && (this.level === "world" || this.level === "legend");
		if (arrived && age > (hardOpp ? .4 : .6)) this.takeSetPiece(taker);
		else if (hardOpp && age > 1.05 && dist(taker, this.dead) < 16) {
			const d = dist(taker, this.dead) || 1;
			const step = Math.min(4, Math.max(0, d - .9));
			taker.x += (this.dead.x - taker.x) / d * step;
			taker.y += (this.dead.y - taker.y) / d * step;
			taker.vx = 0;
			taker.vy = 0;
			if (dist(taker, this.dead) < 2.2) this.takeSetPiece(taker);
		} else if (age > 6.5 && dist(taker, this.dead) < 4) {
			const d = dist(taker, this.dead) || 1;
			const step = Math.min(1.5, d - .85);
			taker.x += (this.dead.x - taker.x) / d * step;
			taker.y += (this.dead.y - taker.y) / d * step;
			taker.vx = 0;
			taker.vy = 0;
			this.takeSetPiece(taker);
		}
	}
	/** A set piece is a real strike or a short pass, never a jump across the pitch. */
	takeSetPiece(p) {
		if (!this.dead) return;
		const kind = this.dead.kind;
		const atk = this.attack(p.side);
		this.ball.x = this.dead.x;
		this.ball.y = this.dead.y;
		this.ball.z = 0;
		this.ball.vx = 0;
		this.ball.vy = 0;
		this.ball.vz = 0;
		const gy = atk * HALF_L;
		const gd = dist({
			x: this.dead.x,
			y: this.dead.y
		}, {
			x: 0,
			y: gy
		});
		p.yaw = Math.atan2(-(0 - p.x), atk);
		const hardOpp = !this.referee && p.side !== this.userSide && (this.level === "world" || this.level === "legend");
		const closeShot = kind === "freekick" && gd < 28 && Math.abs(this.dead.x) < 16;
		const hardShot = hardOpp && kind === "freekick" && gd < 36 && Math.abs(this.dead.x) < 22;
		if (kind === "penalty" || closeShot || hardShot) {
			this.shoot(p);
			return;
		}
		if (hardOpp && kind === "freekick") {
			const spotY = atk * (HALF_L - 16);
			this.kick(p, -p.x * .2, spotY - p.y, clamp(18 + gd * .1, 18, 28), gd > 42 ? .7 : .5, false);
			this.banner = tr(`Штрафной. ${p.name}`, `Free kick. ${p.name}`);
			this.bannerT = 1.4;
			return;
		}
		const mate = this.bestMate(p, this.relayUid);
		const forward = mate ? atk * (mate.y - p.y) : -1;
		if (mate && forward > -2 && dist(p, mate) < 24) {
			const pace = clamp(11 + dist(p, mate) * .38, 12, 20);
			const lift = kind === "corner" || kind === "goalkick" ? .42 : .14;
			this.kick(p, mate.x - p.x, mate.y - p.y + atk * .8, pace, lift, false);
			return;
		}
		this.kick(p, -p.x * .15, atk * 16, 15, kind === "goalkick" ? .36 : .16, false);
	}
	paceScale(p) {
		const rate = clamp(p.speed / 100, .45, 1);
		if (this.speedMul < .9) return .84 + rate * .04;
		if (this.speedMul < 1.05) return .91 + rate * .04;
		if (this.speedMul > 1.3) return 1.34 + rate * .08;
		return 1.12 + rate * .06;
	}
	passErr(p) {
		if (p.uid === this.controlledId && !this.simming) return this.speedMul > 1.3 ? 1.25 : 1;
		return (this.speedMul < .85 ? .94 : this.speedMul < 1.05 ? .95 : this.speedMul > 1.3 ? 1.1 : 1) * (this.referee || p.side !== this.userSide ? 1.32 - this.diff.acc * .68 : .9);
	}
	userTackleChance(mine, theirs) {
		const ease = this.diff.tackle < .2 ? 1.55 : this.diff.tackle < .5 ? 1.05 : this.diff.tackle < .85 ? .62 : .34;
		return clamp((.22 + mine / 150 - theirs / 260) * ease, .08, .78);
	}
	/** One player closes the ball down. Two teammates offer a pass. Everyone else keeps the block. */
	zoneTarget(p, spot, job, owner) {
		if (p.role === "GK") return spot;
		const edgeX = 32.2;
		const edgeY = HALF_L - 1.8;
		if (job === "press") {
			const stop = this.referee || p.side !== this.userSide ? clamp(1.5 - this.diff.tackle * .72, this.diff.press >= 2 ? .48 : .85, 1.45) : .98;
			const mark = owner && owner.side !== p.side ? owner : null;
			const qx = mark ? mark.x : this.ball.x;
			const qy = mark ? mark.y : this.ball.y;
			const ox = this.sidePlayers(p.side).filter((q) => q.uid !== p.uid && q.on && q.role !== "GK" && hypot(q.x - qx, q.y - qy) < 3.4).length ? p.slot % 2 === 0 ? 1.6 : -1.6 : 0;
			const dx = qx - p.x;
			const dy = qy - p.y;
			const d = hypot(dx, dy) || 1;
			return {
				x: clamp(qx - dx / d * stop + ox, -32.2, edgeX),
				y: clamp(qy - dy / d * stop, -edgeY, edgeY)
			};
		}
		if (job === "support") {
			const atk = this.attack(p.side);
			const flank = Math.sign(spot.x || (p.slot % 2 ? 1 : -1)) || 1;
			const sharp = !this.referee && p.side !== this.userSide && this.diff.acc >= .65;
			const wantX = clamp(spot.x * .65 + flank * (sharp ? 6.5 : 5), -32.2, edgeX);
			const wantY = clamp(spot.y + atk * (sharp ? 12 : 8), -edgeY, edgeY);
			return this.keepOnside(p, wantX, wantY);
		}
		const atk = this.attack(p.side);
		const line = this.lineRole(p);
		const wobx = Math.sin(this.now * .8 + p.slot * 1.7) * .42;
		let y = spot.y + Math.cos(this.now * .65 + p.slot) * .22;
		const attacking = owner?.side === p.side;
		if (!attacking && (line === "CB" || line === "LB" || line === "RB" || line === "CDM")) {
			const drop = this.referee ? 8 : this.diff.press >= 2 ? 6.2 : this.diff.tackle >= .85 ? 11 : 14;
			if (atk * y > atk * this.ball.y - 4) y = this.ball.y - atk * drop;
		}
		if (attacking && (line === "ST" || line === "LW" || line === "RW" || line === "CAM")) {
			const run = Math.sin(this.now * .42 + p.slot * .9);
			const rival = this.referee || p.side !== this.userSide;
			let gate = this.referee ? -.05 : this.diff.press >= 2 ? .02 : this.diff.acc >= .65 ? .1 : .42;
			let burst = this.referee ? 8.2 : this.diff.press >= 2 ? 9 : this.diff.acc >= .65 ? 6.6 : 2.2 + (rival ? this.diff.acc * 4.6 : 1.2);
			if (!this.referee && p.side !== this.userSide && this.level !== "novice") {
				burst += 6;
				gate = Math.min(gate, .05);
			}
			if (run > gate) y += atk * burst;
		}
		return this.keepOnside(p, clamp(spot.x + wobx, -32.2, edgeX), clamp(y, -edgeY, edgeY));
	}
	keepOnside(p, x, y) {
		const atk = this.attack(p.side);
		const defs = this.sidePlayers(1 - p.side).filter((q) => q.on && !q.red && q.role !== "GK").slice().sort((a, b) => atk * b.y - atk * a.y);
		const line = defs[1]?.y ?? defs[0]?.y;
		if (line == null) return {
			x,
			y
		};
		if (!(Math.sin(this.now * .48 + p.slot * 1.15) > (this.referee ? .12 : this.diff.press >= 2 ? .22 : .55)) && atk * y > atk * line - .5 && atk * y > .5) {
			const nextY = line - atk * 1.2;
			const nextD = hypot(x - this.ball.x, nextY - this.ball.y);
			const had = hypot(p.x - this.ball.x, p.y - this.ball.y);
			if (!(nextD < 8 && had > 8)) y = nextY;
		}
		const bd = hypot(x - this.ball.x, y - this.ball.y);
		const gap = !this.ball.owner && !this.dead ? 0 : this.referee || this.diff.press >= 2 ? 7.2 : this.diff.tackle >= .85 ? 9.6 : 11.2;
		if (gap > 0 && bd < gap && bd > .15) {
			x = this.ball.x + (x - this.ball.x) / bd * gap;
			y = this.ball.y + (y - this.ball.y) / bd * gap;
		}
		return {
			x: clamp(x, -32.2, 32.2),
			y: clamp(y, -HALF_L + 1.8, HALF_L - 1.8)
		};
	}
	keepGoalersInBox() {
		for (const p of this.players) {
			if (!p.on || p.red || p.role !== "GK") continue;
			const atk = this.attack(p.side);
			const goalY = -atk * HALF_L;
			p.y = goalY + atk * clamp(atk * (p.y - goalY), .35, 6.2);
			p.x = clamp(p.x, -19.2, 19.2);
			if (this.ball.owner === p.uid) this.stick();
		}
	}
	keeperSpot(p) {
		const atk = this.attack(p.side);
		const goalY = -atk * HALF_L;
		const depth = Math.abs(this.ball.y - goalY);
		const inBox = Math.abs(this.ball.x) < 18 && depth < 16.5;
		const near = depth < 8 && Math.abs(this.ball.x) < 10;
		const read = this.keeperRead(p);
		const x = clamp(this.ball.x * (near ? .36 : inBox ? .24 : .12) * read, -4.6 * read, 4.6 * read);
		let step = .45;
		if (inBox) step = clamp(.8 + (16.5 - depth) * .16, .6, 4.6);
		if (near) step = Math.min(step, 2.8);
		return {
			x,
			y: goalY + atk * step
		};
	}
	keeperTake() {
		if (this.dead || this.phase !== "play" || !this.ball.owner) return;
		const owner = this.players.find((q) => q.uid === this.ball.owner);
		if (!owner || owner.role === "GK") return;
		const gk = this.sidePlayers(1 - owner.side).find((q) => q.role === "GK" && q.on && !q.red);
		if (!gk) return;
		const goalY = -this.attack(gk.side) * HALF_L;
		const depth = Math.abs(owner.y - goalY);
		if (Math.abs(owner.x) > 9 || depth > 8) return;
		let arm = 1.02 + this.keeperRead(gk) * 1.2;
		if (!this.referee && gk.side === this.userSide && this.level !== "novice") arm *= .7;
		if (dist(gk, owner) > arm) return;
		this.ball.owner = gk.uid;
		this.ball.lastUid = gk.uid;
		this.ball.lastSide = gk.side;
		this.ball.kickAt = this.now;
		this.ball.offside.clear();
		this.ball.fromThrow = false;
		this.stick();
		this.banner = tr(`Забрал ${gk.name}`, `Claimed by ${gk.name}`);
		this.bannerT = 1.2;
	}
	deflect() {
		if (this.ball.owner || this.dead || this.ball.lastSide == null) return;
		if (hypot(this.ball.vx, this.ball.vy) < 16 || this.ball.z > 1.45) return;
		if (this.attack(this.ball.lastSide) * this.ball.vy < 7) return;
		for (const p of this.sidePlayers(1 - this.ball.lastSide)) {
			if (p.uid === this.controlledId || p.role === "GK" || !p.on || p.red) continue;
			if (p.role !== "CB" && p.role !== "LB" && p.role !== "RB" && p.role !== "CDM") continue;
			const rival = this.referee || p.side !== this.userSide;
			const reach = rival ? .68 + this.diff.tackle * .42 : .66;
			if (dist(p, this.ball) > reach) continue;
			const odds = rival ? .08 + this.diff.tackle * .48 : .08;
			if (Math.random() > odds) continue;
			this.ball.vx *= -.22;
			this.ball.vy *= .12;
			this.ball.vz = 1.5;
			this.ball.lastUid = p.uid;
			this.ball.lastSide = p.side;
			this.ball.kickAt = this.now;
			this.banner = tr(`Блок ${p.name}`, `Blocked by ${p.name}`);
			this.bannerT = 1.1;
			return;
		}
	}
	/** Formation spot shifted by the team's real plan. Players keep the block instead of ball-chasing. */
	shapePoint(p) {
		const tactic = this.tactic[p.side];
		const shape = this.shapes[p.side];
		const atk = this.attack(p.side);
		const home = this.homeOf(p);
		const line = this.lineRole(p);
		const ballAdv = atk * this.ball.y;
		let push = 0;
		let wide = 1;
		let stretch = 1;
		if (tactic === "tiki") {
			push = clamp(ballAdv * .22 + 4, -4, 12);
			wide = .88;
			stretch = .8;
		} else if (tactic === "bus") {
			push = clamp(Math.min(-12, ballAdv * .05 - 18), -26, -10);
			wide = .72;
			stretch = .62;
		} else if (tactic === "press") {
			push = clamp(ballAdv * .32 + 2, -4, 14);
			wide = .96;
			stretch = .84;
		} else if (tactic === "counter") {
			push = clamp(ballAdv * .08 - 10, -20, 0);
			wide = .8;
			stretch = .7;
		} else if (tactic === "wing") {
			push = clamp(ballAdv * .18, -8, 10);
			wide = 1.12;
			stretch = .86;
		} else {
			push = clamp(ballAdv * .16, -8, 8);
			wide = .92;
			stretch = 1.02;
		}
		if (shape === "4-3-3") wide *= 1.08;
		if (shape === "4-4-2") {
			wide *= .9;
			stretch *= .94;
		}
		if (shape === "3-5-2") wide *= 1.12;
		if (shape === "4-2-3-1" && (line === "CDM" || line === "CB")) stretch *= .86;
		if (line === "GK") {
			const goalY = -atk * (HALF_L - 1.6);
			const come = tactic === "tiki" || tactic === "press" ? .16 : .08;
			return {
				x: clamp(this.ball.x * come, -5.5, 5.5),
				y: goalY + atk * (tactic === "bus" ? .4 : 1.2)
			};
		}
		let x = home.x * wide;
		let y = home.y * stretch + atk * push;
		if (tactic === "bus") {
			let band = line === "ST" ? -6 : line === "CAM" || line === "LW" || line === "RW" || line === "LM" || line === "RM" ? -12 : line === "CM" || line === "CDM" ? -16 : -22;
			const behindBall = ballAdv - 9;
			if (band > behindBall) band = behindBall;
			const cap = line === "ST" ? 0 : -8;
			if (band > cap) band = cap;
			y = atk * clamp(band, -34, cap);
			x = clamp(home.x * (shape === "3-5-2" || shape === "4-3-3" ? .86 : .66), -24, 24);
		} else if (tactic === "counter" && (line === "ST" || line === "LW" || line === "RW")) {
			y = atk * (line === "ST" ? 14 : 8);
			if (line !== "ST") x = Math.sign(home.x || 1) * 16;
		}
		if (tactic === "tiki") x = x * .94 + clamp(this.ball.x, -18, 18) * .06;
		if ((tactic === "wing" || shape === "4-3-3" || shape === "3-5-2") && (line === "LW" || line === "RW" || line === "LM" || line === "RM")) x = Math.sign(home.x || 1) * (34 - (shape === "3-5-2" ? 5 : 8));
		if (shape === "4-4-2" && line === "ST") {
			x = home.x;
			y = home.y * stretch + atk * Math.min(push, 6);
		}
		if (shape === "4-2-3-1" && line === "CDM") y = home.y - atk * 3;
		if ((tactic === "direct" || shape === "4-4-2") && (line === "ST" || line === "LW" || line === "RW") && tactic === "direct") y = home.y + atk * 4;
		if ((this.referee || p.side !== this.userSide) && tactic !== "bus" && line !== "ST") {
			if (this.referee) y += atk * 4.2;
			else if (this.diff.press >= 2) y += atk * (line === "LW" || line === "RW" || line === "CAM" ? 7.2 : 8.6);
			else if (this.diff.tackle >= .85 && (line === "CB" || line === "LB" || line === "RB" || line === "CDM")) y += atk * .4;
			else y += atk * this.diff.press * 1.15;
		}
		return {
			x: clamp(x, -32.2, 32.2),
			y: clamp(y, -HALF_L + 1.8, HALF_L - 1.8)
		};
	}
	aiOnBall(p) {
		const tactic = this.tactic[p.side];
		const atk = this.attack(p.side);
		const gd = dist(p, {
			x: 0,
			y: atk * HALF_L
		});
		const rival = this.referee || p.side !== this.userSide;
		const iq = this.referee ? .94 : rival ? this.diff.acc : .58;
		const avoid = this.now - this.relayAt < 3.4 ? this.relayUid : "";
		if (p.role === "GK") {
			const mate = this.bestMate(p, avoid) ?? this.fallbackMate(p);
			if (mate) {
				const gap = dist(p, mate);
				this.kick(p, mate.x - p.x, mate.y - p.y + atk * 1.4, this.passPace(gap, .7), .28, false);
			} else this.kick(p, (Math.random() - .5) * 6, atk * 22, this.passPace(26, .88), .38, false);
			return;
		}
		const pressed = this.sidePlayers(1 - p.side).filter((f) => f.on && f.role !== "GK").some((f) => dist(p, f) < 3.25);
		const finisher = p.role === "ST" || p.role === "LW" || p.role === "RW" || p.role === "CAM";
		const inBox = gd < 16.5 && Math.abs(p.x) < 14;
		const legend = rival && this.diff.press >= 2;
		const sharp = rival && this.diff.acc >= .65;
		const closeIn = !this.referee && p.side !== this.userSide && this.level !== "novice";
		if ((legend || closeIn) && !inBox && gd > 16 && !pressed) {} else if (closeIn && gd < 18 && Math.abs(p.x) < 15 && Math.random() < .78) {
			this.shoot(p);
			return;
		} else if (inBox && (finisher || gd < 12 || legend || this.referee)) {
			const take = this.referee ? .9 : legend ? .88 : sharp ? .78 : .45 + iq * .45;
			if (Math.random() < take) {
				this.shoot(p);
				return;
			}
		} else if (sharp && gd < 23 && Math.abs(p.x) < 13 && (finisher || gd < 18) && Math.random() < (this.diff.acc >= .9 ? .52 : .36)) {
			this.shoot(p);
			return;
		} else if (!legend && gd < 20 + iq * 14 && Math.abs(p.x) < 16 && (finisher || this.referee) && Math.random() < (this.referee ? .48 : sharp ? .22 + iq * .35 : .06 + iq * .4)) {
			this.shoot(p);
			return;
		} else if (legend && gd < 16 && Math.abs(p.x) < 14 && Math.random() < .72) {
			this.shoot(p);
			return;
		} else if (rival && iq < .35 && gd < 32 && Math.abs(p.x) < 16 && Math.random() < .06) {
			this.shoot(p);
			return;
		}
		if ((tactic === "bus" || tactic === "counter") && atk * p.y < -22 && pressed) {
			const st = this.sidePlayers(p.side).find((m) => m.role === "ST" && m.uid !== p.uid && m.uid !== avoid);
			if (st && atk * (st.y - p.y) > 8) {
				this.kick(p, st.x - p.x, st.y - p.y, this.passPace(dist(p, st), .84), .4, false);
				return;
			}
		}
		const mate = this.bestMate(p, avoid);
		const forward = mate ? atk * (mate.y - p.y) : -99;
		if (Boolean(mate && (forward > 3.5 || pressed && forward > -1)) && mate && Math.random() < (pressed ? .62 : tactic === "tiki" ? .28 : .18)) {
			const gap = dist(p, mate);
			const weight = tactic === "direct" || tactic === "counter" ? .78 : .62;
			this.kick(p, mate.x - p.x, mate.y - p.y + atk * .6, this.passPace(gap, weight), gap > 20 ? .22 : .1, false);
			return;
		}
		if (pressed && atk * p.y < -16) {
			this.kick(p, (Math.random() - .5) * 8, atk * 26, this.passPace(22, .9), .36, false);
			return;
		}
		const step = this.speedMul > 1.3 ? 9 : this.speedMul < .85 ? 6.2 : this.speedMul < 1.05 ? 6.35 : 7.4;
		const drive = rival && this.diff.acc >= .65 ? this.diff.acc >= .9 ? 4.4 : 2.6 : 0;
		const hunt = !this.referee && p.side !== this.userSide && this.level !== "novice" ? 4.2 : 0;
		p.order = true;
		p.tx = clamp(p.x * .45, -11, 11);
		p.ty = clamp(p.y + atk * (step + drive + hunt), -HALF_L + 3, HALF_L - 3);
	}
	bestMate(p, avoid = "") {
		const tactic = this.tactic[p.side];
		let best = null;
		let score = -999;
		const atk = this.attack(p.side);
		const minD = tactic === "tiki" ? 4.2 : 5.5;
		const maxD = tactic === "tiki" ? 26 : tactic === "direct" || tactic === "counter" ? 44 : 34;
		for (const m of this.sidePlayers(p.side)) {
			if (m.uid === p.uid || m.role === "GK" && p.role !== "GK") continue;
			if (p.role === "GK" && m.role === "GK") continue;
			const d = dist(p, m);
			if (d < minD || d > maxD) continue;
			const forward = atk * (m.y - p.y);
			const wide = Math.abs(m.x) - Math.abs(p.x);
			let s = .2;
			if (m.uid === avoid) s -= 7;
			if (forward < -1.5) s -= 3.2;
			if (forward > 4) s += 1.8;
			const leak = this.referee ? .62 : .4;
			if (!this.safePass(p, m) && Math.random() > leak) s -= 5;
			if (tactic === "tiki") s += (d > 6 && d < 14 ? 2.2 : .4) + Math.max(0, forward) * .04 - Math.abs(m.x - p.x) * .01;
			else if (tactic === "direct" || tactic === "counter") s += forward * .12 + (m.role === "ST" ? 1.5 : 0);
			else if (tactic === "wing") s += wide * .12 + forward * .04 + (m.role === "LW" || m.role === "RW" || m.role === "LM" || m.role === "RM" ? 1.1 : 0);
			else if (tactic === "bus") s += Math.max(0, forward) * .08 + (m.role === "ST" ? 1.6 : 0);
			else s += forward * .06;
			let mark = 99;
			for (const foe of this.sidePlayers(1 - p.side)) mark = Math.min(mark, dist(m, foe));
			if (mark < 2.4) s -= 1.4;
			if (s > score) {
				score = s;
				best = m;
			}
		}
		return score > .05 ? best : null;
	}
	fallbackMate(p) {
		let best = null;
		let bestD = 40;
		for (const m of this.sidePlayers(p.side)) {
			if (m.uid === p.uid || m.role === "GK") continue;
			const d = dist(p, m);
			if (d < 4 || d >= bestD) continue;
			best = m;
			bestD = d;
		}
		return best;
	}
	safePass(from, to) {
		const atk = this.attack(from.side);
		if (atk * to.y <= 1) return true;
		const defs = this.sidePlayers(1 - from.side).slice().sort((a, b) => atk * b.y - atk * a.y);
		const line = defs[1]?.y ?? defs[0]?.y ?? atk * 52.5;
		const aheadBall = atk * to.y > atk * from.y + .6;
		const aheadLine = atk * to.y > atk * line + .4;
		return !(aheadBall && aheadLine);
	}
	integrate(dt) {
		for (const p of this.players) {
			if (!p.on || p.red) continue;
			p.x += p.vx * dt;
			p.y += p.vy * dt;
			p.x = clamp(p.x, -32.8, 32.8);
			p.y = clamp(p.y, -HALF_L + 1.2, HALF_L - 1.2);
		}
	}
	separate(dt) {
		const list = this.players.filter((p) => p.on && !p.red);
		for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
			const a = list[i];
			const b = list[j];
			const dx = b.x - a.x;
			const dy = b.y - a.y;
			const d = hypot(dx, dy) || .001;
			if (d < 1.7) {
				const push = (1.7 - d) * .5 * Math.min(1, dt * 8) / d;
				const sx = dx * push;
				const sy = dy * push;
				if (this.simming || a.uid !== this.controlledId) {
					a.x -= sx;
					a.y -= sy;
				}
				if (this.simming || b.uid !== this.controlledId) {
					b.x += sx;
					b.y += sy;
				}
			}
		}
	}
	stick() {
		const p = this.players.find((q) => q.uid === this.ball.owner);
		if (!p) return;
		const f = this.forward(p);
		this.ball.x = p.x + f.x * .85;
		this.ball.y = p.y + f.y * .85;
		this.ball.vx = p.vx;
		this.ball.vy = p.vy;
		this.ball.z = 0;
		this.ball.vz = 0;
	}
	ballPhysics(dt) {
		if (this.dead) {
			this.ball.x = this.dead.x;
			this.ball.y = this.dead.y;
			this.ball.z = 0;
			this.ball.vx = 0;
			this.ball.vy = 0;
			this.ball.vz = 0;
			return;
		}
		if (this.ball.owner) {
			this.stick();
			return;
		}
		this.ball.px = this.ball.x;
		this.ball.py = this.ball.y;
		this.ball.x += this.ball.vx * dt;
		this.ball.y += this.ball.vy * dt;
		this.ball.z += this.ball.vz * dt;
		this.ball.vz -= 13 * dt;
		const drag = Math.exp(-(this.weather === "clear" ? .8 : 1.25) * dt);
		this.ball.vx *= drag;
		this.ball.vy *= drag;
		if (this.ball.z <= 0) {
			if (this.ball.vz < -1.2) this.ball.squash = 1;
			this.ball.z = 0;
			this.ball.vz = Math.abs(this.ball.vz) > 1.4 ? -this.ball.vz * .38 : 0;
			this.ball.vx *= .92;
			this.ball.vy *= .92;
		}
		this.tryClaim();
		this.scoopLoose(dt);
	}
	/** A ball that has stopped under someone's feet is a possession, not scenery. */
	scoopLoose(dt) {
		if (this.ball.owner || this.dead || this.phase !== "play") {
			this.looseAge = 0;
			return;
		}
		if (hypot(this.ball.vx, this.ball.vy) < 7 && this.ball.z < .45) this.looseAge += dt;
		else this.looseAge = 0;
		if (this.looseAge < .35) return;
		let best = null;
		let bestD = 3.1;
		for (const p of this.players) {
			if (!p.on || p.red || !this.canTouch(p) || p.role === "GK") continue;
			const d = dist(p, this.ball);
			if (d < bestD) {
				best = p;
				bestD = d;
			}
		}
		if (!best) return;
		if (this.ball.offside.has(best.uid)) {
			this.callOffside(best);
			return;
		}
		this.ball.owner = best.uid;
		this.ball.lastUid = best.uid;
		this.ball.lastSide = best.side;
		this.ball.vx = 0;
		this.ball.vy = 0;
		this.ball.vz = 0;
		this.ball.offside.clear();
		this.ball.fromThrow = false;
		this.looseAge = 0;
		this.stick();
	}
	tryClaim() {
		if (this.ball.z > 1.35) return;
		const spd = hypot(this.ball.vx, this.ball.vy);
		let best = null;
		let bestD = 99;
		const user = this.ctrl();
		if (user && user.on && this.canTouch(user)) {
			const d = dist(user, this.ball);
			if (d < this.claimReach(user) && this.canReceive(user, d, spd)) {
				best = user;
				bestD = d;
			}
		}
		if (!best) for (const p of this.players) {
			if (!p.on || p.red || !this.canTouch(p)) continue;
			const d = dist(p, this.ball);
			if (d < this.claimReach(p) && d < bestD && this.canReceive(p, d, spd)) {
				best = p;
				bestD = d;
			}
		}
		if (!best) return;
		if (this.ball.offside.has(best.uid)) {
			this.callOffside(best);
			return;
		}
		if (best.role === "GK" && best.side === this.ball.lastSide && this.ball.z < .4 && hypot(this.ball.vx, this.ball.vy) < 10 && this.now - this.ball.kickAt < 2) {
			this.dead = {
				kind: "freekick",
				side: 1 - best.side,
				x: best.x,
				y: best.y + this.attack(1 - best.side) * 1,
				wait: .4
			};
			this.banner = tr("Пас вратарю рукой нельзя", "You cannot pass to the keeper with your hands");
			this.bannerT = 1.8;
			this.giveDead(this.dead.side);
			return;
		}
		this.ball.owner = best.uid;
		this.ball.lastUid = best.uid;
		this.ball.lastSide = best.side;
		this.ball.offside.clear();
		this.ball.fromThrow = false;
	}
	claimReach(p) {
		if (p.role !== "GK") {
			const slow = hypot(this.ball.vx, this.ball.vy) < 12 && this.ball.z < .5;
			if (p.uid === this.controlledId && !this.simming) return slow ? 2.05 : 1.4;
			return slow ? 2.25 : 1.62;
		}
		const goalY = -this.attack(p.side) * HALF_L;
		const depth = Math.abs(this.ball.y - goalY);
		const inBox = Math.abs(this.ball.x) < 18 && depth < 16;
		const tough = this.referee || p.side !== this.userSide;
		const read = this.keeperRead(p);
		if (inBox && tough) return 1.2 + read * 1.25;
		if (inBox && p.side === this.userSide && !this.referee && this.level !== "novice") return 1.15;
		if (inBox) return 1.65;
		return 1.4;
	}
	canReceive(p, d, spd) {
		if (p.role === "GK") {
			if (!this.referee && p.side === this.userSide && this.level !== "novice" && spd > 12) return false;
			return spd < 36 || d < 2.4;
		}
		if (this.ball.z < .55 && spd < 12 && d < 2.05) return true;
		if (spd < 16 && d < 1.7) return true;
		if (this.ball.lastSide === p.side) {
			const userTouch = p.uid === this.controlledId && !this.simming;
			const reach = userTouch ? 1.65 : 2.05;
			const stick = userTouch ? 1.05 : 1.35;
			if (d > reach || spd > 50) return false;
			return this.ball.vx * (p.x - this.ball.x) + this.ball.vy * (p.y - this.ball.y) > 0 || d < stick;
		}
		return spd < (this.referee || p.side !== this.userSide ? 7 + this.diff.tackle * 9 : 13) && d < 1.05;
	}
	canTouch(p) {
		if (this.ball.lastUid === p.uid && this.now - this.ball.kickAt < .28) return false;
		return true;
	}
	callOffside(p) {
		if (this.referee) {
			if (!this.incident) {
				const side = 1 - p.side;
				this.incident = {
					kind: "offside",
					by: p.name,
					victim: "",
					inBox: false,
					side,
					x: p.x,
					y: p.y,
					actor: p,
					victimPlayer: null,
					expect: "none"
				};
				this.banner = tr(`Офсайд? ${p.name}`, `Offside? ${p.name}`);
				this.bannerT = 2;
			}
			return;
		}
		this.applyOffside(p);
	}
	applyOffside(p) {
		const side = 1 - p.side;
		this.dead = {
			kind: "freekick",
			side,
			x: clamp(p.x, -33, 33),
			y: clamp(p.y, -HALF_L + 2, HALF_L - 2),
			wait: .45
		};
		this.ball.offside.clear();
		this.banner = tr(`Офсайд. ${p.name}`, `Offside. ${p.name}`);
		this.bannerT = 1.8;
		this.offN[p.side] += 1;
		audio.whistle();
		this.giveDead(side);
		this.emit(true);
	}
	carryGoal() {
		if (!this.ball.owner || this.dead || this.ball.fromThrow) return;
		const p = this.players.find((q) => q.uid === this.ball.owner);
		if (!p) return;
		if (this.attack(p.side) * p.y < 50.1 || Math.abs(p.x) > 3.81) return;
		const goalY = this.attack(p.side) * HALF_L;
		const scoring = goalY > 0 ? 0 : 1;
		this.ball.owner = null;
		this.ball.vx = this.attack(p.side) * 8;
		this.ball.vy = this.attack(p.side) * 10;
		this.resolveGoal(scoring, this.ball.x, goalY);
	}
	lines() {
		if (this.ball.owner || this.dead) return;
		const prevY = this.ball.py;
		const y = this.ball.y;
		if (prevY <= 52.5 && y > 52.5 || prevY >= -52.5 && y < -52.5) {
			const goalY = y > 0 ? HALF_L : -HALF_L;
			const t = (goalY - prevY) / (y - prevY || 1);
			const crossX = this.ball.px + (this.ball.x - this.ball.px) * t;
			const scoring = goalY > 0 ? 0 : 1;
			const z = this.ball.z;
			const mouth = Math.abs(crossX) < GOAL_HW - .28;
			const post = Math.abs(crossX) >= 3.38 && Math.abs(crossX) <= 4.08;
			if (post && z < 2.75 || mouth && z >= 2.05 && z <= 2.75) {
				this.ball.x = clamp(crossX, -GOAL_HW + .15, GOAL_HW - .15);
				this.ball.y = goalY - Math.sign(goalY) * .7;
				this.ball.vx = post ? -Math.sign(crossX || 1) * (7 + Math.abs(this.ball.vx) * .3) : this.ball.vx * .35;
				this.ball.vy = -Math.sign(goalY) * (6 + Math.abs(this.ball.vy) * .28);
				this.ball.vz = 1.8;
				this.ball.z = post ? Math.min(z, 1.6) : 2.1;
				this.ball.owner = null;
				this.banner = post ? tr("Штанга!", "Post!") : tr("Перекладина!", "Bar!");
				this.bannerT = 1.6;
				return;
			}
			if (mouth && z < 2.05) {
				if (this.ball.fromThrow) {
					this.dead = {
						kind: "goalkick",
						side: 1 - scoring,
						x: 0,
						y: -this.attack(1 - scoring) * 46,
						wait: .5
					};
					this.banner = tr("С аута гол не засчитывается", "A goal from a throw-in does not count");
					this.bannerT = 1.6;
					this.giveDead(this.dead.side);
					return;
				}
				this.resolveGoal(scoring, crossX, goalY);
				return;
			}
			const last = this.ball.lastSide;
			const attackSide = goalY > 0 ? 0 : 1;
			const lastPlayer = this.players.find((q) => q.uid === this.ball.lastUid);
			const keeperOut = lastPlayer?.role === "GK" && lastPlayer.side !== attackSide;
			if (!keeperOut && last === attackSide) {
				this.dead = {
					kind: "goalkick",
					side: 1 - attackSide,
					x: Math.sign(crossX) * 6,
					y: goalY - Math.sign(goalY) * 5.5,
					wait: .45
				};
				this.banner = z >= 2.05 ? tr("Выше ворот", "Over the bar") : tr("Удар от ворот", "Goal kick");
			} else {
				this.dead = {
					kind: "corner",
					side: attackSide,
					x: Math.sign(crossX || 1) * 33.4,
					y: goalY - Math.sign(goalY) * .6,
					wait: .45
				};
				this.banner = keeperOut ? tr("Угловой от вратаря", "Corner off the keeper") : tr("Угловой", "Corner");
			}
			this.bannerT = 1.5;
			this.giveDead(this.dead.side);
			return;
		}
		if (Math.abs(this.ball.x) > 34) {
			const side = this.ball.lastSide === 0 ? 1 : 0;
			this.dead = {
				kind: "throw",
				side,
				x: Math.sign(this.ball.x) * 33.6,
				y: clamp(this.ball.y, -HALF_L + 1, HALF_L - 1),
				wait: .35
			};
			this.banner = tr("Аут", "Throw-in");
			this.bannerT = 1.3;
			this.giveDead(side);
		}
	}
	resolveGoal(scoring, crossX, goalY) {
		const gk = this.sidePlayers(1 - scoring).find((p) => p.role === "GK");
		const speed = hypot(this.ball.vx, this.ball.vy);
		const placed = gk ? Math.abs(crossX - gk.x) : 9;
		const near = placed < 1.45;
		const open = placed > 3.2;
		let save = .08;
		if (gk) {
			const read = this.keeperRead(gk);
			const facingUser = !this.referee && gk.side !== this.userSide;
			if (!this.referee && gk.side === this.userSide && this.level !== "novice") save = near ? .58 : open ? .5 : .54;
			else if (this.softKeepers()) save = clamp((near ? .16 : open ? .04 : .08) * (this.level === "novice" ? .55 : .85) * (.5 + read) - speed / 280, .015, this.level === "novice" ? .1 : .18);
			else if (this.referee) save = clamp((near ? .28 : open ? .08 : .16) * (.72 + read * .28) - speed / 220, .02, .3);
			else if (facingUser) {
				const slip = this.level === "legend" ? .9 : this.level === "world" ? .94 : 1;
				const skill = .35 + this.diff.save * .7;
				const base = near ? .5 + skill * .42 : open ? .22 + skill * .4 : .34 + skill * .42;
				const offLine = Math.abs(gk.y - goalY) > 6.5 ? .62 : 1;
				const cap = (.68 + this.diff.save * .28) * slip;
				save = clamp(base * slip * offLine * (.75 + read * .25) - speed / 240, (.12 + this.diff.save * .1) * slip, Math.min(.96, cap));
				if (slip < 1 && Math.random() < (this.level === "legend" ? .1 : .07)) save = Math.min(save, .08);
			} else {
				const threat = this.diff.acc;
				const skill = threat >= .9 ? .42 : threat >= .7 ? .55 : .66;
				const base = near ? .4 + skill * .4 : open ? .1 + skill * .28 : .2 + skill * .36;
				const cap = threat >= .9 ? .48 : threat >= .7 ? .58 : .7;
				save = clamp(base * (.72 + read * .28) - speed / 220, .06, cap);
			}
		}
		if (Math.random() < save && gk) {
			this.ball.x = crossX * .8;
			this.ball.y = goalY - Math.sign(goalY) * 1.1;
			this.ball.vy = -Math.sign(goalY) * Math.abs(this.ball.vy) * .35;
			this.ball.vx *= .4;
			this.ball.vz = 3.2;
			this.ball.z = .5;
			this.ball.owner = null;
			this.ball.lastUid = gk.uid;
			this.ball.lastSide = gk.side;
			this.ball.kickAt = this.now;
			this.banner = tr(`Сейв! ${gk.name}`, `Save! ${gk.name}`);
			this.bannerT = 1.5;
			return;
		}
		const kicker = this.players.find((p) => p.uid === this.ball.lastUid);
		const own = !kicker || kicker.side !== scoring;
		const name = kicker?.name ?? "Гол";
		const assist = !own && this.ball.assistUid && this.ball.assistUid !== kicker?.uid && this.ball.assistSide === scoring && this.now - this.ball.assistAt < 8 ? this.players.find((p) => p.uid === this.ball.assistUid)?.name ?? null : null;
		this.score[scoring] += 1;
		const minute = this.minuteMark();
		this.scorers.push({
			name,
			minute,
			side: scoring,
			own,
			assist
		});
		this.goalSeq++;
		this.goalPopup = {
			name,
			minute,
			assist,
			side: scoring,
			own,
			seq: this.goalSeq
		};
		this.popupT = 6;
		this.goalT = 2.8;
		this.phase = "goal";
		this.kickSide = 1 - scoring;
		this.ball.owner = null;
		this.ball.y = goalY + Math.sign(goalY) * .7;
		this.ball.vx *= .2;
		this.ball.vy *= .2;
		this.cam.shake = 1;
		this.banner = own ? tr(`Автогол. ${name}`, `Own goal. ${name}`) : tr(`Гол! ${name}`, `Goal! ${name}`);
		this.bannerT = 3;
		audio.goal();
		this.spawnConfetti(scoring);
		this.emit(true);
	}
	minuteMark() {
		const secs = Math.min(1, this.halfBase > 0 ? this.clock / this.halfBase : 0) * 45 * 60 + (this.half === 2 ? 2700 : 0);
		const cap = this.half === 2 ? 90 : 45;
		return `${Math.min(cap, Math.floor(secs / 60) + 1)}'`;
	}
	spawnConfetti(side) {
		const color = side === 0 ? this.homeColor : this.awayColor;
		for (let i = 0; i < 70; i++) this.particles.push({
			x: (Math.random() - .5) * 16,
			y: this.attack(side) * (HALF_L - 2),
			vx: (Math.random() - .5) * 10,
			vy: (Math.random() - .5) * 6,
			life: 1.6 + Math.random(),
			max: 2.2,
			color: i % 3 === 0 ? "#8FE388" : color,
			size: .25 + Math.random() * .35
		});
	}
	burstStep(dt) {
		for (const q of this.particles) {
			q.life -= dt;
			q.x += q.vx * dt;
			q.y += q.vy * dt;
			q.vy -= 2 * dt;
		}
		this.particles = this.particles.filter((q) => q.life > 0);
	}
	contests(_dt) {}
	recover(dt) {
		for (const p of this.players) {
			if (!p.on) continue;
			if (!(p.uid === this.controlledId && (this.sprintHeld || this.keys.has("ShiftLeft") || this.keys.has("ShiftRight")))) p.stamina = Math.min(100, p.stamina + 6 * dt);
		}
	}
	timeLabel() {
		const halfSeconds = Math.min(1, this.halfBase > 0 ? this.clock / this.halfBase : 0) * 45 * 60;
		let m = Math.floor(halfSeconds / 60);
		const s = Math.floor(halfSeconds % 60);
		if (this.half === 2) m += 45;
		return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
	}
	snapshot() {
		const p = this.ctrl();
		const rows = (side, on) => {
			const slots = FORMATIONS[this.shapes[side]] ?? FORMATIONS["4-3-3"];
			return this.players.filter((q) => q.side === side && q.on === on && !q.red).map((q) => ({
				uid: q.uid,
				name: q.name,
				role: on && q.slot >= 0 ? slots[q.slot]?.role ?? q.role : q.role,
				num: q.num,
				ovr: q.eff,
				mod: q.eff - q.ovr,
				stamina: q.stamina,
				on: q.on,
				slot: q.slot
			})).sort((a, b) => on ? a.slot - b.slot : a.num - b.num);
		};
		const possSum = this.possTime[0] + this.possTime[1];
		const count = (side) => this.players.filter((q) => q.side === side && q.on && !q.red).length;
		const cards = (side) => this.players.filter((q) => q.side === side && (q.yellow > 0 || q.red)).length;
		const yellows = (side) => this.players.filter((q) => q.side === side).reduce((s, q) => s + q.yellow, 0);
		const reds = (side) => this.players.filter((q) => q.side === side && q.red).length;
		const live = p ? this.live(p) : null;
		const ready = this.homeKit !== null && this.awayKit !== null;
		const owner = this.players.find((q) => q.uid === this.ball.owner);
		return {
			time: this.timeLabel(),
			minute: this.minuteMark(),
			half: this.half,
			score: [this.score[0], this.score[1]],
			poss: this.ball.lastSide,
			phase: this.phase,
			paused: this.paused,
			name: p?.name ?? "",
			role: p?.role ?? "",
			num: p?.num ?? 0,
			stam: p?.stamina ?? 0,
			ovr: p?.eff ?? 0,
			banner: this.bannerT > 0 ? this.banner : "",
			goal: this.popupT > 0 ? this.goalPopup : null,
			quick: this.dead ? this.recommend() : null,
			subs: 5 - this.subsUsed,
			formation: this.shapes[this.userSide] ?? this.formation,
			homeShape: this.shapes[0],
			awayShape: this.shapes[1],
			carrier: owner ? `${owner.num} ${owner.name}` : "Свободный мяч",
			xi: rows(0, true),
			bench: rows(0, false),
			awayXi: rows(1, true),
			awayBench: rows(1, false),
			scorers: this.scorers,
			dead: this.dead?.kind ?? "",
			setPiece: Boolean(this.dead),
			homeCode: this.home.code,
			awayCode: this.away.code,
			homeColor: this.homeColor,
			awayColor: this.awayColor,
			homeName: this.home.name,
			awayName: this.away.name,
			stadium: this.home.stadium,
			locked: this.lockControl,
			referee: this.referee,
			call: this.incident?.kind ?? "",
			callText: this.incident ? this.incident.kind === "offside" ? `${this.incident.by} — возможный офсайд` : `${this.incident.by} против ${this.incident.victim}${this.incident.inBox ? " · штрафная" : " · в поле"}` : "",
			refCorrect: this.refCorrect,
			refWrong: this.refWrong,
			weather: this.weather,
			kit: this.kit,
			added: this.added,
			onField: [count(0), count(1)],
			shots: [this.shotN[0], this.shotN[1]],
			fouls: [this.foulN[0], this.foulN[1]],
			cards: [cards(0), cards(1)],
			possPct: possSum > 0 ? [Math.round(this.possTime[0] / possSum * 100), Math.round(this.possTime[1] / possSum * 100)] : [50, 50],
			charge: this.chargeKind ? Math.min(1, this.chargeT / .75) : 0,
			statLine: live ? `скорость ${Math.round(live.speed)} · точность ${Math.round(live.accuracy)} · жёсткость ${Math.round(live.hardness)}` : "",
			kitPicked: ready,
			homePlan: PLAN_LABEL[this.tactic[0]],
			awayPlan: PLAN_LABEL[this.tactic[1]],
			homeKit: this.homeKit,
			awayKit: this.awayKit,
			kitsReady: ready,
			userSide: this.userSide,
			passes: [this.passN[0], this.passN[1]],
			yellows: [yellows(0), yellows(1)],
			reds: [reds(0), reds(1)],
			pens: [this.penN[0], this.penN[1]],
			offsides: [this.offN[0], this.offN[1]],
			homeSwatch: [this.home.home, this.home.away],
			awaySwatch: [this.away.home, this.away.away],
			critic: this.critic(),
			canSwitch: !this.lockControl && !this.referee && !this.teamHasBall(this.userSide),
			canSub: !this.lockControl && !this.referee && this.teamHasBall(this.userSide)
		};
	}
	/** Easy keepers leave a gap. From Professional up they read the shot. */
	softKeepers() {
		return !this.referee && (this.level === "novice" || this.level === "amateur");
	}
	keeperRead(p) {
		if (this.referee) return .48;
		if (this.level === "novice") return .18;
		if (this.level === "amateur") return .3;
		if (p.side === this.userSide) return .48;
		return clamp(.62 + this.diff.save * .38, .74, 1);
	}
	critic() {
		if (this.referee) {
			const calls = this.refCorrect + this.refWrong;
			const acc = calls === 0 ? .62 : this.refCorrect / calls;
			const mark = clamp(Math.round((4.6 + acc * 4.8 - this.refWrong * .22) * 10) / 10, 3.5, 9.8);
			const title = mark >= 8 ? "Судья вечера" : mark >= 6.5 ? "Рабочий вечер" : "Спорный протокол";
			return {
				mark: mark.toFixed(1),
				title,
				text: `Верных решений ${this.refCorrect}, ошибок ${this.refWrong}. Фолов ${this.foulN[0] + this.foulN[1]}, жёлтых ${this.players.reduce((s, q) => s + q.yellow, 0)}, красных ${this.players.filter((q) => q.red).length}.`
			};
		}
		const us = this.userSide;
		const them = 1 - us;
		const gf = this.score[us];
		const ga = this.score[them];
		let mark = 6 + (gf - ga) * .65 + Math.min(1.1, this.shotN[us] * .1) - Math.min(.9, this.foulN[us] * .07);
		if (gf > ga) mark += .35;
		if (gf === 0 && ga === 0) mark = Math.max(mark, 6.1);
		mark = clamp(Math.round(mark * 10) / 10, 3.5, 9.7);
		const title = mark >= 8.5 ? "Матч тура" : mark >= 7 ? "Уверенно" : mark >= 5.5 ? "Рабочий вечер" : "Ниже ожиданий";
		const usName = us === 0 ? this.home.name : this.away.name;
		return {
			mark: mark.toFixed(1),
			title,
			text: `${usName} ${gf}:${ga}. Удары ${this.shotN[us]} против ${this.shotN[them]}, пасы ${this.passN[us]} против ${this.passN[them]}. ${title}.`
		};
	}
	emit(force) {
		if (this.simming) return;
		this.hudAcc += force ? 1 : .016;
		if (force || this.hudAcc > .1) {
			this.hudAcc = 0;
			this.onHud?.(this.snapshot());
		}
	}
	paint() {
		if (!this.ctx || this.cssW < 2 || this.cssH < 2) return;
		paintMatch(this.ctx, this.cssW, this.cssH, this);
	}
	pointerWorld(sx, sy) {
		const scale = this.cssH / Math.max(20, this.viewH);
		const x = (sx - this.cssW / 2) / scale + this.cam.x;
		const worldUp = (this.cssH * .52 - sy) / scale;
		return {
			x,
			y: this.userSide === 1 ? this.cam.y - worldUp : this.cam.y + worldUp
		};
	}
};
var COACHES = [
	{
		id: "ivanov",
		name: "Сергей Иванов",
		title: "Хозяин раздевалки",
		titleEn: "Dressing-room boss",
		rating: 68,
		story: "Держит состав до последнего тура и не меняет схему после одного плохого вечера.",
		storyEn: "Keeps the same side until the last matchday and does not rip up the shape after one bad night."
	},
	{
		id: "orlov",
		name: "Роман Орлов",
		title: "Тактик",
		titleEn: "Tactician",
		rating: 75,
		story: "Считает позиции важнее громких трансферов и требует, чтобы линия не разъезжалась.",
		storyEn: "Rates positions above headline signings and demands that the line stays compact."
	},
	{
		id: "volkova",
		name: "Дмитрий Волков",
		title: "Прессинг",
		titleEn: "Pressing coach",
		rating: 71,
		story: "Любит высокий отбор и короткий розыгрыш, но не прощает пустых рывков без паса.",
		storyEn: "Likes a high tackle and a short combination, but will not forgive empty runs without a pass."
	}
];
function coachCopy(card) {
	if (!card) return null;
	const live = COACHES.find((c) => c.id === card.id) ?? card;
	return {
		name: live.name,
		rating: live.rating,
		title: tr(live.title, live.titleEn || live.title),
		story: tr(live.story, live.storyEn || live.story)
	};
}
function playerValueBody(p) {
	const age = p.age <= 23 ? 8e6 : p.age >= 32 ? -6e6 : 0;
	const form = (p.form - 70) * 18e4;
	return Math.max(2e6, Math.round(p.ovr * p.ovr * 11e3 + age + form));
}
function playerValue(p) {
	return playerValueBody(p);
}
function wageOf(p) {
	return Math.max(8e4, Math.round(p.ovr * p.ovr * 95));
}
function formatRub(n, lang = getLang() === "en" ? "en" : "ru") {
	const v = Math.round(n);
	const sign = v < 0 ? "−" : "";
	const abs = Math.abs(v);
	if (lang === "en") {
		const minus = v < 0 ? "-" : "";
		if (abs >= 1e6) {
			const m = Math.round(abs / 1e6 * 10) / 10;
			return `${minus}$${String(m)}m`;
		}
		if (abs >= 1e3) return `${minus}$${Math.round(abs / 1e3)}k`;
		return `${minus}$${abs}`;
	}
	if (abs >= 1e6) {
		const m = Math.round(abs / 1e6 * 10) / 10;
		return `${sign}${String(m).replace(".", ",")} млн ₽`;
	}
	if (abs >= 1e3) return `${sign}${Math.round(abs / 1e3)} тыс. ₽`;
	return `${sign}${abs} ₽`;
}
function clampOvr(n) {
	return Math.max(50, Math.min(99, Math.round(n)));
}
function formLabel(form) {
	if (form >= 85) return tr("Отличная", "Excellent");
	if (form >= 75) return tr("Хорошая", "Good");
	if (form >= 60) return tr("Нормальная", "Normal");
	if (form >= 45) return tr("Спад", "Dip");
	return tr("Кризис", "Crisis");
}
function peopleOf(c, teamId) {
	return c.people.filter((p) => p.teamId === teamId).sort((a, b) => b.ovr - a.ovr || a.num - b.num);
}
function personById(c, id) {
	return c.people.find((p) => p.id === id);
}
function freshFromRoster(teamId) {
	return teamById(teamId).roster.map((p, i) => ({
		id: `${teamId}-${p.num}-${i}`,
		teamId,
		name: p.name,
		pos: p.pos,
		ovr: p.ovr,
		speed: p.speed,
		stamina: p.stamina,
		num: p.num,
		age: p.age ?? 24,
		form: 68 + (p.ovr + i) % 9,
		fitness: 92,
		goals: 0,
		apps: 0,
		created: false
	}));
}
function emptyPeople() {
	return TEAMS.flatMap((t) => freshFromRoster(t.id));
}
function pickLineup(people, teamId, formation, preferId) {
	const slots = FORMATIONS[formation] ?? FORMATIONS["4-3-3"];
	const pool = people.filter((p) => p.teamId === teamId).slice();
	const used = /* @__PURE__ */ new Set();
	const ids = [];
	if (preferId) {
		const me = pool.find((p) => p.id === preferId);
		const slotIndex = me ? slots.findIndex((s) => s.role === me.pos) : -1;
		if (me && slotIndex >= 0) {
			ids[slotIndex] = me.id;
			used.add(me.id);
		}
	}
	slots.forEach((slot, index) => {
		if (ids[index]) return;
		let best = null;
		let bestScore = -999;
		for (const p of pool) {
			if (used.has(p.id)) continue;
			const score = slotFit(p.pos, slot.role) * 10 + (p.pos === slot.role ? 8 : 0) + p.ovr / 20 + p.form / 80;
			if (score > bestScore) {
				bestScore = score;
				best = p;
			}
		}
		if (!best) return;
		used.add(best.id);
		ids[index] = best.id;
	});
	return ids.filter(Boolean);
}
function peopleFor(ids) {
	return ids.flatMap((id) => freshFromRoster(id));
}
function lineupFor(people, teamId, formation, preferId) {
	return pickLineup(people, teamId, formation, preferId);
}
function shellCareer(src) {
	return {
		v: 2,
		teamId: src.teamId,
		budget: src.budget,
		fixtures: [],
		people: src.people,
		lineup: src.lineup,
		formation: src.formation,
		trainsLeft: src.trainsLeft,
		createdId: "",
		season: 1,
		honours: []
	};
}
function seasonClubIds(teamId) {
	const ids = leagueIds(teamId);
	return ids.length >= 2 ? ids : TEAMS.map((t) => t.id);
}
function insertCreated(people, teamId, created) {
	const pos = created.pos === "GK" ? "CAM" : created.pos;
	const next = people.map((p) => ({ ...p }));
	const mine = next.filter((p) => p.teamId === teamId);
	const replaced = mine.filter((p) => p.pos === pos).sort((a, b) => a.ovr - b.ovr)[0] ?? [...mine].sort((a, b) => a.ovr - b.ovr)[0];
	if (!replaced) return next;
	const me = {
		id: "created-player",
		teamId,
		name: created.name.trim(),
		pos,
		ovr: 64,
		speed: pos === "ST" || pos === "LW" || pos === "RW" ? 78 : 72,
		stamina: 84,
		num: created.num,
		age: 21,
		form: 76,
		fitness: 100,
		goals: 0,
		apps: 0,
		created: true
	};
	const clash = next.find((p) => p.teamId === teamId && p.num === me.num && p.id !== replaced.id);
	if (clash) clash.num = replaced.num;
	const idx = next.findIndex((p) => p.id === replaced.id);
	next[idx] = me;
	return next;
}
function createCareer(teamId, created) {
	const people = insertCreated(emptyPeople(), teamId, created);
	const formation = "4-3-3";
	return {
		v: 2,
		teamId,
		budget: 95e6,
		fixtures: seasonFixtures(seasonClubIds(teamId)),
		people,
		lineup: pickLineup(people, teamId, formation, "created-player"),
		formation,
		trainsLeft: 2,
		createdId: "created-player",
		season: 1,
		honours: []
	};
}
function createManagerCareer(teamId, coachId) {
	const people = emptyPeople();
	const formation = "4-3-3";
	const coach = COACHES.find((c) => c.id === coachId) ?? COACHES[0];
	return {
		v: 2,
		teamId,
		budget: 14e7,
		fixtures: seasonFixtures(seasonClubIds(teamId)),
		people,
		lineup: pickLineup(people, teamId, formation),
		formation,
		trainsLeft: 2,
		createdId: "",
		season: 1,
		honours: [],
		coach
	};
}
function migrateLegacy(raw) {
	if (!raw.teamId || !Array.isArray(raw.fixtures)) return null;
	const people = emptyPeople();
	return {
		v: 2,
		teamId: raw.teamId,
		budget: raw.budget ?? 9e7,
		fixtures: raw.fixtures,
		people,
		lineup: pickLineup(people, raw.teamId, "4-3-3"),
		formation: "4-3-3",
		trainsLeft: 2,
		createdId: "",
		season: 1,
		honours: []
	};
}
function toRoster(c, teamId, lineup) {
	const squad = peopleOf(c, teamId);
	const mine = teamId === c.teamId;
	const shape = mine && FORMATIONS[c.formation] ? c.formation : clubShape(teamId, 1);
	const order = [...new Set(mine && lineup?.length ? lineup : pickLineup(c.people, teamId, shape))].map((id) => squad.find((p) => p.id === id)).filter((p) => Boolean(p));
	if (!order.some((p) => p.pos === "GK")) {
		const keeper = squad.find((p) => p.pos === "GK" && !order.some((q) => q.id === p.id));
		if (keeper) order.unshift(keeper);
	}
	const rest = squad.filter((p) => !order.some((q) => q.id === p.id)).sort((a, b) => b.fitness - a.fitness || b.ovr - a.ovr);
	return [...order.slice(0, 11), ...rest].slice(0, 18).map((p) => ({
		id: p.id,
		name: p.name,
		pos: p.pos,
		ovr: p.ovr,
		speed: p.speed,
		stamina: p.stamina,
		num: p.num,
		age: p.age,
		form: p.form,
		fitness: p.fitness
	}));
}
function careerLevel(c, opponentId, asPlayer) {
	const squad = squadOvr(c, c.teamId);
	const me = c.people.find((p) => p.id === c.createdId);
	if (asPlayer) {
		const mine = Math.round((me ? me.ovr * .6 + me.form * .4 : squad) * .75 + squad * .25);
		const theirs = squadOvr(c, opponentId);
		return {
			mine,
			theirs,
			diff: diffFromRatings(mine, theirs)
		};
	}
	const mine = coachRating(c.teamId);
	const theirs = coachRating(opponentId);
	return {
		mine,
		theirs,
		diff: diffFromRatings(mine, theirs)
	};
}
function squadOvr(c, teamId) {
	const xi = teamId === c.teamId ? c.lineup.map((id) => personById(c, id)).filter((p) => Boolean(p)) : peopleOf(c, teamId).slice(0, 11);
	if (!xi.length) return avgOvr(teamById(teamId));
	return Math.round(xi.reduce((s, p) => s + p.ovr + (p.form - 70) / 10, 0) / xi.length);
}
function setFormation(c, formation) {
	if (!FORMATIONS[formation]) return c;
	return {
		...c,
		formation,
		lineup: pickLineup(c.people, c.teamId, formation, c.createdId || void 0)
	};
}
function swapLineup(c, slotIndex, personId) {
	const incoming = personById(c, personId);
	if (!incoming || incoming.teamId !== c.teamId) return tr("Игрок не в клубе", "That player is not at the club");
	if (incoming.fitness < 40) return tr("Не готов: мало свежести", "Not ready: freshness is too low");
	const lineup = c.lineup.slice();
	const already = lineup.indexOf(personId);
	const slot = (FORMATIONS[c.formation] ?? FORMATIONS["4-3-3"])[slotIndex];
	if (!slot) return tr("Нет такой позиции", "No such position");
	if (slot.role === "GK" && incoming.pos !== "GK") return tr("В ворота только вратарь", "Only a goalkeeper plays in goal");
	if (slot.role !== "GK" && incoming.pos === "GK") return tr("Вратарь остаётся в воротах", "The goalkeeper stays in goal");
	if (already >= 0) {
		const displaced = lineup[slotIndex];
		lineup[slotIndex] = personId;
		if (displaced && displaced !== personId) lineup[already] = displaced;
	} else lineup[slotIndex] = personId;
	return {
		...c,
		lineup
	};
}
function train(c, id, kind) {
	if (c.trainsLeft <= 0) return tr("Тренировки на этот тур закончились", "No training left this round");
	const people = c.people.map((p) => ({ ...p }));
	const p = people.find((q) => q.id === id && q.teamId === c.teamId);
	if (!p) return tr("Нет такого игрока", "No such player");
	if (kind === "form") {
		p.form = Math.min(99, p.form + (p.created ? 10 : 8));
		p.fitness = Math.max(40, p.fitness - 4);
	} else if (kind === "fitness") p.fitness = Math.min(100, p.fitness + 16);
	else {
		if (p.fitness < 55) p.ovr = clampOvr(p.ovr - 1);
		else p.ovr = clampOvr(p.ovr + 1);
		p.form = Math.min(99, p.form + 3);
		p.fitness = Math.max(30, p.fitness - 6);
	}
	return {
		...c,
		people,
		trainsLeft: c.trainsLeft - 1
	};
}
function buyPlayer(c, id) {
	const people = c.people.map((p) => ({ ...p }));
	const p = people.find((q) => q.id === id);
	if (!p || p.teamId === c.teamId) return tr("Уже ваш", "Already yours");
	const price = playerValue(p);
	if (c.budget < price) return tr("Не хватает бюджета", "Not enough budget");
	if (peopleOf(c, c.teamId).length >= 22) return tr("В заявке максимум 22", "The squad is full at 22");
	const used = new Set(people.filter((q) => q.teamId === c.teamId).map((q) => q.num));
	p.teamId = c.teamId;
	if (used.has(p.num)) {
		for (let n = 1; n <= 99; n++) if (!used.has(n)) {
			p.num = n;
			break;
		}
	}
	return {
		...c,
		people,
		budget: c.budget - price
	};
}
function sellPlayer(c, id) {
	if (id === c.createdId) return tr("Себя продать нельзя", "You cannot sell yourself");
	const mine = peopleOf(c, c.teamId);
	if (mine.length <= 16) return tr("Нужно оставить хотя бы 16 игроков", "Keep at least 16 players");
	if (c.lineup.includes(id) && mine.length - 1 < 11) return tr("Сначала уберите из основы", "Take him out of the lineup first");
	const people = c.people.map((p) => ({ ...p }));
	const p = people.find((q) => q.id === id && q.teamId === c.teamId);
	if (!p) return tr("Нет такого игрока", "No such player");
	p.teamId = TEAMS.map((t) => t.id).filter((id2) => id2 !== c.teamId).slice().sort((a, b) => peopleOf({
		...c,
		people
	}, a).length - peopleOf({
		...c,
		people
	}, b).length)[0];
	let lineup = c.lineup.filter((x) => x !== id);
	if (lineup.length < 11) lineup = pickLineup(people, c.teamId, c.formation, c.createdId || void 0);
	const fee = Math.round(playerValue(p) * .82);
	return {
		...c,
		people,
		lineup,
		budget: c.budget + fee
	};
}
function applyScore(fixtures, index, hg, ag) {
	return fixtures.map((f, i) => i === index ? {
		...f,
		hg,
		ag
	} : f);
}
function simulateIndex(c, index) {
	const f = c.fixtures[index];
	if (!f || f.hg !== null) return c;
	const [hg, ag] = simOtherScore(squadOvr(c, f.home), squadOvr(c, f.away), index * 17 + f.home.length * 3);
	return closeIfDone({
		...c,
		fixtures: applyScore(c.fixtures, index, hg, ag)
	});
}
function simulateRoundExcept(c, round, skipIndex) {
	let next = c;
	c.fixtures.forEach((f, i) => {
		if (f.round === round && f.hg === null && i !== skipIndex) next = simulateIndex(next, i);
	});
	return next;
}
function recordUserMatch(c, index, hg, ag, scorerNames, fillRound = false) {
	const f = c.fixtures[index];
	if (!f || f.hg !== null) return c;
	let next = fillRound ? simulateRoundExcept(c, f.round, index) : c;
	next = {
		...next,
		fixtures: applyScore(next.fixtures, index, hg, ag)
	};
	const userHome = f.home === c.teamId;
	const gf = userHome ? hg : ag;
	const ga = userHome ? ag : hg;
	const win = gf > ga;
	const people = next.people.map((p) => ({ ...p }));
	const starters = new Set(next.lineup);
	for (const p of people) {
		if (p.teamId !== c.teamId) continue;
		if (starters.has(p.id)) {
			p.apps += 1;
			p.fitness = Math.max(35, p.fitness - 12);
			p.form = clampForm(p.form + (win ? 3 : gf === ga ? 0 : -3));
			if (p.apps % 5 === 0 && p.form >= 80) p.ovr = clampOvr(p.ovr + 1);
			if (p.apps % 5 === 0 && p.form <= 46) p.ovr = clampOvr(p.ovr - 1);
		} else {
			p.fitness = Math.min(100, p.fitness + 8);
			p.form = clampForm(p.form - 1);
		}
	}
	for (const name of scorerNames) {
		const scorer = people.find((p) => p.teamId === c.teamId && p.name === name);
		if (!scorer) continue;
		scorer.goals += 1;
		scorer.form = clampForm(scorer.form + (scorer.created ? 6 : 4));
		if (scorer.goals % 4 === 0) scorer.ovr = clampOvr(scorer.ovr + 1);
	}
	const me = people.find((p) => p.id === next.createdId);
	if (me && starters.has(me.id)) me.form = clampForm(me.form + (win ? 2 : 0));
	const wages = people.filter((p) => p.teamId === c.teamId).reduce((s, p) => s + wageOf(p), 0);
	const prize = win ? 35e5 : gf === ga ? 16e5 : 7e5;
	return closeIfDone({
		...next,
		people,
		budget: next.budget + prize - wages,
		trainsLeft: 2
	});
}
function clampForm(n) {
	return Math.max(32, Math.min(99, Math.round(n)));
}
function forfeitMatch(c, index) {
	const f = c.fixtures[index];
	if (!f || f.hg !== null) return c;
	const userHome = f.home === c.teamId;
	return recordUserMatch(c, index, userHome ? 0 : 3, userHome ? 3 : 0, []);
}
function firstOpenIndex(c) {
	return c.fixtures.findIndex((f) => f.hg === null);
}
function nextUserFixture(c) {
	const index = c.fixtures.findIndex((f) => (f.home === c.teamId || f.away === c.teamId) && f.hg === null);
	if (index < 0) return null;
	return {
		fixture: c.fixtures[index],
		index
	};
}
function isSeasonOver(c) {
	return c.fixtures.length > 0 && c.fixtures.every((f) => f.hg !== null && f.ag !== null);
}
function seasonRatingBump(place, size) {
	if (place === 1) return 2;
	if (place >= 2 && place <= 4) return 1;
	if (size >= 5 && place > size - 4) return -1;
	return 0;
}
function careerClosed(c) {
	return isSeasonOver(c) && (c.season > 0 ? c.season : 1) >= 10;
}
function ourPlace(c) {
	const index = tableOf(c.fixtures).findIndex((r) => r.id === c.teamId);
	return index < 0 ? null : index + 1;
}
function careerRecord(c) {
	const honours = c.honours ?? [];
	return {
		season: c.season > 0 ? c.season : 1,
		titles: honours.filter((h) => h.place === 1).length,
		podiums: honours.filter((h) => h.place >= 1 && h.place <= 3).length,
		wins: honours.reduce((sum, h) => sum + (h.w || 0), 0),
		honours
	};
}
function beginNextSeason(c) {
	if (!isSeasonOver(c)) return tr("Новый сезон откроется, когда все команды сыграют друг с другом", "A new season opens when every team has played every other team");
	if (careerClosed(c)) return tr("Десять сезонов позади. Начните карьерный путь заново.", "Ten seasons are behind you. Start the career path again.");
	const table = tableOf(c.fixtures);
	const index = table.findIndex((r) => r.id === c.teamId);
	const row = index >= 0 ? table[index] : void 0;
	const season = c.season > 0 ? c.season : 1;
	const place = index >= 0 ? index + 1 : table.length;
	const bump = seasonRatingBump(place, table.length);
	const honour = {
		season,
		place,
		pts: row?.pts ?? 0,
		w: row?.w ?? 0,
		d: row?.d ?? 0,
		l: row?.l ?? 0,
		gf: row?.gf ?? 0,
		ga: row?.ga ?? 0
	};
	const people = c.people.map((p) => {
		const age = p.age + 1;
		let ovr = p.ovr;
		if (age >= 34) ovr = clampOvr(ovr - 1);
		else if (age <= 23 && p.apps >= 10) ovr = clampOvr(ovr + 1);
		if (p.teamId === c.teamId && bump !== 0) ovr = clampOvr(ovr + bump);
		return {
			...p,
			age,
			ovr,
			wantsMove: false,
			fitness: Math.max(p.fitness, 90),
			form: clampForm(Math.round((p.form + 72) / 2))
		};
	});
	return normalizeCareer({
		...c,
		season: season + 1,
		honours: [...c.honours ?? [], honour],
		people,
		fixtures: seasonFixtures(seasonClubIds(c.teamId)),
		lineup: pickLineup(people, c.teamId, c.formation, c.createdId || void 0),
		trainsLeft: 2,
		bids: [],
		bidsSettled: false
	});
}
function championOf(c) {
	if (!isSeasonOver(c)) return null;
	const row = tableOf(c.fixtures)[0];
	if (!row) return null;
	return {
		id: row.id,
		pts: row.pts
	};
}
function simulateRest(c) {
	let next = c;
	c.fixtures.forEach((f, i) => {
		if (f.hg === null) next = simulateIndex(next, i);
	});
	return next;
}
function requestTransfer(c, id) {
	if (isSeasonOver(c)) return tr("Сезон закрыт: смотрите предложения клубов", "The season is over: look at the club offers");
	const people = c.people.map((p) => ({ ...p }));
	const p = people.find((q) => q.id === id && q.teamId === c.teamId);
	if (!p) return tr("Нет такого игрока", "No such player");
	p.wantsMove = !p.wantsMove;
	return {
		...c,
		people,
		bidsSettled: false
	};
}
function settleBids(c) {
	if (!isSeasonOver(c) || c.bidsSettled) return c;
	const clubs = TEAMS.map((t) => t.id).filter((id) => id !== c.teamId);
	const bids = [];
	c.people.forEach((p, i) => {
		if (p.teamId !== c.teamId || !p.wantsMove) return;
		const from = clubs[(p.ovr + i * 3) % clubs.length];
		if (!from) return;
		bids.push({
			personId: p.id,
			from,
			fee: Math.round(playerValue(p) * (p.created ? 1.2 : .92))
		});
	});
	return {
		...c,
		bids,
		bidsSettled: true
	};
}
function closeIfDone(c) {
	return isSeasonOver(c) ? settleBids(c) : c;
}
function acceptBid(c, personId) {
	const bid = (c.bids ?? []).find((b) => b.personId === personId);
	if (!bid) return tr("Нет предложения", "No offer");
	if (!isSeasonOver(c)) return tr("Переход только когда все команды сыграли друг с другом", "A move waits until every team has played every other team");
	const people = c.people.map((p) => ({ ...p }));
	const p = people.find((q) => q.id === personId && q.teamId === c.teamId);
	if (!p) return tr("Игрок уже ушёл", "That player has already left");
	p.teamId = bid.from;
	p.wantsMove = false;
	const movingSelf = p.created || p.id === c.createdId;
	let teamId = c.teamId;
	let lineup = c.lineup.filter((id) => id !== personId);
	if (movingSelf) {
		teamId = bid.from;
		lineup = pickLineup(people, teamId, c.formation, p.id);
	} else if (lineup.length < 11) lineup = pickLineup(people, teamId, c.formation, c.createdId || void 0);
	const bids = (c.bids ?? []).filter((b) => b.personId !== personId);
	const bonus = movingSelf ? Math.round(bid.fee * .12) : bid.fee;
	return {
		...c,
		people,
		teamId,
		lineup,
		bids,
		budget: c.budget + bonus
	};
}
function normalizeCareer(c) {
	let budget = c.budget;
	if (!Number.isFinite(budget)) budget = 1e8;
	if (budget < 5e5) budget = Math.round(budget * 25e4);
	const people = c.people.map((p) => ({
		...p,
		ovr: clampOvr(p.ovr),
		wantsMove: Boolean(p.wantsMove)
	}));
	const coach = c.coach ? COACHES.find((x) => x.id === c.coach?.id) ?? {
		...c.coach,
		rating: Math.min(75, c.coach.rating)
	} : void 0;
	const next = {
		...c,
		budget,
		people,
		coach,
		season: c.season > 0 ? c.season : 1,
		honours: cleanHonours(c.honours),
		bids: Array.isArray(c.bids) ? c.bids : [],
		bidsSettled: Boolean(c.bidsSettled)
	};
	return isSeasonOver(next) ? settleBids(next) : next;
}
function cleanHonours(raw) {
	if (!Array.isArray(raw)) return [];
	return raw.filter((h) => h && typeof h.season === "number" && typeof h.place === "number").map((h) => ({
		season: h.season,
		place: h.place,
		pts: h.pts || 0,
		w: h.w || 0,
		d: h.d || 0,
		l: h.l || 0,
		gf: h.gf || 0,
		ga: h.ga || 0
	}));
}
function pressFeed(c) {
	const table = tableOf(c.fixtures);
	const me = teamById(c.teamId);
	const out = [];
	const champ = championOf(c);
	const leader = table[0];
	const archive = careerRecord(c);
	const goalsWord = (n) => n === 1 ? tr("гол", "goal") : tr("гола", "goals");
	if (archive.honours.length) out.push({
		tag: tr("Архив", "Archive"),
		title: tr(`Сезон ${archive.season}: за спиной уже ${archive.honours.length} чемпионата`, `Season ${archive.season}: ${archive.honours.length} championships already behind you`),
		body: tr(`Титулов ${archive.titles}, пьедесталов ${archive.podiums}, побед в закрытых сезонах ${archive.wins}. Клубы игроков после трансферов не откатываются.`, `Titles ${archive.titles}, podiums ${archive.podiums}, wins in closed seasons ${archive.wins}. Clubs stay where transfers left them.`)
	});
	if (champ) {
		const club = teamById(champ.id);
		out.push({
			tag: tr("Кубок", "Trophy"),
			title: champ.id === c.teamId ? tr(`${me.name} поднимают кубок`, `${me.name} lift the trophy`) : tr(`Кубок уезжает к ${club.name}`, `The trophy goes to ${club.name}`),
			body: tr(`Сезон ${c.season > 0 ? c.season : 1} закрыт: каждая команда сыграла с каждой. ${club.name} — ${champ.pts} очков. Можно открыть новый сезон: состав, деньги и уже совершённые переходы останутся.`, `Season ${c.season > 0 ? c.season : 1} is closed: every team has played every other team. ${club.name} finish on ${champ.pts} points. A new season keeps the squad, the money and the moves already made.`)
		});
	} else if (leader) out.push({
		tag: tr("Таблица", "Table"),
		title: tr(`${teamById(leader.id).name} пока впереди`, `${teamById(leader.id).name} lead for now`),
		body: tr(`Кубок ещё никто не получает. Сначала все клубы должны сыграть друг с другом. Сейчас лидирует ${teamById(leader.id).name}: ${leader.pts} очков.`, `Nobody has the trophy yet. Every club must play every other club first. ${teamById(leader.id).name} lead on ${leader.pts} points.`)
	});
	const movers = c.people.filter((p) => p.teamId === c.teamId && p.wantsMove);
	if (movers.length) out.push({
		tag: tr("Трансферы", "Transfers"),
		title: tr("Запросы на уход ждут конца сезона", "Transfer requests wait for the end of the season"),
		body: tr(`${movers.map((p) => `${p.name} (${p.ovr})`).join(", ")} просят трансфер. Сменить клуб можно только когда календарь закрыт.`, `${movers.map((p) => `${p.name} (${p.ovr})`).join(", ")} want a move. A club can be changed only when the calendar is closed.`)
	});
	const scorers = [...c.people].filter((p) => p.goals > 0).sort((a, b) => b.goals - a.goals || b.ovr - a.ovr).slice(0, 4);
	for (const p of scorers) out.push({
		tag: tr("Игроки", "Players"),
		title: `${p.name} — ${p.goals} ${goalsWord(p.goals)}`,
		body: tr(`${teamById(p.teamId).name}. Рейтинг ${p.ovr} при потолке 99 и полу 50. Форма ${formLabel(p.form).toLowerCase()}, ${p.apps} матчей.`, `${teamById(p.teamId).name}. Rating ${p.ovr}, capped at 99 and floored at 50. Form ${formLabel(p.form).toLowerCase()}, ${p.apps} matches.`)
	});
	const hot = [...c.people].filter((p) => p.teamId === c.teamId).sort((a, b) => b.form - a.form)[0];
	const cold = [...c.people].filter((p) => p.teamId === c.teamId).sort((a, b) => a.form - b.form)[0];
	if (hot && cold && hot.id !== cold.id) out.push({
		tag: tr("Форма", "Form"),
		title: tr(`${hot.name} в ударе, ${cold.name} тускнеет`, `${hot.name} is sharp, ${cold.name} is fading`),
		body: tr(`Тренировки и протокол двигают рейтинг. У ${hot.name} форма ${hot.form} и рейтинг ${hot.ovr}. У ${cold.name} форма ${cold.form}: без минут и без работы оценка ползёт вниз.`, `Training and the match log move the rating. ${hot.name} is on ${hot.form} form and a ${hot.ovr} rating. ${cold.name} is on ${cold.form}: without minutes and without work the mark slides.`)
	});
	const played = c.fixtures.filter((f) => (f.home === c.teamId || f.away === c.teamId) && f.hg !== null).slice(-3).reverse();
	for (const f of played) {
		const home = teamById(f.home).name;
		const away = teamById(f.away).name;
		const winner = f.hg === f.ag ? "" : f.hg > f.ag ? home : away;
		out.push({
			tag: tr("Матч", "Match"),
			title: `${home} ${f.hg}:${f.ag} ${away}`,
			body: tr(`Тур ${f.round + 1}. ${f.hg === f.ag ? "Очки делят." : `${winner} забирают три очка.`}`, `Matchday ${f.round + 1}. ${f.hg === f.ag ? "The points are shared." : `${winner} take three points.`}`)
		});
	}
	if (!out.length) out.push({
		tag: tr("Лига", "League"),
		title: tr(`${me.name} открывают сезон`, `${me.name} open the season`),
		body: tr("Средний рейтинг в лиге около 60–70. Выше 99 не растут, ниже 50 не падают. Кубок — только в конце, когда все сыграли со всеми.", "League ratings sit around 60–70. Nobody grows past 99 or falls under 50. The trophy is given only at the end, when everyone has played everyone.")
	});
	return out.slice(0, 10);
}
var CREATE_ROLES = [
	"CB",
	"LB",
	"RB",
	"CDM",
	"CM",
	"CAM",
	"LW",
	"RW",
	"ST"
];
function CareerDesk({ career, onChange, onPlay, onMenu, onReset, onCreate, asPlayer = false }) {
	const [tab, setTab] = (0, import_react.useState)("home");
	const [note, setNote] = (0, import_react.useState)("");
	const [slot, setSlot] = (0, import_react.useState)(null);
	const me = teamById(career.teamId);
	const info = clubInfo(career.teamId);
	const created = personById(career, career.createdId);
	const table = tableOf(career.fixtures);
	function apply(result) {
		if (typeof result === "string") setNote(result);
		else {
			setNote("");
			onChange(result);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-5xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-mint",
					onClick: onMenu,
					children: tr("Меню", "Menu")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-fg/50",
					onClick: onReset,
					children: tr("Сбросить карьеру", "Reset career")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
					id: me.id,
					className: "h-14 w-14"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-mint uppercase",
						children: asPlayer ? tr("Карьера игрока", "Player career") : tr("Карьера тренера", "Manager career")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl uppercase",
						children: me.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/70",
						children: [
							tr("Сезон", "Season"),
							" ",
							career.season || 1,
							" · ",
							me.city,
							" · ",
							tr("бюджет", "budget"),
							" ",
							formatRub(career.budget),
							" · ",
							tr("зарплаты", "wages"),
							" ",
							formatRub(peopleOf(career, career.teamId).reduce((s, p) => s + wageOf(p), 0)),
							" / ",
							tr("тур", "round")
						]
					})
				] })]
			}),
			created && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-mint uppercase",
						children: tr("Ваш игрок", "Your player")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl uppercase",
						children: [
							created.name,
							" · ",
							created.pos,
							" · #",
							created.num
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/70",
						children: [
							tr("Форма", "Form"),
							" ",
							formLabel(created.form),
							" (",
							created.form,
							") · ",
							tr("свежесть", "freshness"),
							" ",
							created.fitness,
							" · OVR ",
							created.ovr,
							" · ",
							tr("голы", "goals"),
							" ",
							created.goals
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBar, { value: created.form })
				]
			}),
			!created && onCreate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-4 w-full",
				onClick: onCreate,
				children: tr("Создать своего игрока", "Create your player")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: [
					["home", tr("Обзор", "Overview")],
					["cup", tr("Турнир", "Competition")],
					["squad", tr("Состав", "Squad")],
					["market", tr("Трансферы", "Transfers")],
					["train", tr("Тренировка", "Training")],
					["calendar", tr("Календарь", "Calendar")],
					["press", tr("Пресса", "Press")],
					["save", tr("Сохранение", "Save")]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: tab === id ? "chip-on shrink-0" : "chip shrink-0",
					onClick: () => {
						setTab(id);
						setNote("");
					},
					children: label
				}, id))
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mint",
				children: note
			}),
			tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/70",
						children: [
							asPlayer ? tr("На поле бегаете только вы. Партнёры держат схему.", "On the pitch you run only as yourself. Teammates keep the shape.") : (() => {
								const coach = coachCopy(career.coach);
								return coach ? `${coach.name} · ${coach.title} · ${tr("рейтинг", "rating")} ${coach.rating}. ${coach.story}` : `${coachLabel(info.coach)} · ${tr("рейтинг тренера", "coach rating")} ${coachRating(career.teamId)} · ${styleLabel(info.style)}`;
							})(),
							" · ",
							me.stadium,
							" · ",
							tr("средний рейтинг", "average rating"),
							" ",
							squadOvr(career, career.teamId)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextActions, {
						career,
						onPlay,
						onApply: apply,
						onRetire: onReset,
						asPlayer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeagueTable, {
						table,
						mine: career.teamId
					})
				]
			}),
			tab === "cup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TournamentTab, { career }),
			tab === "squad" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquadTab, {
				career,
				slot,
				onSlot: setSlot,
				onApply: apply
			}),
			tab === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketTab, {
				career,
				onApply: apply,
				asPlayer
			}),
			tab === "train" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainTab, {
				career,
				onApply: apply,
				asPlayer
			}),
			tab === "calendar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarTab, {
				career,
				onApply: apply,
				onPlay
			}),
			tab === "press" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressTab, { career }),
			tab === "save" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveTab, {
				career,
				onSave: () => onChange(career)
			})
		]
	});
}
function NextActions({ career, onPlay, onApply, onRetire, asPlayer = false }) {
	const open = firstOpenIndex(career);
	if (open < 0) {
		const champ = championOf(career);
		const rec = careerRecord(career);
		const table = tableOf(career.fixtures);
		const place = table.findIndex((r) => r.id === career.teamId) + 1;
		const bump = place > 0 ? seasonRatingBump(place, table.length) : 0;
		const bumpText = bump > 0 ? tr(`За место средний рейтинг клуба +${bump}.`, `For the place, the club's average rating is +${bump}.`) : bump < 0 ? tr(`За место средний рейтинг клуба ${bump}.`, `For the place, the club's average rating is ${bump}.`) : "";
		if (careerClosed(career)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl uppercase text-mint",
					children: tr("Десять сезонов позади", "Ten seasons behind you")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/75",
					children: tr("Карьера пройдена до конца. Спасибо за путь. Сохранения этого режима закроются, когда начнёте заново.", "The career is complete. Thank you for the road. This mode's save closes when you start again.")
				}),
				champ && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm",
					children: [
						tr("Чемпион", "Champion"),
						": ",
						teamById(champ.id).name,
						" · ",
						champ.pts,
						" ",
						tr("очков", "points"),
						champ.id === career.teamId ? tr(" · кубок ваш", " · the trophy is yours") : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-fg/75",
					children: [
						tr("В архиве титулы", "In the archive: titles"),
						" ",
						rec.titles,
						", ",
						tr("пьедесталы", "podiums"),
						" ",
						rec.podiums,
						", ",
						tr("победы", "wins"),
						" ",
						rec.wins,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-main mt-3",
					onClick: onRetire,
					children: tr("Начать путь заново", "Start the path again")
				})
			]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl uppercase text-mint",
					children: [
						tr("Сезон", "Season"),
						" ",
						career.season || 1,
						" ",
						tr("завершён", "is over")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/70",
					children: tr("Все команды сыграли друг с другом. Кубок вручается только сейчас. Новый сезон сохранит состав, деньги, уже совершённые трансферы и статистику побед. Непринятые предложения лучше закрыть на вкладке «Трансферы» — после кнопки окно закроется.", "Every team has played every other team. The trophy is handed out only now. A new season keeps the squad, the money, completed transfers and the win record. Close unused offers on the Transfers tab — the window shuts after the button.")
				}),
				champ && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm",
					children: [
						tr("Чемпион", "Champion"),
						": ",
						teamById(champ.id).name,
						" · ",
						champ.pts,
						" ",
						tr("очков", "points"),
						champ.id === career.teamId ? tr(" · кубок ваш", " · the trophy is yours") : ""
					]
				}),
				bumpText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-mint",
					children: [
						bumpText,
						" ",
						tr("Прибавка ляжет на игроков вашего клуба в новом сезоне.", "The change lands on your club's players in the new season.")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-fg/75",
					children: [
						tr("В архиве уже титулы", "The archive already has titles"),
						" ",
						rec.titles,
						", ",
						tr("пьедесталы", "podiums"),
						" ",
						rec.podiums,
						", ",
						tr("победы", "wins"),
						" ",
						rec.wins,
						". ",
						tr("Этот сезон допишется туда при старте следующего.", "This season is written in when the next one starts.")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-main mt-3",
					onClick: () => onApply(beginNextSeason(career)),
					children: tr("Новый сезон", "New season")
				})
			]
		});
	}
	const fixture = career.fixtures[open];
	const user = fixture.home === career.teamId || fixture.away === career.teamId;
	const foeId = fixture.home === career.teamId ? fixture.away : fixture.home;
	const level = user ? careerLevel(career, foeId, asPlayer) : null;
	const label = {
		novice: tr("Новичок", "Novice"),
		amateur: tr("Любитель", "Amateur"),
		pro: tr("Профессионал", "Professional"),
		world: tr("Мировой класс", "World class"),
		legend: tr("Легенда Волги", "Volga legend")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-fg/70",
				children: [
					tr("Следующий по календарю", "Next on the calendar"),
					": ",
					teamById(fixture.home).name,
					" — ",
					teamById(fixture.away).name,
					level ? ` · ${asPlayer ? tr("рейтинг игрока", "player rating") : tr("рейтинг тренера и команды", "coach and club rating")} ${level.mine} ${tr("против", "vs")} ${level.theirs} · ${tr("сложность", "difficulty")} ${label[level.diff]}` : ""
				]
			}),
			user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-fg/80",
				children: [
					tr("Сводка: вы", "Briefing: you play"),
					" ",
					career.formation,
					". ",
					teamById(foeId).name,
					" ",
					tr("выходят", "line up"),
					" ",
					clubShape(foeId, open),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-main",
						onClick: onPlay,
						children: tr("Играть", "Play")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-ghost",
						onClick: () => onApply(simulateIndex(career, open)),
						children: tr("Симулировать", "Simulate")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-ghost",
						onClick: () => onApply(forfeitMatch(career, open)),
						children: tr("Техническое 0:3", "Walkover 0-3")
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-ghost",
					onClick: () => onApply(simulateIndex(career, open)),
					children: tr("Симулировать этот матч", "Simulate this match")
				})
			})
		]
	});
}
function FormBar({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-fg/15",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-mint",
			style: { width: `${Math.max(0, Math.min(100, value))}%` }
		})
	});
}
function LeagueTable({ table, mine }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "mt-5 w-full table-fixed text-left text-xs sm:text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "text-fg/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "w-[38%] py-2",
					children: tr("Клуб", "Club")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-center",
					children: tr("И", "P")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-center",
					children: tr("В", "W")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-center",
					children: tr("Н", "D")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-center",
					children: tr("П", "L")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-center",
					children: tr("М", "GD")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "text-center",
					children: tr("О", "Pts")
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: table.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: row.id === mine ? "bg-pitch/30" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "truncate py-2 pr-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-1 text-fg/40",
						children: i + 1
					}), teamById(row.id).name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "text-center tabular-nums",
					children: row.p
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "text-center tabular-nums",
					children: row.w
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "text-center tabular-nums",
					children: row.d
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "text-center tabular-nums",
					children: row.l
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: "text-center tabular-nums",
					children: [
						row.gf,
						":",
						row.ga
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "text-center font-display tabular-nums",
					children: row.pts
				})
			]
		}, row.id)) })]
	});
}
function SquadTab({ career, slot, onSlot, onApply }) {
	const slots = career.formation && FORMATION_IDS.includes(career.formation) ? career.lineup : career.lineup;
	const formationSlots = awaitForm(career.formation);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg/70",
				children: tr("Нажмите позицию в основе, затем игрока из заявки. Форма влияет на силу в матче.", "Tap a starting place, then a player from the squad. Form changes how strong he is in the match.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: FORMATION_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: career.formation === id ? "chip-on" : "chip",
					onClick: () => onApply(setFormation(career, id)),
					children: id
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2",
				children: formationSlots.map((role, i) => {
					const p = personById(career, slots[i] ?? "");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: slot === i ? "card card-on w-full text-left" : "card w-full text-left",
						onClick: () => onSlot(slot === i ? null : i),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-fg/50",
								children: role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 font-display uppercase",
								children: p ? `${p.num} ${p.name}` : tr("пусто", "empty")
							}),
							p?.created && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-xs text-mint",
								children: tr("вы", "you")
							}),
							p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-xs text-fg/60",
								children: [
									"OVR ",
									p.ovr,
									" · ",
									tr("форма", "form"),
									" ",
									formLabel(p.form),
									" · ",
									tr("свежесть", "freshness"),
									" ",
									p.fitness
								]
							})
						]
					}) }, `${role}-${i}`);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-5 text-sm tracking-widest uppercase text-fg/60",
				children: tr("Заявка", "Squad list")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: peopleOf(career, career.teamId).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "card w-full text-left",
					onClick: () => {
						if (slot === null) {
							onApply(tr("Сначала выберите позицию в основе", "Pick a starting place first"));
							return;
						}
						onApply(swapLineup(career, slot, p.id));
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerLine, { p })
				}) }, p.id))
			})
		]
	});
}
function awaitForm(formation) {
	const map = {
		"4-3-3": [
			"GK",
			"LB",
			"CB",
			"CB",
			"RB",
			"CM",
			"CM",
			"CAM",
			"LW",
			"ST",
			"RW"
		],
		"4-4-2": [
			"GK",
			"LB",
			"CB",
			"CB",
			"RB",
			"LM",
			"CM",
			"CM",
			"RM",
			"ST",
			"ST"
		],
		"3-5-2": [
			"GK",
			"CB",
			"CB",
			"CB",
			"LM",
			"CM",
			"CAM",
			"CM",
			"RM",
			"ST",
			"ST"
		],
		"4-2-3-1": [
			"GK",
			"LB",
			"CB",
			"CB",
			"RB",
			"CDM",
			"CDM",
			"LW",
			"CAM",
			"RW",
			"ST"
		]
	};
	return map[formation] ?? map["4-3-3"];
}
function PlayerLine({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display uppercase",
			children: [
				p.num,
				" ",
				p.name
			]
		}),
		p.created && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2 text-xs text-mint",
			children: tr("вы", "you")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mt-1 block text-xs text-fg/60",
			children: [
				p.pos,
				" · ",
				p.age,
				" ",
				tr("лет", "yrs"),
				" · OVR ",
				p.ovr,
				" · ",
				tr("скр", "pac"),
				" ",
				playerAttrs(p).speed,
				" · ",
				tr("точ", "acc"),
				" ",
				playerAttrs(p).accuracy,
				" · ",
				tr("жёст", "str"),
				" ",
				playerAttrs(p).hardness,
				" · ",
				tr("форма", "form"),
				" ",
				p.form,
				" · ",
				formatRub(playerValue(p)),
				" · ",
				tr("з/п", "wage"),
				" ",
				formatRub(wageOf(p)),
				p.wantsMove ? tr(" · просит трансфер", " · wants a move") : ""
			]
		})
	] });
}
function MarketTab({ career, onApply, asPlayer = false }) {
	const others = career.people.filter((p) => p.teamId !== career.teamId).sort((a, b) => playerValue(b) - playerValue(a)).slice(0, 24);
	const mine = peopleOf(career, career.teamId).filter((p) => asPlayer ? p.created : true);
	const bids = career.bids ?? [];
	const done = isSeasonOver(career);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4 grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg/70",
				children: tr("Запросить трансфер можно в любой момент. Уйти в другой клуб — только в конце сезона, когда все сыграли со всеми.", "You can request a transfer at any time. A move to another club waits until the end of the season, when everyone has played everyone.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-sm tracking-widest uppercase text-fg/60",
					children: asPlayer ? tr("Ваш запрос", "Your request") : tr("Запросы игроков", "Player requests")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-2",
					children: mine.map((p) => {
						const bid = bids.find((b) => b.personId === p.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "card flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerLine, { p })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-wrap gap-2",
								children: [!done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip shrink-0",
									onClick: () => onApply(requestTransfer(career, p.id)),
									children: p.wantsMove ? tr("Отозвать", "Withdraw") : tr("Запросить трансфер", "Request transfer")
								}), bid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "chip-on shrink-0",
									onClick: () => onApply(acceptBid(career, p.id)),
									children: [
										tr("В", "To"),
										" ",
										teamById(bid.from).name,
										" · ",
										formatRub(bid.fee)
									]
								})]
							})]
						}, p.id);
					})
				}),
				done && bids.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/60",
					children: tr("Запросов не было — предложений нет.", "There were no requests, so there are no offers.")
				})
			] }),
			!asPlayer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-sm tracking-widest uppercase text-fg/60",
				children: tr("Купить сейчас", "Buy now")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-display uppercase",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-fg/60",
							children: [
								teamById(p.teamId).name,
								" · ",
								p.pos,
								" · OVR ",
								p.ovr,
								" · ",
								formatRub(playerValue(p))
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "chip-on shrink-0",
						onClick: () => onApply(buyPlayer(career, p.id)),
						children: tr("Купить", "Buy")
					})]
				}, p.id))
			})] }),
			!asPlayer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-sm tracking-widest uppercase text-fg/60",
				children: tr("Продать сейчас", "Sell now")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: peopleOf(career, career.teamId).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerLine, { p })
					}), !p.created && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "chip shrink-0",
						onClick: () => onApply(sellPlayer(career, p.id)),
						children: tr("Продать", "Sell")
					})]
				}, p.id))
			})] })
		]
	});
}
function TrainTab({ career, onApply, asPlayer = false }) {
	const list = peopleOf(career, career.teamId).filter((p) => asPlayer ? p.created : true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-fg/70",
			children: [
				tr("Осталось занятий до матча", "Sessions left before the match"),
				": ",
				career.trainsLeft,
				". ",
				tr("Мастерство поднимает рейтинг, но на пустой свежести игрок сдаёт.", "Sharpness raises the rating, but a player with no freshness fades.")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-2",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerLine, { p }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBar, { value: p.form }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => onApply(train(career, p.id, "form")),
								children: tr("Форма", "Form")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => onApply(train(career, p.id, "fitness")),
								children: tr("Свежесть", "Freshness")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => onApply(train(career, p.id, "sharp")),
								children: tr("Мастерство", "Sharpness")
							})
						]
					})
				]
			}, p.id))
		})]
	});
}
function CalendarTab({ career, onApply, onPlay }) {
	const rounds = /* @__PURE__ */ new Map();
	career.fixtures.forEach((f, i) => {
		const list = rounds.get(f.round) ?? [];
		list.push({
			f,
			i
		});
		rounds.set(f.round, list);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-4 grid gap-3",
		children: [...rounds.entries()].map(([round, matches]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-display uppercase",
					children: [
						tr("Тур", "Matchday"),
						" ",
						round + 1
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: matches.map(({ f, i }) => {
					const open = firstOpenIndex(career);
					const user = f.home === career.teamId || f.away === career.teamId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center justify-between gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							teamById(f.home).name,
							" — ",
							teamById(f.away).name
						] }), f.hg !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								f.hg,
								":",
								f.ag
							]
						}) : i !== open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-fg/40",
							children: tr("по очереди", "in order")
						}) : user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip-on",
									onClick: onPlay,
									children: tr("Играть", "Play")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip",
									onClick: () => onApply(simulateIndex(career, i)),
									children: tr("Симулировать", "Simulate")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip",
									onClick: () => onApply(forfeitMatch(career, i)),
									children: tr("0:3", "0-3")
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "chip",
							onClick: () => onApply(simulateIndex(career, i)),
							children: tr("Симулировать", "Simulate")
						})]
					}, i);
				})
			})]
		}, round))
	});
}
function TournamentTab({ career }) {
	const table = tableOf(career.fixtures);
	const champ = championOf(career);
	const place = table.findIndex((r) => r.id === career.teamId) + 1;
	const row = table.find((r) => r.id === career.teamId);
	const scorers = peopleOf(career, career.teamId).filter((p) => p.goals > 0).sort((a, b) => b.goals - a.goals);
	const rec = careerRecord(career);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [
			champ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-gold uppercase",
						children: tr("Кубок лиги", "League trophy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-1 text-2xl uppercase",
						children: teamById(champ.id).name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/70",
						children: [
							champ.pts,
							" ",
							tr("очков. Чемпион назван, потому что все команды сыграли друг с другом.", "points. The champion is named because every team has played every other team."),
							champ.id === career.teamId ? tr(" Кубок ваш.", " The trophy is yours.") : ""
						]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg/70",
				children: tr("Победителя ещё нет. Кубок вручат только в конце сезона, когда каждая команда сыграет с каждой.", "There is no winner yet. The trophy is given only at the end of the season, when every team has played every other team.")
			}),
			row && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg/80",
				children: [
					tr("Сезон", "Season"),
					" ",
					career.season || 1,
					". ",
					teamById(career.teamId).name,
					": ",
					tr("место", "place"),
					" ",
					place,
					", ",
					tr("игры", "played"),
					" ",
					row.p,
					", ",
					tr("победы", "wins"),
					" ",
					row.w,
					", ",
					tr("ничьи", "draws"),
					" ",
					row.d,
					", ",
					tr("поражения", "losses"),
					" ",
					row.l,
					", ",
					tr("мячи", "goals"),
					" ",
					row.gf,
					":",
					row.ga,
					", ",
					tr("очки", "points"),
					" ",
					row.pts,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: [
					tr("За все закрытые сезоны: титулы", "Across closed seasons: titles"),
					" ",
					rec.titles,
					", ",
					tr("пьедесталы", "podiums"),
					" ",
					rec.podiums,
					", ",
					tr("победы", "wins"),
					" ",
					rec.wins,
					"."
				]
			}),
			rec.honours.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: rec.honours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card text-sm",
					children: [
						tr("Сезон", "Season"),
						" ",
						h.season,
						": ",
						h.place,
						tr("-е место", " place"),
						" · ",
						h.w,
						" ",
						tr("побед", "wins"),
						" · ",
						h.pts,
						" ",
						tr("очков", "points"),
						" · ",
						tr("мячи", "goals"),
						" ",
						h.gf,
						":",
						h.ga
					]
				}, `${h.season}-${h.place}-${h.pts}`))
			}),
			scorers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2",
				children: scorers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card text-sm",
					children: [
						p.name,
						" · ",
						p.goals,
						" ",
						tr("гол.", "goals"),
						" · ",
						tr("рейтинг", "rating"),
						" ",
						p.ovr
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeagueTable, {
				table,
				mine: career.teamId
			})
		]
	});
}
function PressTab({ career }) {
	const items = pressFeed(career);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-4 grid gap-3",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-widest text-mint uppercase",
					children: item.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-1 text-xl uppercase",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/75",
					children: item.body
				})
			]
		}, `${item.title}-${i}`))
	});
}
function SaveTab({ career, onSave }) {
	const [msg, setMsg] = (0, import_react.useState)("");
	const played = career.fixtures.filter((f) => f.hg !== null).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "card mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl uppercase",
				children: tr("Сохранение", "Save")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/75",
				children: tr("Прогресс этой карьеры пишется на устройство: календарь, деньги, состав, трансферы, пресса и архив сезонов. Новый сезон не стирает переходы. «Сбросить карьеру» стирает всё.", "This career is saved on the device: calendar, money, squad, transfers, press and the season archive. A new season does not wipe moves. Reset career wipes everything.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg/80",
				children: [
					tr("Сезон", "Season"),
					" ",
					career.season || 1,
					" · ",
					teamById(career.teamId).name,
					" · ",
					tr("бюджет", "budget"),
					" ",
					formatRub(career.budget),
					" · ",
					tr("сыграно", "played"),
					" ",
					played,
					" ",
					tr("из", "of"),
					" ",
					career.fixtures.length,
					". ",
					isSeasonOver(career) ? tr("Сезон закрыт — новый можно открыть на обзоре.", "The season is closed — a new one can be opened from Overview.") : tr("Сезон ещё идёт.", "The season is still going.")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-4",
				onClick: () => {
					onSave();
					setMsg(tr("Записано.", "Saved."));
				},
				children: tr("Записать прогресс", "Save progress")
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mint",
				children: msg
			})
		]
	});
}
function ClubBrowser({ teams, onBack, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-5xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Клубы лиги", "League clubs")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "card flex items-center gap-3 text-left",
					onClick: () => onOpen(t.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
						id: t.id,
						className: "h-14 w-14 shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display block text-lg uppercase",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-fg/70",
						children: [
							t.city,
							" · ",
							t.stadium,
							" · ",
							tr("рейтинг", "rating"),
							" ",
							clubRating(t.id)
						]
					})] })]
				}, t.id))
			})
		]
	});
}
function ClubPage({ id, onBack, onCareer }) {
	const t = teamById(id);
	const info = clubInfo(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-5xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
					id: t.id,
					className: "h-16 w-16"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl uppercase",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-fg/70",
					children: [
						t.city,
						" · ",
						tr("основан", "founded"),
						" ",
						info.founded
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "card text-sm",
					children: [
						tr("Стадион", "Stadium"),
						": ",
						t.stadium,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						tr("Вместимость", "Capacity"),
						": ",
						info.capacity.toLocaleString(tr("ru-RU", "en-US"))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "card text-sm",
					children: [
						tr("Тренер", "Coach"),
						": ",
						coachLabel(info.coach),
						" · ",
						tr("рейтинг", "rating"),
						" ",
						coachRating(id),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						tr("Стиль", "Style"),
						": ",
						styleLabel(info.style),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						tr("Средний рейтинг игроков", "Average player rating"),
						": ",
						clubRating(id)
					]
				})]
			}),
			onCareer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-4",
				onClick: onCareer,
				children: tr("Карьера за этот клуб", "Career at this club")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-5 text-sm tracking-widest uppercase text-fg/60",
				children: tr("Заявка", "Squad list")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: t.roster.map((p) => {
					const attrs = playerAttrs(p);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display uppercase",
							children: [
								p.num,
								" ",
								p.name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-xs text-fg/60",
							children: [
								p.pos,
								" · ",
								p.age ?? "—",
								" ",
								tr("лет", "yrs"),
								" · OVR ",
								p.ovr,
								" · ",
								tr("скорость", "pace"),
								" ",
								attrs.speed,
								" · ",
								tr("точность", "accuracy"),
								" ",
								attrs.accuracy,
								" · ",
								tr("жёсткость", "strength"),
								" ",
								attrs.hardness
							]
						})]
					}, `${p.num}-${p.name}`);
				})
			})
		]
	});
}
function CreatePlayer({ teamId, onBack, onDone }) {
	const [name, setName] = (0, import_react.useState)(tr("А. Волгин", "A. Volgin"));
	const [pos, setPos] = (0, import_react.useState)("CAM");
	const [num, setNum] = (0, import_react.useState)(10);
	const t = teamById(teamId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Ваш игрок", "Your player")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: [
					tr("Он попадёт в", "He joins"),
					" ",
					t.name,
					". ",
					tr("Форма начинается высокой и меняется от тренировок и матчей. Вратаря выбрать нельзя.", "Form starts high and changes with training and matches. A goalkeeper cannot be chosen.")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm text-fg/70",
				children: [tr("Имя", "Name"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-1 w-full rounded-2xl border border-fg/15 bg-card px-3 py-3 text-fg",
					value: name,
					maxLength: 22,
					onChange: (e) => setName(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: CREATE_ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: pos === r ? "chip-on" : "chip",
					onClick: () => setPos(r),
					children: r
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm text-fg/70",
				children: [tr("Номер", "Number"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-1 w-24 rounded-2xl border border-fg/15 bg-card px-3 py-3 text-fg",
					type: "number",
					min: 1,
					max: 99,
					value: num,
					onChange: (e) => setNum(Number(e.target.value) || 1)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-5",
				onClick: () => {
					const clean = name.trim();
					if (clean.length < 2 || pos === "GK") return;
					onDone({
						name: clean,
						pos,
						num: Math.max(1, Math.min(99, num))
					});
				},
				children: tr("Подписать контракт", "Sign the contract")
			})
		]
	});
}
function PlayerDesk(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerDesk, {
		...props,
		asPlayer: true
	});
}
function cardOf(league) {
	return seasonFixtures(teamsIn(league).map((t) => t.id)).filter((_, i) => i % 2 === 0).slice(0, 8);
}
var REF_LEAGUES = [
	"chuvash",
	"volga",
	"siberia"
];
function freshTable(league) {
	return seasonFixtures(teamsIn(league).map((t) => t.id));
}
function ensureTables(state) {
	const tables = { ...state.tables ?? {} };
	for (const id of REF_LEAGUES) if (!tables[id]?.length) tables[id] = freshTable(id);
	return {
		...state,
		tables
	};
}
function paintLeague(state, league, home, away, hg, ag, playedIndex) {
	const tables = { ...ensureTables(state).tables ?? {} };
	const list = (tables[league] ?? freshTable(league)).map((f) => ({ ...f }));
	const hit = list.find((f) => f.home === home && f.away === away && f.hg === null);
	if (hit) {
		hit.hg = hg;
		hit.ag = ag;
	}
	const round = hit?.round ?? list.find((f) => f.home === home && f.away === away)?.round ?? 0;
	const future = cardOf(league).slice(playedIndex + 1);
	const seed = state.matches * 19 + state.season * 7 + round * 3;
	for (let i = 0; i < list.length; i++) {
		const f = list[i];
		if (f.hg !== null || f.round > round) continue;
		if (future.some((a) => a.home === f.home && a.away === f.away)) continue;
		const [sh, sa] = simOtherScore(clubRating(f.home), clubRating(f.away), seed + i * 11);
		f.hg = sh;
		f.ag = sa;
	}
	tables[league] = list;
	return tables;
}
function backfillTables(state) {
	const next = ensureTables(state);
	const tables = { ...next.tables ?? {} };
	for (const id of REF_LEAGUES) {
		const board = id === next.league ? {
			results: next.results,
			nextIndex: next.nextIndex
		} : next.boards?.[id];
		if (!board?.results?.length) continue;
		const list = (tables[id] ?? freshTable(id)).map((f) => ({ ...f }));
		if (list.some((f) => f.hg !== null)) {
			tables[id] = list;
			continue;
		}
		const card = cardOf(id);
		board.results.forEach((row, i) => {
			const fx = card[i];
			if (!fx) return;
			const hit = list.find((f) => f.home === fx.home && f.away === fx.away && f.hg === null);
			if (hit) {
				hit.hg = row.hg;
				hit.ag = row.ag;
			}
		});
		const lastFx = card[board.results.length - 1];
		const round = lastFx ? list.find((f) => f.home === lastFx.home && f.away === lastFx.away)?.round ?? 0 : -1;
		if (round >= 0) {
			const future = card.slice(board.nextIndex ?? board.results.length);
			for (let i = 0; i < list.length; i++) {
				const f = list[i];
				if (f.hg !== null || f.round > round) continue;
				if (future.some((a) => a.home === f.home && a.away === f.away)) continue;
				const [sh, sa] = simOtherScore(clubRating(f.home), clubRating(f.away), 400 + i * 11 + round);
				f.hg = sh;
				f.ag = sa;
			}
		}
		tables[id] = list;
	}
	return {
		...next,
		tables
	};
}
function refTable(state, league) {
	return state.tables?.[league]?.length ? state.tables[league] : freshTable(league);
}
function createRef(name, league = "chuvash") {
	return ensureTables({
		v: 2,
		name: name.trim() || "А. Судейкин",
		rating: 62,
		matches: 0,
		correct: 0,
		wrong: 0,
		fouls: 0,
		yellows: 0,
		reds: 0,
		pens: 0,
		offsides: 0,
		nextIndex: 0,
		season: 1,
		seasonsDone: 0,
		league,
		results: [],
		boards: {},
		cup: buildRefCup(name)
	});
}
function reviveRef(data) {
	if (!data?.name || data.v != null && data.v !== 1 && data.v !== 2) return null;
	return backfillTables({
		v: 2,
		name: data.name,
		rating: Math.max(50, Math.min(99, data.rating ?? 62)),
		matches: data.matches ?? 0,
		correct: data.correct ?? 0,
		wrong: data.wrong ?? 0,
		fouls: data.fouls ?? 0,
		yellows: data.yellows ?? 0,
		reds: data.reds ?? 0,
		pens: data.pens ?? 0,
		offsides: data.offsides ?? 0,
		nextIndex: data.nextIndex ?? 0,
		season: data.season && data.season > 0 ? data.season : 1,
		seasonsDone: data.seasonsDone ?? 0,
		league: data.league === "volga" || data.league === "siberia" ? data.league : "chuvash",
		results: Array.isArray(data.results) ? data.results : [],
		boards: data.boards && typeof data.boards === "object" ? data.boards : {},
		cup: data.cup?.rounds?.length ? data.cup : buildRefCup(data.name),
		tables: data.tables
	});
}
function refRank(rating) {
	if (rating >= 88) return tr("Инспектор лиги", "League inspector");
	if (rating >= 78) return tr("Федеральный судья", "Federal referee");
	if (rating >= 68) return tr("Судья лиги", "League referee");
	if (rating >= 55) return tr("Ассистент", "Assistant");
	return tr("Стажёр", "Trainee");
}
function refFixture(index, league = "chuvash") {
	return cardOf(league)[index] ?? null;
}
function refCareerDone(state) {
	return !refFixture(state.nextIndex, state.league) && (state.season > 0 ? state.season : 1) >= 10;
}
function beginRefSeason(state) {
	if (refFixture(state.nextIndex, state.league)) return tr("Сезон ещё не закрыт: сначала отсудите назначения", "The season is not closed yet: referee the appointments first");
	if (refCareerDone(state)) return tr("Десять сезонов позади. Начните судейский путь заново.", "Ten seasons are behind you. Start the refereeing path again.");
	const tables = { ...ensureTables(state).tables ?? {} };
	tables[state.league] = freshTable(state.league);
	return {
		...state,
		season: (state.season > 0 ? state.season : 1) + 1,
		seasonsDone: (state.seasonsDone || 0) + 1,
		nextIndex: 0,
		results: [],
		tables
	};
}
function applyRefMatch(state, report, score) {
	const fx = refFixture(state.nextIndex, state.league);
	const rating = Math.max(50, Math.min(99, Math.round(state.rating + 1 + report.correct * 2 - report.wrong * 3)));
	const results = fx && score ? [...state.results, {
		home: fx.home,
		away: fx.away,
		hg: score.hg,
		ag: score.ag
	}] : state.results;
	const tables = fx && score ? paintLeague(state, state.league, fx.home, fx.away, score.hg, score.ag, state.nextIndex) : ensureTables(state).tables;
	return {
		...state,
		v: 2,
		rating,
		matches: state.matches + 1,
		correct: state.correct + report.correct,
		wrong: state.wrong + report.wrong,
		fouls: state.fouls + report.fouls,
		yellows: state.yellows + report.yellows,
		reds: state.reds + report.reds,
		pens: state.pens + report.pens,
		offsides: state.offsides + report.offsides,
		nextIndex: state.nextIndex + 1,
		results,
		tables
	};
}
function simulateRefMatch(state) {
	const fx = refFixture(state.nextIndex, state.league);
	if (!fx) return state;
	const seed = state.matches * 17 + state.rating;
	const [hg, ag] = simOtherScore(clubRating(fx.home), clubRating(fx.away), seed);
	return applyRefMatch(state, {
		correct: 4 + seed % 5,
		wrong: seed % 4 === 0 ? 2 : seed % 2,
		fouls: 10 + seed % 8,
		yellows: 2 + seed % 4,
		reds: seed % 5 === 0 ? 1 : 0,
		pens: seed % 3 === 0 ? 1 : 0,
		offsides: 1 + seed % 4
	}, {
		hg,
		ag
	});
}
function setRefLeague(state, league) {
	if (state.league === league) return state;
	const boards = { ...state.boards ?? {} };
	boards[state.league] = {
		nextIndex: state.nextIndex,
		results: state.results,
		season: state.season,
		seasonsDone: state.seasonsDone
	};
	const saved = boards[league];
	return {
		...state,
		league,
		boards,
		nextIndex: saved?.nextIndex ?? 0,
		results: saved?.results ?? [],
		season: saved?.season ?? 1,
		seasonsDone: saved?.seasonsDone ?? 0
	};
}
function refCupAssignment(state) {
	const round = state.cup.rounds[state.cup.round];
	if (!round || state.cup.champion) return null;
	const index = round.ties.findIndex((t) => t.away && t.hg === null);
	const tie = index >= 0 ? round.ties[index] : null;
	if (!tie?.away) return null;
	return {
		index,
		home: tie.home,
		away: tie.away,
		title: round.title
	};
}
function applyRefCup(state, index, report, score) {
	const rated = applyRefStats(state, report);
	const rounds = state.cup.rounds.map((round) => ({
		...round,
		ties: round.ties.map((tie) => ({ ...tie }))
	}));
	const round = rounds[state.cup.round];
	const tie = round?.ties[index];
	if (!round || !tie?.away || tie.hg !== null) return rated;
	const nextTie = finishRefTie(tie, score.hg, score.ag);
	round.ties[index] = nextTie;
	return advanceRefCup({
		...rated,
		cup: {
			...state.cup,
			rounds
		}
	});
}
function simulateRefCupOthers(state) {
	const rounds = state.cup.rounds.map((round) => ({
		...round,
		ties: round.ties.map((tie) => ({ ...tie }))
	}));
	const round = rounds[state.cup.round];
	if (!round) return state;
	const focus = round.ties.findIndex((t) => t.away && t.hg === null);
	round.ties = round.ties.map((tie, i) => {
		if (!tie.away || tie.hg !== null || i === focus) return tie;
		const [hg, ag] = simOtherScore(clubRating(tie.home), clubRating(tie.away), state.matches * 9 + i * 5 + state.cup.round);
		return finishRefTie(tie, hg, ag);
	});
	return advanceRefCup({
		...state,
		cup: {
			...state.cup,
			rounds
		}
	});
}
function applyRefStats(state, report) {
	const rating = Math.max(50, Math.min(99, Math.round(state.rating + 1 + report.correct * 2 - report.wrong * 3)));
	return {
		...state,
		v: 2,
		rating,
		matches: state.matches + 1,
		correct: state.correct + report.correct,
		wrong: state.wrong + report.wrong,
		fouls: state.fouls + report.fouls,
		yellows: state.yellows + report.yellows,
		reds: state.reds + report.reds,
		pens: state.pens + report.pens,
		offsides: state.offsides + report.offsides
	};
}
function finishRefTie(tie, hg, ag) {
	if (!tie.away) return tie;
	if (hg !== ag) return {
		...tie,
		hg,
		ag,
		ph: null,
		pa: null
	};
	const homeWins = clubRating(tie.home) >= clubRating(tie.away);
	return {
		...tie,
		hg,
		ag,
		ph: homeWins ? 5 : 4,
		pa: homeWins ? 4 : 5
	};
}
function refTieWinner(tie) {
	if (!tie.away) return tie.home;
	if (tie.hg === null || tie.ag === null) return null;
	if (tie.ph != null && tie.pa != null && tie.ph !== tie.pa) return tie.ph > tie.pa ? tie.home : tie.away;
	if (tie.hg === tie.ag) return null;
	return tie.hg > tie.ag ? tie.home : tie.away;
}
function advanceRefCup(state) {
	const round = state.cup.rounds[state.cup.round];
	if (!round || round.ties.some((t) => refTieWinner(t) === null)) return state;
	const winners = round.ties.map(refTieWinner).filter((id) => Boolean(id));
	if (winners.length <= 1) return {
		...state,
		cup: {
			...state.cup,
			champion: winners[0] ?? null
		}
	};
	const next = pairRefRound(winners, state.cup.round * 97 + winners.join("").length);
	return {
		...state,
		cup: {
			...state.cup,
			rounds: [...state.cup.rounds, next],
			round: state.cup.round + 1
		}
	};
}
function buildRefCup(name) {
	let seed = 2166136261;
	for (const ch of name) seed = Math.imul(seed ^ ch.charCodeAt(0), 16777619);
	return {
		round: 0,
		rounds: [pairRefRound(TEAMS.map((t) => t.id), seed >>> 0 || 1)],
		champion: null
	};
}
function pairRefRound(ids, seed) {
	const title = ids.length > 16 ? "Отборочный раунд" : ids.length > 8 ? "1/8 финала" : ids.length > 4 ? "1/4 финала" : ids.length > 2 ? "1/2 финала" : "Финал";
	const sorted = ids.slice().sort((a, b) => clubRating(b) - clubRating(a) || a.localeCompare(b));
	const byeN = ids.length > 16 ? ids.length - 16 : 0;
	const byes = sorted.slice(0, byeN);
	let play = sorted.slice(byeN);
	const mixed = [];
	for (let i = 0; i < play.length; i += 4) mixed.push(...mixIds(play.slice(i, i + 4), seed + i * 17));
	play = mixed;
	const ties = byes.map((home) => ({
		home,
		away: null,
		hg: 0,
		ag: 0,
		ph: null,
		pa: null
	}));
	if (play.length % 2 === 1) {
		ties.push({
			home: play[0],
			away: null,
			hg: 0,
			ag: 0,
			ph: null,
			pa: null
		});
		play = play.slice(1);
	}
	for (let i = 0; i < play.length; i += 2) ties.push({
		home: play[i],
		away: play[i + 1],
		hg: null,
		ag: null,
		ph: null,
		pa: null
	});
	return {
		title,
		ties
	};
}
function mixIds(list, seed) {
	const next = list.slice();
	let a = seed >>> 0;
	const roll = () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(roll() * (i + 1));
		const swap = next[i];
		next[i] = next[j];
		next[j] = swap;
	}
	return next;
}
function RefereeCreate({ onBack, onDone }) {
	const [name, setName] = (0, import_react.useState)(tr("А. Судейкин", "A. Sudeykin"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-4 text-3xl uppercase",
				children: tr("Карьера судьи", "Referee career")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Матч всегда две минуты: каждый тайм по одной. Штрафной и пенальти назначаются сами по правилам, от места фола. Вы показываете жёлтую, красную, офсайд, «не офсайд», фол или отсутствие фола. Верные решения поднимают категорию.", "A match is always two minutes: one minute each half. Free kicks and penalties are given by the laws, from the foul. You show yellow, red, offside, not offside, foul or no foul. Correct calls raise your grade.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm text-fg/70",
				children: [tr("Имя в протоколе", "Name on the teamsheet"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-1 w-full rounded-2xl border border-fg/15 bg-card px-3 py-3 text-fg",
					value: name,
					maxLength: 22,
					onChange: (e) => setName(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-5",
				onClick: () => onDone(name.trim() || tr("А. Судейкин", "A. Sudeykin")),
				children: tr("Начать судейство", "Start refereeing")
			})
		]
	});
}
function RefereeDesk({ state, onMatch, onCup, onSimulate, onMenu, onReset, onSave, onChange }) {
	const [tab, setTab] = (0, import_react.useState)("desk");
	const [msg, setMsg] = (0, import_react.useState)("");
	const fx = refFixture(state.nextIndex, state.league);
	const calls = state.correct + state.wrong;
	const accuracy = calls === 0 ? 0 : Math.round(state.correct / calls * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-3xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-mint",
					onClick: onMenu,
					children: tr("Меню", "Menu")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-fg/50",
					onClick: onReset,
					children: tr("Новая карьера", "New career")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-display text-xs tracking-widest text-gold uppercase",
				children: [
					tr("Судья", "Referee"),
					" · ",
					tr("сезон", "season"),
					" ",
					state.season || 1
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-3xl uppercase",
				children: state.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-fg/70",
				children: [
					refRank(state.rating),
					" · ",
					tr("рейтинг", "rating"),
					" ",
					state.rating,
					" · ",
					leagueTitle(state.league, true),
					" · ",
					tr("закрыто сезонов", "seasons closed"),
					" ",
					state.seasonsDone || 0
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-fg/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gold",
					style: { width: `${state.rating}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: [
					["desk", tr("Назначения", "Appointments")],
					["leagues", tr("Лиги", "Leagues")],
					["table", tr("Таблица", "Table")],
					["cup", tr("Кубок", "Cup")],
					["stats", tr("Статистика", "Stats")],
					["save", tr("Сохранение", "Save")]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: tab === id ? "chip-on shrink-0" : "chip shrink-0",
					onClick: () => setTab(id),
					children: label
				}, id))
			}),
			tab === "desk" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [fx ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "btn-main w-full",
					onClick: onMatch,
					children: [
						tr("Судить матч", "Referee match"),
						" ",
						state.nextIndex + 1,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block font-sans text-xs font-normal normal-case text-bg/80",
							children: [
								teamById(fx.home).name,
								" — ",
								teamById(fx.away).name
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-ghost",
					onClick: onSimulate,
					children: tr("Симулировать назначение", "Simulate the appointment")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl uppercase text-mint",
						children: refCareerDone(state) ? tr("Десять сезонов позади", "Ten seasons behind you") : tr("Назначения на сезон закрыты", "This season's appointments are closed")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg/70",
						children: refCareerDone(state) ? tr("Судейский путь пройден. Спасибо за десять сезонов. Начните карьеру заново — с чистого протокола.", "The refereeing path is complete. Thank you for ten seasons. Start the career again, with a clean record.") : tr("Личная статистика, рейтинг и число отсуженных матчей сохранятся. Список ниже начнётся заново.", "Your record, rating and matches refereed stay. The list below starts again.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-main mt-3",
						onClick: () => {
							if (refCareerDone(state)) {
								onReset();
								return;
							}
							const next = beginRefSeason(state);
							if (typeof next !== "string") onChange(next);
						},
						children: refCareerDone(state) ? tr("Начать путь заново", "Start the path again") : tr("Новый сезон", "New season")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-2",
				children: Array.from({ length: 8 }, (_, i) => refFixture(i, state.league)).map((item, i) => {
					if (!item) return null;
					const done = i < state.nextIndex;
					const score = state.results[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card flex items-center justify-between gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
								id: item.home,
								className: "h-8 w-8 shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate",
								children: [
									teamById(item.home).name,
									" — ",
									teamById(item.away).name
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-fg/50",
							children: score ? `${score.hg}:${score.ag}` : done ? tr("отсужен", "refereed") : i === state.nextIndex ? tr("сейчас", "now") : tr("впереди", "ahead")
						})]
					}, i);
				})
			})] }),
			tab === "leagues" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg/70",
					children: tr("Назначения меняются вместе с лигой. Рейтинг, карточки и точность остаются с вами.", "Appointments change with the league. Rating, cards and accuracy stay with you.")
				}), [
					"chuvash",
					"volga",
					"siberia"
				].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: state.league === id ? "card card-on text-left" : "card text-left",
					onClick: () => onChange(setRefLeague(state, id)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display uppercase",
						children: leagueTitle(id, true)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-fg/70",
						children: state.league === id ? tr("Сейчас судите здесь", "You referee here now") : tr("Перейти и судить эту лигу", "Switch and referee this league")
					})]
				}, id))]
			}),
			tab === "table" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefTables, { state }),
			tab === "cup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefCup, {
				state,
				onCup,
				onChange
			}),
			tab === "stats" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Сезон", "Season"),
						value: String(state.season || 1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Закрыто сезонов", "Seasons closed"),
						value: String(state.seasonsDone || 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Матчи", "Matches"),
						value: String(state.matches)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Верные решения", "Correct calls"),
						value: String(state.correct)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Ошибки", "Mistakes"),
						value: String(state.wrong)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Точность", "Accuracy"),
						value: calls ? `${accuracy}%` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Фолы", "Fouls"),
						value: String(state.fouls)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Жёлтые", "Yellows"),
						value: String(state.yellows)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Красные", "Reds"),
						value: String(state.reds)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Пенальти", "Penalties"),
						value: String(state.pens)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Офсайды", "Offsides"),
						value: String(state.offsides)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: tr("Категория", "Grade"),
						value: refRank(state.rating)
					})
				]
			}),
			tab === "save" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl uppercase",
						children: tr("Сохранение", "Save")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg/75",
						children: tr("Карьера судьи, рейтинг и личная статистика пишутся на это устройство. Новый сезон не обнуляет решения, карточки и категорию — только календарь назначений.", "The referee career, rating and personal record are saved on this device. A new season does not wipe calls, cards or grade — only the appointment calendar.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-main mt-4",
						onClick: () => {
							onSave();
							setMsg(tr("Записано.", "Saved."));
						},
						children: tr("Записать прогресс", "Save progress")
					}),
					msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mint",
						children: msg
					})
				]
			})
		]
	});
}
function RefTables({ state }) {
	const [league, setLeague] = (0, import_react.useState)(state.league);
	const rows = tableOf(refTable(state, league));
	const played = rows.reduce((sum, row) => sum + row.p, 0) / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg/70",
				children: tr("Таблицы трёх лиг. Можно смотреть, как идут клубы, не меняя лигу, которую вы судите. Ваши назначения входят в счёт, остальные матчи тура доигрываются сами.", "Tables of the three leagues. You can watch the clubs without changing the league you referee. Your appointments count, and the rest of the matchday is played out.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2 overflow-x-auto pb-1",
				children: [
					"chuvash",
					"volga",
					"siberia"
				].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: league === id ? "chip-on shrink-0" : "chip shrink-0",
					onClick: () => setLeague(id),
					children: leagueTitle(id)
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeagueTable, {
				table: rows,
				mine: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-fg/50",
				children: played === 0 ? tr("Сезон только начался: счёт появится после первого тура.", "The season has just started: the score appears after the first matchday.") : tr(`Сыграно матчей: ${played}`, `Matches played: ${played}`)
			})
		]
	});
}
function RefCup({ state, onCup, onChange }) {
	const round = state.cup.rounds[state.cup.round];
	const next = refCupAssignment(state);
	if (state.cup.champion) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-2xl uppercase text-mint",
			children: [
				tr("Кубок у", "The cup belongs to"),
				" ",
				teamById(state.cup.champion).name
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-fg/70",
			children: tr("Кубковые назначения закрыты. Лиговые матчи можно судить дальше.", "Cup appointments are closed. League matches can still be refereed.")
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs tracking-widest text-gold uppercase",
				children: round?.title ? tr(round.title, roundTitleEn(round.title)) : tr("Кубок", "Cup")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Отдельные матчи Кубка России. Длина та же: две минуты, тайм одну. Остальные пары можно не судить.", "Separate Russian Cup matches. Same length: two minutes, one each half. The other ties do not have to be refereed.")
			}),
			next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "btn-main mt-3 w-full",
				onClick: onCup,
				children: [tr("Судить кубок", "Referee the cup"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 block font-sans text-xs font-normal normal-case text-bg/80",
					children: [
						teamById(next.home).name,
						" — ",
						teamById(next.away).name
					]
				})]
			}),
			round?.ties.some((t) => t.away && t.hg === null && t !== round.ties[next?.index ?? -1]) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-ghost mt-2",
				onClick: () => onChange(simulateRefCupOthers(state)),
				children: tr("Симулировать остальные пары", "Simulate the other ties")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2",
				children: round?.ties.map((tie, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card flex items-center justify-between gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
							id: tie.home,
							className: "h-8 w-8 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate",
							children: [teamById(tie.home).name, tie.away ? ` — ${teamById(tie.away).name}` : tr(" · без игры", " · bye")]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-fg/50",
						children: !tie.away ? tr("проход", "through") : tie.hg === null ? i === next?.index ? tr("сейчас", "now") : tr("впереди", "ahead") : `${tie.hg}:${tie.ag}${tie.ph != null ? ` ${tr("пен.", "pens")} ${tie.ph}:${tie.pa}` : ""}`
					})]
				}, `${tie.home}-${tie.away}-${i}`))
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "card flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-fg/70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display uppercase",
			children: value
		})]
	});
}
function roundTitleEn(title) {
	if (title.includes("Отбороч")) return "Preliminary round";
	if (title.includes("1/8")) return "Round of 16";
	if (title.includes("1/4")) return "Quarter-final";
	if (title.includes("1/2")) return "Semi-final";
	if (title.includes("Финал")) return "Final";
	return title;
}
var STORY_EN = {
	"Двор": "The yard",
	"Провинциальный городок, фонарь у гаражей": "A provincial town, a lamp by the garages",
	"Дед Иван": "Grandad Ivan",
	"Вася, этот двор уже двадцать лет ждёт, что фамилия Ивановых дослушает свисток до конца. Я не дослушал. Отец твой тоже.": "Vasya, this yard has waited twenty years for the Ivanovs to hear a whistle out. I did not. Neither did your father.",
	"Вася": "Vasya",
	"Все так и говорят: Ивановы умеют только начинать. Глеб Волков уже в основе, а я бью по пустым воротам.": "Everyone says it: the Ivanovs only know how to start. Gleb Volkov is already in the side, and I am shooting at an empty goal.",
	"Глеб": "Gleb",
	"Пустые ворота тебя не освищут. Стадион — освищет. Не путай двор с лигой.": "An empty goal will not boo you. A stadium will. Do not mix the yard up with a league.",
	"Аня": "Anya",
	"Глеб, ты быстрый. Но ты не из нашей кухни. Вася, если подпишешь, я буду на каждом матче, даже если отец запретит.": "Gleb, you are quick. But you are not from our kitchen. Vasya, if you sign, I will be at every match, even if father forbids it.",
	"Я не уеду в середине сезона. И не брошу, если таблица станет некрасивой. Сегодня я забираю это место.": "I will not leave in the middle of a season. And I will not quit if the table turns ugly. Today I take this place.",
	"Кухня": "The kitchen",
	"Дом Ивановых, поздно": "The Ivanov house, late",
	"Отец": "Father",
	"Сергей Иванов, бывший полузащитник, ныне человек, который выключает трансляции. Слышишь? Не ходи туда. Городок смеётся один раз, потом привыкает.": "Sergei Ivanov, once a midfielder, now a man who switches broadcasts off. Do you hear? Do not go there. The town laughs once, then it gets used to it.",
	"Ты ушёл, потому что стало стыдно. Я ещё не начинал стыдиться.": "You left because you were ashamed. I have not started being ashamed yet.",
	"Я ушёл, потому что дед обещал нам чемпионство, а привёз домой тишину. Не обещай Ане то, чего нет в календаре.": "I left because grandad promised us a title and brought home silence. Do not promise Anya what is not in the calendar.",
	"Он ничего не обещал. Он сказал, что доиграет. Это другое слово.": "He promised nothing. He said he would see the season out. That is a different word.",
	"Серёжа, мальчик имеет право на свою ошибку. Нашу он уже видел.": "Seryozha, the boy has a right to his own mistake. He has already seen ours.",
	"Я доиграю сезон здесь. Если место будет первое, второе или третье — мы это заслужили. Если ниже — я не стану делать вид, что кубок у нас в шкафу.": "I will finish the season here. If we are first, second or third, we earned it. If we are lower, I will not pretend the trophy is in our cupboard.",
	"Контракт": "The contract",
	"Кабинет над раздевалкой": "The office above the dressing room",
	"Михаил": "Mikhail",
	"Я ваш агент на этот год. Никаких сказок про большие клубы, пока вас не выпускают на табло.": "I am your agent for this year. No fairy tales about big clubs until they put you on the board.",
	"Тренер": "Coach",
	"Иванов, Волков мне понятен. Ты — риск с тяжёлой фамилией. Ошибаешься в выборе позиции, и сядешь так, что двор этого не увидит.": "Ivanov, Volkov I understand. You are a risk with a heavy surname. Pick the wrong position and you will sit so deep the yard will not see it.",
	"Мне не нужна речь. Дайте минуты и не продавайте меня, пока сезон не закрыт.": "I do not need a speech. Give me minutes and do not sell me before the season is closed.",
	"Минуты ещё надо отнять. Я не буду тебе ассистировать из жалости.": "Minutes still have to be taken. I will not assist you out of pity.",
	"Первый матч. Выйдешь. Дед на трибуне — его забота, не моя. Твоя забота — не спрятаться.": "First match. You start. Grandad in the stand is his business, not mine. Yours is not to hide.",
	"Дебют": "The debut",
	"Первый официальный матч. Управляете только Васей. Гол, ошибка и тишина после свистка останутся в истории, а не в речи тренера.": "The first official match. You control only Vasya. A goal, a mistake and the quiet after the whistle stay in the story, not in the coach's speech.",
	"Коридор": "The corridor",
	"Под трибуной, мокрый бетон": "Under the stand, wet concrete",
	"Один матч ничего не пишет на кубке. Волков надёжнее. Ещё такой вечер — и ты смотришь следующий тур в куртке.": "One match writes nothing on a trophy. Volkov is safer. Another night like this and you watch the next round in a coat.",
	"Заметьте меня по игре, не по тому, что обо мне напишет город.": "Notice me for the way I play, not for what the town will write about me.",
	"Отец был на стадионе. Он ушёл до финального свистка. Сказал, что уже видел этот фильм.": "Father was at the ground. He left before the final whistle. He said he had already seen this film.",
	"Я видел, как ты открылся. И видел, как ты оглянулся на трибуну. Игроки, которые оглядываются, не заканчивают сезоны.": "I saw you make the run. And I saw you look back at the stand. Players who look back do not finish seasons.",
	"Из большого города уже звонили. Я сказал: он никуда не едет, пока не доиграет с этими людьми.": "A big city has already called. I said he is not going anywhere until he finishes with these people.",
	"Доиграй хотя бы со мной. Пока ты соперник в своей раздевалке, городу на нас плевать.": "At least finish it with me. While you are a rival in your own dressing room, the town does not care about us.",
	"Второй шанс": "A second chance",
	"Тренер снова ставит вас в старт. Форма Васи растёт от голов и падает от пустых вечеров.": "The coach starts you again. Vasya's form rises with goals and falls on empty nights.",
	"Ночной звонок": "The night call",
	"Общага у манежа": "A hostel by the training pitch",
	"Есть бумага. Чужой клуб, нормальные деньги, выезд на следующей неделе. Отец просил передать: уезжай, не повторяй его.": "There is paper. Another club, decent money, travel next week. Father asked me to pass it on: leave, do not repeat him.",
	"Вася, я не умею болеть за своих. Я умею уходить, пока не стало поздно. Возьми контракт.": "Vasya, I do not know how to support my own. I know how to leave before it is too late. Take the contract.",
	"Человек, который бежит в октябре, не имеет права исчезать в мае. Сезон закрывают те, кто остаётся, когда таблица врёт и когда она говорит правду.": "A man who runs in October has no right to vanish in May. A season is closed by those who stay when the table lies and when it tells the truth.",
	"Михаил, положи бумагу в ящик. Я запрошу трансфер, если захочу, только когда все сыграют со всеми. Не раньше.": "Mikhail, put the paper in the drawer. I will ask for a transfer if I want one, only when everyone has played everyone. Not before.",
	"Я скажу отцу, что ты отказался. Пусть в этот раз дослушает сам.": "I will tell father you refused. This time let him hear the whistle himself.",
	"Раздевалка": "The dressing room",
	"После ничьей, которую никто не празднует": "After a draw nobody celebrates",
	"Ты взял удар на себя, хотя я был свободнее. Это не характер. Это страх отдать пас фамилии Волкова.": "You took the shot yourself, though I was freer. That is not character. That is fear of passing to the name Volkov.",
	"А ты отдал назад, хотя я уже был в штрафной. Мы оба играем против призраков, Глеб.": "And you played it back, though I was already in the box. We are both playing against ghosts, Gleb.",
	"Хватит. Городок и так ждёт, кто из вас сломается первым. Не делайте ему это одолжение в собственной раздевалке.": "Enough. The town is already waiting to see which of you breaks first. Do not do it that favour in your own dressing room.",
	"Завтра вы оба в основе. Не друзья. Партнёры. Если сорвётесь ещё раз, я сниму обоих, и сезон доиграет молодёжка.": "Tomorrow you both start. Not friends. Partners. Lose it again and I drop you both, and the youth side finishes the season.",
	"Ладно. Бежишь в штрафную — я отдам. Один раз. Потом посмотрим, кто ты без деда на трибуне.": "Fine. You run into the box — I will pass. Once. Then we will see who you are without grandad in the stand.",
	"Один раз мне хватит, чтобы не ненавидеть тебя до конца календаря.": "Once is enough for me not to hate you until the end of the calendar.",
	"Рывок": "The push",
	"Середина сезона. Очки Васи остаются в протоколе. Кубка ещё нет: его не раздают, пока кто-то не сыграл.": "Mid-season. Vasya's points stay on the sheet. There is no trophy yet: it is not handed out while someone has not played.",
	"Канун": "The eve",
	"Пустой стадион накануне развязки": "An empty ground the night before the ending",
	"Этот матч ничего вам не обещает. Победа не печатает чемпионство. Поражение не вычёркивает сезон. После свистка календарь доиграют остальные туры — честно, без подтасовки таблицы.": "This match promises you nothing. A win does not print a title. A defeat does not cross out the season. After the whistle the rest of the calendar is played honestly, with no fixed table.",
	"Когда все клубы сыграют друг с другом, место будет видно. Первое, второе, третье — можно смотреть людям в глаза. Ниже — нет медали, и я не буду её рисовать.": "When every club has played every other club, the place will be plain. First, second, third — you can look people in the eye. Below that there is no medal, and I will not draw one.",
	"Я пришёл до свистка. Не проси меня кричать. Просто не прячься, если станет плохо.": "I came before the whistle. Do not ask me to shout. Just do not hide if it turns bad.",
	"Я могу не достоять весь матч. Не оглядывайся проверять. Если я уйду в туннель, это возраст, не приговор.": "I may not stand the whole match. Do not look back to check. If I go into the tunnel, that is age, not a verdict.",
	"Мы будем там все. Даже если городок решит, что Ивановым снова рано.": "We will all be there. Even if the town decides it is too early for the Ivanovs again.",
	"Бери мяч. Я закрою край. Сегодня мы не двор и не сплетня.": "Take the ball. I will cover the flank. Tonight we are not a yard and not a rumour.",
	"Тогда играем до конца. Место пусть назовёт таблица, не я.": "Then we play to the end. Let the table name the place, not me.",
	"Развязка": "The ending",
	"Матч идёт в таблицу как есть: победа, ничья или поражение. Потом сезон доигрывается сам. Финал истории зависит от места, а не от одной речи.": "The match goes into the table as it is: win, draw or loss. Then the season plays itself out. The ending depends on the place, not on one speech.",
	"Золотой свисток": "The golden whistle",
	"Поле после чемпионского круга": "The pitch after the champions' lap",
	"Иванов, ты начал сезон как риск с тяжёлой фамилией. Таблица закрыта, все сыграли со всеми, и кубок лиги стоит здесь. Не потому что я так решил. Потому что очков больше нет ни у кого.": "Ivanov, you started the season as a risk with a heavy surname. The table is closed, everyone has played everyone, and the league trophy is here. Not because I decided so. Because nobody has more points.",
	"Я хотел быть первым, кто тебя обойдёт. Сегодня городок стоит из-за тебя. В следующем сезоне я снова попробую. Сегодня — твоё золото.": "I wanted to be the first to get past you. Tonight the town is standing because of you. Next season I will try again. Tonight the gold is yours.",
	"Я уходил, чтобы надо мной не смеялись. Теперь они встают. Я не знаю, что с этим делать, Вася. Я просто не уйду раньше свистка в следующий раз.": "I used to leave so they would not laugh at me. Now they stand up. I do not know what to do with that, Vasya. Next time I simply will not leave before the whistle.",
	"Вот теперь фамилия держится до конца, а не до первой неудачи. Я достоял. Слышишь? Достоял.": "Now the name holds to the end, not to the first setback. I stayed. Do you hear? I stayed.",
	"Не оставляй мяч в том дворе. И не делай вид, что это был только ты. Глеб бежал. Отец вернулся. Дед не сел.": "Do not leave the ball in that yard. And do not pretend it was only you. Gleb ran. Father came back. Grandad did not sit down.",
	"Предложения я сложу в тот же ящик. Уйти можно будет только если сам попросишь в конце следующего сезона. Переходы, которые уже случились, никуда не денутся.": "I will put the offers in the same drawer. You can leave only if you ask yourself at the end of next season. Moves that have already happened will not be undone.",
	"Мы взяли лигу. Не я один. Золото настоящее, потому что календарь не соврали. Можно начинать новый сезон: победы этого года останутся в статистике.": "We took the league. Not me alone. The gold is real because the calendar did not lie. A new season can start: this year's wins stay in the record.",
	"Серебро на ладони": "Silver in the palm",
	"Раздевалка, форму ещё не сняли": "The dressing room, kits still on",
	"Второе место. Не чемпионство и не анекдот, которым городок пугал Ивановых. Серебро весит. Его не стыдно принести домой.": "Second place. Not a title, and not the joke the town used to scare the Ivanovs with. Silver has weight. There is no shame in taking it home.",
	"Я злился весь год, что ты оказался не слабее. Сегодня злость короче медали. В следующем сезоне я заберу у тебя это серебро и попробую на золото.": "I was angry all year that you were not weaker. Tonight the anger is shorter than the medal. Next season I will take this silver off you and try for gold.",
	"Второе — не провал. Это обещание, которое не пришлось выдумывать. Я смотрел до конца. Мне было страшно. Я всё равно смотрел.": "Second is not a failure. It is a promise nobody had to invent. I watched to the end. I was afraid. I watched anyway.",
	"Я хотел кубок. Я получил внука, который не сбежал, когда стало ясно, что первого места может не быть. Это тоже золото, только другого сплава.": "I wanted the trophy. I got a grandson who did not run when it became clear first place might not happen. That is gold too, only a different alloy.",
	"Сфотографируй медаль, пока руки не дрожат. Потом начнём год заново. Состав, в котором вы доиграли, пусть останется тем, чем его сделали трансферы.": "Photograph the medal before your hands shake. Then we start the year again. The side you finished with should stay what the transfers made it.",
	"Мы не чемпионы. Мы и не те Ивановы, которые уходят в октябре. Серебро — счастливый финал для двора, которому обещали пустоту. Новый сезон я начинаю отсюда.": "We are not champions. We are also not the Ivanovs who leave in October. Silver is a happy ending for a yard that was promised emptiness. I start the new season from here.",
	"Бронза": "Bronze",
	"Туннель, свет ещё не выключили": "The tunnel, the lights still on",
	"Третье. Пьедестал узкий, фотография существует. Предложения будут. Я их не подпишу, пока ты сам не скажешь в конце следующего лета.": "Third. The podium is narrow, the photograph exists. Offers will come. I will not sign them until you say so yourself at the end of next summer.",
	"Бронза не кормит газеты так, как золото. Зато она честная: все клубы сыграли, и вы остались в первой тройке. Мне этого хватает, чтобы назвать сезон удачным.": "Bronze does not feed the papers the way gold does. But it is honest: every club played, and you stayed in the top three. That is enough for me to call the season a good one.",
	"Я хотел выше. Ты тоже. Мы не дотянули до серебра и не провалились в середину. Завтра я снова буду спорить с тобой в раздевалке. Сегодня можно помолчать.": "I wanted higher. So did you. We did not reach silver and we did not fall into the middle. Tomorrow I will argue with you in the dressing room again. Tonight we can be quiet.",
	"Третье место — это когда городок не смеётся и не орёт. Он просто кивает. Я всю жизнь ждал либо крика, либо тишины. Кивок оказался лучше.": "Third place is when the town neither laughs nor roars. It just nods. All my life I waited for either a shout or a silence. A nod turned out better.",
	"Положи бронзу на кухонный стол. Пусть стоит, пока мы не вырастем до чего-то тяжелее. Я не называю это неудачей. Я называю это финалом, который можно пережить.": "Put the bronze on the kitchen table. Let it stand until we grow into something heavier. I do not call this a failure. I call it an ending you can live through.",
	"Счастливый конец бывает не только с кубком над головой. Бывает с медалью в кармане и с отцом, который не ушёл.": "A happy ending is not only a trophy over your head. It can be a medal in a pocket and a father who did not leave.",
	"Я дослушал свисток. Третье место — наш счастливый финал. Победы этого сезона запишутся. Трансферы тоже. Новый круг начнётся с того состава, который есть, а не с того, который был в августе.": "I heard the whistle out. Third place is our happy ending. This season's wins will be written down. So will the transfers. The next lap starts with the squad that exists, not the one from August.",
	"место ниже тройки": "a place outside the top three",
	"Пустая полка": "The empty shelf",
	"Ночной автобус со стадиона": "The night bus from the ground",
	"Лига нам ничего не должна. Я бежал. Ты бежал. Этого не хватило на пьедестал. Ненавижу этот счёт, но он настоящий.": "The league owes us nothing. I ran. You ran. It was not enough for a podium. I hate this score, but it is real.",
	"Жалость в газету не кладут. Клубы, которые уже купили наших, не вернут людей назад. Статистика побед тоже не сотрётся. Сотрётся только ощущение, что этот год кончился хорошо.": "Pity does not go in the paper. Clubs that already bought our players will not send them back. The win record will not be wiped either. Only the feeling that this year ended well.",
	"Вот эта ночь. Та, из которой я всю жизнь уходил. Ты в ней остался. Мне от этого не легче смотреть на пустую полку, но я хотя бы сижу рядом.": "This is the night. The one I spent my life leaving. You stayed in it. That does not make the empty shelf easier to look at, but at least I am sitting next to you.",
	"Я хотел кубок. Я увидел, как ты доиграл. Это не счастливый финал, Вася. Не ври себе, что четвёртое и ниже — тоже медаль. Не ври и что жизнь кончилась на этой остановке.": "I wanted the trophy. I saw you play it out. This is not a happy ending, Vasya. Do not lie to yourself that fourth and below is a medal too. And do not lie that life ended at this stop.",
	"Можно начать всё заново. Городок никуда не денется. Игроки, которые перешли, останутся там, куда перешли. Победы, которые уже были, останутся в архиве. Просто этот сезон мы не празднуем.": "We can start again. The town is not going anywhere. Players who moved will stay where they moved. Wins that already happened stay in the archive. We just do not celebrate this season.",
	"Я не назову это трофеем. Мы ниже первых трёх, и финал неудачный. Но я не брошу календарь на половине. Начнём сезон снова — с теми же переходами и с той статистикой, которую уже заслужили. В этот раз я хочу достоять до медали.": "I will not call this a trophy. We are below the top three, and the ending is a bad one. But I will not drop the calendar halfway. We start the season again — with the same moves and the record we already earned. This time I want to stay until there is a medal."
};
function say(text) {
	const en = STORY_EN[text];
	return en ? tr(text, en) : text;
}
var STORY = [
	{
		kind: "talk",
		title: "Двор",
		place: "Провинциальный городок, фонарь у гаражей",
		lines: [
			{
				name: "Дед Иван",
				text: "Вася, этот двор уже двадцать лет ждёт, что фамилия Ивановых дослушает свисток до конца. Я не дослушал. Отец твой тоже."
			},
			{
				name: "Вася",
				text: "Все так и говорят: Ивановы умеют только начинать. Глеб Волков уже в основе, а я бью по пустым воротам."
			},
			{
				name: "Глеб",
				text: "Пустые ворота тебя не освищут. Стадион — освищет. Не путай двор с лигой."
			},
			{
				name: "Аня",
				text: "Глеб, ты быстрый. Но ты не из нашей кухни. Вася, если подпишешь, я буду на каждом матче, даже если отец запретит."
			},
			{
				name: "Вася",
				text: "Я не уеду в середине сезона. И не брошу, если таблица станет некрасивой. Сегодня я забираю это место."
			}
		]
	},
	{
		kind: "talk",
		title: "Кухня",
		place: "Дом Ивановых, поздно",
		lines: [
			{
				name: "Отец",
				text: "Сергей Иванов, бывший полузащитник, ныне человек, который выключает трансляции. Слышишь? Не ходи туда. Городок смеётся один раз, потом привыкает."
			},
			{
				name: "Вася",
				text: "Ты ушёл, потому что стало стыдно. Я ещё не начинал стыдиться."
			},
			{
				name: "Отец",
				text: "Я ушёл, потому что дед обещал нам чемпионство, а привёз домой тишину. Не обещай Ане то, чего нет в календаре."
			},
			{
				name: "Аня",
				text: "Он ничего не обещал. Он сказал, что доиграет. Это другое слово."
			},
			{
				name: "Дед Иван",
				text: "Серёжа, мальчик имеет право на свою ошибку. Нашу он уже видел."
			},
			{
				name: "Вася",
				text: "Я доиграю сезон здесь. Если место будет первое, второе или третье — мы это заслужили. Если ниже — я не стану делать вид, что кубок у нас в шкафу."
			}
		]
	},
	{
		kind: "talk",
		title: "Контракт",
		place: "Кабинет над раздевалкой",
		lines: [
			{
				name: "Михаил",
				text: "Я ваш агент на этот год. Никаких сказок про большие клубы, пока вас не выпускают на табло."
			},
			{
				name: "Тренер",
				text: "Иванов, Волков мне понятен. Ты — риск с тяжёлой фамилией. Ошибаешься в выборе позиции, и сядешь так, что двор этого не увидит."
			},
			{
				name: "Вася",
				text: "Мне не нужна речь. Дайте минуты и не продавайте меня, пока сезон не закрыт."
			},
			{
				name: "Глеб",
				text: "Минуты ещё надо отнять. Я не буду тебе ассистировать из жалости."
			},
			{
				name: "Тренер",
				text: "Первый матч. Выйдешь. Дед на трибуне — его забота, не моя. Твоя забота — не спрятаться."
			}
		]
	},
	{
		kind: "match",
		title: "Дебют",
		blurb: "Первый официальный матч. Управляете только Васей. Гол, ошибка и тишина после свистка останутся в истории, а не в речи тренера."
	},
	{
		kind: "talk",
		title: "Коридор",
		place: "Под трибуной, мокрый бетон",
		lines: [
			{
				name: "Тренер",
				text: "Один матч ничего не пишет на кубке. Волков надёжнее. Ещё такой вечер — и ты смотришь следующий тур в куртке."
			},
			{
				name: "Вася",
				text: "Заметьте меня по игре, не по тому, что обо мне напишет город."
			},
			{
				name: "Аня",
				text: "Отец был на стадионе. Он ушёл до финального свистка. Сказал, что уже видел этот фильм."
			},
			{
				name: "Отец",
				text: "Я видел, как ты открылся. И видел, как ты оглянулся на трибуну. Игроки, которые оглядываются, не заканчивают сезоны."
			},
			{
				name: "Михаил",
				text: "Из большого города уже звонили. Я сказал: он никуда не едет, пока не доиграет с этими людьми."
			},
			{
				name: "Глеб",
				text: "Доиграй хотя бы со мной. Пока ты соперник в своей раздевалке, городу на нас плевать."
			}
		]
	},
	{
		kind: "match",
		title: "Второй шанс",
		blurb: "Тренер снова ставит вас в старт. Форма Васи растёт от голов и падает от пустых вечеров."
	},
	{
		kind: "talk",
		title: "Ночной звонок",
		place: "Общага у манежа",
		lines: [
			{
				name: "Михаил",
				text: "Есть бумага. Чужой клуб, нормальные деньги, выезд на следующей неделе. Отец просил передать: уезжай, не повторяй его."
			},
			{
				name: "Отец",
				text: "Вася, я не умею болеть за своих. Я умею уходить, пока не стало поздно. Возьми контракт."
			},
			{
				name: "Дед Иван",
				text: "Человек, который бежит в октябре, не имеет права исчезать в мае. Сезон закрывают те, кто остаётся, когда таблица врёт и когда она говорит правду."
			},
			{
				name: "Вася",
				text: "Михаил, положи бумагу в ящик. Я запрошу трансфер, если захочу, только когда все сыграют со всеми. Не раньше."
			},
			{
				name: "Аня",
				text: "Я скажу отцу, что ты отказался. Пусть в этот раз дослушает сам."
			}
		]
	},
	{
		kind: "talk",
		title: "Раздевалка",
		place: "После ничьей, которую никто не празднует",
		lines: [
			{
				name: "Глеб",
				text: "Ты взял удар на себя, хотя я был свободнее. Это не характер. Это страх отдать пас фамилии Волкова."
			},
			{
				name: "Вася",
				text: "А ты отдал назад, хотя я уже был в штрафной. Мы оба играем против призраков, Глеб."
			},
			{
				name: "Аня",
				text: "Хватит. Городок и так ждёт, кто из вас сломается первым. Не делайте ему это одолжение в собственной раздевалке."
			},
			{
				name: "Тренер",
				text: "Завтра вы оба в основе. Не друзья. Партнёры. Если сорвётесь ещё раз, я сниму обоих, и сезон доиграет молодёжка."
			},
			{
				name: "Глеб",
				text: "Ладно. Бежишь в штрафную — я отдам. Один раз. Потом посмотрим, кто ты без деда на трибуне."
			},
			{
				name: "Вася",
				text: "Один раз мне хватит, чтобы не ненавидеть тебя до конца календаря."
			}
		]
	},
	{
		kind: "match",
		title: "Рывок",
		blurb: "Середина сезона. Очки Васи остаются в протоколе. Кубка ещё нет: его не раздают, пока кто-то не сыграл."
	},
	{
		kind: "talk",
		title: "Канун",
		place: "Пустой стадион накануне развязки",
		lines: [
			{
				name: "Тренер",
				text: "Этот матч ничего вам не обещает. Победа не печатает чемпионство. Поражение не вычёркивает сезон. После свистка календарь доиграют остальные туры — честно, без подтасовки таблицы."
			},
			{
				name: "Михаил",
				text: "Когда все клубы сыграют друг с другом, место будет видно. Первое, второе, третье — можно смотреть людям в глаза. Ниже — нет медали, и я не буду её рисовать."
			},
			{
				name: "Отец",
				text: "Я пришёл до свистка. Не проси меня кричать. Просто не прячься, если станет плохо."
			},
			{
				name: "Дед Иван",
				text: "Я могу не достоять весь матч. Не оглядывайся проверять. Если я уйду в туннель, это возраст, не приговор."
			},
			{
				name: "Аня",
				text: "Мы будем там все. Даже если городок решит, что Ивановым снова рано."
			},
			{
				name: "Глеб",
				text: "Бери мяч. Я закрою край. Сегодня мы не двор и не сплетня."
			},
			{
				name: "Вася",
				text: "Тогда играем до конца. Место пусть назовёт таблица, не я."
			}
		]
	},
	{
		kind: "match",
		title: "Развязка",
		blurb: "Матч идёт в таблицу как есть: победа, ничья или поражение. Потом сезон доигрывается сам. Финал истории зависит от места, а не от одной речи.",
		final: true
	}
];
function finaleScript(place) {
	if (place === 1) return {
		title: "Золотой свисток",
		where: "Поле после чемпионского круга",
		happy: true,
		lines: [
			{
				name: "Тренер",
				text: "Иванов, ты начал сезон как риск с тяжёлой фамилией. Таблица закрыта, все сыграли со всеми, и кубок лиги стоит здесь. Не потому что я так решил. Потому что очков больше нет ни у кого."
			},
			{
				name: "Глеб",
				text: "Я хотел быть первым, кто тебя обойдёт. Сегодня городок стоит из-за тебя. В следующем сезоне я снова попробую. Сегодня — твоё золото."
			},
			{
				name: "Отец",
				text: "Я уходил, чтобы надо мной не смеялись. Теперь они встают. Я не знаю, что с этим делать, Вася. Я просто не уйду раньше свистка в следующий раз."
			},
			{
				name: "Дед Иван",
				text: "Вот теперь фамилия держится до конца, а не до первой неудачи. Я достоял. Слышишь? Достоял."
			},
			{
				name: "Аня",
				text: "Не оставляй мяч в том дворе. И не делай вид, что это был только ты. Глеб бежал. Отец вернулся. Дед не сел."
			},
			{
				name: "Михаил",
				text: "Предложения я сложу в тот же ящик. Уйти можно будет только если сам попросишь в конце следующего сезона. Переходы, которые уже случились, никуда не денутся."
			},
			{
				name: "Вася",
				text: "Мы взяли лигу. Не я один. Золото настоящее, потому что календарь не соврали. Можно начинать новый сезон: победы этого года останутся в статистике."
			}
		]
	};
	if (place === 2) return {
		title: "Серебро на ладони",
		where: "Раздевалка, форму ещё не сняли",
		happy: true,
		lines: [
			{
				name: "Тренер",
				text: "Второе место. Не чемпионство и не анекдот, которым городок пугал Ивановых. Серебро весит. Его не стыдно принести домой."
			},
			{
				name: "Глеб",
				text: "Я злился весь год, что ты оказался не слабее. Сегодня злость короче медали. В следующем сезоне я заберу у тебя это серебро и попробую на золото."
			},
			{
				name: "Отец",
				text: "Второе — не провал. Это обещание, которое не пришлось выдумывать. Я смотрел до конца. Мне было страшно. Я всё равно смотрел."
			},
			{
				name: "Дед Иван",
				text: "Я хотел кубок. Я получил внука, который не сбежал, когда стало ясно, что первого места может не быть. Это тоже золото, только другого сплава."
			},
			{
				name: "Аня",
				text: "Сфотографируй медаль, пока руки не дрожат. Потом начнём год заново. Состав, в котором вы доиграли, пусть останется тем, чем его сделали трансферы."
			},
			{
				name: "Вася",
				text: "Мы не чемпионы. Мы и не те Ивановы, которые уходят в октябре. Серебро — счастливый финал для двора, которому обещали пустоту. Новый сезон я начинаю отсюда."
			}
		]
	};
	if (place === 3) return {
		title: "Бронза",
		where: "Туннель, свет ещё не выключили",
		happy: true,
		lines: [
			{
				name: "Михаил",
				text: "Третье. Пьедестал узкий, фотография существует. Предложения будут. Я их не подпишу, пока ты сам не скажешь в конце следующего лета."
			},
			{
				name: "Тренер",
				text: "Бронза не кормит газеты так, как золото. Зато она честная: все клубы сыграли, и вы остались в первой тройке. Мне этого хватает, чтобы назвать сезон удачным."
			},
			{
				name: "Глеб",
				text: "Я хотел выше. Ты тоже. Мы не дотянули до серебра и не провалились в середину. Завтра я снова буду спорить с тобой в раздевалке. Сегодня можно помолчать."
			},
			{
				name: "Отец",
				text: "Третье место — это когда городок не смеётся и не орёт. Он просто кивает. Я всю жизнь ждал либо крика, либо тишины. Кивок оказался лучше."
			},
			{
				name: "Дед Иван",
				text: "Положи бронзу на кухонный стол. Пусть стоит, пока мы не вырастем до чего-то тяжелее. Я не называю это неудачей. Я называю это финалом, который можно пережить."
			},
			{
				name: "Аня",
				text: "Счастливый конец бывает не только с кубком над головой. Бывает с медалью в кармане и с отцом, который не ушёл."
			},
			{
				name: "Вася",
				text: "Я дослушал свисток. Третье место — наш счастливый финал. Победы этого сезона запишутся. Трансферы тоже. Новый круг начнётся с того состава, который есть, а не с того, который был в августе."
			}
		]
	};
	const shownRu = place > 0 ? `${place}-е` : "место ниже тройки";
	const ord = place % 10 === 1 && place % 100 !== 11 ? "st" : place % 10 === 2 && place % 100 !== 12 ? "nd" : place % 10 === 3 && place % 100 !== 13 ? "rd" : "th";
	const shownEn = place > 0 ? `${place}${ord}` : "a place outside the top three";
	return {
		title: "Пустая полка",
		where: "Ночной автобус со стадиона",
		happy: false,
		lines: [
			{
				name: "Тренер",
				text: tr(`Таблица закрыта честно. Мы ${shownRu}. Ни золота, ни серебра, ни бронзы. Я не буду переписывать чужие результаты, чтобы стало красиво.`, `The table closed honestly. We finished ${shownEn}. No gold, no silver, no bronze. I will not rewrite other people's results to make it pretty.`)
			},
			{
				name: "Глеб",
				text: "Лига нам ничего не должна. Я бежал. Ты бежал. Этого не хватило на пьедестал. Ненавижу этот счёт, но он настоящий."
			},
			{
				name: "Михаил",
				text: "Жалость в газету не кладут. Клубы, которые уже купили наших, не вернут людей назад. Статистика побед тоже не сотрётся. Сотрётся только ощущение, что этот год кончился хорошо."
			},
			{
				name: "Отец",
				text: "Вот эта ночь. Та, из которой я всю жизнь уходил. Ты в ней остался. Мне от этого не легче смотреть на пустую полку, но я хотя бы сижу рядом."
			},
			{
				name: "Дед Иван",
				text: "Я хотел кубок. Я увидел, как ты доиграл. Это не счастливый финал, Вася. Не ври себе, что четвёртое и ниже — тоже медаль. Не ври и что жизнь кончилась на этой остановке."
			},
			{
				name: "Аня",
				text: "Можно начать всё заново. Городок никуда не денется. Игроки, которые перешли, останутся там, куда перешли. Победы, которые уже были, останутся в архиве. Просто этот сезон мы не празднуем."
			},
			{
				name: "Вася",
				text: "Я не назову это трофеем. Мы ниже первых трёх, и финал неудачный. Но я не брошу календарь на половине. Начнём сезон снова — с теми же переходами и с той статистикой, которую уже заслужили. В этот раз я хочу достоять до медали."
			}
		]
	};
}
function StoryBook({ state, onChange, onPlay, onSimulate, onMenu, onReset }) {
	const chapter = STORY[state.step];
	const club = teamById(state.career.teamId);
	const closed = isSeasonOver(state.career);
	const vasya = state.career.people.find((p) => p.id === state.career.createdId);
	if (closed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finale, {
		state,
		onMenu,
		onReset,
		onChange,
		onRestart: () => {
			const next = beginNextSeason(state.career);
			if (typeof next === "string") onChange({
				...state,
				note: next
			});
			else onChange({
				...state,
				teamId: next.teamId,
				step: 0,
				rigged: false,
				note: "",
				career: next
			});
		}
	});
	if (!chapter) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-3xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onMenu,
				children: tr("Меню", "Menu")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Глава кончилась раньше таблицы", "The chapter ended before the table")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Сезон ещё не закрыт, поэтому финала нет. Доиграйте календарь из карьеры или вернитесь к последнему матчу.", "The season is not closed, so there is no ending. Finish the calendar from the career, or go back to the last match.")
			})
		]
	});
	if (chapter.kind === "talk") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Novel, {
		title: say(chapter.title),
		place: say(chapter.place),
		lines: chapter.lines.map((line) => ({
			name: say(line.name),
			text: say(line.text)
		})),
		clubId: club.id,
		season: state.career.season || 1,
		onMenu,
		onDone: () => onChange({
			...state,
			step: state.step + 1,
			note: ""
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-3xl px-4 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryExtras, {
			state,
			onChange
		})
	})] });
	const next = nextUserFixture(state.career);
	const foeId = next ? next.fixture.home === state.career.teamId ? next.fixture.away : next.fixture.home : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onMenu,
				children: tr("Меню", "Menu")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-display text-xs tracking-widest text-mint uppercase",
				children: [
					tr("История", "Story"),
					" · ",
					tr("сезон", "season"),
					" ",
					state.career.season || 1,
					" · ",
					club.name
				]
			}),
			(state.career.season || 1) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-fg/70",
				children: tr("Переходы и статистика побед прошлых лет на месте. Сюжет идёт заново.", "Moves and the win record from past years are still here. The story starts again.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-4xl uppercase",
				children: say(chapter.title)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fg/75",
				children: say(chapter.blurb)
			}),
			state.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mint",
				children: state.note
			}),
			vasya && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg/70",
				children: [
					vasya.name,
					" · ",
					tr("рейтинг", "rating"),
					" ",
					vasya.ovr,
					" · ",
					tr("голы", "goals"),
					" ",
					vasya.goals,
					vasya.wantsMove ? tr(" · просит трансфер", " · wants a move") : ""
				]
			}),
			next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "btn-main",
						onClick: onPlay,
						children: [tr("Играть", "Play"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block font-sans text-xs font-normal normal-case text-bg/80",
							children: [
								teamById(next.fixture.home).name,
								" — ",
								teamById(next.fixture.away).name,
								chapter.final ? tr(" · место решит таблица", " · the table will decide the place") : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/75",
						children: [
							tr("Сводка: вы", "Briefing: you play"),
							" ",
							state.career.formation,
							". ",
							teamById(foeId).name,
							" ",
							tr("выходят", "line up"),
							" ",
							clubShape(foeId, next.index),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-ghost",
						onClick: onSimulate,
						children: tr("Симулировать матч", "Simulate the match")
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-fg/70",
				children: tr("Календарь этой главы уже сыгран.", "This chapter's calendar is already played.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryExtras, {
				state,
				onChange
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeagueTable, {
					table: tableOf(state.career.fixtures),
					mine: state.career.teamId
				})
			})
		]
	});
}
function Finale({ state, onMenu, onReset, onChange, onRestart }) {
	const place = ourPlace(state.career) ?? 8;
	const script = finaleScript(place);
	const champ = championOf(state.career);
	const rec = careerRecord(state.career);
	const club = teamById(state.career.teamId);
	const [i, setI] = (0, import_react.useState)(0);
	const line = script.lines[i];
	const last = i >= script.lines.length - 1;
	const done = careerClosed(state.career);
	const bump = seasonRatingBump(place, tableOf(state.career.fixtures).length);
	const bumpText = bump > 0 ? tr(`За место средний рейтинг клуба +${bump}.`, `For the place, the club's average rating is +${bump}.`) : bump < 0 ? tr(`За место средний рейтинг клуба ${bump}.`, `For the place, the club's average rating is ${bump}.`) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-mint",
					onClick: onMenu,
					children: tr("Меню", "Menu")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-fg/50",
					onClick: onReset,
					children: tr("Стереть историю", "Erase the story")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-xs tracking-widest text-mint uppercase",
				children: say(script.where)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-4xl uppercase",
				children: say(script.title)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg/75",
				children: [
					club.name,
					" · ",
					tr("сезон", "season"),
					" ",
					state.career.season || 1,
					" · ",
					place,
					tr("-е место", " place"),
					champ ? tr(` · чемпион ${teamById(champ.id).name}`, ` · champion ${teamById(champ.id).name}`) : "",
					". ",
					script.happy ? tr("Счастливый финал: пьедестал.", "A happy ending: the podium.") : tr("Неудачный финал: ниже первых трёх.", "A bad ending: below the top three.")
				]
			}),
			line && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "card mt-6 min-h-48 w-full text-left",
				onClick: () => {
					if (!last) setI(i + 1);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-widest text-gold uppercase",
						children: say(line.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg leading-relaxed",
						children: say(line.text)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-xs text-fg/45",
						children: [
							i + 1,
							" / ",
							script.lines.length,
							last ? "" : tr(" · дальше", " · next")
						]
					})
				]
			}),
			last && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-fg/70",
					children: tr("Десять сезонов позади. История Васи закрыта. Спасибо, что дошли до конца. Начните путь заново — с чистого сезона.", "Ten seasons are behind you. Vasya's story is closed. Thank you for seeing it through. Start the path again, from a clean season.")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-fg/70",
					children: [
						tr("Уже в архиве: титулы", "Already in the archive: titles"),
						" ",
						rec.titles,
						", ",
						tr("пьедесталы", "podiums"),
						" ",
						rec.podiums,
						", ",
						tr("победы", "wins"),
						" ",
						rec.wins,
						". ",
						tr("Этот сезон допишется туда, когда начнёте следующий. Состав после трансферов не откатится. Если Васе уже предложили клуб — примите переход до кнопки, иначе окно закроется.", "This season is written in when you start the next one. The squad after transfers will not roll back. If Vasya already has an offer, accept it before the button, or the window closes.")
					]
				}),
				!done && bumpText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-mint",
					children: bumpText
				}),
				!done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryExtras, {
					state,
					onChange
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-main mt-4",
					onClick: done ? onReset : onRestart,
					children: done ? tr("Начать путь заново", "Start the path again") : script.happy ? tr("Новый сезон", "New season") : tr("Начать всё заново", "Start all over")
				})
			] }),
			state.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mint",
				children: state.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeagueTable, {
				table: tableOf(state.career.fixtures),
				mine: state.career.teamId
			})
		]
	});
}
function Novel({ title, place, lines, clubId, season, onDone, onMenu }) {
	const [i, setI] = (0, import_react.useState)(0);
	const line = lines[i];
	const last = i >= lines.length - 1;
	if (!line) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-mint",
					onClick: onMenu,
					children: tr("Меню", "Menu")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: say(place)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
					id: clubId,
					className: "h-16 w-16 shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-xs tracking-widest text-mint uppercase",
					children: [
						tr("Катсцена", "Cutscene"),
						" · ",
						tr("сезон", "season"),
						" ",
						season
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl uppercase",
					children: say(title)
				})] })]
			}),
			season > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fg/70",
				children: tr("Это уже не первый круг. Прошлые переходы и победы не стёрты.", "This is not the first lap. Past moves and wins were not wiped.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "card mt-8 min-h-48 w-full text-left",
				onClick: () => {
					if (!last) setI(i + 1);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-widest text-gold uppercase",
						children: say(line.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg leading-relaxed",
						children: say(line.text)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-xs text-fg/45",
						children: [
							i + 1,
							" / ",
							lines.length,
							last ? "" : tr(" · дальше", " · next")
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2",
				children: lines.map((entry, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: n === i ? "h-1.5 flex-1 rounded-full bg-mint" : "h-1.5 flex-1 rounded-full bg-fg/15" }, `${entry.name}-${n}`))
			}),
			last && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-6",
				onClick: onDone,
				children: tr("Дальше", "Next")
			})
		]
	});
}
function StoryExtras({ state, onChange }) {
	const vasya = state.career.people.find((p) => p.id === state.career.createdId);
	const bid = (state.career.bids ?? []).find((b) => b.personId === state.career.createdId);
	const articles = pressFeed(state.career).slice(0, 4);
	const row = tableOf(state.career.fixtures).find((r) => r.id === state.career.teamId);
	const rec = careerRecord(state.career);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-mint uppercase",
						children: tr("Турнир", "Competition")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-fg/75",
						children: [
							row ? tr(`Игры ${row.p} · мячи ${row.gf}:${row.ga} · очки ${row.pts}`, `Played ${row.p} · goals ${row.gf}:${row.ga} · points ${row.pts}`) : tr("Календарь ещё пуст.", "The calendar is still empty."),
							" ",
							tr("Кубок только когда все клубы сыграют друг с другом.", "The trophy comes only when every club has played every other club.")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-fg/70",
						children: [
							tr("Архив: титулы", "Archive: titles"),
							" ",
							rec.titles,
							", ",
							tr("пьедесталы", "podiums"),
							" ",
							rec.podiums,
							", ",
							tr("победы", "wins"),
							" ",
							rec.wins,
							"."
						]
					})
				]
			}),
			vasya && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-gold uppercase",
						children: tr("Трансфер Васи", "Vasya's transfer")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-fg/75",
						children: [
							tr("Уйти можно только в конце сезона. Сейчас клуб", "A move is only at the end of the season. The club now is"),
							" ",
							teamById(state.career.teamId).name,
							". ",
							tr("Переход останется и в следующем сезоне.", "The move stays for the next season too.")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "chip",
							onClick: () => {
								const next = requestTransfer(state.career, vasya.id);
								if (typeof next === "string") onChange({
									...state,
									note: next
								});
								else onChange({
									...state,
									teamId: next.teamId,
									career: next,
									note: ""
								});
							},
							children: vasya.wantsMove ? tr("Отозвать запрос", "Withdraw the request") : tr("Вася просит трансфер", "Vasya asks for a transfer")
						}), bid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "chip-on",
							onClick: () => {
								const next = acceptBid(state.career, vasya.id);
								if (typeof next !== "string") onChange({
									...state,
									teamId: next.teamId,
									career: next,
									note: tr(`Вася перешёл в ${teamById(next.teamId).name}. Бонус ${formatRub(next.budget - state.career.budget)}.`, `Vasya joined ${teamById(next.teamId).name}. Bonus ${formatRub(next.budget - state.career.budget)}.`)
								});
							},
							children: [
								tr("Принять", "Accept"),
								" ",
								teamById(bid.from).name
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-widest text-mint uppercase",
					children: tr("Пресса", "Press")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-2",
					children: articles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display uppercase",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg/70",
						children: item.body
					})] }, item.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Сохранение", "Save")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/70",
					children: tr("История Васи, трансферы и архив побед пишутся на это устройство. Новый сезон не стирает их. «Стереть историю» — это уже полный сброс.", "Vasya's story, transfers and the win archive are saved on this device. A new season does not wipe them. Erase the story is a full reset.")
				})]
			})
		]
	});
}
var TITLES = {
	prelim: "Отборочный раунд",
	r16: "1/8 финала",
	qf: "1/4 финала",
	sf: "1/2 финала",
	final: "Финал"
};
function roundTitle(id) {
	if (id === "prelim") return tr("Отборочный раунд", "Preliminary round");
	if (id === "r16") return tr("1/8 финала", "Round of 16");
	if (id === "qf") return tr("1/4 финала", "Quarter-final");
	if (id === "sf") return tr("1/2 финала", "Semi-final");
	return tr("Финал", "Final");
}
function rng(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function shuffle(list, seed) {
	const next = list.slice();
	const roll = rng(seed);
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(roll() * (i + 1));
		const swap = next[i];
		next[i] = next[j];
		next[j] = swap;
	}
	return next;
}
function cupStrength(id, people) {
	const xi = people.filter((p) => p.teamId === id).sort((a, b) => b.ovr - a.ovr).slice(0, 11);
	if (!xi.length) return clubRating(id);
	return xi.reduce((s, p) => s + p.ovr, 0) / xi.length + (xi.reduce((s, p) => s + p.form, 0) / xi.length - 70) * .22;
}
function roundKind(count) {
	if (count > 16) return "prelim";
	if (count > 8) return "r16";
	if (count > 4) return "qf";
	if (count > 2) return "sf";
	return "final";
}
function pairRound(ids, people, seed) {
	const id = roundKind(ids.length);
	const sorted = ids.slice().sort((a, b) => cupStrength(b, people) - cupStrength(a, people) || a.localeCompare(b));
	const byeN = id === "prelim" ? Math.max(0, sorted.length - 16) : 0;
	const byes = sorted.slice(0, byeN);
	let play = sorted.slice(byeN);
	const mixed = [];
	for (let i = 0; i < play.length; i += 4) mixed.push(...shuffle(play.slice(i, i + 4), seed + i * 17 + id.length));
	play = mixed;
	const ties = byes.map((home) => ({
		home,
		away: null,
		hg: 0,
		ag: 0,
		ph: null,
		pa: null
	}));
	if (play.length % 2 === 1) {
		ties.push({
			home: play[0],
			away: null,
			hg: 0,
			ag: 0,
			ph: null,
			pa: null
		});
		play = play.slice(1);
	}
	for (let i = 0; i < play.length; i += 2) ties.push({
		home: play[i],
		away: play[i + 1],
		hg: null,
		ag: null,
		ph: null,
		pa: null
	});
	return {
		id,
		title: TITLES[id],
		ties
	};
}
function tieWinner(tie) {
	if (!tie.away) return tie.home;
	if (tie.hg === null || tie.ag === null) return null;
	if (tie.ph != null && tie.pa != null && tie.ph !== tie.pa) return tie.ph > tie.pa ? tie.home : tie.away;
	if (tie.hg === tie.ag) return null;
	return tie.hg > tie.ag ? tie.home : tie.away;
}
function createCup(teamId) {
	const ids = TEAMS.map((t) => t.id);
	const people = peopleFor(ids);
	const seed = (Date.now() ^ teamId.split("").reduce((s, ch) => s + ch.charCodeAt(0), 0)) >>> 0;
	return {
		v: 1,
		teamId,
		budget: 25e6,
		people,
		lineup: lineupFor(people, teamId, "4-3-3"),
		formation: "4-3-3",
		trainsLeft: 2,
		rounds: [pairRound(ids, people, seed || 1)],
		round: 0,
		out: false,
		champion: null,
		seenCutscene: false
	};
}
function currentRound(state) {
	return state.rounds[Math.min(state.round, state.rounds.length - 1)];
}
function userTieIndex(state) {
	if (state.out || state.champion) return -1;
	return currentRound(state).ties.findIndex((t) => (t.home === state.teamId || t.away === state.teamId) && t.hg === null);
}
function withRound(state, ties) {
	const rounds = state.rounds.slice();
	const round = rounds[state.round];
	if (!round) return state;
	rounds[state.round] = {
		...round,
		ties
	};
	return {
		...state,
		rounds
	};
}
function touchSide(people, teamId, win, lineup) {
	const starters = new Set(lineup ?? []);
	let left = 11;
	return people.map((p) => {
		if (p.teamId !== teamId) return p;
		if (!(starters.size ? starters.has(p.id) : left > 0 && (left -= 1, true))) return {
			...p,
			fitness: Math.min(100, p.fitness + 6)
		};
		return {
			...p,
			apps: p.apps + 1,
			fitness: Math.max(35, p.fitness - 10),
			form: Math.max(32, Math.min(99, p.form + (win ? 4 : -3)))
		};
	});
}
function scoreOpen(tie, people, seed) {
	if (!tie.away || tie.hg !== null) return tie;
	const [rawH, rawA] = simOtherScore(cupStrength(tie.home, people), cupStrength(tie.away, people), seed);
	return finishScore(tie, rawH, rawA, people);
}
function finishScore(tie, hg, ag, people) {
	if (!tie.away) return tie;
	if (hg !== ag) return {
		...tie,
		hg,
		ag,
		ph: null,
		pa: null
	};
	const homeWins = cupStrength(tie.home, people) >= cupStrength(tie.away, people);
	return {
		...tie,
		hg,
		ag,
		ph: homeWins ? 5 : 4,
		pa: homeWins ? 4 : 5
	};
}
function advance(state) {
	const round = state.rounds[state.round];
	if (!round || round.ties.some((t) => tieWinner(t) === null)) return state;
	const winners = round.ties.map((t) => tieWinner(t)).filter((id) => Boolean(id));
	const alive = winners.includes(state.teamId);
	if (round.id === "final") return {
		...state,
		champion: winners[0] ?? null,
		out: !alive
	};
	const next = pairRound(winners, state.people, (state.round + 3) * 97 + winners.join("").length);
	return {
		...state,
		out: state.out || !alive,
		rounds: [...state.rounds, next],
		round: state.round + 1,
		trainsLeft: 2
	};
}
function playRest(state) {
	let next = state;
	for (let guard = 0; guard < 8 && !next.champion; guard++) {
		const round = next.rounds[next.round];
		if (!round) break;
		const ties = round.ties.map((tie, i) => scoreOpen(tie, next.people, next.round * 100 + i * 13 + 5));
		next = withRound(next, ties);
		if (ties.some((t) => tieWinner(t) === null)) break;
		const before = next.round;
		next = advance(next);
		if (next.round === before && !next.champion) break;
	}
	return next;
}
function afterScore(state, ties) {
	let next = withRound(state, ties);
	const mine = ties.find((t) => t.home === state.teamId || t.away === state.teamId);
	if (mine && tieWinner(mine) && tieWinner(mine) !== state.teamId) next = {
		...next,
		out: true
	};
	if (next.out) return playRest(next);
	if (ties.every((t) => tieWinner(t))) return advance(next);
	return next;
}
function simulateTie(state, index) {
	const ties = currentRound(state).ties.slice();
	const tie = ties[index];
	if (!tie) return state;
	ties[index] = scoreOpen(tie, state.people, state.round * 80 + index * 19 + state.teamId.length);
	const played = ties[index];
	let people = state.people;
	if (played.away && played.hg !== null && played.ag !== null) {
		const homeWin = tieWinner(played) === played.home;
		people = touchSide(people, played.home, homeWin);
		people = touchSide(people, played.away, !homeWin);
	}
	return afterScore({
		...state,
		people
	}, ties);
}
function simulateOthers(state) {
	return afterScore(state, currentRound(state).ties.map((tie, i) => {
		if ((tie.home === state.teamId || tie.away === state.teamId) && !state.out) return tie;
		return scoreOpen(tie, state.people, state.round * 50 + i * 11);
	}));
}
function recordCupScore(state, index, hg, ag, scorers = []) {
	const ties = currentRound(state).ties.slice();
	const tie = ties[index];
	if (!tie?.away || tie.hg !== null) return state;
	const played = finishScore(tie, hg, ag, state.people);
	ties[index] = played;
	const userHome = tie.home === state.teamId;
	const win = tieWinner(played) === state.teamId;
	let people = touchSide(state.people, state.teamId, win, state.lineup);
	people = touchSide(people, userHome ? tie.away : tie.home, !win);
	for (const name of scorers) people = people.map((p) => p.teamId === state.teamId && p.name === name ? {
		...p,
		goals: p.goals + 1,
		form: Math.min(99, p.form + 4)
	} : p);
	const prize = win ? 4e6 : 8e5;
	const wages = people.filter((p) => p.teamId === state.teamId).length * 18e4;
	return afterScore({
		...state,
		people,
		budget: Math.max(0, state.budget + prize - wages),
		trainsLeft: 2
	}, ties);
}
function forfeitCup(state) {
	const index = userTieIndex(state);
	if (index < 0) return state;
	const tie = currentRound(state).ties[index];
	if (!tie?.away) return state;
	const userHome = tie.home === state.teamId;
	return recordCupScore(state, index, userHome ? 0 : 3, userHome ? 3 : 0);
}
function trainCup(state, id, kind) {
	const next = train(shellCareer(state), id, kind);
	if (typeof next === "string") return next;
	return {
		...state,
		people: next.people,
		trainsLeft: next.trainsLeft
	};
}
function shapeCup(state, formation) {
	const next = setFormation(shellCareer(state), formation);
	return {
		...state,
		formation: next.formation,
		lineup: next.lineup
	};
}
function swapCup(state, slot, personId) {
	const next = swapLineup(shellCareer(state), slot, personId);
	if (typeof next === "string") return next;
	return {
		...state,
		lineup: next.lineup
	};
}
function cupPress(state) {
	const me = teamById(state.teamId);
	const round = currentRound(state);
	const stage = roundTitle(round.id);
	const out = [];
	const mine = state.rounds.flatMap((r) => r.ties).filter((t) => t.away && (t.home === state.teamId || t.away === state.teamId) && t.hg !== null);
	const last = mine[mine.length - 1];
	if (state.champion) {
		const holder = teamById(state.champion);
		out.push({
			tag: tr("Финал", "Final"),
			title: state.champion === state.teamId ? tr(`${me.name} поднимают Кубок России`, `${me.name} lift the Russian Cup`) : tr(`${me.name} смотрят, как кубок забирает ${holder.name}`, `${me.name} watch ${holder.name} take the cup`),
			body: state.champion === state.teamId ? tr(`Сетка из 24 клубов закрыта. ${me.name} прошли её тем составом, с которым начинали: трансферов в кубке нет. В раздевалке говорят не про чужой финал, а про свой последний свисток.`, `A bracket of 24 clubs is closed. ${me.name} came through it with the squad they started with: there are no transfers in the cup. The dressing room talks about their own last whistle, not someone else's final.`) : tr(`${me.name} выбыли раньше. Кубок у ${holder.name}. Состав, с которым клуб входил в сетку, так и остался без покупок.`, `${me.name} went out earlier. The cup belongs to ${holder.name}. The squad that entered the bracket never bought anyone.`)
		});
	} else if (state.out) out.push({
		tag: tr("Вылет", "Out"),
		title: tr(`${me.name} заканчивают кубковый путь`, `${me.name} end their cup run`),
		body: tr(`${stage} остался без ${me.name}. Дальше играют другие, а разговор в клубе простой: лига ещё может спасти сезон, эта сетка — уже нет.`, `${stage} goes on without ${me.name}. Others play on, and the talk at the club is simple: the league can still save the season, this bracket cannot.`)
	});
	else {
		const index = userTieIndex(state);
		const tie = index >= 0 ? round.ties[index] : round.ties.find((t) => t.home === state.teamId || t.away === state.teamId);
		if (tie?.away && tie.hg === null) {
			const foe = teamById(tie.home === state.teamId ? tie.away : tie.home);
			const home = tie.home === state.teamId;
			out.push({
				tag: tr("Наш жребий", "Our draw"),
				title: `${me.name} — ${foe.name}`,
				body: tr(`${stage}. ${home ? `${me.name} играют дома` : `Выезд к ${foe.name}`}. Пару собрали из клубов близкого уровня, не из крайностей сетки. В заявке ${me.name} ждут не сенсацию ради заголовка, а свой проход.`, `${stage}. ${home ? `${me.name} play at home` : `Away at ${foe.name}`}. The tie pairs clubs of a similar level, not the extremes of the bracket. ${me.name} want their own passage, not a headline shock.`)
			});
		} else if (tie && !tie.away) out.push({
			tag: tr("Сетка", "Bracket"),
			title: tr(`${me.name} ждут следующую стадию без игры`, `${me.name} wait for the next round without playing`),
			body: tr("Более высокий рейтинг оставил клуб среди сеяных. Пока играют остальные пары, в раздевалке спорят, кого ставить, когда сетка снова дойдёт до нас.", "A higher rating left the club among the seeds. While the other ties are played, the dressing room argues who starts when the bracket reaches them again.")
		});
	}
	if (last?.away && last.hg !== null && last.ag !== null) {
		const ours = last.home === state.teamId ? last.hg : last.ag;
		const theirs = last.home === state.teamId ? last.ag : last.hg;
		const wentThrough = ours > theirs || ours === theirs && last.ph != null && (last.home === state.teamId && last.ph > (last.pa ?? 0) || last.away === state.teamId && (last.pa ?? 0) > (last.ph ?? 0));
		const pens = last.ph != null && last.pa != null ? tr(` Серия ${last.ph}:${last.pa}.`, ` Shoot-out ${last.ph}:${last.pa}.`) : "";
		const tone = wentThrough ? tr(`${me.name} проходят дальше.`, `${me.name} go through.`) : tr(`${me.name} этот вечер не празднуют.`, `${me.name} do not celebrate this night.`);
		out.push({
			tag: tr("Наш матч", "Our match"),
			title: `${teamById(last.home).name} ${last.hg}:${last.ag} ${teamById(last.away).name}`,
			body: tr(`${tone}${pens} Протокол пишут про ${me.name}, остальные пары — только фон сетки.`, `${tone}${pens} The report is about ${me.name}. The other ties are only the background of the bracket.`)
		});
	}
	const around = state.rounds.flatMap((r) => r.ties).filter((t) => t.away && t.hg !== null && t.home !== state.teamId && t.away !== state.teamId).slice(-2);
	for (const tie of around) {
		if (!tie.away || tie.hg === null || tie.ag === null) continue;
		const winner = teamById(tieWinner(tie) ?? tie.home).name;
		out.push({
			tag: tr("Рядом в сетке", "Elsewhere in the bracket"),
			title: `${teamById(tie.home).name} ${tie.hg}:${tie.ag} ${teamById(tie.away).name}`,
			body: tr(`Дальше идёт ${winner}. Для ${me.name} это чужой вечер: важен только свой следующий соперник.`, `${winner} go on. For ${me.name} this is someone else's night: only their own next opponent matters.`)
		});
	}
	if (!out.length) out.push({
		tag: tr("Кубок", "Cup"),
		title: tr(`${me.name} входят в сетку`, `${me.name} enter the bracket`),
		body: tr("Все 24 клуба. Трансферов нет. Жеребьёвка держит рядом команды близкого уровня.", "All 24 clubs. No transfers. The draw keeps sides of a similar level together.")
	});
	return out.slice(0, 6);
}
function reviveCup(data) {
	if (!data || data.v !== 1 || !data.teamId || !TEAMS.some((t) => t.id === data.teamId)) return null;
	if (!Array.isArray(data.people) || !Array.isArray(data.rounds) || !data.rounds.length) return null;
	if (!Array.isArray(data.lineup) || data.lineup.length < 11) return null;
	return {
		...data,
		budget: Number.isFinite(data.budget) ? data.budget : 25e6,
		trainsLeft: data.trainsLeft > 0 ? data.trainsLeft : 0,
		round: Math.max(0, Math.min(data.round ?? 0, data.rounds.length - 1)),
		out: Boolean(data.out),
		champion: data.champion ?? null,
		seenCutscene: Boolean(data.seenCutscene),
		formation: data.formation || "4-3-3"
	};
}
var ROLES = {
	"4-3-3": [
		"GK",
		"LB",
		"CB",
		"CB",
		"RB",
		"CM",
		"CM",
		"CAM",
		"LW",
		"ST",
		"RW"
	],
	"4-4-2": [
		"GK",
		"LB",
		"CB",
		"CB",
		"RB",
		"LM",
		"CM",
		"CM",
		"RM",
		"ST",
		"ST"
	],
	"3-5-2": [
		"GK",
		"CB",
		"CB",
		"CB",
		"LM",
		"CM",
		"CAM",
		"CM",
		"RM",
		"ST",
		"ST"
	],
	"4-2-3-1": [
		"GK",
		"LB",
		"CB",
		"CB",
		"RB",
		"CDM",
		"CDM",
		"LW",
		"CAM",
		"RW",
		"ST"
	]
};
function CupDesk({ cup, onChange, onPlay, onMenu, onReset, onRestart }) {
	const [tab, setTab] = (0, import_react.useState)("home");
	const [note, setNote] = (0, import_react.useState)("");
	const [slot, setSlot] = (0, import_react.useState)(null);
	const me = teamById(cup.teamId);
	const round = currentRound(cup);
	function apply(result) {
		if (typeof result === "string") setNote(result);
		else {
			setNote("");
			onChange(result);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-5xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-mint",
					onClick: onMenu,
					children: tr("Меню", "Menu")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-fg/50",
					onClick: onReset,
					children: tr("Сбросить кубок", "Reset the cup")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
					id: me.id,
					className: "h-14 w-14"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs tracking-widest text-mint uppercase",
						children: tr("Кубок России", "Russian Cup")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl uppercase",
						children: me.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/70",
						children: [
							roundTitle(round.id),
							" · ",
							tr("все 24 клуба", "all 24 clubs"),
							" · ",
							tr("призовые", "prize money"),
							" ",
							formatRub(cup.budget),
							" · ",
							tr("без трансферов", "no transfers")
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: [
					["home", tr("Обзор", "Overview")],
					["bracket", tr("Сетка", "Bracket")],
					["squad", tr("Состав", "Squad")],
					["train", tr("Тренировка", "Training")],
					["calendar", tr("Календарь", "Calendar")],
					["press", tr("Пресса", "Press")],
					["save", tr("Сохранение", "Save")]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: tab === id ? "chip-on shrink-0" : "chip shrink-0",
					onClick: () => {
						setTab(id);
						setNote("");
					},
					children: label
				}, id))
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mint",
				children: note
			}),
			tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
				cup,
				onPlay,
				onApply: apply,
				onRestart
			}),
			tab === "bracket" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bracket, { cup }),
			tab === "squad" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Squad, {
				cup,
				slot,
				onSlot: setSlot,
				onApply: apply
			}),
			tab === "train" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Train, {
				cup,
				onApply: apply
			}),
			tab === "calendar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
				cup,
				onPlay,
				onApply: apply
			}),
			tab === "press" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Press, { cup }),
			tab === "save" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
				cup,
				onSave: () => onChange(cup)
			}),
			cup.champion === cup.teamId && !cup.seenCutscene && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cutscene, {
				name: me.name,
				onDone: () => onChange({
					...cup,
					seenCutscene: true
				})
			})
		]
	});
}
function Overview({ cup, onPlay, onApply, onRestart }) {
	const round = currentRound(cup);
	const index = userTieIndex(cup);
	const tie = index >= 0 ? round.ties[index] : round.ties.find((t) => t.home === cup.teamId || t.away === cup.teamId);
	if (cup.champion) {
		const holder = teamById(cup.champion);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl uppercase text-mint",
					children: cup.champion === cup.teamId ? tr("Кубок ваш", "The cup is yours") : tr(`Вылет. Кубок у ${holder.name}`, `Out. The cup belongs to ${holder.name}`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/70",
					children: tr("Турнир закрыт. Сетку можно начать заново: жеребьёвка снова соберёт все 24 клуба.", "The tournament is closed. The bracket can start again: the draw will gather all 24 clubs once more.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-main mt-3",
					onClick: onRestart,
					children: tr("Начать заново", "Start again")
				})
			]
		});
	}
	if (cup.out) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl uppercase text-mint",
				children: tr("Вылет", "Eliminated")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Клуб выбыл из Кубка России. Техническое поражение и проигрыш в сетке здесь окончательные. Можно смотреть, кто забрал трофей, и начать заново.", "The club is out of the Russian Cup. A walkover and a loss in the bracket are final here. You can see who took the trophy, and start again.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-3",
				onClick: onRestart,
				children: tr("Начать заново", "Start again")
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg/70",
				children: tr("Жеребьёвка ставит рядом клубы с близким рейтингом и формой. Состав не меняется трансферами: только тактика и тренировки.", "The draw pairs clubs of similar rating and form. The squad does not change through transfers: only tactics and training.")
			}),
			tie?.away && tie.hg === null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg/80",
				children: [
					roundTitle(round.id),
					": ",
					teamById(tie.home).name,
					" — ",
					teamById(tie.away).name,
					". ",
					tr("Схема", "Shape"),
					" ",
					cup.formation,
					", ",
					tr("соперник близко по силе.", "the opponent is close in strength.")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-main",
						onClick: onPlay,
						children: tr("Играть", "Play")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-ghost",
						onClick: () => onApply(simulateTie(cup, index)),
						children: tr("Симулировать", "Simulate")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-ghost",
						onClick: () => onApply(forfeitCup(cup)),
						children: tr("Техническое 0:3", "Walkover 0-3")
					})
				]
			})] }),
			tie && !tie.away && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg/80",
				children: [
					teamById(cup.teamId).name,
					" ",
					tr("сеяны и пропускают эту часть сетки. Сначала закрываются остальные пары.", "are seeded and skip this part of the bracket. The other ties are closed first.")
				]
			}),
			round.ties.some((t) => t.away && t.hg === null && t.home !== cup.teamId && t.away !== cup.teamId) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-ghost mt-3",
				onClick: () => onApply(simulateOthers(cup)),
				children: tr("Симулировать остальные пары", "Simulate the other ties")
			})
		]
	});
}
function scoreLine(tie) {
	if (!tie.away) return tr("без игры", "bye");
	if (tie.hg === null || tie.ag === null) return tr("ещё не сыгран", "not played");
	const pens = tie.ph != null && tie.pa != null ? ` (${tr("пен.", "pens")} ${tie.ph}:${tie.pa})` : "";
	return `${tie.hg}:${tie.ag}${pens}`;
}
function Bracket({ cup }) {
	const cols = bracketColumns(cup);
	const currentId = cup.rounds[Math.min(cup.round, cup.rounds.length - 1)]?.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-fg/60",
			children: tr("Турнирная сетка. Ваша пара обведена, победитель подсвечен. Пустые колонки ждут жеребьёвки следующего круга.", "The bracket. Your tie is outlined, the winner is highlighted. Empty columns wait for the next round's draw.")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 max-h-[70vh] overflow-auto rounded-2xl border border-fg/10 bg-bg/40 p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-max items-stretch gap-6",
				children: cols.map((col, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex w-60 shrink-0 flex-col",
					children: [
						ri > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-8 bottom-2 -left-6 w-px bg-fg/15" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: col.key === currentId ? "font-display text-sm tracking-widest text-mint uppercase" : "font-display text-sm tracking-widest text-fg/50 uppercase",
							children: col.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-1 flex-col justify-around gap-2",
							children: col.ties.map((tie, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketTie, {
								tie,
								mine: Boolean(tie && (tie.home === cup.teamId || tie.away === cup.teamId)),
								linked: ri > 0
							}, `${col.key}-${i}`))
						})
					]
				}, col.key))
			})
		})]
	});
}
function bracketColumns(cup) {
	const order = [
		{
			id: "prelim",
			title: roundTitle("prelim"),
			pairs: 16
		},
		{
			id: "r16",
			title: roundTitle("r16"),
			pairs: 8
		},
		{
			id: "qf",
			title: roundTitle("qf"),
			pairs: 4
		},
		{
			id: "sf",
			title: roundTitle("sf"),
			pairs: 2
		},
		{
			id: "final",
			title: roundTitle("final"),
			pairs: 1
		}
	];
	const first = Math.max(0, order.findIndex((r) => r.id === cup.rounds[0]?.id));
	return order.slice(first).map((meta) => {
		const found = cup.rounds.find((r) => r.id === meta.id);
		if (found) return {
			key: meta.id,
			title: found.title,
			ties: found.ties
		};
		return {
			key: meta.id,
			title: meta.title,
			ties: Array.from({ length: meta.pairs }, () => null)
		};
	});
}
function BracketTie({ tie, mine, linked }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative ${mine ? "card card-on !p-0" : "card !p-0"}`,
		children: [linked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1/2 -left-6 h-px w-6 bg-fg/20" }), tie ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayedTie, { tie }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostTie, {})]
	});
}
function PlayedTie({ tie }) {
	const winner = tieWinner(tie);
	const pens = tie.ph != null && tie.pa != null ? ` ${tr("пен.", "pens")} ${tie.ph}:${tie.pa}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketRow, {
			id: tie.home,
			score: tie.away ? tie.hg : null,
			win: winner === tie.home,
			bye: !tie.away
		}),
		tie.away ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketRow, {
			id: tie.away,
			score: tie.ag,
			win: winner === tie.away,
			bye: false
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-t border-fg/10 px-2 py-1.5 text-xs text-fg/50",
			children: tr("без игры, проходит дальше", "bye, goes through")
		}),
		pens && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-t border-fg/10 px-2 py-1 text-xs text-gold",
			children: pens
		})
	] });
}
function BracketRow({ id, score, win, bye }) {
	const team = teamById(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 border-t border-fg/10 px-2 py-1.5 first:border-t-0",
		style: win ? { background: "color-mix(in srgb, var(--color-mint) 16%, transparent)" } : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
				id,
				className: "h-7 w-7 shrink-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: win ? "min-w-0 flex-1 truncate font-display text-sm text-mint uppercase" : "min-w-0 flex-1 truncate font-display text-sm uppercase",
				children: team.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm tabular-nums",
				children: bye ? "—" : score === null ? "·" : score
			})
		]
	});
}
function GhostTie() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-2 py-3 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xs tracking-widest text-fg/35 uppercase",
			children: tr("Пара ещё не собрана", "Tie not drawn yet")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-fg/40",
			children: tr("Ждёт победителей прошлого круга", "Waiting for the winners of the last round")
		})]
	});
}
function Squad({ cup, slot, onSlot, onApply }) {
	const roles = ROLES[cup.formation] ?? ROLES["4-3-3"];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg/70",
				children: tr("Нажмите позицию в основе, затем игрока заявки. Трансферов в кубке нет.", "Tap a starting place, then a squad player. There are no transfers in the cup.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: FORMATION_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: cup.formation === id ? "chip-on" : "chip",
					onClick: () => onApply(shapeCup(cup, id)),
					children: id
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2",
				children: roles.map((role, i) => {
					const player = cup.people.find((q) => q.id === cup.lineup[i]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: slot === i ? "card card-on w-full text-left" : "card w-full text-left",
						onClick: () => onSlot(slot === i ? null : i),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-fg/50",
								children: role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 font-display uppercase",
								children: player ? `${player.num} ${player.name}` : tr("пусто", "empty")
							}),
							player && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-xs text-fg/60",
								children: [
									"OVR ",
									player.ovr,
									" · ",
									tr("форма", "form"),
									" ",
									formLabel(player.form),
									" · ",
									tr("свежесть", "freshness"),
									" ",
									player.fitness
								]
							})
						]
					}) }, `${role}-${i}`);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-5 text-sm tracking-widest uppercase text-fg/60",
				children: tr("Заявка", "Squad list")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 grid gap-2",
				children: mine(cup).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "card w-full text-left",
					onClick: () => onApply(slot === null ? tr("Сначала выберите позицию в основе", "Pick a starting place first") : swapCup(cup, slot, p.id)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display uppercase",
						children: [
							p.num,
							" ",
							p.name
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-xs text-fg/60",
						children: [
							p.pos,
							" · OVR ",
							p.ovr,
							" · ",
							tr("форма", "form"),
							" ",
							p.form,
							" · ",
							tr("свежесть", "freshness"),
							" ",
							p.fitness
						]
					})]
				}) }, p.id))
			})
		]
	});
}
function mine(cup) {
	return cup.people.filter((p) => p.teamId === cup.teamId).sort((a, b) => b.ovr - a.ovr || a.num - b.num);
}
function Train({ cup, onApply }) {
	const squad = mine(cup);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-fg/70",
			children: [
				tr("На стадию осталось тренировок", "Sessions left this round"),
				": ",
				cup.trainsLeft,
				". ",
				tr("Форма влияет на следующую жеребьёвку.", "Form affects the next draw.")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-2",
			children: squad.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display uppercase",
						children: [
							p.num,
							" ",
							p.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-xs text-fg/60",
						children: [
							p.pos,
							" · ",
							tr("форма", "form"),
							" ",
							formLabel(p.form),
							" (",
							p.form,
							") · ",
							tr("свежесть", "freshness"),
							" ",
							p.fitness,
							" · OVR ",
							p.ovr
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => onApply(trainCup(cup, p.id, "form")),
								children: tr("Форма", "Form")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => onApply(trainCup(cup, p.id, "fitness")),
								children: tr("Свежесть", "Freshness")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => onApply(trainCup(cup, p.id, "sharp")),
								children: tr("Острота", "Sharpness")
							})
						]
					})
				]
			}, p.id))
		})]
	});
}
function Calendar({ cup, onPlay, onApply }) {
	const index = userTieIndex(cup);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-4 grid gap-4",
		children: cup.rounds.map((round) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-sm tracking-widest uppercase text-fg/60",
			children: roundTitle(round.id)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 grid gap-2",
			children: round.ties.map((tie, i) => {
				const mine = tie.home === cup.teamId || tie.away === cup.teamId;
				const open = mine && tie.hg === null && tie.away && index === i && round.id === currentRound(cup).id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "card flex flex-wrap items-center justify-between gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block font-display uppercase",
							children: [teamById(tie.home).name, tie.away ? ` — ${teamById(tie.away).name}` : ""]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-fg/60",
							children: scoreLine(tie)
						})] }),
						open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip-on",
									onClick: onPlay,
									children: tr("Играть", "Play")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip",
									onClick: () => onApply(simulateTie(cup, i)),
									children: tr("Симулировать", "Simulate")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip",
									onClick: () => onApply(forfeitCup(cup)),
									children: tr("0:3", "0-3")
								})
							]
						}),
						!mine && tie.away && tie.hg === null && round.id === currentRound(cup).id && !cup.out && !cup.champion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "chip",
							onClick: () => onApply(simulateTie(cup, i)),
							children: tr("Симулировать", "Simulate")
						})
					]
				}, `${round.id}-${i}`);
			})
		})] }, round.id))
	});
}
function Press({ cup }) {
	const items = cupPress(cup);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-4 grid gap-3",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-widest text-mint uppercase",
					children: item.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-1 text-xl uppercase",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/75",
					children: item.body
				})
			]
		}, `${item.title}-${i}`))
	});
}
function Save({ cup, onSave }) {
	const [msg, setMsg] = (0, import_react.useState)("");
	const played = cup.rounds.flatMap((r) => r.ties).filter((t) => t.hg !== null).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "card mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl uppercase",
				children: tr("Сохранение", "Save")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/75",
				children: tr("Кубок пишется отдельно от карьер лиги. Сброс стирает только эту сетку.", "The cup is saved apart from league careers. Reset wipes only this bracket.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg/80",
				children: [
					teamById(cup.teamId).name,
					" · ",
					tr("сыграно пар", "ties played"),
					" ",
					played,
					". ",
					cup.champion ? tr("Турнир закрыт.", "The tournament is closed.") : cup.out ? tr("Клуб выбыл.", "The club is out.") : tr("Сетка ещё идёт.", "The bracket is still going.")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-4",
				onClick: () => {
					onSave();
					setMsg(tr("Записано.", "Saved."));
				},
				children: tr("Записать прогресс", "Save progress")
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mint",
				children: msg
			})
		]
	});
}
function Cutscene({ name, onDone }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const scenes = [
		{
			kicker: tr("Финал", "Final"),
			title: tr("Последний свисток", "The last whistle"),
			text: tr(`${name} доигрывают финал. Счёт уже не изменится.`, `${name} finish the final. The score will not change.`)
		},
		{
			kicker: tr("Трибуны", "The stands"),
			title: tr("Кубок над газоном", "The cup above the grass"),
			text: tr("Капитан поднимает трофей. Сетка из 24 клубов осталась позади.", "The captain lifts the trophy. A bracket of 24 clubs is behind them.")
		},
		{
			kicker: tr("Поздравляем", "Congratulations"),
			title: tr(`${name} — обладатель Кубка России`, `${name} — winners of the Russian Cup`),
			text: tr("Этот состав прошёл жеребьёвку без трансферов. Турнир можно начать заново.", "This squad came through the draw without transfers. The tournament can start again.")
		}
	];
	const scene = scenes[step];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-30 flex items-end bg-bg/80 px-4 pb-6 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card mx-auto w-full max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 64 64",
					className: "mb-3 h-16 w-16",
					"aria-hidden": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M18 8h28v8c0 10-6 18-14 20-8-2-14-10-14-20z",
							fill: "#e2b93b"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M18 12c-6 1-10 6-10 12 0 8 6 12 12 12M46 12c6 1 10 6 10 12 0 8-6 12-12 12",
							fill: "none",
							stroke: "#e2b93b",
							strokeWidth: "3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M28 36h8v8h6v6H22v-6h6z",
							fill: "#e2b93b"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-widest text-gold uppercase",
					children: scene.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl uppercase",
					children: scene.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-fg/75",
					children: scene.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-main mt-4",
					onClick: () => step < scenes.length - 1 ? setStep(step + 1) : onDone(),
					children: step < scenes.length - 1 ? tr("Дальше", "Next") : tr("Закрыть", "Close")
				})
			]
		})
	});
}
var MANAGER_KEY = "chuvash-ball-manager-v1";
var PLAYER_KEY = "chuvash-ball-player-v1";
var STORY_KEY = "chuvash-ball-story-v1";
var REF_KEY = "chuvash-ball-ref-v1";
var CUP_KEY = "rodnoy-myach-cup-v1";
var SAVE_V2 = "chuvash-ball-career-v2";
var SAVE_V1 = "chuvash-ball-career-v1";
var SETTINGS_KEY = "chuvash-ball-settings-v1";
var LEAGUE_KEY = "rodnoy-myach-league-v1";
var DIFFS = [
	{
		id: "novice",
		ru: "Новичок",
		en: "Novice"
	},
	{
		id: "amateur",
		ru: "Любитель",
		en: "Amateur"
	},
	{
		id: "pro",
		ru: "Профессионал",
		en: "Professional"
	},
	{
		id: "world",
		ru: "Мировой класс",
		en: "World class"
	},
	{
		id: "legend",
		ru: "Легенда Волги",
		en: "Volga legend"
	}
];
var SPEEDS = [
	{
		id: .78,
		ru: "Медленно",
		en: "Slow"
	},
	{
		id: .96,
		ru: "Обычно",
		en: "Normal"
	},
	{
		id: 1.12,
		ru: "Быстро",
		en: "Fast"
	}
];
var DEFAULT_SETTINGS = {
	matchMin: 4,
	difficulty: "novice",
	speed: .96,
	sound: true,
	scheme: "both",
	lang: "ru"
};
function unlockInput() {
	document.body.style.overflow = "";
	document.documentElement.style.overflow = "";
	document.body.style.touchAction = "";
	document.body.style.userSelect = "";
	const active = document.activeElement;
	if (active instanceof HTMLElement) active.blur();
}
function halfOf(matchMin) {
	return matchMin / 2;
}
function writeSave(key, value) {
	try {
		if (value == null) localStorage.removeItem(key);
		else localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function loadSettings() {
	try {
		const raw = localStorage.getItem(SETTINGS_KEY);
		if (!raw) return DEFAULT_SETTINGS;
		const data = JSON.parse(raw);
		let speed = typeof data.speed === "number" ? data.speed : .96;
		if (data.pace === 2) {
			if (Math.abs(speed - .78) < .04) speed = .78;
			else if (Math.abs(speed - .96) < .04) speed = .96;
			else if (Math.abs(speed - 1.12) < .04) speed = 1.12;
			else speed = .96;
		} else if (Math.abs(speed - .68) < .03 || Math.abs(speed - .82) < .03 || Math.abs(speed - .78) < .03) speed = .78;
		else if (Math.abs(speed - 1.45) < .03 || Math.abs(speed - 1.58) < .03) speed = 1.12;
		else speed = .96;
		const difficulty = DIFFS.some((d) => d.id === data.difficulty) ? data.difficulty : "novice";
		const scheme = data.scheme === "keys" || data.scheme === "touch" ? data.scheme : "both";
		const rawMin = typeof data.matchMin === "number" ? data.matchMin : data.halfMin;
		const matchMin = rawMin === 2 || rawMin === 3 || rawMin === 4 || rawMin === 5 ? rawMin : rawMin === 6 ? 5 : 4;
		const lang = data.lang === "en" ? "en" : "ru";
		return {
			matchMin,
			difficulty,
			speed,
			sound: data.sound !== false,
			scheme,
			lang
		};
	} catch {
		return DEFAULT_SETTINGS;
	}
}
function parseCareer(raw) {
	if (!raw) return null;
	const data = JSON.parse(raw);
	if (data?.v === 2 && data.teamId && Array.isArray(data.people) && Array.isArray(data.fixtures)) return normalizeCareer(data);
	return null;
}
function loadManager() {
	try {
		const own = parseCareer(localStorage.getItem(MANAGER_KEY));
		if (own) return own;
		const v2 = parseCareer(localStorage.getItem(SAVE_V2));
		if (v2) return v2;
		const v1 = localStorage.getItem(SAVE_V1);
		if (!v1) return null;
		const legacy = migrateLegacy(JSON.parse(v1));
		return legacy ? normalizeCareer(legacy) : null;
	} catch {
		return null;
	}
}
function loadPlayer() {
	try {
		return parseCareer(localStorage.getItem(PLAYER_KEY));
	} catch {
		return null;
	}
}
function loadStory() {
	try {
		const raw = localStorage.getItem(STORY_KEY);
		if (!raw) return null;
		const data = JSON.parse(raw);
		if (data?.v !== 1 || !data.teamId || !data.career) return null;
		return {
			...data,
			career: normalizeCareer(data.career)
		};
	} catch {
		return null;
	}
}
function loadRef() {
	try {
		const raw = localStorage.getItem(REF_KEY);
		if (!raw) return null;
		return reviveRef(JSON.parse(raw));
	} catch {
		return null;
	}
}
function installProbe(sim) {
	window.__controlsTest = {
		getYaw: () => sim.getYaw(),
		getSpeed: () => sim.getSpeed(),
		setKeys: (codes) => sim.setKeys(codes),
		ticks: () => sim.ticks,
		debug: () => sim.debug()
	};
}
function GameApp() {
	const [generation, setGeneration] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameBoundary, {
		onRecover: () => setGeneration((n) => n + 1),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameRoot, {}, generation)
	});
}
var GameBoundary = class extends import_react.Component {
	state = { error: "" };
	static getDerivedStateFromError(error) {
		return { error: error instanceof Error && error.message ? error.message : tr("Неизвестная ошибка", "Unknown error") };
	}
	render() {
		if (!this.state.error) return this.props.children;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "safe-top safe-bot mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-widest uppercase text-mint",
					children: tr("Родной мяч", "Home Ball")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-4xl uppercase",
					children: tr("Сбой экрана", "Screen failed")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-fg/75",
					children: tr("Этот экран оборвался. Сохранения в браузере не стёрты. Можно вернуться в меню без перезагрузки страницы.", "This screen stopped. Saves in the browser were not wiped. You can return to the menu without reloading the page.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs break-words text-fg/50",
					children: this.state.error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-main mt-4",
					onClick: () => {
						this.setState({ error: "" });
						this.props.onRecover();
					},
					children: tr("В меню", "To the menu")
				})
			]
		});
	}
};
function GameRoot() {
	const [screen, setScreen] = (0, import_react.useState)("home");
	const [manager, setManager] = (0, import_react.useState)(null);
	const [player, setPlayer] = (0, import_react.useState)(null);
	const [story, setStory] = (0, import_react.useState)(null);
	const [refCareer, setRefCareer] = (0, import_react.useState)(null);
	const [cup, setCup] = (0, import_react.useState)(null);
	const [settings, setSettings] = (0, import_react.useState)(DEFAULT_SETTINGS);
	const [league, setLeague] = (0, import_react.useState)("chuvash");
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [homeId, setHomeId] = (0, import_react.useState)("KHM");
	const [awayId, setAwayId] = (0, import_react.useState)("SPM");
	const [clubId, setClubId] = (0, import_react.useState)("KHM");
	const [coachId, setCoachId] = (0, import_react.useState)(null);
	const [snap, setSnap] = (0, import_react.useState)(null);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [subMsg, setSubMsg] = (0, import_react.useState)("");
	const [play, setPlay] = (0, import_react.useState)(null);
	const simRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const againRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const legacy = loadManager();
		setManager(legacy);
		if (legacy) writeSave(MANAGER_KEY, legacy);
		setPlayer(loadPlayer());
		setStory(loadStory());
		setRefCareer(loadRef());
		try {
			setCup(reviveCup(JSON.parse(localStorage.getItem(CUP_KEY) || "null")));
		} catch {
			setCup(null);
		}
		const loaded = loadSettings();
		setSettings(loaded);
		setActiveLang(loaded.lang);
		audio.ui = loaded.sound;
		const saved = localStorage.getItem(LEAGUE_KEY);
		const id = saved === "volga" || saved === "siberia" ? saved : "chuvash";
		setLeague(id);
		document.documentElement.dataset.league = id;
		if (id !== "chuvash") {
			const list = teamsIn(id);
			setHomeId(list[0].id);
			setAwayId(list[1].id);
			setClubId(list[0].id);
		}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const click = (e) => {
			const el = e.target instanceof Element ? e.target.closest("button, [role='button']") : null;
			if (!el || el.disabled) return;
			try {
				audio.click();
			} catch {}
		};
		document.addEventListener("click", click);
		return () => {
			document.removeEventListener("click", click);
			MatchSim.haltAll();
			unlockInput();
		};
	}, []);
	function moveLeague(dir) {
		const next = neighborLeague(league, dir);
		const list = teamsIn(next);
		setLeague(next);
		setHomeId(list[0].id);
		setAwayId(list[1].id);
		setClubId(list[0].id);
		try {
			localStorage.setItem(LEAGUE_KEY, next);
		} catch {}
		document.documentElement.dataset.league = next;
	}
	function persistSettings(next) {
		setSettings(next);
		setActiveLang(next.lang);
		audio.ui = next.sound;
		writeSave(SETTINGS_KEY, {
			...next,
			pace: 2
		});
	}
	function persistManager(next) {
		setManager(next);
		writeSave(MANAGER_KEY, next);
	}
	function persistPlayer(next) {
		setPlayer(next);
		writeSave(PLAYER_KEY, next);
	}
	function persistStory(next) {
		setStory(next);
		writeSave(STORY_KEY, next);
	}
	function persistRef(next) {
		setRefCareer(next);
		writeSave(REF_KEY, next);
	}
	function persistCup(next) {
		setCup(next);
		writeSave(CUP_KEY, next);
	}
	function boot(sim, meta, again) {
		try {
			audio.unlock();
			sim.volume = settings.sound ? .8 : 0;
			const prev = simRef.current;
			const carry = prev && prev !== sim && prev.homeKit && prev.awayKit ? {
				home: prev.homeKit,
				away: prev.awayKit,
				weather: prev.weather
			} : null;
			prev?.stop();
			audio.setMatch(true);
			if (carry) {
				sim.setSideKit(0, carry.home);
				sim.setSideKit(1, carry.away);
				sim.setWeather(carry.weather);
				sim.beginPlay();
			}
			const first = sim.snapshot();
			sim.onHud = (s) => setSnap(s);
			simRef.current = sim;
			installProbe(sim);
			againRef.current = again ?? null;
			const canvas = canvasRef.current;
			if (canvas) sim.bindCanvas(canvas);
			sim.start();
			setPlay(meta);
			setSnap(first);
			setPicked(null);
			setSubMsg("");
			setScreen("match");
		} catch (err) {
			console.error(err);
			sim.stop();
			if (simRef.current === sim) simRef.current = null;
			setSnap(null);
			setScreen((cur) => cur === "match" ? meta.origin : cur);
		}
	}
	function careerSim(career, lock, rated) {
		const next = nextUserFixture(career);
		if (!next) return null;
		const userHome = next.fixture.home === career.teamId;
		const home = next.fixture.home;
		const away = next.fixture.away;
		const level = rated ? careerLevel(career, userHome ? away : home, lock) : null;
		const difficulty = level ? level.diff : settings.difficulty;
		return {
			next,
			userHome,
			opts: {
				homeId: home,
				awayId: away,
				halfMin: halfOf(settings.matchMin),
				difficulty,
				formation: career.formation,
				homeRoster: toRoster(career, home, userHome ? career.lineup : void 0),
				awayRoster: toRoster(career, away, userHome ? void 0 : career.lineup),
				speed: settings.speed,
				lockId: lock ? career.createdId || void 0 : void 0,
				lockControl: lock,
				userSide: userHome ? 0 : 1,
				shapeSalt: next.index
			}
		};
	}
	function startQuick(h = homeId, a = awayId) {
		if (h === a) return;
		const opts = {
			homeId: h,
			awayId: a,
			halfMin: halfOf(settings.matchMin),
			difficulty: settings.difficulty,
			speed: settings.speed
		};
		const meta = {
			origin: "home",
			index: -1,
			userHome: true
		};
		const again = () => boot(new MatchSim(opts), meta, again);
		boot(new MatchSim(opts), meta, again);
	}
	function startManagerMatch() {
		if (!manager) return;
		const built = careerSim(manager, false, true);
		if (!built) return;
		const meta = {
			origin: "manager",
			index: built.next.index,
			userHome: built.userHome
		};
		boot(new MatchSim(built.opts), meta);
	}
	function startPlayerMatch() {
		if (!player) return;
		const built = careerSim(player, true, true);
		if (!built) return;
		const meta = {
			origin: "player",
			index: built.next.index,
			userHome: built.userHome
		};
		boot(new MatchSim(built.opts), meta);
	}
	function startStoryMatch() {
		if (!story) return;
		const built = careerSim(story.career, true, false);
		if (!built) return;
		const chapter = STORY[story.step];
		const meta = {
			origin: "story",
			index: built.next.index,
			userHome: built.userHome,
			final: chapter?.kind === "match" && Boolean(chapter.final)
		};
		boot(new MatchSim(built.opts), meta);
	}
	function startCupMatch() {
		if (!cup) return;
		const index = userTieIndex(cup);
		const tie = index >= 0 ? cup.rounds[cup.round]?.ties[index] : null;
		if (!tie?.away) return;
		const userHome = tie.home === cup.teamId;
		const shell = shellCareer(cup);
		boot(new MatchSim({
			homeId: tie.home,
			awayId: tie.away,
			halfMin: halfOf(settings.matchMin),
			difficulty: settings.difficulty,
			formation: cup.formation,
			homeRoster: toRoster(shell, tie.home, userHome ? cup.lineup : void 0),
			awayRoster: toRoster(shell, tie.away, userHome ? void 0 : cup.lineup),
			speed: settings.speed,
			userSide: userHome ? 0 : 1,
			shapeSalt: cup.round * 10 + index
		}), {
			origin: "cup",
			index,
			userHome
		});
	}
	function startRefMatch() {
		if (!refCareer) return;
		const fx = refFixture(refCareer.nextIndex, refCareer.league);
		if (!fx) return;
		boot(new MatchSim({
			homeId: fx.home,
			awayId: fx.away,
			halfMin: 1,
			difficulty: settings.difficulty,
			speed: settings.speed,
			referee: true,
			shapeSalt: refCareer.nextIndex
		}), {
			origin: "referee",
			index: refCareer.nextIndex,
			userHome: true
		});
	}
	function startRefCupMatch() {
		if (!refCareer) return;
		const next = refCupAssignment(refCareer);
		if (!next) return;
		boot(new MatchSim({
			homeId: next.home,
			awayId: next.away,
			halfMin: 1,
			difficulty: settings.difficulty,
			speed: settings.speed,
			referee: true,
			shapeSalt: refCareer.cup.round * 20 + next.index
		}), {
			origin: "referee",
			index: next.index,
			userHome: true,
			refCup: true
		});
	}
	function leaveMatch() {
		const origin = play?.origin ?? "home";
		MatchSim.haltAll();
		simRef.current = null;
		unlockInput();
		setSnap(null);
		setScreen({
			home: "home",
			manager: "manager",
			player: "player",
			story: "story",
			referee: "referee",
			cup: "cup"
		}[origin] ?? "home");
	}
	function finishMatch() {
		try {
			const side = play?.userHome ? 0 : 1;
			const names = snap ? snap.scorers.filter((g) => g.side === side && !g.own).map((g) => g.name) : [];
			if (play?.origin === "manager" && manager && play.index >= 0 && snap) persistManager(recordUserMatch(manager, play.index, snap.score[0], snap.score[1], names));
			if (play?.origin === "player" && player && play.index >= 0 && snap) persistPlayer(recordUserMatch(player, play.index, snap.score[0], snap.score[1], names));
			if (play?.origin === "story" && story && play.index >= 0 && snap) {
				let career = recordUserMatch(story.career, play.index, snap.score[0], snap.score[1], names, true);
				if (play.final) career = simulateRest(career);
				persistStory({
					...story,
					teamId: career.teamId,
					career,
					step: story.step + 1,
					note: ""
				});
			}
			if (play?.origin === "referee" && refCareer && snap) {
				const report = {
					correct: snap.refCorrect,
					wrong: snap.refWrong,
					fouls: snap.fouls[0] + snap.fouls[1],
					yellows: snap.yellows[0] + snap.yellows[1],
					reds: snap.reds[0] + snap.reds[1],
					pens: snap.pens[0] + snap.pens[1],
					offsides: snap.offsides[0] + snap.offsides[1]
				};
				const score = {
					hg: snap.score[0],
					ag: snap.score[1]
				};
				persistRef(play.refCup ? applyRefCup(refCareer, play.index, report, score) : applyRefMatch(refCareer, report, score));
			}
			if (play?.origin === "cup" && cup && play.index >= 0 && snap) persistCup(recordCupScore(cup, play.index, snap.score[0], snap.score[1], names));
		} catch (err) {
			console.error(err);
		}
		leaveMatch();
	}
	function simulateStory() {
		if (!story) return;
		const next = nextUserFixture(story.career);
		if (!next) return;
		const trial = simulateIndex(story.career, next.index);
		const row = trial.fixtures[next.index];
		if (!row || row.hg === null || row.ag === null) return;
		const chapter = STORY[story.step];
		const final = chapter?.kind === "match" && Boolean(chapter.final);
		let career = trial;
		if (final) career = simulateRest(career);
		persistStory({
			...story,
			teamId: career.teamId,
			career,
			step: story.step + 1,
			note: ""
		});
	}
	function simulateRef() {
		if (!refCareer) return;
		persistRef(simulateRefMatch(refCareer));
	}
	const clubs = teamsIn(league);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home$1, {
				hydrated,
				hasManager: Boolean(manager),
				hasPlayer: Boolean(player),
				hasStory: Boolean(story),
				hasRef: Boolean(refCareer),
				hasCup: Boolean(cup),
				league,
				teams: clubs,
				onPrev: () => moveLeague(-1),
				onNext: () => moveLeague(1),
				onStart: () => startQuick(clubs[0].id, clubs[1].id),
				onPick: () => setScreen("pick"),
				onClubs: () => setScreen("clubs"),
				onSettings: () => setScreen("settings"),
				onSaves: () => setScreen("saves"),
				onAuthors: () => setScreen("authors"),
				onManager: () => {
					setCoachId(null);
					setScreen(manager ? "manager" : "pickManager");
				},
				onPlayer: () => setScreen(player ? "player" : "pickPlayer"),
				onStory: () => setScreen(story ? "story" : "pickStory"),
				onRef: () => setScreen(refCareer ? "referee" : "refCreate"),
				onCup: () => setScreen(cup ? "cup" : "pickCup")
			}),
			screen === "clubs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubBrowser, {
				teams: clubs,
				onBack: () => setScreen("home"),
				onOpen: (id) => {
					setClubId(id);
					setScreen("club");
				}
			}),
			screen === "club" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubPage, {
				id: clubId,
				onBack: () => setScreen("clubs")
			}),
			screen === "pickManager" && !coachId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerStart, {
				onBack: () => setScreen("home"),
				onCoach: setCoachId
			}),
			screen === "pickManager" && coachId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubPick, {
				title: tr("Клуб тренера", "Manager's club"),
				text: tr("Состав, трансферы, тренировки клуба. В матче вы управляете всей командой.", "Squad, transfers, club training. In a match you control the whole team."),
				teams: clubs,
				onBack: () => setCoachId(null),
				onChoose: (id) => {
					persistManager(createManagerCareer(id, coachId));
					setCoachId(null);
					setScreen("manager");
				}
			}),
			screen === "pickPlayer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubPick, {
				title: tr("Карьера игрока", "Player career"),
				text: tr("Выберите клуб. Дальше создадите футболиста: на поле можно бегать только им.", "Pick a club. Then you create a footballer: on the pitch you can only run with him."),
				teams: clubs,
				onBack: () => setScreen("home"),
				onChoose: (id) => {
					setClubId(id);
					setScreen("createPlayer");
				}
			}),
			screen === "createPlayer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePlayer, {
				teamId: clubId,
				onBack: () => setScreen("pickPlayer"),
				onDone: (draft) => {
					if (draft.pos === "GK") return;
					persistPlayer(createCareer(clubId, draft));
					setScreen("player");
				}
			}),
			screen === "pickStory" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubPick, {
				title: tr("Клуб Васи Иванова", "Vasya Ivanov's club"),
				text: tr("Вася начинает сезон здесь. В конце года место в таблице решает финал: пьедестал — счастливый, ниже третьего — нет. Новый сезон сохраняет трансферы и победы.", "Vasya starts the season here. At the end of the year the table decides the ending: a podium is a happy one, below third is not. A new season keeps transfers and wins."),
				teams: clubs,
				onBack: () => setScreen("home"),
				onChoose: (id) => {
					persistStory({
						v: 1,
						teamId: id,
						step: 0,
						rigged: false,
						note: "",
						career: createCareer(id, {
							name: "В. Иванов",
							pos: "ST",
							num: 9
						})
					});
					setScreen("story");
				}
			}),
			screen === "pick" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Friendly, {
				homeId,
				awayId,
				settings,
				teams: clubs,
				onHome: setHomeId,
				onAway: setAwayId,
				onSettings: persistSettings,
				onBack: () => setScreen("home"),
				onStart: () => startQuick()
			}),
			screen === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {
				settings,
				onChange: persistSettings,
				onBack: () => setScreen("home")
			}),
			screen === "authors" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthorsScreen, { onBack: () => setScreen("home") }),
			screen === "saves" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavesFolder, {
				onBack: () => setScreen("home"),
				onOpen: (id) => setScreen(id),
				manager,
				player,
				story,
				referee: refCareer,
				cup,
				settingsNote: `${DIFFS.find((d) => d.id === settings.difficulty)?.[settings.lang === "en" ? "en" : "ru"] ?? ""} · ${tr("звук", "sound")} ${settings.sound ? tr("вкл", "on") : tr("выкл", "off")} · ${settings.scheme === "keys" ? tr("клавиатура", "keyboard") : settings.scheme === "touch" ? tr("сенсор", "touch") : tr("джойстик и клавиатура", "pad and keyboard")}`,
				onClear: (id) => {
					if (id === "manager") persistManager(null);
					if (id === "player") persistPlayer(null);
					if (id === "story") persistStory(null);
					if (id === "referee") persistRef(null);
					if (id === "cup") persistCup(null);
				},
				onRewrite: (id) => {
					if (id === "manager") {
						persistManager(null);
						setCoachId(null);
						setScreen("pickManager");
					}
					if (id === "player") {
						persistPlayer(null);
						setScreen("pickPlayer");
					}
					if (id === "story") {
						persistStory(null);
						setScreen("pickStory");
					}
					if (id === "referee") {
						persistRef(null);
						setScreen("refCreate");
					}
					if (id === "cup") {
						persistCup(null);
						setScreen("pickCup");
					}
				}
			}),
			screen === "pickCup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubPick, {
				title: tr("Кубок России", "Russian Cup"),
				text: tr("Все 24 клуба, независимо от выбранной лиги. Жеребьёвка ставит рядом команды с близким рейтингом и формой. Трансферов нет. Можно играть, симулировать или отказаться: отказ — техническое 0:3.", "All 24 clubs, whatever league you picked. The draw pairs sides of similar rating and form. No transfers. You can play, simulate or forfeit: a forfeit is a 0-3 walkover."),
				teams: TEAMS,
				onBack: () => setScreen("home"),
				onChoose: (id) => {
					persistCup(createCup(id));
					setScreen("cup");
				}
			}),
			screen === "cup" && cup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupDesk, {
				cup,
				onChange: persistCup,
				onPlay: startCupMatch,
				onMenu: () => setScreen("home"),
				onReset: () => {
					persistCup(null);
					setScreen("home");
				},
				onRestart: () => persistCup(createCup(cup.teamId))
			}),
			screen === "manager" && manager && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerDesk, {
				career: manager,
				onChange: persistManager,
				onPlay: startManagerMatch,
				onMenu: () => setScreen("home"),
				onReset: () => {
					persistManager(null);
					setScreen("home");
				}
			}),
			screen === "player" && player && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerDesk, {
				career: player,
				onChange: persistPlayer,
				onPlay: startPlayerMatch,
				onMenu: () => setScreen("home"),
				onReset: () => {
					persistPlayer(null);
					setScreen("home");
				}
			}),
			screen === "story" && story && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryBook, {
				state: story,
				onChange: persistStory,
				onPlay: startStoryMatch,
				onSimulate: simulateStory,
				onMenu: () => setScreen("home"),
				onReset: () => {
					persistStory(null);
					setScreen("home");
				}
			}),
			screen === "refCreate" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefereeCreate, {
				onBack: () => setScreen("home"),
				onDone: (name) => {
					persistRef(createRef(name, league));
					setScreen("referee");
				}
			}),
			screen === "referee" && refCareer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefereeDesk, {
				state: refCareer,
				onMatch: startRefMatch,
				onCup: startRefCupMatch,
				onSimulate: simulateRef,
				onMenu: () => setScreen("home"),
				onReset: () => {
					persistRef(null);
					setScreen("home");
				},
				onSave: () => persistRef(refCareer),
				onChange: persistRef
			}),
			screen === "match" && snap && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchLayer, {
				snap,
				canvasRef,
				simRef,
				picked,
				subMsg,
				career: play?.origin === "manager" || play?.origin === "player" || play?.origin === "story" || play?.origin === "cup",
				showTouch: settings.scheme !== "keys",
				onPick: setPicked,
				onSubMsg: setSubMsg,
				onLeave: leaveMatch,
				onDone: finishMatch,
				onAgain: play?.origin === "home" ? () => againRef.current?.() : null
			})
		]
	});
}
function Home$1({ hydrated, hasManager, hasPlayer, hasStory, hasRef, hasCup, league, teams, onPrev, onNext, onStart, onPick, onClubs, onSettings, onSaves, onAuthors, onManager, onPlayer, onStory, onRef, onCup }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "league-arrow",
						"aria-label": tr("Предыдущая лига", "Previous league"),
						onClick: onPrev,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "h-5 w-5",
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M14.5 5 8 12l6.5 7",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.2",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-widest text-mint uppercase",
							children: tr("Родной мяч", "Home Ball")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display mt-2 text-5xl leading-none uppercase sm:text-7xl",
							children: [leagueTitle(league), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-mint",
								children: tr("мяч", "ball")
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "league-arrow",
						"aria-label": tr("Следующая лига", "Next league"),
						onClick: onNext,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "h-5 w-5",
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M9.5 5 16 12l-6.5 7",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2.2",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-4 gap-3 sm:grid-cols-8",
				children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
							id: t.id,
							className: "h-12 w-12"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-center text-xs leading-tight text-fg/70",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-center text-[10px] text-mint",
							children: clubRating(t.id)
						})
					]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Быстрый матч", "Quick match")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid gap-2 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "btn-main",
						"aria-label": "Start",
						onClick: onStart,
						children: ["Start", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-xs font-sans font-normal normal-case tracking-normal text-bg/80",
							children: [
								teams[0]?.name,
								" — ",
								teams[1]?.name
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-ghost",
						onClick: onPick,
						children: tr("Свой матч", "Custom match")
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Карьера", "Career")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid gap-2 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onPlayer,
							children: hydrated && hasPlayer ? tr("Игрок: продолжить", "Player: continue") : tr("Карьера игрока", "Player career")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onManager,
							children: hydrated && hasManager ? tr("Тренер: продолжить", "Manager: continue") : tr("Карьера тренера", "Manager career")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onRef,
							children: hydrated && hasRef ? tr("Судья: продолжить", "Referee: continue") : tr("Карьера судьи", "Referee career")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "btn-ghost",
							onClick: onCup,
							children: [hydrated && hasCup ? tr("Кубок: продолжить", "Cup: continue") : tr("Кубок России", "Russian Cup"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-xs font-normal normal-case tracking-normal text-fg/60",
								children: tr("Все 24 клуба", "All 24 clubs")
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xs tracking-widest text-fg/50 uppercase",
					children: tr("История", "Story")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-ghost mt-2 w-full sm:w-auto",
					onClick: onStory,
					children: hydrated && hasStory ? tr("Продолжить историю Васи", "Continue Vasya's story") : tr("История Васи Иванова", "Vasya Ivanov's story")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Информация", "Info")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid gap-2 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onClubs,
							children: tr("Клубы и игроки", "Clubs and players")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onSettings,
							children: tr("Настройки", "Settings")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onSaves,
							children: tr("Папка сохранений", "Save folder")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onAuthors,
							children: tr("Авторы", "Credits")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-auto pt-10 text-center text-xs tracking-widest text-fg/40",
				children: "BY KOLOSOV MADE AI"
			})
		]
	});
}
function ManagerStart({ onBack, onCoach }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Карьера тренера", "Manager career")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Сначала человек на скамейке. Потом клуб. Истории не пересекаются: от этого зависят рейтинг и бюджет.", "First the person on the bench. Then the club. Stories do not mix: rating and budget depend on it.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3",
				children: COACHES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "card text-left",
					onClick: () => onCoach(c.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display block text-lg uppercase",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-sm text-mint",
							children: [
								tr(c.title, c.titleEn || c.title),
								" · ",
								tr("рейтинг", "rating"),
								" ",
								c.rating
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-fg/70",
							children: tr(c.story, c.storyEn || c.story)
						})
					]
				}, c.id))
			})
		]
	});
}
function ClubPick({ title, text, teams, onBack, onChoose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-5xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-fg/70",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "card flex items-center gap-3 text-left",
					onClick: () => onChoose(t.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
						id: t.id,
						className: "h-14 w-14 shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display block text-lg uppercase",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-fg/70",
						children: [
							t.city,
							" · ",
							t.stadium,
							" · ",
							tr("рейтинг", "rating"),
							" ",
							clubRating(t.id)
						]
					})] })]
				}, t.id))
			})
		]
	});
}
function Friendly(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-5xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: props.onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Свой матч", "Custom match")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamColumn, {
					title: tr("Хозяева", "Home"),
					teams: props.teams,
					selected: props.homeId,
					onPick: props.onHome
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamColumn, {
					title: tr("Гости", "Away"),
					teams: props.teams,
					selected: props.awayId,
					onPick: props.onAway
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchOptions, {
				settings: props.settings,
				onChange: props.onSettings
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-main mt-5 w-full sm:w-auto",
				disabled: props.homeId === props.awayId,
				onClick: props.onStart,
				children: "Start"
			}),
			props.homeId === props.awayId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mint",
				children: tr("Нужны две разные команды", "Pick two different teams")
			})
		]
	});
}
function AuthorsScreen({ onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-3xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Авторы", "Credits")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-fg/50 uppercase",
						children: tr("Об игре", "About")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg/80",
						children: tr("«Родной мяч» — футбольная игра о трёх лигах и о Васе Иванове: чувашской, волжской и сибирской. Быстрый матч, карьера тренера, карьера игрока, история, судейство и Кубок России на все 24 клуба. Составы, схема, трансферы и статистика сезона сохраняются в браузере.", "Home Ball is a football game about three leagues and Vasya Ivanov: Chuvash, Volga and Siberian. Quick match, manager career, player career, story, refereeing and the Russian Cup across all 24 clubs. Squads, shape, transfers and the season stay in the browser.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-sm tracking-widest text-mint uppercase",
						children: tr("Версия 1.0", "Version 1.0")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "card mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Авторы", "Credits")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg/80",
					children: tr("Игру создали Иван и Михаил Колосовы с помощью AI GROK.", "The game was made by Ivan and Mikhail Kolosov with AI GROK.")
				})]
			})
		]
	});
}
function SettingsScreen({ settings, onChange, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-3xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Настройки", "Settings")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Быстрый матч, карьеры и история. Матчи судьи всегда две минуты: тайм по одной.", "Quick match, careers and story. Referee matches are always two minutes: one minute each half.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchOptions, {
				settings,
				onChange
			})
		]
	});
}
function halfText(matchMin) {
	const sec = Math.round(matchMin / 2 * 60);
	const m = Math.floor(sec / 60);
	const s = sec % 60;
	if (s === 0) return tr(`${m} мин`, `${m} min`);
	return tr(`${m} мин ${s} сек`, `${m} min ${s} sec`);
}
function MatchOptions({ settings, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Язык", "Language")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/60",
					children: tr("Русский по умолчанию. В английском деньги карьеры показываются в долларах.", "Russian is the default. In English, career money is shown in dollars.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: settings.lang === "ru" ? "chip-on" : "chip",
						onClick: () => onChange({
							...settings,
							lang: "ru"
						}),
						children: "Русский"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: settings.lang === "en" ? "chip-on" : "chip",
						onClick: () => onChange({
							...settings,
							lang: "en"
						}),
						children: "English"
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Длительность матча", "Match length")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/60",
					children: tr("Это весь матч. Два тайма, каждый ровно в два раза короче. Пауза и перерыв время не тратят.", "This is the whole match. Two halves, each exactly half as long. Pause and half-time do not spend the clock.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [
						2,
						3,
						4,
						5
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: settings.matchMin === n ? "chip-on" : "chip",
						onClick: () => onChange({
							...settings,
							matchMin: n
						}),
						children: [
							n,
							" ",
							tr("мин", "min"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block font-sans text-[10px] font-normal normal-case tracking-normal",
								children: tr(`2 тайма по ${halfText(n)}`, `2 halves of ${halfText(n)}`)
							})
						]
					}, n))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Сложность", "Difficulty")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/60",
					children: tr("Выше уровень — соперник точнее бьёт, держит позиции и жёстче отбирает. На Легенде Волги прессинг плотный, а удары опаснее. Жёсткий отбор сзади — карточка. Травм в игре нет.", "Higher levels shoot truer, hold their shape and tackle harder. Volga Legend presses tight and finishes more. A cynical tackle from behind is a card. There are no injuries.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: DIFFS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: settings.difficulty === d.id ? "chip-on" : "chip",
						onClick: () => onChange({
							...settings,
							difficulty: d.id
						}),
						children: settings.lang === "en" ? d.en : d.ru
					}, d.id))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Скорость матча", "Match speed")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/60",
					children: tr("Медленно, обычно или быстро — на любой сложности. Меняет бег и мяч. Часы 90 минут остаются выбранной длиной.", "Slow, normal or fast, on every difficulty. It changes running and the ball. The 90-minute clock stays the length you picked.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: SPEEDS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: settings.speed === s.id ? "chip-on" : "chip",
						onClick: () => onChange({
							...settings,
							speed: s.id
						}),
						children: settings.lang === "en" ? s.en : s.ru
					}, s.id))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-fg/50 uppercase",
				children: tr("Звук", "Sound")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: settings.sound ? "chip-on" : "chip",
					onClick: () => onChange({
						...settings,
						sound: true
					}),
					children: tr("Вкл", "On")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: !settings.sound ? "chip-on" : "chip",
					onClick: () => onChange({
						...settings,
						sound: false
					}),
					children: tr("Выкл", "Off")
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-fg/50 uppercase",
					children: tr("Управление", "Controls")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-fg/60",
					children: tr("Удерживайте пас и удар, чтобы набрать силу. Геймпад: крест/A пас, круг/B удар, квадрат/X отбор, треугольник/Y или L1 смена, R1/R2 рывок, Options/Start пауза.", "Hold pass and shoot to add power. Pad: cross/A pass, circle/B shoot, square/X tackle, triangle/Y or L1 switch, R1/R2 sprint, Options/Start pause.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: settings.scheme === "both" ? "chip-on" : "chip",
							onClick: () => onChange({
								...settings,
								scheme: "both"
							}),
							children: tr("Джойстик и клавиатура", "Pad and keyboard")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: settings.scheme === "touch" ? "chip-on" : "chip",
							onClick: () => onChange({
								...settings,
								scheme: "touch"
							}),
							children: tr("Сенсор", "Touch")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: settings.scheme === "keys" ? "chip-on" : "chip",
							onClick: () => onChange({
								...settings,
								scheme: "keys"
							}),
							children: tr("Только клавиатура", "Keyboard only")
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeysHelp, {})
		]
	});
}
function KeysHelp() {
	const rows = [
		[tr("W A S D или стрелки", "W A S D or arrows"), tr("Бег", "Run")],
		[tr("Пробел или J, удерживать", "Space or J, hold"), tr("Пас, сила от нажатия", "Pass, power from the hold")],
		[tr("F или K, удерживать", "F or K, hold"), tr("Удар, сила от нажатия", "Shot, power from the hold")],
		["Shift", tr("Рывок", "Sprint")],
		[tr("Q или Tab", "Q or Tab"), tr("Смена игрока, только без мяча", "Switch player, only after you lose the ball")],
		["C", tr("Отбор", "Tackle")],
		["R", tr("Быстрая замена, только со своим мячом", "Quick sub, only with the ball")],
		["Esc", tr("Пауза", "Pause")],
		[tr("Правая кнопка мыши", "Right mouse button"), tr("Удар в сторону курсора", "Shot toward the cursor")]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs tracking-widest text-fg/50 uppercase",
		children: tr("Информация", "Info")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 grid gap-1 text-sm",
		children: rows.map(([key, act]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex justify-between gap-3 border-b border-fg/10 py-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: key }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg/70",
				children: act
			})]
		}, key))
	})] });
}
function TeamColumn({ title, teams, selected, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-sm tracking-widest uppercase text-fg/60",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 grid gap-2",
		children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: selected === t.id ? "card card-on flex items-center gap-3" : "card flex items-center gap-3",
			onClick: () => onPick(t.id),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
				id: t.id,
				className: "h-10 w-10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display uppercase",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-fg/60",
					children: [
						t.city,
						" · ",
						tr("рейтинг", "rating"),
						" ",
						clubRating(t.id)
					]
				})]
			})]
		}, t.id))
	})] });
}
function MatchLayer({ snap, canvasRef, simRef, picked, subMsg, career, showTouch, onPick, onSubMsg, onLeave, onDone, onAgain }) {
	const rootRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const sim = simRef.current;
		rootRef.current?.focus();
		if (!canvas || !sim) return;
		sim.bindCanvas(canvas);
		const ro = new ResizeObserver(() => sim.resize());
		ro.observe(canvas);
		document.body.style.overflow = "hidden";
		const blockGesture = (e) => e.preventDefault();
		canvas.addEventListener("gesturestart", blockGesture);
		canvas.addEventListener("gesturechange", blockGesture);
		return () => {
			ro.disconnect();
			canvas.removeEventListener("gesturestart", blockGesture);
			canvas.removeEventListener("gesturechange", blockGesture);
			unlockInput();
		};
	}, [canvasRef, simRef]);
	function worldFromEvent(e) {
		const sim = simRef.current;
		const rect = e.currentTarget.getBoundingClientRect();
		if (!sim) return;
		sim.aim = sim.pointerWorld(e.clientX - rect.left, e.clientY - rect.top);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		tabIndex: 0,
		className: "match-field fixed inset-0 overflow-hidden bg-bg outline-none select-none",
		style: { touchAction: "none" },
		onContextMenu: (e) => {
			if (e.target.tagName === "CANVAS") return;
			e.preventDefault();
		},
		onPointerDown: () => rootRef.current?.focus(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0 block h-full w-full touch-none",
				onContextMenu: (e) => {
					e.preventDefault();
					if (snap.referee) return;
					if (e.nativeEvent instanceof PointerEvent && e.nativeEvent.pointerType !== "mouse") return;
					worldFromEvent(e);
					simRef.current?.fire("shoot", 1);
				},
				onPointerDown: (e) => {
					rootRef.current?.focus();
					if (e.pointerType !== "mouse" || e.button !== 0) return;
					worldFromEvent(e);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "safe-top flex items-start justify-between gap-2 px-3 pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-auto min-w-0 rounded-2xl border border-fg/15 bg-bg/80 px-2.5 py-1.5 backdrop-blur-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 sm:gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs uppercase",
										children: snap.half === 1 ? tr("1-й тайм", "1st half") : tr("2-й тайм", "2nd half")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm tabular-nums sm:text-base",
										children: snap.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
										id: snap.homeCode,
										className: "hidden h-6 w-6 sm:block"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs sm:text-sm",
										children: snap.homeCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-base tabular-nums sm:text-lg",
										children: [
											snap.score[0],
											":",
											snap.score[1]
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xs sm:text-sm",
										children: snap.awayCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crest, {
										id: snap.awayCode,
										className: "hidden h-6 w-6 sm:block"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 truncate font-display text-xs tracking-wide uppercase",
								children: snap.carrier
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-auto flex shrink-0 flex-col items-end gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => simRef.current?.togglePause(),
								children: tr("Пауза", "Pause")
							}), snap.phase !== "intro" && snap.phase !== "fulltime" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip",
								onClick: () => simRef.current?.simulateToEnd(),
								children: tr("Продолжить и выйти", "Sim and exit")
							})]
						})]
					}),
					snap.call && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-36 right-3 left-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-gold uppercase",
							children: snap.call === "foul" ? tr("Фол?", "Foul?") : tr("Офсайд?", "Offside?")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg/80",
							children: snap.callText
						})]
					}),
					snap.goal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "goal-card safe-bot pointer-events-none absolute right-3 bottom-36 left-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xs tracking-widest text-mint uppercase",
								children: [
									snap.goal.own ? tr("Автогол", "Own goal") : tr("Гол", "Goal"),
									" · ",
									snap.goal.minute
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl uppercase",
								children: snap.goal.name
							}),
							snap.goal.assist && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-fg/70",
								children: [
									tr("Пас", "Assist"),
									": ",
									snap.goal.assist
								]
							})
						]
					}, snap.goal.seq)
				]
			}),
			snap.referee ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefPad, { simRef }) : showTouch && snap.phase !== "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TouchControls, {
				simRef,
				locked: snap.locked,
				canSwitch: snap.canSwitch,
				canSub: snap.canSub
			}),
			snap.phase === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "safe-bot absolute inset-x-0 bottom-0 max-h-[48%] overflow-auto px-3 pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-3xl rounded-2xl border border-fg/15 bg-bg/85 p-4 backdrop-blur-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xs tracking-widest text-mint uppercase",
							children: [
								tr("Выход команд", "Teams out"),
								" · ",
								snap.stadium
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineList, {
								title: snap.homeName,
								rows: snap.xi
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineList, {
								title: snap.awayName,
								rows: snap.awayXi
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs tracking-widest text-fg/50 uppercase",
							children: tr("Форма — без обоих выборов матч не начнётся", "Kits — the match will not start until both are chosen")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitChoices, {
							snap,
							onPick: (side, kit) => simRef.current?.setSideKit(side, kit)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-fg/80",
							children: [
								tr("Сводка", "Lineups"),
								": ",
								snap.homeName,
								" ",
								snap.homeShape,
								" · ",
								snap.awayName,
								" ",
								snap.awayShape
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs tracking-widest text-fg/50 uppercase",
							children: tr("Погода", "Weather")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: snap.weather === "clear" ? "chip-on" : "chip",
									onClick: () => simRef.current?.setWeather("clear"),
									children: tr("Ясно", "Clear")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: snap.weather === "rain" ? "chip-on" : "chip",
									onClick: () => simRef.current?.setWeather("rain"),
									children: tr("Дождь", "Rain")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: snap.weather === "snow" ? "chip-on" : "chip",
									onClick: () => simRef.current?.setWeather("snow"),
									children: tr("Снег", "Snow")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-main mt-4",
							disabled: !snap.kitsReady,
							onClick: () => simRef.current?.beginPlay(),
							children: snap.kitsReady ? tr("На поле", "Onto the pitch") : tr("Сначала выберите обе формы", "Choose both kits first")
						})
					]
				})
			}),
			snap.paused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
				simRef,
				snap,
				picked,
				subMsg,
				onPick,
				onSubMsg,
				onLeave
			}),
			snap.phase === "halftime" && !snap.paused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Overlay, {
				title: tr("Перерыв", "Half time"),
				text: `${snap.homeName} ${snap.score[0]} : ${snap.score[1]} ${snap.awayName}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mb-3 space-y-1 text-sm text-fg/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Удары", "Shots"),
							": ",
							snap.shots[0],
							" — ",
							snap.shots[1]
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Владение", "Possession"),
							": ",
							snap.possPct[0],
							"% — ",
							snap.possPct[1],
							"%"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Пасы", "Passes"),
							": ",
							snap.passes[0],
							" — ",
							snap.passes[1]
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Фолы", "Fouls"),
							": ",
							snap.fouls[0],
							" — ",
							snap.fouls[1]
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Жёлтые", "Yellows"),
							": ",
							snap.yellows[0],
							" — ",
							snap.yellows[1]
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Красные", "Reds"),
							": ",
							snap.reds[0],
							" — ",
							snap.reds[1]
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Пенальти", "Penalties"),
							": ",
							snap.pens[0],
							" — ",
							snap.pens[1]
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Офсайды", "Offsides"),
							": ",
							snap.offsides[0],
							" — ",
							snap.offsides[1]
						] }),
						snap.referee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							tr("Судья", "Referee"),
							": ",
							tr("верно", "correct"),
							" ",
							snap.refCorrect,
							", ",
							tr("ошибки", "wrong"),
							" ",
							snap.refWrong
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-main",
							onClick: () => simRef.current?.continueHalf(),
							children: tr("Второй тайм", "Second half")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: () => simRef.current?.togglePause(),
							children: snap.referee ? tr("Пауза", "Pause") : tr("Пауза и замены", "Pause and subs")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: () => simRef.current?.simulateToEnd(),
							children: tr("Продолжить и выйти", "Sim and exit")
						})
					]
				})]
			}),
			snap.phase === "fulltime" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Overlay, {
				title: tr("Финальный свисток", "Full time"),
				text: `${snap.homeName} ${snap.score[0]} : ${snap.score[1]} ${snap.awayName}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mb-3 max-h-52 space-y-1 overflow-auto text-sm text-fg/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Голы", "Goals"),
								": ",
								snap.scorers.length === 0 ? tr("без голов", "no goals") : snap.scorers.map((g) => `${g.minute} ${g.name}${g.own ? tr(" (автогол)", " (own goal)") : ""}${g.assist ? `, ${tr("пас", "assist")} ${g.assist}` : ""}`).join(" · ")
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Удары", "Shots"),
								": ",
								snap.shots[0],
								" — ",
								snap.shots[1]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Владение", "Possession"),
								": ",
								snap.possPct[0],
								"% — ",
								snap.possPct[1],
								"%"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Пасы", "Passes"),
								": ",
								snap.passes[0],
								" — ",
								snap.passes[1]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Фолы", "Fouls"),
								": ",
								snap.fouls[0],
								" — ",
								snap.fouls[1]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Жёлтые", "Yellows"),
								": ",
								snap.yellows[0],
								" — ",
								snap.yellows[1]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Красные", "Reds"),
								": ",
								snap.reds[0],
								" — ",
								snap.reds[1]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Пенальти", "Penalties"),
								": ",
								snap.pens[0],
								" — ",
								snap.pens[1]
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Офсайды", "Offsides"),
								": ",
								snap.offsides[0],
								" — ",
								snap.offsides[1]
							] }),
							snap.added > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Компенсированное", "Added time"),
								": +",
								snap.added
							] }),
							snap.referee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								tr("Судья", "Referee"),
								": ",
								tr("верно", "correct"),
								" ",
								snap.refCorrect,
								", ",
								tr("ошибки", "wrong"),
								" ",
								snap.refWrong
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 rounded-2xl border border-gold/40 bg-gold/10 px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xs tracking-widest text-gold uppercase",
								children: [
									tr("Критики", "Critics"),
									" · ",
									snap.critic.mark
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display uppercase",
								children: snap.critic.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg/75",
								children: snap.critic.text
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-main",
							onClick: onDone,
							children: career ? tr("В карьеру", "Back to career") : tr("В меню", "Menu")
						}), !career && onAgain && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onAgain,
							children: tr("Заново", "Again")
						})]
					})
				]
			})
		]
	});
}
function Stam({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-fg/15",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `h-full ${value > 55 ? "bg-mint" : value > 28 ? "bg-gold" : "bg-hot"}`,
			style: { width: `${Math.max(0, Math.min(100, value))}%` }
		})
	});
}
function TouchControls({ simRef, locked, canSwitch, canSub }) {
	const origin = (0, import_react.useRef)(null);
	const [knob, setKnob] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const limit = 28;
	function setStick(x, y) {
		const sim = simRef.current;
		if (!sim) return;
		sim.touch.x = x;
		sim.touch.y = y;
	}
	function reset() {
		origin.current = null;
		setKnob({
			x: 0,
			y: 0
		});
		setStick(0, 0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "safe-bot pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-3 pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto relative h-28 w-28 overflow-hidden rounded-full border border-fg/20 bg-bg/50",
			onPointerDown: (e) => {
				e.currentTarget.setPointerCapture(e.pointerId);
				origin.current = {
					x: e.clientX,
					y: e.clientY
				};
			},
			onPointerMove: (e) => {
				if (!origin.current) return;
				const dx = e.clientX - origin.current.x;
				const dy = e.clientY - origin.current.y;
				const mag = Math.hypot(dx, dy) || 1;
				const k = Math.min(1, mag / 48);
				const x = dx / mag * k;
				const y = -(dy / mag) * k;
				const reach = Math.min(limit, k * limit);
				setKnob({
					x: dx / mag * reach,
					y: dy / mag * reach
				});
				setStick(x, y);
			},
			onPointerUp: reset,
			onPointerCancel: reset,
			onLostPointerCapture: reset,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute h-12 w-12 rounded-full bg-mint",
				style: {
					left: "50%",
					top: "50%",
					transform: `translate(calc(-50% + ${knob.x}px), calc(-50% + ${knob.y}px))`
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto grid grid-cols-3 gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hold, {
					label: tr("Пас", "Pass"),
					onDown: () => simRef.current?.arm("pass"),
					onUp: () => simRef.current?.release("pass")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hold, {
					label: tr("Удар", "Shot"),
					onDown: () => simRef.current?.arm("shoot"),
					onUp: () => simRef.current?.release("shoot")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hold, {
					label: tr("Рывок", "Sprint"),
					onDown: () => simRef.current?.holdSprint(true),
					onUp: () => simRef.current?.holdSprint(false)
				}),
				!locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Смена", "Switch"),
					disabled: !canSwitch,
					onTap: () => simRef.current?.tap("switch")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Отбор", "Tackle"),
					onTap: () => simRef.current?.tap("tackle")
				}),
				!locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Замена", "Sub"),
					disabled: !canSub,
					onTap: () => simRef.current?.tap("quick")
				})
			]
		})]
	});
}
function RefPad({ simRef }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "safe-bot pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none mb-2 text-center text-[11px] text-fg/80",
			children: tr("Штрафной и пенальти ставятся сами, по месту фола.", "Free kicks and penalties follow the foul. You do not pick them.")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto mx-auto grid max-w-lg grid-cols-2 gap-2 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Жёлтая", "Yellow"),
					onTap: () => simRef.current?.judge("yellow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Красная", "Red"),
					onTap: () => simRef.current?.judge("red")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Офсайд", "Offside"),
					onTap: () => simRef.current?.judge("offside")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Не офсайд", "Not offside"),
					onTap: () => simRef.current?.judge("notoffside")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Фол", "Foul"),
					onTap: () => simRef.current?.judge("foul")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tap, {
					label: tr("Нет фола", "No foul"),
					onTap: () => simRef.current?.judge("clear")
				})
			]
		})]
	});
}
function Tap({ label, onTap, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: `h-11 min-w-14 rounded-full px-2 font-display text-xs tracking-wide uppercase ${disabled ? "cursor-default bg-fg/10 text-fg/30" : "bg-pitch text-fg"}`,
		disabled,
		onPointerDown: (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (!disabled) onTap();
		},
		children: label
	});
}
function Hold({ label, onDown, onUp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "h-11 min-w-14 rounded-full bg-card px-2 font-display text-xs tracking-wide text-mint uppercase",
		onPointerDown: (e) => {
			e.preventDefault();
			e.stopPropagation();
			onDown();
		},
		onPointerUp: onUp,
		onPointerCancel: onUp,
		children: label
	});
}
function Pause({ simRef, snap, picked, subMsg, onPick, onSubMsg, onLeave }) {
	const mineXi = snap.userSide === 0 ? snap.xi : snap.awayXi;
	const mineBench = snap.userSide === 0 ? snap.bench : snap.awayBench;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "safe-top safe-bot absolute inset-0 overflow-auto bg-bg/80 px-4 py-6 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl uppercase",
					children: snap.referee ? tr("Пауза", "Pause") : tr("Тактика", "Tactics")
				}),
				!snap.referee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg/70",
						children: [
							tr("Схема сразу меняет позиции и то, куда игроки бегут.", "The shape changes positions and where players run."),
							" ",
							tr("Сейчас", "Now"),
							" ",
							snap.formation,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: FORMATION_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: snap.formation === id ? "chip-on" : "chip",
							onClick: () => {
								simRef.current?.applyFormation(snap.userSide, id, true);
								onSubMsg("");
								onPick(null);
							},
							children: id
						}, id))
					}),
					!snap.locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-fg/70",
						children: [
							tr("Замен осталось", "Subs left"),
							": ",
							snap.subs,
							". ",
							snap.canSub ? tr("Нажмите игрока основы, затем запасного. Замена только со своим мячом.", "Tap a starter, then a substitute. Subs only while your team has the ball.") : tr("Сейчас мяч не ваш — замену сделать нельзя.", "You do not have the ball, so you cannot make a sub.")
						]
					}),
					snap.locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-fg/70",
						children: tr("На поле вы управляете только своим игроком. Схему команды всё равно можно сменить.", "On the pitch you control only your player. You can still change the team shape.")
					}),
					subMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mint",
						children: subMsg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2",
							children: mineXi.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: picked === p.uid ? "card card-on w-full text-left" : "card w-full text-left",
								onClick: () => !snap.locked && onPick(p.uid),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display uppercase",
										children: [
											p.num,
											" ",
											p.name
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-2 text-xs text-fg/60",
										children: [
											p.role,
											" ",
											p.ovr
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stam, { value: p.stamina })
								]
							}) }, p.uid))
						}), !snap.locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2",
							children: mineBench.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "card w-full text-left",
								onClick: () => {
									if (!picked) {
										onSubMsg(tr("Сначала выберите игрока на поле", "Pick a player on the pitch first"));
										return;
									}
									const err = simRef.current?.substitute(picked, p.uid);
									onSubMsg(err ?? tr(`${p.name} вышел`, `${p.name} is on`));
									if (!err) onPick(null);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display uppercase",
									children: [
										p.num,
										" ",
										p.name
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xs text-fg/60",
									children: p.role
								})]
							}) }, p.uid))
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-2 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-main",
							onClick: () => simRef.current?.togglePause(),
							children: snap.phase === "halftime" ? tr("К перерыву", "Back to the break") : tr("Продолжить", "Resume")
						}),
						snap.phase !== "intro" && snap.phase !== "fulltime" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: () => simRef.current?.simulateToEnd(),
							children: tr("Продолжить и выйти", "Sim and exit")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-ghost",
							onClick: onLeave,
							children: tr("Выйти", "Quit")
						})
					]
				})
			]
		})
	});
}
function Overlay({ title, text, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 flex items-center justify-center bg-bg/75 px-4 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card max-h-[86vh] w-full max-w-md overflow-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl uppercase",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-fg/80",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children
				})
			]
		})
	});
}
function KitChoices({ snap, onPick }) {
	const you = snap.userSide;
	const them = you === 0 ? 1 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 grid gap-3 sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitRow, {
			title: tr("Ваша форма", "Your kit"),
			side: you,
			picked: you === 0 ? snap.homeKit : snap.awayKit,
			colors: you === 0 ? snap.homeSwatch : snap.awaySwatch,
			onPick
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitRow, {
			title: tr("Форма соперника", "Opponent kit"),
			side: them,
			picked: them === 0 ? snap.homeKit : snap.awayKit,
			colors: them === 0 ? snap.homeSwatch : snap.awaySwatch,
			onPick
		})]
	});
}
function KitRow({ title, side, picked, colors, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-fg/60",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: picked === "primary" ? "chip-on" : "chip",
			onClick: () => onPick(side, "primary"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "mr-1 inline-block h-2.5 w-2.5 rounded-full",
				style: { background: colors[0] }
			}), tr("Цвет клуба", "Club colour")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: picked === "inverse" ? "chip-on" : "chip",
			onClick: () => onPick(side, "inverse"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "mr-1 inline-block h-2.5 w-2.5 rounded-full",
				style: { background: colors[1] }
			}), tr("Инверсия", "Inverse")]
		})]
	})] });
}
function LineList({ title, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-sm uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-1 text-xs text-fg/80",
		children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			p.num,
			" ",
			p.name,
			" · ",
			p.role
		] }, p.uid))
	})] });
}
function SavesFolder({ onBack, onOpen, onClear, onRewrite, manager, player, story, referee, cup, settingsNote }) {
	const files = [
		{
			id: "settings",
			title: tr("Настройки", "Settings"),
			note: settingsNote,
			filled: true
		},
		{
			id: "manager",
			title: tr("Карьера тренера", "Manager career"),
			note: manager ? teamName(manager.teamId) : tr("пусто", "empty"),
			filled: Boolean(manager)
		},
		{
			id: "player",
			title: tr("Карьера игрока", "Player career"),
			note: player ? teamName(player.teamId) : tr("пусто", "empty"),
			filled: Boolean(player)
		},
		{
			id: "story",
			title: tr("История", "Story"),
			note: story ? teamName(story.teamId) : tr("пусто", "empty"),
			filled: Boolean(story)
		},
		{
			id: "referee",
			title: tr("Карьера судьи", "Referee career"),
			note: referee ? referee.name : tr("пусто", "empty"),
			filled: Boolean(referee)
		},
		{
			id: "cup",
			title: tr("Кубок России", "Russian Cup"),
			note: cup ? teamName(cup.teamId) : tr("пусто", "empty"),
			filled: Boolean(cup)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "safe-top safe-bot mx-auto min-h-dvh w-full max-w-3xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-sm text-mint",
				onClick: onBack,
				children: tr("Назад", "Back")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-3xl uppercase",
				children: tr("Папка сохранений", "Save folder")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-fg/70",
				children: tr("Выберите сохранение и продолжайте. Перезапись стирает прогресс режима и начинает заново.", "Pick a save and carry on. Overwrite wipes that mode and starts it again.")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-2",
				children: files.map((file) => {
					const mode = file.id === "settings" ? null : file.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "card flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display block uppercase",
							children: file.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-fg/60",
							children: file.note
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap justify-end gap-2",
							children: [
								file.filled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip-on",
									onClick: () => onOpen(file.id),
									children: tr("Продолжить", "Continue")
								}),
								mode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip",
									onClick: () => onRewrite(mode),
									children: file.filled ? tr("Перезаписать", "Overwrite") : tr("Начать", "Start")
								}),
								mode && file.filled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip",
									onClick: () => onClear(mode),
									children: tr("Удалить", "Delete")
								})
							]
						})]
					}, file.id);
				})
			})
		]
	});
}
function teamName(id) {
	return TEAMS.find((t) => t.id === id)?.name ?? id;
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };
