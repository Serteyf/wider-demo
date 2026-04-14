import React from 'react';
import styles from '../styles/statsOverlay.module.css';

const StatsOverlay = () => {
  const stats = [
    {
      number: '+370',
      text: 'Sitios Auditados',
      highlight: false,
    },
    {
      number: '+2k',
      text: 'Capacitaciones',
      highlight: false,
    },
    {
      number: '+170',
      text: 'Demandas Refutadas',
      highlight: false,
    },
    {
      number: '+50',
      text: 'Clientes Felices',
      description: 'La atención al cliente es uno de los pilares fundamentales de nuestro servicio',
      highlight: true,
    },
  ];

  return (
    <div className={styles.statsOverlayWrapper}>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${styles.statCard} ${stat.highlight ? styles.statCardHighlight : ''}`}
          >
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statText}>{stat.text}</div>
              {stat.description && (
                <div className={styles.statDescription}>{stat.description}</div>
              )}
            </div>
            {stat.highlight && (
              <div className={styles.arrowCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverlay;

