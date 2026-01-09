import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['accessibilityStatement', 'footer'])),
    },
  };
}

export default function AccessibilityStatement() {
  const { t } = useTranslation('accessibilityStatement');

  return (
    <Container>
      <h1 className="titulo-xxl color-white pt-180 mb-50" dangerouslySetInnerHTML={{ __html: t('title') }}></h1>
      <div className='pb-180'>
        <Image src="/images/vector1-home.svg" alt="Línea decorativa" width={300} height={20} />
      </div>
      <p className="h2-privacy-policy mb-50">
        <span className="color-lima">{t('wider')}</span> {t('entity_message')}
      </p>
      {/* 
      <p className="p-nav color-white mb-50">
        {t('regulation_info')}
      </p>

      <p className="p-nav color-white mb-50" dangerouslySetInnerHTML={{ __html: t('compliance') }}></p> */}

      <h2 className="h2-privacy-policy">{t('compliance_status.title')}</h2>
      <p className="p-nav color-white">{t('compliance_status.content')}</p>

      <h2 className="h2-privacy-policy">{t('non_accessible_content.title')}</h2>
      <p className="p-nav color-white">{t('non_accessible_content.content')}</p>

      <ul className="p-nav color-white mb-50">
        <li>
          {t('non_accessible_content.non_compliance')}
          <ol>
            <li>{t('non_accessible_content.point1')}</li>
            <li>{t('non_accessible_content.point2')}</li>
          </ol>
        </li>
        <li dangerouslySetInnerHTML={{ __html: t('non_accessible_content.burden') }}>
        </li>
        <li dangerouslySetInnerHTML={{ __html: t('non_accessible_content.legislation') }}>
        </li>
      </ul>

      <h2 className="h2-privacy-policy">{t('statement_title')}</h2>
      <p className="p-nav color-white mb-50" dangerouslySetInnerHTML={{ __html: t('statement_p') }}></p>
      <p className="p-nav color-white mb-50">{t('statement_review')}</p>

      <h2 className="h2-privacy-policy">{t('contact_observations.title')}</h2>
      <p className="p-nav color-white">{t('contact_observations.description')}</p>

      <ul className="p-nav color-white">
        <li>{t('contact_observations.point1')}</li>
        <li>{t('contact_observations.point2')}</li>
        <li>{t('contact_observations.point3')}</li>
      </ul>

      <p className="p-nav color-white mb-50">
        {t('contact_observations.email_prefix')}
        <a href="mailto:accesibilidad@wider.global" className="color-white"> accesibilidad@wider.global</a>.
      </p>

      <h2 className="h2-privacy-policy">{t('enforcement_procedure.title')}</h2>
      <p className="p-nav color-white">{t('enforcement_procedure.description')}</p>

      <ul className="p-nav color-white">
        <li>{t('enforcement_procedure.point1')}</li>
        <li>{t('enforcement_procedure.point2')}</li>
      </ul>

      <p className="p-nav color-white">{t('enforcement_procedure.extra_info')}</p>

      <ul className="p-nav color-white">
        <li>
          {t('enforcement_procedure.defensor_title')}:
          <a href="http://www.defensordelpueblo.es" className="color-white"> www.defensordelpueblo.es</a>
        </li>
        <li>{t('enforcement_procedure.contact')}</li>
      </ul>

      <p
        className="p-xl color-white mb-50"
        dangerouslySetInnerHTML={{ __html: t('learn_more_with_email') }}
      ></p>
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
  );
}
