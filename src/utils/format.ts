import { isValid } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

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

export const formatDateLong = (date: Date): string => {
  if (isValid(date)) {
    return new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
    }).format(date);
  }
  return "";
};

export const formatCurrency = (number: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(number);
};

export const formatDate = (date: any): string => {
  if (!date) return "";
  const newDate = new Date(date.seconds ? date.seconds * 1000 : date);

  return new Intl.DateTimeFormat("pt-BR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(newDate);
};

export const padString = (num: number | string, size: number = 2) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

export const formatDateUTC = (date: any): string => {
  if (!date) return "";
  const newDate = zonedTimeToUtc(
    new Date(date.seconds ? date.seconds * 1000 : date),
    "America/Sao_Paulo"
  );

  return [
    padString(newDate.getUTCDate(), 2),
    padString(newDate.getUTCMonth() + 1, 2),
    newDate.getUTCFullYear(),
  ].join("/");
};
