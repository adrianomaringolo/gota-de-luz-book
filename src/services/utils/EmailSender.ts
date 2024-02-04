import emailjs from '@emailjs/browser'
import { InscricaoData } from 'interfaces/visits'
import { formatDateUTC } from 'utils/format'

const sendNewOrderEmail = async (
  orderNumber: number,
  clientName: string,
  mailList: string[],
): Promise<void> => {
  emailjs.send(
    'service_e229fy4',
    'gota-de-cura',
    {
      title: `[Gota de Cura] 🟣 Novo pedido no site: #${orderNumber}`,
      html_message: `<p style="font-size: 20px">Novo pedido (#${orderNumber}) feito no Gota de Cura de&nbsp;<strong>${clientName}}</strong>.</p>
      <hr>
      <p>Acesse a &aacute;rea de pedidos do Painel de Administrador do site Gota de Cura para ver os pedidos.
      <a style="color: #1155cc; font-size: small;" href="https://gotadecura.com.br/admin/pedidos" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?q=https://gotadecura.com.br/admin/pedidos&amp;source=gmail&amp;ust=1656279865216000&amp;usg=AOvVaw3lxiqiYazuRuntDO6vGblT">https://gotadecura.com.br/<wbr>admin/pedidos</a></p>`,
      mail_list: mailList.join(','),
    },
    'JAGvYZKyVMK9JdME2',
  )
}

const sendNewEnrollmentEmail = async (
  visitDates: string[],
  enrollmentData: InscricaoData,
  mailList: string[],
): Promise<void> => {
  emailjs.send(
    'service_e229fy4',
    'gota-de-cura',
    {
      title: `[Gota de Cura] 🌟 Nova inscrição para visitação`,
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
    'JAGvYZKyVMK9JdME2',
  )
}

export const EmailSender = {
  sendNewOrderEmail,
  sendNewEnrollmentEmail,
}
