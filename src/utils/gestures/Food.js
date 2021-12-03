
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const food = new GestureDescription("food");

// Thumb
food.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.6);

// Remaining fingers
for (let finger of [Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky]) {
  food.addCurl(finger, FingerCurl.NoCurl, 1.0);
  food.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
  //eating.addDirection(finger, FingerDirection.HorizontalLeft, 0.9);
}

// Assign additional weight to the index finger
//eating.setWeight(Finger.Index, 2.0);

export default food;
