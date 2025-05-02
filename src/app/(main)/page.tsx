"use client"

import React, { } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Button,
  Slider,
} from '@mui/material';
import { theme } from '@/constants/theme';
import Snackbar from '@/components/Snackbar';
import { stylesObj } from './styles';
import { SNACKBAR_TYPES_MAPPING_MESSAGES, sliderMarks, SNACKBAR_TYPES_MAPPING_SUBMESSAGES, RADIOBUTTON_VALUES, HEADER_COLUMNS } from './constants';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { getTime } from '@/utils/getTime';
import { usePage } from '@/hooks/usePage';
import { DIRECTIONS_ENUM } from './types';
import { SNACKBAR_TYPES } from '@/components/Snackbar/types';

export default function Home() {
  const { snackbarKey, snackbarType, randomValue, handleRadioChange, handleSliderChange, onPlay, direction, results, sliderValue, lastResult } = usePage();

  const message = snackbarType && SNACKBAR_TYPES_MAPPING_MESSAGES[snackbarType]
  const submessage = snackbarType === SNACKBAR_TYPES.ERROR && SNACKBAR_TYPES_MAPPING_SUBMESSAGES[snackbarType]
    ?.(lastResult?.direction === DIRECTIONS_ENUM.OVER ? 'lower' : 'higher')

  return (
    <ThemeProvider theme={theme}>
      <Box sx={stylesObj.container}>
        <Snackbar key={snackbarKey}
          open={!!snackbarType}
          type={snackbarType}
          message={message}
          submessage={submessage || ''}
        />
        <Box sx={stylesObj.upperBlock}>

          <Box sx={stylesObj.scoreContainer}>
            <Typography variant="h4">{randomValue || '-'}</Typography>
          </Box>

          <RadioGroup
            row
            value={direction}
            onChange={handleRadioChange}
            sx={stylesObj.radioGroup}
          >
            {RADIOBUTTON_VALUES.map((el, ind) => <FormControlLabel
              key={ind}
              value={el}
              control={<Radio color='secondary' />}
              label={capitalizeFirstLetter(el)}
              labelPlacement='start'
            />)}
          </RadioGroup>

          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
            color='secondary'
            marks={sliderMarks}
            value={sliderValue}
            onChange={handleSliderChange}
          />

          <Button variant="contained" color='secondary' sx={stylesObj.button} onClick={onPlay} >
            PLAY
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {HEADER_COLUMNS.map((el, ind) => <TableCell key={ind} align="center">
                  <Typography variant="subtitle1" sx={stylesObj.header}>{el}</Typography>
                </TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {results?.map((el, ind) => {
                return <React.Fragment key={ind}>
                  <TableRow>
                    <TableCell align="center">{getTime(el.time)}</TableCell>
                    <TableCell align="center">{`${capitalizeFirstLetter(el.direction)} ${el.chosenNumber}`}</TableCell>
                    <TableCell align="center" sx={stylesObj.result(el.isTrue)}>{el.randomNumer}</TableCell>
                  </TableRow>
                </React.Fragment>
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}
