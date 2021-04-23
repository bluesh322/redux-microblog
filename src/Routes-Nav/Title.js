import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Title = () => {
  const { id } = useParams();
  const { title, description } = useSelector((st) => ({
    ...st.titles.titles,
  }));

  return (
    <Card key={id}>
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default Title;
