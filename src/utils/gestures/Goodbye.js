/**
 * This file defines a goodbye hand sign (Hong Kong)
 */
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const goodbye = new GestureDescription("goodbye");

// Thumb
goodbye.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.2);
goodbye.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
goodbye.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
goodbye.addDirection(Finger.Thumb,FingerDirection.DiagonalLeft, 0.3);

// Remaining fingers
for (let finger of [Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky]) {
  goodbye.addCurl(finger, FingerCurl.NoCurl, 1.0);
  goodbye.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// Assign additional weight to the index finger
goodbye.setWeight(Finger.Index, 2.0);

export default goodbye;
