export function scrollToElement(elementId: string) {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
  });
}
