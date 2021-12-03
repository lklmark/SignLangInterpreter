import PointingLeftGesture from "./PointingLeft";
import PointingRightGesture from "./PointingRight";
import PointingUpwardsGesture from "./PointingUpwards";
import ThumbsDownGesture from "./ThumbsDown";
import ThankYouGesture from "./ThankYou";
import GoodbyeGesture from "./Goodbye";

import { Gestures, GestureEstimator } from "fingerpose";

// Initialise the estimator
const GE = new GestureEstimator([
  Gestures.VictoryGesture,
  Gestures.ThumbsUpGesture,
  PointingLeftGesture,
  PointingRightGesture,
  PointingUpwardsGesture,
  ThumbsDownGesture,
  ThankYouGesture,
  GoodbyeGesture,
]);

const CustomGestures = {
  PointingLeftGesture,
  PointingRightGesture,
  PointingUpwardsGesture,
  ThumbsDownGesture,
  ThankYouGesture,
  GoodbyeGesture,
};

export { CustomGestures, GE };
