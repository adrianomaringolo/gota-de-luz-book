import emailjs from '@emailjs/browser'
import { InscricaoData } from 'interfaces/visits'
import { formatDateUTC } from 'utils/format'

const EMAIL_SERVICE_ID = 'service_nbvmzkk'
const EMAIL_TEMPLATE_ID = 'gota-de-cura-email'
const EMAIL_PUBLIC_KEY = 'nkdbOud2NdTKI7vBK'

const sendNewOrderEmail = async (
  orderNumber: number,
  clientName: string,
  mailList: string[],
): Promise<void> => {
  emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    {
      title: `🟣 Novo pedido no site: #${orderNumber}`,
      html_message: `<p style="font-size: 20px">Novo pedido (#${orderNumber}) feito no Gota de Cura de&nbsp;<strong>${clientName}</strong>.</p>
      <hr>
      <p>Acesse a &aacute;rea de pedidos do Painel de Administrador do site Gota de Cura para ver os pedidos.
      <a style="color: #1155cc; font-size: small;" href="https://gotadecura.com.br/admin/pedidos" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?q=https://gotadecura.com.br/admin/pedidos&amp;source=gmail&amp;ust=1656279865216000&amp;usg=AOvVaw3lxiqiYazuRuntDO6vGblT">https://gotadecura.com.br/<wbr>admin/pedidos</a></p>`,
      mail_list: mailList.join(','),
    },
    EMAIL_PUBLIC_KEY,
  )
}

const sendNewEnrollmentEmail = async (
  visitDates: string[],
  enrollmentData: InscricaoData,
  mailList: string[],
): Promise<void> => {
  emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    {
      title: `🌟 Nova inscrição para visitação`,
      html_message: `<p style="font-size: 20px;margin-bottom: 20px;font-weight: bold">🌟 Nova inscrição para visitação realizada pelo site!</p>

      <p><b>Data(s)</b>: ${visitDates.map((date) => formatDateUTC(date)).join(', ')}</p>
      <p><b>Nome</b>: ${enrollmentData.name}</p>
      <p><b>Celular</b>: ${enrollmentData.cellphone}</p>
      <p><b>Email</b>: ${enrollmentData.email}</p>
      <p><b>Acompanhantes</b>: ${enrollmentData.companions}</p>
      <p><b>Última visita</b>: ${enrollmentData.lastVisit}</p>
      
      <hr/>
      Para acessar as informações acesse <a href="https://www.gotadecura.com.br/admin/visitas">gotadecura.com.br/admin/visitas</a>`,
      mail_list: mailList.join(','),
    },
    EMAIL_PUBLIC_KEY,
  )
}

const sendEnrollmentGreetingEmail = async (
  visitorName: string,
  mailList: string[],
): Promise<void> => {
  emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    {
      title: `🪻 ${visitorName}, sua inscrição foi realizada `,
      html_message: `
      <div style="font-size: 18px">
      <p style="font-weight:bold;font-size:22px">${visitorName}, agradecemos pela sua inscrição! 🎉</p>
      <p>Ficaremos muito felizes em te receber na Chácara da Mãe Luzia e sua presença vai perfurmar ainda mais nossos canteiros!</p>
      <p style="font-weight: bold">Em breve, um de nossos voluntários vai entrar em contato com você para acertar os detalhes!</p>
      <p>Até lá, se quiser ver mais sobre a visitação, ver fotos e depoimentos de quem já foi, acesse nossa página: <a href="https://www.gotadecura.com.br/visitas">gotadecura.com.br/visitas</a> e nos acompanhe pelo <a href="https://www.instagram.com/gotadecura_artesanais/">Instagram</a>!</p>
      <p style="background-color: #fbffc0; padding: 20px; border-radius: 20px; font-size: 14px; margin-top: 50px; font-style: italic; text-align: left">
      <b>Importante:</b><br/><br/>
      ⚠️ Sua pré-reserva e dos acompanhantes está feita através do preenchimento do formulário!<br/><br/>
      ⚠️ Mas a garantia da vaga se dá após o a confirmação e o pagamento da taxa.<br/><br/>
      ⚠️ A programação se inicia pontualmente às 8h, com encerramento às 12h.<br/><br/>
      ⚠️ O deslocamento é por conta de cada um. Após fecharmos o grupo, passaremos mais detalhes e orientações.<br/><br/>
      ⚠️ O valor é de R$ 110,00 por pessoa</p>
      <p style="margin-top: 50px">Atenciosamente,<br/>Equipe Gota de Cura</p></div>`,
      mail_list: mailList.join(','),
    },
    EMAIL_PUBLIC_KEY,
  )
}

export const EmailSender = {
  sendNewOrderEmail,
  sendNewEnrollmentEmail,
  sendEnrollmentGreetingEmail,
}
