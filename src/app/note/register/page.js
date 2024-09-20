import AdminOnlyContainer from "@/member/containers/AdminOnlyContainer";
import NoteUpdateContainer from "@/note/containers/NoteUpdateContainer";

const NoteRegisterPage = ({ searchParams }) => {
    return (
        <AdminOnlyContainer>
            <NoteUpdateContainer searchParams={searchParams}/>
        </AdminOnlyContainer>
    );
};

export default NoteRegisterPage;