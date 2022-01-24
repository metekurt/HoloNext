import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import constant from "../../constant";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Models(props) {
  const [image, setImage] = useState("");

  (function () {
    import(`../../images/${props.count}.png`).then((image) =>
      setImage(image.default)
    );
  })(props.count);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={4} spacing={0.5}>
        <Grid item xs={3}>
          <Item>
            {" "}
            <h4>{constant.titles[props.count - 1]}</h4>
            <hr />
            <p>{constant.texts[props.count - 1]}</p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <img src={image} className="model-image" alt="logo" />
        </Grid>
        <Grid item xs={3}>
          <Item>
            {" "}
            <h4>{constant.titles[constant.titles.length - props.count]}</h4>
            <hr />
            <p>{constant.texts[constant.texts.length - props.count]}</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Button
            href={`/view3d/${constant.sceneIds[props.count - 1]}`}
            variant="outlined"
            size="large"
          >
            View in 3D
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Models;
