import { SNACKBAR_TYPES } from "@/components/Snackbar/types"
import { DIRECTIONS_ENUM } from "./types";

export const SNACKBAR_TYPES_MAPPING_MESSAGES = {
    [SNACKBAR_TYPES.SUCCESS]: 'You won!',
    [SNACKBAR_TYPES.ERROR]: 'You lost!'
  }
  
  export const SNACKBAR_TYPES_MAPPING_SUBMESSAGES = {
    [SNACKBAR_TYPES.ERROR]: (str: string) => `Number was ${str}!`
  }

  export const sliderMarks = [
    { value: 0, label: '0' },
    { value: 100, label: '100' },
  ];

  export const RADIOBUTTON_VALUES = Object.values(DIRECTIONS_ENUM)

  export const HEADER_COLUMNS = ['Time', 'Guess', 'Result']