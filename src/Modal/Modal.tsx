// import { useEffect, useRef } from "react";
import { useEffect, useRef } from "react";
import { ModalProps } from "./common/common.type";
import styles from "./Modal.module.css";
import useOutsideClick from "./useOutsideClick";

function Modal(props: ModalProps) {
  const { open, onClose, children, width, height } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, onClose);

  useEffect(() => {
    function keydownHandler(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    open && (
      <div className={styles.backdrop}>
        <div ref={modalRef} className={styles.modal} style={{ width, height }}>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
