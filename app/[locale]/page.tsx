import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  return (
    <div>
      <br />
      <br />
      <h1>{t("common.hello")}</h1>
      <h2>{t("common.title")}</h2>
      <p>{t("common.description")}</p>
    </div>
  );
}
