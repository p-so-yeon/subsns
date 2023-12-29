const Posting = () => {
    return (
<div>
    <Form>
        <TextArea placeholder = "무슨일이 일어나고 있나요?"/>
        <AttachFileButton>사진 추가</AttachFileButton>
        <AttachFileInput id ="file" accept = "image/*"></AttachFileInput>
        <Submitbtn/>
    </Form>
</div>
    )
}