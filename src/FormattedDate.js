import React from "react";

export default function FormattedDate(props) {
  const options = { weekday: "long", hour: "numeric", minute: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  const parts = dateTimeFormat.formatToParts(props.date);

  return (
    <span>
      {parts[0].value} {parts[2].value}:{parts[4].value} {parts[6].value}
    </span>
  );
}
