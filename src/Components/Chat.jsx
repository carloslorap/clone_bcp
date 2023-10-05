import React, { useState } from "react";
import "../style/chat.css";
import { BiSolidChat } from "react-icons/bi";
import { BsXLg, BsChevronRight, BsChevronDown } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { VscSend} from "react-icons/vsc";
import { PiMonitorBold } from "react-icons/pi";
import Imgchat1 from "../assets/img-chat-1.svg";
import Imgchat2 from "../assets/img-chat-2.svg";
import Imgchat3 from "../assets/img-chat-3.svg";
import UserForm from "../assets/user-form.png";
const Chat = () => {
  const [isCheck, setIsCheck] = useState(true);
  const [isChatForm, setIsChatForm] = useState(false);
  const [isChatBot, setIsChatBot] = useState(false);
  const toggleIcon = () => {
    setIsCheck(!isCheck);
  };
  const OpenForm = () => {
    setIsChatForm(true);
    setIsCheck(true);
  };
  const OpenBot = () => {
    setIsChatForm(false);
    setIsChatBot(true);
    
  };
  
  return (
    <>
      <div className="main_contactanos">
        <div className="bcp_contactanos" onClick={toggleIcon}>
          {isCheck ? (
            <BiSolidChat className="icon_chat" />
          ) : (
            <>
              <div>
                <BsXLg className="icon_chat_2" />
              </div>
            </>
          )}
        </div>
        {isCheck ? (
          <></>
        ) : (
          <>
            <div className="content_chat">
              <div className="sub_content_chat">
                <h3>Comunícate con nosotros:</h3>
                <button className="main_button btn_chat_wht">
                  <RiWhatsappFill className="icon_chat_wht" /> Chatea por
                  WhatsApp
                </button>
                <button
                  className="main_button btn_chat_web"
                  onClick={OpenForm}
                >
                  <PiMonitorBold className="icon_chat_wht" /> Chatea por Web
                </button>

                <h5>Otras opciones:</h5>
                <div className="content_option">
                  <div className="item_option">
                    <img src={Imgchat1} alt="" />
                    <div className="desc_option">
                      <p className="parrafo">¿Califico para un Prestamo?</p>
                      <p className="sub_parrafo">Descubre en simples pasos</p>
                    </div>
                    <BsChevronRight className="icon_option" />
                  </div>
                  <div className="item_option">
                    <img src={Imgchat2} alt="" />
                    <div className="desc_option-1">
                      <p className="parrafo"> Quiero abrir una cuenta</p>
                      <p className="sub_parrafo">Al instante 100% online</p>
                    </div>
                    <BsChevronRight className="icon_option" />
                  </div>
                  <div className="item_option">
                    <img src={Imgchat3} alt="" />
                    <div className="desc_option-2">
                      <p className="parrafo">Centro de Ayuda</p>
                      <p className="sub_parrafo">
                        Preguntas frencuentes y dudas
                      </p>
                    </div>
                    <BsChevronRight className="icon_option" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={`contet_form_chat_bot ${isChatForm ? "form_none" : ""}`}>
        <div className="header_form_chat_bot">
          <div className="sub_header">
            <img src={UserForm} alt="" />
            <h5 className="text-white mb-0 py-1">BCP Chat</h5>
          </div>
          <div className="icon_form">
            <BsChevronDown
              onClick={() => {
                setIsChatForm(false);
              }}
            />
          </div>
        </div>

        <div className="body_form_chat_bot">
          <div>
            <p className="title_desc">
              Bienvenido/a al chat BCP. Por favor ingresa los siguientes datos:
            </p>
            <input placeholder="Nombre" className="input_body_form"></input>
            <input placeholder="Apellido" className="input_body_form"></input>
            <div className="d-flex gap-3 ">
              <select>
                <option>DNI</option>
                <option>Carnet Extr.</option>
                <option>Pasaporte</option>
                <option>RUC</option>
              </select>
              <input
                placeholder="Documento"
                className="input_body_form"
              ></input>
            </div>
            <input
              placeholder="Correo Electronico"
              className="input_body_form mb-0"
            ></input>
            <p className="sub_desc">
              Al suscribirte estas de acuerdo con los{" "}
              <span>Términos y Condiciones</span>
            </p>
            <p className="sub_desc mb-0">
              Este sitio está protegido por reCAPTCHA y se aplican la{" "}
              <span>Política de privacidad</span> y{" "}
              <span>Términos del servicio </span> de Google.
            </p>
            <div className="form_btns">
              <button
                className="main_button btn_item_form"
                onClick={() => {
                  setIsChatForm(false);
                }}
              >
                Cancelar
              </button>
              <button className="main_button btn_item_form" onClick={OpenBot}>Comenzar</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`chat_bot ${isChatBot ? "chat_bot_flex" : ""}`}>
     
        <div className="header_form_chat_bot">
          <div className="sub_header">
            <img src={UserForm} alt="" />
            <h5 className="text-white mb-0 py-1">BCP Chat</h5>
          </div>
          <div className="icon_form">
            <BsChevronDown
              onClick={() => {
                setIsChatBot(false);
              }}
            />
          </div>
        </div>

        <div className="main_chat_bot_user">
          <div className="body_chat_bot_user">
            <div className="chat-the-bot">
              <p className="chat_desc">
                ¡Hola! Soy Clara, tu asistente virtual del BCP y ahora también
                te puedo atender por aquí.
              </p>
            </div>
            <div className="content_user">
              <div className="chat-the-user">
                <p className="user_desc">
                  hola, necesito ayuda
                </p>
              </div>
            </div>
            <div className="chat-the-bot">
              <p className="chat_desc">
                ¡Hola! en que puedo ayudarte?
              </p>
            </div>
            <div className="content_user">
              <div className="chat-the-user">
                <p className="user_desc">
                  Por que la madre de kevin es tan puta?
                </p>
              </div>
            </div>
            <div className="chat-the-bot">
              <p className="chat_desc">
                Por que a sus 6 años su perro se la monto a ella y desde ese dia quedo cojuda
              </p>
            </div>
            <div className="content_user">
              <div className="chat-the-user">
                <p className="user_desc">
                  ohh ahora votame tu GAAAAA!!!!
                </p>
              </div>
            </div>
            <div className="chat-the-bot">
              <p className="chat_desc">
              GAAAAAAAAAAAAAAAAA!!!!
              </p>
            </div>
            
          </div>
          <div className="write_message">
            <input placeholder="Escriba su mensaje"></input>
            <VscSend className="icon_send_chat"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
