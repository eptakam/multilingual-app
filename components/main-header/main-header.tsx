import Link from "next/link";
import NavLink from "./nav-link";
import classes from "../../styles/main-header.module.css";
import LocaleSelect from "./locale-select";
import { getI18n } from "@/locales/server";

export default async function MainHeader() {
  const t = await getI18n();
  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className={classes.inlineList}>
                <li>
                  <Link href="/">Translation App</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className={classes.navbarRight}>
                <li>
                  <NavLink href="/">{t("frontend.menu.index")}</NavLink>
                </li>
                <li>
                  <NavLink href="/ui/about">{t("frontend.menu.about")}</NavLink>
                </li>
                <li>
                  <NavLink href="/ui/services">
                    {t("frontend.menu.services")}
                  </NavLink>
                </li>
                <li>
                  <LocaleSelect />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
