"use cilent";

import React, { useEffect } from "react";
import { ProjectCategory } from "../Data/CategoriesData";
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PageProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const MultipleSelectIcon = ({
  selectedCategories,
  onselectionchange,
  openNewProjectBox,
  projectCategories,
  selectedItem,
  isDark
}: {
  selectedCategories?: ProjectCategory[];
  onselectionchange: (value: string[]) => void;
  openNewProjectBox: boolean;
  projectCategories: string[];
  selectedItem: any;
  isDark: boolean;
}) => {

  const theme = useTheme();
  const [ personName, setPersonName ] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    // const value = event.target.value;
    const { target: { value } } = event;
    setPersonName( typeof value === 'string' ? value.split(",") : value );
    onselectionchange( typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if(selectedItem === null) {
      setPersonName([]);
    } else {
      setPersonName(projectCategories);
    }
  }, [openNewProjectBox]);

  const fileterCategories = selectedCategories?.filter(
    (category) => category.categoryName !== "No Category"
  );


  return (
    <div>
      <FormControl>
        <InputLabel
          sx={{color: `${isDark ? 'white' : 'black'}`}}
          id='icon-label'
        >
          カテゴリー
        </InputLabel>
        <Select
          labelId='icon-label'
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-input' label='Categories' />}
          renderValue={(selected) => (
            <Box
              sx={{
                  display: 'flex',
                  flex: 'wrap',
                  gap: 0.5,
                  "& > .MuiChip-root": {
                  fontSize: "11px",
                  height: "auto"
                }
              }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ cloer: `${ isDark ? 'white' : 'black'}` }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          { fileterCategories?.map((category) => (
            <MenuItem
              key={category._id}
              value={category.categoryName}
              style={getStyles(category.categoryName, personName, theme)}
            >
              {category.categoryName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

function getStyles(name: string, personName: readonly string[], theme: Theme){
  return {
    fontWeight:
    personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightRegular
  }
}

export default MultipleSelectIcon
