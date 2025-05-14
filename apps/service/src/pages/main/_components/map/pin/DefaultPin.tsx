import { Booth } from "@interfaces/booth";

interface DefautlPinProps
  extends Pick<Booth, "operatingStatus" | "totalWaitingTeams"> {}

const DefautlPin = (props: DefautlPinProps) => {
  const { operatingStatus, totalWaitingTeams = 0 } = props;

  const isOperating: boolean = operatingStatus === "operating";

  const getLabel = () => {
    switch (operatingStatus) {
      case "not_started":
        return "운영 전";
      case "finished":
        return "운영 종료";
      default:
        return totalWaitingTeams === 0
          ? `대기 없음`
          : `대기 ${totalWaitingTeams}팀`;
    }
  };

  const fillColor = isOperating ? "#E7EDFE" : "#F0F2F8";
  const strokeColor = isOperating ? "#1851FF" : "#B0B4BD";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="66"
      height="30"
      viewBox="0 0 66 30"
      fill="none"
    >
      <mask id="path-1-inside-1_2467_43397" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H30.2444L33.4645 30L36.6847 24H62C64.2091 24 66 22.2091 66 20V4C66 1.79086 64.2091 0 62 0H4Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H30.2444L33.4645 30L36.6847 24H62C64.2091 24 66 22.2091 66 20V4C66 1.79086 64.2091 0 62 0H4Z"
        fill={fillColor}
      />
      <path
        d="M30.2444 24L31.3898 23.3852L31.0221 22.7H30.2444V24ZM33.4645 30L32.3191 30.6148L33.4645 32.7491L34.61 30.6148L33.4645 30ZM36.6847 24V22.7H35.907L35.5392 23.3852L36.6847 24ZM1.3 4C1.3 2.50883 2.50883 1.3 4 1.3V-1.3C1.07289 -1.3 -1.3 1.07289 -1.3 4H1.3ZM1.3 20V4H-1.3V20H1.3ZM4 22.7C2.50883 22.7 1.3 21.4912 1.3 20H-1.3C-1.3 22.9271 1.07289 25.3 4 25.3V22.7ZM30.2444 22.7H4V25.3H30.2444V22.7ZM34.61 29.3852L31.3898 23.3852L29.0989 24.6148L32.3191 30.6148L34.61 29.3852ZM35.5392 23.3852L32.3191 29.3852L34.61 30.6148L37.8301 24.6148L35.5392 23.3852ZM62 22.7H36.6847V25.3H62V22.7ZM64.7 20C64.7 21.4912 63.4912 22.7 62 22.7V25.3C64.9271 25.3 67.3 22.9271 67.3 20H64.7ZM64.7 4V20H67.3V4H64.7ZM62 1.3C63.4912 1.3 64.7 2.50883 64.7 4H67.3C67.3 1.07289 64.9271 -1.3 62 -1.3V1.3ZM4 1.3H62V-1.3H4V1.3Z"
        fill={strokeColor}
        mask="url(#path-1-inside-1_2467_43397)"
      />
      <text
        x="50%"
        y="45%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={isOperating ? "#1851FF" : "#6B7280"}
        fontSize="10"
        fontWeight="bold"
      >
        {getLabel()}
      </text>
    </svg>
  );
};

export default DefautlPin;
