import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';

const styles = {
  Paper: {
    width: "23%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const Wrapper = styled.div`
  width:70%;
  p:first-child {
    font-size: 37px;
    color: black;
    font-weight: bold;
    margin-bottom: 80px;
    margin: 100px 0 20px 0;
  }
  p {
    font-size: 29px;
    margin-bottom: 20px;
    text-align: left;
    color: #cecece;
  }
`

function drawer({
  toggleDrawer,
  drawerState,
  categories,
  handleChangeCategory, 
  classes,
  cities,
  handleChangeCity,
  }) {


  
  function capitalize(text){
    let str = text.replace(/\.?([A-Z])/g, function (x,y){return " " + y}).replace(/^_/, " ")
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})
  }
  
  const checkboxes = categories.length > 0 && categories.map(element => (
      <FormControlLabel
        key={element.id}
        control={
          <Checkbox
            key={element.id}
            checked={element.checked}
            onChange={handleChangeCategory(element)}
            value={element.title}
          />
        }
        label={capitalize(element.title)}
      />
  ));


  return (
    <>
      <SwipeableDrawer
        anchor='right'
        open={drawerState.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
        classes={{paper:classes.Paper}}
      >
      <Wrapper>
        <p>Filter places</p>
        <p>By Categories</p>
        <FormGroup>
          {checkboxes}
        </FormGroup>
        <p>By City</p>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-checkbox">City</InputLabel>
        <Select
          multiple
          fullWidth
          value={cities.filter(city => city.checked)}
          onChange={handleChangeCity}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.map(city => city.title).join(', ')}
        >
          {cities.map(city => (
            <MenuItem key={city.id} value={city.id}>
              <Checkbox checked={city.checked} />
              <ListItemText primary={city.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Wrapper>
      </SwipeableDrawer>
    </>
  );
}
export default withStyles(styles)(drawer);

