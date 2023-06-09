import { Trans, useTranslation } from 'react-i18next';

import AnimatedText from '@/UI/components/animatedText/AnimatedText';
import Button from '@/UI/components/buttons/button/Button';
import Hologram from '@/UI/components/hologram/Hologram';
import GeneralLink from '@/UI/components/links/generalLink/GeneralLink';
import TextTyping from '@/UI/components/textTyping/TextTyping';
import WaterMark from '@/UI/components/waterMark/WaterMark';

import './Home.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <div className="description">
        <WaterMark text="hello" />
        <AnimatedText>{t('my-description.introduce')}</AnimatedText>
        <TextTyping />
        <AnimatedText>
          <Trans
            i18nKey="my-description.source"
            components={{
              CodeLink: (
                <GeneralLink navigateTo="https://github.com/EmirDelicR/curriculum-v2" />
              )
            }}
          />
        </AnimatedText>
        <AnimatedText>
          <Trans
            i18nKey="my-description.mail"
            components={{
              MailLink: (
                <GeneralLink navigateTo="mailto:emirdelictbf@gmail.com?subject=Web-site mail" />
              )
            }}
          />
        </AnimatedText>
        <Button isDownloadButton={true} />
      </div>
      <Hologram />
    </div>
  );
}
