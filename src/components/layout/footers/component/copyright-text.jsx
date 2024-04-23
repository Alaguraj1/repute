import Link from "next/link"; 

const CopyrightText = () => {
  return (
    <p>
      Copyright © {new Date().getFullYear()} repute {' '}
      All rights reserved.
    </p>
  );
};

export default CopyrightText;
