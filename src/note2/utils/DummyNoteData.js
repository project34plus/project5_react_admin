// DummyNoteData.js
export const generateDummyNotes = (count) => {
    const dummyNotes = [];
    for (let i = 1; i <= count; i++) {
        dummyNotes.push({
            nid: i,
            nName: `가짜 노트 ${i}`,
            category: `카테고리 ${i}`,
            rowsPerPage: Math.floor(Math.random() * 10) + 1, // 1~10 랜덤
            pageCount: Math.floor(Math.random() * 100) + 1, // 1~100 랜덤
        });
    }
    return dummyNotes;
};
