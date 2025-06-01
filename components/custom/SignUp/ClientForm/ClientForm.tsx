"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
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
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      procedure: "",
    },
  });
  // const [formData, setFormData] = useState({
  //   name: "",
  //   tel: "",
  //   procedure: "",
  // });

  const [alert, setAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleAlertClose = () => {
    setAlert(false);
  };

  const onSubmit = async (formData: {
    name: string;
    tel: string;
    procedure: string;
  }) => {
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
      reset();
    } else {
      setAlertMessage(ERROR_MESSAGE);
      setAlert(true);
    }
  };

  return (
    <>
      <form
        className="sign-up__form"
        id="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="sign-up__input"
          type="text"
          id="name"
          placeholder="имя"
          {...register("name", { required: true })}
        />
        <input
          className="sign-up__input"
          type="tel"
          id="tel"
          placeholder="телефон"
          {...register("tel", { required: true })}
        />
        <Controller
          control={control}
          name="procedure"
          rules={{ required: true }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="sign-up__input text-[10px] text-[color:var(--light-brown)]">
                <SelectValue placeholder="процедура" />
              </SelectTrigger>
              <SelectContent className="border-none">
                <SelectItem value="макияж/образ">макияж/образ</SelectItem>
                <SelectItem value="стрижка">стрижка волос</SelectItem>
                <SelectItem value="окрашивание">окрашивание</SelectItem>
                <SelectItem value="фотосессия">фотосессия</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <AlertDialog>
          <AlertDialogTitle className="hidden">
            Спасибо за обращение, мы свяжемся с вами в ближайшее время
          </AlertDialogTitle>
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
