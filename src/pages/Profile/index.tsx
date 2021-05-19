import { Container, Header, AvatarInput, Content } from './styles';

import { Whatsapp } from '../../components/Whatsapp';

import { MdBugReport } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { FiCamera } from "react-icons/fi";

import AvatarImg from '../../assets/magao.png'


export function Profile() {
   return (
      <Container>
         <Header>
            <button type="button">
               <MdBugReport />
            </button>
            <AvatarInput>
               <img src={AvatarImg} alt="magao" />
               <label htmlFor="avatar">
                  <FiCamera />

                  <input type="file" id="avatar" />
               </label>
            </AvatarInput>
            <button type="button">
               <MdSettings />
            </button>
         </Header>
         <Content>
            <h1>Bruno Normando</h1>
            <p>Gestor de Tráfego</p>
            <Whatsapp/>

         </Content>
      </Container>
   )
}