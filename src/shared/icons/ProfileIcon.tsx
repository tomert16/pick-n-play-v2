const ProfileIcon = ({ playerFirstInitial }: string) => {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={44} height={44} rx={22} fill="#3d405b" />
      {/* <path
          d="M15 31C15 27.134 18.134 24 22 24C25.866 24 29 27.134 29 31M26 17C26 19.2091 24.2091 21 22 21C19.7909 21 18 19.2091 18 17C18 14.7909 19.7909 13 22 13C24.2091 13 26 14.7909 26 17Z"
          stroke="#1B1B1B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        /> */}
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fill="#FFFFFF"
      >
        {playerFirstInitial}
      </text>
    </svg>
  );
};

export default ProfileIcon;
