import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { getNotifications, setNotifications } from "../utils/localStorage";

export const NotificacionesContext = createContext();

export const NotificacionProvaider = ({ children }) => {
  const [array, setArray] = useState(getNotifications() || []);
  const [count, setCount] = useState(0);

  const handleChangeNotification = (text = "te dio un like") => {
    const newNotification = {
      notificacion: text,
      id: uuidv4(),
      visto: false,
    };
    const newArrayNotificaciones = [...array, newNotification];

    setArray(newArrayNotificaciones);
  };
  const handleDelete = (id) => {
    const deleteArray = array.filter((notificacion) => {
      if (!notificacion.visto === true) {
        console.log("!== true");
      }
      return notificacion.id !== id;
    });
    setArray(deleteArray);
  };
  const handleSeen = (id) => {
    const isSeen = array.map((notificacion) => {
      if (notificacion.id === id) {
        const updateNotificacion = { ...notificacion, visto: true };

        return updateNotificacion;
      } else {
        return notificacion;
      }
    });

    setArray(isSeen);
  };

  useEffect(() => {
    setCount(0);
    array?.forEach((notificacion) => {
      if (!notificacion.visto) {
        setCount((count) => count + 1);
      }
    });

    setNotifications(JSON.stringify(array));
  }, [array]);

  return (
    <NotificacionesContext.Provider
      value={{
        array: array,
        setArray: setArray,
        count: count,
        setCount: setCount,
        handleChangeNotification: handleChangeNotification,
        handleDelete: handleDelete,

        handleSeen: handleSeen,
        useEffect: useEffect,
      }}
    >
      {children}
    </NotificacionesContext.Provider>
  );
};
