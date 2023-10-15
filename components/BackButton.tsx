"use client";

import { useRouter } from "next/navigation";

const BackButton = (): JSX.Element => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button className="btn btn-error" onClick={handleBack}>
      Back
    </button>
  );
};

export default BackButton;
