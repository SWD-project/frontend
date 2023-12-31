"use client"
import { Fragment, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import FlexRowCenter from './flex-box/flex-grow-center'

// ========================================================
type Step = { title: string; disabled: boolean }
type StepperProps = {
  stepperList: Step[]
  selectedStep: number
  onChange: (step: number) => void
}
// ========================================================

const Stepper = ({ selectedStep = 1, stepperList, onChange }: StepperProps) => {
  const [selected, setSelected] = useState(selectedStep - 1)

  const handleStepClick = (step: Step, ind: number) => () => {
    if (!step.disabled) {
      setSelected(ind)
      if (onChange) onChange(ind)
    }
  }

  useEffect(() => {
    setSelected(selectedStep - 1)
  }, [selectedStep])

  return (
    <FlexRowCenter flexWrap="wrap" my="-4px">
      {stepperList.map((step, ind) => (
        <Fragment key={step.title}>
          <Chip
            disabled={step.disabled}
            label={`${ind + 1}. ${step.title}`}
            onClick={handleStepClick(step, ind)}
            sx={{
              backgroundColor:
                ind <= selected ? 'primary.main' : 'primary.light',
              color: ind <= selected ? 'primary.contrastText' : 'primary.main',
              p: '0.5rem 1rem',
              fontSize: '14px',
              fontWeight: '600',
              my: '4px',
              '&:hover:not(:disabled)': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              },
            }}
          />
          {ind < stepperList.length - 1 && (
            <Box
              width="50px"
              height="4px"
              bgcolor={ind < selected ? 'primary.main' : 'primary.light'}
            />
          )}
        </Fragment>
      ))}
    </FlexRowCenter>
  )
}

export default Stepper
