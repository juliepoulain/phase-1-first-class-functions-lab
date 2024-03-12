// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function (drivers) {
  return [drivers[2], drivers[3]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  const fareCalc = (fare) => {
    return fare * integer;
  };
  return fareCalc;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFunction) {
  return returnFunction(drivers)
};
