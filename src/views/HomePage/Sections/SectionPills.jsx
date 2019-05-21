import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

import flyer_simp_cn_front from "assets/img/flyer_simp_cn_front.jpg";
import flyer_simp_cn_back from "assets/img/flyer_simp_cn_back.jpg";
import flyer_trad_cn_front from "assets/img/flyer_trad_cn_front.jpg";
import flyer_trad_cn_back from "assets/img/flyer_trad_cn_back.jpg";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>International Program</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8} lg={6}>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "ESCS Intl Program",
                      tabContent: (
                        <span>
                          <h4>
                            Our International Program is for students around the world, that are interested in a 6-month to multiple year program here at El Sobrante Christian School. 
                          </h4>
                          <br />
                          <h4>
                            We welcome applications from international students who are intuitive, bright, ambitious, and independent. 
                          </h4>
                        </span>
                      )
                    },
                    {
                      tabButton: "Intl Experience",
                      tabContent: (
                        <span>
                          <h4>
                            We believe that your international schooling experience at El Sobrante Christian School should allow you to:
                          </h4>
                          <br />
                          <ul>
                            <li>Make friends with Americans Students and experience cultural diversity</li>
                            <li>Challenge yourself to grow academically and spiritually</li>
                            <li>Participate in sports and after school activities</li>
                            <li>Immerse yourself in American culture</li>
                            <li>Prepare and apply for U.S. universities</li>
                          </ul>
                        </span>
                      )
                    },
                    {
                      tabButton: "Admission Criteria",
                      tabContent: (
                        <span>
                          <h4>
                            ESCS is approved by SEVIS for the acceptance of International Students. 
We are currently accepting students who meet the following criteria:
                          </h4>
                          <br />
                          <ol>
                            <li>Independent and staying with a relative</li>
                            <li>Those who are applying through an approved agency</li>
                            <li>Those seeking an American academic and cultural experience</li>
                            <li>Meet all ESCS application requirements</li>
                            <li>Demonstrate English proficiency through approved tests such as TOFEL.</li>
                          </ol>
                        </span>
                      )
                    },
                    {
                      tabButton: "Resources",
                      tabContent: (
                        <ul>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/International_Brochure.pdf">Student Brochure</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/Int_Student_Cover_Sheet.pdf">International Student Cover Sheet</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/Application_Process.pdf">Application Process</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/International_Student_Application.pdf">International Student Application</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/Int_l_Notice_of_Immunization_Needed.pdf">Immunization Notice</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/International_Tuition_Rates.pdf">International Tuition Rates</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/Int_l_Program_Tuition_Payment_Policies.pdf">Tuition Payment Policies</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/Payment_Information.pdf">Tuition Payment Information</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/English_Language_Proficiency_Scores.pdf">English language Proficiency Scores</a></li>
                          <li><a href="https://s3.amazonaws.com/media.cloversites.com/85/854c6868-2408-425d-bf3d-0480883e7cb1/documents/Grads_Accepted_Here.pdf">Colleges Our Students Have Been Accepted To</a></li>
                        </ul>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Chinese Simp Flyer",
                      tabContent: (
                        <img
                      src={flyer_simp_cn_front}
                      alt="flyer_simp_cn_front"
                      width="100%"
                    />
                      )
                    },
                    {
                      tabButton: "Chinese Trad Flyer",
                      tabContent: (
                        <img
                      src={flyer_trad_cn_front}
                      alt="flyer_trad_cn_front"
                      width="100%"
                    />
                      )
                    },
                    {
                      tabButton: "Vietnamese Flyer",
                      tabContent: (
                        <img
                      src={flyer_trad_cn_front}
                      alt="flyer_trad_cn_front"
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

export default withStyles(pillsStyle)(SectionPills);
