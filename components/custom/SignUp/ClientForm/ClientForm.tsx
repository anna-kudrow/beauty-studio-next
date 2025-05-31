"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { CHAT_ID, ERROR_MESSAGE, SUCCESS_MESSAGE, URI_API } from "~/lib/const";

export const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    procedure: "",
  });

  const [alert, setAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAlertClose = () => {
    setAlert(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
        <b>Клиент: </b>${formData.name}
        <b>Телефон: </b>${formData.tel}
        <b>Процедура: </b>${formData.procedure}
    `;

    const response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "html",
      }),
    });

    const result = await response.json();

    if (result.ok) {
      setAlertMessage(SUCCESS_MESSAGE);
      setAlert(true);
      setFormData((prevData) => ({
        ...prevData,
        name: "",
        tel: "",
        procedure: "",
      }));
    } else {
      setAlertMessage(ERROR_MESSAGE);
      setAlert(true);
    }
  };

  return (
    <>
      <form className="sign-up__form" id="form" onSubmit={handleSubmit}>
        <input
          className="sign-up__input"
          type="text"
          name="name"
          id="name"
          placeholder="имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="sign-up__input"
          type="tel"
          name="tel"
          id="tel"
          placeholder="телефон"
          value={formData.tel}
          onChange={handleChange}
          required
        />
        <Select>
          <SelectTrigger className="sign-up__input">
            <SelectValue placeholder="Выберите процедуру" />
          </SelectTrigger>
          <SelectContent
            className=""
            value={formData.procedure}
            onChange={handleChange}
          >
            <SelectItem value="Макияж/образ">Макияж/образ</SelectItem>
            <SelectItem value="Стрижка/окрашивание">
              Стрижка/окрашивание
            </SelectItem>
            <SelectItem value="Фотосессия">Фотосессия</SelectItem>
          </SelectContent>
        </Select>
        <AlertDialog>
          <AlertDialogTrigger className="sign-up__btn" type="submit">
            записаться
          </AlertDialogTrigger>
          {alert ? (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  style={{ backgroundColor: "#ebe1f4b3", color: "#363636" }}
                  onClick={handleAlertClose}
                >
                  Ок
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          ) : null}
        </AlertDialog>
      </form>
    </>
  );
};
