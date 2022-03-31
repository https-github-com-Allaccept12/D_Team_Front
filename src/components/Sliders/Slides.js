import React from "react";
import { Label, Title, HeartButton, Text, Card, Profile, Button, Thumbnail, IconBtn } from "../../elements";
import tw from "tailwind-styled-components";

import { useHistory, Link } from "react-router-dom";
import { DimoWorkPost } from "../Dimo";
const IconBox = tw.div`
absolute bottom-6 px-9 w-full
`;

const Slides = (props) => {
    const { type, list } = props;

    let history = useHistory();
    if (type === "main")
        return (
            <>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white bg-center bg-cover rounded-lg shadow-md">
                        <Card
                            size="5"
                            types="text"
                            src="https://user-images.githubusercontent.com/89088205/155067792-882e3507-e664-4b31-ad9a-4b7abf4af948.jpg"
                        />

                        <div
                            className=" absolute top-0 
        w-[18.75rem] h-[22.813rem] rounded-lg"
                        >
                            <div className="flex flex-row items-center justify-evenly shrink-0 ml-[0.8rem] mt-3 gap-3">
                                <div
                                    className=" w-[8.375rem]
           h-[12.5rem] rounded-lg"
                                >
                                    <Thumbnail
                                        size="6"
                                        src={props.Thumbnail}
                                        className="object-cover object-center overflow-hidden"
                                    />
                                </div>
                                <div
                                    className="bg-yellow-200 w-[8.375rem]
           h-[12.5rem] rounded-lg"
                                >
                                    <Thumbnail
                                        size="6"
                                        src={props.Thumbnai2}
                                        className="object-cover object-center overflow-hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="-mt-36 overflow-hidden bg-white
        rounded-b-xl w-[18.75rem] h-[8.9rem]"
                    >
                        <div className="absolute bottom-[5rem] pl-6 hover:scale-110 cursor-pointer">
                            <Profile size="3" src={props.image} />
                        </div>
                        <div className="pt-6 pl-40">
                            <Title size="5" className="truncate">
                                {props.nickname} 님
                            </Title>
                            <div className="-mt-1">
                                <Text size="5">{props.job} </Text>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            {!props.follow ? (
                                <Button size="3" color="1">
                                    팔로우
                                </Button>
                            ) : (
                                <Button size="3" color="4">
                                    팔로잉
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    if (type === "artwork")
        return (
            <>
                <div className="rounded-lg">
                    <Card size="4" src="https://thumb.ac-illust.com/a5/a5b68711f17ff70ea9974c0a32a2fcb5_t.jpeg" />
                    <div className="absolute bottom-3 ">
                        <div className="ml-2 rounded-b-lg bg-dgray-500 opacity-80 w-c04 h-14">
                            <div className="flex items-center justify-center pt-3 font-min1">프로젝트 이름</div>
                        </div>
                    </div>
                </div>
            </>
        );

    if (type === "dimo" && list === "qna")
        return (
            <>
                <>
                    <Link to="/dimo/qnadetail">
                        <div className="w-[32.5rem] h-[18.75rem] rounded-lg">
                            <div className="absolute w-[32.5rem] h-[18.75rem] bg-dpurple-200 rounded-lg">
                                <div>
                                    <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                        <Profile
                                            size="6"
                                            src="http://kids.donga.com/www/data/news/201408/2014080726.jpg"
                                            main
                                        />
                                    </div>
                                    <div className="absolute top-7 left-28">
                                        <div className="flex flex-row gap-1">
                                            <Label size="1" color="4">
                                                취준생
                                            </Label>
                                            <Label size="1" color="5">
                                                진로고민
                                            </Label>
                                        </div>
                                        <Title size="6">이런이런 질문들이 있어여</Title>
                                    </div>
                                </div>
                                <div className="absolute px-10 top-28">
                                    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                        안녕하세요. UI / UX 디자이너를 꿈꾸고 있는 대학교 3학년 학생입니다. 다름이
                                        아니라 고학년이 되며 제 미래에 대한 고민이 많아져서 많은 디자이너 분들의 의견을
                                        얻고자 글을 올리게 되었습니다. 제 전공은 산업디자인입니다. 때문에 구체적인
                                        시각디자인과 UIUX 관련 수업을 수강한 적은 없습니다.
                                    </Text>
                                    <Text size="2">(더보기)</Text>
                                </div>
                                <IconBox>
                                    <div className="flex flex-row justify-end">
                                        {/* 여기가 디테일링크 */}

                                        <div className="flex flex-row gap-5">
                                            <IconBtn name="Talk" iconSize="20" count="4" />
                                            <IconBtn name="HeartE" iconSize="20" count="4" />
                                        </div>
                                    </div>
                                </IconBox>
                            </div>
                        </div>
                    </Link>
                </>
            </>
        );
    if (type === "dimo" && list === "shared")
        return (
            <>
                <>
                    <Link to="/dimo/shareddetail">
                        <div className="w-[32.5rem] h-[18.75rem] rounded-lg">
                            <div className="absolute w-[32.5rem] h-[18.75rem] bg-dpurple-200 rounded-lg">
                                <div>
                                    <div className="absolute pl-8 cursor-pointer top-7 hover:scale-110">
                                        <Profile
                                            size="6"
                                            src="http://kids.donga.com/www/data/news/201408/2014080726.jpg"
                                            main
                                        />
                                    </div>
                                    <div className="absolute top-7 left-28">
                                        <div className="flex flex-row gap-1">
                                            <Label size="1" color="4">
                                                취준생
                                            </Label>
                                            <Label size="1" color="5">
                                                진로고민
                                            </Label>
                                        </div>
                                        <Title size="6">꿀팁 공유 공유 </Title>
                                    </div>
                                </div>
                                <div className="absolute px-10 top-28">
                                    <Text size="2" className="flex flex-wrap w-full h-24 overflow-hidden text-ellipsis">
                                        공유하기 공유하기 나는 꿀팁
                                    </Text>
                                    <Text size="2">(더보기)</Text>
                                </div>
                                <IconBox>
                                    <div className="flex flex-row justify-end">
                                        <div className="flex flex-row gap-5">
                                            <IconBtn name="Talk" iconSize="20" count="4" />
                                            <IconBtn name="HeartE" iconSize="20" count="4" />
                                        </div>
                                    </div>
                                </IconBox>
                            </div>
                        </div>
                    </Link>
                </>
            </>
        );
};

export default Slides;
