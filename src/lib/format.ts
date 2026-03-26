const dateTimeLong: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const dateTimeShort: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const dateTimeCompact: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
};

const timeOnly: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

export function formatDateTime(date: Date, style: "long" | "short" = "long") {
  return date.toLocaleDateString(
    "nb-NO",
    style === "long" ? dateTimeLong : dateTimeShort,
  );
}

export function formatDateTimeCompact(date: Date) {
  return date.toLocaleDateString("nb-NO", dateTimeCompact);
}

export function formatTime(date: Date) {
  return date.toLocaleTimeString("nb-NO", timeOnly);
}
