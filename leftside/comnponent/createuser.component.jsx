import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "../styles/usercreate.module.css";

import LeftSide from "../comnponent/dashboard.component";

export default function UserCreate() {
    const notify = () => toast("Your profile is saved successfully!");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <LeftSide />
          </div>

          <div className="col-lg-9">
            <div className={Styles.body}>
                <p className={Styles.profile_pic}>Your Profile  Picture</p>

                
                
                <input type="file" className={Styles.pic_upload} 
                
               
                
                />

                <div className="row">
                    <div className="col-lg-6">
                        <div className={Styles.input_field}>
                            <label htmlFor="name" className={Styles.name}>Name</label> <br />
                            <input type="text" id="name" className={Styles.input_type} value="Habibur Rahman"/>
                        </div>

                        <div className={`mt-4 ${Styles.input_field}`}>
                            <label htmlFor="name" className={Styles.name}>Phone Number</label> <br />
                            <input type="number" id="name" className={Styles.input_type} value="01518443329"/>
                        </div>

                        <div className={`mt-4 ${Styles.input_field}`}>
                            <label htmlFor="name" className={Styles.name}>Email</label> <br />
                            <input type="email" id="name" className={Styles.input_type} value="shantoshah2036@gmail.com"/>
                        </div>

                        <div className={`mt-4 ${Styles.input_field}`}>
                            <label htmlFor="name" className={Styles.name}>Present address</label> <br />
                            <input type="text" id="name" className={Styles.input_type} value="Mirpur-2, Dhaka-1216"/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={Styles.input_field_right}>
                            <label htmlFor="name" className={Styles.name}>User name</label> <br />
                            <input type="text" id="name" className={Styles.input_type} value="Shanto2036"/>
                        </div>

                        <div className={`mt-4 ${Styles.input_field_right}`}>
                            <label htmlFor="name" className={Styles.name}>Password</label> <br />
                            <input type="password" id="name" className={Styles.input_type} value="admin@321"/>
                        </div>

                        <div className={`mt-4 ${Styles.input_field_right}`}>

                            <label htmlFor="name" className={Styles.name}>Role</label> <br />
                            <select name="role" id="role" className={Styles.input_type}>
                                <option value="volvo">Select Role</option>
                                <option value="saab">Admin</option>
                                <option value="mercedes">Reporter</option>
                                
                            </select>
                            
                        </div>

                        <div className={`mt-4 ${Styles.input_field_right}`}>
                            <label htmlFor="name" className={Styles.name}>Status</label> <br />
                            <select name="status" id="status" className={Styles.input_type}>
                                <option value="volvo">Select Status</option>
                                <option value="saab">Active</option>
                                <option value="mercedes">Pending</option>
                                
                            </select>
                        </div>
                    </div>
                </div>


                <div className="d-flex">
                    <p className={Styles.profile_save} onClick={notify}>Save Profile</p>

                    <ToastContainer />

                    <p className={Styles.reset}>Reset</p>
                </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
