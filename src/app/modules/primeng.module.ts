// import {
//   MenubarModule,
//   ButtonModule,
//   SplitButtonModule,
//   GrowlModule,
//   InputTextModule,
//   CheckboxModule,
//   RadioButtonModule,
//   AutoCompleteModule,
//   CalendarModule,
//   ChipsModule,
//   ColorPickerModule,
//   DropdownModule,
//   EditorModule,
//   InputSwitchModule,
//   InputTextareaModule,
//   ListboxModule
// } from 'primeng/primeng';
import * as PrimeNG from 'primeng/primeng';
const keys = Object.keys(PrimeNG);
const values = [];
keys.forEach((key) => {
  if (/Module$/.test(key)) {
    values.push(PrimeNG[key]);
  }
});
export const PrimeNGModules = values;
// [
  // GrowlModule,
  // MenubarModule,
  // ButtonModule,
  // SplitButtonModule,
  // InputTextModule,
  // CheckboxModule,
  // RadioButtonModule,
  // AutoCompleteModule,
  // CalendarModule,
  // ChipsModule,
  // ColorPickerModule,
  // DropdownModule,
  // EditorModule,
  // InputSwitchModule,
  // InputTextareaModule,
  // ListboxModule
// ];
