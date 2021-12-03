/**
 * This file defines a Thank you gesture.
 */
 import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const thankYou = new GestureDescription("thank_you");

thankYou.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thankYou.addDirection(Finger.Thumb, FingerDirection.VirticleUp, 1.0);
thankYou.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
thankYou.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thankYou.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thankYou.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  thankYou.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default thankYou;
