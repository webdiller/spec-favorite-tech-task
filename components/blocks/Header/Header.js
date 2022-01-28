import { useDispatch, useSelector } from "react-redux";
import { setUserSearchSubstring } from "@/actions/searchUsers";

export default function Header({ customStyle }) {
  const { userName, shortName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const setUserSearchSubstringHandler = () => (event) => {
    const { value } = event.target;
    dispatch(setUserSearchSubstring(value.toLowerCase()));
  };
  return (
    <header style={customStyle} className="header">
      <div className="container header__container">
        <form className="header__form">
          <input
            onChange={setUserSearchSubstringHandler()}
            placeholder="Введите фамилию"
            type="text"
            className="header__input"
          />
        </form>
        <div className="header__user-info">
          <span className="header__user-name">{userName}</span>
          <div className="header__user-icon">{shortName}</div>
        </div>
      </div>
    </header>
  );
}
