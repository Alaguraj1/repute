"use client"
import { Email } from "@/svg";

const ForgotForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="login__input-wrapper">
        <div className="login__input-item">
          <div className="login__input">
            <input type="email" placeholder="Email" />
            <span><Email /></span>
          </div>
        </div>
      </div>
      <div className="login__btn">
        <button type="submit" className="tp-btn w-100">
          Send Request
        </button>
      </div>
    </form>
  );
};

export default ForgotForm;
