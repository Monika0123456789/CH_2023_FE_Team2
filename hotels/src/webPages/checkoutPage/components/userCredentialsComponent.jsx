import style from "../checkout-page-styles/userCredentialsComponent.module.css";

export let UserCredentialsComponent = () => {
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
          <button className={style.idProof} id="identityproof">Upload</button>
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="name"
            className={`${style.form_label} ${style.required}`}
          >
            Full Name
          </label>
          <input className={style.form_inputs} id="name" type="text" />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="email"
            className={`${style.form_label} ${style.required}`}
          >
            Email address
          </label>
          <input className={style.form_inputs} id="email" type="email" />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="phone"
            className={`${style.form_label} ${style.required}`}
          >
            Mobile number
          </label>
          <input className={style.form_inputs} id="phone" type="number" />
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
          <input className={style.form_inputs} id="dob" type="date" />
        </div>
        <div className={style.colsHalf}>
          <label
            htmlFor="gender"
            className={`${style.form_label} ${style.required}`}
          >
            Select Gender
          </label>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male" className={style.gender_label}>
            Male
          </label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female" className={style.gender_label}>
            Female
          </label>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other" className={style.gender_label}>
            Other
          </label>
        </div>
        <div className={style.colsFull}>
          <label htmlFor="addr" className={style.form_label}>
            Address
          </label>
          <textarea id="addr" className={style.addressField} />
        </div>
      </div>
    </>
  );
};
