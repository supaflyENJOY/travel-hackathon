import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChipInput from "material-ui-chip-input";
import { withStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";
import Background from "../images/background.jpg";
import Drawer from "./Drawer";
import SelectedImage from "./SelectedImage"
import PopUp from "./PopUp"
import FilterList from '@material-ui/icons/FilterList';

const styles = {
  inputRoot: {
    color: "#fff"
  },
  root: {
    width: "100%"
  },
  chipContainer: {
    "&:before": {
      backgroundColor: "#cecece"
    },
    "&:after": {
      backgroundColor: "#cecece"
    }
  }
};

const AppBar = styled.div`
  margin-top: 80px;
  height: 40px;
  width: 80%;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = styled.div`
  background-image: url(${Background});
  background-size: cover;
  height: 540px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchInput = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  p:first-child {
    text-align: center;
    color: #fff;
    font-size: 53px;
    font-weight: medium;
    margin-bottom: 80px;
    margin: 100px 0 80px 0;
  }
  p {
    margin-bottom: 20px;
    text-align: left;
    color: #cecece;
  }
`;

const SearchResult = styled.div`
  p {
    font-size: 31px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #707070;
    margin: 100px 0 80px 0;
  }
  width: 90%;
`;

function Search(props) {
  const { classes } = props;
  const [drawerState, setDrawerState] = useState({
    right: false
  });

  const[selectedPhoto, setSelectedPhoto] = useState(null)

  const toggleDrawer = (side, open) => () => {
    setDrawerState({ ...drawerState, [side]: open });
  };

  const [cities, setCities] = useState([
    {
      id: 1,
      title: "Zhytomyr",
      checked: false,
    },
    {
      id: 2,
      title: "Kyiv",
      checked: false,
    }
  ]);

  const [chips, setChips] = useState([]);

  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "architecture"
    },
    {
      id: 2,
      title: "nature"
    },
    {
      id: 3,
      title: "selfiePoints"
    }
  ]);

  const handleChangeCategory = elem => event => {
    elem.checked = !elem.checked;
    setCategories(categories);
    console.log(categories);
  };

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
  ];

  const handleAddChip = (chip) => {
    setChips([...chips, { title: chip }])
  }

  const handleDeleteChip = (chip, index) => {
    setChips(chips.filter((v, idx) => idx != index));
  }

  const handleChangeCity = (event) => {
    const selectedCities = event.target.value;
    const newCities = cities.map(city => {
      if(selectedCities.includes(city.id)) return {
        ...city,
        checked: !city.checked,
      }
      return city;
    });
    setCities(newCities)
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <Header>
        <AppBar>
          <p>Logo</p>
          <a onClick={toggleDrawer("right", true)}><FilterList /></a>
        </AppBar>
        <SearchInput>
          <p>Find fancy places using tags!</p>
          <ChipInput
            value={chips.map(x => x.title)}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip, idx) => handleDeleteChip(chip, idx)}
            onUpdateInput={handleInputChange}
            placeholder='Separate tags pushing "Enter"'
            classes={{
              chipContainer: classes.chipContainer,
              inputRoot: classes.inputRoot,
              root: classes.root
            }}
          />
          <p>Trending searches: business computer nature love house</p>
        </SearchInput>
      </Header>
      <SearchResult>
        <p>Recommended</p>
        <Gallery 
          photos={photos} 
          ImageComponent={SelectedImage} 
          changeId={setSelectedPhoto} 
          direction='column'
          margin={5}
          />
      </SearchResult>
      <Drawer
        toggleDrawer={toggleDrawer}
        drawerState={drawerState}
        categories={categories}
        handleChangeCategory={handleChangeCategory}
        handleChangeCity={handleChangeCity}
        cities={cities}
      />
    </>
  );
}

export default withStyles(styles)(Search);
