import { Navigate, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import UserStore from "../stores/UserStore.ts";
import AuthStore from "../stores/AuthStore.ts";
import { PAGES } from "../constants";

const ProfilePage = observer(() => {
  const navigate = useNavigate();
  const [isTokenPresent, setIsTokenPresent] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token != undefined) {
      setIsTokenPresent(true);
      setIsLoading(false);
    } else if (token == undefined) {
      setIsTokenPresent(false);
      setIsLoading(false);
    }
    console.log("JWT: " + token);
  }, []);

  if (isLoading || isTokenPresent == undefined) {
    return (
      <div className={"flex justify-center font-phil text-3xl mt-10"}>
        Loading...
      </div>
    );
  } else if (!isTokenPresent) {
    return <Navigate to="/login" />;
  }

  if (isTokenPresent) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      UserStore.getUser(token).then(() =>
        console.log("first name" + UserStore.currentUser.first_name),
      );
    }
  }

  const handleLogoutClick = () => {
    AuthStore.logout().then(() => navigate(PAGES.MAIN));
  };

  // console.log("isTokenPresent: " + isTokenPresent)
  // console.log("isLoading: " + isLoading)

  return (
    <div className={""}>
      <div className={"flex justify-center mt-10 font-phil text-4xl"}>
        Мій профайл
      </div>
      <div className={"flex flex-col gap-y-5 mx-10 font-phil text-xl"}>
        <div className={""}>Ім'я: {UserStore.currentUser.first_name}</div>
        <div className={""}>Прізвище: {UserStore.currentUser.last_name}</div>
        <div className={""}>Імейл: {UserStore.currentUser.email}</div>
      </div>
      <div className={"flex justify-center mt-10 font-phil text-4xl"}>
        Мої книги
      </div>
      <div className="flex flex-col font-phil">
        <div className="mt-10 text-4xl text-center">Вихід з аккаунту</div>
        <div className="mt-5 text-xl ml-10 ">
          Якщо ви бажаєте вийти з аккаунту, натисніть кнопку нижче
        </div>
        <button
          onClick={handleLogoutClick}
          className={
            "ml-10  my-5 p-3 w-max h-12 text-white bg-red-500 hover:bg-red-700 font-bold rounded-lg active:ring-3 active:ring-sky-400 cursor-pointer"
          }
        >
          Вийти з аккаунту
        </button>
      </div>
    </div>
  );
});

export default ProfilePage;
