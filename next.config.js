// module.exports = {
// 	images: {
// 		domains: ["rickandmortyapi.com"],
// 	},
// };
const withSvgr = require("next-svgr");

module.exports = withSvgr({
	images: {
		domains: ["rickandmortyapi.com"],
	},
});
