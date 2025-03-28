const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ResellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Método para comparar senha
ResellerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Reseller = mongoose.model("Reseller", ResellerSchema);
module.exports = Reseller;
