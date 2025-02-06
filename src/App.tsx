import './App.css'

function Avatar() {  
  return (
    <img
      className="avatar"
    />
  );
}

interface BoxProps {
  size?: string | number;
}

function Box({ size = 's' }: BoxProps) {
  const boxStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
  };

  return (
    <div className="box" style={boxStyle}>
      CPEITEL
    </div>
  );
}

export default function Profile() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <h3>John Leo Medina</h3>
        <Avatar/>
        <Box size={100}/>
      </div>
    </div>
  );
}