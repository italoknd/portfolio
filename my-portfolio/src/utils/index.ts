export const scrollTo = (id: string) => {
  const el = document.querySelector(id) as HTMLElement;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;

  window.scrollTo({ top: y, behavior: "smooth" });
};
