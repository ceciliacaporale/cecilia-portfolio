import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Apresentação',
  parameters: {
    options: { showPanel: false },
    // Mudamos para fullscreen para o fundo preencher tudo sem bordas brancas/escuras
    layout: 'fullscreen', 
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorBox = ({ name, hex }: { name: string, hex: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
    <div style={{ backgroundColor: hex, width: '100px', height: '100px', borderRadius: '8px', border: '1px solid #000', boxShadow: '2px 2px 0px #000' }} />
    <span style={{ marginTop: '8px', fontWeight: 'bold', fontFamily: '"Pixelify Sans", sans-serif' }}>{name}</span>
    <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{hex}</span>
  </div>
);

export const Paleta: Story = {
  render: () => (
    // 👇 A mágica do fundo claro e tela cheia acontece nesta div 👇
    <div style={{ 
      fontFamily: '"Roboto", "Inter", sans-serif', 
      color: '#000', 
      backgroundColor: '#FFFFFF', // O fundo creme lindo do seu projeto! (Pode trocar por #FFF se preferir)
      minHeight: '100vh', // Garante que cubra a tela toda até embaixo
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Identidade Visual</h1>
        <p style={{ marginBottom: '2rem' }}>
          Bem-vindo ao guia de estilos do meu portfólio pessoal! Aqui estão documentadas as decisões de design e a paleta de cores.
        </p>

        <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>Cores de Destaque</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
          <ColorBox name="Pink" hex="#FE87A4" />
          <ColorBox name="Pink10" hex="#fc41ae" />
          <ColorBox name="Lime" hex="#94EE9C" />
          <ColorBox name="Orange" hex="#FAC951" />
          <ColorBox name="Yellow" hex="#FFF982" />
          <ColorBox name="Blue" hex="#1CBFC1" />
          <ColorBox name="Purple" hex="#8C75F7" />
        </div>

        <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>Interface e Fundos</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <ColorBox name="Background" hex="#FCE6CA" />
          <ColorBox name="Black" hex="#000000" />
          <ColorBox name="White" hex="#FFFFFF" />
        </div>
      </div>
    </div>
  ),
};