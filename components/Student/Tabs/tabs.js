import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@/components/Student/Cards/card";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabs = ({ student, internships, jobs }) => {
  console.log(internships);
  console.log(jobs);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" , display:'flex', justifyContent:"center"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="theme-text-colour"
              label="Internships"
              {...a11yProps(0)}
            />
            <Tab className="theme-text-colour" label="Jobs" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0} className="theme-bg-colour">
          <>
            {internships?.map((internship) => (
              <Card internship={internship} student={student} />
            ))}
          </>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="theme-bg-colour">
          <>
            {jobs?.map((job) => (
              <Card job={job} student={student} />
            ))}
          </>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default tabs;
