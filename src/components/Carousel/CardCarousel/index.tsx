import { ICheckUp } from "../../../models/models";
import { Button } from "../../Button";
import s from "./Card.module.scss";

export const CardCarousel = ({
  name,
  gender,
  price,
  discount,
  list,
  img,
}: ICheckUp) => {
  return (
    <div id="carousel" className="relative flex h-[400px] overflow-hidden">
      <img src={img} id={s.carousel_img} className="absolute" alt={name} />
      <div
        id={s.carousel_container}
        className="absolute top-0 bottom-0 flex items-center"
      >
        <div id={s.carousel_content} className="flex flex-col">
          <h2 className="font-bold uppercase mb-[3px]">{name}</h2>
          <p className="mb-[8px] text-lg tracking-wider">{gender}</p>
          <ul className="list-disc flex gap-1 flex-col px-3">
            {list.map((item) => (
              <li key={item} className="text-sm color-1">
                <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center text-lg mt-2">
            <p>Всего: {price}₽</p>
            {discount && (
              <p className="line-through ml-4 text-sm text-gray-400">
                {discount}₽
              </p>
            )}
          </div>
          <div id={s.carousel_buttons} className="flex gap-3">
            <div className="w-[165px]">
              <Button
                onClick={() => console.log("click")}
                text="Записаться"
                bg="bg-color-1"
                bgHover="color-dark-2"
                color="text-white"
                colorHover="text-white"
              />
            </div>
            <div className="w-[165px]">
              <Button
                onClick={() => console.log("click")}
                text="Подробнее"
                bg="bg-transparent"
                bgHover="bg-transparent"
                border="border-1"
                borderHover="border-3"
                color="color-1"
                colorHover="color-dark-2"
              />
            </div>
          </div>
        </div>
        <div id={s.triangle} className="absolute w-0 h-0 right-[-100px]"></div>
      </div>
    </div>
  );
};
