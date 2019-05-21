import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import School from "@material-ui/icons/School";
import Place from "@material-ui/icons/Place";
import Build from "@material-ui/icons/Build";
import People from "@material-ui/icons/People";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import church from "assets/img/church.jpg";
import colleges from "assets/img/colleges.png";
import band from "assets/img/band.jpg";
class SectionTabs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="nav-tabs">
            <h3>School Introduction</h3>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Location",
                      tabIcon: Place,
                      tabContent: (
                        <div class="mapouter">
   <div class="gmap_canvas"><iframe id="gmap_canvas" width="480px" height="360px" src="https://maps.google.com/maps?q=5070%20Appian%20Way%20El%20Sobrante%2C%20California%2094803&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
   </iframe></div>
   
</div>
                      )
                    },
                    {
                      tabName: "Our Community",
                      tabIcon: People,
                      tabContent: (
                        <img
                      src={church}
                      alt="church"
                      width="100%"
                    />
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "COLLEGE PREPARATION",
                      tabIcon: School,
                      tabContent: (
                        <div>
                          <p className={classes.textCenter}>
                            Since 2007, ESCS' first high school graduating class, we've had students accepted all over the nation, including:
                          </p>
                          <img
                        src={colleges}
                        alt="colleges"
                        width="100%"
                      />
                    </div>
                      )
                    },
                    {
                      tabName: "Sports, Art & Activities",
                      tabIcon: Palette,
                      tabContent: (
                        <img
                      src={band}
                      alt="band"
                      width="100%"
                    />
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(SectionTabs);
