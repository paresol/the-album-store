import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MainLayout } from "@/layouts";
import Home from "./home/home";

type Props = {
  // Add custom props here
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

const App = () => {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
};

export default App;
