import { useRouter } from "next/router";
import { FC } from "react";

const Destiny: FC = () => {
  const router = useRouter();
  const { did } = router.query;
  return <div>{did}</div>;
};

export default Destiny;
