const mongoose = require('mongoose');

// Replace the placeholders with your actual MongoDB credentials
const mongoURI = "mongodb://root:<Gd6J5d13kWACCHuYqwUWhXek>@<172.21.194.10>:<27017>/yourDB?authSource=admin";

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;