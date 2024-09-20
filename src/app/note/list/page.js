import AdminOnlyContainer from "@/member/containers/AdminOnlyContainer";
import NoteListContainer from "@/note/containers/NoteListContainer";

const NoteRegisterPage = ({ searchParams }) => {
    return (
        <AdminOnlyContainer>
            <NoteListContainer searchParams={searchParams}/>
        </AdminOnlyContainer>
    );
};

export default NoteRegisterPage;