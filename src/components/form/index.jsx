import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="mt-5 my-4 d-flex justify-content-center gap-3 align-items-center">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
        type="checkbox"
        id="terms"
      />
      <div className="terms-box">
        <p style={{ display: `${isHover ? "flex" : "none"}` }}>
          Size gerçekten birşey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="btn btn-primary"
        disabled={!isChecked}
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
