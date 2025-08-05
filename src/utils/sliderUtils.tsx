import { RefObject, useRef } from "react";

export function useSlider(scrollRef: RefObject<HTMLDivElement | null>) {
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Use refs to persist handler references
  const handleMouseMoveRef = useRef<(e: MouseEvent) => void>();
  const handleMouseUpRef = useRef<() => void>();

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    document.body.style.cursor = "";
    window.removeEventListener("mousemove", handleMouseMoveRef.current!);
    window.removeEventListener("mouseup", handleMouseUpRef.current!);
  };

  handleMouseMoveRef.current = handleMouseMove;
  handleMouseUpRef.current = handleMouseUp;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    document.body.style.cursor = "grabbing";
    window.addEventListener("mousemove", handleMouseMoveRef.current!);
    window.addEventListener("mouseup", handleMouseUpRef.current!);
  };

  return { handleMouseDown };
}