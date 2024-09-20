import NotePostsContainer from "@/note/containers/NotePostsContainer";
import AdminOnlyContainer from "@/member/containers/AdminOnlyContainer";
const NotePostsPage = () => {
    return (
        <AdminOnlyContainer>
            <NotePostsContainer/>
        </AdminOnlyContainer>
    );
};

export default NotePostsPage;