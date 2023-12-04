import { useRef, useState } from "react";
import style from "../checkout-page-styles/userCredentialsComponent.module.css";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/roomQuantity.actions";

export let UserCredentialsComponent = () => {
  let [userData, setUserData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    nationality: "IND",
    dateOfBirth: "",
    address: "",
    gender: "",
  });

  let nameRef = useRef();
  let emailRef = useRef();
  let phoneRef = useRef();
  let nationalityRef = useRef();
  let dobRef = useRef();
  let maleRef = useRef();
  let femaleRef = useRef();
  let otherRef = useRef();
  let addressRef = useRef();
  const dispatch = useDispatch();

let handleChange = () => {
      const dobValue = dobRef.current.value;
      const currentDate = new Date();
      const tenYearsAgo = new Date();
      tenYearsAgo.setFullYear(currentDate.getFullYear() - 10);

      const selectedDate = new Date(dobValue);
      if (selectedDate > tenYearsAgo) {
        alert(
          "NOTE : Your age should atleast be 10Years from today"
        );
        dobRef.current.value = '';
      }
  setUserData(() => ({
    fullName: nameRef.current.value,
    email: emailRef.current.value,
    mobileNumber: phoneRef.current.value,
    nationality: nationalityRef.current.value,
    dateOfBirth: dobRef.current.value,
    address: addressRef.current.value,
    gender : maleRef.current.checked ? "male" : femaleRef.current.checked ? "female" : otherRef.current.checked ? "other" : '',
  }));

  
};
dispatch(addUser(userData));

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.colsFull}>
          <label
            htmlFor="identityproof"
            className={`${style.form_label} ${style.required}`}
          >
            Upload your Id
          </label>
          <input type="file" className={style.idProof} id="identityproof"/>
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="name"
            className={`${style.form_label} ${style.required}`}
          >
            Full Name
          </label>
          <input
            className={style.form_inputs}
            id="name"
            type="text"
            ref={nameRef}
            onChange={handleChange}
          />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="email"
            className={`${style.form_label} ${style.required}`}
          >
            Email address
          </label>
          <input
            className={style.form_inputs}
            id="email"
            type="email"
            ref={emailRef}
            onChange={handleChange}
          />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="phone"
            className={`${style.form_label} ${style.required}`}
          >
            Mobile number
          </label>
          <input
            className={style.form_inputs}
            id="phone"
            type="number"
            ref={phoneRef}
            onChange={handleChange}
          />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="nationality"
            className={`${style.form_label} ${style.required}`}
          >
            Nationality
          </label>
          <select
            className={style.form_inputs}
            id="nationality"
            name="nationality"
            ref={nationalityRef}
            onChange={handleChange}
          >
            <option value="IND">India</option>
            <option value="USA">United States</option>
            <option value="CAN">Canada</option>
            <option value="GBR">United Kingdom</option>
            <option value="AUS">Australia</option>
            <option value="GER">Germany</option>
            <option value="FRA">France</option>
            <option value="ITA">Italy</option>
            <option value="JPN">Japan</option>
            <option value="BRA">Brazil</option>
            <option value="CHN">China</option>
            <option value="RUS">Russia</option>
            <option value="ZAF">South Africa</option>
            <option value="ARG">Argentina</option>
            <option value="MEX">Mexico</option>
            <option value="ESP">Spain</option>
            <option value="NLD">Netherlands</option>
            <option value="SWE">Sweden</option>
            <option value="NOR">Norway</option>
            <option value="NZL">New Zealand</option>
            <option value="SGP">Singapore</option>
            <option value="KOR">South Korea</option>
            <option value="EGY">Egypt</option>
            <option value="NGA">Nigeria</option>
            <option value="SAU">Saudi Arabia</option>
          </select>
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="dob"
            className={`${style.form_label} ${style.required}`}
          >
            Date of Birth
          </label>
          <input
            className={style.form_inputs}
            id="dob"
            type="date"
            ref={dobRef}
            onChange={handleChange}
          />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="gender"
            className={`${style.form_label} ${style.required}`}
          >
            Select Gender
          </label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            ref={maleRef}
            onChange={handleChange}
          />
          <label htmlFor="male" className={style.gender_label}>
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            ref={femaleRef}
            onChange={handleChange}
          />
          <label htmlFor="female" className={style.gender_label}>
            Female
          </label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            ref={otherRef}
            onChange={handleChange}
          />
          <label htmlFor="other" className={style.gender_label}>
            Other
          </label>
        </div>
        <div className={style.colsFull}>
          <label htmlFor="addr" className={style.form_label}>
            Address
          </label>
          <textarea
            id="addr"
            className={style.addressField}
            ref={addressRef}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
