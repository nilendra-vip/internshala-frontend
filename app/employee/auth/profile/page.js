"use client";
import { asyncEmployeeOrganizationLogo, asyncEmployeeUpdate, asyncEmployeeUpdatePassword } from "@/store/Actions/employeeActions";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const { employee } = useSelector((state) => state.employeeReducer);
  const updateEmployeeHandler = () => {
    const employee = {
      firstname: "Sunita",
      lastname: "Gupta",
      contact: "1234567890",
      organizationName:'Silver Inc'
    };
    dispatch(asyncEmployeeUpdate(employee));
  };
  const resetPasswordHandler = () => {
    const updatePassword = {
      password : '12345678'
    }
    dispatch(asyncEmployeeUpdatePassword(updatePassword));
  }


  const organizationLogoHandler =(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('organizationLogo', e.target.organizationLogo.files[0]);
    dispatch(asyncEmployeeOrganizationLogo(formData));
  }


  return (
    <div className="container bg-secondary mt-5 py-3">
      <img src={employee?.organizationLogo.url} height={300} alt="" />
      <form onSubmit={organizationLogoHandler} encType="multipart/form-data">
        <input type="file" name='organizationLogo' />
        <button type="submit">Submit</button>
      </form>
      <br /><br />
      <button onClick={updateEmployeeHandler} className="btn btn-warning fs-4">
        Update employee
      </button>
      <br /><br />
      <button onClick={resetPasswordHandler} className="btn btn-danger fs-4">
        Update Password
      </button>
    </div>
  );
};

export default page;
