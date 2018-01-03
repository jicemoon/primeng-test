import { Route } from '@angular/router';
import { MenuItem, SelectButton } from 'primeng/primeng';

import { InputGroupComponent } from './../components/pages/input/input-group/input-group.component';
import { AutoCompleteComponent } from './../components/pages/input/auto-complete/auto-complete.component';
import { CalendarComponent } from './../components/pages/input/calendar/calendar.component';
import { CheckboxComponent } from './../components/pages/input/checkbox/checkbox.component';
import { ChipsComponent } from './../components/pages/input/chips/chips.component';
import { ColorPickerComponent } from './../components/pages/input/color-picker/color-picker.component';
import { DropdownComponent } from './../components/pages/input/dropdown/dropdown.component';
import { EditorComponent } from './../components/pages/input/editor/editor.component';
import { InputSwitchComponent } from './../components/pages/input/input-switch/input-switch.component';
import { InputTextComponent } from './../components/pages/input/input-text/input-text.component';
import { ListBoxComponent } from './../components/pages/input/list-box/list-box.component';
import { TextareaComponent } from './../components/pages/input/textarea/textarea.component';
import { InputMaskComponent } from './../components/pages/input/input-mask/input-mask.component';
import { MultiSelectComponent } from './../components/pages/input/multi-select/multi-select.component';
import { PasswordComponent } from './../components/pages/input/password/password.component';
import { RadioButtonComponent } from './../components/pages/input/radio-button/radio-button.component';
import { RatingComponent } from './../components/pages/input/rating/rating.component';
import { SliderComponent } from './../components/pages/input/slider/slider.component';
import { SpinnerComponent } from './../components/pages/input/spinner/spinner.component';
import { SelectButtonComponent } from './../components/pages/input/select-button/select-button.component';
import { ToggleButtonComponent } from './../components/pages/input/toggle-button/toggle-button.component';
import { TriCheckboxComponent } from './../components/pages/input/tri-checkbox/tri-checkbox.component';

export const components = [
  InputGroupComponent,
  AutoCompleteComponent,
  CalendarComponent,
  CheckboxComponent,
  ChipsComponent,
  ColorPickerComponent,
  DropdownComponent,
  EditorComponent,
  InputSwitchComponent,
  InputTextComponent,
  ListBoxComponent,
  TextareaComponent,
  InputMaskComponent,
  MultiSelectComponent,
  PasswordComponent,
  RadioButtonComponent,
  RatingComponent,
  SliderComponent,
  SpinnerComponent,
  SelectButtonComponent,
  ToggleButtonComponent,
  TriCheckboxComponent
];

export const routeConfig: Route = {
  path: 'input',
  children: [
    {
      path: '',
      redirectTo: 'inputGroup',
      pathMatch: 'prefix'
    },
    {
      path: 'inputGroup',
      component: InputGroupComponent
    },
    {
      path: 'autoComponent',
      component: AutoCompleteComponent
    },
    {
      path: 'calendar',
      component: CalendarComponent
    },
    {
      path: 'checkbox',
      component: CheckboxComponent
    },
    {
      path: 'chips',
      component: ChipsComponent
    },
    {
      path: 'colorPicker',
      component: ColorPickerComponent
    },
    {
      path: 'dropdown',
      component: DropdownComponent
    },
    {
      path: 'editor',
      component: EditorComponent
    },
    {
      path: 'inputSwitch',
      component: InputSwitchComponent
    },
    {
      path: 'inputText',
      component: InputTextComponent
    },
    {
      path: 'textarea',
      component: TextareaComponent
    },
    {
      path: 'listBox',
      component: ListBoxComponent
    },
    {
      path: 'inputMask',
      component: InputMaskComponent
    },
    {
      path: 'multiSelect',
      component: MultiSelectComponent
    },
    {
      path: 'password',
      component: PasswordComponent
    },
    {
      path: 'radioButton',
      component: RadioButtonComponent
    },
    {
      path: 'ratting',
      component: RatingComponent
    },
    {
      path: 'slider',
      component: SliderComponent
    },
    {
      path: 'spinner',
      component: SpinnerComponent
    },
    {
      path: 'selectBtn',
      component: SelectButtonComponent
    },
    {
      path: 'toggleBtn',
      component: ToggleButtonComponent
    },
    {
      path: 'triCheckbox',
      component: TriCheckboxComponent
    }
  ]
};

export const menuItem: MenuItem = {
  label: '表单输入',
  icon: 'fa-pencil',
  items: [
    {
      label: 'Input Group',
      routerLink: '/input/inputGroup'
    },
    {
      label: 'Auto Complete',
      routerLink: '/input/autoComponent'
    },
    {
      label: 'Calendar',
      routerLink: '/input/calendar'
    },
    {
      label: 'Checkbox',
      routerLink: '/input/checkbox'
    },
    {
      label: 'Chips',
      routerLink: '/input/chips'
    },
    {
      label: 'Color Picer',
      routerLink: '/input/colorPicker'
    },
    {
      label: 'Dropdown',
      routerLink: '/input/dropdown'
    },
    {
      label: 'Editor',
      routerLink: '/input/editor'
    },
    {
      label: 'Input Switch',
      routerLink: '/input/inputSwitch'
    },
    {
      label: 'Input Text',
      routerLink: '/input/inputText'
    },
    {
      label: 'Input TextArea',
      routerLink: '/input/textarea'
    },
    {
      label: 'List Box',
      routerLink: '/input/listBox'
    },
    {
      label: 'Input Mask',
      routerLink: '/input/inputMask'
    },
    {
      label: 'MultiSelect',
      routerLink: '/input/multiSelect'
    },
    {
      label: 'Password',
      routerLink: '/input/password'
    },
    {
      label: 'Radio Button',
      routerLink: '/input/radioButton'
    },
    {
      label: 'Rating',
      routerLink: '/input/ratting'
    },
    {
      label: 'Slider',
      routerLink: '/input/slider'
    },
    {
      label: 'Spinner',
      routerLink: '/input/spinner'
    },
    {
      label: 'Select Button',
      routerLink: '/input/selectBtn'
    },
    {
      label: 'Toggle Button',
      routerLink: '/input/toggleBtn'
    },
    {
      label: 'TriCheckbox',
      routerLink: '/input/triCheckbox'
    }
  ]
};
