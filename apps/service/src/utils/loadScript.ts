export const loadScript = (src: string) => {
  if (document.querySelector(`script[src="${src}"]`)) {
    return;
  }
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  document.head.appendChild(script);
};
