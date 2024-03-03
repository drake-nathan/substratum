import { useEffect, useState } from "react";

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;

  const [isLocked, setIslocked] = useState(bodyStyle.overflowY === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  const toggle = () => setIslocked(!isLocked);

  return [isLocked, toggle];
};

export default useBodyScrollLock;
