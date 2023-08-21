import { Box } from "@mui/material";
import { ContentItem } from "./ContentItem";

const contentArray = [
  {
    title: "Get things done",
    description:
      "breathe what model sit idea bridge many negative built leaving stick adventure diagram universe by drawn meant class settlers flat blanket facing rapidly hung",
    img: "/1.jpg",
  },
  {
    title: "Productivity is Brilliant",
    description:
      "stood child taken pale hot care poetry near train stairs claws central leather word making flag lunch thank sitting tribe brother heavy why way",
    img: "/2.jpg",
  },
  {
    title: "Fast Development",
    description:
      "clay melted handsome plan longer return worker class pleasure worse herd zoo passage use drive shadow month specific mistake hundred exciting observe combination mean",
    img: "/3.jpg",
  },
];

export const Content = () => {
  return (
    <Box
      bgcolor="#fbf2f2"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="10%"
    >
      {contentArray.map((content, i) => (
        <ContentItem
          key={i}
          title={content.title}
          description={content.description}
          img={content.img}
          swap={i % 2 === 0}
        />
      ))}
    </Box>
  );
};
