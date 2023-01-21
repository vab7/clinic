import { createSlice } from "@reduxjs/toolkit";

interface MenuItems {
  id: number;
  name: string;
  url: string;
}

const menuItems: MenuItems[] = [
  {
    id: 1,
    name: "О клинике",
    url: "/about",
  },
  {
    id: 2,
    name: "Услуги",
    url: "/services",
  },
  {
    id: 3,
    name: "Специалисты",
    url: "/specialists",
  },
  {
    id: 4,
    name: "Цены",
    url: "/prices",
  },
  {
    id: 5,
    name: "Контакты",
    url: "/contacts",
  },
];

interface ClinicState {
  isMenuShow: boolean;
  isFormShow: boolean;
  menuItems: MenuItems[];
}

const initialState: ClinicState = {
  isMenuShow: false,
  isFormShow: false,
  menuItems: menuItems,
};

const clinicSlice = createSlice({
  name: "clinic",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuShow = !state.isMenuShow;
    },
    closeMenu(state) {
      state.isMenuShow = false;
    },
    openForm(state) {
      state.isFormShow = true;
    },
    closeForm(state) {
      state.isFormShow = false;
    },
  },
});

export const clinicReducer = clinicSlice.reducer;
export const clinicActions = clinicSlice.actions;
