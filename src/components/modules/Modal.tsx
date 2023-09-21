import { MouseEvent } from "react";
import { FC } from "react";

interface IModal {
  modal: boolean;
  close: any;
}

export const Modal: FC<IModal> = ({ modal, close }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  return (
    <div
      id="modalDiv"
      className={`my-modal ${modal ? "open" : "close"}`}
      onClick={handleClick}
    >
      <div className="mail-modal-body">
        <div className="modal-body">
          <p>Slavikair2022@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
