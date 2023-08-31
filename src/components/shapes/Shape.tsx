import { CardTravelRounded } from "@mui/icons-material";

const Shape = () => {
  return (
    <div className="w-[150px] h-[150px] bg-red-100 rounded-full flex items-center justify-center  bg-opacity-20 backdrop-blur-lg drop-shadow-xl">
      <CardTravelRounded  sx={{width:"45px",height:"45px" ,opacity:50}} className="text-red-600 rotate-[-45deg]" />
    </div>
  );
};


export default Shape;