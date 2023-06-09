import mongoose, { Schema, Document } from "mongoose";

interface ISection extends Document {
  name: string;
  likes: [];
  order: number;
  documents: mongoose.Types.ObjectId[];
  topic: string;
}

const SectionSchema: Schema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    order: {
      required: true,
      type: Number,
    },
    documents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doc",
      },
    ],
    topic: {
      required: true,
      type: String,
    },
    slug: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model<ISection>("Section", SectionSchema);

export default Section;
