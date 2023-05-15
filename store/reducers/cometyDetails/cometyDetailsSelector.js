import { useSelector } from "react-redux";

export const cometyListSelector = () =>
  useSelector((state) => state.cometyDetails.cometyList);

export const activeCometyIdSelector = () =>
  useSelector((state) => state.cometyDetails.activeCometyId);

export const activeMonthSelector = () =>
  useSelector((state) => state.cometyDetails.activeMonth);

//TODO: Hacking 0 index as it will filter out the activeCometyId in an array
export const winnerOfTheMonthSelector = () =>
  useSelector((state) => {
    if (
      filteredActiveCometyDetails(state)?.monthlyData &&
      filteredActiveCometyDetails(state)?.monthlyData[
        state.cometyDetails.activeMonth
      ]
    ) {
      return filteredActiveCometyDetails(state)?.monthlyData[
        state.cometyDetails.activeMonth
      ].usersData.filter((user) => user?.isWinner === true)[0];
    }
    return {};
  });

export const currentUsersDataSelector = () =>
  useSelector((state) => state.cometyDetails.currentUsersData);

export const monthsListSelector = () =>
  useSelector((state) => state.cometyDetails.monthsList);

//TODO: Hacking 0 index as it will filter out the activeCometyId in an array
const filteredActiveCometyDetails = (state) =>
  state?.cometyDetails?.cometyList?.filter(
    (comety) => comety?.cometyId === state.cometyDetails?.activeCometyId
  )?.[0] || {};

export const activeMonthMembersList = () =>
  useSelector(
    (state) =>
      filteredActiveCometyDetails(state).monthlyData?.[
        state.cometyDetails?.activeMonth
      ]?.usersData
  );

export const activeCometyNameSelector = () =>
  useSelector((state) => filteredActiveCometyDetails(state).cometyName);

export const activeCometyStartDateSelector = () =>
  useSelector((state) => filteredActiveCometyDetails(state).startDate);

export const activeCometyAmountSelector = () =>
  useSelector((state) => filteredActiveCometyDetails(state).amount);
