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

const sendVisitThankEmail = async (
  visitorName: string,
  visitorEmail: string,
  coupons: string,
  bccList: string,
): Promise<void> => {
  emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    {
      title: `${visitorName}, agradecemos a sua visita 💖`,
      html_message: `
      <div style="max-width: 500px; margin: 0 auto">
        <div style="color: #333; font-size: 15px">
          <p style="font-size: 18px"><b>${visitorName}</b>,</p>
          <p>
            Sua presença na visita à Chácara da Mãe Luzia deixou o nosso dia mais feliz. Ter a
            sua companhia explorando conosco os encantos e os aromas do nosso santuário de
            plantas aromáticas foi um grande prazer!
          </p>
          <p>
            Cada grupo que recebemos enche nossos corações de calor e inspiração, reafirmando o
            propósito que nos motiva a cada dia.
          </p>
          <p>
            Na Chácara da Mãe Luzia, não cultivamos apenas plantas, cultivamos sonhos, cuidado e
            respeito pela Mãe Natureza. Cada broto que nasce na chácara é um testemunho da
            presença de Deus em nossas vidas e do nosso compromisso com a responsabilidade
            social, a sustentabilidade e a qualidade dos nossos produtos.
          </p>
          <p>
            Nossa jornada na busca pela excelência em produtos de aromaterapia tem como alicerce
            os valores: qualidade, inovação e transparência em nossos processos. Valores que
            você pode conferir nessa visita tão especial.
          </p>
          <p>
            Cada produto adquirido se transforma na fatia de pão para nossos irmãos em
            necessidade!
          </p>
          <p>
            Esperamos que sua visita tenha sido enriquecedora e que tenha sentido em cada brisa
            que sopra entre as plantações o carinho com que cuidamos desse espaço, uma
            verdadeira farmácia a céu aberto.
          </p>
          <p>
            Lembre-se sempre do nosso convite para retornar e continuar compartilhando conosco essa
            jornada de descobertas e conexões com a natureza.
          </p>
          <p>
            Mais uma vez, agradecemos pela sua visita e por ser parte essencial do nosso
            universo aromático.
          </p>
          <p>
            Com os mais sinceros agradecimentos,<br />
            Equipe Gota de Cura
          </p>
        </div>
        <div
          style="background-color: #eee;border-radius: 10px;padding: 10px;color: #888;margin-bottom: 25px;font-size: 14px;">
          <p style="font-size: 18px">Veja mais:</p>
          <p>
            📷 Veja as fotos da visita:
            <a href="https://photos.app.goo.gl/iVZfrGvDUPk85sLi6" target="_blank">Visita Chácara Mãe Luzia - 17.08.24</a>
          </p>
          <p>
            💬 Deixe um depoimento sobre sua experiência:
            <a href="https://forms.gle/oJxGeuXHJWgv37tW6" target="_blank">Clique aqui</a>
          </p>
        </div>
        <div style="background-color: #eee;border-radius: 10px;padding: 10px;color: #888;font-size: 14px;">
          <img
            style="width: 100px"
            src="https://firebasestorage.googleapis.com/v0/b/gota-de-luz.appspot.com/o/assets%2Fgift-icon.png?alt=media&token=e1d9ba97-5ea1-441c-a7df-2a236cd92e4c"
          />
          <p>
            Como agradecimento, deixaremos mais um presente para você:
            <b>UM CUPOM DE DESCONTO DE 10%</b> para a sua próxima compra em nosso site.
          </p>
          ${coupons
            .split(',')
            .map(
              (coupon) =>
                '<p style="font-weight: bold; background-color: #fff; padding: 10px 20px">' +
                coupon +
                '</p>',
            )
            .join('')}
          <ul style="font-size: 12px; text-align: left; padding-left: 15px">
            <li>O cupom deve ser utilizado ao longo do mês de setembro.</li>
            <li>O cupom não é cumulativo, apenas um cupom pode ser utilizado por compra.</li>
            <li>
              Ao finalizar sua compra no site, inclua o código acima no campo "Cupom de
              desconto".
            </li>
            <li>O cupom pode ser usado apenas uma vez.</li>
            <li>
              Em caso de dúvidas, entre em contato com a gente pelo WhatsApp ou Instagram.
            </li>
          </ul>
        </div>
      </div>`,
      mail_list: visitorEmail,
      bcc_mail_list: bccList,
    },
    EMAIL_PUBLIC_KEY,
  )
}

export const EmailSender = {
  sendNewOrderEmail,
  sendNewEnrollmentEmail,
  sendEnrollmentGreetingEmail,
  sendVisitThankEmail,
}
