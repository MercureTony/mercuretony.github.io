import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

const AboutPage = async () => {
  const t = await getTranslations('About');

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <section>
        <h2 className="text-2xl font-bold mb-4">{t('heading')}</h2>
        <p>{t('p1')}</p>

        <p className="mt-4">
          {t('buildingBefore')}{' '}
          <a href="https://coalesc.ai/" target="_blank" rel="noopener noreferrer">Coalesc</a>{t('buildingAfter')}
        </p>

        <p className="mt-4">{t('p3')}</p>

        <p className="mt-4">{t('p4')}</p>

        <p className="mt-4">{t('p5')}</p>

        <p className="mt-4">{t('p6')}</p>

        <p className="mt-4">{t('p7')}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">{t('elsewhere')}</h3>
        <ul className="list-disc list-inside">
          {RESUME_DATA.contact.social.map((platform, index) => (
            <li key={index}>
              <a href={platform.url} className="text-neutral-400 hover:underline">{platform.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">{t('moreInfo')}</h3>
        <p>
          {t('moreInfoBefore')}{' '}
          <Link href="/resume" className="text-neutral-400 hover:underline">
            {t('resumeLink')}
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
