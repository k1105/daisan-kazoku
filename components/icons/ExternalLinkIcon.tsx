import { SVGProps } from "react";

export const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <>
      <svg
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="9.5" cy="9.5" r="9.5" fill="#39B69E" />
        <path d="M5 6H13V14" stroke="white" />
        <path d="M13 6L5 14" stroke="white" />
      </svg>
    </>
  );
};
