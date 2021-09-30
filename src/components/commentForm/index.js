import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const CommentForm = () => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user);
  return (
    <>
      <p>{user.name}:</p>
      {user &&
        user.comments.map((comment, index) => {
          return <p key={index}>{comment}</p>;
        })}
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Comentário"
        type="text"
      />
      <button onClick={() => dispatch(addCommentThunk(newComment))}>
        Enviar
      </button>
    </>
  );
};

export default CommentForm;
