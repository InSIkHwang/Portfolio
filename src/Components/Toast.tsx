import { useEffect } from "react";

interface Props {
  setToast: (bool: boolean) => void;
  text: string;
}

function Toast({ setToast, text }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        zIndex: 1000,
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default Toast;
