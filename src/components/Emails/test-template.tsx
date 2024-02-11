import * as React from 'react';
import {ContactFormData} from "@/app/api/send/route";

export const EmailTemplate: React.FC<ContactFormData> = (props) => (
  <div>
    <h1>Welcome, {props?.name}</h1>
  </div>
);
