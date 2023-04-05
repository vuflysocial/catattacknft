type LevelNameProps = {
  level: 1 | 2 | 3;
};

const LevelName: React.FC<LevelNameProps> = ({ level }) => {
  switch (level) {
    case 1:
      return <span>🐱 Avatr Meloshian</span>;
    case 2:
      return <span>😾 Wizard Meloshian</span>;
    case 3:
      return <span>Warlock Meloshian</span>;
  }
};

export default LevelName;
