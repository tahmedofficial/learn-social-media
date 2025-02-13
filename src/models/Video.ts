import mongoose, { Schema, model, models } from "mongoose";

export const VIDEO_DIMENSIONS = {
    with: 1080,
    height: 1920,
} as const

export interface IVideo {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thubmnailUrl: string;
    controls?: boolean;
    transformation?: {
        height: number
        width: number;
        quality?: number
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const videoSehema = new Schema<IVideo>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        videoUrl: { type: String, required: true },
        thubmnailUrl: { type: String, required: true },
        controls: { type: Boolean, default: true },
        transformation: {
            height: { type: Number, default: VIDEO_DIMENSIONS.height },
            width: { type: Number, default: VIDEO_DIMENSIONS.with },
            quality: { type: Number, min: 1, max: 100 }
        }
    },
    { timestamps: true }
)

const Video = models?.Video || model<IVideo>("Video", videoSehema);

export default Video;