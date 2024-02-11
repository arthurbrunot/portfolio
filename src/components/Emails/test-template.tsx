import * as React from 'react';
import {ContactFormData} from "@/app/api/send/route";

export const EmailTemplate: React.FC<ContactFormData> = (props) => {
  const dataList = Object.entries(props);
  return (
    <div>
      <h1>Bonjour Arthur</h1>
      <p>Vous avez reçu un nouveau message depuis votre site !</p>
      <ul>
        {dataList.map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
