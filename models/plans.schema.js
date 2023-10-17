import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
    citizenship: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    visa_details:{
        type: Object
    }

} , {
    timestamps: true
});


const Plan = mongoose.models.Plan || mongoose.model("Plan", PlanSchema);

export default  Plan;
