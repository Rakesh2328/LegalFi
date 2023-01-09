import React from "react";
import styles from "@styles/case.module.css";
import { NextPage } from "next";
const Case:NextPage = () => {
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Enter Case Details</h1><br />
        <form>
          <label className={styles.labels} htmlFor="fname">Name:</label>
          <input className={styles.inputs} type="text" id="fname" name="firstname" placeholder="Your name.." /><br /><br />
          <label className={styles.labels} htmlFor="lname">Age:</label>
          <input className={styles.inputs} type="text" id="lname" name="lastname" placeholder="Your Age.." /><br /><br />
          <label className={styles.labels} htmlFor="subject">Case Description:</label>
          <textarea className={styles.inputs} id="subject" name="subject" placeholder="Write something.." style={{height: 150}} defaultValue={""} />
          <br />
          <br />
          <label className={styles.labels} htmlFor ="Date">Date:</label>
          <input className={styles.inputs} type="date" id="Date" name="Date"/><br /><br />
          <label className={styles.labels} htmlFor="upload">Upload Files:</label>
          <input className={styles.inputs} type="file" id="myFile" name="filename" multiple/><br /><br />
          <label className={styles.labels} htmlFor="token1">Token1:</label>
          <input className={styles.inputs} type="text" id="token1" name="tokenid" placeholder="tokenid1.." /><br /><br />
          <label className={styles.labels} htmlFor="token2">Token2:</label>
          <input className={styles.inputs} type="text" id="token2" name="tokenid" placeholder="tokenid2.." /><br /><br />
          <label className={styles.labels} htmlFor="token3">Token3:</label>
          <input className={styles.inputs} type="text" id="token3" name="tokenid" placeholder="tokenid3.." /><br /><br />
          <label className={styles.labels} htmlFor="token4">Token4:</label>
          <input className={styles.inputs} type="text" id="token4" name="tokenid" placeholder="tokenid4.." /><br /><br />
          <label className={styles.labels} htmlFor="token5">Token5:</label>
          <input className={styles.inputs} type="text" id="token5" name="tokenid" placeholder="tokenid5.." /><br /><br />
          <input className={styles.button} type="submit" defaultValue="Save"/>
        </form>
    </div>

        
    );
}
export default Case;