import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['privacyPolicy'])),
    },
  };
}


export default function PrivacyPolicy() {
  const { t } = useTranslation('privacyPolicy');
  return (
    <Container>
      <h1 className="titulo-xxl color-white pt-180 " dangerouslySetInnerHTML={{ __html: t('title') }}></h1>
      <div className='pb-180'>
        <Image src="/images/vector1-home.svg" alt="Línea decorativa" width={300} height={20} />
      </div>
      <p className='update-privacy-policy mb-50'>{t('updated')}</p>
      <p className='p-nav color-white mb-50'>{t('widerP')}</p>
      <h2 className='h2-privacy-policy '>{t('subtitle1')}</h2>
      <p className='p-nav color-white'>{t('definitionsP')}</p>

      <ul className="definition-list mb-50">
        <li className="p-nav color-white">{t('definitions.cookie')}</li>
        <li className="p-nav color-white">{t('definitions.company')}</li>
        <li className="p-nav color-white">{t('definitions.platform')}</li>
        <li className="p-nav color-white">{t('definitions.country')}</li>
        <li className="p-nav color-white">{t('definitions.client')}</li>
        <li className="p-nav color-white">{t('definitions.device')}</li>
        <li className="p-nav color-white">{t('definitions.ip_address')}</li>
        <li className="p-nav color-white">{t('definitions.personal')}</li>
        <li className="p-nav color-white">{t('definitions.personal_data')}</li>
        <li className="p-nav color-white">{t('definitions.service')}</li>
        <li className="p-nav color-white">{t('definitions.third_parties')}</li>
        <li className="p-nav color-white" dangerouslySetInnerHTML={{ __html: t('definitions.website') }}></li>
        <li className="p-nav color-white">{t('definitions.you')}</li>
      </ul>
      <h2 className='h2-privacy-policy '>{t('infoTitle')}</h2>
      <p className='p-nav color-white mb-50'>{t('infoP')}</p>
      <h2 className='h2-privacy-policy '>{t('useInfoTitle')}</h2>
      <p className="p-nav color-white">
        {t('data_use.intro')}
      </p>

      <ul className="definition-list mb-50">
        <li className="p-nav color-white">{t('data_use.personalize_experience')}</li>
        <li className="p-nav color-white">{t('data_use.improve_platform')}</li>
        <li className="p-nav color-white">{t('data_use.improve_customer_service')}</li>
        <li className="p-nav color-white">{t('data_use.administer_promotions')}</li>
        <li className="p-nav color-white">{t('data_use.send_emails')}</li>
      </ul>

      <h2 className="h2-privacy-policy">{t('when_use_third_party_info.title')}</h2>
      <p className="p-nav color-white mb-50">{t('when_use_third_party_info.content')}</p>

      <h2 className="h2-privacy-policy">{t('share_third_party_info.title')}</h2>
      <p className="p-nav color-white mb-50">{t('share_third_party_info.content')}</p>

      <h2 className="h2-privacy-policy">{t('where_when_collect_info.title')}</h2>
      <p className="p-nav color-white mb-50">{t('where_when_collect_info.content')}</p>

      <h2 className="h2-privacy-policy">{t('transfer_info_other_countries.title')}</h2>
      <p className="p-nav color-white mb-50">{t('transfer_info_other_countries.content')}</p>

      <h2 className="h2-privacy-policy">{t('is_info_secure.title')}</h2>
      <p className="p-nav color-white mb-50">{t('is_info_secure.content')}</p>

      <h2 className="h2-privacy-policy">{t('personal.title')}</h2>
      <p className="p-nav color-white">{t('personal.content1')}</p>

      <p className="p-nav color-white">{t('personal.content2')}</p>

      <ol className="p-nav color-white">
        <li>{t('personal.list1')}</li>
        <li>{t('personal.list2')}</li>
        <li>{t('personal.list3')}</li>
      </ol>

      <p className="p-nav color-white mb-50">{t('personal.content3')}</p>

      <h2 className="h2-privacy-policy">{t('business_sale.title')}</h2>
      <p className="p-nav color-white mb-50">{t('business_sale.content')}</p>

      <h2 className="h2-privacy-policy">{t('affiliates.title')}</h2>
      <p className="p-nav color-white mb-50">{t('affiliates.content')}</p>

      <h2 className="h2-privacy-policy">{t('retain_info.title')}</h2>
      <p className="p-nav color-white mb-50">{t('retain_info.content')}</p>

      <h2 className="h2-privacy-policy">{t('protect_info.title')}</h2>
      <p className="p-nav color-white mb-50">{t('protect_info.content')}</p>

      <h2 className="h2-privacy-policy">{t('governing_law.title')}</h2>
      <p className="p-nav color-white mb-50">{t('governing_law.content')}</p>

      <h2 className="h2-privacy-policy">{t('your_consent.title')}</h2>
      <p className="p-nav color-white mb-50">{t('your_consent.content')}</p>

      <h2 className="h2-privacy-policy">{t('links_to_other_sites.title')}</h2>
      <p className="p-nav color-white mb-50">{t('links_to_other_sites.content')}</p>

      <h2 className="h2-privacy-policy">{t('cookies.title')}</h2>
      <p className="p-nav color-white mb-50">{t('cookies.content')}</p>

      <h2 className="h2-privacy-policy">{t('remarketing.title')}</h2>
      <p className="p-nav color-white mb-50">{t('remarketing.content')}</p>

      <h2 className="h2-privacy-policy">{t('changes_to_policy.title')}</h2>
      <p className="p-nav color-white mb-50">{t('changes_to_policy.content')}</p>

      <h2 className="h2-privacy-policy">{t('third_party_services.title')}</h2>
      <p className="p-nav color-white mb-50">{t('third_party_services.content')}</p>

      <h2 className="h2-privacy-policy">{t('gdpr_info.title')}</h2>
      <p className="p-nav color-white mb-50">{t('gdpr_info.content')}</p>

      <h3 className="h3-privacy-policy">{t('gdpr.what_is_gdpr.title')}</h3>
      <p className="p-nav color-white mb-50">{t('gdpr.what_is_gdpr.content')}</p>

      <h3 className="h3-privacy-policy">{t('gdpr.what_is_personal_data.title')}</h3>
      <p className="p-nav color-white">{t('gdpr.what_is_personal_data.content')}</p>

      <p className="p-nav color-white">{t('gdpr.data_protection_principles.title')}</p>
      <ul className="p-nav color-white mb-50">
        <li>{t('gdpr.data_protection_principles.principle_1')}</li>
        <li>{t('gdpr.data_protection_principles.principle_2')}</li>
        <li>{t('gdpr.data_protection_principles.principle_3')}</li>
        <li>{t('gdpr.data_protection_principles.principle_4')}</li>
      </ul>

      <h3 className="h3-privacy-policy">{t('gdpr.why_is_gdpr_important.title')}</h3>
      <p className="p-nav color-white">{t('gdpr.why_is_gdpr_important.content')}</p>

      <p className="p-nav color-white">
        <strong>{t('gdpr.individual_rights.title')}</strong>
      </p>
      <p className="p-nav color-white mb-50">{t('gdpr.individual_rights.content')}</p>

      <h2 className="h2-privacy-policy">{t('california_residents.title')}</h2>
      <p className="p-nav color-white">{t('california_residents.intro')}</p>

      <ul className="p-nav color-white">
        <li>{t('california_residents.right_to_know')}</li>
        <li>{t('california_residents.right_to_equal_service')}</li>
        <li>{t('california_residents.right_to_delete')}</li>
        <li>{t('california_residents.right_to_opt_out')}</li>
      </ul>

      <p className="p-nav color-white">{t('california_residents.request_info')}</p>
      <p className="p-nav color-white mb-50">{t('california_residents.no_selling_info')}</p>

      <h2 className="h2-privacy-policy">{t('caloppa.title')}</h2>
      <p className="p-nav color-white">{t('caloppa.intro')}</p>

      <p className="p-nav color-white">{t('caloppa.rights_intro')}</p>

      <ul className="p-nav color-white">
        <li>{t('caloppa.right_to_know')}</li>
        <li>{t('caloppa.right_to_equal_service')}</li>
        <li>{t('caloppa.right_to_delete')}</li>
        <li>{t('caloppa.right_to_opt_out')}</li>
      </ul>

      <p className="p-nav color-white">{t('caloppa.request_info')}</p>
      <p className="p-nav color-white mb-50">{t('caloppa.no_selling_info')}</p>

      <p className="p-xl color-white mb-0 text-center mb-50">
        {t('contact_us.text')}
        <span className="color-lima"> info@wider.global </span>
        {t('contact_us.suffix')}
      </p>
      <div className="full-width-container">
        <Image
          src="/images/pink-drawing.svg"
          width={1500}
          height={500}
          alt="linea decorativa"
          layout="responsive"
          className="full-width-image"
        />
      </div>
    </Container>
  )
}
