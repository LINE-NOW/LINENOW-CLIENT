export const loadScript = (src: string, callback: () => void) => {
  if (document.querySelector(`script[src="${src}"]`)) {
    callback();
    return;
  }
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = () => {
    callback();
  };
  document.head.appendChild(script);
};
