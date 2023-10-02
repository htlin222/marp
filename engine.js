// engine.js
const markdownItAdmon = require("markdown-it-admon");
const markdownItContainer = require("markdown-it-container");
const taskLists = require("markdown-it-task-lists");
// const wikilinks = require("@gardeners/markdown-it-wikilinks");
// Get the modal

module.exports = ({ marp }) =>
	marp
		.use(markdownItAdmon)
		// .use(wikilinks)
		.use(taskLists)
		.use(markdownItContainer, "half", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					return '<div class="half"><div>\n';
				} else {
					return "</div></div>\n";
				}
			},
		})
		.use(markdownItContainer, "free", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					return '<div class="free"><div>\n';
				} else {
					return "</div></div>\n";
				}
			},
		})
		.use(markdownItContainer, "columns", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					return '<div class="columns"><div>\n';
				} else {
					return "</div></div>\n";
				}
			},
		})
		.use(markdownItContainer, "split", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					return "</div><div>\n";
				} else {
					return "</div></div>\n";
				}
			},
		})
		.use(markdownItContainer, "map", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					// opening tag
					return "<div class='map'><script type='text/template'>\n";
				} else {
					// closing tag
					return "</script></div>\n";
				}
			},
		})
		.use(markdownItContainer, "high", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					// opening tag
					return "<span class='test'>";
				} else {
					// closing tag
					return "</span>";
				}
			},
		})
		.use(markdownItContainer, "date", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					var today = new Date().toISOString().substr(0, 10);
					return "<h4 class='today'>" + today + "</h4>";
				} else {
					return "";
				}
			},
		})
		.use(markdownItContainer, "typewriter", {
			render: function (tokens, idx) {
				if (tokens[idx].nesting === 1) {
					return "<div class='typewriter'>\n";
				}
				return "</div>\n";
			},
		})
		.use(({ marpit }) => {
			const { highlighter } = marpit;

			marpit.highlighter = function (...args) {
				const original = highlighter.apply(this, args);
				const listItems = original
					.split(/\n(?!$)/) // Don't split at the trailing newline
					.map(
						(line) =>
							`<li><span data-marp-line-number></span><span>${line}</span></li>`,
					);
				return `<ol>${listItems.join("")}</ol>`;
			};
		});

function showDate() {
	var date = new Date();
	var dateString = date.toDateString();
	document.getElementById("date").innerHTML = dateString;
}

function toggleContent() {
	var contentDiv = document.querySelector(".content");
	if (contentDiv.style.display === "none") {
		contentDiv.style.display = "block";
	} else {
		contentDiv.style.display = "none";
	}
}
// function openModal() {
// 	var modal = document.getElementById("myModal");
// 	modal.style.display = "block";
// }
// function closeModal() {
// 	var modal = document.getElementById("myModal");
// 	modal.style.display = "none";
// }
// function toggleModal() {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }
