import axios from "axios";

const host = `${import.meta.env.VITE_CHAT_API_HOST}`;

//채팅방 list Get
export const getChatRoomList = async (email) => {

    const res = await axios.get(`${host}/chatroom/list/${email}`);

    return res.data;
}

//채팅방 메세지 get
export const getChatMessages = async (id) => {

    const res = await axios.get(`${host}/chat/load/${id}`);

    return res.data;
}

//채팅방 나가기(DTO = email, roomId)
export const outChatRoom = async (dto) => {

    const res = await axios.put(`${host}/chatroom/out`, dto);

    return res.data;
}

//채팅하기(채팅방 있으면 반환, 없으면 새로 만들어서 반환)
export const findChatRoom = async (dto) => {

    const res = await axios.post(`${host}/chatroom/find`, dto);

    return res.data;
}