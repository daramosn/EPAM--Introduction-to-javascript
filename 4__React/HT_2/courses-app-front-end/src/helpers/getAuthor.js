import { mockedAuthorsList as AUTHORS } from "../constants";

export const getAuthorName = (authorId) => {
    const author = AUTHORS.find((author) => author.id === authorId);
    return author ? author.name : "";
};

export const getAuthorsNamesList = (authorIdList) => {
    return authorIdList.map(getAuthorName).join(", ");
};
