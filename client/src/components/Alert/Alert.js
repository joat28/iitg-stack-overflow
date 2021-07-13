import { useSelector } from "react-redux";

const Alert = () => {
  const alert = useSelector((state) => {
    return state.alert;
  });
  return (
    <div
      className={`${alert.visible ? "fixed" : "hidden"}	bg-${
        alert.status ? "blue-500" : "red-500"
      } w-1/4 z-100 top-16 py-5 text-white font-semibold rounded inset-x-0 m-auto `}
    >
      {alert.message}
    </div>
  );
};

export default Alert;
