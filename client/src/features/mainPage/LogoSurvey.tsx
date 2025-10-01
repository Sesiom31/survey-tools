import React from 'react';

export interface LogoSurveyProps extends React.SVGProps<SVGSVGElement> {
  textColor?: string;
  iconColor?: string;
  className?: string;
  fontSizeText?: string;
}

export const LogoSurvey: React.FC<LogoSurveyProps> = ({
  textColor = '#ffffff',
  iconColor = '#ffffff',
  className = '',
  fontSizeText = '2rem',
}) => (
  <svg
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <circle
      cx={50}
      cy={50}
      r={35}
      stroke={iconColor}
      strokeWidth={2}
      fill="transparent"
    />

    <circle cx={44} cy={48} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={70} cy={32} r={1.5} stroke={iconColor} fill={iconColor} />
    <path
      d="M 44 48 A 30 30 0 0 0 70 32"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={38} cy={30} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={70} cy={60} r={1.5} stroke={iconColor} fill={iconColor} />
    <path
      d="M 38 30 A 30 30 0 0 1 70 60"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={32} cy={58} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={40} cy={75} r={1.5} stroke={iconColor} fill={iconColor} />
    <path
      d="M 32 58 A 30 30 0 0 0 40 75"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={28} cy={45} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={25} cy={75} r={0} stroke="transparent" />
    <path
      d="M 28 45 A 5.5 5 -30 0 0 25 75"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={53} cy={70} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={32} cy={20} r={0} stroke="transparent" />
    <path
      d="M 53 70 A 35 21 30 0 1 32 20"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />
    <circle cx={75} cy={74.5} r={0} stroke="transparent" />
    <path
      d="M 53 70 A 5 8 -30 0 0 75 74.5"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={53} cy={25} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={67.5} cy={20} r={0} stroke="transparent" />
    <path
      d="M 53 25 A 5 3 -55 0 1 67.5 20"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <text
      x={90}
      y={70}
      fill={textColor}
      fontSize={fontSizeText}
      letterSpacing="4px"
    >
      SURVEY
    </text>
  </svg>
);
