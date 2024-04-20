export default interface BoardListItem {
    boardNumber: number;
    title: string;
    content: string;
    boardTitleImage : string | null;
    favoriteCount: number;
    commentCount: number;
    viewCount: number;
    writeDatetime: String;
    writeNickName: String;
    writerProfileImage: string | null;

}