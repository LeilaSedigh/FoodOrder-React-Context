import { Fragment } from "react";
import AvailalbleMeals from "./AvailalbleMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailalbleMeals />
    </Fragment>
  );
};

export default Meals;
