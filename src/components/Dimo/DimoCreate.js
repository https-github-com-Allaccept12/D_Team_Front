import React, { useState } from "react";
import {
    Button,
    Title,
    InputNoTitle,
    Hashtag,
    Subtitle,
    SelectBoxCategory,
    Text,
    FileUploadDimo,
} from "../../elements";

import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewDimo } from "../../redux/modules/dimo";
import tw from "tailwind-styled-components";
import JobOptions from "../../elements/Tools/JobOptions";
import { useInput } from "../../hooks";

const Grid = tw.div`
bg-gray-100 h-full xl:p-10
`;

const Body = tw.div`
md:w-4/5 flex mx-auto flex-col pt-20
`;

const InnerGrid = tw.div`
w-full bg-white
`;

const DimoCreate = () => {
    const location = useLocation();
    const history = useHistory();
    const title = useInput("", []);
    const content = useInput("", []);
    const a = location.pathname;
    const dispatch = useDispatch();
    const JobOptions = [
        { value: "UI & UX", label: "UI & UX" },
        { value: "패션", label: "패션" },
        { value: "타이포그래피", label: "타이포그래피" },
        { value: "공예", label: "공예" },
        { value: "패키지", label: "패키지" },
        { value: "그래픽", label: "그래픽" },
        { value: "영상/모션", label: "영상/모션" },
        { value: "제품", label: "제품" },
        { value: "게임/캐릭터", label: "게임/캐릭터" },
        { value: "브랜딩/편집", label: "브랜딩/편집" },
        { value: "건축/인테리어/환경", label: "건축/인테리어/환경" },
    ];
    const [selected, setSelected] = useState("");

    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    };

    const status = a.split("/")[3];

    const data = {
        title: title.value,
        category: selected,
        content: content.value,
        img: [{ img_url: "" }],
        is_selected: "",
        board: status,
    };
    console.log(data);
    //태그는 어디에...
    //이미지 등록하기
    const sandData = () => {
        const formData = new FormData();
        formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
        dispatch(CreateNewDimo(formData));
        // console.log(formData);
        history.replace("/dimo/qna/all");
    };

    if (status === "qna")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">질문하기</Title>
                        <Subtitle size="1">디자이너님들에게 질문해보세요! 멋진 정보를 얻을 수 있을거에요!</Subtitle>

                        <InnerGrid>
                            <div className="grid grid-cols-2 p-8 gap-4">
                                <select
                                    className="appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    onChange={handleChangeSelect}
                                    value={selected}
                                >
                                    <option>카테고리를 선택해주세요</option>
                                    {JobOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <Hashtag />
                            </div>
                            <div className="px-8 flex flex-col gap-7">
                                <InputNoTitle placeholder="제목" value={title.value} onChange={title.onChange} />
                                <InputNoTitle
                                    textarea
                                    maxlen="80"
                                    placeholder="내용"
                                    value={content.value}
                                    onChange={content.onChange}
                                />
                            </div>
                            <div className="p-8">
                                <div className="bg-white p-10 border border-dpurple-200 border-dashed mx-auto">
                                    <FileUploadDimo types="qna" />
                                </div>
                            </div>
                            <div className="flex justify-center flex-row items-center gap-10 py-10 mb-10 bg-white">
                                <Button size="2" onClick={sandData}>
                                    등록하기
                                </Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );

    if (status === "info")
        return (
            <>
                <Grid>
                    <Body>
                        <Title size="2">정보공유하기</Title>
                        <Subtitle size="1">
                            알고 계신 정보를 공유해주세요! 다른 디자이너분들께 큰 도움이 될 거에요!
                        </Subtitle>

                        <InnerGrid>
                            <div className="grid grid-cols-2 p-8 gap-4">
                                <select
                                    className="appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base font-min2
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded-md
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    onChange={handleChangeSelect}
                                    value={selected}
                                >
                                    <option>카테고리를 선택해주세요</option>
                                    {JobOptions.map((item, index) => (
                                        <option key={index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                <Hashtag />
                            </div>
                            <div className="px-8 flex flex-col gap-7">
                                <InputNoTitle placeholder="제목" value={title.value} onChange={title.onChange} />
                                <InputNoTitle
                                    textarea
                                    maxlen="80"
                                    placeholder="내용"
                                    value={content.value}
                                    onChange={content.onChange}
                                />
                            </div>
                            <div className="p-8">
                                <div className="bg-white p-10 border border-dpurple-200 border-dashed mx-auto">
                                    <FileUploadDimo types="shared" />
                                </div>
                            </div>
                            <div className="flex justify-center flex-row items-center gap-10 py-10 mb-10 bg-white">
                                <Button size="2">등록하기</Button>
                            </div>
                        </InnerGrid>
                    </Body>
                </Grid>
            </>
        );
    else return null;
};

export default DimoCreate;
