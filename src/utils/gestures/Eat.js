/**
 * This file defines a pointing-to-the-left gesture (👈).
 */
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const eating = new GestureDescription("pointing_left");

// Thumb
eating.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
eating.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
eating.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// Index
eating.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
eating.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// Remaining fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  eating.addCurl(finger, FingerCurl.FullCurl, 1.0);
  eating.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.5);
  eating.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

// Assign additional weight to the index finger
eating.setWeight(Finger.Index, 2.0);

export default eating;
