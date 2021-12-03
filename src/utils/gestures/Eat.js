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
eating.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.6);

// Remaining fingers
for (let finger of [Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky]) {
  eating.addCurl(finger, FingerCurl.NoCurl, 1.0);
  eating.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
  //eating.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
}

// Assign additional weight to the index finger
//eating.setWeight(Finger.Index, 2.0);

export default eating;
