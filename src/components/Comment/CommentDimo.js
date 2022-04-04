import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentDeleteDimo, commentModifyDimo } from "../../redux/modules/dimo";
import { useInput } from "../../hooks";
import { Button, Profile, Text, Subtitle, InputNoTitle, HeartButton } from "../../elements";

const CommentDimo = (props) => {
    const {
        account_id,
        account_nickname,
        account_profile_img,
        comment_id,
        content,
        is_comment_like,
        like_count,
        modify_time,
    } = props;
    const [contentValue, setContentValue] = useState(content);
    const dispatch = useDispatch();
    const [commentContent, setContent] = useState("");
    const [modifyDiv, setModifyDiv] = useState(false);
    const validMaxLen = (value) => value.length <= 30;
    const name = useInput("", [validMaxLen]);

    useEffect(() => {
        setContent(contentValue);
    }, [contentValue]);

    const openModify = () => {
        setModifyDiv(!modifyDiv);
    };

    const modifyComment = () => {
        const content = name.value;
        const data = { content: content };
        console.log(content);
        dispatch(commentModifyDimo({ comment_id, data }));
        setContentValue(content);
        setContent(content);
        setModifyDiv(!modifyDiv);
    };

    const deleteComment = () => {
        dispatch(commentDeleteDimo(comment_id));
    };
    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-row justify-start">
                    <Profile size="5" className="hidden sm:flex" src={account_profile_img} />
                    <div className="flex flex-col ">
                        <div className="flex flex-row items-center gap-3 mt-1">
                            <Subtitle size="1" className="">
                                {account_nickname}
                            </Subtitle>
                            <Text size="4">
                                {modify_time.split("T")[0] +
                                    " " +
                                    modify_time.split("T")[1].split(".")[0].slice(undefined, 5)}
                            </Text>
                        </div>
                        {modifyDiv ? (
                            <div className="w-full ml-auto">
                                <InputNoTitle
                                    value={name.value}
                                    onChange={name.onChange}
                                    is_error={name.errors}
                                    is_value={name.value.length}
                                    cardsize="1"
                                    maxlen="30"
                                    width="2"
                                    is_submit
                                    placeholder={content}
                                    onSubmit={modifyComment}
                                />
                                <Button size="3" className="invisible ">
                                    제출
                                </Button>
                            </div>
                        ) : (
                            <Text size="2" className="m-1">
                                {content}
                            </Text>
                        )}
                    </div>
                </div>
                {!modifyDiv && (
                    <>
                        <button onClick={openModify}>수정</button>
                        <button onClick={deleteComment}>삭제</button>
                    </>
                )}
                <HeartButton like_cnt="4" is_like="" />
            </div>
        </>
    );
};

export default CommentDimo;
