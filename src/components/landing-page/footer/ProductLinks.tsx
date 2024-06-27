import React from "react";

const LinksData = [
  {
    name: "example",
    url: "/",
  },
];

export default function ProductLinks() {
  return (
    <ul className="mt-6 space-y-4 text-sm">
      {LinksData.map((link, index) => (
        <li key={index}>
          <a href={link.url} className="opacity-90 transition hover:opacity-75">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
