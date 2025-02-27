import * as tf from '@tensorflow/tfjs-core';

export type BodyPixInternalResolution = number|'low'|'medium'|'high';
export type BodyPixOutputStride = 32|16|8;
export type BodyPixArchitecture = 'ResNet50'|'MobileNetV1';
export type BodyPixQuantBytes = 1|2|4;
export type BodyPixMultiplier = 1.0|0.75|0.50;

export type ImageType = HTMLImageElement|HTMLCanvasElement|HTMLVideoElement;
export type BodyPixInput = ImageData|ImageType|tf.Tensor3D;

export type PersonSegmentation = {
  data: Uint8Array,
  width: number,
  height: number,
  partData?: Int32Array,
  pose?: Pose,
};

export type PartSegmentation = {
  data: Int32Array,
  width: number,
  height: number,
  pose?: Pose,
};

export declare interface Padding {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export declare type Part = {
  heatmapX: number,
  heatmapY: number,
  id: number
};

export declare type Vector2D = {
  y: number,
  x: number
};

export type TensorBuffer3D = tf.TensorBuffer<tf.Rank.R3>;

export declare type PartWithScore = {
  score: number,
  part: Part
};

export declare type Keypoint = {
  score: number,
  position: Vector2D,
  part: string
};

export declare type Pose = {
  keypoints: Keypoint[],
  score: number,
};

export declare type Color = {
  r: number,
  g: number,
  b: number,
  a: number,
};
