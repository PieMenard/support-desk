import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    product: {
      type: String,
      required: [true, 'please select a product'],
      enum: ['iPhone','Macbook Pro','iMac','iPad'],
    },
    description: {
      type: String,
      required: [true, 'please enter a description of the issue'],
    },
    status: {
      type: String,
      required: true,
      status: ['new','open','closed'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
