/** @format */

import mongoose from "mongoose";
const PoliciesSchema = mongoose.Schema({
	text1: {
		type: String,
		required: "Policy must have Title",
	},
	text2: {
		type: String,
		// required: "Question must have Body",
	},
	text3: {
		type: String,
		// required: "Question must have Body",
	},
	text4: {
		type: String,
		// required: "Question must have Body",
	},
	text5: {
		type: String,
		// required: "Question must have Body",
	},
	text6: {
		type: String,
		// required: "Question must have Body",
	},
	text7: {
		type: String,
		// required: "Question must have Body",
	},
	text8: {
		type: String,
		// required: "Question must have Body",
	},
	text9: {
		type: String,
		// required: "Question must have Body",
	}

	

});


export default mongoose.model("Policy", PoliciesSchema)
