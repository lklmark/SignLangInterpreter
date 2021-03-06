import PointingLeftGesture from "./PointingLeft";
import PointingRightGesture from "./PointingRight";
import PointingUpwardsGesture from "./PointingUpwards";
import ThumbsDownGesture from "./ThumbsDown";
import ThankYouGesture from "./ThankYou";
import GoodbyeGesture from "./Goodbye";
import FoodGesture from "./Food";
import EatGesture from "./Eat";

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
  FoodGesture,
  EatGesture
]);

const CustomGestures = {
  PointingLeftGesture,
  PointingRightGesture,
  PointingUpwardsGesture,
  ThumbsDownGesture,
  ThankYouGesture,
  GoodbyeGesture,
  FoodGesture,
  EatGesture,
};

export { CustomGestures, GE };
