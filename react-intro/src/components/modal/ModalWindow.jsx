import { CardMedia, Paper } from "@mui/material";
import { ModalWrapper } from "./styled";

export default function ModalWindow({  setActive, content }) {
 const closeModal = () => {
    setActive();
    
  };

  return (
    <ModalWrapper>
      <Paper style={{ width: '400px', padding: '15px'}}>
        {content.description}
        <CardMedia
          sx={{ height: 300 }}
          image={content.img}
        />
        <button onClick={closeModal}>Закрыть</button>
        <button>Играть</button>
      </Paper>
    </ModalWrapper>
  );
};
