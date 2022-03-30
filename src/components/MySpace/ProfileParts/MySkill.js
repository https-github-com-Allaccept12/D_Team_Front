import React from "react";
import { SkillThumbnail, Title, Button } from "../../../elements";
import skillList from "../../ArtWorks/skillList_code";


import tw from "tailwind-styled-components";

const Line = tw.hr`
border border-gray-600 my-6 w-5/6 mx-auto
`;
const Box = tw.div`
row-start-1 col-start-2 col-span-full justify-center items-center mx-auto
`;
const InnerBox = tw.div`
flex flex-wrap justify-center items-center mx-auto gap-8
`;

const Box02 = tw.div`
row-start-2 col-start-2 col-span-full justify-start items-start
`;

const InnerBox02 = tw.div`
flex flex-wrap justify-start items-start mx-auto gap-8 mt-20
`;

const MySkill = (props) => {
  const {info} = props
  const mainSkill = info.specialty.split('/');
  const subSkill = info.other_specialty.split('/');
  const mainSkillCode = []
  for (var item of mainSkill){
    for (var label of skillList){
      if (item === label.label) {
        mainSkillCode.push(label.value);
      }
    }
  }
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-start w-5/6 mx-auto">
        <Title size="3" className="mt-32">
          SKILLS
        </Title>
      </div>
      <Line />
      <div className="grid w-5/6 grid-cols-5 mx-auto">
        <Title size="4" className="col-start-1">
          main skill
        </Title>
        <Title size="4" className="col-start-1 mt-20">
          other
        </Title>

        <Box>
          <InnerBox>
            {mainSkillCode.map((item) => (
              <SkillThumbnail skill={item}/>
            ))}
          </InnerBox>
        </Box>

        <Box02>
          <InnerBox02>
            {subSkill.map((item) => (
              <Button size="3" color="4">
              {item}
            </Button>
            ))}
          </InnerBox02>
        </Box02>
      </div>
    </>
  );
};

export default MySkill;
