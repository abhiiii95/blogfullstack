// models/faq.js
import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Faq || mongoose.model('Faq', faqSchema);
