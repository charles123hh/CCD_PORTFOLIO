const TagLabel = (props) => {
  let label = "<" + props.tag + "/>";
  console.log(props.text);
  if (props.text !== undefined) {
    label = "<" + props.tag + ">" + props.text + "</" + props.tag + "    >";
  }
  return label;
};

export default TagLabel;
