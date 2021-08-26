import { isValid } from "date-fns";

export const formatDateAndTime = (date: Date): string => {
  if (isValid(date)) {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }
  return "";
};
