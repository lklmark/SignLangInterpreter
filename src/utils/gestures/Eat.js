/**
 * This file defines a pointing-to-the-left gesture (👈).
 */
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const eating = new GestureDescription("eat");

// Thumb
eating.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.6);
eating.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.8);

// Remaining fingers
for (let finger of [Finger.Index,Finger.Middle]) {
  eating.addCurl(finger, FingerCurl.NoCurl, 1.0);
  eating.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.8);
}

for (let fingers of [Finger.Ring, Finger.Pinky]) {
  eating.addCurl(fingers, FingerCurl.FullCurl, 1.0);
}

// Assign additional weight to the index finger
//eating.setWeight(Finger.Index, 2.0);

export default eating;
