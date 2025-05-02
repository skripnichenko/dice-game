import { DIRECTIONS_ENUM, IResult } from "@/app/(main)/types";
import { SNACKBAR_TYPES } from "@/components/Snackbar/types";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { useCallback, useEffect, useState } from "react";
import { useSnackbarController } from "./useSnackbarController";

export const usePage = () => {
    const [direction, setDirection] = useState<DIRECTIONS_ENUM>(DIRECTIONS_ENUM.UNDER);
    const [sliderValue, setSliderValue] = useState(0)
    const [results, setResults] = useState<IResult[]>();
    const lastResult = results?.[0]
    const [randomValue, setRandomValue] = useState(lastResult?.randomNumer)
  
    const {
      snackbarType,
      snackbarKey,
      showSnackbar
    } = useSnackbarController(3000);
  
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDirection(event.target.value as DIRECTIONS_ENUM);
    };
  
    const handleSliderChange = useCallback((_event: Event, newValue: number | number[]) => {
      setSliderValue(newValue as number);
    }, []);
  
    const onPlay = () => {
      const randomNumer = getRandomNumber(100);
      setRandomValue(randomNumer);
  
      const isUnder = direction === DIRECTIONS_ENUM.UNDER;
      const isTrue = isUnder ? sliderValue > randomNumer : sliderValue < randomNumer;
  
      setResults(prev => [
        {
          time: new Date(),
          isTrue,
          direction,
          chosenNumber: sliderValue,
          randomNumer,
        },
        ...(prev || []),
      ].slice(0, 10));
    };
  
    useEffect(() => {
      if (lastResult) {
        const type = lastResult?.isTrue ? SNACKBAR_TYPES.SUCCESS : SNACKBAR_TYPES.ERROR;
        showSnackbar(type);
      }
    }, [lastResult, showSnackbar]);
  
return {
    handleRadioChange,
    handleSliderChange,
    snackbarType,
    snackbarKey,
    randomValue,
    direction,
    onPlay,
    results,
    sliderValue,
    lastResult
}  
}