const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    jobNo:{type:String, required: true},
    machine: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine', required: false},
    reason: { type: mongoose.Schema.Types.ObjectId, ref: 'Reason', required: false},
    fault: { type: mongoose.Schema.Types.ObjectId, ref: 'Fault', required: false},
    inventory:{type:String, required: true},
    description:{type:String, required: true},
    faultImag:{type:String,required: false}
   
});

module.exports = mongoose.model('Job', jobSchema);