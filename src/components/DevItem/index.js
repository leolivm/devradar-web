import React from "react";
import "./styles.css";

export default function DevItem({ item }) {
  return (
    <li className="dev-item" key={item._id}>
      <header>
        <img src={item.avatar_url} alt={item.name} />
        <div className="user-info">
          <strong>{item.name}</strong>
          <span>{item.techs.join(", ")}</span>
        </div>
      </header>
      <p>{item.bio}</p>
      <a href={`https://github.com/${item.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}
