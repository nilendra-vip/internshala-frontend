import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { asyncStudentInternshipApplying } from "@/store/Actions/studentActions";
import button from "@/components/Button";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

const card = ({ internship, job, student }) => {
  const dispatch = useDispatch();
  const applyInternshipHandler = (internshipId) => {
    dispatch(asyncStudentInternshipApplying(internshipId));
  };

  const applyJobHandler = (jobId) => {
    dispatch(asyncStudentJobApplying(jobId));
  };
  console.log(internship, job);
  return (
    <Box sx={{ minWidth: 275 }} className="bg-warning my-2">
      <Card variant="outlined">
        {" "}
        <div className="px-3">
          <div className="d-flex justify-content-between">
            <CardContent className="col">
              <Typography maxLength="15" style={{ fontSize: "22px" }}>
                {truncateString(internship?.profile || job?.title, 20)}
              </Typography>
              <Typography style={{ fontSize: "17px" }} className="fw-light">
                {truncateString("Medorn Ventures Pvt Ltd", 20)}
              </Typography>
            </CardContent>
            <CardContent className="col d-flex align-items-start flex-column">
              <div>
                <Typography
                  sx={{ fontSize: "15px" }}
                  className="text-secondary d-flex gap-2 align-items-center"
                >
                  <LocationOnOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                  {internship?.internshipType || job?.jobType}
                </Typography>
                <Typography
                  sx={{ fontSize: "15px" }}
                  className="text-secondary d-flex gap-2 align-items-center"
                >
                  <CurrencyRupeeOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                  {internship?.stipend.amount || job?.salary}/month
                </Typography>
                <Typography
                  sx={{ fontSize: "15px" }}
                  className="text-secondary d-flex gap-2 align-items-center"
                >
                  <DateRangeOutlinedIcon sx={{ fontSize: "20px" }} />{" "}
                  {internship?.duration || (job && "Full Time")}
                </Typography>
              </div>
            </CardContent>
            <CardActions className="col d-flex justify-content-end">
              {internship && (
                <>
                  {!internship.students.includes(student?._id) ? (
                    <button
                      className="btn"
                      style={{ backgroundColor: "#28e1bf", color: "white" }}
                      onClick={() => applyInternshipHandler(internship._id)}
                    >
                      Apply Internship
                    </button>
                  ) : (
                    <h3 className="btn btn-success">Applied</h3>
                  )}
                </>
              )}
              {job && (
                <>
                  {!job.students.includes(student?._id) ? (
                    <button
                      className="btn"
                      style={{ backgroundColor: "#28e1bf", color: "white" }}
                      onClick={() => applyJobHandler(job._id)}
                    >
                      Apply Job
                    </button>
                  ) : (
                    <h3 className="btn btn-success">Applied</h3>
                  )}
                </>
              )}
            </CardActions>
          </div>
          <Divider />
          <div className="d-flex justify-content-between">
            <CardContent className="col">
            <Typography maxLength="15" sx={{ fontSize: "17px" , fontWeight:'semibold' }}>
                Skills Required
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item" style={{fontSize:"12px"}}>HTML</li>
                    <li className="list-group-item" style={{fontSize:"12px"}}>CSS</li>
                    <li className="list-group-item" style={{fontSize:"12px"}}>JavaScript</li>
                </ul>
                </Typography>
            </CardContent>
            <CardContent className="col d-flex align-items-start flex-column">
              <div>
              <Typography style={{ fontSize: "17px" , fontWeight:'semibold' }} className="my-1">
                {internship && 'Responsibility' || job && 'Description'}
                <ul className="list-group list-group-horizontal fw-light">
                    {truncateString(internship?.responsibility || job?.description, 60)}
                </ul>
                </Typography>
              </div>
            </CardContent>
            <CardActions className="col d-flex justify-content-end">
              
            </CardActions>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default card;
