import React, { useState } from "react";
import "../style/header.css";
import { BsChevronDown, BsFillBagDashFill, BsPiggyBank } from "react-icons/bs";
import { BiSearch, BiMoney } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { LiaChartBarSolid, LiaLightbulbSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import Img1 from "../assets/nav-1.jpeg";
import Img2 from "../assets/nav-2.jpeg";
import Img3 from "../assets/nav-3.jpeg";
import Img4 from "../assets/nav-4.jpeg";
import Img5 from "../assets/nav-5.jpeg";
import Img6 from "../assets/nav-6.jpeg";
import Img7 from "../assets/nav-7.jpeg";
import Logo from "../assets/logo.png";

const Header = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };
 


  const renderContent = () => {
    if (selectedButton === 1) {
      
      return (
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Cuenta Digital</div>
            <div className="desc_item">Cuenta Premio</div>
            <div className="desc_item">Cuenta Limitada</div>
            <div className="desc_item">Cuenta Sueldo</div>
          </div>
          <div className="content_2_img">
            <img src={Img1} alt="" />
          </div>
        </div>
      );
      
    } else if (selectedButton === 2) {
      
      return (
        
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Tarjetas de Credito</div>
            <div className="desc_item">Tarjetas de Debito</div>
            <div className="desc_item">Cuotas sin Intereses</div>
            <div className="desc_item">Bloquea tu Tarjeta</div>
          </div>
          <div className="content_2_img">
            <img src={Img2} alt="" />
          </div>
        </div>
      );
    } else if (selectedButton === 3) {
      
      return (
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Prestamo Personal</div>
            <div className="desc_item">Credito por Convenio</div>
            <div className="desc_item">Credito Hipotecario</div>
            <div className="desc_item">Credito Vehicular</div>
            <div className="desc_item">Adelanto de Sueldo</div>
            <div className="desc_item">Yapes Creditos</div>
            <div className="desc_item">Cuotealo sin Tarjeta</div>
          </div>
          <div className="content_2_img">
            <img src={Img3} alt="" />
          </div>
        </div>
      );
    } else if (selectedButton === 4) {
      
      return (
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Proteccion de Tarjeta Plus</div>
            <div className="desc_item">Cuenta Premio</div>
            <div className="desc_item">Cuenta Limitada</div>
            <div className="desc_item">Cuenta Sueldo</div>
          </div>
          <div className="content_2_img">
            <img src={Img4} alt="" />
          </div>
        </div>
      );
    } else if (selectedButton === 5) {
      
      return (
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Cuenta Digital</div>
            <div className="desc_item">Cuenta Premio</div>
            <div className="desc_item">Cuenta Limitada</div>
            <div className="desc_item">Cuenta Sueldo</div>
          </div>
          <div className="content_2_img">
            <img src={Img5} alt="" />
          </div>
        </div>
      );
    } else if (selectedButton === 6) {
      
      return (
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Cuenta Digital</div>
            <div className="desc_item">Cuenta Premio</div>
            <div className="desc_item">Cuenta Limitada</div>
            <div className="desc_item">Cuenta Sueldo</div>
          </div>
          <div className="content_2_img">
            <img src={Img6} alt="" />
          </div>
        </div>
      );
    } else if (selectedButton === 7) {
      
      return (
        <div className="sub_item_content_2">
          <div className="content_2_desc">
            <div className="desc_item">Cuenta Digital</div>
            <div className="desc_item">Cuenta Premio</div>
            <div className="desc_item">Cuenta Limitada</div>
            <div className="desc_item">Cuenta Sueldo</div>
          </div>
          <div className="content_2_img">
            <img src={Img7} alt="" />
          </div>
        </div>
      );
    }
  };

  const handleMouseEnter = (index) => {
    const items = document.querySelectorAll(".item_head");
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.remove("item_head_effect");
      } else {
        item.classList.add("item_head_effect");
      }
    });
  };


  const handleMouseLeave = () => {
    const items = document.querySelectorAll(".item_head");
    items.forEach((item) => {
      item.classList.remove("item_head_effect");
    });
  };

  return (
    <div className="content_head container-xxl">
      <div className="img_head">
        <img src={Logo} alt="" />
      </div>

      <ul>
        <div
          className="content_item_head"
          onMouseEnter={() => {
            setVisibleModal(true);
          }}
          onClick={() => {
            setVisibleModal(false);
          }}
        >
          <li
            className="item_head"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            Productos
            <BsChevronDown className="icon_head" />
            <div className={`sub_li ${visibleModal ? "visible" : ""}`}>
              <div className="sub_item_content_1">
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(1)}
              
                >
                  <BsPiggyBank className="sub_icon" /> Cuentas
                </div>
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(2)}
             
                >
                  <AiOutlineCreditCard className="sub_icon" /> Tarjetas
                </div>
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(3)}
             
                >
                  <BiMoney className="sub_icon" /> Prestamos
                </div>
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(4)}
             
                >
                  <HiOutlineShieldCheck className="sub_icon" /> Seguros
                </div>
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(5)}
             
                >
                  <LiaChartBarSolid className="sub_icon" /> Inversiones
                </div>
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(6)}
             
                >
                  <PiArrowsCounterClockwiseBold className="sub_icon" /> Tipo de
                  cambio
                </div>
                <div
                  className="sub_item"
                  onMouseEnter={() => handleButtonClick(7)}
             
                >
                  <LiaLightbulbSolid className="sub_icon" /> Servicios
                </div>
              </div>
              {renderContent()}
            </div>
          </li>
        </div>
      
        <div className="content_item_head">
          <li
            className="item_head"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            Soluciones Digitales <BsChevronDown className="icon_head" />
          </li>
        </div>

        <div className="content_item_head">
          <li
            className="item_head"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            Beneficios <BsChevronDown className="icon_head" />
          </li>
        </div>
        <div className="content_item_head">
          <li
            className="item_head"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Ayuda y Educacion <BsChevronDown className="icon_head" />
          </li>
        </div>
      </ul>
      <div className="search_head">
        <button>
          <BiSearch className="icon_search" /> Buscar
        </button>
      </div>

      <div className="sub_content_buttons">
        <div>
          <button className="main_button btn_2">
            <TbMoneybag /> Abre tu cuenta
          </button>
        </div>
        <div>
          <button className="main_button ">
            <BsFillBagDashFill /> Banca por Internet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
