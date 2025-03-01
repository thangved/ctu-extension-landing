import React from 'react';
import useInstallExtension from '../../../hooks/useInstallExtension';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';

/**
 * Hero buttons
 * @returns {import("react").ReactElement} Hero buttons
 */
export default function HeroButtons() {
  const { isSupported, icon, installUrl } = useInstallExtension();
  return (
    <div
      className="reveal-from-bottom"
      data-reveal-delay="600"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 30,
        alignItems: 'center',
      }}
    >
      <ButtonGroup>
        {isSupported && (
          <Button
            tag="a"
            color="primary"
            wideMobile
            href={installUrl}
            target="_blank"
            icon={React.createElement(icon)}
          >
            Cài đặt
          </Button>
        )}
        <Button
          tag="a"
          color="dark"
          wideMobile
          href="https://github.com/thangved/ctu-management-system-extension"
          target="_blank"
        >
          Xem trên Github
        </Button>
      </ButtonGroup>

      {!isSupported && (
        <p style={{ fontStyle: 'italic', fontSize: 14, maxWidth: 400, textAlign: 'center' }}>
          Trình duyệt của bạn hiện không được hỗ trợ. Vui lòng cài đặt trình duyệt Google Chrome
          hoặc Microsoft Edge
        </p>
      )}
    </div>
  );
}
