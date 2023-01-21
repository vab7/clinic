import { useDispatch } from "react-redux";
import { clinicActions } from "../store/clinic/clinic.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...clinicActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
