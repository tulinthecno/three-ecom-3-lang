import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/home";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const HomePage = () => {

  const router = useRouter();

  const { t } = useTranslation();

  const { locales, locale: activeLocale } = router;
  console.log('locales-->',activeLocale)


  return (
    <>

    {activeLocale === 'default' ? 'products  default' : activeLocale === 'en' ? 'products english en' :'products arabic'}
    {/* {t("home.Home title")} */}
      <Seo pageTitle="Home-1" />
      <HomeMain />
    </>
  );
};


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


export default HomePage


// export default dynamic(() => Promise.resolve(index), { ssr: false });
