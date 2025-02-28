import { detect } from 'detect-browser';
import { useMemo } from 'react';
import CrIcon from '../../../icons/Cr';
import MsEdgeIcon from '../../../icons/MsEdge';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';

/**
 * @type {import("detect-browser").Browser[]}
 */
const supportedBrowsers = new Set(['chrome', 'edge-chromium']);

/**
 * Hero buttons
 * @returns {import("react").ReactElement} Hero buttons
 */
export default function HeroButtons() {
  const browser = useMemo(() => detect(), []);
  const isSupported = useMemo(() => supportedBrowsers.has(browser.name), [browser.name]);
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
        {browser.name === 'edge-chromium' && (
          <Button
            tag="a"
            color="primary"
            wideMobile
            href="//microsoftedge.microsoft.com/addons/detail/fcgfnlmeeejopomgffffhjklcdfdcmlh"
            target="_blank"
            icon={<MsEdgeIcon />}
          >
            Cài đặt
          </Button>
        )}
        {browser.name === 'chrome' && (
          <Button
            tag="a"
            color="primary"
            wideMobile
            href="//chrome.google.com/webstore/detail/ctu-management-system-ext/lggkifjaacghbpebpcbaneimpogjbnmf"
            target="_blank"
            icon={<CrIcon />}
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
