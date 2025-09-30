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
  fontSizeText = '2.5rem',
}) => (
  <svg
    viewBox="0 0 500 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <text
      x={20}
      y={60}
      fill={textColor}
      fontSize={fontSizeText}
      letterSpacing="4px"
    >
      SURVEY
    </text>

    <circle
      cx={250}
      cy={50}
      r={35}
      stroke={iconColor}
      strokeWidth={2}
      fill="transparent"
    />

    <circle cx={244} cy={48} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={270} cy={32} r={1.5} stroke={iconColor} fill={iconColor} />
    <path
      d="M 244 48 A 30 30 0 0 0 270 32"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={238} cy={30} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={270} cy={60} r={1.5} stroke={iconColor} fill={iconColor} />
    <path
      d="M 238 30 A 30 30 0 0 1 270 60"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={232} cy={58} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={240} cy={75} r={1.5} stroke={iconColor} fill={iconColor} />
    <path
      d="M 232 58 A 30 30 0 0 0 240 75"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={228} cy={45} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={225} cy={75} r={0} stroke="transparent" />
    <path
      d="M 228 45 A 5.5 5 -30 0 0 225 75"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={253} cy={70} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={232} cy={20} r={0} stroke="transparent" />
    <path
      d="M 253 70 A 35 21 30 0 1 232 20"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />
    <circle cx={275} cy={74.5} r={0} stroke="transparent" />
    <path
      d="M 253 70 A 5 8 -30 0 0 275 74.5"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <circle cx={253} cy={25} r={1.5} stroke={iconColor} fill={iconColor} />
    <circle cx={267.5} cy={20} r={0} stroke="transparent" />
    <path
      d="M 253 25 A 5 3 -55 0 1 267.5 20"
      stroke={iconColor}
      fill="transparent"
      strokeWidth={1}
    />

    <text
      x={310}
      y={60}
      fill={textColor}
      fontSize={fontSizeText}
      letterSpacing="4px"
    >
      TOOLS
    </text>
  </svg>
);
