import { detect } from 'detect-browser';
import { useMemo } from 'react';
import CrIcon from '../icons/Cr';
import MsEdgeIcon from '../icons/MsEdge';

/**
 * @type {import("detect-browser").Browser[]}
 */
const supportedBrowsers = new Set(['chrome', 'edge-chromium']);

const installUrls = {
  'edge-chromium': '//microsoftedge.microsoft.com/addons/detail/fcgfnlmeeejopomgffffhjklcdfdcmlh',
  chrome:
    '//chrome.google.com/webstore/detail/ctu-management-system-ext/lggkifjaacghbpebpcbaneimpogjbnmf',
};

const installIcons = {
  'edge-chromium': MsEdgeIcon,
  chrome: CrIcon,
};

/**
 * @typedef {object} UseInstallExtension
 * @property {boolean} isSupported - whether the current browser is supported
 * @property {import("detect-browser").Browser} browser - the current browser
 * @property {string | null} installUrl - the install url
 * @property {import("react").Component | null} icon - the install icon
 */

/**
 * @returns {UseInstallExtension} - the install extension hook
 */
export default function useInstallExtension() {
  const browser = useMemo(() => detect(), []);
  const isSupported = useMemo(() => supportedBrowsers.has(browser.name), [browser.name]);
  return {
    isSupported,
    browser,
    installUrl: isSupported ? installUrls[browser.name] : null,
    icon: isSupported ? installIcons[browser.name] : null,
  };
}
