"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { VdsButton, VdsPanel } from "@/app/components";

export default function Header() {
  const [panel, setPanel] = useState(false);
  const [panelBtn, setPanelBtn] = useState(true);
  return (
    <header>
      <div className="container">
        {panel && <VdsPanel setPanel={setPanel} setPanelBtn={setPanelBtn} />}

        <div className={styles.header__inner}>
          <a href="/">
            <Image src="/logo.svg" className='dsv-image' alt="logo" width={310} height={66} />
          </a>

          <div className="flex">
            <Image src="/icons/pin-icon.svg" className='dsv-image' alt="logo" width={22} height={22} />
            <p>Пр-т 100-летия Владивостока, 84а</p>
          </div>

            <a href="tel:+79243388189" className="flex">
              <Image src="/icons/phone.svg" className='dsv-image' alt="logo" width={22} height={22} />
              <span>+7 (924) 338-81-89</span>
            </a>

            <button className={styles.header__button}>Записаться на прием</button>

            <div className={styles.header_social}>
              <button className={styles.item__button} title="Личный кабинет">
                <Image src="/icons/account-icon.svg" className='dsv-image' alt="logo" width={22} height={22} />
              </button>
              {panelBtn && <VdsButton setPanel={setPanel} setPanelBtn={setPanelBtn} />}
              <button className={styles.item__button} title="Поиск">
                <Image src="/icons/search-icon.svg" className='dsv-image' alt="logo" width={22} height={22} />
              </button>
            </div>
        </div>

      </div>
    </header>
  );
}
