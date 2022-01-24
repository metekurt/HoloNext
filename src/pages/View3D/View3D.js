import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function View3D(props) {
  const sceneId = props.pathname.split("/")[2];

  return (
    <div className="holonext-viewer">
      <holonext-viewer
        style={{ height: "741px", width: "1584px" }}
        sceneId={sceneId}
      ></holonext-viewer>
      <a href="/">
        <CloseRoundedIcon />
      </a>
    </div>
  );
}

export default View3D;
