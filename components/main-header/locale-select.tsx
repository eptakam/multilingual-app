"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
// import { useEffect, useRef, useState } from "react";
import styles from "../../styles/locale-select.module.css";

export default function LocaleSelect() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  // const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "en" | "fr" | "wo")}
      className={styles.select}
    >
      <option value="en" className={styles.option}>
        EN
      </option>
      <option value="fr" className={styles.option}>
        FR
      </option>
      <option value="wo" className={styles.option}>
        WO
      </option>
    </select>
  );

  // const [options, setOptions] = useState([
  //   { value: "en", label: "EN" },
  //   { value: "fr", label: "FR" },
  //   { value: "wo", label: "WO" },
  // ]);
  // const hasRendered = useRef(false);

  // useEffect(() => {
  //   if (hasRendered.current) {
  //     console.log("useEffect triggered with locale:", locale);
  //     setOptions((prevOptions) =>
  //       prevOptions.map((option) =>
  //         option.value === locale
  //           ? { ...option, label: `✔ ${option.value.toUpperCase()}` }
  //           : { ...option, label: option.value.toUpperCase().replace("✔ ", "") }
  //       )
  //     );
  //   } else {
  //     hasRendered.current = true;
  //   }
  // }, [locale]);

  // return (
  //   <select
  //     ref={selectRef}
  //     value={locale}
  //     onChange={(e) => changeLocale(e.target.value as "en" | "fr" | "wo")}
  //     className={styles.select}
  //   >
  //     {options.map((option) => (
  //       <option
  //         key={option.value}
  //         value={option.value}
  //         className={styles.option}
  //       >
  //         {option.label}
  //       </option>
  //     ))}
  //   </select>
  // );

  // useEffect(() => {
  //   console.log("useEffect triggered with locale:", locale);
  //   const selectElement = selectRef.current;
  //   if (selectElement) {
  //     Array.from(selectElement.options).forEach((option) => {
  //       if (option.value === locale) {
  //         if (option.textContent) {
  //           console.log("Setting checkmark for:", option.value);
  //           option.textContent = `✔ ${option.textContent.trim()}`;
  //         }
  //       } else {
  //         if (option.textContent) {
  //           console.log("Removing checkmark for:", option.value);
  //           option.textContent = option.textContent.replace("✔ ", "");
  //         }
  //       }
  //     });
  //   }
  // }, [locale]);

  // return (
  //   <select
  //     ref={selectRef}
  //     value={locale}
  //     onChange={(e) => changeLocale(e.target.value as "en" | "fr" | "wo")}
  //     className={styles.select}
  //   >
  //     <option value="en" className={styles.option}>
  //       EN
  //     </option>
  //     <option value="fr" className={styles.option}>
  //       FR
  //     </option>
  //     <option value="wo" className={styles.option}>
  //       WO
  //     </option>
  //   </select>
  // );
}
