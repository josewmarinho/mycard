import { Container } from './styles';
import { ImWhatsapp } from 'react-icons/im';


export function Whatsapp() {
   return (
      <Container>
         <a href="teste">
               <ImWhatsapp />
            <div>
               <h1>WhatsApp</h1>
               <p>Escritorio</p>
            </div>
         </a>
      </Container>
   );
}