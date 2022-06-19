import React, { FC } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface MultipleSelectProps {
  onChange?: any
  value?: string
  name: string
  isCheck: boolean
  content: ContentType[]
  placheholder: string
  setCurrect?: any
}

type ContentType = {
  currect?: any,
  name: string
}

const MultipleSelect: FC<MultipleSelectProps> = ({ onChange,  name, isCheck, content, placheholder, setCurrect }) => {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);


  const handleChange = (event: any) => {

    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );

  };


  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple={isCheck}
          displayEmpty
          value={personName}
          onChange={(e) => {
            onChange(e)
            handleChange(e)
          }}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placheholder}</em>
            }
            selected.join(', ')
            return (
              <>
                <div>{selected.join(', ')}</div>
                <em>{placheholder}</em>
              </>
            )
          }}
          name={name}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>{placheholder}:</em>
          </MenuItem>
          {content.map(({ name, currect }) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
              onClick={(e) => {
                if(placheholder !== 'ORDER') {
                  setCurrect(currect)
                }
                e.stopPropagation()
              }}
            >
              {isCheck && (
                <Checkbox checked={personName.indexOf(name) > -1} />
              )}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default MultipleSelect