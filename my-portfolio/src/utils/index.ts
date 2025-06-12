export const scrollTo = (id: string) => {
  const el = document.querySelector(id) as HTMLElement;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export const openLink = (ref: string) => {
  const link = document.createElement("a");
  link.href = ref;
  link.target = "_blank";
  link.rel = "next";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
