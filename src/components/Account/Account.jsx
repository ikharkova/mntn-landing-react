import "./Account.css";
import accountIcon from "../../img/account-icon.png";
const Account = (props) => {
  
  return (
  <div className="account">
    <div className="account-img">
      <img src={accountIcon} alt="account icon" />
    </div>
    <span className="account-text text">Account</span>
  </div>
)
}
export default Account;