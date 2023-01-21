import React from "react";
import { useActions } from "../../hooks/actions";

interface IEmail {
  email?: string;
  name?: string;
  phone?: number;
  text?: string;
}

export const Form = () => {
  const [formState, setFormState] = React.useState<IEmail>();
  const { closeForm } = useActions();

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(formState);
    window.Email.send({
      SecureToken: "a4e049bd-b4e0-49c6-b5b9-62b4e86d44f7",
      To: "rbru-metrika@yandex.ru",
      From: formState?.email,
      Subject: formState?.name,
      Body: `${formState?.text} \n\nphone: ${formState?.phone}`,
    }).then((message) => alert(message));

    closeForm();
  };

  return (
    <div
      onSubmit={submitHandler}
      className="fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 z-20 backdrop-blur-sm"
    >
      <button
        onClick={() => closeForm()}
        className="absolute top-[30px] right-[30px] font-bold text-red-400"
      >
        Закрыть
      </button>
      <div className="w-full flex bg-gray-200 py-5 justify-center items-center">
        <form className="flex flex-col w-[300px] gap-2">
          <p className="text-lg">Записаться на прием</p>
          <input
            type="email"
            name="email"
            value={formState?.email}
            onChange={changeHandler}
            placeholder="Ваша почта..."
            className="rounded-md p-2"
            required
          />
          <input
            type="text"
            name="name"
            value={formState?.name}
            onChange={changeHandler}
            placeholder="Ваше имя..."
            className="rounded-md p-2"
            required
          />
          <input
            type="number"
            name="phone"
            value={formState?.phone}
            onChange={changeHandler}
            placeholder="+ 7 900 000-00-00"
            className="rounded-md p-2"
            required
          />
          <textarea
            name="text"
            onChange={changeHandler}
            placeholder="Сообщение..."
            className="rounded-md p-2"
            required
          />
          <input
            type="submit"
            value="Отправить"
            className="rounded-md p-2 bg-green-400 text-white"
          />
        </form>
      </div>
    </div>
  );
};
