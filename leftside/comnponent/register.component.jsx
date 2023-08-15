import React from "react";

import Head from "next/head";
import Link from 'next/link';


import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "/styles/register.module.css";


export default function Register() {
    
  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className={`container-fluid ${Styles.bgColor}`}>
        <div className="row">
          <div className={`col-lg-12`}>
            <div>
              <h1 className={Styles.welcome}>Welcome!</h1>
              <p className={Styles.welcome_para}>
                Use these awesome forms to login or create new account <br /> in
                your project for free.
              </p>

              <div className={ `needs-validation ${Styles.register_field}`}>
                <h4 className={Styles.register_with}>Register with</h4>

                <div className={Styles.social_icon}>
                  <div className={Styles.fb}></div>

                  <div className={Styles.google}></div>

                  <div className={Styles.google}></div>
                </div>

                <p className={Styles.or}>or</p>

                <div className={Styles.input_field}>
                    <label for="validationCustom01">Name</label> <br />
                    <input type="text" id="validationCustom01" placeholder="Your Full Name" className={Styles.name}
                    
                    />

                    <label for="validationCustom02" className={Styles.second_input}>Email</label> <br />
                    <input type="email" placeholder="Your Email" id="validationCustom02" className={Styles.name}/>

                    <label for="validationCustom03" className={Styles.second_input}>Password</label> <br />
                    <input type="email" placeholder="Password" id="validationCustom03" className={Styles.name}/>

                    <label for="validationCustom04" className={Styles.second_input}>Confirm Password</label> <br />
                    <input type="email" placeholder="Confirm Password" id="validationCustom04" className={Styles.name}/>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <p className={Styles.sign_up}>Sign Up</p>
                </div>

                <p className={Styles.account}>Already have an account? 
                
                <Link href="/login" style={{textDecoration:"none"}}>
                    <span className={Styles.sign_in}>Sign in</span>
                </Link>
                
                </p>

                

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
