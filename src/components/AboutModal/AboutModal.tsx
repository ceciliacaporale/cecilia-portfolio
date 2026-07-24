import React, { useEffect } from 'react';
import Dots from '../Dots/Dots';
import Ceci from '../../assets/3d.png?url';
import { Backdrop, Window, Header, CloseButton, Body, Avatar, Name, SpecsList } from './AboutModal.styles';

export interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SPECS: [string, string][] = [
  ['Role', 'Front-end Developer'],
  ['Chip', 'React · TypeScript'],
  ['Running since', 'early 2022'],
  ['Location', 'Minas Gerais, Brazil'],
  ['Favorites', 'Coffee & Matcha'],
];

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <Backdrop $open={isOpen} onClick={onClose} aria-hidden={!isOpen}>
      <Window
        $open={isOpen}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="About this Mac"
      >
        <Header>
          <Dots size="sm" />
          <CloseButton type="button" onClick={onClose} aria-label="Fechar">
            ✕
          </CloseButton>
        </Header>

        <Body>
          <Avatar src={Ceci} alt="Maria Cecília" />
          <Name>Maria Cecília</Name>

          <SpecsList>
            {SPECS.map(([label, value]) => (
              <React.Fragment key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </React.Fragment>
            ))}
          </SpecsList>
        </Body>
      </Window>
    </Backdrop>
  );
};

export default AboutModal;
