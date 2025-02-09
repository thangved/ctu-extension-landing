import CrIcon from "../../../icons/Cr";
import Button from "../../elements/Button";
import ButtonGroup from "../../elements/ButtonGroup";

/**
 * Hero buttons
 * @returns {import("react").ReactElement} Hero buttons
 */
export default function HeroButtons() {
  return (
    <ButtonGroup className="reveal-from-bottom" data-reveal-delay="600">
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
  );
}
