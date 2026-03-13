import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Apresentação',
  parameters: {
    options: { showPanel: false },
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── tokens do projeto ────────────────────────────────────────────────────────
const colors = {
  pink:       { hex: '#FE87A4', label: 'Pink'       },
  pink10:     { hex: '#fc41ae', label: 'Pink10'     },
  lime:       { hex: '#94EE9C', label: 'Lime'       },
  orange:     { hex: '#FAC951', label: 'Orange'     },
  yellow:     { hex: '#FFF982', label: 'Yellow'     },
  blue:       { hex: '#1CBFC1', label: 'Blue'       },
  purple:     { hex: '#8C75F7', label: 'Purple'     },
};

const neutrals = {
  background: { hex: '#FCE6CA', label: 'Background' },
  black:      { hex: '#000000', label: 'Black'      },
  white:      { hex: '#FFFFFF', label: 'White'      },
};

const fonts = [
  { name: 'Pixelify Sans', sample: 'Hello World!',         use: 'Títulos e elementos retro'    },
  { name: 'Inter',         sample: 'Aa Bb Cc 0123',        use: 'Corpo de texto e UI'          },
  { name: 'Monospace',     sample: '$ initializing...',    use: 'Terminal e código'             },
];

const techStack = [
  { name: 'Astro',             color: '#FAC951' },
  { name: 'React',             color: '#1CBFC1' },
  { name: 'TypeScript',        color: '#8C75F7' },
  { name: 'Styled Components', color: '#FE87A4' },
  { name: 'Storybook',         color: '#94EE9C' },
  { name: 'Vite',              color: '#fc41ae' },
];

// ─── sub-componentes ──────────────────────────────────────────────────────────
const ColorChip = ({ hex, label }: { hex: string; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    <div style={{
      width: 80, height: 80,
      backgroundColor: hex,
      borderRadius: 10,
      border: '2px solid #000',
      boxShadow: '3px 3px 0px #000',
    }} />
    <span style={{ fontFamily: '"Pixelify Sans", sans-serif', fontSize: 13, fontWeight: 700 }}>
      {label}
    </span>
    <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#555' }}>{hex}</span>
  </div>
);

const Tag = ({ name, color }: { name: string; color: string }) => (
  <span style={{
    backgroundColor: color,
    border: '2px solid #000',
    borderRadius: 8,
    padding: '6px 14px',
    fontSize: 13,
    fontWeight: 700,
    fontFamily: '"Pixelify Sans", sans-serif',
    boxShadow: '2px 2px 0px #000',
    whiteSpace: 'nowrap',
  }}>
    {name}
  </span>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 48 }}>
    <h2 style={{
      fontFamily: '"Pixelify Sans", sans-serif',
      fontSize: 20,
      fontWeight: 700,
      borderBottom: '2px solid #000',
      paddingBottom: 8,
      marginBottom: 24,
      letterSpacing: 1,
    }}>
      {title}
    </h2>
    {children}
  </section>
);

// ─── story ────────────────────────────────────────────────────────────────────
export const BemVindo: Story = {
  name: 'Bem-vindo 👋',
  render: () => (
    <div style={{
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
      fontFamily: '"Inter", sans-serif',
      color: '#000',
      boxSizing: 'border-box',
    }}>

      {/* Hero */}
      <div style={{
        backgroundColor: '#FCE6CA',
        borderBottom: '2px solid #000',
        padding: '60px 40px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{
            fontFamily: '"Pixelify Sans", sans-serif',
            fontSize: 14,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 12,
            opacity: 0.7,
          }}>
            Design System
          </p>
          <h1 style={{
            fontFamily: '"Pixelify Sans", sans-serif',
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}>
            cecicaporale.com
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 540, margin: '0 0 28px', opacity: 0.8 }}>
            Documentação dos componentes do meu portfólio — 
            desenvolvidos com React, Styled Components e Storybook. 
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {techStack.map(t => <Tag key={t.name} name={t.name} color={t.color} />)}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 40px' }}>

        <Section title="🎨 Paleta de Cores">
          <p style={{ marginBottom: 20, fontSize: 14, opacity: 0.7 }}>
            Cores de destaque — usadas nos ícones, tooltips e backgrounds dos componentes.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
            {Object.values(colors).map(c => <ColorChip key={c.hex} {...c} />)}
          </div>
          <p style={{ marginBottom: 20, fontSize: 14, opacity: 0.7 }}>Neutras e background.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {Object.values(neutrals).map(c => <ColorChip key={c.hex} {...c} />)}
          </div>
        </Section>

        <Section title="✏️ Tipografia">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {fonts.map(f => (
              <div key={f.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '16px 20px',
                border: '2px solid #000',
                borderRadius: 10,
                boxShadow: '3px 3px 0px #000',
                backgroundColor: '#FCE6CA',
              }}>
                <div style={{ minWidth: 200 }}>
                  <span style={{ fontFamily: f.name, fontSize: 22 }}>{f.sample}</span>
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 13 }}>{f.name}</p>
                  <p style={{ margin: 0, fontSize: 12, opacity: 0.6 }}>{f.use}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="📐 Padrões de Componente">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.8 }}>
            {[
              ['Props transientes', 'Prefixo $ para props que não devem vazar pro DOM — ex: $colorKey, $isOpen, $width'],
              ['isDraggable', 'Todo componente arrastável aceita isDraggable={false} para uso no Storybook'],
              ['DotColorKey', 'Tipo compartilhado para cores do tema — evita strings soltas e garante dark mode'],
              ['IconType',    'Ícones guardados como componente (IconType), não como JSX — permite serialização nos controls'],
              ['Data files',  'Dados separados em arquivos *Data.ts — componente não conhece seus defaults diretamente'],
            ].map(([title, desc]) => (
              <div key={title as string} style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 16,
                padding: '12px 16px',
                borderLeft: '3px solid #94EE9C',
                backgroundColor: '#f9f9f9',
                borderRadius: '0 8px 8px 0',
              }}>
                <span style={{ fontWeight: 700, fontFamily: 'monospace', fontSize: 13 }}>{title}</span>
                <span style={{ opacity: 0.75 }}>{desc}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Rodapé */}
        <div style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: '2px solid #000',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 13,
          opacity: 0.6,
        }}>
          <span style={{ fontFamily: '"Pixelify Sans", sans-serif' }}>
            © {new Date().getFullYear()} Maria Cecília Caporale
          </span>
          <a href="https://cecicaporale.com" style={{ color: '#000' }}>
            cecicaporale.com ↗
          </a>
        </div>
      </div>
    </div>
  ),
};