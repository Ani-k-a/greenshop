import React from 'react';
import Section from 'components/Section/Section';
import css from './Basket.module.css';

export default function Basket() {
  return (
    <Section>
      <div className={css.block}>Basket</div>
    </Section>
  );
}